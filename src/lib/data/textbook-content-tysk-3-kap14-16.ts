/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 3 - Kapittel 14-16 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 14: Übersetzung und Sprachvermittlung (14.1-14.4)
 * - Kapittel 15: Interkulturelle Kommunikation (15.1-15.4)
 * - Kapittel 16: Prüfungsvorbereitung und Wiederholung (16.1-16.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14: Übersetzung und Sprachvermittlung
// ============================================================================

// --- 14.1: Übersetzungstechniken ---
export const CHAPTER_TYSK_3_14_1: TextbookChapter = {
  id: 'tysk-3-14-1',
  courseId: 'tysk-3',
  chapterNumber: '14.1',
  title: 'Übersetzungstechniken',
  subtitle: 'Oversettelsesteknikker',
  description: 'Lær om ulike oversettelsesteknikker mellom tysk og norsk, inkludert direkte og fri oversettelse, ekvivalens og transposisjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke varierte strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-3-14-1-intro',
      type: 'text',
      content: `## Übersetzungstechniken – Oversettelsesteknikker

Oversettelse mellom tysk og norsk er langt mer enn å bytte ut ord fra ett språk til et annet. Gode oversettelser krever at man forstår både utgangsspråket (die Ausgangssprache) og målspråket (die Zielsprache) på et dypt nivå – inkludert grammatikk, idiomer, kulturelle referanser og stilnivå.

I dette kapittelet skal vi se på de viktigste oversettelseteknikkene og når de brukes:

| Tysk | Norsk |
|------|-------|
| die Übersetzung | oversettelsen |
| die wörtliche Übersetzung | den ordrett oversettelsen |
| die freie Übersetzung | den frie oversettelsen |
| die Äquivalenz | ekvivalensen |
| die Transposition | transposisjonen |
| die Ausgangssprache | utgangsspråket |
| die Zielsprache | målspråket |
| der Übersetzer / die Übersetzerin | oversetteren |`,
    },
    {
      id: 'tysk-3-14-1-def-1',
      type: 'definition',
      title: 'Wörtliche vs. freie Übersetzung',
      content: `**Die wörtliche Übersetzung** (direkte/ordrett oversettelse) oversetter ord for ord fra utgangsspråket til målspråket. Denne teknikken fungerer best når språkene har lignende strukturer.

**Die freie Übersetzung** (fri oversettelse) gjengir meningen i originalteksten uten å følge den opprinnelige ordstillingen eller ordvalget slavisk. Her prioriteres naturlig og idiomatisk språk i målspråket.

**Når brukes hva?**
- Ordrett oversettelse: Fagtermer, juridiske tekster, tekniske manualer
- Fri oversettelse: Litteratur, reklame, idiomatiske uttrykk, humor`,
    },
    {
      id: 'tysk-3-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Ordrett vs. fri oversettelse',
      problem: `Sammenlign ordrett og fri oversettelse av disse tyske setningene:

1. "Er hat ins Gras gebissen."
2. "Das ist nicht mein Bier."
3. "Sie hat einen Vogel."
4. "Da liegt der Hund begraben."`,
      solution: `**1. "Er hat ins Gras gebissen."**
- Ordrett: "Han har bitt i gresset."
- Fri: "Han har gått bort." / "Han døde."
- (Tysk idiom for å dø – den ordrett oversettelsen er meningsløs på norsk)

**2. "Das ist nicht mein Bier."**
- Ordrett: "Det er ikke mitt øl."
- Fri: "Det er ikke mitt problem." / "Det angår ikke meg."
- (Norsk har et lignende uttrykk: "ikke min kopp te")

**3. "Sie hat einen Vogel."**
- Ordrett: "Hun har en fugl."
- Fri: "Hun er gal." / "Hun er ikke riktig klok."
- (Tysk idiom – å ha en fugl betyr å være sprø)

**4. "Da liegt der Hund begraben."**
- Ordrett: "Der ligger hunden begravet."
- Fri: "Der ligger hunden begravet." / "Det er der problemet ligger."
- (Her fungerer faktisk en delvis ordrett oversettelse, fordi uttrykket finnes i begge språk!)`,
    },
    {
      id: 'tysk-3-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken oversettelsesteknikk er mest egnet for å oversette idiomatiske uttrykk?',
        options: [
          { id: 'a', text: 'Wörtliche Übersetzung (ordrett oversettelse)', isCorrect: false },
          { id: 'b', text: 'Freie Übersetzung (fri oversettelse)', isCorrect: true },
          { id: 'c', text: 'Maschinelle Übersetzung (maskinoversettelse)', isCorrect: false },
          { id: 'd', text: 'Interlinearübersetzung (interlineær oversettelse)', isCorrect: false },
        ],
        solution: 'Fri oversettelse (freie Übersetzung) er best egnet for idiomatiske uttrykk, fordi ordrett oversettelse ofte gir meningsløse eller misvisende resultater. Man må formidle innholdet og funksjonen til idiomet, ikke de enkelte ordene.',
      },
    },
    {
      id: 'tysk-3-14-1-def-2',
      type: 'definition',
      title: 'Äquivalenz und Transposition',
      content: `**Die Äquivalenz** (ekvivalens) innebærer å finne et uttrykk i målspråket som har tilsvarende funksjon og virkning som originalen, selv om ordene er helt ulike. Dette er spesielt viktig ved ordspill, vittigheter og kulturelle referanser.

**Die Transposition** (transposisjon) innebærer å endre ordklasse under oversettelsen – for eksempel å gjøre et tysk substantiv om til et norsk verb, eller en tysk passivkonstruksjon til en norsk aktivkonstruksjon.

**Eksempler på transposisjon:**
| Tysk (substantiv) | Norsk (verb) |
|-------------------|-------------|
| bei seiner Ankunft | da han ankom |
| nach langer Überlegung | etter å ha tenkt seg om lenge |
| trotz seines Schweigens | selv om han tidde |`,
    },
    {
      id: 'tysk-3-14-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Transposisjon i praksis',
      problem: `Oversett disse setningene fra tysk til norsk ved hjelp av transposisjon. Endre ordklasse der det gir bedre norsk:

1. "Nach eingehender Prüfung der Unterlagen wurde der Antrag genehmigt."
2. "Unter Berücksichtigung aller Umstände ist eine Verurteilung unwahrscheinlich."
3. "Die Regierung betonte die Notwendigkeit einer baldigen Lösung."`,
      solution: `**1. "Nach eingehender Prüfung der Unterlagen wurde der Antrag genehmigt."**
- Ordrett: "Etter inngående prøving av dokumentene ble søknaden godkjent."
- Med transposisjon: "Etter at dokumentene var grundig gjennomgått, ble søknaden godkjent."
- (Substantiv «Prüfung» → verb «gjennomgått»)

**2. "Unter Berücksichtigung aller Umstände ist eine Verurteilung unwahrscheinlich."**
- Ordrett: "Under hensyntagen til alle omstendigheter er en domfellelse usannsynlig."
- Med transposisjon: "Når man tar alle omstendigheter i betraktning, er det usannsynlig at vedkommende blir dømt."
- (Substantiv «Berücksichtigung» → verb «tar i betraktning»; «Verurteilung» → verb «bli dømt»)

**3. "Die Regierung betonte die Notwendigkeit einer baldigen Lösung."**
- Ordrett: "Regjeringen understreket nødvendigheten av en snarlig løsning."
- Med transposisjon: "Regjeringen understreket at det var nødvendig å finne en løsning raskt."
- (Substantiv «Notwendigkeit» → adjektiv «nødvendig»; «Lösung» → verb «finne en løsning»)`,
    },
    {
      id: 'tysk-3-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til naturlig norsk. Bruk transposisjon der det er nødvendig.',
        subTasks: [
          { label: 'a', task: 'Bei seiner Abreise war das Wetter schlecht.', solution: 'Da han reiste, var været dårlig. (Substantiv «Abreise» → verb «reiste»)' },
          { label: 'b', task: 'Trotz wiederholter Versuche gelang es ihm nicht.', solution: 'Selv om han forsøkte gang på gang, lyktes han ikke. (Substantiv «Versuche» → verb «forsøkte»)' },
          { label: 'c', task: 'Die sofortige Benachrichtigung der Polizei ist erforderlich.', solution: 'Politiet må varsles umiddelbart. (Substantiv «Benachrichtigung» → verb «varsles»)' },
          { label: 'd', task: 'Wegen seiner ständigen Verspätung wurde er entlassen.', solution: 'Fordi han stadig kom for sent, ble han oppsagt. (Substantiv «Verspätung» → verb «kom for sent»)' },
        ],
        solution: 'a) Da han reiste, var været dårlig. b) Selv om han forsøkte gang på gang, lyktes han ikke. c) Politiet må varsles umiddelbart. d) Fordi han stadig kom for sent, ble han oppsagt.',
        hints: ['Tysk bruker ofte substantiv der norsk foretrekker verb', 'Preposisjon + substantiv kan ofte oversettes med leddsetning'],
      },
    },
    {
      id: 'tysk-3-14-1-text-3',
      type: 'text',
      content: `## Oversettelsesutfordringer mellom tysk og norsk

Selv om tysk og norsk er beslektede germanske språk, finnes det mange utfordringer:

**1. Sammensatte ord (Komposita)**
Tysk er berømt for sine lange sammensatte ord. Disse må ofte løses opp i norsk:
- Geschwindigkeitsbeschränkung → fartsgrense
- Rechtsschutzversicherung → rettshjelpsforsikring
- Straßenverkehrsordnung → veitrafikkloven

**2. Nominalstil vs. verbalstil**
Tysk foretrekker ofte substantivering (Nominalstil), mens norsk flyter bedre med verb:
- Tysk: "Die Durchführung der Untersuchung..." (Gjennomføringen av undersøkelsen...)
- Norsk: "Da undersøkelsen ble gjennomført..."

**3. Passiv vs. aktiv**
Tysk bruker passiv langt oftere enn norsk:
- Tysk: "Es wurde beschlossen, dass..."
- Norsk: "De besluttet at..." / "Man besluttet at..."

**4. Verbplassering**
Tyske leddsetninger har verbet til slutt, noe som krever omstrukturering:
- Tysk: "...weil er gestern nach Hause gegangen ist."
- Norsk: "...fordi han gikk hjem i går."`,
    },
    {
      id: 'tysk-3-14-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Oversettelse av en kort tekst',
      problem: `Oversett denne teksten til naturlig norsk. Bruk de teknikkene du har lært:

"Die zunehmende Digitalisierung der Arbeitswelt hat zu einer grundlegenden Veränderung der Anforderungen an Arbeitnehmer geführt. Insbesondere die Fähigkeit zur Anpassung an neue Technologien wird von Experten als Schlüsselkompetenz des 21. Jahrhunderts bezeichnet. Unternehmen, die in die Weiterbildung ihrer Mitarbeiter investieren, sind besser auf die Herausforderungen der Zukunft vorbereitet."`,
      solution: `**Oversettelse:**
"Den økende digitaliseringen av arbeidslivet har ført til grunnleggende endringer i kravene som stilles til arbeidstakere. Eksperter peker spesielt på evnen til å tilpasse seg ny teknologi som en nøkkelkompetanse i det 21. århundret. Bedrifter som investerer i videreutdanning av sine ansatte, er bedre rustet for fremtidens utfordringer."

**Oversettelsesgrep brukt:**
- **Transposisjon:** "Fähigkeit zur Anpassung" (substantiv) → "evnen til å tilpasse seg" (verb)
- **Passiv → aktiv:** "wird von Experten als... bezeichnet" → "Eksperter peker på... som"
- **Sammensatt ord:** "Schlüsselkompetenz" → "nøkkelkompetanse" (dette fungerer ordrett)
- **Fri oversettelse:** "auf die Herausforderungen vorbereitet" → "rustet for utfordringene"`,
    },
    {
      id: 'tysk-3-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett følgende avsnitt til naturlig norsk. Bruk ulike oversettelsesteknikker og unngå ordrett oversettelse.',
        subTasks: [
          {
            label: 'a',
            task: '"Aufgrund der steigenden Nachfrage nach erneuerbaren Energien hat die Bundesregierung ein umfassendes Förderprogramm beschlossen."',
            solution: 'På grunn av den økende etterspørselen etter fornybar energi har den tyske regjeringen vedtatt et omfattende støtteprogram.',
          },
          {
            label: 'b',
            task: '"Es bleibt abzuwarten, ob die geplanten Maßnahmen den gewünschten Effekt erzielen werden."',
            solution: 'Det gjenstår å se om de planlagte tiltakene vil ha den ønskede effekten.',
          },
        ],
        solution: 'a) På grunn av den økende etterspørselen etter fornybar energi har den tyske regjeringen vedtatt et omfattende støtteprogram. b) Det gjenstår å se om de planlagte tiltakene vil ha den ønskede effekten.',
        hints: ['Let etter steder der du kan bruke transposisjon', 'Vurder om passiv bør gjøres om til aktiv'],
      },
    },
    {
      id: 'tysk-3-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer transposisjon i oversettelse?',
        options: [
          { id: 'a', text: 'Å oversette ord for ord fra utgangsspråk til målspråk', isCorrect: false },
          { id: 'b', text: 'Å endre ordklasse under oversettelsen, f.eks. substantiv til verb', isCorrect: true },
          { id: 'c', text: 'Å utelate deler av teksten som ikke er relevant for målgruppen', isCorrect: false },
          { id: 'd', text: 'Å legge til ekstra forklaringer som ikke finnes i originalteksten', isCorrect: false },
        ],
        solution: 'Transposisjon (die Transposition) innebærer å endre ordklasse under oversettelsen. For eksempel kan et tysk substantiv oversettes med et norsk verb: "nach seiner Ankunft" → "da han ankom".',
      },
    },
    {
      id: 'tysk-3-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser hvilken oversettelsesteknikk som er brukt i hvert tilfelle: wörtliche Übersetzung, freie Übersetzung, Äquivalenz eller Transposition.',
        subTasks: [
          { label: 'a', task: '"Das Buch liegt auf dem Tisch." → "Boken ligger på bordet."', solution: 'Wörtliche Übersetzung – ordrett oversettelse fungerer her fordi setningsstrukturen er lik.' },
          { label: 'b', task: '"Daumen drücken" → "Holde tommelen" / "Krysse fingrene"', solution: 'Äquivalenz – norsk og tysk har lignende, men ikke identiske uttrykk for å ønske lykke til.' },
          { label: 'c', task: '"Bei Einbruch der Dunkelheit" → "Da det ble mørkt"', solution: 'Transposition – substantivet «Einbruch» og «Dunkelheit» erstattes med verb og adjektiv.' },
          { label: 'd', task: '"Schadenfreude" → "skadefryd"', solution: 'Wörtliche Übersetzung – norsk har lånt dette begrepet direkte fra tysk.' },
        ],
        solution: 'a) Wörtliche Übersetzung, b) Äquivalenz, c) Transposition, d) Wörtliche Übersetzung',
        hints: ['Se på om ordklassen endres', 'Vurder om ordene har direkte paralleller i målspråket'],
      },
    },
    {
      id: 'tysk-3-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett på fire sentrale oversettelsesteknikker:

- **Wörtliche Übersetzung** (ordrett oversettelse): Fungerer best når språkene har lik struktur og direkte ordkorrespondanser. Vanlig for fagtermer og enkle utsagn.

- **Freie Übersetzung** (fri oversettelse): Gjengir meningen uten å følge originalens ordvalg eller struktur. Nødvendig for idiomer, humor og kulturelle referanser.

- **Äquivalenz** (ekvivalens): Finner uttrykk i målspråket med tilsvarende funksjon og virkning. Spesielt viktig for ordspill og faste uttrykk.

- **Transposition** (transposisjon): Endrer ordklasse under oversettelsen. Typisk: tysk substantiv → norsk verb. Gir ofte mer naturlig norsk.

**Hovedutfordringer tysk–norsk:**
- Tyske sammensatte ord (Komposita)
- Nominalstil vs. verbalstil
- Passiv vs. aktiv
- Verbplassering i leddsetninger`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Übersetzung', definition: 'Oversettelse – prosessen med å overføre tekst fra ett språk til et annet' },
    { term: 'die wörtliche Übersetzung', definition: 'Ordrett oversettelse som følger originaltekstens struktur og ordvalg direkte' },
    { term: 'die freie Übersetzung', definition: 'Fri oversettelse som prioriterer naturlig målspråk fremfor ordrett gjengivelse' },
    { term: 'die Äquivalenz', definition: 'Ekvivalens – å finne et uttrykk i målspråket med tilsvarende funksjon og virkning' },
    { term: 'die Transposition', definition: 'Oversettelsesteknikk der man endrer ordklasse, f.eks. substantiv til verb' },
    { term: 'die Ausgangssprache', definition: 'Utgangsspråket – språket man oversetter fra' },
    { term: 'die Zielsprache', definition: 'Målspråket – språket man oversetter til' },
    { term: 'die Nominalstil', definition: 'Nominalstil – bruk av substantiverte uttrykk, typisk for formell tysk' },
  ],
};

// --- 14.2: Falsche Freunde und Interferenz ---
export const CHAPTER_TYSK_3_14_2: TextbookChapter = {
  id: 'tysk-3-14-2',
  courseId: 'tysk-3',
  chapterNumber: '14.2',
  title: 'Falsche Freunde und Interferenz',
  subtitle: 'Falske venner og interferens',
  description: 'Lær om vanlige falske venner mellom tysk og norsk, grammatisk interferens, preposisjonsfeller og ordstillingsfeil.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke et bredt repertoar av språklige virkemidler og avanserte språkstrukturer',
  ],
  content: [
    {
      id: 'tysk-3-14-2-intro',
      type: 'text',
      content: `## Falsche Freunde und Interferenz

Når to språk er nært beslektet – som tysk og norsk – oppstår det lett forveksling. **Falsche Freunde** (falske venner) er ord som ser like ut i begge språk, men har ulik betydning. **Interferenz** (interferens) er feil som oppstår fordi strukturer fra morsmålet overføres til fremmedspråket.

Disse feilene er blant de vanligste for norske tyskelever, og de kan føre til alvorlige misforståelser. I dette kapittelet kartlegger vi de viktigste fellene.

| Tysk | Norsk |
|------|-------|
| der falsche Freund | den falske vennen |
| die Interferenz | interferensen |
| die Verwechslung | forvekslingen |
| das Missverständnis | misforståelsen |
| der Anglizismus | anglisismen |
| die Lehnübersetzung | låneoversettelsen |`,
    },
    {
      id: 'tysk-3-14-2-def-1',
      type: 'definition',
      title: 'Was sind falsche Freunde?',
      content: `**Falsche Freunde** (falske venner / faux amis) er ordpar i to ulike språk som ligner hverandre i form (uttale eller skrivemåte), men som har forskjellig betydning.

Det finnes to typer:
1. **Totale falske venner**: Ordene betyr noe helt annet i de to språkene.
2. **Partielle falske venner**: Ordene overlapper delvis i betydning, men har også ulike bruksområder.

Falske venner oppstår ofte mellom beslektede språk fordi ordene har felles opphav, men har utviklet seg i ulike retninger over tid.`,
    },
    {
      id: 'tysk-3-14-2-text-1',
      type: 'text',
      content: `## Vanlige falske venner tysk–norsk

| Tysk ord | Ser ut som | Betyr faktisk | Norsk ord for det tyske |
|----------|-----------|----------------|------------------------|
| **gift** | gift (norsk) | giftig stoff / gift | Gift betyr det samme! Men: das Gift (intetkjønn) = gift/giftstoff; die Heirat = giftemål |
| **bekommen** | «å bli komfortabel» | å få / å motta | bekommen = å få |
| **brav** | brav (norsk: flink) | snill, lydig | brav = snill/artig (ikke «flink» som i norsk) |
| **die Mappe** | mappe (norsk) | veske, dokumentmappe | identisk, men brukes bredere på tysk |
| **spenden** | å spenne | å donere / gi gaver | spenden = å donere |
| **das Gymnasium** | gymnas | videregående skole (akademisk) | lignende, men det tyske systemet er annerledes |
| **die Rente** | rente (norsk) | pensjon | die Rente = pensjonen; der Zins = renten (finans) |
| **das Rezept** | resept | oppskrift (mat) ELLER resept (lege) | dobbeltbetydning på tysk |
| **sensibel** | sensibel | følsom, ømfintlig | sensibel = følsom (IKKE fornuftig) |
| **eventuell** | eventuelt | muligens, kanskje | eventuell = mulig; «eventuelt» = gegebenenfalls |`,
    },
    {
      id: 'tysk-3-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Falske venner i kontekst',
      problem: `Hva er feil i disse setningene? Rett dem opp.

1. "Ich habe ein Gift von meiner Freundin bekommen." (Ment: Jeg fikk en gave fra venninnen min.)
2. "Mein Sohn ist sehr brav in der Schule." (Ment: Sønnen min er veldig flink på skolen.)
3. "Die Rente auf mein Sparkonto ist sehr niedrig." (Ment: Renten på sparekontoen min er veldig lav.)
4. "Sie ist eine sehr sensible Frau." (Ment: Hun er en veldig fornuftig kvinne.)`,
      solution: `**1. "Ich habe ein Gift von meiner Freundin bekommen."**
- Problem: «ein Gift» betyr et giftig stoff! «bekommen» betyr derimot riktig «å få».
- Riktig: **"Ich habe ein Geschenk von meiner Freundin bekommen."**
- (das Geschenk = gave)

**2. "Mein Sohn ist sehr brav in der Schule."**
- Problem: «brav» på tysk betyr snill/lydig, ikke flink/dyktig.
- Riktig: **"Mein Sohn ist sehr gut/tüchtig in der Schule."**
- (gut = flink; tüchtig = dyktig)

**3. "Die Rente auf mein Sparkonto ist sehr niedrig."**
- Problem: «die Rente» betyr pensjon, ikke rente (finans).
- Riktig: **"Der Zins auf mein Sparkonto ist sehr niedrig."** / **"Die Zinsen auf meinem Sparkonto sind sehr niedrig."**
- (der Zins / die Zinsen = rente/renter)

**4. "Sie ist eine sehr sensible Frau."**
- Problem: «sensibel» betyr følsom/ømfintlig, ikke fornuftig.
- Riktig: **"Sie ist eine sehr vernünftige Frau."**
- (vernünftig = fornuftig)`,
    },
    {
      id: 'tysk-3-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det tyske ordet «bekommen»?',
        options: [
          { id: 'a', text: 'Å bli (som i «å bli glad»)', isCorrect: false },
          { id: 'b', text: 'Å få / å motta', isCorrect: true },
          { id: 'c', text: 'Å komme', isCorrect: false },
          { id: 'd', text: 'Å bli komfortabel', isCorrect: false },
        ],
        solution: '«Bekommen» er en av de mest kjente falske vennene mellom tysk og norsk/engelsk. Det betyr «å få» eller «å motta»: "Ich habe ein Geschenk bekommen" = "Jeg fikk en gave." Det tyske ordet for «å bli» er «werden».',
      },
    },
    {
      id: 'tysk-3-14-2-def-2',
      type: 'definition',
      title: 'Interferenz – Grammatisk påvirkning fra morsmålet',
      content: `**Interferenz** (interferens) oppstår når man overfører strukturer fra morsmålet (her: norsk) til tysk. De vanligste typene er:

**1. Preposisjonsinterferens:** Feil bruk av preposisjoner fordi norsk bruker andre enn tysk.
**2. Ordstillingsinterferens:** Feil ordstilling fordi norsk har andre regler enn tysk.
**3. Kasusinterferens:** Feil kasus fordi norsk ikke har synlig kasussystem.
**4. Artikkelinterferens:** Feil artikkel fordi kjønn ikke alltid samsvarer mellom språkene.`,
    },
    {
      id: 'tysk-3-14-2-text-2',
      type: 'text',
      content: `## Preposisjonsfeller (Präpositionsfallen)

Mange preposisjoner kan ikke oversettes direkte mellom tysk og norsk:

| Norsk | Feil tysk | Riktig tysk | Eksempel |
|-------|-----------|-------------|----------|
| gift **med** | ~~verheiratet **mit**~~ | verheiratet **mit** (+Dat.) | (dette er faktisk likt!) |
| stolt **av** | ~~stolz **von**~~ | stolz **auf** (+Akk.) | Ich bin stolz auf meine Tochter. |
| redd **for** | ~~Angst **für**~~ | Angst **vor** (+Dat.) | Ich habe Angst vor Spinnen. |
| glad **i** | ~~froh **in**~~ | verliebt **in** (+Akk.) | Ich bin verliebt in dich. |
| avhengig **av** | ~~abhängig **av**~~ | abhängig **von** (+Dat.) | Das ist abhängig von den Umständen. |
| interessert **i** | ~~interessiert **in**~~ | interessiert **an** (+Dat.) | Ich bin interessiert an Kunst. |
| fornøyd **med** | ~~zufrieden **mit**~~ | zufrieden **mit** (+Dat.) | (dette er faktisk likt!) |
| sint **på** | ~~böse **auf**~~ | böse **auf** (+Akk.) | (dette er faktisk likt!) |`,
    },
    {
      id: 'tysk-3-14-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Ordstillingsfeil fra norsk interferens',
      problem: `Finn og rett ordstillingsfeilene i disse setningene. Husk at tysk har V2-regel i hovedsetninger og verb-sist i leddsetninger.

1. "Gestern ich habe einen Film gesehen."
2. "Ich denke, dass er hat Recht."
3. "Warum du bist traurig?"
4. "Obwohl es regnet, ich gehe spazieren."`,
      solution: `**1. "Gestern ich habe einen Film gesehen."**
- Feil: Verbet «habe» står på tredje plass.
- V2-regelen: Verbet skal alltid stå på andre plass i hovedsetninger.
- Riktig: **"Gestern habe ich einen Film gesehen."**

**2. "Ich denke, dass er hat Recht."**
- Feil: I leddsetninger med «dass» skal verbet stå til slutt.
- Riktig: **"Ich denke, dass er Recht hat."**

**3. "Warum du bist traurig?"**
- Feil: I spørresetninger med spørreord står verbet på andre plass, foran subjektet.
- Riktig: **"Warum bist du traurig?"**

**4. "Obwohl es regnet, ich gehe spazieren."**
- Feil: Etter en leddsetning som innleder, starter hovedsetningen med verbet (inversjon).
- Riktig: **"Obwohl es regnet, gehe ich spazieren."**`,
    },
    {
      id: 'tysk-3-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett preposisjonsfeilene i disse setningene.',
        subTasks: [
          { label: 'a', task: 'Ich bin stolz von meinen Kindern.', solution: 'Ich bin stolz auf meine Kinder. (stolz auf + Akkusativ)' },
          { label: 'b', task: 'Er hat Angst für die Prüfung.', solution: 'Er hat Angst vor der Prüfung. (Angst vor + Dativ)' },
          { label: 'c', task: 'Sie ist interessiert in Musik.', solution: 'Sie ist interessiert an Musik. / Sie interessiert sich für Musik. (interessiert an + Dativ)' },
          { label: 'd', task: 'Das Ergebnis ist abhängig av vielen Faktoren.', solution: 'Das Ergebnis ist abhängig von vielen Faktoren. (abhängig von + Dativ)' },
        ],
        solution: 'a) stolz auf (+ Akk.), b) Angst vor (+ Dat.), c) interessiert an (+ Dat.), d) abhängig von (+ Dat.)',
        hints: ['Tyske preposisjoner kan ikke alltid oversettes direkte fra norsk', 'Husk at preposisjoner styrer bestemte kasus'],
      },
    },
    {
      id: 'tysk-3-14-2-text-3',
      type: 'text',
      content: `## Anglisismen und Lehnübersetzungen

I tillegg til norsk interferens påvirkes mange tyskelever av engelsk. Noen vanlige feil:

**Anglisismer – engelske ord som brukes feil på tysk:**
| Feil (anglisisme) | Riktig tysk | Betydning |
|-------------------|-------------|-----------|
| ~~Ich habe es realisiert~~ | Ich habe es bemerkt / erkannt | Jeg la merke til det |
| ~~Das macht Sinn~~ | Das ergibt Sinn / Das ist sinnvoll | Det gir mening |
| ~~Am Ende des Tages~~ | Letztendlich / Letzten Endes | Når alt kommer til alt |
| ~~Ich bin gut~~ | Mir geht es gut | Jeg har det bra |

**Lehnübersetzungen – direkte oversettelser som ikke fungerer:**
- ~~"Ich schaue vorwärts"~~ → Ich freue mich auf (å glede seg til, fra eng. "look forward to")
- ~~"Es hängt von dir ab"~~ → Es liegt an dir (det er opp til deg)

**Tips:** Vær spesielt oppmerksom på faste uttrykk og preposisjonsfraser – disse kan sjelden oversettes ord for ord fra verken norsk eller engelsk!`,
    },
    {
      id: 'tysk-3-14-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Finn feilen – Interferens fra norsk og engelsk',
      problem: `Identifiser og rett feilene i denne elevteksten. Angi om feilen skyldes norsk interferens, engelsk interferens, eller falske venner.

"Gestern ich war auf eine Party. Ich habe viele Geschenke bekommen. Am Ende des Tages war ich sehr brav, weil ich habe so viele Leute getroffen. Mein Freund ist stolz von mir, weil ich gut Deutsch spreche. Ich realisierte, dass das eine gute Erfahrung war."`,
      solution: `**Rettede feil:**

1. **"Gestern ich war"** → **"Gestern war ich"**
   - Type: Norsk interferens (ordstilling). V2-regelen krever inversjon.

2. **"Am Ende des Tages"** → **"Letztendlich" / "Alles in allem"**
   - Type: Engelsk interferens (anglisisme fra "at the end of the day").

3. **"sehr brav"** → **"sehr froh / glücklich"**
   - Type: Norsk falsk venn. «Brav» betyr snill/lydig, ikke glad/fornøyd.

4. **"weil ich habe ... getroffen"** → **"weil ich ... getroffen habe"**
   - Type: Norsk interferens (ordstilling). Verb sist i leddsetning med «weil».

5. **"stolz von mir"** → **"stolz auf mich"**
   - Type: Norsk interferens (preposisjon). Stolz auf + akkusativ.

6. **"Ich realisierte"** → **"Ich erkannte / Mir wurde klar"**
   - Type: Engelsk interferens (anglisisme fra "I realized").

**Rettet tekst:**
"Gestern war ich auf einer Party. Ich habe viele Geschenke bekommen. Alles in allem war ich sehr froh, weil ich so viele Leute getroffen habe. Mein Freund ist stolz auf mich, weil ich gut Deutsch spreche. Mir wurde klar, dass das eine gute Erfahrung war."`,
    },
    {
      id: 'tysk-3-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rett feilene i disse setningene og angi type interferens (norsk, engelsk eller falsk venn).',
        subTasks: [
          { label: 'a', task: 'Heute ich muss in die Schule gehen.', solution: 'Heute muss ich in die Schule gehen. (Norsk interferens – ordstilling, V2-regelen)' },
          { label: 'b', task: 'Das Rezept vom Arzt war teuer.', solution: 'Setningen er faktisk riktig! «Das Rezept» kan bety resept (fra legen). Ingen feil.' },
          { label: 'c', task: 'Ich schaue vorwärts auf die Ferien.', solution: 'Ich freue mich auf die Ferien. (Engelsk interferens – «look forward to»)' },
          { label: 'd', task: 'Sie bekommt immer nervös vor Prüfungen.', solution: 'Sie wird immer nervös vor Prüfungen. (Norsk/engelsk interferens – «bekommen» ≠ «å bli»; «werden» = å bli)' },
        ],
        solution: 'a) Norsk interferens – ordstilling. b) Ingen feil – Rezept kan bety resept. c) Engelsk interferens – «look forward to». d) Norsk interferens – «bekommen» betyr «å få», ikke «å bli».',
        hints: ['Sjekk V2-regelen i hovedsetninger', 'Husk at «bekommen» = å få, «werden» = å bli'],
      },
    },
    {
      id: 'tysk-3-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig tysk for «Jeg er stolt av søsteren min»?',
        options: [
          { id: 'a', text: 'Ich bin stolz von meiner Schwester.', isCorrect: false },
          { id: 'b', text: 'Ich bin stolz auf meine Schwester.', isCorrect: true },
          { id: 'c', text: 'Ich bin stolz über meine Schwester.', isCorrect: false },
          { id: 'd', text: 'Ich bin stolz für meine Schwester.', isCorrect: false },
        ],
        solution: 'Riktig er «stolz auf» + akkusativ. Norsk «stolt av» kan ikke oversettes direkte med «von». Dette er en typisk preposisjonsfelle for norske tyskelever.',
      },
    },
    {
      id: 'tysk-3-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble den falske vennen med riktig betydning på tysk.',
        subTasks: [
          { label: 'a', task: 'die Rente', solution: 'Pensjon (ikke rente/finans – det heter der Zins)' },
          { label: 'b', task: 'sensibel', solution: 'Følsom/ømfintlig (ikke fornuftig – det heter vernünftig)' },
          { label: 'c', task: 'eventuell', solution: 'Mulig/muligens (ikke eventuelt – det heter gegebenenfalls)' },
          { label: 'd', task: 'spenden', solution: 'Å donere/gi gaver (ikke å spenne – det heter schnallen/spannen)' },
        ],
        solution: 'a) die Rente = pensjon, b) sensibel = følsom, c) eventuell = mulig, d) spenden = å donere',
        hints: ['Tenk på om ordet ligner et norsk ord, men betyr noe annet'],
      },
    },
    {
      id: 'tysk-3-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett på to hovedkilder til feil for norske tyskelever:

- **Falske venner** (falsche Freunde): Ord som ligner i form, men har ulik betydning. Viktige eksempler: bekommen (= å få), brav (= snill), die Rente (= pensjon), sensibel (= følsom), eventuell (= mulig).

- **Interferens** (Interferenz): Overføring av norske eller engelske strukturer til tysk.
  - Preposisjonsfeller: stolz **auf**, Angst **vor**, interessiert **an**
  - Ordstillingsfeil: V2-regelen i hovedsetninger, verb sist i leddsetninger
  - Anglisismer: «das macht Sinn» (riktig: ergibt Sinn), «realisieren» (riktig: erkennen)

**Tips for å unngå feil:**
- Lær faste uttrykk med preposisjoner som enheter
- Øv på tysk ordstilling systematisk
- Vær ekstra oppmerksom på ord som ligner norsk eller engelsk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der falsche Freund', definition: 'Falsk venn – ord som ligner i to språk, men har ulik betydning' },
    { term: 'die Interferenz', definition: 'Interferens – overføring av strukturer fra morsmålet som fører til feil i fremmedspråket' },
    { term: 'die Verwechslung', definition: 'Forveksling – å blande sammen to ord eller uttrykk' },
    { term: 'das Missverständnis', definition: 'Misforståelse – feilaktig tolkning av et utsagn' },
    { term: 'der Anglizismus', definition: 'Anglisisme – bruk av engelske ord eller strukturer i tysk' },
    { term: 'die Lehnübersetzung', definition: 'Låneoversettelse – direkte oversettelse av et uttrykk fra et annet språk' },
    { term: 'die Präpositionsfalle', definition: 'Preposisjonsfelle – feil preposisjonsbruk pga. morsmålsinterferens' },
    { term: 'die V2-Regel', definition: 'V2-regelen – det finitte verbet står alltid på andre plass i tyske hovedsetninger' },
  ],
};

// --- 14.3: Literarische Übersetzung ---
export const CHAPTER_TYSK_3_14_3: TextbookChapter = {
  id: 'tysk-3-14-3',
  courseId: 'tysk-3',
  chapterNumber: '14.3',
  title: 'Literarische Übersetzung',
  subtitle: 'Litterær oversettelse',
  description: 'Lær om utfordringer ved å oversette skjønnlitteratur, inkludert stil, register, metaforer, idiomer og kulturell tilpasning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-14-3-intro',
      type: 'text',
      content: `## Literarische Übersetzung – Litterær oversettelse

Å oversette skjønnlitteratur er en av de mest krevende formene for oversettelse. Her handler det ikke bare om å formidle innholdet, men også om å bevare stilen, stemningen, rytmen og de litterære virkemidlene.

Den italienske frasen «traduttore, traditore» (oversetter = forræder) uttrykker dilemmaet: Enhver oversettelse innebærer et tap. Spørsmålet er hvordan man minimerer dette tapet.

**Sentrale utfordringer i litterær oversettelse:**
- Bevare forfatterens stemme og stil
- Overføre metaforer og billedspråk
- Håndtere kulturspesifikke referanser
- Gjengi humor, ironi og ordspill
- Balansere mellom troskap til originalen og lesbarhet

| Tysk | Norsk |
|------|-------|
| die literarische Übersetzung | den litterære oversettelsen |
| der Stil | stilen |
| das Register | registeret (stilnivå) |
| die Metapher | metaforen |
| die Redewendung | talemåten / det idiomatiske uttrykket |
| die kulturelle Anpassung | den kulturelle tilpasningen |
| die Stimme des Autors | forfatterens stemme |
| das Wortspiel | ordspillet |`,
    },
    {
      id: 'tysk-3-14-3-def-1',
      type: 'definition',
      title: 'Stil und Register',
      content: `**Der Stil** (stilen) refererer til forfatterens personlige måte å skrive på – ordvalg, setningsbygning, rytme og bruk av virkemidler. En god oversetter må gjenkjenne og gjenskape denne stilen.

**Das Register** (registeret) handler om tekstens stilnivå: formelt, uformelt, muntlig, akademisk, poetisk osv. Registeret må bevares i oversettelsen.

**Eksempler på ulike registre:**
- **Hochsprache** (høyspråk/skriftspråk): "Er hat sich verabschiedet." (Han tok farvel.)
- **Umgangssprache** (dagligtale): "Er hat sich verdrückt." (Han stakk av.)
- **Dialekt**: "Er hat sich verdunnisiert." (Han har stukket av – sørtyskt dialekt)
- **Poetisk**: "Er schied dahin." (Han gikk bort / Han forlot denne verden.)

En oversetter som gjør alt til nøytralt skriftspråk, mister noe vesentlig.`,
    },
    {
      id: 'tysk-3-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Oversette ulike registre',
      problem: `Oversett disse setningene til norsk og bevar registeret:

1. (Formelt) "Ich möchte Sie darauf aufmerksam machen, dass die Veranstaltung um 19 Uhr beginnt."
2. (Uformelt) "Hey, die Party geht um sieben los, ja?"
3. (Poetisk) "Als die Abenddämmerung die Stadt in purpurnes Licht tauchte, erwachten die Schatten zum Leben."
4. (Barnespråk) "Mama, der Mond guckt mich an!"`,
      solution: `**1. Formelt register:**
"Ich möchte Sie darauf aufmerksam machen, dass die Veranstaltung um 19 Uhr beginnt."
→ **"Jeg ønsker å gjøre Dem oppmerksom på at arrangementet begynner klokken 19."**
(Bevarer høflig tiltale og formell tone)

**2. Uformelt register:**
"Hey, die Party geht um sieben los, ja?"
→ **"Hei, festen starter klokka sju, sant?"**
(Bevarer muntlig, avslappet tone med «klokka» og «sant?»)

**3. Poetisk register:**
"Als die Abenddämmerung die Stadt in purpurnes Licht tauchte, erwachten die Schatten zum Leben."
→ **"Da kveldsskumringen senket byen i purpurfarget lys, våknet skyggene til liv."**
(Bevarer billedspråk og lyrisk setningsbygning)

**4. Barnespråk:**
"Mama, der Mond guckt mich an!"
→ **"Mamma, månen ser på meg!"**
(Bevarer barnlig enkelhet og undring. «Guckt» = kikker/ser – barnlig ordvalg.)`,
    },
    {
      id: 'tysk-3-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den største utfordringen ved litterær oversettelse sammenlignet med fagoversettelse?',
        options: [
          { id: 'a', text: 'At ordene er lengre i litterære tekster', isCorrect: false },
          { id: 'b', text: 'At man må bevare stil, stemning og litterære virkemidler – ikke bare innholdet', isCorrect: true },
          { id: 'c', text: 'At litterære tekster alltid er skrevet i dialekt', isCorrect: false },
          { id: 'd', text: 'At det finnes flere synonymer i fagtekster', isCorrect: false },
        ],
        solution: 'Litterær oversettelse krever at man bevarer ikke bare meningen, men også forfatterens stemme, stil, register, rytme og virkemidler. Dette gjør det langt mer komplekst enn å oversette en teknisk manual eller en nyhetsartikkel.',
      },
    },
    {
      id: 'tysk-3-14-3-def-2',
      type: 'definition',
      title: 'Metaphern und Redewendungen übersetzen',
      content: `**Metaforer** (die Metaphern) og **idiomatiske uttrykk** (die Redewendungen) er blant de vanskeligste elementene å oversette, fordi de ofte er kulturelt forankret.

**Tre strategier for å oversette metaforer:**

1. **Direkte overføring**: Hvis metaforen fungerer i begge språk.
   - «Licht am Ende des Tunnels» → «Lys i enden av tunnelen» (fungerer!)

2. **Erstatning med tilsvarende metafor**: Hvis målspråket har en annen metafor med samme betydning.
   - «Eulen nach Athen tragen» → «Å bære vann til bekken» (unødvendig arbeid)

3. **Forklaring/parafrasering**: Hvis ingen metafor finnes i målspråket.
   - «Innerer Schweinehund» → Indre svinehund / den indre latskapen (brukes faktisk på norsk!)`,
    },
    {
      id: 'tysk-3-14-3-text-2',
      type: 'text',
      content: `## Tyske Redewendungen og deres norske ekvivalenter

| Tysk Redewendung | Ordrett | Norsk ekvivalent |
|------------------|---------|------------------|
| den Nagel auf den Kopf treffen | treffe spikeren på hodet | treffe spikeren på hodet |
| die Katze im Sack kaufen | kjøpe katten i sekken | kjøpe katta i sekken |
| aus einer Mücke einen Elefanten machen | gjøre en mygg til en elefant | gjøre en mygg til en elefant |
| Tomaten auf den Augen haben | ha tomater på øynene | ha skylapper på |
| den Faden verlieren | miste tråden | miste tråden |
| jemanden auf den Arm nehmen | ta noen på armen | ta noen på kornet / lure noen |
| auf dem Holzweg sein | være på treveien | være på villspor |
| die Daumen drücken | trykke tomlene | holde tommelen / krysse fingrene |
| Schwein haben | ha gris | ha flaks / ha griseflaks |

Legg merke til at mange uttrykk er svært like – noe som skyldes felles germansk opphav.`,
    },
    {
      id: 'tysk-3-14-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Oversette en litterær tekst',
      problem: `Oversett dette utdraget fra Franz Kafkas «Die Verwandlung» (Forvandlingen) til norsk. Prøv å bevare den nøkterne, saklige stilen som kjennetegner Kafka:

"Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf seinem panzerartig harten Rücken und sah, wenn er den Kopf ein wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch."`,
      solution: `**Oversettelse:**
"Da Gregor Samsa en morgen våknet fra urolige drømmer, fant han seg forvandlet i sengen til et uhyrlig kryp. Han lå på sin panserliknende harde rygg og så, når han løftet hodet litt, sin hvelvede, brune buk, oppdelt av bueformede forstivninger."

**Stilanalyse og oversettelsesvalg:**
- **Nøktern, rapporterende stil**: Kafka beskriver en fantastisk hendelse (å våkne som et insekt) med samme tone som en avisreportasje. Det er viktig å ikke legge til dramatikk.
- **"ungeheuren Ungeziefer"**: «Uhyrlig kryp» bevarer allitterasjonen (U-lyd) og vagheteten – Kafka bruker bevisst ikke et spesifikt insektnavn.
- **Lange, detaljerte setninger**: Kafkas setningsbygning med mange innskudd er beholdt.
- **"panzerartig"**: Sammensatt adjektiv → «panserliknende» (bevarer det presise, tekniske preget).

**Alternativ oversettelse av «Ungeziefer»:** Noen oversettere bruker «insekt» eller «skadedyr», men Kafka valgte bevisst det vagere «Ungeziefer».`,
    },
    {
      id: 'tysk-3-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den norske ekvivalenten til disse tyske idiomene.',
        subTasks: [
          { label: 'a', task: 'Tomaten auf den Augen haben', solution: 'Ha skylapper på / ikke se det åpenbare' },
          { label: 'b', task: 'auf dem Holzweg sein', solution: 'Være på villspor / ta feil' },
          { label: 'c', task: 'jemandem auf den Arm nehmen', solution: 'Ta noen på kornet / lure noen / spøke med noen' },
          { label: 'd', task: 'Schwein haben', solution: 'Ha flaks / ha griseflaks / ha hellet med seg' },
        ],
        solution: 'a) Ha skylapper på, b) Være på villspor, c) Ta noen på kornet / lure noen, d) Ha flaks / ha griseflaks.',
        hints: ['Tenk på norske uttrykk med lignende betydning', 'Ordrett oversettelse fungerer sjelden for idiomer'],
      },
    },
    {
      id: 'tysk-3-14-3-text-3',
      type: 'text',
      content: `## Kulturelle Anpassung – Kulturell tilpasning

Noen ganger inneholder en tekst kulturelle referanser som målspråkets lesere ikke vil forstå. Oversetteren må da velge mellom:

**1. Bevaringsstrategi (Verfremdung/foreignization):**
Beholde den fremmede referansen og eventuelt legge til en forklaring.
- "Er aß eine Brezel zum Frühstück." → "Han spiste en Brezel (saltbretsel) til frokost."

**2. Tilpasningsstrategi (Einbürgerung/domestication):**
Erstatte referansen med noe kjent for målgruppen.
- "Er aß eine Brezel zum Frühstück." → "Han spiste et rundstykke til frokost."

**3. Mellomløsning:**
Bruke det fremmede ordet, men i en kontekst som gjør betydningen klar.
- "Han spiste en av de myke saltkringlene som lå i kurven på frokostbordet."

**Hvilken strategi er best?**
Det kommer an på sjanger, målgruppe og formålet med oversettelsen. Barnelitteratur tilpasses ofte mer enn voksenlitteratur. Oversettelser for akademiske formål bevarer oftere det fremmede.`,
    },
    {
      id: 'tysk-3-14-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Kulturell tilpasning i praksis',
      problem: `Hvordan ville du oversette disse kulturspesifikke referansene? Vurder ulike strategier.

1. "Am Heiligabend gibt es bei uns immer Kartoffelsalat mit Würstchen."
2. "Er hat sein Abitur mit 1,0 bestanden."
3. "Sie feiert Karneval in Köln."`,
      solution: `**1. "Am Heiligabend gibt es bei uns immer Kartoffelsalat mit Würstchen."**
- **Bevaring**: "På julaften har vi alltid potetsalat med pølser hos oss." (Leser forstår, men det virker fremmedartet for norske lesere.)
- **Tilpasning**: Ikke aktuelt – dette er et kulturelt poeng; å endre til «ribbe og pinnekjøtt» ville fjerne det tyske perspektivet.
- **Anbefaling**: Bevaring. Det er viktig for leseren å forstå tysk julekultur.

**2. "Er hat sein Abitur mit 1,0 bestanden."**
- **Bevaring**: "Han besto Abitur med karakteren 1,0." (Krever forklaring.)
- **Tilpasning**: "Han fullførte videregående med toppkarakterer." (Mister kulturell presisjon.)
- **Mellomløsning**: "Han besto sin Abitur-eksamen – den tyske avgangseksamenen – med beste karakter, 1,0."
- **Anbefaling**: Mellomløsning for allmennlitteratur; bevaring med fotnote for faglitteratur.

**3. "Sie feiert Karneval in Köln."**
- **Bevaring**: "Hun feirer karneval i Köln." (De fleste nordmenn vet hva karneval er.)
- **Tilpasning**: Ikke nødvendig – karneval er godt nok kjent.
- **Anbefaling**: Bevaring. Eventuelt med en setning om at Kölner Karneval er Tysklands største.`,
    },
    {
      id: 'tysk-3-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett dette litterære utdraget til norsk. Bevar stilen og de litterære virkemidlene så godt du kan.',
        subTasks: [
          {
            label: 'a',
            task: `"Die Nacht kroch langsam über die Dächer der Stadt, und mit ihr kam eine Stille, die schwerer wog als jedes Wort. In den Gassen flüsterten die Schatten, und der Wind trug den Geruch von Regen und Vergänglichkeit."`,
            solution: 'Natten krøp langsomt over byens tak, og med den kom en stillhet som veide tyngre enn noe ord. I smugene hvisket skyggene, og vinden bar med seg lukten av regn og forgjengelighet.',
          },
        ],
        solution: 'Natten krøp langsomt over byens tak, og med den kom en stillhet som veide tyngre enn noe ord. I smugene hvisket skyggene, og vinden bar med seg lukten av regn og forgjengelighet.',
        hints: ['Bevar personifikasjonene (natten krøp, skyggene hvisket)', 'La den poetiske rytmen komme gjennom i norsk'],
      },
    },
    {
      id: 'tysk-3-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken strategi bør du bruke for å oversette det tyske idiomet «Eulen nach Athen tragen» (bære ugler til Athen)?',
        options: [
          { id: 'a', text: 'Ordrett oversettelse: «Å bære ugler til Athen»', isCorrect: false },
          { id: 'b', text: 'Erstatning med norsk ekvivalent: «Å bære vann til bekken»', isCorrect: true },
          { id: 'c', text: 'Stryke uttrykket fra oversettelsen helt', isCorrect: false },
          { id: 'd', text: 'Beholde det på tysk med fotnote', isCorrect: false },
        ],
        solution: 'Erstatning med et tilsvarende norsk idiom er den beste strategien her. «Å bære vann til bekken» formidler samme betydning (å gjøre noe overflødig) og føles naturlig for norske lesere. Ordrett oversettelse ville vært uforståelig uten kontekst.',
      },
    },
    {
      id: 'tysk-3-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter: Hvordan påvirker oversetterens valg leserens opplevelse av en tekst? Gi eksempler fra kapittelet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom bevarings- og tilpasningsstrategi med et eget eksempel.',
            solution: 'Bevaringsstrategi: Beholde «Brezel» i oversettelsen for å gi et innblikk i tysk kultur. Tilpasningsstrategi: Bytte ut «Brezel» med «rundstykke» for å gjøre teksten lettere å lese. Valget avhenger av sjanger, målgruppe og formål.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det spesielt viktig å bevare registeret i en litterær oversettelse?',
            solution: 'Registeret er en del av karakteriseringen. En karakter som snakker dialekt i originalen, bør ikke snakke nøytralt skriftspråk i oversettelsen, fordi det endrer leserens oppfatning av personen.',
          },
        ],
        solution: 'Oversetterens valg mellom bevaring og tilpasning påvirker leserens opplevelse grunnleggende. Bevaring gir kulturell rikdom men krever mer av leseren; tilpasning gir bedre flyt men kan miste nyanser.',
        hints: ['Tenk på hva som går tapt og hva som vinnes med hver strategi'],
      },
    },
    {
      id: 'tysk-3-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett på de unike utfordringene ved litterær oversettelse:

- **Stil og register**: Forfatterens stemme og tekstens stilnivå må bevares. Å gjøre alt til nøytralt skriftspråk er et tap.

- **Metaforer og idiomer**: Tre strategier: direkte overføring (når metaforen fungerer i begge språk), erstatning med tilsvarende uttrykk, eller forklaring/parafrasering.

- **Kulturell tilpasning**: Valget mellom bevaringsstrategi (la det fremmede stå) og tilpasningsstrategi (erstatte med kjent) avhenger av sjanger, målgruppe og formål.

**Nøkkelbegreper å huske:**
- «Traduttore, traditore» – enhver oversettelse er et kompromiss
- Register (stilnivå) må bevares for at teksten skal fungere
- Idiomer kan sjelden oversettes ordrett
- Kulturell tilpasning krever bevisste valg`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die literarische Übersetzung', definition: 'Litterær oversettelse – oversettelse av skjønnlitteratur med vekt på stil og virkemidler' },
    { term: 'der Stil', definition: 'Stil – forfatterens personlige uttrykksform i ordvalg, setningsbygning og rytme' },
    { term: 'das Register', definition: 'Register – tekstens stilnivå (formelt, uformelt, poetisk, muntlig osv.)' },
    { term: 'die Metapher', definition: 'Metafor – et billedlig uttrykk der et ord brukes i overført betydning' },
    { term: 'die Redewendung', definition: 'Idiomatisk uttrykk / fast talemåte som ikke kan oversettes ordrett' },
    { term: 'die kulturelle Anpassung', definition: 'Kulturell tilpasning – å tilpasse kulturspesifikke referanser for målgruppen' },
    { term: 'die Verfremdung', definition: 'Bevaringsstrategi – å beholde fremmede elementer i oversettelsen' },
    { term: 'die Einbürgerung', definition: 'Tilpasningsstrategi – å erstatte fremmede elementer med kjente i målkulturen' },
  ],
};

// --- 14.4: Dolmetschen und Sprachmittlung ---
export const CHAPTER_TYSK_3_14_4: TextbookChapter = {
  id: 'tysk-3-14-4',
  courseId: 'tysk-3',
  chapterNumber: '14.4',
  title: 'Dolmetschen und Sprachmittlung',
  subtitle: 'Tolking og språkformidling',
  description: 'Lær om simultantolking, konsekutiv tolking og Sprachmittlung som mediatorferdighet, samt notatteknikk og kulturell mediering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kommunisere med god uttale, variert ordforråd og avanserte strukturer',
  ],
  content: [
    {
      id: 'tysk-3-14-4-intro',
      type: 'text',
      content: `## Dolmetschen und Sprachmittlung – Tolking og språkformidling

Mens oversettelse handler om skriftlige tekster, dreier **das Dolmetschen** (tolking) seg om muntlig kommunikasjon i sanntid. I tillegg har begrepet **die Sprachmittlung** (språkformidling) fått en sentral plass i moderne språkdidaktikk som en mediatorferdighet.

Tolking og språkformidling er ferdigheter som krever hurtig tenkning, bredt ordforråd, kulturell kompetanse og god notatteknikk. De er svært etterspurt i vår globaliserte verden.

| Tysk | Norsk |
|------|-------|
| das Dolmetschen | tolkingen |
| das Simultandolmetschen | simultantolkingen |
| das Konsekutivdolmetschen | konsekutiv tolking |
| die Sprachmittlung | språkformidlingen |
| die interkulturelle Vermittlung | den interkulturelle formidlingen |
| der Mediator / die Mediatorin | mediatoren |
| die Notizentechnik | notatteknikken |
| die Flüsterdolmetschen | hvisketolking |`,
    },
    {
      id: 'tysk-3-14-4-def-1',
      type: 'definition',
      title: 'Formen des Dolmetschens',
      content: `**Simultandolmetschen** (simultantolking): Tolken oversetter mens taleren snakker – med bare noen sekunders forsinkelse. Brukes i FN, EU-parlamentet og på store konferanser. Tolken sitter i en lydkabine.

**Konsekutivdolmetschen** (konsekutiv tolking): Taleren snakker i segmenter (noen minutter om gangen), og tolken oversetter deretter. Brukes ved forhandlinger, middager og mindre møter. Tolken bruker notater.

**Flüsterdolmetschen** (hvisketolking): Tolken sitter ved siden av tilhøreren og hvisker oversettelsen. Brukes når bare én eller to personer trenger tolking.

**Gerichtsdolmetschen** (rettstolking): Tolking i rettssystemet, der presisjon er avgjørende. Rettetsatte tolkninger har juridisk bindende kraft.`,
    },
    {
      id: 'tysk-3-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Konsekutiv tolking – notatteknikk',
      problem: `Du skal tolke følgende tale konsekutivt fra tysk til norsk. Lag notater med symboler og forkortelser, og gjengi innholdet på norsk:

"Meine sehr verehrten Damen und Herren, ich freue mich, Sie heute hier begrüßen zu dürfen. Unser Thema heute ist die Zukunft der deutsch-norwegischen Wirtschaftsbeziehungen. In den letzten zehn Jahren hat sich das Handelsvolumen zwischen unseren Ländern verdoppelt. Deutschland ist Norwegens wichtigster Handelspartner in Europa, und Norwegen liefert einen bedeutenden Teil des deutschen Energiebedarfs. Wir stehen vor großen Herausforderungen – Klimawandel, Digitalisierung, demografischer Wandel –, aber auch vor großen Chancen."`,
      solution: `**Mulige notater (med symboler):**
- D+H → hilse, velkomst
- Tema: DE-NO økon. forh.
- 10 år: handelsvolum × 2
- DE = NOs viktigste HP i EU
- NO → DE: energi (stor del)
- Utfordr: klima, digital, demografi
- MEN: også store muligheter

**Norsk gjengivelse:**
"Mine damer og herrer, det er en glede å ønske dere velkommen her i dag. Temaet vårt i dag er fremtiden for de tysk-norske økonomiske forbindelsene. I løpet av de siste ti årene har handelsvolumet mellom våre land blitt doblet. Tyskland er Norges viktigste handelspartner i Europa, og Norge leverer en betydelig del av Tysklands energibehov. Vi står overfor store utfordringer – klimaendringer, digitalisering, demografiske endringer – men også store muligheter."

**Tips for notatteknikk:**
- Bruk symboler: ↑ (økning), ↓ (nedgang), → (fører til), × (ganger)
- Bruk forkortelser: DE = Tyskland, NO = Norge, HP = handelspartner
- Skriv vertikalt nedover – én idé per linje
- Marker ny taler med strek`,
    },
    {
      id: 'tysk-3-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken tolkingsform brukes i EU-parlamentet og FN?',
        options: [
          { id: 'a', text: 'Konsekutivdolmetschen (konsekutiv tolking)', isCorrect: false },
          { id: 'b', text: 'Simultandolmetschen (simultantolking)', isCorrect: true },
          { id: 'c', text: 'Flüsterdolmetschen (hvisketolking)', isCorrect: false },
          { id: 'd', text: 'Gerichtsdolmetschen (rettstolking)', isCorrect: false },
        ],
        solution: 'Simultantolking (das Simultandolmetschen) brukes i store internasjonale organisasjoner som EU og FN. Tolken sitter i en lydkabine og oversetter med bare noen sekunders forsinkelse mens taleren snakker.',
      },
    },
    {
      id: 'tysk-3-14-4-def-2',
      type: 'definition',
      title: 'Sprachmittlung als Mediatorkompetenz',
      content: `**Die Sprachmittlung** (språkformidling) er mer enn bare oversettelse eller tolking. Det handler om å formidle innholdet i en tekst eller samtale til noen som ikke forstår utgangsspråket – men på en tilpasset og situasjonsriktig måte.

Kjennetegn ved Sprachmittlung:
- **Selektiv**: Du velger ut det viktigste, ikke alt.
- **Tilpasset**: Du tilpasser til mottakeren (alder, bakgrunn, behov).
- **Kulturelt medierende**: Du forklarer kulturelle referanser.
- **Pragmatisk**: Formålet styrer hva og hvordan du formidler.

**Eksempel:** En norsk venn besøker deg i Tyskland. Dere er på en restaurant, og vennen din forstår ikke menyen. Du trenger ikke å oversette hvert eneste ord – du forklarer hva rettene er og anbefaler noe basert på vennens preferanser. Det er Sprachmittlung!`,
    },
    {
      id: 'tysk-3-14-4-text-2',
      type: 'text',
      content: `## Notizentechnik – Notatteknikk for tolking

Gode notater er avgjørende for konsekutiv tolking. Her er de viktigste prinsippene:

**Grunnprinsipper:**
1. Skriv **vertikalt** – én idé per linje
2. Bruk **symboler** i stedet for ord
3. Skriv på **målspråket** (det du skal tolke til)
4. Marker **forbindelser** mellom ideer med piler
5. Skill mellom talere med horisontal strek

**Vanlige symboler:**
| Symbol | Betydning |
|--------|-----------|
| ↑ | økning, vekst, mer |
| ↓ | nedgang, reduksjon, mindre |
| → | fører til, resulterer i |
| ← | kommer fra, skyldes |
| = | er lik, betyr |
| ≠ | er ikke lik, i motsetning til |
| + | og, i tillegg, positiv |
| – | men, negativ, uten |
| ○ | verden, globalt |
| △ | endring, utvikling |
| ✓ | ja, enig, positivt |
| ✗ | nei, uenig, negativt |
| ? | spørsmål, usikkert |
| ! | viktig, understreket |`,
    },
    {
      id: 'tysk-3-14-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Sprachmittlung i praksis',
      problem: `Din norske bestemor er på besøk i Berlin og vil lese denne informasjonen på et museum. Formidle innholdet til henne på norsk – tilpasset en eldre person som ikke kan tysk:

"Das Deutsche Historische Museum wurde 1987 gegründet. Die Dauerausstellung 'Deutsche Geschichte in Bildern und Zeugnissen' umfasst über 7.000 Exponate auf 8.000 Quadratmetern. Der Rundgang beginnt im Erdgeschoss mit dem Mittelalter und endet im Obergeschoss mit der Wiedervereinigung 1990. Audioguides sind an der Kasse erhältlich (6 Euro). Für Besucher über 65 Jahre ist der Eintritt ermäßigt (4 Euro statt 8 Euro). Das Museum ist dienstags geschlossen. Fotografieren ohne Blitz ist erlaubt."`,
      solution: `**Sprachmittlung – tilpasset bestemor:**

"Dette er Det tyske historiske museet, bestemor. Det har en stor utstilling om hele Tysklands historie – fra middelalderen og helt frem til gjenforeningen i 1990. De har over 7000 gjenstander å se på.

Du begynner i første etasje og går oppover. Og det som er fint, er at du kan låne en lydguide i kassen – den koster 6 euro og forklarer alt du ser. Og fordi du er over 65, får du rabatt! Bare 4 euro i stedet for 8 for å komme inn.

Men pass på at vi ikke drar på en tirsdag, for da er det stengt. Og du kan gjerne ta bilder, bare du ikke bruker blits."

**Hva er gjort her (Sprachmittlung-teknikker):**
- **Seleksjon**: Grunnleggelsesåret (1987) er utelatt – ikke relevant for bestemor.
- **Tilpasning**: Enklere språk, personlig tone, direkte henvendelse.
- **Fremheving**: Rabatt for seniorer er fremhevet fordi det er relevant for mottakeren.
- **Omformulering**: «Erdgeschoss» og «Obergeschoss» er forklart som «første etasje og oppover».
- **Praktisk fokus**: Vektlegger det bestemor trenger å vite for besøket.`,
    },
    {
      id: 'tysk-3-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør Sprachmittlung: Formidle innholdet i denne tyske teksten til en norsk venn som ikke kan tysk. Tilpass formidlingen til situasjonen.',
        subTasks: [
          {
            label: 'a',
            task: `Din venn vil bestille mat på en tysk restaurant. Forklar denne delen av menyen: "Tagesgericht: Schwäbische Maultaschen mit Kartoffelsalat und Beilagensalat (12,90 €). Vorspeise: Flädlesuppe (4,50 €). Dessert: Schwarzwälder Kirschtorte (5,90 €)."`,
            solution: 'Dagens rett er en svabisk spesialitet – Maultaschen – det er slags store pastaputer fylt med kjøtt og spinat, servert med potetsalat og grønn salat for 12,90 euro. Til forrett har de en buljongsuppe med strimler av pannekake (4,50 euro), og til dessert kan du få Schwarzwälder Kirschtorte – det er den berømte sjokoladekaken med kirsebær og krem (5,90 euro).',
          },
          {
            label: 'b',
            task: `Din venn vil vite hva det står på dette skiltet på togstasjonen: "Achtung! Wegen Bauarbeiten auf der Strecke Berlin–Hamburg verkehren die Züge mit einer Verspätung von ca. 30 Minuten. Wir bitten um Ihr Verständnis."`,
            solution: 'Det er en melding om forsinkelser. På grunn av byggearbeid på strekningen Berlin–Hamburg er togene cirka 30 minutter forsinket. De beklager ulempene.',
          },
        ],
        solution: 'a) Formidl menyvalg med forklaring av ukjente retter. b) Hovedbudskap: togforsinkelse på 30 minutter grunnet byggearbeid.',
        hints: ['Du trenger ikke oversette alt – velg det viktigste', 'Forklar kulturspesifikke referanser (Maultaschen, Schwarzwälder Kirschtorte)'],
      },
    },
    {
      id: 'tysk-3-14-4-text-3',
      type: 'text',
      content: `## Interkulturelle Vermittlung – Kulturell mediering

En viktig del av Sprachmittlung er å fungere som kulturell mediator. Det betyr at du ikke bare oversetter ord, men også forklarer kulturelle forskjeller og forebygger misforståelser.

**Situasjoner der kulturell mediering er viktig:**

| Situasjon | Kulturell utfordring | Mediering |
|-----------|---------------------|-----------|
| Forretningslunsj i Tyskland | Tysker vil splitte regningen (jeder zahlt für sich) | Forklare at dette er normal praksis i Tyskland, ikke uhøflighet |
| Hilsing | Tyske kollegaer håndhilser hver morgen | Forklare at dette er en vanlig høflighetsgest, ikke formelt |
| Punktlighet | Tysker forventer at du er der 5 min. før | Forklare at forsinkelse oppfattes som uhøflig i Tyskland |
| Direkte kommunikasjon | Tysk kollega sier «Das ist falsch» uten omsvøp | Forklare at tysk kommunikasjonsstil er mer direkte enn norsk, uten å være uhøflig |
| Lunsjtid | Middag (varm) kl. 12, Abendbrot (kaldt) kl. 18 | Forklare at det tradisjonelle tyske måltidsmønsteret er annerledes enn det norske |

**Som kulturell mediator bør du:**
- Forklare uten å dømme
- Presentere begge kulturer som likeverdige
- Hjelpe med å bygge bro over misforståelser
- Være bevisst på egne kulturelle fordommer`,
    },
    {
      id: 'tysk-3-14-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Kulturell mediering mellom norsk og tysk',
      problem: `Du er med din norske sjef på et forretningsmøte i München. Etter møtet inviterer den tyske partneren til middag. Sjefen din hvisker til deg: "Hvorfor er de så direkte? Sier de rett ut at forslaget vårt har svakheter – det virker uhøflig!" Hvordan forklarer du dette som kulturell mediator?`,
      solution: `**Som kulturell mediator kan du forklare:**

"I Tyskland er direkte kommunikasjon et tegn på respekt og profesjonalitet. Når de sier at forslaget vårt har svakheter, er det ikke ment som kritikk av oss som personer – det er en saklig vurdering. I tysk forretningskultur er det faktisk uhøflig å *ikke* si fra om svakheter, fordi det kan føre til dårlige beslutninger.

I Norge har vi en mer indirekte kommunikasjonsstil – vi pakker inn kritikk og sier gjerne 'dette er interessant, men kanskje vi bør se på...' I Tyskland vil de heller si 'das funktioniert nicht' (dette fungerer ikke) og foreslå alternativer med en gang.

Det positive er at du alltid vet hvor du står med tyske partnere. Når de sier at noe er bra, mener de det virkelig. La oss bruke tilbakemeldingene konstruktivt – de vil faktisk hjelpe oss med å forbedre forslaget."

**Medieringsstrategier brukt:**
- **Kontekstualisering**: Forklarer den kulturelle bakgrunnen for atferden.
- **Normalisering**: Viser at dette er standard, ikke personlig.
- **Positiv reframing**: Fremhever fordeler med den direkte stilen.
- **Brobygning**: Hjelper sjefen med å se muligheter i stedet for trusler.`,
    },
    {
      id: 'tysk-3-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Øv på notatteknikk: Les teksten, lag notater med symboler, og gjengi hovedinnholdet på norsk.',
        subTasks: [
          {
            label: 'a',
            task: `"Die Europäische Union steht vor einer wichtigen Entscheidung bezüglich der Klimapolitik. Einerseits fordern Umweltorganisationen strengere CO2-Grenzwerte. Andererseits warnen Industrieverbände vor Arbeitsplatzverlusten. Die EU-Kommission hat einen Kompromissvorschlag vorgelegt, der beide Seiten berücksichtigen soll." – Lag notater og gjengi på norsk.`,
            solution: 'Notater: EU → viktig klima-avgjørelse. Miljøorg.: strengere CO2 ↓. Industri: tap av arb.plasser. EU-komm.: kompromissforslag (begge sider). Gjengivelse: EU står overfor en viktig beslutning om klimapolitikk. Miljøorganisasjoner krever strengere CO2-grenser, mens industriforeninger advarer mot tap av arbeidsplasser. EU-kommisjonen har lagt frem et kompromissforslag som skal ta hensyn til begge sider.',
          },
        ],
        solution: 'EU står overfor en viktig klimabeslutning. Miljøbevegelsen vil ha strengere CO2-grenser; industrien frykter tap av arbeidsplasser. EU-kommisjonen har lagt frem et kompromiss.',
        hints: ['Bruk symboler som ↑, ↓, →', 'Skriv vertikalt med én idé per linje', 'Skriv notatene på norsk (målspråket)'],
      },
    },
    {
      id: 'tysk-3-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner Sprachmittlung sammenlignet med ren oversettelse?',
        options: [
          { id: 'a', text: 'Man oversetter alt ord for ord, men raskere', isCorrect: false },
          { id: 'b', text: 'Man velger ut det viktigste, tilpasser til mottakeren og forklarer kulturelle referanser', isCorrect: true },
          { id: 'c', text: 'Man bruker bare kroppsspråk for å formidle budskapet', isCorrect: false },
          { id: 'd', text: 'Man oversetter bare skriftlige tekster, ikke muntlige', isCorrect: false },
        ],
        solution: 'Sprachmittlung er selektiv (velger ut det viktigste), tilpasset (tar hensyn til mottakerens behov og bakgrunn), og kulturelt medierende (forklarer kulturelle referanser). Det er mer pragmatisk enn ren oversettelse.',
      },
    },
    {
      id: 'tysk-3-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-14-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kulturell mediering: Beskriv hvordan du ville forklare følgende kulturelle forskjeller for en som ikke kjenner den andre kulturen.',
        subTasks: [
          {
            label: 'a',
            task: 'En norsk venn synes det er rart at tysker håndhilser på kollegaer hver morgen.',
            solution: 'I Tyskland er håndhilsing en vanlig daglig høflighetsgest på arbeidsplassen. Det viser respekt og skaper en profesjonell distanse som verdsettes i tysk arbeidskultur. Det er ikke formelt – det er rett og slett god skikk.',
          },
          {
            label: 'b',
            task: 'En tysk venn forstår ikke hvorfor nordmenn tar av seg skoene når de går inn i et hjem.',
            solution: 'I Norge er det en selvfølge å ta av seg skoene innendørs. Det handler om renslighet (mye snø og gjørme), respekt for vertens hjem, og en tradisjon som signaliserer at man føler seg hjemme. Det er uhøflig å ikke gjøre det.',
          },
        ],
        solution: 'a) Forklar håndhilsing som daglig høflighetsgest i Tyskland. b) Forklar sko-tradisjonen som kombinasjon av praktiske og kulturelle grunner.',
        hints: ['Forklar uten å dømme – begge skikker er logiske i sin kontekst', 'Gi bakgrunn for hvorfor skikken finnes'],
      },
    },
    {
      id: 'tysk-3-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket tolking og språkformidling:

- **Dolmetschen** (tolking): Muntlig oversettelse i sanntid. Simultantolking (samtidig med taler), konsekutiv tolking (etter taler, med notater), hvisketolking og rettstolking.

- **Notizentechnik** (notatteknikk): Bruk av symboler, forkortelser, vertikal skriving og målspråksnotater for effektiv konsekutiv tolking.

- **Sprachmittlung** (språkformidling): En mediatorferdighet som innebærer selektiv, tilpasset og kulturelt medierende formidling – mer enn bare oversettelse.

- **Interkulturelle Vermittlung** (kulturell mediering): Å bygge bro mellom kulturer ved å forklare kulturelle forskjeller og forebygge misforståelser.

**Nøkkelferdigheter:**
- Rask prosessering og reformulering
- God notatteknikk med symboler
- Evne til å velge ut og tilpasse informasjon
- Kulturell sensitivitet og diplomatisk formidling`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Dolmetschen', definition: 'Tolking – muntlig oversettelse i sanntid mellom to språk' },
    { term: 'das Simultandolmetschen', definition: 'Simultantolking – tolking samtidig med at taleren snakker, brukt i store konferanser' },
    { term: 'das Konsekutivdolmetschen', definition: 'Konsekutiv tolking – tolking etter at taleren har snakket et segment, med bruk av notater' },
    { term: 'die Sprachmittlung', definition: 'Språkformidling – selektiv, tilpasset formidling av innhold mellom språk og kulturer' },
    { term: 'die interkulturelle Vermittlung', definition: 'Interkulturell formidling – å bygge bro mellom kulturer og forebygge misforståelser' },
    { term: 'die Notizentechnik', definition: 'Notatteknikk – bruk av symboler og forkortelser for effektiv konsekutiv tolking' },
    { term: 'der Mediator', definition: 'Mediator – person som formidler mellom parter med ulike språk og kulturbakgrunn' },
    { term: 'das Flüsterdolmetschen', definition: 'Hvisketolking – tolken hvisker oversettelsen til én eller to tilhørere' },
  ],
};

// ============================================================================
// KAPITTEL 15: Interkulturelle Kommunikation
// ============================================================================

// ============================================================================
// Kapittel 15.1: Kulturelle Unterschiede im Alltag
// ============================================================================

export const CHAPTER_TYSK_3_15_1: TextbookChapter = {
  id: 'tysk-3-15-1',
  courseId: 'tysk-3',
  chapterNumber: '15.1',
  title: 'Kulturelle Unterschiede im Alltag',
  subtitle: 'Kulturelle forskjeller i hverdagen',
  description: 'Utforsk kulturelle forskjeller mellom Norge og Tyskland i hverdagen, inkludert tiltaleformer, punktlighet og direkte kommunikasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  content: [
    {
      id: 'tysk-3-15-1-intro',
      type: 'text',
      content: `## Kulturelle Unterschiede im Alltag

Kulturelle forskjeller mellom Norge og Tyskland viser seg tydelig i hverdagslivet. Selv om landene er geografisk nære og deler mange verdier, finnes det markante ulikheter i sosiale koder, kommunikasjonsstil og forventninger til oppførsel.

For nordmenn som reiser til Tyskland -- eller omvendt -- kan disse forskjellene føre til overraskelser, misforståelser og til og med **Kulturschock** (kultursjokk). Ved å forstå bakgrunnen for ulike sosiale normer kan vi navigere bedre i interkulturelle situasjoner.

**Sentrale temaer i dette kapittelet:**
- Tiltaleformer: du vs. Sie
- Punktlighet og tidskultur
- Direkte kommunikasjon
- Sosiale koder i hverdagen`,
    },
    {
      id: 'tysk-3-15-1-def-1',
      type: 'definition',
      title: 'Tiltaleformer: Duzen und Siezen',
      content: `**Das Siezen** (bruk av Sie): Den formelle tiltaleformen i tysk. Brukes med fremmede, eldre, overordnede og i offisielle sammenhenger. Sie skrives alltid med stor bokstav.

**Das Duzen** (bruk av du): Den uformelle tiltaleformen. Brukes med venner, familie, barn og ofte blant kolleger som har avtalt det.

**Die Höflichkeitsform** (høflighetsformen): Samlebetegnelse for formelt språk og oppførsel i tysktalende land.

| Situasjon | Norge | Tyskland |
|-----------|-------|----------|
| Første møte med voksne | Du | Sie |
| Kolleger på jobb | Du | Ofte Sie, avhenger av bedriftskultur |
| Lærere på skolen | Du (vanlig) | Sie (alltid) |
| I butikken | Du | Sie |
| Eldre naboer | Du (vanlig) | Sie (som regel) |

I Norge bruker vi nesten alltid "du", mens i Tyskland er overgangen fra Sie til du en bevisst handling som ofte tilbys av den eldre eller høyerestående parten: **"Wollen wir uns duzen?"** (Skal vi si du til hverandre?).`,
    },
    {
      id: 'tysk-3-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Siezen i praksis',
      problem: `Du er på en jobbmesse i München og møter en potensiell arbeidsgiver for første gang. Hvordan ville du tiltale vedkommende? Oversett disse setningene til tysk med korrekt tiltaleform:

1. "Hyggelig å treffe deg. Mitt navn er [ditt navn]."
2. "Kan du fortelle meg mer om firmaet?"
3. "Jeg er veldig interessert i stillingen."`,
      solution: `1. **"Freut mich, Sie kennenzulernen. Mein Name ist [ditt navn]."**
   (Bruk Sie -- formell situasjon med ukjent person i profesjonell setting)

2. **"Könnten Sie mir mehr über Ihre Firma erzählen?"**
   (Konjunktiv II med "könnten" gjør forespørselen enda mer høflig)

3. **"Ich bin sehr an der Stelle interessiert."**
   (Denne setningen krever ikke direkte tiltale, men tonen er formell)

**Viktig:** Bruk alltid Sie i profesjonelle førstegangsmoter. Å bruke du i denne situasjonen ville vært uhøflig og uprofesjonelt i tysk kultur.`,
    },
    {
      id: 'tysk-3-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Du møter en eldre nabo i Tyskland for første gang. Hvilken tiltaleform er korrekt?',
        choices: [
          'Hallo! Wie geht es dir?',
          'Guten Tag! Wie geht es Ihnen?',
          'Hey! Wie geht\'s?',
          'Grüß Gott! Wie geht es dir?',
        ],
        correctAnswer: 'Guten Tag! Wie geht es Ihnen?',
        solution: 'Riktig svar er "Guten Tag! Wie geht es Ihnen?" fordi du bruker Sie-formen med personer du ikke kjenner, spesielt eldre. "Guten Tag" er en passende formell hilsen.',
      },
    },
    {
      id: 'tysk-3-15-1-def-2',
      type: 'definition',
      title: 'Pünktlichkeit -- den tyske punktligheten',
      content: `**Die Pünktlichkeit** (punktlighet): En dypt forankret kulturell verdi i Tyskland. Å komme for sent anses som respektløst og uprofesjonelt.

**Tyske uttrykk om punktlighet:**
- *"Pünktlichkeit ist die Höflichkeit der Könige"* -- Punktlighet er kongenes høflighet
- *"Fünf Minuten vor der Zeit ist des Deutschen Pünktlichkeit"* -- Fem minutter for tidlig er den tyske punktligheten

| Situasjon | Forventning i Tyskland | Forventning i Norge |
|-----------|----------------------|---------------------|
| Jobbmøte | Presis eller 5 min tidlig | Presis |
| Middagsselskap | Presis på klokkeslettet | 5-15 min "akademisk kvarter" |
| Legetime | 10-15 min tidlig | Presis |
| Vennetreff | Presis | Mer avslappet |
| Tog/buss | Minutt-presis (Deutsche Bahn forsøker i det minste) | Vanligvis presis |

**Die Verspätung** (forsinkelsen): Hvis du blir forsinket, er det viktig å gi beskjed så tidlig som mulig. En kort melding eller telefonsamtale er forventet: **"Es tut mir leid, ich verspäte mich um zehn Minuten."**`,
    },
    {
      id: 'tysk-3-15-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Punktlighet og unnskyldning',
      problem: `Du er invitert til en middag hos en tysk familie klokken 19:00. Du innser klokken 18:50 at du vil komme 15 minutter for sent.

a) Hva gjør du?
b) Skriv en kort SMS på tysk der du forklarer situasjonen.
c) Hva sier du når du ankommer?`,
      solution: `a) **Du ringer eller sender SMS umiddelbart.** I Tyskland er det uhøflig å bare dukke opp for sent uten forvarsel. Jo tidligere du gir beskjed, desto bedre.

b) **SMS-eksempel:**
*"Liebe Familie Müller, es tut mir sehr leid, aber ich werde mich um ca. 15 Minuten verspäten. Der Bus hatte Verspätung. Ich bitte um Entschuldigung und bin so schnell wie möglich da. Viele Grüße, [navn]"*

(Kjære familie Müller, jeg beklager veldig, men jeg blir ca. 15 minutter forsinket. Bussen var forsinket. Jeg ber om unnskyldning og er der så fort som mulig. Mange hilsener, [navn])

c) **Ved ankomst:**
*"Guten Abend! Entschuldigen Sie bitte die Verspätung. Es tut mir wirklich leid."*
(God kveld! Unnskyld forsinkelsen. Jeg beklager virkelig.)

**Tips:** Ta gjerne med en liten gave (Mitbringsel) som blomster eller vin -- dette er vanlig i Tyskland og kan avhjelpe en eventuell forsinkelse.`,
    },
    {
      id: 'tysk-3-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en kort dialog (6-8 setninger) der en norsk student unnskylder seg for å komme for sent til et møte med en tysk professor. Bruk Sie-formen og passende høflighetsfraser.',
        solution: 'Eksempel: "Guten Tag, Herr Professor Schmidt. Es tut mir außerordentlich leid, dass ich zu spät komme. Die S-Bahn hatte leider Verspätung. Ich bitte vielmals um Entschuldigung." -- "Guten Tag. Bitte nehmen Sie Platz. In Zukunft planen Sie bitte etwas mehr Zeit ein." -- "Selbstverständlich. Das wird nicht wieder vorkommen. Vielen Dank für Ihr Verständnis."',
        hints: ['Bruk Sie-formen konsekvent', 'Inkluder en forklaring og en lovnad om forbedring', 'Vis at du tar forsinkelsen alvorlig'],
      },
    },
    {
      id: 'tysk-3-15-1-def-3',
      type: 'definition',
      title: 'Direktheit -- den tyske direktheten',
      content: `**Die Direktheit** (direktheten): Tyskere er generelt mer direkte i sin kommunikasjon enn nordmenn. De sier hva de mener uten å pakke det inn like mye.

**Die soziale Norm** (den sosiale normen): Uskrevne regler for oppførsel som varierer fra kultur til kultur.

**Forskjeller i kommunikasjonsstil:**

| Tema | Norsk stil | Tysk stil |
|------|------------|-----------|
| Kritikk | Indirekte, forsiktig | Direkte, saklig |
| Uenighet | "Ja, men..." | "Nein, das stimmt nicht" |
| Forespørsel | "Kunne du kanskje...?" | "Machen Sie bitte..." |
| Kompliment | Nedtonet | Direkte og klart |
| Avslag | "Det er kanskje litt vanskelig..." | "Nein, das geht leider nicht" |

**Viktig:** Tysk direkthet er ikke ment som uhøflighet. Det ses som ærlighet og effektivitet. I norsk kultur kan det oppfattes som bryskt, men i Tyskland er det et tegn på respekt at man sier ting rett ut.

**Der Kulturschock** (kultursjokket): Den forvirringen og ubehaget man kan oppleve når man møter ukjente kulturelle koder. Forskjeller i kommunikasjonsstil er en av de vanligste årsakene til kultursjokk.`,
    },
    {
      id: 'tysk-3-15-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Direkte vs. indirekte kommunikasjon',
      problem: `Oversett disse norske uttrykkene til tysk, og tilpass dem til tysk kommunikasjonsstil:

1. "Tror du kanskje at du kunne tenke deg å lukke vinduet?"
2. "Det er kanskje ikke den beste ideen..."
3. "Vi synes vel egentlig at rapporten kunne vært litt bedre."`,
      solution: `1. **Norsk (indirekte):** "Tror du kanskje at du kunne tenke deg å lukke vinduet?"
   **Tysk (direkte):** "Könnten Sie bitte das Fenster schließen?" / "Machen Sie bitte das Fenster zu."
   (Høflig men direkte -- ingen unødvendige omveier)

2. **Norsk (indirekte):** "Det er kanskje ikke den beste ideen..."
   **Tysk (direkte):** "Ich halte das für keine gute Idee." / "Das ist keine gute Idee."
   (Klar meningsytring uten "kanskje" og "egentlig")

3. **Norsk (indirekte):** "Vi synes vel egentlig at rapporten kunne vært litt bedre."
   **Tysk (direkte):** "Der Bericht muss überarbeitet werden. Folgende Punkte sind zu verbessern: ..."
   (Saklig kritikk med konkrete forbedringspunkter)

**Merk:** I tysk kultur verdsettes det å være tydelig og konkret. Vaghet og overdreven forsiktighet kan oppfattes som usikkerhet eller mangel på kompetanse.`,
    },
    {
      id: 'tysk-3-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'En tysk kollega sier: "Ihr Vorschlag hat einige Schwächen. Erstens..." Hvordan bør du tolke dette?',
        choices: [
          'Kollegaen er uhøflig og prøver å ydmyke deg',
          'Det er konstruktiv kritikk uttrykt på typisk tysk direkte måte',
          'Kollegaen liker deg ikke personlig',
          'Du bør klage til sjefen om kollegaens oppførsel',
        ],
        correctAnswer: 'Det er konstruktiv kritikk uttrykt på typisk tysk direkte måte',
        solution: 'I tysk arbeidskultur er direkte, saklig kritikk normalt og forventet. Det handler om saken, ikke personen. Å peke på svakheter med konkrete begrunnelser viser engasjement og profesjonalitet.',
      },
    },
    {
      id: 'tysk-3-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign norsk og tysk hverdagskultur. Beskriv tre konkrete situasjoner der en nordmann kan oppleve kultursjokk i Tyskland, og forklar bakgrunnen for de kulturelle forskjellene. Skriv på norsk med tyske nøkkelbegreper.',
        subTasks: [
          { label: 'a', task: 'Beskriv en situasjon knyttet til tiltaleformer (Anredeformen).', solution: 'Eksempel: En norsk student sier "du" til en tysk professor og blir korrigert. I Norge er du-formen nesten universell, mens i Tyskland markerer Sie-formen respekt og profesjonell distanse.' },
          { label: 'b', task: 'Beskriv en situasjon knyttet til punktlighet (Pünktlichkeit).', solution: 'Eksempel: En nordmann kommer 10 minutter for sent til en middag og forstår ikke hvorfor vertskapet virker irritert. I Tyskland er punktlighet en grunnleggende verdi og forsinkelse uten forvarsel anses som respektløst.' },
          { label: 'c', task: 'Beskriv en situasjon knyttet til direkte kommunikasjon (Direktheit).', solution: 'Eksempel: En norsk ansatt blir overrasket over en tysk kollegas direkte tilbakemelding: "Das ist falsch." I norsk kultur ville man sagt noe mer forsiktig, men i Tyskland er dette saklig og ikke personlig ment.' },
        ],
        solution: 'Situasjonene bør vise forståelse for at kulturelle forskjeller har historiske og sosiale årsaker, og at verken norsk eller tysk kultur er "riktigere" enn den andre.',
        hints: ['Bruk tyske begreper i teksten din', 'Vis forståelse for begge kulturers perspektiv', 'Forklar hvorfor forskjellene oppstår'],
      },
    },
    {
      id: 'tysk-3-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (8-10 setninger) på tysk der du forklarer en kulturell forskjell mellom Norge og Tyskland for en tysk venn. Velg enten tiltaleformer, punktlighet eller kommunikasjonsstil som tema.',
        solution: 'Eksempel: "In Norwegen gibt es einen großen kulturellen Unterschied zu Deutschland: Wir sagen fast immer \'du\' zueinander. Es spielt keine Rolle, ob man mit dem Chef, dem Lehrer oder einem Fremden spricht -- \'du\' ist die normale Anrede. Das bedeutet nicht, dass wir unhöflich sind. Wir zeigen Respekt auf andere Weise, zum Beispiel durch unseren Tonfall und unser Verhalten. Wenn ein Norweger in Deutschland zum ersten Mal \'Sie\' benutzen muss, fühlt sich das oft sehr fremd und distanziert an. Aber wir verstehen, dass es in der deutschen Kultur ein Zeichen von Höflichkeit ist."',
        hints: ['Skriv fra et norsk perspektiv', 'Forklar den norske kulturen for en tysker', 'Bruk korrekt grammatikk og formelt språk'],
      },
    },
    {
      id: 'tysk-3-15-1-note-1',
      type: 'note',
      title: 'Oppsummering',
      content: `**Oppsummering kapittel 15.1 -- Kulturelle Unterschiede im Alltag:**

| Tema | Tysk begrep | Forskjell Norge/Tyskland |
|------|-------------|-------------------------|
| Tiltaleform | das Siezen / das Duzen | Norge: nesten alltid "du". Tyskland: Sie med fremmede, eldre, overordnede |
| Punktlighet | die Pünktlichkeit | Tyskland: strengere, 5 min tidlig er idealet. Norge: presis, men mer fleksibelt |
| Direkthet | die Direktheit | Tyskland: direkte og saklig. Norge: mer indirekte og forsiktig |
| Sosiale normer | die soziale Norm | Ulike forventninger til oppførsel i ulike kontekster |
| Kultursjokk | der Kulturschock | Naturlig reaksjon på ukjente kulturelle koder |

**Husk:** Kulturelle forskjeller er verken riktige eller gale -- de er ulike måter å organisere sosialt liv på. Interkulturell kompetanse handler om å forstå og respektere disse forskjellene.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Höflichkeitsform', definition: 'Høflighetsformen -- den formelle måten å tiltale noen på i tysk (Sie-formen)' },
    { term: 'das Siezen', definition: 'Å bruke den formelle tiltaleformen Sie overfor noen' },
    { term: 'das Duzen', definition: 'Å bruke den uformelle tiltaleformen du overfor noen' },
    { term: 'die Pünktlichkeit', definition: 'Punktlighet -- en sentral kulturell verdi i Tyskland' },
    { term: 'die Direktheit', definition: 'Direkthet i kommunikasjon, typisk for tysk kultur' },
    { term: 'die soziale Norm', definition: 'Sosial norm -- uskrevne regler for oppførsel i et samfunn' },
    { term: 'der Kulturschock', definition: 'Kultursjokk -- forvirring og ubehag ved møte med ukjente kulturelle koder' },
  ],
};

// ============================================================================
// Kapittel 15.2: Geschäftskultur und Arbeitsplatz
// ============================================================================

export const CHAPTER_TYSK_3_15_2: TextbookChapter = {
  id: 'tysk-3-15-2',
  courseId: 'tysk-3',
  chapterNumber: '15.2',
  title: 'Geschäftskultur und Arbeitsplatz',
  subtitle: 'Forretningskultur og arbeidsplass',
  description: 'Lær om tysk forretningskultur, hierarki på arbeidsplassen, møtekultur, jobbsøking og Vorstellungsgespräch.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kommunisere med god uttale, variert ordforråd og avanserte strukturer',
  ],
  content: [
    {
      id: 'tysk-3-15-2-intro',
      type: 'text',
      content: `## Geschäftskultur und Arbeitsplatz

Tysk forretningskultur er preget av struktur, profesjonalitet og tydelige roller. For nordmenn som skal jobbe i Tyskland -- eller samarbeide med tyske kolleger -- er det viktig å forstå disse kulturelle kodene.

Tyskland er Europas største økonomi, og mange norske bedrifter har tette forbindelser med tyske partnere. Kunnskap om tysk forretningskultur er derfor en verdifull kompetanse.

**I dette kapittelet lærer du om:**
- Hierarki og roller på arbeidsplassen
- Møtekultur og forhandlinger
- Jobbsøking: Bewerbung og Vorstellungsgespräch
- Medbestemmelse og Betriebsrat`,
    },
    {
      id: 'tysk-3-15-2-def-1',
      type: 'definition',
      title: 'Hierarki og roller på den tyske arbeidsplassen',
      content: `**Die Hierarchie** (hierarkiet): Tyske bedrifter har tradisjonelt tydeligere hierarkier enn norske. Titler og posisjoner har stor betydning.

**Die Geschäftskultur** (forretningskulturen): Regler og normer for oppførsel i forretningslivet.

**Viktige forskjeller mellom norsk og tysk arbeidsliv:**

| Aspekt | Norge | Tyskland |
|--------|-------|----------|
| Hierarki | Flatt, uformelt | Tydeligere hierarki |
| Tiltale til sjef | Fornavn | Ofte Herr/Frau + etternavn |
| Beslutninger | Konsensus, alle involveres | Lederen bestemmer, etter rådgivning |
| Kleskode | Avslappet | Mer formelt (bransjavhengig) |
| Lunsj | Matpakke, kort pause | Kantine, kan være sosialt viktig |
| Overtid | Unngås helst | Mer akseptert, men regulert |

**Die Mitbestimmung** (medbestemmelse): Et sentralt prinsipp i tysk arbeidsliv der ansatte har lovfestet rett til innflytelse gjennom **der Betriebsrat** (bedriftsrådet/fagforeningen på bedriftsnivå). Dette er unikt for Tyskland og gir arbeidstakere reell makt.`,
    },
    {
      id: 'tysk-3-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Møtekultur i Tyskland',
      problem: `Du skal delta på et forretningsmøte med tyske partnere. Les denne beskrivelsen av typisk tysk møtekultur og svar på spørsmålene:

*"In deutschen Unternehmen beginnen Besprechungen pünktlich. Die Tagesordnung wird im Voraus verteilt und streng eingehalten. Jeder Teilnehmer sollte gut vorbereitet sein und relevante Unterlagen mitbringen. Smalltalk wird kurz gehalten -- man kommt schnell zur Sache. Entscheidungen werden protokolliert."*

a) Nevn tre kjennetegn ved tysk møtekultur.
b) Hvordan skiller dette seg fra norsk møtekultur?
c) Hva betyr "zur Sache kommen"?`,
      solution: `a) **Tre kjennetegn ved tysk møtekultur:**
1. Møtet starter presis (pünktlich)
2. Dagsordenen følges strengt (die Tagesordnung wird streng eingehalten)
3. Alle skal være godt forberedt med relevante dokumenter

b) **Forskjeller fra norsk møtekultur:**
- I Norge bruker man ofte mer tid på uformell prat (Smalltalk) i starten
- Norske møter kan være mer fleksible med dagsordenen
- Norsk møtekultur er mer konsensusorientert -- alle skal høres
- I Tyskland er det mer akseptert at lederen tar beslutningen

c) **"Zur Sache kommen"** = å komme til saken, å gå rett på det viktige uten å bruke tid på irrelevant prat. Dette gjenspeiler den tyske verdien av effektivitet (die Effizienz).`,
    },
    {
      id: 'tysk-3-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken oppførsel er mest passende i et tysk forretningsmøte?',
        choices: [
          'Komme 5 minutter for sent, be om unnskyldning og sette seg ned',
          'Komme presis, ha lest dagsordenen og ha med relevante dokumenter',
          'Starte med 15 minutter uformell prat for å skape god stemning',
          'Foreslå å droppe dagsordenen og ta ting mer spontant',
        ],
        correctAnswer: 'Komme presis, ha lest dagsordenen og ha med relevante dokumenter',
        solution: 'I tysk forretningskultur er forberedelse og punktlighet avgjørende. Man forventes å kjenne dagsordenen, ha med nødvendige dokumenter og være klar til å bidra saklig fra start.',
      },
    },
    {
      id: 'tysk-3-15-2-def-2',
      type: 'definition',
      title: 'Die Bewerbung -- jobbsøknad på tysk',
      content: `**Die Bewerbung** (jobbsøknaden): I Tyskland er jobbsøknadsprosessen mer formalisert enn i Norge. En komplett Bewerbung består av flere deler:

| Dokument | Tysk | Beskrivelse |
|----------|------|-------------|
| Søknadsbrev | das Anschreiben / das Bewerbungsschreiben | Formelt brev tilpasset stillingen |
| CV | der Lebenslauf | Tabellarisk, med foto (!), detaljert |
| Vitnemål | die Zeugnisse | Alle relevante vitnemål og attester |
| Arbeidsattester | die Arbeitszeugnisse | Attester fra tidligere arbeidsgivere |
| Referanser | die Referenzen | Kontaktpersoner som kan anbefale deg |

**Viktig:** I Tyskland er det fortsatt vanlig å inkludere et profesjonelt foto (das Bewerbungsfoto) på CV-en, selv om dette er uvanlig i Norge og mange andre land.

**Der Lebenslauf** (CV-en): Skal være kronologisk (nyeste først), tabellarisk og inneholde personlige opplysninger, utdanning, arbeidserfaring, språkkunnskaper og interesser. Tysk CV er mer detaljert enn norsk.`,
    },
    {
      id: 'tysk-3-15-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive et Anschreiben',
      problem: `Du søker på en praktikantstilling (Praktikum) hos et tysk firma. Sett de følgende delene av et søknadsbrev i riktig rekkefølge:

A) "Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen."
B) "Sehr geehrte Frau Schmidt,"
C) "Hiermit bewerbe ich mich um die ausgeschriebene Praktikumsstelle in Ihrer Marketingabteilung."
D) "Mit freundlichen Grüßen, [navn]"
E) "Durch mein Studium der Betriebswirtschaftslehre bringe ich fundierte Kenntnisse im Bereich Marketing mit."`,
      solution: `**Riktig rekkefølge:**

**B)** "Sehr geehrte Frau Schmidt," -- *Tiltale (Anrede)*

**C)** "Hiermit bewerbe ich mich um die ausgeschriebene Praktikumsstelle in Ihrer Marketingabteilung." -- *Innledning: Hva du søker på*

**E)** "Durch mein Studium der Betriebswirtschaftslehre bringe ich fundierte Kenntnisse im Bereich Marketing mit." -- *Hoveddel: Dine kvalifikasjoner*

**A)** "Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen." -- *Avslutning: Ønske om intervju*

**D)** "Mit freundlichen Grüßen, [navn]" -- *Hilsen (Grußformel)*

**Struktur for Anschreiben:**
1. Avsender og dato
2. Mottaker
3. Betreff (emnelinje)
4. Anrede (tiltale)
5. Einleitung (innledning)
6. Hauptteil (hoveddel med kvalifikasjoner og motivasjon)
7. Schluss (avslutning med ønske om intervju)
8. Grußformel (hilsen)`,
    },
    {
      id: 'tysk-3-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort Anschreiben (søknadsbrev) på tysk for en sommerjobb (Ferienjob) i en tysk bokhandel (Buchhandlung). Inkluder tiltale, innledning, kort begrunnelse for interesse og avslutning.',
        solution: 'Eksempel: "Sehr geehrte Damen und Herren, hiermit bewerbe ich mich um den ausgeschriebenen Ferienjob in Ihrer Buchhandlung. Als norwegischer Austauschstudent mit großem Interesse an deutscher Literatur und guten Deutschkenntnissen (Niveau C1) bin ich überzeugt, eine Bereicherung für Ihr Team zu sein. Ich bin zuverlässig, kundenfreundlich und bringe Erfahrung im Einzelhandel mit. Über eine Einladung zu einem Vorstellungsgespräch würde ich mich sehr freuen. Mit freundlichen Grüßen, [navn]"',
        hints: ['Bruk formell tiltale', 'Nevn relevante kvalifikasjoner', 'Avslutt med ønske om intervju'],
      },
    },
    {
      id: 'tysk-3-15-2-def-3',
      type: 'definition',
      title: 'Das Vorstellungsgespräch -- jobbintervjuet',
      content: `**Das Vorstellungsgespräch** (jobbintervjuet): Formelt og strukturert i Tyskland. Forberedelse er essensielt.

**Typisk forløp:**
1. **Begrüßung** (hilsen) -- Formelt håndtrykk, Sie-form
2. **Selbstpräsentation** (selvpresentasjon) -- "Erzählen Sie uns etwas über sich"
3. **Fachfragen** (fagspørsmål) -- Om kvalifikasjoner og erfaring
4. **Unternehmensfragen** (spørsmål om bedriften) -- Vis at du har gjort research
5. **Eigene Fragen** (egne spørsmål) -- Du bør ha forberedt spørsmål
6. **Verabschiedung** (avskjed) -- Takk for samtalen

**Vanlige spørsmål:**
| Tysk | Norsk |
|------|-------|
| Was sind Ihre Stärken? | Hva er dine styrker? |
| Was sind Ihre Schwächen? | Hva er dine svakheter? |
| Warum möchten Sie bei uns arbeiten? | Hvorfor vil du jobbe hos oss? |
| Wo sehen Sie sich in fünf Jahren? | Hvor ser du deg selv om fem år? |
| Warum sollten wir Sie einstellen? | Hvorfor bør vi ansette deg? |`,
    },
    {
      id: 'tysk-3-15-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Selvpresentasjon på intervju',
      problem: `Forbered en kort selvpresentasjon (Selbstpräsentation) på tysk for et jobbintervju. Intervjueren sier: "Erzählen Sie uns bitte etwas über sich."

Din bakgrunn: Norsk student, 19 år, studerer tysk og økonomi, har jobbet deltid i en butikk, interessert i tysk kultur.`,
      solution: `**Eksempel på selvpresentasjon:**

*"Vielen Dank für die Möglichkeit, mich vorzustellen. Mein Name ist [navn], ich bin 19 Jahre alt und komme aus Norwegen. Derzeit studiere ich Deutsch und Wirtschaft an der Universität Oslo. Seit zwei Jahren arbeite ich nebenbei in einem Einzelhandelsgeschäft, wo ich wertvolle Erfahrungen im Kundenservice gesammelt habe. Mein großes Interesse an der deutschen Sprache und Kultur hat mich dazu motiviert, berufliche Erfahrungen in Deutschland zu sammeln. Ich bin teamfähig, zuverlässig und lernbereit."*

**Oversettelse:**
"Tusen takk for muligheten til å presentere meg. Mitt navn er [navn], jeg er 19 år gammel og kommer fra Norge. For tiden studerer jeg tysk og økonomi ved Universitetet i Oslo. I to år har jeg jobbet deltid i en detaljhandel, der jeg har samlet verdifull erfaring med kundeservice. Min store interesse for tysk språk og kultur har motivert meg til å samle yrkeserfaring i Tyskland. Jeg er samarbeidsvillig, pålitelig og lærevillig."

**Tips:** Selvpresentasjonen bør være 1-2 minutter, strukturert og forberedt. Nevn utdanning, erfaring og motivasjon.`,
    },
    {
      id: 'tysk-3-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Svar på disse vanlige intervjuspørsmålene på tysk (2-3 setninger per svar).',
        subTasks: [
          { label: 'a', task: 'Was sind Ihre Stärken?', solution: 'Zu meinen Stärken gehören Zuverlässigkeit und Teamfähigkeit. In meinem letzten Job habe ich bewiesen, dass ich auch unter Druck gute Arbeit leiste.' },
          { label: 'b', task: 'Warum möchten Sie bei uns arbeiten?', solution: 'Ihr Unternehmen ist führend in der Branche und bekannt für seine innovative Arbeitskultur. Ich möchte meine Fähigkeiten in einem internationalen Umfeld einsetzen und weiterentwickeln.' },
          { label: 'c', task: 'Was sind Ihre Schwächen?', solution: 'Manchmal bin ich zu perfektionistisch und verbringe zu viel Zeit mit Details. Ich arbeite aber daran, Prioritäten besser zu setzen und effizienter zu arbeiten.' },
        ],
        solution: 'Svarene bør være ærlige, men strategisk formulert. Svakheter bør presenteres med en positiv vri (at du jobber med forbedring).',
        hints: ['Svar alltid med konkrete eksempler', 'Ved svakheter: vis at du er bevisst og jobber med forbedring', 'Vis at du har gjort research om bedriften'],
      },
    },
    {
      id: 'tysk-3-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er "der Betriebsrat" i tysk arbeidsliv?',
        choices: [
          'En bedrifts styre (board of directors)',
          'Et råd valgt av ansatte som representerer deres interesser overfor ledelsen',
          'En statlig kontrollinstans som overvåker bedrifter',
          'En gruppe ledere som planlegger bedriftens strategi',
        ],
        correctAnswer: 'Et råd valgt av ansatte som representerer deres interesser overfor ledelsen',
        solution: 'Der Betriebsrat er en viktig del av det tyske systemet for Mitbestimmung (medbestemmelse). Det er et råd valgt av de ansatte som har lovfestet rett til å bli konsultert i viktige beslutninger om arbeidsforhold, oppsigelser og arbeidsvilkår.',
      },
    },
    {
      id: 'tysk-3-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered og skriv ned en komplett Selbstpräsentation (1-2 minutter, ca. 8-10 setninger) på tysk for et Vorstellungsgespräch hos et tysk teknologifirma. Inkluder utdanning, erfaring, motivasjon og personlige egenskaper.',
        solution: 'Eksempel: "Guten Tag, mein Name ist [navn]. Ich bin [alder] Jahre alt und komme aus [by], Norwegen. Zurzeit studiere ich Informatik und Deutsch an der Universität [sted]. Während meines Studiums habe ich ein Praktikum bei einer norwegischen IT-Firma absolviert, wo ich an der Entwicklung von Webanwendungen mitgearbeitet habe. Meine Deutschkenntnisse habe ich durch einen einjährigen Austausch in Hamburg vertieft. Die Technologiebranche fasziniert mich, weil sie ständig neue Herausforderungen bietet. Ihr Unternehmen interessiert mich besonders wegen Ihrer innovativen Projekte im Bereich künstliche Intelligenz. Ich bin analytisch, kreativ und arbeite gerne im Team. Ich freue mich auf die Möglichkeit, meine Fähigkeiten bei Ihnen einzubringen."',
        hints: ['Følg strukturen: hvem - utdanning - erfaring - motivasjon - egenskaper', 'Tilpass til bedriften du "søker" hos', 'Øv på å fremføre den muntlig'],
      },
    },
    {
      id: 'tysk-3-15-2-note-1',
      type: 'note',
      title: 'Oppsummering',
      content: `**Oppsummering kapittel 15.2 -- Geschäftskultur und Arbeitsplatz:**

| Tema | Tysk begrep | Hovedpoeng |
|------|-------------|------------|
| Forretningskultur | die Geschäftskultur | Mer formell og hierarkisk enn norsk |
| Jobbsøknad | die Bewerbung | Anschreiben + Lebenslauf + Zeugnisse |
| Jobbintervju | das Vorstellungsgespräch | Formelt, strukturert, forberedelse er nøkkelen |
| CV | der Lebenslauf | Tabellarisk, med foto, mer detaljert enn norsk CV |
| Hierarki | die Hierarchie | Titler og roller har større betydning enn i Norge |
| Medbestemmelse | die Mitbestimmung | Ansattes lovfestede rett til innflytelse |
| Bedriftsråd | der Betriebsrat | Valgt organ som representerer ansatte |

**Tips:** Tysk forretningskultur verdsetter grundighet (Gründlichkeit), pålitelighet (Zuverlässigkeit) og profesjonalitet. Forberedelse er alltid viktig!`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Geschäftskultur', definition: 'Forretningskultur -- normer og regler for oppførsel i næringslivet' },
    { term: 'die Bewerbung', definition: 'Jobbsøknad -- det samlede settet av dokumenter man sender ved jobbsøking' },
    { term: 'das Vorstellungsgespräch', definition: 'Jobbintervju -- formell samtale mellom søker og arbeidsgiver' },
    { term: 'der Lebenslauf', definition: 'CV -- tabellarisk oversikt over utdanning, erfaring og kvalifikasjoner' },
    { term: 'die Hierarchie', definition: 'Hierarki -- rangordning og maktstruktur i en organisasjon' },
    { term: 'die Mitbestimmung', definition: 'Medbestemmelse -- ansattes lovfestede rett til innflytelse i bedriften' },
    { term: 'der Betriebsrat', definition: 'Bedriftsråd -- valgt organ som representerer de ansattes interesser overfor ledelsen' },
  ],
};

// ============================================================================
// Kapittel 15.3: Migration und Identität
// ============================================================================

export const CHAPTER_TYSK_3_15_3: TextbookChapter = {
  id: 'tysk-3-15-3',
  courseId: 'tysk-3',
  chapterNumber: '15.3',
  title: 'Migration und Identität',
  subtitle: 'Migrasjon og identitet',
  description: 'Utforsk innvandringens historie i Tyskland, fra Gastarbeiter til Willkommenskultur, og reflekter over mangfold, integrasjon og identitetsspørsmål.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  content: [
    {
      id: 'tysk-3-15-3-intro',
      type: 'text',
      content: `## Migration und Identität

Tyskland er i dag et mangfoldig land med over 20 millioner innbyggere med innvandringsbakgrunn (Migrationshintergrund). Denne utviklingen har lange historiske røtter og har formet det moderne tyske samfunnet på grunnleggende måter.

Fra **Gastarbeiter**-programmet på 1960-tallet til flyktningkrisen i 2015 har innvandring vært et sentralt tema i tysk politikk og samfunnsdebatt. Spørsmål om integrasjon, identitet og hva det betyr å være "tysk" diskuteres intenst.

**I dette kapittelet utforsker vi:**
- Gastarbeiter-historien og dens konsekvenser
- Begreper som Leitkultur og Willkommenskultur
- Integrasjon og det flerkulturelle samfunnet
- Identitetsspørsmål i det moderne Tyskland`,
    },
    {
      id: 'tysk-3-15-3-def-1',
      type: 'definition',
      title: 'Sentrale begreper: Migrasjon i Tyskland',
      content: `**Die Migration** (migrasjonen): Menneskers forflytning fra ett land eller region til et annet. I tysk sammenheng snakker man ofte om **Einwanderung** (innvandring) og **Auswanderung** (utvandring).

**Der Gastarbeiter** (gjestearbeideren): Betegnelse på utenlandske arbeidere som ble rekruttert til Vest-Tyskland fra 1955 til 1973, hovedsakelig fra Tyrkia, Italia, Hellas, Spania og Jugoslavia. Tanken var at de skulle jobbe midlertidig, men mange ble boende permanent.

**Die Integration** (integrasjonen): Prosessen der innvandrere blir del av det nye samfunnet -- språklig, sosialt og økonomisk. I Tyskland finnes det obligatoriske integrasjonskurs (Integrationskurse) med tyskopplæring og samfunnskunnskap.

**Der Migrationshintergrund** (innvandringsbakgrunn): Offisiell tysk betegnelse for personer som selv har innvandret, eller som har minst én forelder som har innvandret til Tyskland.

| Periode | Hendelse | Konsekvens |
|---------|----------|------------|
| 1955-1973 | Gastarbeiter-program | Millioner arbeidere fra Sør-Europa og Tyrkia |
| 1989-1990 | Berlinmurens fall | Intern migrasjon fra Øst- til Vest-Tyskland |
| 1990-tallet | Jugoslavia-krigene | Store flyktningstrømmer til Tyskland |
| 2015 | Flyktningkrise | Ca. 1 million asylsøkere, "Willkommenskultur" |
| 2022 | Ukraina-krigen | Over 1 million ukrainske flyktninger |`,
    },
    {
      id: 'tysk-3-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Gastarbeiter-historien',
      problem: `Les dette utdraget og svar på spørsmålene:

*"1961 schloss die Bundesrepublik Deutschland ein Anwerbeabkommen mit der Türkei. Hunderttausende türkische Arbeiter kamen nach Deutschland, um in Fabriken, Bergwerken und auf dem Bau zu arbeiten. Man nannte sie 'Gastarbeiter', weil man davon ausging, dass sie nur vorübergehend bleiben würden. Doch viele blieben, holten ihre Familien nach und wurden Teil der deutschen Gesellschaft. Der Schriftsteller Max Frisch kommentierte treffend: 'Man hat Arbeitskräfte gerufen, und es kamen Menschen.'"*

a) Hva var et "Anwerbeabkommen"?
b) Hvorfor ble arbeiderne kalt "Gastarbeiter"?
c) Hva mente Max Frisch med sitt berømte sitat?`,
      solution: `a) **Anwerbeabkommen** = en rekrutteringsavtale mellom Tyskland og et annet land for å hente arbeidskraft. Tyskland inngikk slike avtaler med flere land: Italia (1955), Spania og Hellas (1960), Tyrkia (1961), Portugal (1964) og Jugoslavia (1968).

b) **Gastarbeiter** (gjestearbeidere) fordi man antok at de ville jobbe i Tyskland midlertidig (**vorübergehend**) og så reise hjem igjen. Begrepet viser at man ikke planla for permanent innvandring.

c) **"Man hat Arbeitskräfte gerufen, und es kamen Menschen"** (Man kalte på arbeidskraft, og det kom mennesker): Max Frisch påpekte at Tyskland bare hadde tenkt på arbeiderne som økonomiske ressurser, ikke som hele mennesker med familier, behov og rettigheter. Sitatet kritiserer den manglende integrasjonspolitikken og den naive antakelsen om at arbeiderne ville reise tilbake.`,
    },
    {
      id: 'tysk-3-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr Max Frischs berømte sitat "Man hat Arbeitskräfte gerufen, und es kamen Menschen"?',
        choices: [
          'Tyskland ønsket flere mennesker, men fikk bare arbeidere',
          'Arbeiderne var ikke kvalifiserte nok for jobbene',
          'Tyskland ba om arbeidskraft, men glemte at det kom hele mennesker med behov og familier',
          'Det kom for mange mennesker til Tyskland på en gang',
        ],
        correctAnswer: 'Tyskland ba om arbeidskraft, men glemte at det kom hele mennesker med behov og familier',
        solution: 'Sitatet kritiserer at Tyskland kun så innvandrerne som arbeidskraft (Arbeitskräfte) og ikke forberedte seg på at det kom mennesker (Menschen) som ville bli boende, få familier og trenge integrasjon i samfunnet.',
      },
    },
    {
      id: 'tysk-3-15-3-def-2',
      type: 'definition',
      title: 'Leitkultur og Willkommenskultur',
      content: `**Die Leitkultur** (den ledende kulturen / ledekulturen): Et omstridt begrep i tysk debatt. Refererer til ideen om at det finnes en felles tysk kjernekultur (basert på grunnloven, demokrati, likestilling, ytringsfrihet) som innvandrere bør tilpasse seg.

**Die Willkommenskultur** (velkommenskulturen): Begrep som ble brukt om den positive holdningen mange tyskere viste overfor flyktninger i 2015. Symbolisert av Angela Merkels utsagn: **"Wir schaffen das"** (Vi klarer dette).

**Das Zusammenleben** (samlivet / det å leve sammen): Hvordan mennesker med ulik bakgrunn lever side om side i et samfunn.

**Die multikulturelle Gesellschaft** (det flerkulturelle samfunnet): Et samfunn preget av kulturelt mangfold og ulike etniske, religiøse og kulturelle grupper.

**Debattens to sider:**

| Posisjon | Argumenter |
|----------|-----------|
| For Leitkultur | Felles verdier gir sammenhold; grunnloven som fundament; klarhet om forventninger |
| Mot Leitkultur | Begrepet er ekskluderende; kultur er dynamisk, ikke statisk; hvem definerer "ledekulturen"? |
| For Willkommenskultur | Humanitær plikt; kulturell berikelse; økonomisk gevinst |
| Mot Willkommenskultur | Integrasjonsutfordringer; kapasitetsbegrensninger; kulturelle konflikter |`,
    },
    {
      id: 'tysk-3-15-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Integrasjon og identitet',
      problem: `Les disse to utsagnene og analyser dem:

**Person A (Fatih, 25 år, født i Berlin av tyrkiske foreldre):**
*"Ich bin in Berlin geboren und aufgewachsen. Deutsch ist meine Muttersprache. Trotzdem werde ich oft gefragt: 'Wo kommst du wirklich her?' Das nervt mich. Ich bin Deutscher -- mit türkischen Wurzeln. Beides gehört zu meiner Identität."*

**Person B (Maria, 60 år, tysk uten innvandringsbakgrunn):**
*"Deutschland hat sich sehr verändert. In meiner Kindheit gab es in meinem Dorf keine Ausländer. Heute ist es bunter, und das finde ich grundsätzlich gut. Aber ich finde auch, dass Integration eine Bringschuld ist -- man muss Deutsch lernen und die Gesetze achten."*

a) Hva frustrerer Fatih?
b) Hva mener Maria med "Bringschuld"?
c) Er de to synspunktene forenlige?`,
      solution: `a) **Fatih er frustrert** over at han stadig blir spurt "Wo kommst du wirklich her?" (Hvor kommer du egentlig fra?) selv om han er født og oppvokst i Tyskland. Spørsmålet antyder at han ikke er "ordentlig" tysk på grunn av utseendet eller navnet. Han opplever at hans tyske identitet ikke anerkjennes fullt ut.

b) **"Bringschuld"** betyr en plikt som den ene parten har å oppfylle -- her mener Maria at det er innvandrernes ansvar å lære tysk og respektere lovene. Det er en forventning om aktiv innsats fra innvandrernes side for å bli integrert.

c) **De to synspunktene kan forenes:**
- Begge anerkjenner at Tyskland er et mangfoldig land
- Fatih ønsker at hans doble identitet aksepteres (tysk OG tyrkisk)
- Maria støtter mangfold, men forventer integrasjonsinnsats
- Utfordringen ligger i å definere integrasjon: handler det om språk og lover (Maria), eller også om å akseptere at "tysk" kan se annerledes ut enn tradisjonelt (Fatih)?

**Nøkkelord:** die Identität, die Zugehörigkeit (tilhørighet), die Anerkennung (anerkjennelse)`,
    },
    {
      id: 'tysk-3-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft begrepet "Leitkultur" på norsk med bruk av tyske nøkkelbegreper. Presenter argumenter for og mot, og ta stilling til om begrepet er nyttig.',
        subTasks: [
          { label: 'a', task: 'Forklar hva Leitkultur betyr og hvorfor begrepet er kontroversielt.', solution: 'Leitkultur refererer til en felles tysk kjernekultur som innvandrere forventes å tilpasse seg. Det er kontroversielt fordi det kan oppfattes som ekskluderende og fordi det er uklart hvem som definerer innholdet.' },
          { label: 'b', task: 'Gi to argumenter FOR at et land bør ha en Leitkultur.', solution: 'Felles verdier som demokrati og likestilling gir samfunnsmessig sammenhold. Tydelige forventninger letter integrasjonsprosessen for innvandrere.' },
          { label: 'c', task: 'Gi to argumenter MOT begrepet Leitkultur.', solution: 'Kultur er dynamisk og endrer seg over tid -- en "fast" lederkultur er en illusjon. Begrepet kan brukes til å ekskludere og definere noen som "ikke-tyske" selv om de er statsborgere.' },
        ],
        solution: 'En god drøfting viser forståelse for begge sider og reflekterer over kompleksiteten i integrasjonsspørsmål.',
        hints: ['Bruk tyske begreper som Grundgesetz, Zusammenleben, Integration', 'Trekk paralleller til norsk debatt om fellesverdier', 'Vis nyansert tenkning'],
      },
    },
    {
      id: 'tysk-3-15-3-def-3',
      type: 'definition',
      title: 'Det flerkulturelle Tyskland i dag',
      content: `**Die multikulturelle Gesellschaft** (det flerkulturelle samfunnet): Det moderne Tyskland er et mangfoldig samfunn. Innvandring har beriket tysk kultur på mange måter -- fra mat og musikk til litteratur og sport.

**Viktige begreper for det moderne mangfoldet:**

| Begrep | Forklaring |
|--------|-----------|
| die Vielfalt | Mangfold -- positivt ladet begrep for kulturell variasjon |
| die Toleranz | Toleranse -- aksept for ulikhet |
| die Diskriminierung | Diskriminering -- urettmessig forskjellsbehandling |
| der Rassismus | Rasisme -- diskriminering basert på etnisitet |
| die Chancengleichheit | Like muligheter -- prinsippet om at alle skal ha like sjanser |
| das Grundgesetz | Grunnloven -- fundamentet for Tysklands demokratiske verdier |

**Suksesshistorier:**
Mange tyskere med innvandringsbakgrunn har markert seg i politikk (Cem Özdemir), sport (Mesut Özil, Ilkay Gündogan), litteratur (Fatma Aydemir), og underholdning. Disse personene representerer et mangfoldig Tyskland der bakgrunn og identitet er sammensatt og dynamisk.

**Utfordringer:**
Integrasjon er en pågående prosess. Utfordringer inkluderer språkbarrierer, diskriminering på arbeidsmarkedet, og debatter om identitet og tilhørighet.`,
    },
    {
      id: 'tysk-3-15-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Sammenligne Norge og Tyskland',
      problem: `Sammenlign innvandringssituasjonen i Norge og Tyskland. Bruk disse stikkordene:

- Gastarbeiter vs. arbeidsinnvandring til Norge
- Flyktningkrisen 2015
- Integrasjonspolitikk
- Mangfold i storbyene`,
      solution: `**Sammenligning:**

**Gastarbeiter vs. norsk arbeidsinnvandring:**
- Tyskland: Anwerbeabkommen fra 1955, Gastarbeiter fra Sør-Europa og Tyrkia
- Norge: Arbeidsinnvandring fra Pakistan og Tyrkia fra 1960-tallet, innvandringsstopp i 1975
- Felles: Begge land antok at arbeiderne ville reise hjem -- begge tok feil

**Flyktningkrisen 2015:**
- Tyskland: Tok imot ca. 1 million asylsøkere, "Willkommenskultur"
- Norge: Tok imot ca. 31.000 asylsøkere, relativt sett mye for et lite land
- Felles: Begge land opplevde politisk debatt og polarisering

**Integrasjonspolitikk:**
- Tyskland: Integrationskurse (obligatoriske kurs), Einbürgerungstest (statsborgertest)
- Norge: Introduksjonsprogram, norskopplæring, samfunnskunnskap
- Felles: Begge vektlegger språk og samfunnskunnskap

**Mangfold i storbyene:**
- Berlin, München, Hamburg = Oslo, Bergen, Stavanger
- Storbyer i begge land er mer mangfoldige enn distriktene
- Både tyske og norske storbyer har områder med høy andel innvandrere`,
    },
    {
      id: 'tysk-3-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst (10-12 setninger) på norsk om temaet "Identität in einer multikulturellen Gesellschaft" (Identitet i et flerkulturelt samfunn). Bruk tyske nøkkelbegreper og trekk inn eksempler fra både Norge og Tyskland.',
        solution: `Teksten bør ta opp spørsmål om hva identitet betyr i et flerkulturelt samfunn, med referanser til både Leitkultur-debatten og norsk integrasjonsdebatt. Eksempel: "I det flerkulturelle samfunnet (die multikulturelle Gesellschaft) er identitet sjelden entydig. Mange mennesker har det man på tysk kaller en 'hybride Identität' -- en sammensatt identitet som henter elementer fra ulike kulturer. Spørsmålet om tilhørighet (die Zugehörigkeit) er sentralt: kan man være 'ordentlig' tysk eller norsk selv om man har røtter i et annet land?"`,
        hints: ['Bruk begreper som Leitkultur, Zusammenleben, Integration, Identität', 'Vis at du forstår kompleksiteten i temaet', 'Trekk paralleller mellom norsk og tysk kontekst'],
      },
    },
    {
      id: 'tysk-3-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva var Angela Merkels berømte utsagn under flyktningkrisen i 2015?',
        choices: [
          '"Deutschland über alles"',
          '"Wir schaffen das"',
          '"Einigkeit und Recht und Freiheit"',
          '"Die Mauer muss weg"',
        ],
        correctAnswer: '"Wir schaffen das"',
        solution: '"Wir schaffen das" (Vi klarer dette) ble symbolet på Tysklands Willkommenskultur i 2015. Utsagnet ble både hyllet som et uttrykk for humanisme og kritisert som naivt. Det viser tydelig den politiske debatten rundt innvandring i Tyskland.',
      },
    },
    {
      id: 'tysk-3-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar begrepene nedenfor på norsk og gi et eksempel på bruken av hvert begrep i en setning på tysk.',
        subTasks: [
          { label: 'a', task: 'die Willkommenskultur', solution: 'Velkomstkultur -- den positive holdningen til flyktninger i 2015. "Die Willkommenskultur in Deutschland zeigte sich in der großen Hilfsbereitschaft der Bevölkerung."' },
          { label: 'b', task: 'der Gastarbeiter', solution: 'Gjestearbeider -- utenlandske arbeidere rekruttert til Tyskland 1955-1973. "Mein Großvater kam als Gastarbeiter aus der Türkei nach Deutschland."' },
          { label: 'c', task: 'das Zusammenleben', solution: 'Samlivet / det å leve sammen -- hvordan ulike grupper lever side om side. "Das friedliche Zusammenleben verschiedener Kulturen ist eine große Herausforderung."' },
        ],
        solution: 'Svarene bør vise forståelse for begrepenes historiske og kulturelle kontekst, ikke bare ren oversettelse.',
        hints: ['Sett begrepene inn i historisk kontekst', 'Lag setninger som viser at du forstår nyansene'],
      },
    },
    {
      id: 'tysk-3-15-3-note-1',
      type: 'note',
      title: 'Oppsummering',
      content: `**Oppsummering kapittel 15.3 -- Migration und Identität:**

| Tema | Tysk begrep | Hovedpoeng |
|------|-------------|------------|
| Innvandring | die Migration | Tyskland har lang innvandringshistorie, fra Gastarbeiter til 2015 |
| Gjestearbeidere | der Gastarbeiter | Rekruttert 1955-1973, mange ble permanent |
| Integrasjon | die Integration | Obligatoriske kurs, språk og samfunnskunnskap |
| Lederkultur | die Leitkultur | Omstridt begrep om felles tysk kjernekultur |
| Velkomstkultur | die Willkommenskultur | Positiv holdning til flyktninger i 2015 |
| Samliv | das Zusammenleben | Utfordringer og muligheter ved flerkulturelt samfunn |
| Mangfold | die multikulturelle Gesellschaft | Tyskland er i dag et mangfoldig, dynamisk samfunn |

**Sentralt sitat:** *"Man hat Arbeitskräfte gerufen, und es kamen Menschen."* -- Max Frisch`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Migration', definition: 'Migrasjon -- menneskers forflytning fra ett land til et annet' },
    { term: 'die Integration', definition: 'Integrasjon -- prosessen der innvandrere blir del av det nye samfunnet' },
    { term: 'der Gastarbeiter', definition: 'Gjestearbeider -- utenlandsk arbeider rekruttert til Tyskland (1955-1973)' },
    { term: 'die Leitkultur', definition: 'Lederkultur -- omstridt begrep om en felles tysk kjernekultur som innvandrere bør tilpasse seg' },
    { term: 'die Willkommenskultur', definition: 'Velkomstkultur -- positiv holdning til flyktninger, særlig i 2015' },
    { term: 'das Zusammenleben', definition: 'Samliv -- hvordan mennesker med ulik bakgrunn lever side om side i et samfunn' },
    { term: 'die multikulturelle Gesellschaft', definition: 'Det flerkulturelle samfunnet -- et samfunn preget av kulturelt mangfold' },
  ],
};

// ============================================================================
// Kapittel 15.4: Interkulturelle Missverständnisse
// ============================================================================

export const CHAPTER_TYSK_3_15_4: TextbookChapter = {
  id: 'tysk-3-15-4',
  courseId: 'tysk-3',
  chapterNumber: '15.4',
  title: 'Interkulturelle Missverständnisse',
  subtitle: 'Interkulturelle misforståelser',
  description: 'Lær om typiske misforståelser mellom kulturer, forskjellen mellom stereotypier og kulturkunnskap, og strategier for kulturell sensitivitet i kommunikasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke varierte strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-3-15-4-intro',
      type: 'text',
      content: `## Interkulturelle Missverständnisse

Når mennesker fra ulike kulturer møtes, kan misforståelser oppstå -- selv med de beste intensjoner. Forskjeller i kommunikasjonsstil, kroppsspråk, humor og sosiale forventninger kan føre til forvirring, ubehag og i verste fall konflikter.

Interkulturelle misforståelser handler sjelden om språklige feil. Ofte er det de usynlige kulturelle kodene -- det vi tar for gitt i vår egen kultur -- som skaper problemer.

**I dette kapittelet lærer du om:**
- Vanlige misforståelser mellom norsk og tysk kultur
- Stereotypier vs. kulturkunnskap
- Nonverbal kommunikasjon på tvers av kulturer
- Strategier for kulturell sensitivitet`,
    },
    {
      id: 'tysk-3-15-4-def-1',
      type: 'definition',
      title: 'Stereotyp, Vorurteil og kulturell kompetanse',
      content: `**Das Stereotyp** (stereotypen): En forenklet, generalisert oppfatning om en gruppe mennesker. Kan være positive eller negative, men er alltid forenklinger av virkeligheten.

**Das Vorurteil** (fordommen): En negativ holdning overfor en person eller gruppe basert på generaliseringer, uten tilstrekkelig kunnskap eller erfaring.

**Die kulturelle Sensibilität** (kulturell sensitivitet): Evnen til å oppfatte, forstå og respektere kulturelle forskjeller uten å dømme.

**Forskjellen mellom stereotypi og kulturkunnskap:**

| Stereotypi | Kulturkunnskap |
|-----------|---------------|
| "Alle tyskere er pirkete og humørløse" | "Tysk kultur verdsetter grundighet og presisjon" |
| "Nordmenn er kalde og uvennlige" | "Norsk kommunikasjon er mer reservert i starten" |
| Generaliserer til ALLE individer | Beskriver kulturelle TENDENSER |
| Statisk og unyansert | Dynamisk og kontekstuell |
| Brukes til å dømme | Brukes til å forstå |

**Viktig:** Kulturkunnskap gir oss verktøy for å forstå tendenser og mønstre, men hvert enkelt menneske er unikt. God interkulturell kompetanse betyr å bruke kulturkunnskap som utgangspunkt -- ikke som fasit.`,
    },
    {
      id: 'tysk-3-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Stereotypi eller kulturkunnskap?',
      problem: `Kategoriser disse utsagnene som stereotypi (S) eller kulturkunnskap (K), og forklar hvorfor:

1. "Deutsche sind immer pünktlich."
2. "In der deutschen Geschäftskultur wird Pünktlichkeit hoch geschätzt."
3. "Norweger können nicht kochen -- sie essen nur Fisch."
4. "Die norwegische Küche ist stark von Fisch und Meeresfrüchten geprägt."
5. "Deutsche haben keinen Humor."
6. "Deutscher Humor ist oft trockener und weniger offensichtlich als amerikanischer Humor."`,
      solution: `1. **S -- Stereotypi.** "Deutsche sind IMMER pünktlich" -- ordet "immer" (alltid) generaliserer til alle tyskere uten unntak.

2. **K -- Kulturkunnskap.** Beskriver en kulturell verdi ("wird hoch geschätzt" = verdsettes høyt) uten å si at alle følger den.

3. **S -- Stereotypi.** Nedsettende generalisering som forenkler norsk matkultur til ett element.

4. **K -- Kulturkunnskap.** "Geprägt von" (preget av) beskriver en tendens uten å utelukke annet.

5. **S -- Stereotypi.** Negativ generalisering som avskriver en hel befolkning.

6. **K -- Kulturkunnskap.** Beskriver en stil ("trocken" = tørr/sarkastisk) og sammenligner med en annen kultur, uten å dømme.

**Nøkkelforskjell:** Stereotypier bruker absolutte ord (alle, aldri, alltid), mens kulturkunnskap beskriver tendenser og mønstre med nyanserende ord (ofte, vanligvis, tradisjonelt).`,
    },
    {
      id: 'tysk-3-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket av disse utsagnene er et eksempel på kulturkunnskap (ikke stereotypi)?',
        choices: [
          'Alle Norweger sind reich und verwöhnt.',
          'In Norwegen ist die Gleichstellung der Geschlechter ein zentraler gesellschaftlicher Wert.',
          'Norweger sind immer still und reden nie mit Fremden.',
          'Alle Norweger lieben Skifahren und Wandern.',
        ],
        correctAnswer: 'In Norwegen ist die Gleichstellung der Geschlechter ein zentraler gesellschaftlicher Wert.',
        solution: 'Dette er kulturkunnskap fordi det beskriver en samfunnsverdi ("ein zentraler gesellschaftlicher Wert") uten å generalisere til enkeltpersoner. De andre alternativene bruker "alle" eller "immer/nie" og er typiske stereotypier.',
      },
    },
    {
      id: 'tysk-3-15-4-def-2',
      type: 'definition',
      title: 'Nonverbale Kommunikation -- kroppsspråk på tvers av kulturer',
      content: `**Die nonverbale Kommunikation** (nonverbal kommunikasjon): All kommunikasjon som ikke skjer gjennom ord -- kroppsspråk, ansiktsuttrykk, gester, øyekontakt og fysisk avstand.

**Der Gesichtsverlust** (å tape ansikt): I mange kulturer er det viktig å unngå situasjoner der noen mister verdighet offentlig. I tysk kultur er direkte kritikk mer akseptert, mens i mange asiatiske kulturer er det viktig å unngå Gesichtsverlust.

**Viktige forskjeller i nonverbal kommunikasjon:**

| Aspekt | Tyskland | Norge | Potensielt misforståelse |
|--------|----------|-------|------------------------|
| Øyekontakt | Direkte og vedvarende | Noe mer avslappet | Nordmenn kan oppleve tysk øyekontakt som intens |
| Håndtrykk | Fast og bestemt | Moderat | Svakt håndtrykk tolkes negativt i Tyskland |
| Fysisk avstand | Ca. 50-100 cm | Ca. 100-120 cm | Tyskere kan komme "for nært" for nordmenn |
| Smil | Smiler ved anledning | Smiler oftere til fremmede | Tyskere kan virke "alvorlige" |
| Gester | "Daumen drücken" (knytte nevene for lykke) | Krysse fingrene for lykke | Ulike gester for samme ting |

**Das Missverständnis** (misforståelsen): Oppstår når sender og mottaker tolker et budskap ulikt, ofte på grunn av ulike kulturelle referanserammer.`,
    },
    {
      id: 'tysk-3-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Typiske interkulturelle misforståelser',
      problem: `Les disse tre situasjonene og forklar misforståelsen:

**Situasjon 1:**
En norsk student inviterer en tysk medstudent hjem til middag og sier: "Du kan godt komme en gang." Tyskeren venter på en konkret invitasjon som aldri kommer.

**Situasjon 2:**
En tysk kollega sier til sin norske kollega: "Ihr Bericht enthält mehrere Fehler. Hier ist eine Liste." Nordmannen føler seg personlig angrepet.

**Situasjon 3:**
En nordmann som bor i Tyskland, nikker og sier "ja" under en samtale med en tysk venn. Vennen tror at nordmannen er enig, men nordmannen mente bare at han lyttet.`,
      solution: `**Situasjon 1 -- Vag invitasjon:**
- **Norsk perspektiv:** "Du kan godt komme en gang" er en vennlig, men uforpliktende invitasjon. Nordmenn forstår at dette betyr "kanskje en gang i fremtiden."
- **Tysk perspektiv:** Tyskere er mer konkrete. Uten dato og tidspunkt er det ingen reell invitasjon. Tyskeren ventet på oppfølging som aldri kom.
- **Løsning:** I tysk kultur, vær konkret: "Hast du am Samstag Zeit? Ich möchte dich zum Abendessen einladen."

**Situasjon 2 -- Direkte kritikk:**
- **Tysk perspektiv:** Saklig tilbakemelding med konkrete forbedringspunkter -- dette er profesjonelt og hjelpsomt.
- **Norsk perspektiv:** Direkte kritikk uten "innpakning" oppleves som personlig angrep. I Norge ville man sagt: "Rapporten er bra, men det er noen ting vi kanskje bør se på."
- **Løsning:** Forstå at tysk Direktheit er saklig, ikke personlig ment.

**Situasjon 3 -- "Ja" som lyttemarkør:**
- **Norsk perspektiv:** "Ja" og nikking betyr "jeg hører hva du sier" -- ikke nødvendigvis enighet.
- **Tysk perspektiv:** "Ja" betyr enighet. Nikking bekrefter dette.
- **Løsning:** Vær bevisst på at lyttemarkører tolkes ulikt. I tysk kontekst, si heller "Ich verstehe" (jeg forstår) hvis du bare bekrefter at du lytter.`,
    },
    {
      id: 'tysk-3-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv to mulige interkulturelle misforståelser som kan oppstå mellom en nordmann og en tysker, og forklar hvordan de kunne vært unngått.',
        subTasks: [
          { label: 'a', task: 'Beskriv en misforståelse knyttet til kommunikasjonsstil.', solution: 'Eksempel: En nordmann sier "det er kanskje ikke helt optimalt" om et forslag. Tyskeren tolker dette som mild kritikk og beholder forslaget, mens nordmannen mente at det var et dårlig forslag. Løsning: Vær mer direkte i tysk kontekst.' },
          { label: 'b', task: 'Beskriv en misforståelse knyttet til sosiale koder eller nonverbal kommunikasjon.', solution: 'Eksempel: En tysk forretningspartner rekker hånden til hilsen med et fast håndtrykk og direkte øyekontakt. Nordmannen oppfatter dette som aggressivt, mens det er normal profesjonell hilsen i Tyskland. Løsning: Forstå at fast håndtrykk og øyekontakt viser respekt i tysk kultur.' },
        ],
        solution: 'Svarene bør vise forståelse for at misforståelser skyldes ulike kulturelle rammer, ikke mangel på god vilje.',
        hints: ['Tenk på konkrete situasjoner fra arbeidsliv eller sosiale sammenhenger', 'Forklar begge perspektivene', 'Foreslå en konkret løsning'],
      },
    },
    {
      id: 'tysk-3-15-4-def-3',
      type: 'definition',
      title: 'Kommunikasjonsstrategier for interkulturelle møter',
      content: `**Die kulturelle Sensibilität** (kulturell sensitivitet): Evnen til å oppfatte og ta hensyn til kulturelle forskjeller i kommunikasjon.

**Strategier for å unngå og håndtere misforståelser:**

**1. Bevisstgjøring (Bewusstmachung)**
Vær bevisst på at din egen kultur ikke er "normal" -- den er én av mange måter å organisere sosialt liv på.

**2. Aktiv lytting (aktives Zuhören)**
Lytt for å forstå, ikke bare for å svare. Still oppklarende spørsmål: "Habe ich Sie richtig verstanden, dass...?" (Har jeg forstått deg riktig at...?)

**3. Perspektivbytte (Perspektivwechsel)**
Forsøk å se situasjonen fra den andres kulturelle perspektiv.

**4. Tålmodighet (Geduld)**
Interkulturell kommunikasjon tar tid. Vær tålmodig med deg selv og andre.

**5. Humor og ydmykhet**
Evnen til å le av egne feil og innrømme usikkerhet bygger broer.

**Nyttige fraser for å oppklare misforståelser:**
| Tysk | Norsk |
|------|-------|
| Entschuldigung, ich glaube, es gibt ein Missverständnis. | Unnskyld, jeg tror det har oppstått en misforståelse. |
| Könnten Sie das bitte noch einmal erklären? | Kunne du forklare det en gang til? |
| In meiner Kultur bedeutet das... | I min kultur betyr det... |
| Ich wollte nicht unhöflich sein. | Jeg mente ikke å være uhøflig. |
| Können wir darüber sprechen? | Kan vi snakke om det? |`,
    },
    {
      id: 'tysk-3-15-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Løse en interkulturell misforståelse',
      problem: `Du jobber i et tysk firma. Under et møte presenterer du en idé, og en tysk kollega sier umiddelbart: "Das funktioniert so nicht. Hier sind die Probleme..." og lister opp tre svakheter. Du føler deg såret og avvist.

a) Hvordan ville du tolke dette i norsk kontekst?
b) Hvordan bør du tolke det i tysk kontekst?
c) Skriv en respons på tysk der du håndterer situasjonen konstruktivt.`,
      solution: `a) **Norsk tolkning:** I norsk møtekultur ville direkte kritikk uten positive elementer oppleves som uhøflig og demotiverende. Man ville forvente en "sandwich-tilnærming" -- noe positivt først, deretter kritikk, deretter noe positivt.

b) **Tysk tolkning:** Kollegaen engasjerer seg i ideen din og gir konkret, nyttig tilbakemelding. Direkte identifisering av problemer er et tegn på at kollegaen tar forslaget ditt seriøst og ønsker å forbedre det. Det er saklig kritikk (Sachkritik), ikke personlig kritikk.

c) **Konstruktiv respons:**
*"Vielen Dank für Ihr Feedback. Sie haben wichtige Punkte angesprochen. Lassen Sie mich kurz auf die einzelnen Probleme eingehen: Zum ersten Punkt habe ich folgende Lösung..."*

(Tusen takk for tilbakemeldingen. Du har tatt opp viktige punkter. La meg kort kommentere de enkelte problemene: Til det første punktet har jeg følgende løsning...)

**Strategi:** Takk for tilbakemeldingen, anerkjenn poengene, og svar saklig. Ved å møte tysk Direktheit med en saklig og konstruktiv holdning viser du interkulturell kompetanse.`,
    },
    {
      id: 'tysk-3-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en dialog (8-10 replikker) på tysk der et interkulturelt missverständnis oppstår og blir løst gjennom god kommunikasjon. Dialogpartnerne er en norsk og en tysk person.',
        solution: 'Eksempel: "Anna (norsk): Wir könnten vielleicht nächste Woche essen gehen? -- Thomas (tysk): Ja, gerne! Wann denn? -- Anna: Ach, irgendwann... -- Thomas: Am Dienstag oder Mittwoch? -- Anna: Hmm, mal sehen... -- Thomas: Du sagst \'irgendwann\' und \'mal sehen\'. Meinst du das ernst oder ist das nur eine höfliche Floskel? -- Anna: Oh, entschuldige! In Norwegen sind wir oft weniger konkret. Ich meine es ernst! Wie wäre es mit Mittwoch um 19 Uhr? -- Thomas: Perfekt! Jetzt verstehe ich. Danke, dass du das erklärt hast."',
        hints: ['La misforståelsen oppstå naturlig', 'Vis at begge parter bidrar til løsningen', 'Bruk oppklarende fraser fra kapittelet'],
      },
    },
    {
      id: 'tysk-3-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er den beste strategien for å håndtere en interkulturell misforståelse?',
        choices: [
          'Ignorere situasjonen og håpe den går over av seg selv',
          'Insistere på at din egen kulturs normer er de riktige',
          'Stille oppklarende spørsmål, lytte aktivt og forsøke å se den andres perspektiv',
          'Unngå all kontakt med personer fra andre kulturer',
        ],
        correctAnswer: 'Stille oppklarende spørsmål, lytte aktivt og forsøke å se den andres perspektiv',
        solution: 'Interkulturell kompetanse handler om åpenhet, nysgjerrighet og vilje til å forstå den andres perspektiv. Å stille spørsmål og lytte aktivt er nøkkelen til å oppklare misforståelser og bygge gjensidig forståelse.',
      },
    },
    {
      id: 'tysk-3-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg tre vanlige stereotypier om tyskere ELLER nordmenn. For hver stereotypi: a) formuler den, b) forklar den kulturelle bakgrunnen (kulturkunnskap), c) nyansér den med et moteksempel.',
        subTasks: [
          { label: 'a', task: 'Stereotypi nr. 1', solution: 'Stereotypi: "Deutsche sind humorlos." Kulturkunnskap: Tysk humor er ofte tørrere og mer sarkastisk enn f.eks. amerikansk humor, og uttrykkes gjerne i andre sammenhenger. Moteksempel: Tyskland har en rik tradisjon for komedie og kabarett -- fra Loriot til moderne stand-up.' },
          { label: 'b', task: 'Stereotypi nr. 2', solution: 'Stereotypi: "Norweger sind kalt und unfreundlich." Kulturkunnskap: Nordmenn er mer reserverte i starten og småsnakker mindre med fremmede. Moteksempel: Når nordmenn først blir kjent med noen, er de varme, lojale og gjestfrie.' },
          { label: 'c', task: 'Stereotypi nr. 3', solution: 'Stereotypi: "Deutsche sind Regelfanatiker." Kulturkunnskap: Tyskland verdsetter orden og forutsigbarhet, noe som viser seg i tydelige regler. Moteksempel: Tysk kultur har også sterk tradisjon for kreativitet, kunst og kulturelt opprør.' },
        ],
        solution: 'Svarene bør vise at stereotypier har en kjerne av sannhet i kulturelle tendenser, men at de alltid er forenklinger som ikke gjelder for alle individer.',
        hints: ['Skille mellom stereotypi og kulturkunnskap', 'Vis nyansert tenkning', 'Bruk konkrete eksempler'],
      },
    },
    {
      id: 'tysk-3-15-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-15-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett disse frasene for å oppklare misforståelser til tysk, og øv på å bruke dem i en tenkt situasjon.',
        subTasks: [
          { label: 'a', task: 'Unnskyld, jeg tror det har oppstått en misforståelse.', solution: 'Entschuldigung, ich glaube, es gibt ein Missverständnis.' },
          { label: 'b', task: 'I min kultur betyr dette noe annet.', solution: 'In meiner Kultur bedeutet das etwas anderes.' },
          { label: 'c', task: 'Kunne du forklare hva du mener med det?', solution: 'Könnten Sie mir erklären, was Sie damit meinen?' },
          { label: 'd', task: 'Jeg mente ikke å være uhøflig.', solution: 'Ich wollte nicht unhöflich sein.' },
        ],
        solution: 'a) Entschuldigung, ich glaube, es gibt ein Missverständnis. b) In meiner Kultur bedeutet das etwas anderes. c) Könnten Sie mir erklären, was Sie damit meinen? d) Ich wollte nicht unhöflich sein.',
        hints: ['Bruk Sie-formen i formelle kontekster', 'Konjunktiv II (könnten) gjør forespørsler mer høflige'],
      },
    },
    {
      id: 'tysk-3-15-4-note-1',
      type: 'note',
      title: 'Oppsummering',
      content: `**Oppsummering kapittel 15.4 -- Interkulturelle Missverständnisse:**

| Tema | Tysk begrep | Hovedpoeng |
|------|-------------|------------|
| Misforståelse | das Missverständnis | Oppstår når kulturelle koder tolkes ulikt |
| Stereotypi | das Stereotyp | Forenklet, generalisert bilde -- bruk kulturkunnskap i stedet |
| Fordom | das Vorurteil | Negativ holdning basert på generaliseringer |
| Kulturell sensitivitet | die kulturelle Sensibilität | Evne til å forstå og respektere kulturelle forskjeller |
| Nonverbal kommunikasjon | die nonverbale Kommunikation | Kroppsspråk, gester og fysisk avstand varierer mellom kulturer |
| Tape ansikt | der Gesichtsverlust | Å miste verdighet offentlig -- viktig å unngå i mange kulturer |

**Kommunikasjonsstrategier:**
1. Vær bevisst på egen kulturell "bagasje"
2. Lytt aktivt og still oppklarende spørsmål
3. Forsøk å se situasjonen fra den andres perspektiv
4. Vær tålmodig og ydmyk
5. Bruk humor -- men vær forsiktig med kulturavhengig humor`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Missverständnis', definition: 'Misforståelse -- situasjon der sender og mottaker tolker et budskap ulikt' },
    { term: 'das Stereotyp', definition: 'Stereotypi -- forenklet, generalisert oppfatning om en gruppe mennesker' },
    { term: 'das Vorurteil', definition: 'Fordom -- negativ holdning basert på generaliseringer uten tilstrekkelig kunnskap' },
    { term: 'die kulturelle Sensibilität', definition: 'Kulturell sensitivitet -- evnen til å oppfatte og respektere kulturelle forskjeller' },
    { term: 'die nonverbale Kommunikation', definition: 'Nonverbal kommunikasjon -- kroppsspråk, gester, øyekontakt og fysisk avstand' },
    { term: 'der Gesichtsverlust', definition: 'Tap av ansikt -- å miste verdighet eller anseelse i en offentlig eller sosial situasjon' },
  ],
};

// ============================================================================
// KAPITTEL 16: Prüfungsvorbereitung und Wiederholung
// ============================================================================

// --- 16.1: Grammatik-Wiederholung für Fortgeschrittene ---
export const CHAPTER_TYSK_3_16_1: TextbookChapter = {
  id: 'tysk-3-16-1',
  courseId: 'tysk-3',
  chapterNumber: '16.1',
  title: 'Grammatik-Wiederholung für Fortgeschrittene',
  subtitle: 'Avansert grammatikkrepetisjon',
  description: 'Repetisjon av avanserte grammatikkemner som Konjunktiv I og II, indirekte tale, passivkonstruksjoner, nominalisering og utvidet infinitiv. Fokus på typiske feil og vanskelige grammatikkpunkter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke et bredt repertoar av språklige virkemidler og avanserte språkstrukturer',
  ],
  content: [
    {
      id: 'tysk-3-16-1-intro',
      type: 'text',
      content: `## Grammatik-Wiederholung für Fortgeschrittene -- Avansert grammatikkrepetisjon

Mot slutten av Tysk nivå 3 er det viktig å repetere og befeste de avanserte grammatikkstrukturene du har lært. I dette kapittelet går vi gjennom de viktigste og vanskeligste grammatikkpunktene -- med fokus på typiske feil som norske elever gjør.

Vi dekker følgende emner:
- **Der Konjunktiv I** -- indirekte tale
- **Der Konjunktiv II** -- hypotetiske situasjoner og høflighet
- **Das Passiv** -- passivkonstruksjoner
- **Die Nominalisierung** -- substantivering
- **Der erweiterte Infinitiv** -- utvidet infinitivkonstruksjon
- **Die Satzklammer** -- setningsklamme

| Tysk | Norsk |
|------|-------|
| der Konjunktiv I | konjunktiv I (indirekte tale) |
| der Konjunktiv II | konjunktiv II (irrealis/hypotetisk) |
| die indirekte Rede | den indirekte talen |
| das Passiv | passiv |
| die Nominalisierung | substantivering |
| der erweiterte Infinitiv | den utvidede infinitiven |
| die Satzklammer | setningsklammen |
| die Konjugation | bøyningen |`,
    },
    {
      id: 'tysk-3-16-1-def-1',
      type: 'definition',
      title: 'Konjunktiv I -- indirekte Rede',
      content: `**Der Konjunktiv I** brukes primært i indirekte tale (die indirekte Rede) for å gjengi hva noen har sagt, uten å ta stilling til sannhetsgehalten.

**Dannelse:** Stammen av infinitiv + endelse (-e, -est, -e, -en, -et, -en)

| Person | sein | haben | können | gehen |
|--------|------|-------|--------|-------|
| ich | sei | habe | könne | gehe |
| du | sei(e)st | habest | könnest | gehest |
| er/sie/es | sei | habe | könne | gehe |
| wir | seien | haben* | können* | gehen* |
| ihr | seiet | habet | könnet | gehet |
| sie/Sie | seien | haben* | können* | gehen* |

*Når Konjunktiv I er identisk med indikativ, brukes Konjunktiv II i stedet.

**Viktig regel:** Hvis Konjunktiv I-formen er lik indikativformen, bruker man Konjunktiv II for å markere indirekte tale tydelig.

**Eksempel:**
- Direkte tale: *Er sagt: "Ich bin krank."*
- Indirekte tale: *Er sagt, er sei krank.* (Konjunktiv I)
- Direkte tale: *Sie sagen: "Wir haben keine Zeit."*
- Indirekte tale: *Sie sagen, sie hätten keine Zeit.* (Konjunktiv II, fordi "haben" = indikativ)`,
    },
    {
      id: 'tysk-3-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Konjunktiv I og II i indirekte tale',
      problem: `Gjør om disse direkte utsagnene til indirekte tale med Konjunktiv I (eller II der det er nødvendig):

1. Der Minister sagt: "Die Wirtschaft wächst."
2. Die Lehrerin sagt: "Alle Schüler haben die Prüfung bestanden."
3. Er behauptet: "Ich weiß nichts davon."
4. Sie erklärt: "Wir können das Problem lösen."`,
      solution: `**1. Der Minister sagt, die Wirtschaft wachse.**
- "wächst" → Konjunktiv I: "wachse" (tydelig forskjellig fra indikativ)

**2. Die Lehrerin sagt, alle Schüler hätten die Prüfung bestanden.**
- "haben" → Konjunktiv I "haben" = identisk med indikativ → Konjunktiv II: "hätten"

**3. Er behauptet, er wisse nichts davon.**
- "weiß" → Konjunktiv I: "wisse" (tydelig forskjellig fra indikativ)

**4. Sie erklärt, sie könnten das Problem lösen.**
- "können" → Konjunktiv I "können" = identisk med indikativ (for "sie") → Konjunktiv II: "könnten"

**Huskeregel:** Sjekk alltid om Konjunktiv I skiller seg fra indikativ. Hvis ikke, bruk Konjunktiv II.`,
    },
    {
      id: 'tysk-3-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning viser korrekt bruk av indirekte tale med Konjunktiv I?',
        options: [
          { id: 'a', text: 'Er sagt, er ist krank.', isCorrect: false },
          { id: 'b', text: 'Er sagt, er sei krank.', isCorrect: true },
          { id: 'c', text: 'Er sagt, er wäre krank.', isCorrect: false },
          { id: 'd', text: 'Er sagt, er war krank.', isCorrect: false },
        ],
        solution: 'Korrekt Konjunktiv I av "sein" (er/sie/es) er "sei". Alternativ (a) bruker indikativ, (c) bruker Konjunktiv II (som bare brukes når Konjunktiv I er lik indikativ), og (d) bruker preteritum.',
      },
    },
    {
      id: 'tysk-3-16-1-def-2',
      type: 'definition',
      title: 'Konjunktiv II og Passiv -- repetisjon',
      content: `**Der Konjunktiv II** brukes for:
1. **Irreale Bedingungssätze** (ureelle betingelsessetninger): *Wenn ich reich wäre, würde ich reisen.*
2. **Höfliche Bitten** (høflige forespørsler): *Könnten Sie mir helfen?*
3. **Wünsche** (ønsker): *Ich wünschte, ich hätte mehr Zeit.*

**Dannelse:**
- Sterke verb: Preteritumstamme + umlaut + endelse: *ich käme, du gingest, er führe*
- Svake verb: Identisk med preteritum → bruk "würde + infinitiv": *ich würde machen*

**Das Passiv** (passivkonstruksjoner):

| Type | Struktur | Eksempel |
|------|----------|----------|
| Vorgangspassiv | werden + Partizip II | Das Haus wird gebaut. (Huset bygges.) |
| Zustandspassiv | sein + Partizip II | Das Haus ist gebaut. (Huset er bygget.) |
| Passiv med modal | Modalverb + Partizip II + werden | Das Haus muss gebaut werden. (Huset må bygges.) |
| Passiv i preteritum | wurde + Partizip II | Das Haus wurde gebaut. (Huset ble bygget.) |
| Passiv i perfektum | ist + Partizip II + worden | Das Haus ist gebaut worden. (Huset har blitt bygget.) |

**Typiske feil:**
- Glemme "worden" i perfektum passiv (IKKE "geworden")
- Forveksle Vorgangspassiv og Zustandspassiv`,
    },
    {
      id: 'tysk-3-16-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Passivkonstruksjoner i ulike tempus',
      problem: `Gjør om disse aktive setningene til passiv i det angitte tempus:

1. "Der Lehrer korrigiert die Aufsätze." (Presens)
2. "Die Firma stellte 50 neue Mitarbeiter ein." (Preteritum)
3. "Man hat das Problem bereits gelöst." (Perfektum)
4. "Die Regierung muss die Gesetze ändern." (Presens med modalverb)`,
      solution: `**1. Presens passiv:**
*Die Aufsätze werden (vom Lehrer) korrigiert.*
- Aktiv objekt → passiv subjekt, "werden" + Partizip II

**2. Preteritum passiv:**
*50 neue Mitarbeiter wurden (von der Firma) eingestellt.*
- "wurden" (preteritum av werden) + Partizip II, merk: separerbart verb "ein|stellen" → "eingestellt"

**3. Perfektum passiv:**
*Das Problem ist bereits gelöst worden.*
- "ist" + Partizip II + "worden" (IKKE "geworden"!)

**4. Presens passiv med modalverb:**
*Die Gesetze müssen (von der Regierung) geändert werden.*
- Modalverb beholder sin posisjon, "werden" flyttes til slutten som infinitiv

**Huskeregel:** I passiv perfektum bruker vi alltid "worden", aldri "geworden". "Geworden" brukes bare i aktivsetninger med "werden" som hovedverb (Er ist Arzt geworden = Han ble lege).`,
    },
    {
      id: 'tysk-3-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om disse aktive setningene til passiv.',
        subTasks: [
          { label: 'a', task: 'Die Schüler schreiben einen Test. (Presens)', solution: 'Ein Test wird (von den Schülern) geschrieben.' },
          { label: 'b', task: 'Der Koch bereitete das Essen vor. (Preteritum)', solution: 'Das Essen wurde (vom Koch) vorbereitet.' },
          { label: 'c', task: 'Man hat die Brücke renoviert. (Perfektum)', solution: 'Die Brücke ist renoviert worden.' },
          { label: 'd', task: 'Der Arzt muss den Patienten untersuchen. (Med modalverb)', solution: 'Der Patient muss (vom Arzt) untersucht werden.' },
        ],
        solution: 'a) Ein Test wird geschrieben. b) Das Essen wurde vorbereitet. c) Die Brücke ist renoviert worden. d) Der Patient muss untersucht werden.',
        hints: ['Husk at agenten (den som handler) kan utelates i passiv', 'I perfektum passiv brukes "worden", ikke "geworden"'],
      },
    },
    {
      id: 'tysk-3-16-1-def-3',
      type: 'definition',
      title: 'Nominalisierung und erweiterter Infinitiv',
      content: `**Die Nominalisierung** (substantivering): Å gjøre verb eller adjektiv om til substantiv. Svært vanlig i formell tysk.

**Regler for nominalisering:**
- Verb → substantiv med artikkel: *das Lesen* (lesingen), *das Schreiben* (skrivingen)
- Adjektiv → substantiv: *das Gute* (det gode), *der/die Alte* (den gamle)
- Med suffiks: *-ung* (die Lösung), *-heit* (die Freiheit), *-keit* (die Möglichkeit)

**Eksempler:**
| Verb/adjektiv | Nominalisering | Norsk |
|---------------|---------------|-------|
| lesen | das Lesen | lesingen |
| reisen | die Reise | reisen |
| entscheiden | die Entscheidung | avgjørelsen |
| möglich | die Möglichkeit | muligheten |
| frei | die Freiheit | friheten |

**Der erweiterte Infinitiv** (utvidet infinitivkonstruksjon): Infinitiv med "zu" og tilhørende ledd.

**Tre hovedtyper:**

1. **Infinitiv med "zu":**
   *Es ist wichtig, die Grammatik regelmäßig zu wiederholen.*
   (Det er viktig å repetere grammatikken jevnlig.)

2. **"um...zu" (formål):**
   *Sie lernt Deutsch, um in Deutschland zu studieren.*
   (Hun lærer tysk for å studere i Tyskland.)

3. **"ohne...zu" / "anstatt...zu":**
   *Er ging weg, ohne sich zu verabschieden.* (uten å ta farvel)
   *Anstatt zu lernen, spielte er Computerspiele.* (i stedet for å lære)

**Viktig:** Ved separerbare verb kommer "zu" mellom forstavelsen og verbet: *an**zu**fangen*, *auf**zu**hören*, *ein**zu**kaufen*.`,
    },
    {
      id: 'tysk-3-16-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Nominalisierung og erweiterte Infinitive',
      problem: `a) Nominaliser verbene i disse setningene:
1. "Wenn man regelmäßig trainiert, bleibt man gesund."
2. "Er hat lange überlegt, bevor er sich entschied."

b) Fullfør setningene med riktig utvidet infinitivkonstruksjon:
3. "Es fällt mir schwer, ___." (tidlig stå opp)
4. "Er verließ das Haus, ___." (uten å si noe)
5. "___, surfte er im Internet." (i stedet for å studere)`,
      solution: `**a) Nominalisering:**
**1.** *Regelmäßiges Training hält gesund.*
- "trainieren" → "das Training" (substantivert)
- "man bleibt gesund" → "hält gesund" (mer kompakt uttrykk)

**2.** *Nach langer Überlegung entschied er sich.*
- "überlegen" → "die Überlegung" (substantivert med -ung)

**b) Utvidede infinitivkonstruksjoner:**
**3.** *Es fällt mir schwer, früh aufzustehen.*
- Separerbart verb: "auf|stehen" → "auf**zu**stehen"

**4.** *Er verließ das Haus, ohne etwas zu sagen.*
- "ohne...zu" = uten å

**5.** *Anstatt zu studieren, surfte er im Internet.*
- "anstatt...zu" = i stedet for å`,
    },
    {
      id: 'tysk-3-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning inneholder en korrekt utvidet infinitivkonstruksjon?',
        options: [
          { id: 'a', text: 'Er hat versucht, das Problem lösen.', isCorrect: false },
          { id: 'b', text: 'Er hat versucht, das Problem zu lösen.', isCorrect: true },
          { id: 'c', text: 'Er hat versucht, zu das Problem lösen.', isCorrect: false },
          { id: 'd', text: 'Er hat versucht, das Problem lösen zu.', isCorrect: false },
        ],
        solution: 'I utvidede infinitivkonstruksjoner kommer "zu" direkte foran infinitiven: "zu lösen". Hele infinitivgruppen plasseres etter kommaet. Ved separerbare verb kommer "zu" mellom forstavelse og verbstamme (f.eks. "anzufangen").',
      },
    },
    {
      id: 'tysk-3-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rett feilene i disse setningene. Hver setning inneholder en grammatikkfeil.',
        subTasks: [
          { label: 'a', task: 'Er sagte, er war krank. (indirekte tale)', solution: 'Er sagte, er sei krank. (Konjunktiv I skal brukes i indirekte tale, ikke preteritum.)' },
          { label: 'b', task: 'Das Buch ist von dem Schüler gelesen geworden. (passiv perfektum)', solution: 'Das Buch ist von dem Schüler gelesen worden. (I passiv perfektum brukes "worden", ikke "geworden".)' },
          { label: 'c', task: 'Er ging weg, ohne zu sich verabschieden. (utvidet infinitiv)', solution: 'Er ging weg, ohne sich zu verabschieden. ("zu" kommer rett foran infinitiven, refleksivpronomenet "sich" kommer før "zu".)' },
          { label: 'd', task: 'Wenn ich reich wäre, ich würde ein Haus kaufen. (Konjunktiv II)', solution: 'Wenn ich reich wäre, würde ich ein Haus kaufen. (I hovedsetningen etter "wenn"-setning skal verbet stå på andre plass -- inversjon.)' },
        ],
        solution: 'a) sei (Konj. I), b) worden (ikke geworden), c) ohne sich zu verabschieden (zu foran infinitiv), d) würde ich (inversjon i hovedsetning)',
        hints: ['Sjekk verbformen nøye', 'Tenk på ordstilling i hovedsetning etter leddsetning'],
      },
    },
    {
      id: 'tysk-3-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett setningene til tysk. Bruk de grammatiske strukturene angitt i parentes.',
        subTasks: [
          { label: 'a', task: 'Ministeren sa at han ville løse problemet. (Konjunktiv I, indirekte tale)', solution: 'Der Minister sagte, er wolle das Problem lösen. ("wollen" → Konjunktiv I: "wolle")' },
          { label: 'b', task: 'Brevet ble skrevet av eleven i går. (Preteritum passiv)', solution: 'Der Brief wurde gestern von dem/vom Schüler geschrieben.' },
          { label: 'c', task: 'Hvis jeg hadde mer tid, ville jeg lære kinesisk. (Konjunktiv II)', solution: 'Wenn ich mehr Zeit hätte, würde ich Chinesisch lernen.' },
        ],
        solution: 'a) Der Minister sagte, er wolle das Problem lösen. b) Der Brief wurde gestern vom Schüler geschrieben. c) Wenn ich mehr Zeit hätte, würde ich Chinesisch lernen.',
        hints: ['Husk at Konjunktiv I av "wollen" er "wolle"', 'Agenten i passiv innledes med "von" + dativ'],
      },
    },
    {
      id: 'tysk-3-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi repetert de viktigste avanserte grammatikkstrukturene:

- **Konjunktiv I** brukes i indirekte tale. Hvis formen er lik indikativ, erstattes den med Konjunktiv II.
- **Konjunktiv II** brukes for ureelle betingelser, høflighet og ønsker. Svake verb bruker "würde + infinitiv".
- **Passiv** dannes med "werden + Partizip II". I perfektum brukes "worden" (IKKE "geworden").
- **Nominalisierung** gjør verb/adjektiv til substantiv og er typisk for formell tysk.
- **Erweiterter Infinitiv** bruker "zu" foran infinitiven. Ved separerbare verb: "an**zu**fangen".
- **Satzklammer** -- verbet i leddsetninger står til slutt.

**Typiske feil å unngå:**
1. Bruke indikativ i stedet for konjunktiv i indirekte tale
2. Bruke "geworden" i stedet for "worden" i passiv perfektum
3. Feil plassering av "zu" i utvidede infinitivkonstruksjoner
4. Glemme inversjon i hovedsetning etter leddsetning`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Konjunktiv I', definition: 'Konjunktiv I -- verbform brukt i indirekte tale for å gjengi hva noen har sagt' },
    { term: 'der Konjunktiv II', definition: 'Konjunktiv II -- verbform for ureelle betingelser, ønsker og høflige forespørsler' },
    { term: 'die indirekte Rede', definition: 'Indirekte tale -- gjengivelse av hva noen har sagt, vanligvis med Konjunktiv I' },
    { term: 'das Passiv', definition: 'Passiv -- setningsform der handlingens objekt står som subjekt: "Das Haus wird gebaut"' },
    { term: 'die Nominalisierung', definition: 'Substantivering -- å gjøre verb eller adjektiv om til substantiv, f.eks. "lesen" → "das Lesen"' },
    { term: 'der erweiterte Infinitiv', definition: 'Utvidet infinitiv -- infinitivkonstruksjon med "zu" og tilhørende ledd' },
    { term: 'die Satzklammer', definition: 'Setningsklamme -- verbets plassering i tyske hoved- og leddsetninger' },
    { term: 'die Konjugation', definition: 'Bøyning -- systematisk endring av verbformen etter person, tall og tempus' },
  ],
};

// --- 16.2: Aufsatz und Erörterung ---
export const CHAPTER_TYSK_3_16_2: TextbookChapter = {
  id: 'tysk-3-16-2',
  courseId: 'tysk-3',
  chapterNumber: '16.2',
  title: 'Aufsatz und Erörterung',
  subtitle: 'Essay og drøfting',
  description: 'Lær om Erörterung-struktur med Einleitung, Hauptteil og Schluss, argumentasjonsteknikk, avanserte konnektorer og overganger for å skrive sammenhengende, nyanserte tekster.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive sammenhengende, nyanserte tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-16-2-intro',
      type: 'text',
      content: `## Aufsatz und Erörterung -- Essay og drøfting

En **Erörterung** (drøfting/drøftende essay) er en av de viktigste sjangrene i tysk skriftlig eksamen. I en Erörterung skal du analysere et tema fra flere sider, presentere argumenter for og mot, og komme til en begrunnet konklusjon.

Å mestre denne sjangeren krever gode ferdigheter i argumentasjon, logisk oppbygging og bruk av avanserte konnektorer.

| Tysk | Norsk |
|------|-------|
| die Erörterung | drøftingen / drøftende essay |
| der Aufsatz | essayet / stilen |
| die Einleitung | innledningen |
| der Hauptteil | hoveddelen |
| der Schluss | avslutningen |
| die These | tesen / påstanden |
| das Gegenargument | motargumentet |
| die Überleitung | overgangen / overgangsfrasen |`,
    },
    {
      id: 'tysk-3-16-2-def-1',
      type: 'definition',
      title: 'Aufbau einer Erörterung -- oppbygging',
      content: `**Die Erörterung** har en fast tredelt struktur:

**1. Die Einleitung (innledningen)**
- Presenterer temaet og vekker leserens interesse
- Kan starte med en aktuell hendelse, statistikk, provoserende spørsmål eller sitat
- Presenterer problemstillingen (die Fragestellung)
- Lengde: ca. 10-15 % av teksten

**2. Der Hauptteil (hoveddelen)**
- Presenterer argumenter systematisk
- To hovedtyper:
  - **Lineare Erörterung**: Argumenter bare for eller mot en påstand
  - **Dialektische Erörterung**: Argumenter for OG mot (mest vanlig)
- Hvert argument: Påstand (Behauptung) → Begrunnelse (Begründung) → Eksempel (Beispiel)
- Argumentene ordnes etter styrke (svakest → sterkest, eller pro/kontra vekselvis)
- Lengde: ca. 70-80 % av teksten

**3. Der Schluss (avslutningen)**
- Oppsummerer hovedargumentene
- Presenterer din egen begrunnet konklusjon (Fazit)
- Kan avslutte med et blikk fremover (Ausblick) eller en oppfordring
- Lengde: ca. 10-15 % av teksten

**Viktig:** Ikke introduser nye argumenter i avslutningen!`,
    },
    {
      id: 'tysk-3-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Erörterung-struktur i praksis',
      problem: `Tema: "Sollte das Wahlalter auf 16 Jahre gesenkt werden?" (Bør stemmerettsalderen senkes til 16 år?)

Lag en disposisjon (Gliederung) for en dialektisk Erörterung med:
- Innledning med aktualitetshok
- Tre argumenter for og tre mot
- Avslutning med konklusjon`,
      solution: `**Einleitung:**
In vielen europäischen Ländern wird derzeit diskutiert, ob Jugendliche ab 16 Jahren wählen dürfen sollten. In Österreich ist dies seit 2007 der Fall, und auch in Deutschland fordern mehrere Parteien eine Senkung des Wahlalters. Aber sind 16-Jährige reif genug für diese Verantwortung?

**Hauptteil -- Pro-Argumente:**
1. *Betroffenheit:* Politische Entscheidungen betreffen Jugendliche direkt (Bildung, Klimapolitik, Digitalisierung). Sie sollten mitbestimmen dürfen.
2. *Engagement:* Viele Jugendliche engagieren sich bereits politisch, z.B. bei "Fridays for Future". Die Wahlteilnahme wäre eine logische Fortsetzung.
3. *Frühes Interesse:* Je früher man wählen darf, desto früher entwickelt man politisches Bewusstsein. Das stärkt die Demokratie langfristig.

**Hauptteil -- Kontra-Argumente:**
1. *Reife:* Mit 16 ist die politische Urteilsfähigkeit noch nicht vollständig entwickelt. Jugendliche können leichter manipuliert werden.
2. *Inkonsistenz:* Mit 16 darf man in Deutschland weder Alkohol kaufen noch einen Vertrag unterschreiben. Warum sollte man dann über die Regierung entscheiden?
3. *Wahlbeteiligung:* Studien zeigen, dass die Wahlbeteiligung bei Erstwählern oft besonders niedrig ist.

**Schluss:**
Beide Seiten haben stichhaltige Argumente. Meiner Meinung nach überwiegen jedoch die Vorteile. Jugendliche, die sich bereits für ihre Zukunft engagieren, sollten auch das Recht haben, diese mitzugestalten. Ein begleitendes Programm zur politischen Bildung in Schulen könnte eventuelle Risiken minimieren.`,
    },
    {
      id: 'tysk-3-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge for oppbyggingen av en Erörterung?',
        options: [
          { id: 'a', text: 'Hauptteil → Einleitung → Schluss', isCorrect: false },
          { id: 'b', text: 'Einleitung → Schluss → Hauptteil', isCorrect: false },
          { id: 'c', text: 'Einleitung → Hauptteil → Schluss', isCorrect: true },
          { id: 'd', text: 'Schluss → Hauptteil → Einleitung', isCorrect: false },
        ],
        solution: 'En Erörterung følger den klassiske tredelte strukturen: Einleitung (innledning) → Hauptteil (hoveddel med argumenter) → Schluss (avslutning med konklusjon). Hoveddelen utgjør ca. 70-80 % av teksten.',
      },
    },
    {
      id: 'tysk-3-16-2-def-2',
      type: 'definition',
      title: 'Konnektoren und Überleitungen -- avanserte konnektorer',
      content: `Gode konnektorer (Konnektoren / Verknüpfungswörter) er avgjørende for en velskrevet Erörterung. De skaper logisk sammenheng mellom argumentene.

**Argumenter introduseres med:**
| Tysk | Norsk | Funksjon |
|------|-------|----------|
| Zunächst / Erstens | For det første | Første argument |
| Darüber hinaus | I tillegg | Tilleggsargument |
| Außerdem | Dessuten | Tilleggsargument |
| Ein weiteres Argument ist... | Et ytterligere argument er... | Tilleggsargument |
| Schließlich / Zuletzt | Til slutt / Endelig | Siste argument |

**Motargumenter introduseres med:**
| Tysk | Norsk |
|------|-------|
| Auf der anderen Seite... | På den andre siden... |
| Demgegenüber... | Derimot... |
| Allerdings muss man bedenken, dass... | Man må likevel betenke at... |
| Kritiker dagegen argumentieren, dass... | Kritikere derimot argumenterer for at... |
| Es gibt jedoch auch Gegenargumente. | Det finnes imidlertid også motargumenter. |

**Konklusjon og avslutning:**
| Tysk | Norsk |
|------|-------|
| Zusammenfassend lässt sich sagen, dass... | Oppsummerende kan man si at... |
| Meiner Meinung nach... | Etter min mening... |
| Alles in allem... | Alt i alt... |
| Abschließend möchte ich betonen, dass... | Avslutningsvis vil jeg understreke at... |
| Es bleibt festzuhalten, dass... | Det gjenstår å fastslå at... |`,
    },
    {
      id: 'tysk-3-16-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av konnektorer i en argumentasjonstekst',
      problem: `Tema: "Sind soziale Medien gut für die Gesellschaft?" (Er sosiale medier bra for samfunnet?)

Skriv to avsnitt -- ett pro-argument og ett kontra-argument -- med riktige konnektorer og overganger.`,
      solution: `**Pro-Argument:**
*Zunächst* ist zu betonen, dass soziale Medien die Kommunikation weltweit revolutioniert haben. Menschen können unabhängig von ihrem Standort miteinander in Kontakt treten und Informationen austauschen. *Darüber hinaus* ermöglichen Plattformen wie Twitter und Instagram es Einzelpersonen, auf gesellschaftliche Missstände aufmerksam zu machen. *Ein gutes Beispiel dafür* ist die "Me Too"-Bewegung, die ohne soziale Medien kaum diese Reichweite erzielt hätte.

**Überleitung + Kontra-Argument:**
*Auf der anderen Seite* gibt es *jedoch* auch gewichtige Gegenargumente. Soziale Medien fördern die Verbreitung von Falschinformationen und sogenannten "Fake News". *Hinzu kommt*, dass die ständige Nutzung sozialer Medien *nachweislich* negative Auswirkungen auf die psychische Gesundheit haben kann, *insbesondere* bei Jugendlichen. *Studien zeigen*, dass übermäßiger Social-Media-Konsum zu Angstzuständen, Depressionen und einem verzerrten Selbstbild führen kann.

**Markerte konnektorer:**
- *Zunächst* -- introduserer første argument
- *Darüber hinaus* -- legger til et poeng
- *Ein gutes Beispiel dafür* -- introduserer eksempel
- *Auf der anderen Seite / jedoch* -- signaliserer motargument
- *Hinzu kommt* -- legger til ytterligere poeng
- *insbesondere* -- spesifiserer
- *Studien zeigen* -- refererer til bevis`,
    },
    {
      id: 'tysk-3-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn passende konnektorer i disse setningene.',
        subTasks: [
          { label: 'a', task: '___ lässt sich sagen, dass Technologie unser Leben erleichtert hat.', solution: 'Zusammenfassend lässt sich sagen, dass... (Oppsummerende konnektor for avslutning)' },
          { label: 'b', task: '___ gibt es auch Stimmen, die vor den Gefahren warnen.', solution: 'Allerdings / Auf der anderen Seite gibt es auch Stimmen... (Konnektor for motargument)' },
          { label: 'c', task: 'Das Homeoffice spart Zeit. ___ reduziert es den CO2-Ausstoß.', solution: 'Darüber hinaus / Außerdem reduziert es... (Konnektor for tilleggsargument)' },
          { label: 'd', task: '___ möchte ich betonen, dass ein Kompromiss nötig ist.', solution: 'Abschließend möchte ich betonen... (Avslutningskonnektor)' },
        ],
        solution: 'a) Zusammenfassend, b) Allerdings / Auf der anderen Seite, c) Darüber hinaus / Außerdem, d) Abschließend',
        hints: ['Tenk på funksjonen: introduserer, tillegger, motsier eller oppsummerer?'],
      },
    },
    {
      id: 'tysk-3-16-2-def-3',
      type: 'definition',
      title: 'Argumentationstechniken -- argumentasjonsteknikk',
      content: `En god argumentasjon følger modellen **B-B-B**: **Behauptung** (påstand), **Begründung** (begrunnelse), **Beispiel** (eksempel).

**Behauptung (påstand):**
En klar påstand som uttrykker din mening eller et standpunkt.
*"Handyverbot an Schulen ist kontraproduktiv."*

**Begründung (begrunnelse):**
En logisk forklaring på HVORFOR påstanden er riktig.
*"Smartphones können als Lernmittel eingesetzt werden und bereiten Schüler auf die digitale Arbeitswelt vor."*

**Beispiel (eksempel):**
Et konkret eksempel som illustrerer og styrker argumentet.
*"In Finnland werden Smartphones aktiv im Unterricht genutzt, und das Land schneidet bei PISA-Tests hervorragend ab."*

**Ytterligere teknikker:**
- **Autoritätsargument** (autoritetsargument): Referanse til eksperter, studier, statistikk
- **Erfahrungsargument** (erfaringsargument): Basert på personlig eller allmenn erfaring
- **Analogie** (analogi): Sammenligning med et lignende tilfelle
- **Wertargument** (verdiargument): Appellerer til verdier som rettferdighet, frihet, demokrati`,
    },
    {
      id: 'tysk-3-16-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skriv et komplett argument med B-B-B-modellen',
      problem: `Bruk B-B-B-modellen til å skrive et komplett argument på tysk for følgende påstand:

"Alle Schüler sollten eine dritte Fremdsprache lernen müssen."
(Alle elever bør måtte lære et tredje fremmedspråk.)`,
      solution: `**Behauptung (påstand):**
Alle Schüler sollten die Möglichkeit haben, eine dritte Fremdsprache zu lernen, da Mehrsprachigkeit in der globalisierten Welt ein entscheidender Vorteil ist.

**Begründung (begrunnelse):**
In einer zunehmend vernetzten Welt sind Fremdsprachenkenntnisse nicht nur beruflich wichtig, sondern fördern auch das interkulturelle Verständnis und die kognitive Flexibilität. Studien der Universität Edinburgh haben gezeigt, dass mehrsprachige Menschen besser in der Lage sind, komplexe Probleme zu lösen und verschiedene Perspektiven einzunehmen.

**Beispiel (eksempel):**
In Luxemburg lernen alle Schüler drei Sprachen -- Luxemburgisch, Deutsch und Französisch. Das Land hat eine der niedrigsten Jugendarbeitslosigkeitsraten in Europa, was teilweise auf die Mehrsprachigkeit der Bevölkerung zurückgeführt wird.

**Analyse:** Argumentet følger B-B-B-strukturen:
1. Klar påstand med tydelig standpunkt
2. Logisk begrunnelse med referanse til forskning (autoritetsargument)
3. Konkret eksempel fra virkeligheten som styrker argumentet`,
    },
    {
      id: 'tysk-3-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort Erörterung (ca. 150-200 ord) på tysk om temaet: "Sollte Künstliche Intelligenz im Unterricht eingesetzt werden?" (Bør kunstig intelligens brukes i undervisningen?) Bruk Einleitung-Hauptteil-Schluss-strukturen og minst tre konnektorer.',
        solution: 'Eksempel: "Künstliche Intelligenz (KI) ist aus unserem Alltag kaum noch wegzudenken. Doch sollte sie auch im Unterricht eingesetzt werden? Zunächst spricht vieles dafür: KI-Programme können den Unterricht individualisieren und Schülern sofortiges Feedback geben. Darüber hinaus bereitet der Umgang mit KI die Schüler auf die Arbeitswelt der Zukunft vor. Auf der anderen Seite gibt es berechtigte Bedenken. KI könnte dazu führen, dass Schüler das eigenständige Denken verlernen. Außerdem bestehen Datenschutzprobleme. Zusammenfassend lässt sich sagen, dass KI im Unterricht sinnvoll eingesetzt werden kann, wenn sie als Ergänzung und nicht als Ersatz für menschliche Lehrkräfte dient."',
        hints: ['Start innledningen med en aktuell observasjon', 'Bruk B-B-B-modellen for hvert argument', 'Avslutt med din egen begrunnede mening'],
      },
    },
    {
      id: 'tysk-3-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva bør man IKKE gjøre i avslutningen (der Schluss) av en Erörterung?',
        options: [
          { id: 'a', text: 'Oppsummere hovedargumentene', isCorrect: false },
          { id: 'b', text: 'Presentere sin egen begrunnede mening', isCorrect: false },
          { id: 'c', text: 'Introdusere helt nye argumenter', isCorrect: true },
          { id: 'd', text: 'Gi et blikk fremover (Ausblick)', isCorrect: false },
        ],
        solution: 'I avslutningen av en Erörterung skal man IKKE introdusere nye argumenter. Avslutningen oppsummerer det som er drøftet i hoveddelen og presenterer en konklusjon. Nye argumenter hører hjemme i Hauptteil.',
      },
    },
    {
      id: 'tysk-3-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en innledning (Einleitung) på tysk til en Erörterung om temaet "Sollten Schuluniformen eingeführt werden?" (Bør skoleuniformer innføres?). Bruk en av følgende innledningsteknikker: aktuell hendelse, statistikk, eller provoserende spørsmål.',
        solution: 'Eksempel med provoserende spørsmål: "Jeden Morgen stehen Millionen von Schülern vor der gleichen Frage: Was ziehe ich heute an? In vielen Ländern wie England, Japan und Australien ist diese Frage längst beantwortet -- dort tragen Schüler Schuluniformen. Doch in Deutschland und Norwegen ist das Thema umstritten. Würden Schuluniformen die sozialen Unterschiede verringern, oder würden sie die individuelle Freiheit der Schüler einschränken?"',
        hints: ['Innledningen skal være ca. 10-15 % av teksten', 'Avslutt med problemstillingen (Fragestellung)', 'Ikke ta stilling i innledningen -- det kommer i avslutningen'],
      },
    },
    {
      id: 'tysk-3-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gjennomgått sjangeren **Erörterung** (drøftende essay):

**Struktur:**
- **Einleitung** (10-15 %): Introduser temaet, vekk interesse, presenter problemstillingen
- **Hauptteil** (70-80 %): Presenter argumenter systematisk med B-B-B-modellen
- **Schluss** (10-15 %): Oppsummer, konkluder, gi eventuelt et blikk fremover

**Argumentasjonsteknikk (B-B-B):**
1. **Behauptung** -- klar påstand
2. **Begründung** -- logisk begrunnelse
3. **Beispiel** -- konkret eksempel

**Konnektorer:**
- Introduksjon: *Zunächst, Erstens*
- Tillegg: *Darüber hinaus, Außerdem*
- Motargument: *Auf der anderen Seite, Allerdings*
- Konklusjon: *Zusammenfassend, Abschließend, Alles in allem*

**Husk:**
- Ikke introduser nye argumenter i avslutningen
- Bruk varierte konnektorer for flyt og sammenheng
- Presenter din egen mening i avslutningen, ikke i innledningen`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Erörterung', definition: 'Drøfting/drøftende essay -- sjanger der man analyserer et tema fra flere sider' },
    { term: 'der Aufsatz', definition: 'Essay/stil -- generell betegnelse for en lengre skriftlig tekst' },
    { term: 'die Einleitung', definition: 'Innledning -- første del av en Erörterung som presenterer temaet' },
    { term: 'der Hauptteil', definition: 'Hoveddel -- den lengste delen der argumentene presenteres systematisk' },
    { term: 'der Schluss', definition: 'Avslutning -- siste del med oppsummering og konklusjon' },
    { term: 'die These', definition: 'Tese/påstand -- et standpunkt som argumenteres for eller mot' },
    { term: 'das Gegenargument', definition: 'Motargument -- argument som taler mot en påstand' },
    { term: 'die Überleitung', definition: 'Overgang/overgangsfrase -- ord eller setninger som binder teksten sammen' },
  ],
};

// --- 16.3: Mündliche Prüfung ---
export const CHAPTER_TYSK_3_16_3: TextbookChapter = {
  id: 'tysk-3-16-3',
  courseId: 'tysk-3',
  chapterNumber: '16.3',
  title: 'Mündliche Prüfung',
  subtitle: 'Muntlig eksamen',
  description: 'Forberedelse til muntlig eksamen med presentasjonsteknikk, spontan kommunikasjon, debattferdigheter, Bildbeschreibung, Stellungnahme og Rollendiskussion.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kommunisere med god uttale, variert ordforråd og avanserte strukturer',
  ],
  content: [
    {
      id: 'tysk-3-16-3-intro',
      type: 'text',
      content: `## Mündliche Prüfung -- Muntlig eksamen

Muntlig eksamen i tysk tester din evne til å kommunisere spontant og sammenhengende på tysk. Du skal vise at du behersker språket i ulike situasjoner -- fra formelle presentasjoner til spontane diskusjoner.

De vanligste oppgavetypene på muntlig eksamen er:
- **Bildbeschreibung** (bildebeskrivelse)
- **Stellungnahme** (stillingtaken/meningsytring)
- **Rollenspiel/Rollendiskussion** (rollespill/rollediskusjon)
- **Vortrag/Präsentation** (foredrag/presentasjon)

| Tysk | Norsk |
|------|-------|
| die mündliche Prüfung | den muntlige eksamenen |
| die Bildbeschreibung | bildebeskrivelsen |
| die Stellungnahme | stillingtaken |
| das Rollenspiel | rollespillet |
| die Redemittel | språklige hjelpemidler / faste uttrykk |
| die Redewendung | talemåten / det faste uttrykket |
| die Aussprache | uttalen |
| die Körpersprache | kroppsspråket |`,
    },
    {
      id: 'tysk-3-16-3-def-1',
      type: 'definition',
      title: 'Bildbeschreibung -- bildebeskrivelse',
      content: `**Die Bildbeschreibung** er en vanlig oppgavetype der du skal beskrive og analysere et bilde. Følg denne strukturen:

**1. Einführung (introduksjon):**
- Hva slags bilde er det? (Foto, tegning, karikatur, reklame)
- Hva er temaet?
- *"Auf dem Bild sieht man... / Das Bild zeigt..."*

**2. Detaillierte Beschreibung (detaljert beskrivelse):**
- Beskriv systematisk: forgrunn → bakgrunn, venstre → høyre
- Personene: hvem, hva de gjør, ansiktsuttrykk, klær
- Omgivelsene: sted, vær, stemning
- *"Im Vordergrund / Im Hintergrund... / Auf der linken/rechten Seite..."*

**3. Interpretation (tolkning):**
- Hva formidler bildet?
- Hvilken stemning skapes?
- Hvem er målgruppen?
- *"Das Bild vermittelt den Eindruck, dass... / Die Atmosphäre wirkt..."*

**4. Persönliche Stellungnahme (personlig stillingtaken):**
- Hva tenker du om bildet/temaet?
- *"Meiner Meinung nach... / Ich finde, dass..."*

**Nyttige Redemittel for bildebeskrivelse:**
| Tysk | Norsk |
|------|-------|
| Auf dem Bild ist/sind... zu sehen. | På bildet kan man se... |
| Im Vordergrund befindet sich... | I forgrunnen befinner det seg... |
| Die Personen scheinen... zu sein. | Personene ser ut til å være... |
| Das Bild wurde vermutlich... aufgenommen. | Bildet ble sannsynligvis tatt... |
| Es handelt sich um... | Det dreier seg om... |`,
    },
    {
      id: 'tysk-3-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bildbeschreibung',
      problem: `Beskriv dette bildet systematisk på tysk:

Tenk deg et foto av en travel bygate i Berlin. Det er mange mennesker, kafeer med uteservering, moderne bygninger og en trikk i bakgrunnen. Det er en solrik sommerdag.`,
      solution: `**Einführung:**
Auf dem Foto sieht man eine belebte Straße in einer deutschen Großstadt, vermutlich Berlin. Das Bild wurde an einem sonnigen Sommertag aufgenommen.

**Detaillierte Beschreibung:**
Im Vordergrund sind zahlreiche Passanten zu sehen, die die Straße entlanggehen. Auf der linken Seite befinden sich mehrere Cafés mit Außenbestuhlung, an denen Menschen sitzen und Getränke genießen. Die Atmosphäre wirkt entspannt und lebendig. Im Hintergrund ist eine Straßenbahn zu erkennen, die durch die Straße fährt. Die Gebäude auf beiden Seiten sind modern und gut gepflegt.

**Interpretation:**
Das Bild vermittelt den Eindruck einer lebendigen, kosmopolitischen Stadt. Es zeigt das typische Stadtleben im Sommer -- Menschen genießen das gute Wetter und die urbane Atmosphäre. Die Mischung aus Tradition (Straßenbahn) und Moderne (Architektur) ist charakteristisch für Berlin.

**Persönliche Stellungnahme:**
Meiner Meinung nach zeigt das Bild eine sehr positive Seite des Stadtlebens. Es erinnert mich daran, wie wichtig öffentliche Räume und Cafés für das soziale Leben sind.`,
    },
    {
      id: 'tysk-3-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken rekkefølge bør du følge i en Bildbeschreibung?',
        options: [
          { id: 'a', text: 'Tolkning → Beskrivelse → Introduksjon → Mening', isCorrect: false },
          { id: 'b', text: 'Introduksjon → Detaljert beskrivelse → Tolkning → Personlig mening', isCorrect: true },
          { id: 'c', text: 'Personlig mening → Introduksjon → Beskrivelse → Tolkning', isCorrect: false },
          { id: 'd', text: 'Beskrivelse → Personlig mening → Introduksjon → Tolkning', isCorrect: false },
        ],
        solution: 'Bildbeschreibung følger en fast struktur: Først introduserer du bildet (hva slags bilde, tema), deretter beskriver du detaljert hva du ser, så tolker du bildet, og til slutt gir du din personlige mening.',
      },
    },
    {
      id: 'tysk-3-16-3-def-2',
      type: 'definition',
      title: 'Stellungnahme und Diskussion -- stillingtaken og diskusjon',
      content: `**Die Stellungnahme** (stillingtaken) krever at du tar stilling til et tema og begrunner din mening. På muntlig eksamen skjer dette ofte spontant.

**Struktur for Stellungnahme:**
1. Si tydelig hva du mener: *"Ich bin der Meinung, dass..."*
2. Gi begrunnelse: *"Der Grund dafür ist..."*
3. Gi eksempel: *"Ein gutes Beispiel ist..."*
4. Oppsummer: *"Deshalb bin ich überzeugt, dass..."*

**Diskusjonsteknikk -- nyttige Redemittel:**

**Si seg enig:**
| Tysk | Norsk |
|------|-------|
| Da stimme ich Ihnen völlig zu. | Der er jeg helt enig med deg. |
| Das sehe ich genauso. | Det ser jeg på samme måte. |
| Sie haben Recht, wenn Sie sagen, dass... | Du har rett når du sier at... |

**Si seg uenig (høflig):**
| Tysk | Norsk |
|------|-------|
| Da bin ich anderer Meinung. | Der er jeg av en annen mening. |
| Das sehe ich etwas anders. | Det ser jeg litt annerledes. |
| Ich verstehe Ihren Standpunkt, aber... | Jeg forstår ditt synspunkt, men... |
| Da muss ich Ihnen widersprechen. | Der må jeg motsi deg. |

**Be om oppklaring:**
| Tysk | Norsk |
|------|-------|
| Könnten Sie das bitte genauer erklären? | Kunne du forklare det nærmere? |
| Was meinen Sie damit? | Hva mener du med det? |
| Habe ich Sie richtig verstanden, dass...? | Har jeg forstått deg riktig at...? |`,
    },
    {
      id: 'tysk-3-16-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Stellungnahme -- ta stilling spontant',
      problem: `Du får spørsmålet: "Sollte man Smartphones im Unterricht verbieten?" (Bør smarttelefoner forbys i undervisningen?)

Gi en strukturert Stellungnahme på tysk (ca. 1 minutt taletid).`,
      solution: `**Mønsterbesvarelse:**

*"Das ist eine sehr aktuelle Frage, die viele Schulen beschäftigt.*

*Ich bin der Meinung, dass man Smartphones nicht komplett verbieten sollte, sondern ihren Einsatz im Unterricht sinnvoll regulieren sollte.*

*Der Grund dafür ist, dass Smartphones heute wichtige Lernmittel sind. Schüler können damit recherchieren, Sprach-Apps nutzen und an interaktiven Übungen teilnehmen. Ein komplettes Verbot würde diese Möglichkeiten verhindern.*

*Ein gutes Beispiel ist der Fremdsprachenunterricht. Hier können Schüler mit Apps wie Duolingo oder Online-Wörterbüchern arbeiten. Auch das Aufnehmen von mündlichen Übungen ist mit dem Smartphone einfach möglich.*

*Allerdings verstehe ich auch die Gegenposition. Smartphones können Schüler ablenken, und Cybermobbing ist ein ernstes Problem. Deshalb ist eine klare Regelung wichtig: Smartphones dürfen nur eingesetzt werden, wenn die Lehrkraft es erlaubt.*

*Zusammenfassend bin ich überzeugt, dass ein maßvoller Einsatz von Smartphones den Unterricht bereichern kann."*

**Analyse:**
- Klar mening fra starten
- Begrunnelse med logisk argument
- Konkret eksempel
- Anerkjenner motargumenter (viser nyansert tenkning)
- Tydelig avslutning`,
    },
    {
      id: 'tysk-3-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Formuler passende Redemittel (faste uttrykk) på tysk for disse situasjonene.',
        subTasks: [
          { label: 'a', task: 'Du vil si deg enig med samtalepartneren.', solution: 'Da stimme ich Ihnen völlig zu. / Das sehe ich genauso. / Sie haben absolut Recht.' },
          { label: 'b', task: 'Du vil si deg høflig uenig.', solution: 'Da bin ich leider anderer Meinung. / Ich verstehe Ihren Standpunkt, aber ich sehe das etwas anders. / Da muss ich Ihnen respectvoll widersprechen.' },
          { label: 'c', task: 'Du vil be om oppklaring fordi du ikke forstod.', solution: 'Entschuldigung, könnten Sie das bitte noch einmal erklären? / Was genau meinen Sie damit? / Habe ich Sie richtig verstanden, dass...?' },
          { label: 'd', task: 'Du vil oppsummere din mening til slutt.', solution: 'Zusammenfassend möchte ich sagen, dass... / Alles in allem bin ich der Überzeugung, dass... / Abschließend lässt sich festhalten, dass...' },
        ],
        solution: 'a) Da stimme ich zu. b) Da bin ich anderer Meinung. c) Könnten Sie das bitte erklären? d) Zusammenfassend möchte ich sagen, dass...',
        hints: ['Bruk Sie-formen for høflighet', 'Konjunktiv II (könnten) gjør forespørsler høfligere'],
      },
    },
    {
      id: 'tysk-3-16-3-def-3',
      type: 'definition',
      title: 'Rollenspiel und Präsentationstechnik',
      content: `**Das Rollenspiel** (rollespill): På eksamen kan du bli bedt om å spille en rolle i en bestemt situasjon -- for eksempel en jobbintervju, en klage i en butikk, eller en diskusjon med en vert.

**Tips for Rollenspiel:**
1. Les oppgaven nøye -- hvem er du, og hva er situasjonen?
2. Bruk passende register (formelt/uformelt)
3. Reager naturlig på samtalepartnerens innspill
4. Vis at du kan improvisere

**Präsentationstechnik (presentasjonsteknikk):**

**Struktur for presentasjon:**
1. **Begrüßung** (hilsen): *"Guten Tag, ich möchte heute über... sprechen."*
2. **Gliederung** (disposisjon): *"Mein Vortrag besteht aus drei Teilen: Erstens..., zweitens..., drittens..."*
3. **Hauptteil** (hoveddel): Systematisk gjennomgang med klare overganger
4. **Zusammenfassung** (oppsummering): *"Zusammenfassend lässt sich sagen..."*
5. **Abschluss** (avslutning): *"Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?"*

**Generelle tips for muntlig eksamen:**
- **Aussprache** (uttale): Tren på vanskelige lyder (ü, ö, ä, ch, sch, z)
- **Körpersprache** (kroppsspråk): Øyekontakt, åpne gester, rett holdning
- **Tempo**: Snakk tydelig, ikke for raskt
- **Fyllord**: Bruk tyske fyllord i stedet for norske/engelske: *"also"* (altså), *"na ja"* (vel), *"sozusagen"* (så å si)
- **Pauser**: Ikke vær redd for korte tenkepause -- de er naturlige`,
    },
    {
      id: 'tysk-3-16-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Rollenspiel -- Reklamation im Geschäft',
      problem: `Spill rollen som en kunde som vil klage i en butikk. Du kjøpte en jakke for to uker siden, og nå er glidelåsen ødelagt. Du vil ha pengene tilbake eller en ny jakke.

Skriv 6-8 replikker av din del av samtalen på tysk.`,
      solution: `**Kunden (du):**

1. *"Guten Tag. Ich habe vor zwei Wochen diese Jacke hier gekauft, und leider ist der Reißverschluss kaputt gegangen."*
(God dag. Jeg kjøpte denne jakken her for to uker siden, og dessverre har glidelåsen gått i stykker.)

2. *"Ja, hier ist die Quittung. Wie Sie sehen können, habe ich die Jacke am 5. Februar gekauft."*
(Ja, her er kvitteringen. Som du kan se, kjøpte jeg jakken 5. februar.)

3. *"Nein, ich habe die Jacke ganz normal getragen. Der Reißverschluss ist von selbst kaputt gegangen."*
(Nei, jeg har brukt jakken helt normalt. Glidelåsen gikk i stykker av seg selv.)

4. *"Ich hätte gerne mein Geld zurück. Oder wenn das nicht möglich ist, möchte ich die Jacke gegen eine neue umtauschen."*
(Jeg vil gjerne ha pengene tilbake. Eller hvis det ikke er mulig, vil jeg bytte jakken mot en ny.)

5. *"Das verstehe ich, aber als Kunde habe ich ein Recht auf eine fehlerfreie Ware. Die Jacke war von Anfang an mangelhaft."*
(Det forstår jeg, men som kunde har jeg rett til en feilfri vare. Jakken var mangelfull fra starten.)

6. *"Vielen Dank für Ihr Verständnis. Dann nehme ich bitte die neue Jacke."*
(Tusen takk for forståelsen. Da tar jeg gjerne den nye jakken.)

**Nøkkelord:** die Quittung (kvittering), der Reißverschluss (glidelås), umtauschen (bytte), mangelhaft (mangelfull), das Recht (retten)`,
    },
    {
      id: 'tysk-3-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered en kort presentasjon (Vortrag) på tysk om temaet "Mein Lieblingsland" (Mitt favorittland). Skriv ned stikkord for hver del av presentasjonen.',
        subTasks: [
          { label: 'a', task: 'Skriv en passende hilsen og presentasjon av temaet (Begrüßung).', solution: 'Eksempel: "Guten Tag! Ich freue mich, Ihnen heute mein Lieblingsland vorstellen zu dürfen. Ich möchte über Japan sprechen, ein Land, das mich seit meiner Kindheit fasziniert."' },
          { label: 'b', task: 'Skriv en disposisjon med tre hovedpunkter (Gliederung).', solution: 'Eksempel: "Mein Vortrag besteht aus drei Teilen: Erstens werde ich die Kultur und Traditionen Japans beschreiben, zweitens die kulinarischen Besonderheiten vorstellen und drittens erklären, warum ich dieses Land so faszinierend finde."' },
          { label: 'c', task: 'Skriv en passende avslutning med takk og invitasjon til spørsmål.', solution: 'Eksempel: "Zusammenfassend kann ich sagen, dass Japan ein Land voller Kontraste ist -- Tradition und Moderne, Stille und Energie. Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?"' },
        ],
        solution: 'Presentasjonen bør ha tydelig struktur med hilsen, disposisjon, hoveddel og avslutning. Bruk høflig register og variert ordforråd.',
        hints: ['Start med en engasjerende åpning', 'Si tydelig hva du skal snakke om', 'Avslutt med takk og åpning for spørsmål'],
      },
    },
    {
      id: 'tysk-3-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den mest høflige måten å si seg uenig med noen på tysk i en formell diskusjon?',
        options: [
          { id: 'a', text: 'Das ist falsch!', isCorrect: false },
          { id: 'b', text: 'Nein, Sie haben Unrecht.', isCorrect: false },
          { id: 'c', text: 'Ich verstehe Ihren Standpunkt, aber ich sehe das etwas anders.', isCorrect: true },
          { id: 'd', text: 'Das stimmt überhaupt nicht.', isCorrect: false },
        ],
        solution: '"Ich verstehe Ihren Standpunkt, aber ich sehe das etwas anders" er den mest høflige formuleringen. Den anerkjenner den andres perspektiv før man introduserer sin egen mening. De andre alternativene er for direkte eller uhøflige for en formell kontekst.',
      },
    },
    {
      id: 'tysk-3-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse nyttige frasene for muntlig eksamen til tysk.',
        subTasks: [
          { label: 'a', task: 'God dag, i dag vil jeg snakke om...', solution: 'Guten Tag, heute möchte ich über... sprechen.' },
          { label: 'b', task: 'Presentasjonen min består av tre deler.', solution: 'Mein Vortrag besteht aus drei Teilen.' },
          { label: 'c', task: 'La meg komme til neste punkt.', solution: 'Lassen Sie mich zum nächsten Punkt kommen.' },
          { label: 'd', task: 'Tusen takk for oppmerksomheten. Har dere spørsmål?', solution: 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?' },
        ],
        solution: 'a) Guten Tag, heute möchte ich über... sprechen. b) Mein Vortrag besteht aus drei Teilen. c) Lassen Sie mich zum nächsten Punkt kommen. d) Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?',
        hints: ['Bruk Sie-formen i formelle presentasjoner', 'Modalverb "möchte" er høflig for å uttrykke ønske'],
      },
    },
    {
      id: 'tysk-3-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi forberedt oss på muntlig eksamen med tre hovedoppgavetyper:

**1. Bildbeschreibung (bildebeskrivelse):**
- Følg strukturen: Introduksjon → Detaljert beskrivelse → Tolkning → Personlig mening
- Bruk romlige markører: *Im Vordergrund, Im Hintergrund, Auf der linken/rechten Seite*

**2. Stellungnahme (stillingtaken):**
- Ta tydelig stilling og begrunn din mening
- Anerkjenn motargumenter for å vise nyansert tenkning
- Bruk passende Redemittel for enighet, uenighet og oppklaring

**3. Rollenspiel/Präsentation:**
- Tilpass registeret til situasjonen (formelt/uformelt)
- Strukturer presentasjoner med hilsen, disposisjon, hoveddel og avslutning
- Reager naturlig og fleksibelt i rollespill

**Generelle tips:**
- Tren på uttale av vanskelige lyder
- Bruk tyske fyllord, ikke norske/engelske
- Hold øyekontakt og bruk åpne gester
- Ikke vær redd for tenkepause`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die mündliche Prüfung', definition: 'Muntlig eksamen -- eksamen der man testes i muntlig kommunikasjon' },
    { term: 'die Bildbeschreibung', definition: 'Bildebeskrivelse -- systematisk beskrivelse og analyse av et bilde' },
    { term: 'die Stellungnahme', definition: 'Stillingtaken -- å uttrykke og begrunne sin mening om et tema' },
    { term: 'das Rollenspiel', definition: 'Rollespill -- simulert samtalesituasjon der man spiller en bestemt rolle' },
    { term: 'die Redemittel', definition: 'Språklige hjelpemidler -- faste uttrykk og fraser for bestemte kommunikasjonssituasjoner' },
    { term: 'die Redewendung', definition: 'Talemåte/fast uttrykk -- idiomatisk uttrykk med overført betydning' },
  ],
};

// --- 16.4: Prüfungssimulation ---
export const CHAPTER_TYSK_3_16_4: TextbookChapter = {
  id: 'tysk-3-16-4',
  courseId: 'tysk-3',
  chapterNumber: '16.4',
  title: 'Prüfungssimulation',
  subtitle: 'Eksamenssimulering',
  description: 'Eksamensstrategier, tidsbruk, typiske oppgavetyper og simulerte eksamensoppgaver i alle ferdighetsområder for optimal eksamensforberedelse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke varierte strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-3-16-4-intro',
      type: 'text',
      content: `## Prüfungssimulation -- Eksamenssimulering

I dette avsluttende kapittelet samler vi alt du har lært og simulerer en eksamenssituasjon. God eksamensforberedelse handler ikke bare om å kunne stoffet -- det handler også om strategi, tidsbruk og mental forberedelse.

**Typiske oppgavetyper på eksamen i Tysk nivå 3:**
1. **Leseverständnis** (leseforståelse) -- lese og svare på spørsmål om en tekst
2. **Textproduktion** (tekstproduksjon) -- skrive essay, drøfting eller kreativ tekst
3. **Grammatik** (grammatikk) -- grammatikkoppgaver med fokus på avanserte strukturer
4. **Hörverstehen** (lytteforståelse) -- lytte og svare på spørsmål
5. **Mündliche Kommunikation** (muntlig kommunikasjon) -- presentasjon og samtale

| Tysk | Norsk |
|------|-------|
| die Prüfung | eksamenen |
| die Aufgabenstellung | oppgaveformuleringen |
| die Bewertung | vurderingen |
| das Zeitmanagement | tidsstyringen |
| der Entwurf | utkastet |
| die Korrektur | rettingen / korrigeringen |
| die Überarbeitung | omarbeidingen / redigeringen |
| die Musterlösung | mønsterbesvarelsen |`,
    },
    {
      id: 'tysk-3-16-4-def-1',
      type: 'definition',
      title: 'Prüfungsstrategien -- eksamensstrategier',
      content: `**Das Zeitmanagement** (tidsstyring) er avgjørende for et godt eksamensresultat. Her er en anbefalt tidsfordeling for en 5-timers skriftlig eksamen:

**Tidsfordeling:**
| Fase | Tid | Aktivitet |
|------|-----|-----------|
| Lesefase | 15-20 min | Les ALLE oppgavene grundig |
| Planlegging | 15-20 min | Velg oppgaver, lag disposisjon |
| Skriving | 3-3,5 timer | Skriv besvarelsene |
| Korrektur | 20-30 min | Les gjennom og rett feil |

**Strategier for eksamensdagen:**

**1. Les oppgaven nøye (die Aufgabenstellung)**
- Understrek nøkkelord: *erörtern* (drøfte), *beschreiben* (beskrive), *vergleichen* (sammenligne)
- Forstå hva oppgaven ber om -- ikke skriv om noe annet!

**2. Lag en disposisjon (der Entwurf)**
- Bruk 10-15 minutter på en enkel punktliste
- Disposisjonen gir deg struktur og forhindrer at du går tom for innhold

**3. Skriv tydelig og strukturert**
- Bruk avsnitt og overskrifter der det er naturlig
- Varier setningslengde og -struktur
- Bruk konnektorer for flyt

**4. Korrekturlesing (die Korrektur)**
- Les gjennom hele besvarelsen til slutt
- Sjekk: verb i riktig posisjon? Kasus etter preposisjoner? Adjektivendelser?
- Rett feil pent med overstreking

**5. Vanlige grammatikkfeil å sjekke:**
- Verb-endelse samsvarer med subjektet
- V2-regelen (verbet på andre plass i hovedsetning)
- Verbet til slutt i leddsetninger
- Riktig kasus etter preposisjoner (Dativ/Akkusativ)`,
    },
    {
      id: 'tysk-3-16-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Analyse av oppgaveformulering',
      problem: `Les disse tre oppgaveformuleringene og identifiser:
a) Hva slags teksttype forventes (sjanger)?
b) Hva er nøkkelordene?
c) Hva er fellen?

1. "Erörtern Sie, ob soziale Medien mehr Vorteile oder Nachteile für Jugendliche haben."
2. "Beschreiben Sie das Bild und nehmen Sie Stellung zum dargestellten Thema."
3. "Vergleichen Sie das deutsche und das norwegische Schulsystem und bewerten Sie die Unterschiede."`,
      solution: `**1. "Erörtern Sie, ob soziale Medien mehr Vorteile oder Nachteile für Jugendliche haben."**
- **Sjanger:** Dialektische Erörterung (drøfting med pro og kontra)
- **Nøkkelord:** *erörtern* (drøfte), *Vorteile oder Nachteile* (fordeler eller ulemper), *Jugendliche* (ungdommer)
- **Felle:** Du MÅ drøfte BEGGE sider, ikke bare argumentere for én side. Og målgruppen er spesifikt ungdommer, ikke alle.

**2. "Beschreiben Sie das Bild und nehmen Sie Stellung zum dargestellten Thema."**
- **Sjanger:** Bildbeschreibung + Stellungnahme (to deler!)
- **Nøkkelord:** *beschreiben* (beskrive), *Stellung nehmen* (ta stilling), *dargestellten Thema* (det fremstilte temaet)
- **Felle:** Oppgaven har TO deler. Mange glemmer den andre delen (Stellungnahme) og beskriver bare bildet.

**3. "Vergleichen Sie das deutsche und das norwegische Schulsystem und bewerten Sie die Unterschiede."**
- **Sjanger:** Sammenligning + vurdering
- **Nøkkelord:** *vergleichen* (sammenligne), *bewerten* (vurdere), *Unterschiede* (forskjeller)
- **Felle:** Du må BÅDE sammenligne OG vurdere. En ren faktabeskrivelse uten vurdering gir ikke full uttelling.

**Generell regel:** Understrek alle verb i oppgaveformuleringen -- de forteller deg NØYAKTIG hva du skal gjøre.`,
    },
    {
      id: 'tysk-3-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du har 5 timer på eksamen. Hvilken tidsfordeling er mest fornuftig?',
        options: [
          { id: 'a', text: 'Begynne å skrive umiddelbart og bruke all tid på skriving', isCorrect: false },
          { id: 'b', text: '15-20 min lesing, 15-20 min planlegging, 3-3,5 timer skriving, 20-30 min korrektur', isCorrect: true },
          { id: 'c', text: '2 timer planlegging, 2 timer skriving, 1 time korrektur', isCorrect: false },
          { id: 'd', text: '4 timer skriving, 1 time korrektur', isCorrect: false },
        ],
        solution: 'En balansert tidsfordeling er viktig. Ca. 15-20 minutter til å lese og forstå oppgavene, 15-20 minutter til planlegging/disposisjon, 3-3,5 timer til selve skrivingen, og 20-30 minutter til korrekturlesing. Å hoppe over planlegging eller korrektur er de vanligste feilene.',
      },
    },
    {
      id: 'tysk-3-16-4-def-2',
      type: 'definition',
      title: 'Bewertungskriterien -- vurderingskriterier',
      content: `**Die Bewertung** (vurderingen) på eksamen i Tysk nivå 3 tar vanligvis hensyn til følgende kriterier:

**1. Inhalt (innhold) -- ca. 40 %**
- Relevans: Svarer besvarelsen på oppgaven?
- Dybde: Er argumentene godt utviklet?
- Kunnskap: Viser besvarelsen fagkunnskap og kulturell forståelse?

**2. Struktur und Aufbau (struktur og oppbygging) -- ca. 20 %**
- Logisk oppbygging med innledning, hoveddel og avslutning
- Bruk av avsnitt og overganger
- Rød tråd gjennom teksten

**3. Sprache und Ausdruck (språk og uttrykk) -- ca. 25 %**
- Variert og presist ordforråd
- Avanserte setningsstrukturer (leddsetninger, infinitivkonstruksjoner)
- Bruk av konnektorer og overganger
- Passende register (formelt/uformelt)

**4. Sprachrichtigkeit (språklig korrekthet) -- ca. 15 %**
- Grammatikk: kasus, verbformer, ordstilling
- Ortografi (rettskriving)
- Tegnsetting

**Tips for å score høyt:**
- Vis bredden i ordforrådet ditt -- bruk synonymer
- Varier setningslengde og -type
- Bruk avanserte strukturer som Konjunktiv, passiv og utvidede infinitiver
- Svar PRESIST på det oppgaven spør om`,
    },
    {
      id: 'tysk-3-16-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Simulert eksamensoppgave -- Leseforståelse',
      problem: `Les denne korte teksten og svar på spørsmålene på tysk:

"Die Digitalisierung verändert die Arbeitswelt grundlegend. Laut einer Studie des World Economic Forum werden bis 2030 etwa 85 Millionen Arbeitsplätze durch Automatisierung wegfallen, gleichzeitig aber 97 Millionen neue entstehen. Besonders gefragt werden Fähigkeiten wie kritisches Denken, Kreativität und digitale Kompetenz sein. Experten betonen, dass lebenslanges Lernen zur wichtigsten Schlüsselkompetenz wird."

a) Was ist die Hauptaussage des Textes?
b) Wie viele neue Arbeitsplätze werden laut der Studie entstehen?
c) Welche Fähigkeiten werden in Zukunft besonders wichtig sein?`,
      solution: `**a) Was ist die Hauptaussage des Textes?**
Die Hauptaussage ist, dass die Digitalisierung die Arbeitswelt stark verändert. Obwohl viele Arbeitsplätze verschwinden werden, werden noch mehr neue entstehen. Lebenslanges Lernen wird dabei zur wichtigsten Kompetenz.

**b) Wie viele neue Arbeitsplätze werden laut der Studie entstehen?**
Laut der Studie des World Economic Forum werden 97 Millionen neue Arbeitsplätze entstehen.

**c) Welche Fähigkeiten werden in Zukunft besonders wichtig sein?**
Besonders wichtig werden kritisches Denken, Kreativität und digitale Kompetenz sein. Außerdem wird lebenslanges Lernen als die wichtigste Schlüsselkompetenz betont.

**Tips for leseforståelse:**
- Svar på det språket oppgaven er skrevet i (her: tysk)
- Bruk egne formuleringer, ikke bare kopier fra teksten
- Svar i hele setninger, ikke bare stikkord`,
    },
    {
      id: 'tysk-3-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Simulert eksamensoppgave: Skriv en kort Erörterung (ca. 100-150 ord) på tysk om temaet: "Sollte das Reisen mit dem Flugzeug teurer werden, um die Umwelt zu schützen?" (Bør flyreiser bli dyrere for å beskytte miljøet?)',
        solution: 'Eksempel: "Der Klimawandel ist eine der größten Herausforderungen unserer Zeit. Viele Experten fordern, dass Flugreisen teurer werden sollten, um den CO2-Ausstoß zu reduzieren. Zunächst spricht vieles dafür: Der Flugverkehr ist für etwa 3% der globalen CO2-Emissionen verantwortlich. Höhere Preise könnten dazu führen, dass mehr Menschen den Zug nehmen. Allerdings gibt es auch Gegenargumente: Höhere Flugpreise treffen vor allem Menschen mit niedrigem Einkommen, während Reiche weiterhin fliegen würden. Außerdem sind für viele Reiseziele keine Alternativen zum Flugzeug vorhanden. Meiner Meinung nach sollten die Einnahmen aus höheren Flugpreisen in die Entwicklung klimafreundlicher Technologien investiert werden."',
        hints: ['Bruk Einleitung-Hauptteil-Schluss-strukturen', 'Presenter minst ett pro- og ett kontra-argument', 'Avslutt med din begrunnede mening'],
      },
    },
    {
      id: 'tysk-3-16-4-def-3',
      type: 'definition',
      title: 'Typische Fehler und Korrekturstrategien',
      content: `**Die Korrektur** (korrekturlesing) er siste sjanse til å rette feil. Her er de vanligste feilene norske elever gjør i tysk -- og hvordan du sjekker for dem:

**1. Verbstilling (die Wortstellung)**
- Hovedsetning: Verbet ALLTID på 2. plass
- Leddsetning: Verbet til SLUTT
- Etter leddsetning: Inversjon i hovedsetningen (verb-subjekt)
- **Sjekk:** Les hver setning og tell verbets posisjon.

**2. Kasus (der Kasus)**
- Etter preposisjoner: Husk Dativ/Akkusativ-preposisjoner
- Vekselprepsisjoner: Dativ (wo/hvor?) vs. Akkusativ (wohin/hvorhen?)
- **Sjekk:** Marker alle preposisjoner og sjekk kasusen.

**3. Adjektivendelser (die Adjektivdeklination)**
- Etter bestemt artikkel: -e (nom. m/f/n), -en (alle andre)
- Etter ubestemt artikkel: -er (nom. m), -e (nom. f), -es (nom. n), -en (alle andre)
- **Sjekk:** Les alle adjektiv + substantiv-kombinasjoner.

**4. Genus (das Genus)**
- Husk at genus kan avvike fra norsk: das Mädchen (jenta, nøytrum!), der Stuhl (stolen, hankjønn)
- **Sjekk:** Er du usikker på genus, sjekk om du kan huske en fast frase.

**5. Konjunktiv i indirekte tale**
- Bruk Konjunktiv I der det skiller seg fra indikativ, ellers Konjunktiv II.
- **Sjekk:** Marker alle indirekte tale-setninger og sjekk verbformen.

**Korrekturstrategi -- les teksten fire ganger:**
1. gang: Innhold og struktur (svarer jeg på oppgaven?)
2. gang: Verbstilling og setningsstruktur
3. gang: Kasus og adjektivendelser
4. gang: Rettskriving og tegnsetting`,
    },
    {
      id: 'tysk-3-16-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Finn og rett feilene',
      problem: `Denne teksten inneholder 6 feil. Finn og rett dem:

"Wenn ich mehr Geld hätte, ich würde eine Reise nach Deutschland machen. Ich möchte gerne das berühmte Schloss Neuschwanstein besuchen, weil es ist sehr schön. Letztes Jahr habe ich in München gewesen und habe den leckeren Kuchen in einem kleinen Café gegessen. Der Kellnerin war sehr freundlich. Er sagte, dass er liebt seine Arbeit. Nach meine Reise habe ich einen langen Aufsatz über Deutschland geschrieben."`,
      solution: `**Feil 1:** "ich würde" → "würde ich"
- Etter leddsetning (Wenn...) kommer inversjon i hovedsetningen: *würde ich*

**Feil 2:** "weil es ist" → "weil es... ist" (verb til slutt)
- I leddsetninger med "weil" skal verbet stå til slutt: *weil es sehr schön ist*

**Feil 3:** "habe ich in München gewesen" → "bin ich in München gewesen"
- "sein" bruker "sein" som hjelpeverb, ikke "haben": *bin ich in München gewesen*

**Feil 4:** "Der Kellnerin" → "Die Kellnerin"
- "Kellnerin" er hunkjønn → bestemt artikkel: *die* (eller "Der Kellner" hvis det var en mannlig kelner)

**Feil 5:** "er liebt seine Arbeit" → "er seine Arbeit liebe" (Konjunktiv I + verb til slutt)
- Indirekte tale med "dass" krever Konjunktiv I og verb til slutt: *dass er seine Arbeit liebe*

**Feil 6:** "Nach meine Reise" → "Nach meiner Reise"
- "nach" krever dativ: *nach meiner Reise* (feminin dativ)

**Rettet tekst:**
"Wenn ich mehr Geld hätte, würde ich eine Reise nach Deutschland machen. Ich möchte gerne das berühmte Schloss Neuschwanstein besuchen, weil es sehr schön ist. Letztes Jahr bin ich in München gewesen und habe den leckeren Kuchen in einem kleinen Café gegessen. Die Kellnerin war sehr freundlich. Sie sagte, dass sie ihre Arbeit liebe. Nach meiner Reise habe ich einen langen Aufsatz über Deutschland geschrieben."`,
    },
    {
      id: 'tysk-3-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn og rett feilene i disse setningene.',
        subTasks: [
          { label: 'a', task: 'Obwohl er ist müde, geht er zur Schule.', solution: 'Obwohl er müde ist, geht er zur Schule. (I leddsetning med "obwohl" skal verbet stå til slutt.)' },
          { label: 'b', task: 'Ich habe mit mein Freund gesprochen.', solution: 'Ich habe mit meinem Freund gesprochen. ("mit" krever dativ: meinem Freund)' },
          { label: 'c', task: 'Das Buch ist von dem Schüler gelesen geworden.', solution: 'Das Buch ist von dem Schüler gelesen worden. (I passiv perfektum brukes "worden", ikke "geworden".)' },
          { label: 'd', task: 'Er fragte mich, ob ich kann ihm helfen.', solution: 'Er fragte mich, ob ich ihm helfen könne/könnte. (I leddsetning med "ob" skal verbet stå til slutt, og indirekte tale bruker Konjunktiv.)' },
        ],
        solution: 'a) ...er müde ist (verb til slutt), b) ...meinem Freund (dativ etter "mit"), c) ...gelesen worden (ikke "geworden"), d) ...ob ich ihm helfen könne (verb til slutt + Konjunktiv)',
        hints: ['Sjekk verbets posisjon i leddsetninger', 'Sjekk kasus etter preposisjoner', 'Husk regelen for passiv perfektum'],
      },
    },
    {
      id: 'tysk-3-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse vurderingskriteriene teller vanligvis mest på skriftlig eksamen i Tysk nivå 3?',
        options: [
          { id: 'a', text: 'Rettskriving og tegnsetting (ca. 15 %)', isCorrect: false },
          { id: 'b', text: 'Innhold og relevans (ca. 40 %)', isCorrect: true },
          { id: 'c', text: 'Struktur og oppbygging (ca. 20 %)', isCorrect: false },
          { id: 'd', text: 'Språk og uttrykk (ca. 25 %)', isCorrect: false },
        ],
        solution: 'Innhold og relevans (Inhalt) teller vanligvis mest -- ca. 40 % av vurderingen. Det betyr at det viktigste er å svare på oppgaven med relevante og godt utviklede argumenter. Selv perfekt grammatikk hjelper ikke hvis innholdet er irrelevant.',
      },
    },
    {
      id: 'tysk-3-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-16-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Simulert eksamensoppgave: Du har 20 minutter. Skriv en Stellungnahme (ca. 80-100 ord) på tysk om følgende påstand: "Jeder Mensch sollte mindestens ein Jahr im Ausland leben." (Hvert menneske burde bo minst ett år i utlandet.)',
        solution: 'Eksempel: "Die Behauptung, dass jeder Mensch mindestens ein Jahr im Ausland leben sollte, ist durchaus bedenkenswert. Meiner Meinung nach wäre dies eine bereichernde Erfahrung, die das interkulturelle Verständnis fördert und den Horizont erweitert. Im Ausland lernt man nicht nur eine neue Sprache, sondern auch, die eigene Kultur aus einer anderen Perspektive zu betrachten. Allerdings muss man auch bedenken, dass nicht jeder die finanziellen Mittel oder die familiäre Situation hat, um ins Ausland zu gehen. Deshalb sollte es eine Möglichkeit sein, keine Pflicht. Zusammenfassend bin ich überzeugt, dass ein Auslandsaufenthalt wertvoll ist, aber individuell entschieden werden sollte."',
        hints: ['Si din mening tydelig fra starten', 'Bruk minst to konnektorer', 'Vis at du kan Konjunktiv II (wäre, hätte, könnte)'],
      },
    },
    {
      id: 'tysk-3-16-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette avsluttende kapittelet har vi fokusert på eksamensforberedelse:

**Eksamensstrategier:**
- Les oppgaveformuleringen nøye og understrek nøkkelord
- Fordel tiden fornuftig: lesing → planlegging → skriving → korrektur
- Lag disposisjon før du begynner å skrive
- Les gjennom besvarelsen til slutt og rett feil

**Vurderingskriterier:**
- **Innhold (40 %)**: Relevans, dybde, kunnskap
- **Språk (25 %)**: Variert ordforråd, avanserte strukturer
- **Struktur (20 %)**: Logisk oppbygging, overganger
- **Korrekthet (15 %)**: Grammatikk, rettskriving, tegnsetting

**Vanligste feil å unngå:**
1. Feil verbstilling i leddsetninger
2. Feil kasus etter preposisjoner
3. "geworden" i stedet for "worden" i passiv perfektum
4. Glemme inversjon etter leddsetning
5. Ikke svare på det oppgaven faktisk spør om

**Korrekturstrategi -- fire gjennomlesninger:**
1. Innhold og relevans
2. Verbstilling og setningsstruktur
3. Kasus og adjektivendelser
4. Rettskriving og tegnsetting

**Lykke til med eksamen! -- Viel Erfolg bei der Prüfung!**`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Prüfung', definition: 'Eksamen -- formell vurdering av kunnskaper og ferdigheter' },
    { term: 'die Aufgabenstellung', definition: 'Oppgaveformulering -- teksten som beskriver hva du skal gjøre på eksamen' },
    { term: 'die Bewertung', definition: 'Vurdering -- bedømmelse av eksamensbesvarelsen etter fastsatte kriterier' },
    { term: 'das Zeitmanagement', definition: 'Tidsstyring -- strategisk fordeling av tid under eksamen' },
    { term: 'der Entwurf', definition: 'Utkast/disposisjon -- foreløpig plan for besvarelsen' },
    { term: 'die Korrektur', definition: 'Korrektur/korrekturlesing -- gjennomgang og retting av feil i teksten' },
    { term: 'die Überarbeitung', definition: 'Omarbeiding/redigering -- prosessen med å forbedre en tekst' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra kap 14-16
// ============================================================================

export const TYSK_3_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_TYSK_3_14_1,
  CHAPTER_TYSK_3_14_2,
  CHAPTER_TYSK_3_14_3,
  CHAPTER_TYSK_3_14_4,
  CHAPTER_TYSK_3_15_1,
  CHAPTER_TYSK_3_15_2,
  CHAPTER_TYSK_3_15_3,
  CHAPTER_TYSK_3_15_4,
  CHAPTER_TYSK_3_16_1,
  CHAPTER_TYSK_3_16_2,
  CHAPTER_TYSK_3_16_3,
  CHAPTER_TYSK_3_16_4,
];
