/**
 * Tekstbok innhold for Norsk 10. klasse - Del 8 (Kapittel 10.1-10.6)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 8 dekker eksamensforberedelse og skrivetrening:
 * langsvarsoppgaven, kortsvarsoppgaven, nynorsk skrivetrening,
 * muntlig eksamen, eksamensstrategier og kreativ skriving for eksamen.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 10.1: Skriftlig eksamen — Langsvarsoppgaven
// LK20: Skrive tekster med klart uttrykt tema og god tekstbinding,
//        mestre rettskriving og tegnsetting, tilpasse språk og form til formål
// ============================================================================

export const CHAPTER_NORSK_10_10_1: TextbookChapter = {
  id: 'norsk-10-10-1',
  courseId: 'norsk-10',
  chapterNumber: '10.1',
  title: 'Skriftlig eksamen — Langsvarsoppgaven',
  description: 'Lær hva som kjennetegner en god langsvarsbesvarelse til norskeksamen, hvordan du tolker oppgaven, bygger opp teksten, og sikrer deg en god karakter.',
  estimatedMinutes: 80,
  competenceGoals: [
    'skrive tekster med klart uttrykt tema og god tekstbinding',
    'mestre rettskriving og tegnsetting og bruke grammatisk kunnskap til å forbedre egne tekster',
    'tilpasse språk og form til ulike formål, mottakere og medier',
  ],
  keyTerms: [
    { term: 'Langsvar', definition: 'En lengre sammenhengende tekst på eksamen, vanligvis 700-1200 ord, som viser analytisk og reflekterende kompetanse' },
    { term: 'Tolkningsoppgave', definition: 'En oppgave der du skal analysere og tolke en skjønnlitterær eller sammensatt tekst' },
    { term: 'Drøftingsoppgave', definition: 'En oppgave der du skal belyse et tema fra flere sider og argumentere for egne synspunkter' },
    { term: 'Sjangertrekk', definition: 'De kjennetegnene som definerer en bestemt teksttype, for eksempel innledning, hoveddel og avslutning i et essay' },
    { term: 'Tekstbinding', definition: 'Sammenheng i teksten skapt gjennom forbindelsesord, referanser og tematisk progresjon' },
    { term: 'Tematisk progresjon', definition: 'Hvordan teksten utvikler temaet steg for steg, fra kjent til nytt, slik at leseren følger med' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-10-1-intro',
      type: 'text',
      content: `## Langsvarsoppgaven: Din viktigste tekst på eksamen

Tenk deg at du sitter i eksamenslokalet. Klokken tikker. Du har lest oppgavene, og nå skal du skrive et langsvar. Du har fem timer totalt, og denne oppgaven er den som teller mest. Hva gjør du?

Mange elever starter med å skrive det første som faller dem inn. Det er en dårlig strategi. Langsvarsoppgaven er ikke bare en test av hva du kan om norsk — den er en test av om du kan **tenke**, **strukturere** og **kommunisere**. Sensorene leser hundrevis av besvarelser. De som skiller seg ut, er ikke nødvendigvis de lengste — det er de som er **klare, velstrukturerte og viser selvstendig refleksjon**.

I dette kapittelet skal du lære:
- Hvordan du **tolker oppgaveteksten** og forstår hva som faktisk blir spurt om
- Hvilke **oppgavetyper** du kan møte på eksamen
- Hvordan du **bygger opp** en langsvarsbesvarelse med innledning, hoveddel og avslutning
- Hva sensorene ser etter — og hvilke feil du bør unngå
- Konkrete teknikker for å heve kvaliteten på teksten din`,
    },

    // ========== DEFINISJON: LANGSVARSOPPGAVEN ==========
    {
      id: 'norsk-10-10-1-def-1',
      type: 'definition',
      title: 'Langsvarsoppgaven på norskeksamen',
      content: `**Langsvarsoppgaven** er den største skriveoppgaven på skriftlig norskeksamen for 10. klasse. Den utgjør hoveddelen av vurderingen.

**Kjennetegn:**
- Du skriver en **sammenhengende tekst** på ca. 700–1200 ord
- Du velger vanligvis mellom **to eller flere oppgaver**
- Oppgaven er knyttet til et **tekstvedlegg** (novelle, dikt, artikkel, sammensatt tekst)
- Du skal vise at du kan **analysere, reflektere og argumentere**

**Vanlige oppgavetyper:**
1. **Tolkningsoppgave:** Analyser en skjønnlitterær tekst (novelle, dikt, utdrag). Bruk fagbegreper.
2. **Drøftingsoppgave:** Belyse et tema fra flere sider ved hjelp av vedlagte tekster.
3. **Essay:** Skriv en reflekterende tekst der du kobler egne erfaringer til tekstvedleggene.
4. **Sammenligningsoppgave:** Sammenlign to tekster og diskuter likheter og forskjeller.

**Viktig:** Du vurderes ikke bare på innholdet, men også på **språk, struktur og sjangerbeherskelse**. En god tekst med dårlig struktur får lavere karakter enn en godt strukturert tekst med noe svakere innhold.`,
    },

    // ========== EKSEMPEL: TOLKE OPPGAVETEKSTEN ==========
    {
      id: 'norsk-10-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Slik tolker du oppgaveteksten',
      problem: `Les denne eksempeloppgaven fra eksamen:

**Oppgave:** «Les novellen "Sekundet" i tekstheftet. Skriv en tekst der du tolker novellen. Du skal bruke relevant fagspråk, og du skal trekke inn minst to virkemidler i analysen din.»

Hvordan bør du forstå denne oppgaven? Hva er det du faktisk blir bedt om å gjøre?`,
      solution: `**Steg-for-steg tolkning:**

1. **«Les novellen»** — Du skal bruke novellen som grunnlag. Ikke skriv generelt om tema uten å referere til teksten.

2. **«Skriv en tekst der du tolker»** — Nøkkelordet er «tolker». Det betyr:
   - Du skal ikke bare gjenfortelle handlingen (det er ikke tolkning)
   - Du skal finne **dypere mening**: Hva handler novellen om under overflaten?
   - Du skal vise at du forstår **tema, budskap og virkemidler**

3. **«Relevant fagspråk»** — Du må bruke norskfaglige begreper: synsvinkel, virkemidler, metafor, kontrast, spenningskurve, karakterutvikling, osv.

4. **«Minst to virkemidler»** — Du SKAL identifisere og forklare minst to virkemidler. Men «minst to» betyr at tre eller fire er bedre — hvis du klarer å koble dem til tolkningen.

**Hva sensorene ser etter:**
- At du faktisk tolker, ikke bare gjenforteller
- At fagbegrepene brukes riktig og naturlig
- At virkemidlene kobles til budskapet (ikke bare listes opp)
- At teksten har en tydelig rød tråd og god struktur`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-1',
        number: '10.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom å «gjenfortelle» og å «tolke» en novelle?',
        options: [
          {
            id: 'a',
            text: 'Å gjenfortelle betyr å skrive handlingen med egne ord, mens å tolke betyr å forklare dypere mening og bruke fagbegreper',
            isCorrect: true,
            feedback: 'Riktig! Tolkning handler om å gå under overflaten og vise hva teksten betyr på et dypere nivå — ved hjelp av fagspråk.',
          },
          {
            id: 'b',
            text: 'Å gjenfortelle er lengre enn å tolke',
            isCorrect: false,
            feedback: 'Feil. Lengden er ikke forskjellen. Du kan skrive en lang gjenfortelling uten tolkning — og det gir lav karakter.',
          },
          {
            id: 'c',
            text: 'Å tolke betyr å finne forfatternes personlige mening, mens å gjenfortelle er mer objektivt',
            isCorrect: false,
            feedback: 'Feil. Tolkning handler ikke om forfatterens personlige mening (det vet vi sjelden), men om å finne mening i teksten — tema, budskap, virkemidler.',
          },
          {
            id: 'd',
            text: 'Det er ingen reell forskjell — begge handler om å beskrive hva som skjer i teksten',
            isCorrect: false,
            feedback: 'Feil. Det er en stor forskjell. Gjenfortelling beskriver handlingen. Tolkning forklarer hva handlingen betyr.',
          },
        ],
        solution: 'Alternativ A er riktig. Å tolke handler om å finne dypere mening, bruke fagbegreper og koble virkemidler til budskap.',
      },
    },

    // ========== OPPBYGGING AV LANGSVAR ==========
    {
      id: 'norsk-10-10-1-oppbygging',
      type: 'text',
      content: `## Slik bygger du opp en langsvarsbesvarelse

En god langsvarsbesvarelse har tre hoveddeler: innledning, hoveddel og avslutning. Det høres enkelt ut, men det er her mange elever gjør kritiske feil.

### 1. Innledningen (ca. 10-15 % av teksten)

**Formål:** Presentere teksten, temaet og gi leseren oversikt.

**Innledningen skal inneholde:**
- Tittel, forfatter og sjanger (for eksempel: «Novellen "Sekundet" er skrevet av ...»)
- En kort presentasjon av hva teksten handler om (2-3 setninger — ikke gjenfortelling!)
- En **tesesetning** som viser hva du skal tolke eller drøfte

**Eksempel på god innledning:**
«Novellen "Sekundet" handler om Sara, som har sviktet bestevenninnen Emilie ved å avsløre en hemmelighet. I denne teksten vil jeg tolke novellen med fokus på skyld, tilgivelse og vennskap, og vise hvordan forfatteren bruker kontrast og symbolikk for å formidle disse temaene.»

**Vanlige feil:**
- For lang gjenfortelling i innledningen (hold den kort!)
- Manglende tesesetning (leseren vet ikke hva teksten din handler om)
- For vag innledning («Denne teksten handler om mange ting...»)

### 2. Hoveddelen (ca. 70-80 % av teksten)

**Formål:** Analysere, tolke og argumentere.

**Strukturer hoveddelen i avsnitt.** Hvert avsnitt bør:
- Handle om **ett poeng** eller **ett virkemiddel**
- Starte med en **temasetning** som sier hva avsnittet handler om
- Inneholde **eksempler** fra teksten (sitater eller referanser)
- Avslutte med en **kobling** til tolkningen din

**PEARL-metoden for hvert avsnitt:**
- **P**oeng: Hva er poenget ditt?
- **E**vidensen: Hva i teksten støtter dette? (sitat eller referanse)
- **A**nalyse: Hva betyr dette? Hvordan fungerer virkemiddelet?
- **R**efleksjon: Hva sier dette om tema/budskap?
- **L**enke: Koble til neste avsnitt

### 3. Avslutningen (ca. 10-15 % av teksten)

**Formål:** Samle trådene og gi en helhetlig tolkning.

**Avslutningen skal:**
- Oppsummere hovedtolkningen din (ikke gjenta alt — bare hovedpoenget)
- Vise **helheten**: Hva er tekstens budskap?
- Gjerne stille et åpent spørsmål eller koble til noe større (samfunnet, livet, leseren)

**Vanlige feil:**
- Ingen avslutning (teksten bare stopper)
- Ny informasjon i avslutningen (det er for sent)
- For kort avslutning («Derfor mener jeg at novellen er bra.»)`,
    },

    // ========== DEFINISJON: TESESETNING ==========
    {
      id: 'norsk-10-10-1-def-2',
      type: 'definition',
      title: 'Tesesetning og temasetning',
      content: `**Tesesetning** er en setning i innledningen som forteller leseren hva teksten din handler om og hva du skal argumentere for.

- Den gir teksten **retning** — leseren vet hva de kan forvente
- Den skal være **spesifikk**, ikke vag
- Den fungerer som et «løfte» til leseren

**Eksempel — vag:** «Jeg skal skrive om novellen.»
**Eksempel — spesifikk:** «Novellen handler om skyld og tilgivelse, og jeg vil vise hvordan forfatteren bruker kontrast mellom ytre ro og indre uro for å skildre hovedpersonens samvittighet.»

---

**Temasetning** er den første setningen i hvert avsnitt i hoveddelen. Den forteller leseren hva avsnittet handler om.

- Den fungerer som en «mini-innledning» til avsnittet
- Den hjelper leseren å følge **strukturen** i teksten din

**Eksempel:** «Det viktigste virkemiddelet i novellen er kontrasten mellom svømmehallens ytre aktivitet og Saras indre uro.»

**Huskeregel:** Hvis du fjerner alt i teksten bortsett fra tesesetningen og temasetningene, skal leseren likevel forstå hovedstrukturen i besvarelsen din.`,
    },

    // ========== EKSEMPEL: PEARL-AVSNITT ==========
    {
      id: 'norsk-10-10-1-example-2',
      type: 'example',
      title: 'Eksempel: Et PEARL-avsnitt i en tolkningsoppgave',
      problem: `Se dette eksempelavsnittet fra en tolkningsbesvarelse. Identifiser de ulike delene av PEARL-strukturen.

---

«Et sentralt virkemiddel i novellen er bruken av kontrast. Mens Sara er på svømmetrening, beskrives det fysiske miljøet som aktivt og støyende: 'Treneren ropte tider fra bassengkanten.' Samtidig er Sara mentalt fraværende: 'Sara hørte ingenting. Alt hun hørte var Emilies stemme i hodet.' Denne kontrasten mellom den ytre aktiviteten og den indre uroen forsterker inntrykket av at Sara er fanget i sin egen skyldfølelse. Uansett hva som skjer rundt henne, slipper hun ikke unna det hun har gjort. Kontrasten viser at skyld er noe du bærer med deg overalt — den forsvinner ikke bare fordi du holder deg opptatt. Dette understreker novellens tema om at svikt i nære relasjoner har dype konsekvenser.»

---`,
      solution: `**P — Poeng:** «Et sentralt virkemiddel i novellen er bruken av kontrast.»
Avsnittet starter med en klar temasetning som sier hva det handler om.

**E — Evidens:** «Treneren ropte tider...» og «Sara hørte ingenting...»
To sitater fra teksten brukes som bevis.

**A — Analyse:** «Denne kontrasten mellom den ytre aktiviteten og den indre uroen forsterker inntrykket av at Sara er fanget i sin egen skyldfølelse.»
Forfatteren forklarer hvordan virkemiddelet fungerer — hva kontrasten gjør.

**R — Refleksjon:** «Kontrasten viser at skyld er noe du bærer med deg overalt...»
Forfatteren reflekterer over hva dette betyr på et dypere nivå.

**L — Lenke:** «Dette understreker novellens tema om at svikt i nære relasjoner har dype konsekvenser.»
Avsnittet kobles tilbake til det overordnede temaet.

**Hvorfor dette er et godt avsnitt:**
- Det har én tydelig påstand
- Det bruker sitater fra teksten
- Det analyserer — ikke bare identifiserer — virkemiddelet
- Det kobler virkemiddelet til budskapet
- Det er velformulert og sammenhengende`,
    },

    // ========== OPPGAVE 2: CLASSIC ==========
    {
      id: 'norsk-10-10-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-2',
        number: '10.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser problemene i disse innledningene og forklar hva som bør forbedres.',
        subTasks: [
          {
            label: 'a',
            task: '«Novellen handler om Sara og Emilie. Sara har gjort noe dumt på en fest. Hun sa noe om Emilie til Tobias, og Tobias fortalte det videre. Nå er Emilie sint. Sara er på svømmetrening og gruer seg. Etterpå møtes de og Emilie gråter. Til slutt sier Sara unnskyld, og Emilie sier okay men at det tar tid.»',
            solution: 'Problemet er at dette er en ren gjenfortelling, ikke en innledning. Det mangler tesesetning, det nevner ingen fagbegreper, og det sier ingenting om hva besvarelsen skal handle om. Forbedring: Kutt gjenfortellingen til 2 setninger, legg til tesesetning med tema og virkemidler.',
            multipleChoiceOptions: ['For mye gjenfortelling, mangler tesesetning', 'For kort, mangler detaljer', 'For mange fagbegreper', 'Perfekt innledning'],
          },
          {
            label: 'b',
            task: '«I denne teksten skal jeg skrive om en novelle som er ganske bra. Den handler om ulike ting som vennskap og sånn. Jeg skal prøve å bruke noen fagbegreper.»',
            solution: 'Problemet er at innledningen er altfor vag. «Ganske bra», «ulike ting» og «vennskap og sånn» viser ingen presisjon. «Prøve å bruke noen fagbegreper» er usikkert og uprofesjonelt. Forbedring: Nevn tittel og forfatter, formuler et spesifikt tema, og bruk en sikker, faglig tone.',
            multipleChoiceOptions: ['For vag og usikker tone, mangler tittel og forfatter', 'For formell og akademisk', 'For lang innledning', 'Inneholder for mange sitater'],
          },
        ],
        solution: 'a) Gjenfortelling i stedet for innledning. b) For vag, uformell og usikker.',
      },
    },

    // ========== OPPGAVE 3: CLASSIC ==========
    {
      id: 'norsk-10-10-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-3',
        number: '10.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv en tesesetning for hver av disse oppgavene. Tesesetningen skal være spesifikk og vise hva besvarelsen din vil handle om.

a) «Tolk novellen "Karamellmannen" med fokus på tema og virkemidler.»
b) «Drøft hvordan sosiale medier påvirker ungdoms selvbilde, med utgangspunkt i tekstvedlegget.»
c) «Sammenlign diktet "Jeg ser" av Obstfelder med novelleutdraget fra "Sult" av Hamsun. Hva har tekstene til felles, og hva skiller dem?»`,
        hints: [
          'En god tesesetning sier hva du skal argumentere for — ikke bare hva teksten handler om',
          'Prøv formelen: «Jeg vil vise at [påstand] ved å analysere [virkemiddel/tema]»',
          'Vær spesifikk! «Novellen handler om identitet» er for vagt. «Novellen bruker kontrast mellom ytre fasade og indre usikkerhet for å skildre tenåringers identitetskrise» er spesifikt.',
        ],
        solution: 'Gode tesesetninger er spesifikke, nevner tema og gjerne virkemidler, og gir leseren en klar forventning om hva teksten skal handle om.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VURDERINGSKRITERIER ==========
    {
      id: 'norsk-10-10-1-vurdering',
      type: 'text',
      content: `## Hva ser sensorene etter?

Det er viktig å forstå vurderingskriteriene. Sensorene bruker en felles veiledning med fire hovedområder. Her er hva de ser etter — og hva som skiller de ulike karakternivåene.

### De fire vurderingsområdene

**1. Innhold og kildebruk**
- Viser du at du forstår tekstvedlegget?
- Bruker du sitater og referanser fra teksten?
- Er tolkningen din rimelig og godt begrunnet?
- Viser du selvstendige refleksjoner?

**2. Oppbygging og struktur**
- Har teksten innledning, hoveddel og avslutning?
- Er det tydelige avsnitt med temasetninger?
- Henger teksten godt sammen? (tekstbinding)
- Er det en rød tråd gjennom hele besvarelsen?

**3. Språk og formuleringer**
- Er språket presist og variert?
- Bruker du fagbegreper riktig?
- Unngår du gjentakelser og unødvendige fyllord?
- Er setningene velformulerte?

**4. Rettskriving og tegnsetting**
- Er rettskrivingen korrekt?
- Bruker du komma, punktum og andre tegn riktig?
- Er grammatikken korrekt?

### Karakternivåer (forenklet)

**Karakter 2:** Du gjenforteller teksten uten å tolke. Svak struktur, mange språkfeil.

**Karakter 3–4:** Du viser noe forståelse, men tolkningen er grunn. Noen fagbegreper brukes, men ikke alltid riktig. Strukturen er til stede, men ikke konsekvent.

**Karakter 5:** Du tolker med faglig presisjon, bruker fagbegreper riktig, har god struktur og viser selvstendige refleksjoner. Språket er godt.

**Karakter 6:** Du viser dyp forståelse, kobler virkemidler til budskap på en overbevisende måte, har en gjennomgående rød tråd, og skriver med et modent, variert og presist språk. Du reflekterer selvstendig og originalt.`,
    },

    // ========== DEFINISJON: TEKSTBINDING ==========
    {
      id: 'norsk-10-10-1-def-3',
      type: 'definition',
      title: 'Tekstbinding',
      content: `**Tekstbinding** handler om å skape sammenheng i teksten slik at leseren opplever at avsnittene og setningene henger naturlig sammen.

**Konnektiver (forbindelsesord)** — ord som binder setninger og avsnitt sammen:
- **Tillegg:** dessuten, i tillegg, videre, også, for det andre
- **Kontrast:** derimot, på den andre siden, likevel, til tross for, imidlertid
- **Årsak/virkning:** fordi, derfor, dermed, som en følge av, dette fører til
- **Eksempel:** for eksempel, blant annet, dette ser vi i, et eksempel på dette er
- **Konklusjon:** oppsummert, samlet sett, dette viser at, avslutningsvis

**Referansebinding** — referere til noe du allerede har skrevet:
- «Som vi så i forrige avsnitt...»
- «Denne bruken av kontrast...» (peker tilbake)
- «Novellen viser dette tydelig da...» (kobler til temaet)

**Tematisk progresjon** — hvert avsnitt bygger videre på det forrige:
- Avsnitt 1 introduserer et virkemiddel
- Avsnitt 2 analyserer et nytt virkemiddel, men kobler det til det første
- Avsnitt 3 trekker begge inn i en overordnet tolkning

**Tips:** Les teksten din og se om du kan fjerne et avsnitt uten at det merkes. Hvis det ikke merkes, har du dårlig tekstbinding. Hvert avsnitt bør føle seg nødvendig.`,
    },

    // ========== OPPGAVE 4: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-4',
        number: '10.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse setningene viser best at eleven tolker teksten, og ikke bare gjenforteller?',
        options: [
          {
            id: 'a',
            text: '«Novellen handler om Sara som er på svømmetrening og etterpå møter Emilie utenfor.»',
            isCorrect: false,
            feedback: 'Feil. Dette er ren gjenfortelling — det beskriver hva som skjer, men sier ingenting om hva det betyr.',
          },
          {
            id: 'b',
            text: '«Kontrasten mellom svømmehallens støy og Saras indre stillhet viser at skyldfølelse isolerer mennesker fra omgivelsene.»',
            isCorrect: true,
            feedback: 'Riktig! Denne setningen identifiserer et virkemiddel (kontrast), analyserer det (isolerer fra omgivelsene), og kobler det til et tema (skyldfølelse). Det er tolkning.',
          },
          {
            id: 'c',
            text: '«Jeg synes novellen var bra fordi den var spennende og godt skrevet.»',
            isCorrect: false,
            feedback: 'Feil. Dette er en personlig mening uten faglig begrunnelse. «Bra», «spennende» og «godt skrevet» er vurderinger, ikke tolkning.',
          },
          {
            id: 'd',
            text: '«Forfatteren bruker metaforer og kontraster i novellen.»',
            isCorrect: false,
            feedback: 'Feil. Denne setningen identifiserer virkemidler, men analyserer dem ikke. Den mangler forklaring av hvordan de fungerer og hva de betyr.',
          },
        ],
        solution: 'Alternativ B er riktig. God tolkning identifiserer virkemiddel, analyserer det, og kobler det til tema.',
      },
    },

    // ========== OPPGAVE 5: SKRIVEOPPGAVE ==========
    {
      id: 'norsk-10-10-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-5',
        number: '10.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skrivetrening: Skriv ett PEARL-avsnitt (8-12 setninger) der du analyserer et virkemiddel i en novelle du har lest i norsktimene.

Avsnittet skal:
- Starte med en temasetning (Poeng)
- Inneholde minst ett sitat fra novellen (Evidens)
- Forklare hvordan virkemiddelet fungerer (Analyse)
- Koble det til tema eller budskap (Refleksjon)
- Peke fremover eller oppsummere (Lenke)

Hvis du ikke husker en novelle, kan du bruke novellen «Sekundet» fra kapittel 5.2.`,
        hints: [
          'Start med å velge ETT virkemiddel (kontrast, metafor, gjentakelse osv.)',
          'Finn ett godt sitat fra teksten som illustrerer virkemiddelet',
          'Husk at analyse betyr å forklare HVORFOR og HVA — ikke bare identifisere',
        ],
        solution: 'Et godt PEARL-avsnitt har tydelig struktur: påstand → bevis → analyse → refleksjon → kobling. Det viser at du kan bruke fagbegreper og koble virkemiddel til budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== WARNING: VANLIGE FEIL ==========
    {
      id: 'norsk-10-10-1-warning',
      type: 'warning',
      title: 'De fem vanligste feilene i langsvarsoppgaver',
      content: `**1. For mye gjenfortelling**
Sensor vet hva som skjer i teksten. Du trenger ikke gjenfortelle handlingen. Bruk korte referanser og sitater i stedet, og bruk plassen på analyse og tolkning.

**2. Manglende struktur**
Teksten hopper fra tema til tema uten system. Bruk PEARL-metoden i hvert avsnitt, og sørg for at avsnittsrekkefølgen er logisk.

**3. Fagbegreper som pynt**
Mange elever lister opp fagbegreper uten å analysere dem: «Forfatteren bruker metafor, kontrast og gjentakelse.» Det er ikke nok. Du må forklare HVORDAN og HVORFOR.

**4. Ingen tesesetning**
Uten tesesetning mangler teksten retning. Leseren vet ikke hva du skal argumentere for.

**5. Svak avslutning**
Mange avslutter med «Oppsummert synes jeg novellen var bra.» En god avslutning viser helhetlig forståelse og gir et endelig poeng.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Langsvarsoppgaven:** Den viktigste oppgaven på eksamen, krever tolkning/drøfting/essay
- **Tesesetning:** Innledningens viktigste setning — sier hva du skal argumentere for
- **Temasetning:** Første setning i hvert avsnitt, introduserer avsnittsemnet
- **PEARL-metoden:** Poeng → Evidens → Analyse → Refleksjon → Lenke
- **Tekstbinding:** Konnektiver, referanser og tematisk progresjon som skaper sammenheng
- **Tolkning vs. gjenfortelling:** Tolkning forklarer dypere mening, gjenfortelling beskriver handling

### Viktige sammenhenger
- Innledning, hoveddel og avslutning er ikke bare «pent» — det er **nødvendig** for god karakter
- Fagbegreper er verktøy: De skal brukes til å analysere, ikke bare nevnes
- Struktur og innhold henger sammen: Godt innhold med dårlig struktur mister virkning`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-10-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-6',
        number: '10.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Skriv en full langsvarsbesvarelse.

Velg en novelle du har lest i 10. klasse. Skriv en tolkningsoppgave (600-900 ord) der du:

a) Skriver en innledning med tittel, forfatter, kort innholdsbeskrivelse og tesesetning
b) Analyserer minst to virkemidler med PEARL-metoden
c) Bruker fagbegreper naturlig og presist
d) Har tydelige avsnitt med temasetninger og god tekstbinding
e) Avslutter med en sammenfattende tolkning

Bruk gjerne sjekklisten fra kapittelet til å kontrollere teksten din etterpå.`,
        hints: [
          'Bruk 10-15 minutter på planlegging FØR du begynner å skrive',
          'Lag en disposisjon med temasetninger for hvert avsnitt',
          'Les teksten din høyt til slutt — det hjelper deg å oppdage svak tekstbinding',
        ],
        solution: 'En god langsvarsbesvarelse viser at du kan tolke en tekst med faglig dybde, strukturere en sammenhengende argumentasjon, og skrive med et presist og modent språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-10-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-1-ex-7',
        number: '10.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Vurder en medelev-besvarelse.

Bytt langsvarsbesvarelse med en medelev. Vurder besvarelsen ved å bruke dette skjemaet:

a) **Innhold og kildebruk:** Tolker eleven teksten, eller gjenforteller? Brukes sitater? Er tolkningen rimelig?
b) **Struktur:** Er det tydelig innledning, hoveddel og avslutning? Har avsnittene temasetninger?
c) **Fagspråk:** Brukes fagbegreper riktig? Analyseres virkemidlene, eller bare nevnes de?
d) **Språk og tekstbinding:** Er teksten sammenhengende? Brukes konnektiver?
e) **Helhetsinntrykk:** Hva er det beste med besvarelsen, og hva er det viktigste forbedringsforslaget?

Skriv tilbakemeldingen i 150-200 ord.`,
        hints: [
          'Start med å lese hele teksten uten å kommentere — få et helhetsinntrykk først',
          'Vær konkret: Pek på bestemte avsnitt eller setninger',
          'Gi alltid minst én positiv tilbakemelding og minst ett konkret forbedringsforslag',
        ],
        solution: 'Å vurdere en medelevs tekst er verdifull trening fordi du blir bevisst på hva som kjennetegner gode og svake besvarelser — kunnskap du tar med deg til din egen skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.2: Skriftlig eksamen — Kortsvarsoppgaven
// LK20: Lese og analysere tekster på bokmål og nynorsk i ulike sjangere,
//        bruke fagspråk i samtaler og diskusjoner om tekst
// ============================================================================

export const CHAPTER_NORSK_10_10_2: TextbookChapter = {
  id: 'norsk-10-10-2',
  courseId: 'norsk-10',
  chapterNumber: '10.2',
  title: 'Skriftlig eksamen — Kortsvarsoppgaven',
  description: 'Lær hvordan du skriver et godt kortsvar på norskeksamen: presise svar, riktig bruk av fagbegreper, og effektiv struktur innenfor begrenset plass.',
  estimatedMinutes: 65,
  competenceGoals: [
    'lese og analysere tekster på bokmål og nynorsk i ulike sjangere',
    'bruke fagspråk i samtaler og diskusjoner om tekst',
    'mestre rettskriving og tegnsetting og bruke grammatisk kunnskap til å forbedre egne tekster',
  ],
  keyTerms: [
    { term: 'Kortsvar', definition: 'En kort, presis besvarelse på eksamen, vanligvis 200-350 ord, som viser at du kan analysere effektivt' },
    { term: 'Presisjon', definition: 'Å uttrykke seg nøyaktig og treffende, uten unødvendig omsvøp eller fyllord' },
    { term: 'Oppgavefokus', definition: 'Å svare direkte og konkret på det oppgaven spør om, uten å avspore' },
    { term: 'Sitat', definition: 'Et direkte ordrett utdrag fra en tekst, markert med anførselstegn' },
    { term: 'Referanse', definition: 'En indirekte henvisning til noe i teksten, formulert med egne ord' },
    { term: 'Sammenligning', definition: 'Å peke på likheter og forskjeller mellom to tekster, med faglig begrunnelse' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-10-2-intro',
      type: 'text',
      content: `## Kortsvarsoppgaven: Kort, presist og faglig

Kortsvarsoppgaven er den andre hovedoppgaven på norskeksamen. Den er kortere enn langsvaret, men det betyr ikke at den er enklere. Tvert imot: Fordi du har så lite plass, teller hvert ord. Du har ikke rom for avsporinger, gjentakelser eller vagheter. Hver setning må jobbe.

Mange elever gjør en kritisk feil med kortsvar: De tenker at «kort» betyr «overfladisk». Det gjør det ikke. Et godt kortsvar viser at du kan si noe faglig substansielt på begrenset plass — som en kirurg som gjør et presist kutt i stedet for å sage vilkårlig.

I dette kapittelet skal du lære:
- Hva som skiller **kortsvarsoppgaven** fra langsvarsoppgaven
- Hvordan du svarer **direkte på oppgaven** uten å avspore
- Teknikker for å skrive **presist** og **faglig** på 200-350 ord
- Hvordan du bruker **sitater og referanser** effektivt
- Hva sensorene ser etter i et godt kortsvar`,
    },

    // ========== DEFINISJON: KORTSVARSOPPGAVEN ==========
    {
      id: 'norsk-10-10-2-def-1',
      type: 'definition',
      title: 'Kortsvarsoppgaven på norskeksamen',
      content: `**Kortsvarsoppgaven** er en presis skriveoppgave der du svarer på et spesifikt spørsmål i ca. 200-350 ord. Du har normalt ikke valgmuligheter — alle skal svare på den samme oppgaven.

**Typiske kortsvarsoppgaver:**
1. **Språkanalyse:** «Gjør greie for to språklige virkemidler i tekst A og forklar virkningen.»
2. **Sammenligning:** «Sammenlign hvordan temaet X behandles i tekst A og tekst B.»
3. **Sjanger og formål:** «Hvilken sjanger tilhører tekst C? Begrunn svaret med eksempler fra teksten.»
4. **Språklig analyse:** «Hva kjennetegner språket i tekst D? Vis med eksempler.»

**Forskjeller fra langsvaret:**

| Langsvaret | Kortsvaret |
|-----------|-----------|
| 700–1200 ord | 200–350 ord |
| Velger blant oppgaver | Alle svarer på samme |
| Bred tolkning/drøfting | Spesifikt spørsmål |
| Innledning-hoveddel-avslutning | Kortere, mer direkte oppbygging |
| Rom for refleksjon og utdyping | Presisjon og effektivitet |

**Viktig:** Kortsvaret krever like mye fagkunnskap som langsvaret, men du må uttrykke det på mye kortere plass. Det betyr at du må være **selektiv** — velg de beste poengene, de treffende sitatene, de mest relevante fagbegrepene.`,
    },

    // ========== EKSEMPEL: GODT VS. SVAKT KORTSVAR ==========
    {
      id: 'norsk-10-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Godt kortsvar vs. svakt kortsvar',
      problem: `**Oppgave:** «Gjør greie for to språklige virkemidler i tekst A og forklar virkningen av dem.»

Les de to besvarelsene nedenfor. Hvilken er best, og hvorfor?

**Besvarelse 1:**
«I teksten finner vi mange virkemidler. Forfatteren bruker blant annet metaforer og kontraster. En metafor er når man sammenligner uten å bruke som. En kontrast er en motsetning. Teksten er godt skrevet og bruker mange fine virkemidler som gjør at leseren synes den er bra.»

**Besvarelse 2:**
«I tekst A bruker forfatteren kontrast mellom lys og mørke for å skildre hovedpersonens indre konflikt. Åpningsscenen beskrives med 'gyllent sollys' og 'varme farger', mens vendepunktet skjer i 'kveldens skygger' der 'mørket krøp innover rommet.' Kontrasten mellom lys og mørke speiler overgangen fra trygghet til usikkerhet. I tillegg brukes besjeling i setningen 'mørket krøp innover rommet' — mørket får en menneskelig egenskap, noe som gjør trusselen mer konkret og levende. Besjelingen forsterker følelsen av at noe uønsket nærmer seg.»`,
      solution: `**Besvarelse 2 er klart best.** Her er forskjellene:

**Besvarelse 1 — svak:**
- Definerer fagbegreper i stedet for å bruke dem (sensor vet hva en metafor er)
- Ingen konkrete eksempler fra teksten
- Ingen analyse av virkning
- Vag vurdering: «godt skrevet», «fine virkemidler», «bra» — sier ingenting faglig
- Svar på feil spørsmål: Oppgaven ber om to SPESIFIKKE virkemidler med virkning

**Besvarelse 2 — god:**
- Identifiserer to virkemidler konkret (kontrast, besjeling)
- Bruker sitater fra teksten som bevis
- Forklarer virkningen av hvert virkemiddel
- Kobler virkemidlene til innholdet (indre konflikt, trussel)
- Presist og direkte — ikke et ord for mye

**Hovedforskjellen:** Besvarelse 1 snakker OM virkemidler generelt. Besvarelse 2 analyserer SPESIFIKKE virkemidler i DENNE teksten.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-1',
        number: '10.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste egenskapen ved et godt kortsvar?',
        options: [
          {
            id: 'a',
            text: 'Det er så langt som mulig for å vise at du kan mye',
            isCorrect: false,
            feedback: 'Feil. Lengde er ikke kvalitet. Et kortsvar som er for langt, viser at du ikke klarer å være presis — og det kan trekke ned.',
          },
          {
            id: 'b',
            text: 'Det svarer direkte på oppgaven med faglig presisjon og eksempler fra teksten',
            isCorrect: true,
            feedback: 'Riktig! Et godt kortsvar er presist, faglig og direkte. Hvert ord tjener et formål.',
          },
          {
            id: 'c',
            text: 'Det inneholder definisjoner av alle fagbegrepene du bruker',
            isCorrect: false,
            feedback: 'Feil. Du skal BRUKE fagbegreper, ikke definere dem. Sensor vet hva begrepene betyr — vis at du kan anvende dem.',
          },
          {
            id: 'd',
            text: 'Det har en lang innledning som viser at du forstår oppgaven',
            isCorrect: false,
            feedback: 'Feil. I et kortsvar er det knapt med plass. Gå rett på sak — du trenger ikke en lang innledning.',
          },
        ],
        solution: 'Alternativ B er riktig. Presisjon, relevans og faglig dybde er nøkkelen til et godt kortsvar.',
      },
    },

    // ========== OPPBYGGING AV KORTSVAR ==========
    {
      id: 'norsk-10-10-2-oppbygging',
      type: 'text',
      content: `## Slik bygger du opp et godt kortsvar

Kortsvarsoppgaven krever en annen struktur enn langsvaret. Du har ikke plass til en lang innledning eller utdypende refleksjoner. I stedet bruker du en **stram, direkte struktur**.

### Modell: Kort innledning → Poeng 1 → Poeng 2 → Kort oppsummering

**Kort innledning (1-2 setninger):**
Gå rett på sak. Nevn teksten og oppgavens fokus. Ingen lang presentasjon.

«I tekst A bruker forfatteren flere språklige virkemidler. Jeg vil fokusere på kontrast og besjeling.»

**Poeng 1 (5-7 setninger):**
- Navngi virkemiddelet
- Gi et eksempel (sitat) fra teksten
- Forklar virkningen

**Poeng 2 (5-7 setninger):**
- Navngi det andre virkemiddelet
- Gi et eksempel (sitat) fra teksten
- Forklar virkningen

**Kort oppsummering (1-2 setninger):**
Koble de to poengene til en helhet. Hva oppnår forfatteren med disse virkemidlene samlet?

### Sitatbruk i kortsvar

Sitater er viktige i kortsvar — de viser at du faktisk har lest teksten og kan peke på konkrete steder. Men bruk dem riktig:

**Korte sitater i setningen:** «Forfatteren beskriver mørket som noe som 'krøp innover rommet', en besjeling som gjør trusselen konkret.»

**Ikke for mange sitater:** To til fire korte sitater er nok i et kortsvar. Ikke kopier hele avsnitt fra teksten.

**Integrer sitatene:** Sitater skal flyte naturlig i teksten din, ikke bare slippes inn uten sammenheng.`,
    },

    // ========== DEFINISJON: SITAT OG REFERANSE ==========
    {
      id: 'norsk-10-10-2-def-2',
      type: 'definition',
      title: 'Sitat og referanse — å bruke teksten som bevis',
      content: `**Sitat** er et direkte, ordrett utdrag fra en tekst. Det markeres med anførselstegn.

**Regler for sitatbruk:**
- Bruk anførselstegn: «Mørket krøp innover rommet.»
- Sitér bare det som er relevant — du trenger ikke hele setningen
- Integrer sitatet i din egen setning: Forfatteren skriver at mørket «krøp innover rommet», en besjeling som...
- Bruk hakeparentes [...] hvis du kutter i sitatet: «Mørket [...] krøp innover rommet.»

**Referanse** er en indirekte henvisning der du omformulerer innholdet med egne ord.

**Eksempel:**
- Sitat: Forfatteren skriver: «Lydene fra gaten blandet seg med stillheten inne.»
- Referanse: Forfatteren beskriver kontrasten mellom støyen utenfor og stillheten inne i rommet.

**Når bruker du hva?**
- **Sitat:** Når ordvalget er viktig (virkemidler, spesielle formuleringer, nøkkelord)
- **Referanse:** Når du trenger å vise til innholdet, men ikke de eksakte ordene

**Tips for eksamen:** Bruk en miks av sitater og referanser. Bare sitater virker mekanisk. Bare referanser mangler bevis.`,
    },

    // ========== OPPGAVE 2: CLASSIC ==========
    {
      id: 'norsk-10-10-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-2',
        number: '10.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omformuler disse dårlige kortsvar-setningene til gode, presise formuleringer.',
        subTasks: [
          {
            label: 'a',
            task: '«En metafor er når man sammenligner to ting uten å bruke som. Forfatteren bruker metaforer i teksten.»',
            solution: 'Forfatteren bruker metaforen «hjertet var en isklump» for å skildre følelsesmessig kulde. Bildet av isklumpen gjør den abstrakte følelsen konkret og forsterker inntrykket av at karakteren har stengt seg inne.',
          },
          {
            label: 'b',
            task: '«Teksten er veldig bra skrevet. Forfatteren bruker fine ord og det er fint å lese den.»',
            solution: 'Forfatteren bruker et poetisk, bilderikt språk med sansedetaljer som «solen glitret i de våte bladene» og «luften smakte av salt og tang.» Disse detaljene skaper en levende stemning som trekker leseren inn i scenen.',
          },
          {
            label: 'c',
            task: '«Det er kontrast i teksten fordi noen ting er forskjellige fra hverandre.»',
            solution: 'Kontrasten mellom den rolige naturskildringen i innledningen og den hektiske byskildringen i midten understreker hovedpersonens opplevelse av å ikke passe inn i storbyen. Naturen representerer det trygge, byen det fremmedgjørende.',
          },
        ],
        solution: 'Gode formuleringer er spesifikke (navngir konkrete eksempler), analytiske (forklarer virkning) og unngår definisjoner og vage vurderinger.',
      },
    },

    // ========== EKSEMPEL: SAMMENLIGNINGSOPPGAVE ==========
    {
      id: 'norsk-10-10-2-example-2',
      type: 'example',
      title: 'Eksempel: Slik løser du en sammenligningsoppgave',
      problem: `**Oppgave:** «Sammenlign hvordan ensomhet skildres i tekst A og tekst B.»

Hvordan bør du strukturere et kortsvar som sammenligner to tekster?`,
      solution: `**Struktur for sammenligningskortsvar:**

**Alternativ 1: Tekst for tekst**
1. Kort innledning som nevner begge tekstene
2. Hvordan ensomhet skildres i tekst A (med eksempler)
3. Hvordan ensomhet skildres i tekst B (med eksempler)
4. Sammenligning: likheter og forskjeller
5. Kort konklusjon

**Alternativ 2: Poeng for poeng (anbefales)**
1. Kort innledning
2. Likhet: «Begge tekstene bruker ... for å skildre ensomhet»
3. Forskjell 1: «Mens tekst A skildrer ensomhet gjennom ..., bruker tekst B ...»
4. Forskjell 2: «En annen forskjell er at ...»
5. Kort konklusjon

**Alternativ 2 er som regel best** fordi den tvinger deg til å faktisk sammenligne — ikke bare skrive to separate analyser. Sensor vil se at du kan **koble** tekstene til hverandre.

**Nyttige formuleringer:**
- «Begge tekstene skildrer ...»
- «Mens tekst A bruker ..., benytter tekst B ...»
- «I motsetning til tekst A, der ..., ser vi at tekst B ...»
- «Felles for begge tekstene er at ...»
- «Den største forskjellen mellom tekstene er ...»`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-3',
        number: '10.10',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken strategi er best når du skal sammenligne to tekster i et kortsvar?',
        options: [
          {
            id: 'a',
            text: 'Skriv først en full analyse av tekst A, deretter en full analyse av tekst B',
            isCorrect: false,
            feedback: 'Feil. Denne strategien gir to separate analyser — ikke en sammenligning. Du risikerer at du aldri kobler tekstene til hverandre.',
          },
          {
            id: 'b',
            text: 'Organiser svaret etter poenger (likheter og forskjeller), og trekk inn begge tekstene under hvert poeng',
            isCorrect: true,
            feedback: 'Riktig! «Poeng for poeng»-metoden sikrer at du faktisk sammenligner. Sensor ser at du kan koble tekstene til hverandre.',
          },
          {
            id: 'c',
            text: 'Velg den teksten du liker best og skriv mest om den',
            isCorrect: false,
            feedback: 'Feil. En sammenligningsoppgave krever at du behandler begge tekstene. Å favorisere én tekst svarer ikke på oppgaven.',
          },
          {
            id: 'd',
            text: 'List opp alle virkemidlene i begge tekstene i en tabell',
            isCorrect: false,
            feedback: 'Feil. En tabell er et godt planleggingsverktøy, men selve kortsvaret skal skrives som sammenhengende tekst med analyse.',
          },
        ],
        solution: 'Alternativ B er riktig. «Poeng for poeng»-strukturen er mest effektiv for å vise at du kan sammenligne.',
      },
    },

    // ========== OPPGAVE 4: SKRIVETRENING ==========
    {
      id: 'norsk-10-10-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-4',
        number: '10.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Skrivetrening: Skriv et kortsvar (200-300 ord) der du gjør greie for to virkemidler i en tekst du kjenner fra norsktimene.

Bruk denne strukturen:
1. Kort innledning (1-2 setninger)
2. Virkemiddel 1: Navngi → sitat/eksempel → forklaring av virkning
3. Virkemiddel 2: Navngi → sitat/eksempel → forklaring av virkning
4. Kort oppsummering (1-2 setninger)

Tell ordene dine. Prøv å holde deg innenfor 200-300 ord.`,
        hints: [
          'Gå rett på sak — ikke bruk plass på unødvendig innledning',
          'Velg to tydelige virkemidler du kan si noe substansielt om',
          'Hvert ord må tjene et formål. Fjern alt som er fyllstoff',
        ],
        solution: 'Et godt kortsvar er presist, faglig og direkte. Det svarer på oppgaven, bruker eksempler fra teksten, og holder seg innenfor ordgrensen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TIP: EFFEKTIV SITATBRUK ==========
    {
      id: 'norsk-10-10-2-tip',
      type: 'tip',
      title: 'Slik integrerer du sitater elegant',
      content: `**Dårlig (sitatet bare slippes inn):**
«Forfatteren bruker kontrast. "Solen skinte klart mens regnet piskede mot vinduet." Dette er kontrast.»

**Godt (sitatet integreres i setningen):**
«Forfatteren bruker kontrast mellom naturkreftene — 'solen skinte klart mens regnet pisket mot vinduet' — for å speile hovedpersonens blandede følelser.»

**Legg merke til:**
- Sitatet glir inn i din egen setning
- Det kommer umiddelbart analyse etter sitatet
- Du trenger ikke si «dette er kontrast» — du har allerede sagt det i innledningen til setningen`,
    },

    // ========== OPPGAVE 5: TIDSSTYRING ==========
    {
      id: 'norsk-10-10-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-5',
        number: '10.12',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Eksamen varer 5 timer, og du skal skrive både kortsvar og langsvar. Hvor mye tid bør du bruke på kortsvarsoppgaven?',
        options: [
          {
            id: 'a',
            text: 'Ca. 30-45 minutter, slik at du har mest tid til langsvarsoppgaven',
            isCorrect: false,
            feedback: 'Feil. 30-45 minutter er i korteste laget. Du trenger tid til å lese oppgaven, planlegge, skrive og revidere.',
          },
          {
            id: 'b',
            text: 'Ca. 1-1,5 timer, inkludert lesing og planlegging',
            isCorrect: true,
            feedback: 'Riktig! Ca. 1-1,5 timer gir deg nok tid til å lese oppgaven grundig, planlegge strukturen, skrive et godt svar og lese gjennom etterpå.',
          },
          {
            id: 'c',
            text: 'Ca. 2,5 timer, like mye som langsvaret',
            isCorrect: false,
            feedback: 'Feil. Kortsvaret er kortere og krever ikke like mye tid som langsvaret. Du risikerer å ha for lite tid til langsvaret.',
          },
          {
            id: 'd',
            text: 'Du bør skrive kortsvaret til slutt, med den tiden som er igjen',
            isCorrect: false,
            feedback: 'Feil. Å spare kortsvaret til slutt er risikabelt — du kan bli stresset og skrive et dårlig svar. Mange anbefaler å skrive kortsvaret FØRST fordi det er konkret og avgrenset.',
          },
        ],
        solution: 'Alternativ B er riktig. Ca. 1-1,5 timer gir nok tid til et godt kortsvar. Mange anbefaler å starte med kortsvaret.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Kortsvar:** 200-350 ord, presis besvarelse av et spesifikt spørsmål
- **Presisjon:** Hvert ord teller — fjern fyllstoff og vage formuleringer
- **Oppgavefokus:** Svar direkte på det oppgaven spør om
- **Sitat:** Direkte utdrag med anførselstegn, integrert i teksten
- **Referanse:** Indirekte henvisning formulert med egne ord
- **Sammenligning:** «Poeng for poeng»-struktur er mest effektiv

### Viktige sammenhenger
- Kort betyr ikke overfladisk — det betyr **konsentrert** og **presis**
- Bruk fagbegreper til å analysere, ikke bare til å definere eller nevne
- Sitater er bevis: De viser at du har lest teksten og kan peke på konkrete steder
- God struktur er enda viktigere i kortsvar enn i langsvar — fordi du har så lite plass`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-10-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-6',
        number: '10.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Sammenlign to tekster.

Velg to tekster du har lest i 10. klasse (noveller, dikt, artikler — eller en kombinasjon). Skriv et kortsvar (250-350 ord) der du sammenligner hvordan de to tekstene behandler et felles tema.

Bruk «poeng for poeng»-strukturen:
a) Kort innledning: Nevn begge tekstene og temaet
b) Likhet: Hva er felles?
c) Forskjell 1: Hvordan skiller de seg?
d) Forskjell 2 (valgfritt): En til forskjell
e) Kort oppsummering

Husk å bruke sitater eller referanser fra begge tekstene.`,
        hints: [
          'Velg et tema som er tydelig i begge tekstene — da har du noe å sammenligne',
          'Bruk sammenligningsuttrykk: «Mens tekst A...», «I motsetning til...», «Felles for begge...»',
          'Tell ordene dine underveis — stopp når du nærmer deg 350',
        ],
        solution: 'Et godt sammenligningskortsvar viser at du kan se likheter og forskjeller mellom tekster, bruke fagbegreper, og strukturere en kort, presis analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-10-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-2-ex-7',
        number: '10.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Eksamenssimulering — kortsvar.

Still deg selv en kortsvarsoppgave basert på en tekst du kjenner, og besvar den under tidspress.

a) Velg en tekst og lag en oppgave i eksamensstil (for eksempel: «Gjør greie for to virkemidler i teksten og forklar virkningen.»)
b) Sett en timer på 45 minutter
c) Skriv kortsvaret (200-350 ord)
d) Når tiden er ute, les gjennom og vurder: Svarte du på oppgaven? Brukte du sitater? Er språket presist?

Skriv en kort refleksjon (50-100 ord) om hva du synes gikk bra og hva du vil øve mer på.`,
        hints: [
          'Lag en realistisk oppgave — se på tidligere eksamensoppgaver for inspirasjon',
          'Hold deg til tidsrammen. Poenget er å øve på å skrive under press',
          'Refleksjonen er like viktig som selve kortsvaret — den hjelper deg å lære av erfaringen',
        ],
        solution: 'Eksamenssimulering er den mest effektive forberedelsen. Ved å øve under realistiske forhold lærer du å håndtere tidspress og strukturere tankene raskt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.3: Nynorsk skrivetrening
// LK20: Skrive tekster med funksjonell bruk av nynorsk,
//        bruke nynorsk og bokmål i egne tekster
// ============================================================================

export const CHAPTER_NORSK_10_10_3: TextbookChapter = {
  id: 'norsk-10-10-3',
  courseId: 'norsk-10',
  chapterNumber: '10.3',
  title: 'Nynorsk skrivetrening',
  description: 'Lær dei viktigaste nynorskreglane, bli trygg på å skrive nynorsk, og unngå dei vanlegaste feila som elevar gjer på eksamen.',
  estimatedMinutes: 75,
  competenceGoals: [
    'skrive tekster med funksjonell bruk av nynorsk',
    'bruke nynorsk og bokmål i egne tekster',
    'mestre rettskriving og tegnsetting og bruke grammatisk kunnskap til å forbedre egne tekster',
  ],
  keyTerms: [
    { term: 'Sidemål', definition: 'Det skriftspråket du har som nummer to — for dei fleste elevar i Noreg er det nynorsk' },
    { term: 'Nynorsk', definition: 'Eit av dei to offisielle norske skriftspråka, utvikla av Ivar Aasen med grunnlag i norske dialektar' },
    { term: 'A-infinitiv', definition: 'Å bruke -a i staden for -e i infinitiv av verb, t.d. «å skriva» i staden for «å skrive» (valfritt i nynorsk)' },
    { term: 'E-infinitiv', definition: 'Å bruke -e i infinitiv av verb, t.d. «å skrive» (valfritt i nynorsk, men konsekvent val er viktig)' },
    { term: 'Bøyingsendingar', definition: 'Endringane som eit ord får i ulike former, t.d. ein bil – bilen – bilar – bilane' },
    { term: 'Nynorskord', definition: 'Ord som er spesifikke for nynorsk og skil seg frå bokmål, t.d. «kvar» (hvor), «kvifor» (hvorfor), «nokon» (noen)' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-10-3-intro',
      type: 'text',
      content: `## Nynorsk skrivetrening: Slik blir du trygg på sidemålet

La oss være ærlige: Mange elever gruer seg til nynorsk. Det føles som et fremmed språk, og tanken på å skrive nynorsk på eksamen gir vonde følelser i magen. Men her er den gode nyheten: **Nynorsk er ikke vanskelig.** Det er norsk. Det er bare noen andre regler — og de kan du lære.

Det viktigste hinderet er ikke grammatikk — det er **holdning**. Mange elever har bestemt seg for at nynorsk er umulig, og da blir det umulig. Hvis du derimot bestemmer deg for at du skal knekke koden, vil du oppdage at nynorsk faktisk er ganske logisk.

I dette kapittelet lærer du:
- Dei viktigaste **forskjellane** mellom bokmål og nynorsk
- Korleis du bøyer **verb, substantiv og adjektiv** på nynorsk
- Dei vanlegaste **nynorskorda** du treng å kunne
- Dei vanlegaste **feila** elevar gjer — og korleis du unngår dei
- Praktiske **skriveøvingar** som gjer deg tryggare

**Viktig:** Resten av dette kapittelet vekslar mellom bokmål og nynorsk. Forklaringane er på bokmål, men eksempler og øvingar er på nynorsk. Slik får du trening undervegs.`,
    },

    // ========== DEFINISJON: NYNORSK VS. BOKMÅL ==========
    {
      id: 'norsk-10-10-3-def-1',
      type: 'definition',
      title: 'Nynorsk og bokmål — to norske skriftspråk',
      content: `**Bokmål** bygger historisk på dansk skriftspråk, tilpasset norsk uttale. Det er hovedmålet for ca. 87 % av elevene i Norge.

**Nynorsk** ble utviklet av Ivar Aasen på 1800-tallet med grunnlag i norske dialekter. Det er hovedmålet for ca. 13 % av elevene, men alle skal lære å skrive begge.

**Viktigste forskjeller i grammatikk:**
- Nynorsk har **tre kjønn** som brukes konsekvent: ein (hankjønn), ei (hokjønn), eit (inkjekjønn)
- Hokjønnsord MÅ bøyes som hokjønn: ei jente – jenta (IKKE «jenten»)
- Verbformer er ulike: «skriv» (nynorsk presens) vs. «skriver» (bokmål presens)
- Mange vanlige ord er ulike: kvar/hvor, kvifor/hvorfor, nokon/noen, noko/noe

**Viktigste forskjeller i ordforråd:**
| Bokmål | Nynorsk |
|--------|---------|
| også | òg / også |
| noen | nokon |
| noe | noko |
| hvor | kvar |
| hvorfor | kvifor |
| hvordan | korleis |
| mange | mange |
| bare | berre |
| hvis | dersom / viss |
| veldig | svært / veldig |
| forskjellig | ulik / forskjellig |`,
    },

    // ========== EKSEMPEL: VERB PÅ NYNORSK ==========
    {
      id: 'norsk-10-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Verbbøying på nynorsk',
      problem: `Hvordan bøyer du de vanligste verbene på nynorsk? Se på dette eksempelet og legg merke til mønstrene.`,
      solution: `**Nynorsk verbbøying — hovudreglar:**

**Presens (notid):**
- Svake verb mister -r i presens: skrive → skriv, lese → les
- Sterke verb mister også -r: kome → kjem, finne → finn

| Bokmål presens | Nynorsk presens |
|------|------|
| skriver | skriv |
| leser | les |
| tenker | tenkjer |
| snakker | snakkar |
| kommer | kjem |
| finner | finn |
| gjør | gjer |
| ser | ser |
| sier | seier |
| har | har |
| er | er |

**Preteritum (fortid):**
- E-verb (svake): jobba/jobbet → jobba, snakka/snakket → snakka
- Sterke: fant → fann, kom → kom, skrev → skreiv

**Infinitiv:**
Du kan velge mellom a-infinitiv og e-infinitiv, men du MÅ velge konsekvent:
- A-infinitiv: å skriva, å lesa, å tenkja
- E-infinitiv: å skrive, å lese, å tenkje

**Viktig feil å unngå:** Ikke bland infinitiv — velg enten a-infinitiv ELLER e-infinitiv i hele teksten.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-1',
        number: '10.15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Kva er den riktige nynorske presensforma av verbet «skriver»?',
        options: [
          {
            id: 'a',
            text: 'skriver',
            isCorrect: false,
            feedback: 'Feil. «Skriver» er bokmålsforma. På nynorsk mistar dei fleste verb -r i presens.',
          },
          {
            id: 'b',
            text: 'skriv',
            isCorrect: true,
            feedback: 'Riktig! På nynorsk heiter det «eg skriv», «du skriv», «ho skriv». Presensforma har ikkje -r.',
          },
          {
            id: 'c',
            text: 'skriva',
            isCorrect: false,
            feedback: 'Feil. «Skriva» er infinitivsforma (a-infinitiv). Presens er «skriv».',
          },
          {
            id: 'd',
            text: 'skrivast',
            isCorrect: false,
            feedback: 'Feil. «Skrivast» er passivforma. Presens er «skriv».',
          },
        ],
        solution: 'Alternativ B er riktig. Nynorsk presens mistar -r: «eg skriv», «du les», «ho tenkjer».',
      },
    },

    // ========== SUBSTANTIV PÅ NYNORSK ==========
    {
      id: 'norsk-10-10-3-substantiv',
      type: 'text',
      content: `## Substantiv på nynorsk — tre kjønn som tel

Den viktigaste forskjellen mellom bokmål og nynorsk for substantiv er at nynorsk bruker **tre kjønn konsekvent**. På bokmål kan du ofte velje mellom hankjønn og hokjønn (en/ei jente), men på nynorsk MÅ hokjønnsord vere hokjønn.

### Hankjønn (ein)

| Ubestemt eintal | Bestemt eintal | Ubestemt fleirtal | Bestemt fleirtal |
|----------------|----------------|-------------------|-----------------|
| ein gut | guten | gutar | gutane |
| ein bil | bilen | bilar | bilane |
| ein stol | stolen | stolar | stolane |

### Hokjønn (ei)

| Ubestemt eintal | Bestemt eintal | Ubestemt fleirtal | Bestemt fleirtal |
|----------------|----------------|-------------------|-----------------|
| ei jente | jenta | jenter | jentene |
| ei bok | boka | bøker | bøkene |
| ei dør | døra | dører | dørene |
| ei avis | avisa | aviser | avisene |

### Inkjekjønn (eit)

| Ubestemt eintal | Bestemt eintal | Ubestemt fleirtal | Bestemt fleirtal |
|----------------|----------------|-------------------|-----------------|
| eit hus | huset | hus | husa |
| eit barn | barnet | barn | barna |
| eit bord | bordet | bord | borda |

### Den viktigaste regelen

**Hokjønnsord MÅ ha hokjønnsendingar.** Dette er den vanlegaste feilen elevar gjer. Ikkje skriv «boken» — skriv **boka**. Ikkje skriv «jenten» — skriv **jenta**. Ikkje skriv «avisen» — skriv **avisa**.

**Tips:** Viss du er usikker på kjønnet til eit ord, sjekk ordbok.uib.no (Nynorskordboka).`,
    },

    // ========== DEFINISJON: HOKJØNNSREGELEN ==========
    {
      id: 'norsk-10-10-3-def-2',
      type: 'definition',
      title: 'Hokjønnsregelen i nynorsk',
      content: `**Hokjønnsregelen** er den viktigaste grammatiske regelen som skil nynorsk frå bokmål:

**Alle hokjønnsord MÅ bøyast som hokjønn på nynorsk.**

Dette betyr at du IKKJE kan skrive:
- ~~boken~~ → **boka**
- ~~jenten~~ → **jenta**
- ~~solen~~ → **sola**
- ~~klassen~~ → **klassa**
- ~~avisen~~ → **avisa**
- ~~bygningen~~ → **bygningen** (obs: hankjønn på nynorsk!)

**Korleis veit du om eit ord er hokjønn?**
- Dei fleste ord som er hokjønn på bokmål, er det også på nynorsk
- Sjekk ordboka viss du er usikker
- Ord som sluttar på -ing er oftast hankjønn på nynorsk (ein bygning, ein meining, ein forteljing)

**Viktig unntak:** Ord på -ing som er hokjønn på bokmål, er ofte **hankjønn** på nynorsk:
- bokmål: ei fortelling → nynorsk: ein **forteljing**
- bokmål: ei bygning → nynorsk: ein **bygning**
- bokmål: ei mening → nynorsk: ein **meining**

**Huskeregel:** Nynorsk elskar hokjønn. Bruk «ei» og «-a» aktivt — det gir nynorsken karakter og er eit av dei tydelegaste teikna på at du meistrar sidemålet.`,
    },

    // ========== OPPGAVE 2: BØYING ==========
    {
      id: 'norsk-10-10-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-2',
        number: '10.16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy desse orda riktig på nynorsk. Skriv alle fire formene: ubestemt eintal, bestemt eintal, ubestemt fleirtal, bestemt fleirtal.',
        subTasks: [
          {
            label: 'a',
            task: 'bok (hokjønn)',
            solution: 'ei bok – boka – bøker – bøkene',
            multipleChoiceOptions: ['ei bok – boka – bøker – bøkene', 'ein bok – boken – bøker – bøkene', 'ei bok – boken – bøker – bøkane', 'eit bok – boket – bøker – bøkene'],
          },
          {
            label: 'b',
            task: 'gut (hankjønn)',
            solution: 'ein gut – guten – gutar – gutane',
            multipleChoiceOptions: ['ein gut – guten – gutar – gutane', 'ei gut – guta – gutar – gutane', 'ein gut – guten – gutter – guttene', 'ein gut – gutten – gutar – gutane'],
          },
          {
            label: 'c',
            task: 'hus (inkjekjønn)',
            solution: 'eit hus – huset – hus – husa',
            multipleChoiceOptions: ['eit hus – huset – hus – husa', 'ein hus – husen – husar – husane', 'eit hus – huset – huser – husene', 'ei hus – husa – hus – husa'],
          },
          {
            label: 'd',
            task: 'avis (hokjønn)',
            solution: 'ei avis – avisa – aviser – avisene',
            multipleChoiceOptions: ['ei avis – avisa – aviser – avisene', 'ein avis – avisen – aviser – avisene', 'ei avis – avisen – avisar – avisane', 'eit avis – aviset – aviser – avisene'],
          },
        ],
        solution: 'a) ei bok – boka – bøker – bøkene, b) ein gut – guten – gutar – gutane, c) eit hus – huset – hus – husa, d) ei avis – avisa – aviser – avisene.',
      },
    },

    // ========== VANLIGE NYNORSKORD ==========
    {
      id: 'norsk-10-10-3-ordliste',
      type: 'text',
      content: `## Ordliste: Dei viktigaste nynorskorda

Mange av feila elevar gjer på nynorsk, handlar ikkje om grammatikk — dei handlar om **ordval**. Nokre svært vanlege bokmålsord finst ikkje på nynorsk, og du må bruke andre ord.

### Må-kunne-ord (du kjem ikkje utanom desse)

| Bokmål | Nynorsk | Eksempel |
|--------|---------|----------|
| noen | nokon | «Nokon ringde på døra.» |
| noe | noko | «Det var noko rart med han.» |
| hvor | kvar | «Kvar bur du?» |
| hvorfor | kvifor | «Kvifor gjekk du?» |
| hvordan | korleis | «Korleis har du det?» |
| bare | berre | «Eg ville berre seie hei.» |
| hvis/om | dersom / viss | «Dersom det regnar, blir vi inne.» |
| annerledes | annleis | «Det var annleis enn eg trudde.» |
| egentlig | eigentleg | «Kva meiner du eigentleg?» |
| forskjellig | ulik / forskjellig | «Tekstane er svært ulike.» |
| snart | snart | «Ho kjem snart.» |
| ennå | enno / endå | «Eg er ikkje ferdig enno.» |
| kanskje | kanskje | «Kanskje det går bra.» |

### Negasjonen «ikkje»

**ikkje** = ikke

Dette er det ordet som kanskje oftast avslører bokmålsskriving i nynorsktekst. «Ikke» er FEIL på nynorsk. Det heiter alltid **ikkje**.

### Pronomen

| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| hun/henne | ho/henne |
| de/dem | dei/dei |
| vi/oss | vi/oss |
| seg | seg |
| sin/si/sitt | sin/si/sitt |

**Tips:** Lag eit lite «jukseark» med dei vanlegaste orda og legg det ved sida av deg når du skriv nynorsk. Etter kvart vil orda sitje automatisk.`,
    },

    // ========== OPPGAVE 3: OMSETJING ==========
    {
      id: 'norsk-10-10-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-3',
        number: '10.17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Set om desse setningane frå bokmål til nynorsk. Pass på verb, substantiv og ordval.',
        subTasks: [
          {
            label: 'a',
            task: '«Jeg vet ikke hvorfor hun ikke kom til skolen i dag.»',
            solution: '«Eg veit ikkje kvifor ho ikkje kom på skulen i dag.» (Viktige endringar: jeg→eg, vet→veit, ikke→ikkje, hvorfor→kvifor, hun→ho, skolen→skulen)',
          },
          {
            label: 'b',
            task: '«Noen sa at boken var veldig bra, men jeg synes den var annerledes enn forventet.»',
            solution: '«Nokon sa at boka var svært god, men eg synest ho var annleis enn forventa.» (Viktige endringar: noen→nokon, boken→boka, veldig→svært, annerledes→annleis, den→ho [fordi «bok» er hokjønn])',
          },
          {
            label: 'c',
            task: '«Hvis vi leser teksten nøye, finner vi flere metaforer som forsterker budskapet.»',
            solution: '«Dersom vi les teksten nøye, finn vi fleire metaforar som forsterkar bodskapen.» (Viktige endringar: hvis→dersom, leser→les, finner→finn, flere→fleire, budskapet→bodskapen)',
          },
        ],
        hints: [
          'Start med å identifisere «ikkje-orda»: jeg, ikke, noen, noe, hvor, hvorfor, bare',
          'Sjekk verba: Presens på nynorsk mistar ofte -r (leser→les, finner→finn)',
          'Sjekk substantiva: Er dei hokjønn? Då MÅ dei ha -a (boka, jenta)',
        ],
        solution: 'Gode omsetjingar endrar ikkje berre enkeltord — dei sikrar at heile setninga «høyrest ut» som nynorsk.',
      },
    },

    // ========== EKSEMPEL: VANLIGE FEIL ==========
    {
      id: 'norsk-10-10-3-example-2',
      type: 'example',
      title: 'Eksempel: Dei fem vanlegaste nynorskfeila',
      problem: `Kva er dei vanlegaste feila elevar gjer når dei skriv nynorsk, og korleis unngår du dei?`,
      solution: `**Feil 1: «ikke» i staden for «ikkje»**
Feil: «Eg forstår ikke teksten.»
Riktig: «Eg forstår **ikkje** teksten.»

**Feil 2: Bokmålsord som ikkje finst på nynorsk**
Feil: «Noen tenker at det er bare en bok.»
Riktig: «**Nokon** tenkjer at det **berre** er **ei** bok.»

**Feil 3: Hankjønnsbøying av hokjønnsord**
Feil: «Boken var interessant.»
Riktig: «**Boka** var interessant.»

**Feil 4: Bokmålsk presens med -r**
Feil: «Ho skriver ein tekst.»
Riktig: «Ho **skriv** ein tekst.»

**Feil 5: Blanda infinitiv**
Feil: «Ho likte å skrive og å lesa.» (Blandar e- og a-infinitiv)
Riktig: «Ho likte å skrive og å lese.» ELLER «Ho likte å skriva og å lesa.»

**Tips:** Les teksten din og let spesifikt etter desse fem feila. Det tek to minutt og kan redde karakteren din.`,
    },

    // ========== OPPGAVE 4: FEILRETTING ==========
    {
      id: 'norsk-10-10-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-4',
        number: '10.18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn og rett feila i denne nynorskteksten. Det er minst sju feil.',
        subTasks: [
          {
            label: 'Tekst med feil',
            task: '«Jeg liker å lese bøker, men jeg vet ikke hvorfor noen tekster er vanskelige å forstå. Boken vi leser i klassen handler om en jenten som finner ut at livet er annerledes enn hun trodde. Ho skriver i dagboken sin hver kveld.»',
            solution: '«**Eg** likar å lese bøker, men **eg** veit **ikkje** **kvifor** **nokon** tekstar er vanskelege å forstå. **Boka** vi les i klassen handlar om **ei** **jente** som finn ut at livet er **annleis** enn **ho** trudde. Ho skriv i dagboka si kvar kveld.» Feil: Jeg→Eg (x2), ikke→ikkje, hvorfor→kvifor, noen→nokon, Boken→Boka, jenten→jente (med «ei»), annerledes→annleis, hun→ho, skriver→skriv, dagboken→dagboka, hver→kvar.',
          },
        ],
        hints: [
          'Les kvar setning for seg og sjå om du finn bokmålsord',
          'Sjekk spesielt: jeg/eg, ikke/ikkje, noen/nokon, -boken/-boka',
          'Er alle hokjønnsord bøygde riktig?',
        ],
        solution: 'Dei viktigaste feila er bokmålsord (jeg, ikke, noen, hvorfor) og feil bøying av hokjønnsord (boken→boka).',
      },
    },

    // ========== OPPGAVE 5: SKRIVEØVING ==========
    {
      id: 'norsk-10-10-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-5',
        number: '10.19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skrivetrening: Skriv ein kort tekst (150-250 ord) på nynorsk om eitt av desse emna:

a) Kva er den beste boka du har lese, og kvifor?
b) Beskriv ein dag der alt gjekk gale
c) Kvifor er det viktig å lære nynorsk?

Bruk sjekklista etterpå:
- Har du brukt «ikkje» (ikkje «ikke»)?
- Har du brukt riktige nynorskord (nokon, kvifor, korleis, berre)?
- Er hokjønnsorda bøygde riktig (-a i bestemt form)?
- Er verbformene riktige (skriv, les, finn — ikkje skriver, leser, finner)?
- Har du vore konsekvent med infinitiv (berre -e ELLER berre -a)?`,
        hints: [
          'Skriv først på bokmål i hovudet, og «omset» til nynorsk',
          'Bruk ordlista frå kapittelet som hjelp',
          'Les teksten høgt til slutt — nynorsk som «høyrest feil ut» er ofte feil',
        ],
        solution: 'God nynorsk skriving krev øving. Ved å skrive korte tekstar og sjekke dei mot ordlista og reglane, byggjer du gradvis opp tryggleik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Sidemål:** Nynorsk for dei fleste elevar — eit eige skriftspråk, ikkje ein dialekt
- **Hokjønnsregelen:** Hokjønnsord MÅ bøyast med -a (boka, jenta, avisa)
- **Presens utan -r:** Nynorske verb mistar -r i presens (les, skriv, finn)
- **Nynorskord:** ikkje, nokon, noko, kvar, kvifor, korleis, berre, annleis
- **Konsekvent infinitiv:** Velg anten e-infinitiv eller a-infinitiv — ikkje bland
- **Pronomen:** eg, ho, dei

### Dei fem vanlegaste feila
1. «ikke» i staden for «ikkje»
2. Bokmålsord som ikkje finst på nynorsk (noen, hvorfor, bare)
3. Hankjønnsbøying av hokjønnsord (boken → boka)
4. Presens med -r (skriver → skriv)
5. Blanda infinitiv (skrive + lesa = feil)

### Viktigaste tipset
Les teksten din og sjekk spesifikt etter desse fem feilkategoriane. Det tek to minutt og gjer ein stor forskjell.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-10-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-6',
        number: '10.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Nynorsk eksamenstrening.

Skriv eit kortsvar (200-300 ord) PÅ NYNORSK der du gjer greie for to verkemiddel i ein tekst du kjenner frå norsktimane.

Krav:
a) Heile teksten skal vere på korrekt nynorsk
b) Du skal bruke minst to sitat frå teksten
c) Du skal analysere verknadene av verkemidla
d) Bruk nynorske fagord: verkemiddel, forfattar, skildring, samanligning osb.

Sjekk teksten din mot feillista frå kapittelet når du er ferdig.`,
        hints: [
          'Skriv gjerne på bokmål først, og set om til nynorsk etterpå — det hjelper mange',
          'Sjekk kvar setning: Finst det bokmålsord? Feil bøying?',
          'Nynorske fagord: verkemiddel (virkemiddel), forfattar (forfatter), skildring (skildring), kontrast (kontrast)',
        ],
        solution: 'Denne oppgåva kombinerer fagleg analyse med nynorsk skriving. Sensor vurderer både fagleg innhald og språkleg korrektheit.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-10-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-3-ex-7',
        number: '10.21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Set om eit avsnitt frå langsvaret ditt.

Gå tilbake til langsvarsbesvarelsen du skreiv i kapittel 10.1. Vel eitt avsnitt (ca. 100-150 ord) og set det om til nynorsk.

a) Omset avsnittet til korrekt nynorsk
b) Marker alle orda du måtte endre
c) Skriv ein kort refleksjon (50 ord) på bokmål: Kva var vanskelegast å omsetje?

Dette er eksamensrelevant trening — på eksamen kan det komme oppgåver der du må skrive på sidemålet.`,
        hints: [
          'Start med dei «store» orda: eg, ikkje, nokon, kvifor',
          'Sjekk verba: Fjern -r i presens',
          'Sjekk hokjønnsorda: Dei MÅ ha -a',
        ],
        solution: 'Å omsetje eigne tekstar er svært god trening fordi du ser konkret kva du må endre. Etter kvart vil du skrive nynorsk meir naturleg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.4: Muntlig eksamen
// LK20: Presentere fagstoff muntlig med god struktur,
//        lytte til andre og delta i faglige samtaler
// ============================================================================

export const CHAPTER_NORSK_10_10_4: TextbookChapter = {
  id: 'norsk-10-10-4',
  courseId: 'norsk-10',
  chapterNumber: '10.4',
  title: 'Muntlig eksamen',
  description: 'Lær hvordan muntlig eksamen fungerer, hvordan du forbereder en god presentasjon, og hvordan du mestrer den faglige samtalen med sensor og eksaminator.',
  estimatedMinutes: 70,
  competenceGoals: [
    'presentere fagstoff muntlig med mottakerbevissthet og god struktur',
    'lytte til andre, bygge på andres innspill og argumentere saklig',
    'bruke fagspråk i samtaler og diskusjoner om tekst',
  ],
  keyTerms: [
    { term: 'Muntlig eksamen', definition: 'En eksamen der du presenterer et forberedt tema og deretter samtaler med eksaminator og sensor' },
    { term: 'Forberedelsesdelen', definition: 'Perioden (vanligvis 24 eller 48 timer) der du forbereder presentasjonen din med tilgang til alle hjelpemidler' },
    { term: 'Presentasjonsdelen', definition: 'Den første delen av eksamen der du holder en forberedt presentasjon (ca. 10 minutter)' },
    { term: 'Fagsamtalen', definition: 'Den andre delen av eksamen der eksaminator og sensor stiller spørsmål og samtaler med deg (ca. 15-20 minutter)' },
    { term: 'Eksaminator', definition: 'Din norsklærer, som stiller spørsmål under fagsamtalen' },
    { term: 'Sensor', definition: 'En ekstern person som vurderer eksamen din sammen med eksaminator' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-10-4-intro',
      type: 'text',
      content: `## Muntlig eksamen: Vis hva du kan — med stemmen

For mange elever er muntlig eksamen enda mer skummelt enn skriftlig. Du skal stå foran voksne mennesker og snakke faglig i en halvtime. Hjertet banker, hendene svetter, og hodet føles tomt. Det er helt normalt.

Men her er noe viktig å vite: **Muntlig eksamen er din beste sjanse til å vise deg frem.** Mens skriftlig eksamen er stille og ensom, er muntlig eksamen en **samtale**. Du kan forklare, utdype, rette opp misforståelser og vise engasjement. Eksaminator og sensor *vil* at du skal lykkes — de er ikke ute etter å ta deg.

I dette kapittelet skal du lære:
- Hvordan **muntlig eksamen er organisert** (forberedelse, presentasjon, fagsamtale)
- Hvordan du **forbereder** en god presentasjon
- Hvordan du lager **gode lysbilder** (som hjelper, ikke ødelegger)
- Hvordan du **mestrer fagsamtalen** — selv når du ikke vet svaret
- Teknikker for å håndtere **nervøsitet**`,
    },

    // ========== DEFINISJON: MUNTLIG EKSAMEN ==========
    {
      id: 'norsk-10-10-4-def-1',
      type: 'definition',
      title: 'Muntlig eksamen i norsk — struktur og innhold',
      content: `**Muntlig eksamen** i norsk for 10. klasse har tre deler:

**1. Forberedelse (24 eller 48 timer)**
- Du får vite temaet/oppgaven
- Du har tilgang til ALLE hjelpemidler (lærebok, internett, notater)
- Du forbereder en presentasjon
- Du kan ikke øve med lærer, men du kan øve med medelever

**2. Presentasjon (ca. 10 minutter)**
- Du holder en forberedt presentasjon om det gitte temaet
- Du kan bruke lysbilder, stikkord eller andre hjelpemidler
- Du skal IKKE lese fra et manus — du skal snakke fritt
- Vis at du kan strukturere et faglig innhold muntlig

**3. Fagsamtale (ca. 15-20 minutter)**
- Eksaminator (din lærer) og sensor stiller spørsmål
- Spørsmålene handler om presentasjonen din + andre deler av pensum
- Du skal vise bredde i fagkunnskapen din
- Det er en samtale, ikke et forhør — du kan også stille spørsmål tilbake

**Vurderingskriterier:**
- Fagkunnskap: Kan du stoffet?
- Fagspråk: Bruker du fagbegreper riktig?
- Kommunikasjon: Snakker du tydelig og sammenhengende?
- Refleksjon: Kan du tenke selvstendig og se sammenhenger?
- Bredde: Har du oversikt over hele pensum?`,
    },

    // ========== EKSEMPEL: GOD PRESENTASJON ==========
    {
      id: 'norsk-10-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Slik bygger du opp presentasjonen',
      problem: `Du har fått oppgaven: «Presenter og analyser en novelle fra pensum. Koble analysen til en litterær epoke.»

Hvordan bør du strukturere presentasjonen din?`,
      solution: `**Forslag til struktur (10 minutter):**

**1. Åpning (1 minutt)**
Start med noe som fanger oppmerksomheten:
- Et sitat fra novellen
- Et spørsmål til tilhørerne
- En kort, levende beskrivelse av temaet

Eksempel: «Tenk deg at du våkner en morgen og oppdager at du har blitt et insekt. Det er premisset for Kafkas 'Forvandlingen' — og det er denne novellen jeg skal snakke om i dag.»

**2. Presentasjon av teksten (2 minutter)**
- Tittel, forfatter, årstall
- Kort sammendrag (maks 1 minutt!)
- Hvilken epoke tilhører teksten?

**3. Analyse (4-5 minutter)**
- Tema og budskap
- 2-3 virkemidler med eksempler
- Karakterutvikling
- Kobling til den litterære epoken

**4. Refleksjon (1-2 minutter)**
- Hvorfor er teksten relevant i dag?
- Hva sier den om menneskelige erfaringer?
- Din egen refleksjon over temaet

**5. Avslutning (30 sekunder)**
Oppsummer hovedpoenget ditt. Gjerne avslutt med noe å tenke på.

**Tips:** Øv med stoppeklokke. 10 minutter går fortere enn du tror. De fleste elever prøver å si for mye — og ender med å skynde seg gjennom de viktigste poengene.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-1',
        number: '10.22',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den vanligste feilen elever gjør under presentasjonsdelen av muntlig eksamen?',
        options: [
          {
            id: 'a',
            text: 'De snakker for sakte og bruker for lang tid',
            isCorrect: false,
            feedback: 'Feil. De fleste elever har heller problemet med at de snakker for fort fordi de er nervøse.',
          },
          {
            id: 'b',
            text: 'De leser direkte fra manus eller lysbilder i stedet for å snakke fritt',
            isCorrect: true,
            feedback: 'Riktig! Å lese fra manus er den vanligste og mest ødeleggende feilen. Det viser at du ikke kan stoffet godt nok til å snakke om det, og det dreper kontakten med tilhørerne.',
          },
          {
            id: 'c',
            text: 'De bruker for mange fagbegreper',
            isCorrect: false,
            feedback: 'Feil. Det er nesten umulig å bruke for mange fagbegreper — så lenge du bruker dem riktig. Sensor vil høre at du behersker fagspråket.',
          },
          {
            id: 'd',
            text: 'De stiller for mange spørsmål til sensor',
            isCorrect: false,
            feedback: 'Feil. Det er ingenting galt med å stille spørsmål tilbake — det viser at du er engasjert i samtalen.',
          },
        ],
        solution: 'Alternativ B er riktig. Snakk fritt fra stikkord. Øyekontakt og naturlig tale gir mye bedre inntrykk enn opplesing.',
      },
    },

    // ========== FAGSAMTALEN ==========
    {
      id: 'norsk-10-10-4-fagsamtale',
      type: 'text',
      content: `## Fagsamtalen — den viktigste delen

Mange elever bruker all energi på presentasjonen og glemmer at **fagsamtalen utgjør den største delen av eksamen**. Det er i fagsamtalen sensor virkelig ser hva du kan.

### Hva skjer i fagsamtalen?

Eksaminator og sensor stiller spørsmål. Disse kan handle om:
1. **Utdyping av presentasjonen:** «Kan du si mer om kontrasten du nevnte?»
2. **Andre deler av pensum:** «Hva vet du om retorikk?»
3. **Sammenhenger:** «Kan du koble dette temaet til en annen tekst du har lest?»
4. **Refleksjon:** «Hva tror du forfatteren ville oppnå med denne slutten?»

### Strategier for fagsamtalen

**1. Lytt til hele spørsmålet**
Ikke start å svare før spørsmålet er ferdig. Ta et øyeblikk til å tenke. Det er lov å ta en pause.

**2. Tenk høyt**
Hvis du er usikker, si det. «Jeg er ikke helt sikker, men jeg tenker at...» er mye bedre enn stillhet. Sensor vurderer tenkemåten din, ikke bare fasitsvaret.

**3. Bruk fagbegreper**
Når du kan bruke et fagbegrep i stedet for et hverdagsord, gjør det. «Forfatteren bruker kontrast» er bedre enn «forfatteren viser at ting er forskjellige».

**4. Koble til andre tekster**
Vis bredde. «Dette minner meg om...» eller «En lignende tematikk finner vi i...» Sensor elsker å se at du kan se sammenhenger.

**5. Innrøm det du ikke vet**
Hvis du ikke kan svare, si: «Det husker jeg ikke helt, men det jeg vet er at...» og koble til noe du faktisk kan. Aldri bare si «Vet ikke» og bli stille.

### Typiske spørsmål du bør være forberedt på

- «Hvilke virkemidler finner du i teksten?»
- «Hva er forskjellen mellom metafor og sammenligning?»
- «Hvilken epoke hører denne teksten til?»
- «Kan du sammenligne med en annen tekst fra pensum?»
- «Hva er sakprosa, og hva er forskjellen fra skjønnlitteratur?»
- «Hva er kildekritikk, og hvorfor er det viktig?»
- «Kan du forklare hva retorikk er?»
- «Hva kjennetegner en god argumenterende tekst?»`,
    },

    // ========== DEFINISJON: FAGSAMTALE ==========
    {
      id: 'norsk-10-10-4-def-2',
      type: 'definition',
      title: 'Fagsamtalen — en dialog, ikke et forhør',
      content: `**Fagsamtalen** er den muntlige dialogen mellom deg, eksaminator og sensor etter presentasjonen din.

**Viktig å forstå:**
- Det er en **samtale**, ikke en utspørring. Du kan resonnere, spørre tilbake og bygge videre.
- Sensor vil se at du kan **tenke**, ikke bare huske. Å resonnere deg frem til et svar er like verdifullt som å svare umiddelbart.
- Spørsmålene kan handle om **hele pensum**, ikke bare presentasjonstemaet ditt.
- **Taushet er OK.** Ta deg tid til å tenke før du svarer. Noen sekunder stillhet virker lenger for deg enn for sensor.

**Slik viser du faglig dybde:**
1. Bruk fagbegreper naturlig i svarene dine
2. Gi eksempler fra tekster du har lest
3. Koble til temaer og begreper fra andre deler av norskfaget
4. Vis at du kan reflektere — ikke bare gjengi

**Slik håndterer du vanskelige spørsmål:**
- «Det er et interessant spørsmål. Jeg tenker at...»
- «Jeg husker ikke det nøyaktig, men det jeg vet er...»
- «Kan du utdype hva du mener med...?» (Det er lov å be om presisering!)
- «Hmm, la meg tenke litt...» (Og så tenk faktisk.)`,
    },

    // ========== OPPGAVE 2: CLASSIC ==========
    {
      id: 'norsk-10-10-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-2',
        number: '10.23',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv deg på fagsamtalen. Svar på disse typiske eksamensspørsmålene med 3-5 setninger. Bruk fagbegreper.',
        subTasks: [
          {
            label: 'a',
            task: '«Hva er forskjellen mellom sakprosa og skjønnlitteratur?»',
            solution: 'Sakprosa er tekster som handler om virkeligheten og formidler informasjon, meninger eller argumenter — som nyhetsartikler, kronikker og fagbøker. Skjønnlitteratur er fiksjon — tekster som er diktet, som noveller, romaner og dikt. Den viktigste forskjellen er at sakprosa har et faktisk grunnlag, mens skjønnlitteratur bruker fiksjon for å utforske menneskelige erfaringer.',
          },
          {
            label: 'b',
            task: '«Nevn to virkemidler og forklar virkningen av dem.»',
            solution: 'Kontrast er å stille motsetninger opp mot hverandre — for eksempel lys og mørke, stillhet og kaos. Virkningen er at begge sidene forsterkes, og det skaper spenning. Metafor er en sammenligning uten «som», der noe «er» noe annet — for eksempel «hjertet var en isklump». Virkningen er at abstrakte følelser blir konkrete og levende for leseren.',
          },
          {
            label: 'c',
            task: '«Hva kjennetegner realismen som litterær epoke?»',
            solution: 'Realismen var en litterær epoke fra ca. 1850-1890 der forfatterne ville vise virkeligheten slik den var og kritisere samfunnsproblemer. Typiske kjennetegn er samfunnskritikk, hverdagsrealisme og fokus på maktforhold. Henrik Ibsen er den mest kjente norske realisten, med verk som «Et dukkehjem» som kritiserer kvinneundertrykkelse.',
          },
        ],
        solution: 'Gode eksamenssvar er korte, presise, bruker fagbegreper og gir eksempler.',
      },
    },

    // ========== NERVØSITET ==========
    {
      id: 'norsk-10-10-4-nervositet',
      type: 'text',
      content: `## Håndtering av nervøsitet

Det er helt normalt å være nervøs. Faktisk kan litt nervøsitet være bra — det gjør deg skjerpet. Men for mye nervøsitet kan lamme deg. Her er konkrete teknikker for å håndtere det.

### Før eksamen

**1. Forbered deg godt — men ikke for mye**
Overdreven pugning kvelden før øker stresset. Forbered presentasjonen grundig i dagene før, og slapp av kvelden før eksamen.

**2. Øv presentasjonen høyt**
Øv foran speilet, foran familien, foran medelever. Jo oftere du har sagt ordene høyt, jo lettere kommer de på eksamensdagen.

**3. Forbered et «verste fall»-svar**
Tenk: «Hva gjør jeg hvis jeg mister tråden?» Ha en strategi: «Jeg kan se på stikkordene mine,» «Jeg kan ta en pause og puste,» «Jeg kan si: La meg komme tilbake til det.»

### Under eksamen

**4. Pust med magen**
Før du begynner å snakke, ta tre dype pust. Inn gjennom nesen, ut gjennom munnen. Det roer nervesystemet.

**5. Start med noe du kan godt**
Den første setningen er den vanskeligste. Øv den ekstra godt slik at du kan si den nesten i søvne. Når du er i gang, kommer resten lettere.

**6. Se på eksaminator, ikke i taket**
Øyekontakt skaper forbindelse og gir deg trygghet. Eksaminator vil gi deg oppmuntrende nikk.

**7. Det er lov å pause**
Hvis du mister tråden, ta en pause. Si gjerne «La meg tenke et øyeblikk.» Noen sekunder stillhet føles lenge for deg, men sensor merker det knapt.`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-3',
        number: '10.24',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den beste strategien når du får et spørsmål du ikke vet svaret på under fagsamtalen?',
        options: [
          {
            id: 'a',
            text: 'Si «Jeg vet ikke» og vent på neste spørsmål',
            isCorrect: false,
            feedback: 'Feil. Å bare si «vet ikke» viser ingen evne til å resonnere. Du kan få delpoeng ved å tenke høyt og koble til noe du faktisk kan.',
          },
          {
            id: 'b',
            text: 'Finn på et svar og håp at det er riktig',
            isCorrect: false,
            feedback: 'Feil. Å gjette kan virke useriøst, og sensor merker ofte at svaret er feil. Det er bedre å være ærlig og resonnere deg frem.',
          },
          {
            id: 'c',
            text: 'Innrøm at du ikke husker det nøyaktig, men koble til noe relatert du kan, og tenk høyt',
            isCorrect: true,
            feedback: 'Riktig! «Jeg husker ikke det nøyaktig, men det jeg vet er at...» viser ærlighet og evne til å resonnere. Sensor vurderer tenkemåten din, ikke bare fasitsvar.',
          },
          {
            id: 'd',
            text: 'Be om å hoppe over spørsmålet og gå videre til noe annet',
            isCorrect: false,
            feedback: 'Feil. Det er bedre å prøve å svare — selv delvis — enn å hoppe over. Sensor får ikke noe å vurdere hvis du hopper over.',
          },
        ],
        solution: 'Alternativ C er riktig. Å tenke høyt og koble til noe du kan viser faglig modning, selv om du ikke vet det eksakte svaret.',
      },
    },

    // ========== OPPGAVE 4: PRESENTASJONSØVING ==========
    {
      id: 'norsk-10-10-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-4',
        number: '10.25',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag en disposisjon for en 10-minutters presentasjon til muntlig eksamen.

Oppgave: «Presenter og analyser en tekst fra pensum. Vis kobling til en litterær epoke.»

Lag en detaljert disposisjon med:
a) Åpning: Hvordan vil du starte? (1 minutt)
b) Tekstpresentasjon: Tittel, forfatter, kort innhold (2 minutter)
c) Analyse: Tema, virkemidler, budskap (4-5 minutter)
d) Refleksjon: Relevans, egne tanker (1-2 minutter)
e) Avslutning: Oppsummering og sluttpoeng (30 sekunder)

Skriv stikkord — ikke hele setninger. Du skal øve på å snakke fritt.`,
        hints: [
          'Velg en tekst du kjenner godt og kan snakke om med engasjement',
          'Disposisjonen skal være et verktøy for deg — bruk stikkord du faktisk forstår',
          'Øv med klokke: 10 minutter er kortere enn du tror',
        ],
        solution: 'En god disposisjon har tydelig struktur, stikkord (ikke hele setninger), og realistisk tidsinndeling. Den hjelper deg å holde tråden uten å lese.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: PARØVING ==========
    {
      id: 'norsk-10-10-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-5',
        number: '10.26',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Parøving: Simuler en fagsamtale.

Jobb i par. Person A er «elev», person B er «sensor».

Runde 1 (10 min):
- Person B stiller disse spørsmålene til person A:
  1. «Hva er de viktigste kjennetegnene på en novelle?»
  2. «Kan du gi et eksempel på en metafor og forklare virkningen?»
  3. «Hva er kildekritikk, og hvorfor er det viktig?»
  4. «Sammenlign to tekster du har lest i 10. klasse.»
  5. «Hva er forskjellen mellom realismen og naturalismen?»

Runde 2 (10 min): Bytt roller.

Etter begge rundene: Gi hverandre tilbakemelding på faglig innhold, bruk av fagbegreper og kommunikasjon.`,
        hints: [
          'Person B: Gi eleven tid til å tenke. Ikke avbryt.',
          'Person A: Bruk fagbegreper. Start med å svare direkte, og utdyp etterpå.',
          'Tilbakemelding: Vær konkret. «Du brukte fagbegrepet kontrast godt» er bedre enn «det var bra».',
        ],
        solution: 'Parøving er den mest effektive forberedelsen til fagsamtalen. Det å snakke faglig høyt og få tilbakemelding gir trygghet som ingen annen metode kan erstatte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Muntlig eksamen:** Tre deler — forberedelse, presentasjon, fagsamtale
- **Presentasjonen:** Ca. 10 minutter, forberedt, med stikkord (IKKE manus)
- **Fagsamtalen:** Ca. 15-20 minutter, spørsmål om presentasjon + pensum
- **Tenk høyt:** Vis sensor tenkemåten din, ikke bare fasitsvar
- **Stikkord:** Bruk korte stikkord, ikke hele setninger — det tvinger deg til å snakke fritt

### Viktige strategier
- Forbered åpningen ekstra godt — den første setningen er den viktigste
- Øv presentasjonen høyt, med klokke, gjerne foran andre
- Bruk fagbegreper i fagsamtalen — det er det sensor lytter etter
- Innrøm det du ikke vet, men koble til noe du kan
- Pust, ta pauser, og husk at sensor vil at du skal lykkes`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-10-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-6',
        number: '10.27',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Fullstendig eksamenssimulering.

Gjennomfør en fullstendig muntlig eksamenssimulering med en medelev:

a) Velg en oppgave (for eksempel: «Presenter og analyser en novelle fra pensum. Koble analysen til en litterær epoke.»)
b) Forbered en presentasjon (bruk 30 minutter)
c) Hold presentasjonen (10 minutter)
d) Gjennomfør en fagsamtale der medeleven stiller spørsmål (10 minutter)
e) Skriv en kort refleksjon (100 ord): Hva gikk bra? Hva vil du øve mer på?

Bytt roller etterpå.`,
        hints: [
          'Lag en realistisk situasjon — sitt overfor hverandre ved et bord',
          'Medeleven som er «sensor» bør forberede spørsmål på forhånd',
          'Ta det seriøst — jo mer realistisk øvelsen er, jo bedre forbereder den deg',
        ],
        solution: 'En fullstendig eksamenssimulering er den aller beste forberedelsen. Det gir deg erfaring med hele eksamenssituasjonen — fra nervøsitet ved start til mestring underveis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-10-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-4-ex-7',
        number: '10.28',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Lag ditt eget «pensumoversikt»-ark.

For å forberede deg til fagsamtalen bør du ha oversikt over hele norskpensum. Lag et sammendrag der du skriver korte stikkord (2-3 setninger) om:

a) Litterære epoker: Realismen, naturalismen, nyromantikken, modernismen
b) Sjangere: Novelle, dikt, drama, sakprosa (artikkel, kronikk, essay)
c) Virkemidler: Metafor, sammenligning, kontrast, besjeling, gjentakelse, frempek, symbolikk
d) Analyseverktøy: SMITT-modellen, PEARL-metoden, kildekritikk (TONE-modellen)
e) Nynorsk: Dei viktigaste reglane

Denne oversikten kan du bruke som repetisjon i forberedelsestiden.`,
        hints: [
          'Hold det kort — 2-3 setninger per emne er nok',
          'Bruk egne ord, ikke kopier fra læreboka',
          'Legg til eksempler fra tekster du kjenner godt',
        ],
        solution: 'Et eget pensumoversikt-ark tvinger deg til å gjennomgå hele pensum og formulere det med egne ord. Det er både repetisjon og eksamensforberedelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.5: Eksamensstrategier og tidsstyring
// LK20: Utvikle gode læringsstrategier og vurdere egen kompetanseutvikling
// ============================================================================

export const CHAPTER_NORSK_10_10_5: TextbookChapter = {
  id: 'norsk-10-10-5',
  courseId: 'norsk-10',
  chapterNumber: '10.5',
  title: 'Eksamensstrategier og tidsstyring',
  description: 'Lær konkrete strategier for å disponere tiden på eksamen, lage disposisjon, prioritere oppgaver og revidere teksten din effektivt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utvikle gode læringsstrategier og vurdere egen kompetanseutvikling',
    'planlegge, gjennomføre og vurdere eget arbeid',
  ],
  keyTerms: [
    { term: 'Disposisjon', definition: 'En plan for teksten du skal skrive, med hovedpoenger og rekkefølge, laget FØR du begynner å skrive' },
    { term: 'Tidsstyring', definition: 'Å fordele tiden du har til rådighet på eksamen mellom lesing, planlegging, skriving og revisjon' },
    { term: 'Revisjon', definition: 'Å lese gjennom og forbedre teksten din — sjekke struktur, innhold, språk og rettskriving' },
    { term: 'Prioritering', definition: 'Å bestemme hva som er viktigst å bruke tid på, og gjøre det først' },
    { term: 'Disposisjonsnotat', definition: 'Stikkordliste der du planlegger innholdet i hvert avsnitt før du skriver' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-10-5-intro',
      type: 'text',
      content: `## Eksamensstrategier: Fem timer — slik bruker du dem

Du har fem timer. Det høres ut som mye, men det er det ikke — spesielt ikke når du skal lese tekstvedlegg, forstå oppgavene, planlegge, skrive kortsvar, skrive langsvar og revidere. Mange elever oppdager for sent at tiden er i ferd med å renne ut, og ender med en halvferdig besvarelse og en svak avslutning.

Det trenger ikke skje deg. Med en god strategi kan du bruke tiden effektivt og levere en besvarelse du er fornøyd med.

I dette kapittelet lærer du:
- En **tidsplan** for eksamensdagen (minutt for minutt)
- Hvordan du **lager disposisjon** før du skriver
- Hvordan du **prioriterer** når tiden er knapp
- Teknikker for effektiv **revisjon** av teksten din
- Hva du gjør når du **setter deg fast**`,
    },

    // ========== DEFINISJON: EKSAMENSSTRATEGIER ==========
    {
      id: 'norsk-10-10-5-def-1',
      type: 'definition',
      title: 'Eksamensstrategi — en plan for hele dagen',
      content: `En **eksamensstrategi** er en plan for hvordan du fordeler tiden, energien og oppmerksomheten din gjennom eksamensdagen.

**Anbefalt tidsfordeling for 5-timers norskeksamen:**

| Aktivitet | Tid | Forklaring |
|-----------|-----|-----------|
| Les oppgavene og tekstvedleggene | 30 min | Les alt grundig — minst to ganger |
| Planlegg kortsvaret | 10 min | Lag stikkord for struktur |
| Skriv kortsvaret | 40-50 min | Fullfør kortsvaret først |
| Les gjennom kortsvaret | 10 min | Sjekk at du svarer på oppgaven |
| Planlegg langsvaret | 20 min | Lag disposisjon med temasetninger |
| Skriv langsvaret | 120-140 min | Hovedskriveøkten |
| Revisjon og korrektur | 30 min | Les gjennom alt, rett feil |
| **Totalt** | **ca. 300 min (5 timer)** | |

**Viktig prinsipp:** Skriv kortsvaret FØRST. Det er avgrenset og konkret — du blir ferdig med det, og føler mestring. Deretter har du god tid til langsvaret.

**Alternativ strategi:** Noen elever foretrekker å starte med langsvaret fordi det er det viktigste. Velg det som passer deg best — men ha en plan uansett.`,
    },

    // ========== EKSEMPEL: DISPOSISJON ==========
    {
      id: 'norsk-10-10-5-example-1',
      type: 'example',
      title: 'Eksempel: Slik lager du en disposisjon',
      problem: `Du har bestemt deg for å skrive en tolkningsoppgave om en novelle. Du har 20 minutter til disposisjon. Hva skriver du?`,
      solution: `**Disposisjonsnotat (stikkord):**

**Tesesetning:** Novellen handler om skyld og tilgivelse, og bruker kontrast og symbolikk for å vise at indre konflikter ikke kan løses utenfra.

**Innledning:**
- Tittel, forfatter, sjanger
- Kort: Handling i 2 setninger
- Tesesetning

**Avsnitt 1: Kontrast**
- Temasetning: Kontrast mellom ytre aktivitet og indre uro
- Sitat: «Treneren ropte tider» vs. «Alt hun hørte var Emilies stemme»
- Analyse: Skyld følger deg overalt
- Kobling til tema: Isolasjon

**Avsnitt 2: Symbolikk**
- Temasetning: Vannet som symbol
- Sitat: «Sara holdt pusten. Vannet var kaldt.»
- Analyse: Vannet = å dukke under/unngå + renselse
- Kobling til tema: Ønske om å starte på nytt

**Avsnitt 3: Klimaks og dialog**
- Temasetning: Det stille klimakset
- Sitat: «Jeg trodde vi var bedre enn det»
- Analyse: Skuffelse sterkere enn sinne
- Kobling: Tilgivelse krever tid

**Avslutning:**
- Oppsummering: Skyld, tilgivelse, tid
- Hovedtolkning: Relasjoner kan repareres, men ikke umiddelbart
- Åpent spørsmål: Overlever vennskapet?

---

**Tid brukt: ca. 15 minutter.** Nå vet du nøyaktig hva du skal skrive — du kan gå rett i gang uten å famle.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-ex-1',
        number: '10.29',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor bør du bruke tid på å lage disposisjon FØR du begynner å skrive langsvaret?',
        options: [
          {
            id: 'a',
            text: 'Fordi sensor vurderer disposisjonen som en del av besvarelsen',
            isCorrect: false,
            feedback: 'Feil. Disposisjonen er et verktøy for deg selv — den vurderes vanligvis ikke av sensor.',
          },
          {
            id: 'b',
            text: 'Fordi det er obligatorisk på eksamen å levere disposisjon',
            isCorrect: false,
            feedback: 'Feil. Det er ikke obligatorisk. Men det er svært lurt — fordi det sparer deg tid og gir bedre struktur.',
          },
          {
            id: 'c',
            text: 'Fordi en disposisjon gir teksten din retning og struktur, og gjør selve skrivingen raskere og bedre',
            isCorrect: true,
            feedback: 'Riktig! Med en disposisjon vet du hva du skal skrive i hvert avsnitt. Du slipper å stoppe opp og tenke «hva nå?» — og teksten får bedre sammenheng.',
          },
          {
            id: 'd',
            text: 'Fordi det viser sensor at du har jobbet hardt',
            isCorrect: false,
            feedback: 'Feil. Sensor ser ikke arbeidsprosessen din — bare resultatet. Men en god disposisjon gir et bedre resultat.',
          },
        ],
        solution: 'Alternativ C er riktig. Disposisjonen er ditt viktigste verktøy for å skrive en strukturert og sammenhengende tekst.',
      },
    },

    // ========== NÅR DU SETTER DEG FAST ==========
    {
      id: 'norsk-10-10-5-fast',
      type: 'text',
      content: `## Når du setter deg fast: Praktiske løsninger

Det skjer alle: Du sitter foran arket, og ingenting kommer. Hodet er tomt. Klokken tikker. Panikken stiger. Her er hva du gjør.

### Strategi 1: Hopp over og kom tilbake
Hvis du sitter fast i innledningen, hopp til hoveddelen. Innledningen er ofte lettere å skrive NÅR du vet hva hoveddelen inneholder. Mange erfarne skribenter skriver innledningen til slutt.

### Strategi 2: Skriv det du tenker
Bare skriv. Uansett hva. «Jeg tenker at novellen handler om skyld fordi Sara angrer på det hun har gjort.» Det er ikke perfekt, men det er en start. Du kan forbedre formuleringene etterpå.

### Strategi 3: Still deg selv spørsmål
- «Hva handler teksten egentlig om?»
- «Hva er det viktigste virkemiddelet?»
- «Hva føler hovedpersonen?»
- «Hva vil forfatteren at leseren skal forstå?»
Svar på ett av spørsmålene — og du har begynnelsen på et avsnitt.

### Strategi 4: Gå tilbake til oppgaveteksten
Les oppgaven igjen. Sakte. Strek under nøkkelordene. Hva ber oppgaven deg egentlig om? Mange elever setter seg fast fordi de har misforstått oppgaven — eller prøver å svare på noe annet enn det som ble spurt om.

### Strategi 5: Skriv den dårlige versjonen
Gi deg selv lov til å skrive dårlig. Et svakt avsnitt som du kan forbedre, er uendelig mye bedre enn et tomt ark. Perfeksjonisme er din verste fiende på eksamen.

### Det viktigste av alt: Ikke gi opp
Sensor leser det du har skrevet, ikke det du planla å skrive. En halvferdig tekst med noen gode avsnitt gir bedre karakter enn et blankt ark.`,
    },

    // ========== DEFINISJON: REVISJON ==========
    {
      id: 'norsk-10-10-5-def-2',
      type: 'definition',
      title: 'Revisjon — de siste 30 minuttene',
      content: `**Revisjon** er prosessen med å lese gjennom og forbedre teksten din etter at du er ferdig med å skrive. De siste 30 minuttene av eksamen bør brukes til dette.

**Revisjon i tre steg:**

**Steg 1: Innhold og struktur (10 minutter)**
- Les gjennom hele teksten. Svarer du på oppgaven?
- Har du innledning med tesesetning?
- Har hvert avsnitt en temasetning?
- Er det en avslutning som oppsummerer?
- Mangler det noe viktig?

**Steg 2: Språk og formuleringer (10 minutter)**
- Er det vage formuleringer du kan gjøre mer presise?
- Er fagbegrepene brukt riktig?
- Er det unødvendige gjentakelser?
- Er setningene varierte (ikke bare korte eller bare lange)?

**Steg 3: Rettskriving og tegnsetting (10 minutter)**
- Les teksten sakte, ord for ord
- Sjekk komma, punktum, stor/liten bokstav
- Sjekk dobbel konsonant og andre vanlige feil
- Hvis du skriver nynorsk: Sjekk de fem vanligste feilene fra kapittel 10.3

**Tips:** Les teksten bakfra (siste avsnitt først) for å oppdage språkfeil. Når du leser i riktig rekkefølge, «fyller hjernen inn» det som mangler — du ser det du mente å skrive, ikke det som faktisk står der.`,
    },

    // ========== EKSEMPEL: REVISJON I PRAKSIS ==========
    {
      id: 'norsk-10-10-5-example-2',
      type: 'example',
      title: 'Eksempel: Før og etter revisjon',
      problem: `Se på dette avsnittet FØR og ETTER revisjon. Hva ble forbedret?

**FØR:**
«Forfatteren bruker mange virkemidler i novellen. Det er kontrast og også metafor. Kontrasten er mellom at det er bråk i svømmehallen og at Sara tenker på Emilie. Metaforen er at vannet er kaldt. Det gjør novellen bra.»

**ETTER:**
«Et sentralt virkemiddel i novellen er kontrasten mellom svømmehallens ytre støy og Saras indre uro. Mens 'treneren ropte tider fra bassengkanten', hørte Sara 'ingenting' annet enn Emilies stemme i hodet. Kontrasten forsterker inntrykket av at skyldfølelse isolerer — uansett hvor mye som skjer rundt deg, slipper du ikke unna din egen samvittighet.»`,
      solution: `**Forbedringer som ble gjort:**

1. **Vag formulering → Presis:** «Mange virkemidler» ble til «Et sentralt virkemiddel». Fokus på ETT poeng.

2. **Identifisering → Analyse:** «Det er kontrast» ble til en forklaring av HVA kontrasten er og HVORDAN den virker.

3. **Sitater lagt til:** Originalen hadde ingen sitater. Den reviderte versjonen bruker to konkrete sitater som bevis.

4. **Kobling til tema:** «Det gjør novellen bra» ble til en refleksjon om skyldfølelse og isolasjon — en tolkning, ikke en vurdering.

5. **Fjernet overflødig:** «Det er kontrast og også metafor» var to virkemidler i samme avsnitt. Den reviderte versjonen fokuserer på én ting og gjør den skikkelig.

6. **Faglig tone:** Hele tonen er mer faglig og moden i den reviderte versjonen.`,
    },

    // ========== OPPGAVE 2: CLASSIC ==========
    {
      id: 'norsk-10-10-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-ex-2',
        number: '10.30',
        type: 'classic',
        difficulty: 'medium',
        task: 'Revidér dette avsnittet. Forbedre presisjon, legg til sitat (du kan finne på et passende sitat), og koble til et tema.',
        subTasks: [
          {
            label: 'Avsnitt å revidere',
            task: '«Diktet handler om at noen føler seg annerledes. Forfatteren bruker gjentakelse fordi han skriver "jeg ser" mange ganger. Det gjør at diktet er fint å lese. Diktet er fra nyromantikken.»',
            solution: 'Mulig revidert versjon: «Gjentakelsen av "jeg ser" er det mest sentrale virkemiddelet i diktet. Den monotone rytmen skaper inntrykk av en observatør som står utenfor og bare ser — uten å delta. Obstfelder forsterker fremmedgjøringen i den avsluttende linjen: "Jeg er visst kommet på en feil klode!" Denne setningen oppsummerer diktets tema: en dyp eksistensiell ensomhet der det lyriske jeget føler seg fremmed i sin egen verden. Gjentakelse og fremmedgjøring er typiske kjennetegn på nyromantikken, der det indre livet sto i sentrum.»',
          },
        ],
        hints: [
          'Fjern vage vurderinger som «fint å lese» — erstatt med faglig analyse',
          'Legg til et sitat som bevis for det du sier',
          'Koble virkemiddelet til et tema (for eksempel fremmedgjøring)',
        ],
        solution: 'God revisjon gjør teksten mer presis, faglig og sammenhengende. Fjern fyllstoff, legg til analyse, og koble til tema.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-ex-3',
        number: '10.31',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva bør du gjøre FØRST hvis du oppdager at du bare har 45 minutter igjen og langsvaret mangler avslutning?',
        options: [
          {
            id: 'a',
            text: 'Fortsett å skrive hoveddelen og håp at du rekker avslutningen',
            isCorrect: false,
            feedback: 'Feil. Å levere uten avslutning er en vanlig feil som koster mye. Det er bedre å kutte hoveddelen litt og sikre en god avslutning.',
          },
          {
            id: 'b',
            text: 'Skriv avslutningen NÅ, og bruk resten av tiden på å forbedre hoveddelen',
            isCorrect: true,
            feedback: 'Riktig! Sikre avslutningen først — det er bedre å ha en komplett tekst med litt kortere hoveddel enn en lang hoveddel uten avslutning. Deretter kan du bruke gjenværende tid på revisjon.',
          },
          {
            id: 'c',
            text: 'Start helt på nytt med et kortere langsvar',
            isCorrect: false,
            feedback: 'Feil. Å starte på nytt med 45 minutter igjen er katastrofalt. Bruk det du har og fullfør det.',
          },
          {
            id: 'd',
            text: 'Gi opp langsvaret og bruk tiden på å forbedre kortsvaret',
            isCorrect: false,
            feedback: 'Feil. Langsvaret teller mest. En halvferdig besvarelse gir bedre karakter enn ingen besvarelse.',
          },
        ],
        solution: 'Alternativ B er riktig. Sikre alltid at teksten er komplett (innledning + hoveddel + avslutning) før du bruker tid på å forbedre enkeltdeler.',
      },
    },

    // ========== OPPGAVE 4: TIDSØVING ==========
    {
      id: 'norsk-10-10-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-ex-4',
        number: '10.32',
        type: 'classic',
        difficulty: 'medium',
        task: `Øving: Skriv et PEARL-avsnitt på tid.

Sett en timer på 15 minutter og skriv ett analyseavsnitt om et virkemiddel i en tekst du kjenner.

Krav:
- Temasetning (poeng)
- Minst ett sitat (evidens)
- Analyse av virkningen
- Kobling til tema/budskap (refleksjon)
- Overgang til neste (lenke)

Etter 15 minutter: Stopp. Les gjennom. Ville du endret noe?`,
        hints: [
          'Ikke tenk for mye — bare skriv. Du kan forbedre etterpå.',
          '15 minutter er omtrent det du har til hvert avsnitt i langsvaret på eksamen',
          'Øv denne typen avsnitt mange ganger — det er kjernen i langsvaret',
        ],
        solution: 'Å øve på å skrive avsnitt under tidspress er den mest direkte eksamensforberedelsen. Jo mer du øver, jo raskere og bedre blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TIP: SJEKKLISTE ==========
    {
      id: 'norsk-10-10-5-tip',
      type: 'tip',
      title: 'Sjekkliste for eksamensdagen',
      content: `Skriv ut denne sjekklisten og ta den med til eksamen:

**Før du begynner å skrive:**
- Har du lest ALLE tekstvedlegg grundig?
- Har du lest ALLE oppgavene og valgt?
- Har du understreket nøkkelord i oppgaveteksten?
- Har du laget disposisjon for langsvaret?

**Mens du skriver kortsvaret:**
- Svarer du direkte på oppgaven?
- Bruker du sitater fra teksten?
- Holder du deg innenfor ordgrensen?

**Mens du skriver langsvaret:**
- Har innledningen tesesetning?
- Starter hvert avsnitt med temasetning?
- Bruker du PEARL i hvert avsnitt?
- Har du en avslutning?

**De siste 30 minuttene:**
- Les gjennom for innhold og struktur
- Les gjennom for språk og formuleringer
- Les gjennom for rettskriving og tegnsetting
- Nynorsk? Sjekk de fem vanligste feilene`,
    },

    // ========== OPPGAVE 5: EKSAMENSSIMULERING ==========
    {
      id: 'norsk-10-10-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-ex-5',
        number: '10.33',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tidsøving: Lag en disposisjon under tidspress.

Sett en timer på 20 minutter. Velg en novelle du har lest og lag en fullstendig disposisjon for et langsvar (tolkningsoppgave).

Disposisjonen skal inneholde:
a) Tesesetning
b) Stikkord for innledning
c) Temasetning + planlagte sitater for hvert hoveddels-avsnitt (minst 3 avsnitt)
d) Stikkord for avslutning

Når tiden er ute: Vurder disposisjonen din. Kunne du skrevet et godt langsvar basert på den?`,
        hints: [
          '20 minutter er det du har på eksamen. Tren deg på å planlegge raskt.',
          'Start med tesesetningen — den gir resten retning',
          'Skriv konkrete sitater du husker. Hvis du ikke husker nøyaktig, skriv «sitat om svømmehallen» som påminnelse.',
        ],
        solution: 'En god disposisjon laget på 20 minutter er beviset på at du er klar for eksamen. Hvis du kan planlegge raskt, kan du skrive godt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Tidsplan:** Fordel 5 timer mellom lesing (30 min), kortsvar (60 min), langsvar (160 min) og revisjon (30 min)
- **Disposisjon:** Lag en plan med tesesetning og temasetninger FØR du skriver
- **Revisjon:** Bruk de siste 30 minuttene på innhold → språk → rettskriving
- **Prioritering:** Sikre alltid en komplett tekst (med avslutning) fremfor en lang, ufullstendig tekst

### Viktige strategier
- Skriv kortsvaret FØRST — det gir mestringsfølelse og fritt hode for langsvaret
- Disposisjon sparer tid — 20 minutter med planlegging gir deg 120 minutter med fokusert skriving
- Hopp over steder der du setter deg fast og kom tilbake senere
- Les teksten bakfra under revisjon for å oppdage feil du ellers overser`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'norsk-10-10-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-5-ex-6',
        number: '10.34',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Fullstendig eksamenssimulering (skriftlig).

Sett av 3 timer (en forkortet eksamen). Lag din egen eksamensoppgave basert på en tekst du kjenner, eller bruk en gammel eksamensoppgave.

Gjennomfør:
a) Lesing og forståelse (15 min)
b) Kortsvar med disposisjon (45 min)
c) Langsvar med disposisjon (90 min)
d) Revisjon (30 min)

Etter øvelsen: Skriv en refleksjon (100 ord) om hvordan tidsfordelingen fungerte. Hva vil du gjøre annerledes neste gang?`,
        hints: [
          'Gjør dette alene, uten internett eller lærebok — simuler ekte eksamen',
          'Følg tidsplanen strengt. Poenget er å øve på tidsstyring.',
          'Refleksjonen etterpå er like viktig som selve skrivingen',
        ],
        solution: 'En fullstendig skriftlig eksamenssimulering er den mest effektive forberedelsen. Du får erfaring med å disponere tiden, skrive under press, og revidere effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.6: Kreativ skriving for eksamen
// LK20: Skrive kreative tekster med bevisst bruk av virkemidler,
//        eksperimentere med skriving og utforske egne uttrykksformer
// ============================================================================

export const CHAPTER_NORSK_10_10_6: TextbookChapter = {
  id: 'norsk-10-10-6',
  courseId: 'norsk-10',
  chapterNumber: '10.6',
  title: 'Kreativ skriving for eksamen',
  description: 'Lær hvordan du bruker kreativ skriving som et verktøy på eksamen: skriv essay, reflekterende tekster og kreative svar som imponerer sensor.',
  estimatedMinutes: 70,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av språklige virkemidler',
    'eksperimentere med ulike skriveformer og utforske egne uttrykksformer',
    'tilpasse språk og form til ulike formål, mottakere og medier',
  ],
  keyTerms: [
    { term: 'Essay', definition: 'En reflekterende tekst der du utforsker et tema personlig og faglig, med din egen stemme og perspektiv' },
    { term: 'Reflekterende tekst', definition: 'En tekst der du kobler egne erfaringer, tanker og observasjoner til et tema eller en tekst' },
    { term: 'Personlig stemme', definition: 'Din unike måte å uttrykke deg på — det som gjør teksten din til din, ikke en mal' },
    { term: 'Kreativt langsvar', definition: 'En langsvarsbesvarelse som bruker kreative grep som innledning, personlige eksempler eller levende språk' },
    { term: 'Retorisk spørsmål', definition: 'Et spørsmål du stiller uten å forvente svar, brukt for å engasjere leseren og skape refleksjon' },
    { term: 'Kåseri', definition: 'En lett, underholdende tekst med humor og ironi som likevel tar opp et alvorlig eller reflekterende tema' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-10-6-intro',
      type: 'text',
      content: `## Kreativ skriving for eksamen: Skriv tekster som sensor husker

Sensor leser hundrevis av besvarelser. De fleste er greie. Noen er gode. Noen er svake. Men noen få **skiller seg ut** — tekster der sensor stopper opp og tenker: «Denne eleven kan skrive.»

Hva kjennetegner disse tekstene? De er ikke nødvendigvis lengst. De er ikke nødvendigvis mest faglige. Men de har noe de andre mangler: **en stemme**. De føles levende. De overrasker. De viser en elev som tenker selvstendig og uttrykker seg med presisjon og kreativitet.

I dette kapittelet lærer du:
- Hvordan du skriver **essay og reflekterende tekster** til eksamen
- Teknikker for å gi teksten din **personlig stemme** uten å bli uformell
- Hvordan du bruker **kreative grep** i innledning og avslutning
- Balansen mellom **faglig analyse** og **personlig refleksjon**
- Hva som skiller en god kreativ tekst fra en som prøver for hardt`,
    },

    // ========== DEFINISJON: ESSAY ==========
    {
      id: 'norsk-10-10-6-def-1',
      type: 'definition',
      title: 'Essayet — den reflekterende sjangeren',
      content: `Et **essay** er en reflekterende tekst der du utforsker et tema med din egen stemme. Ordet «essay» kommer fra det franske «essayer», som betyr «å forsøke» — et essay er et forsøk på å tenke gjennom et tema.

**Kjennetegn på essayet:**
- **Personlig perspektiv:** Du skriver med «jeg» og bruker egne erfaringer og observasjoner
- **Refleksjon:** Du tenker høyt, stiller spørsmål og utforsker — du trenger ikke ha et fasitsvar
- **Faglig forankring:** Selv om det er personlig, må det kobles til tekstvedlegg og fagkunnskap
- **Variasjon:** Essayet veksler mellom det personlige og det faglige, mellom eksempler og analyse
- **God tittel og innledning:** Essayet fanger leseren fra første setning

**Forskjell fra analyse:**
- Analyse: Du analyserer en tekst systematisk med fagbegreper
- Essay: Du reflekterer over et tema, gjerne med utgangspunkt i en tekst, men med mer frihet

**Forskjell fra kåseri:**
- Kåseri: Lettere tone, humor, ironi — underholdende
- Essay: Mer alvorlig og dypt, selv om det kan ha personlighet

**Viktig:** På eksamen kan oppgaven spesifisere sjanger. Les oppgaven nøye: «Skriv en reflekterende tekst» er ikke det samme som «Tolk novellen». Velg riktig tilnærming.`,
    },

    // ========== EKSEMPEL: KREATIV INNLEDNING ==========
    {
      id: 'norsk-10-10-6-example-1',
      type: 'example',
      title: 'Eksempel: Kreative innledninger som fenger',
      problem: `Se på disse tre innledningene til den samme oppgaven: «Skriv en reflekterende tekst om identitet, med utgangspunkt i tekstvedleggene.»

Hvilken innledning er best, og hvorfor?`,
      solution: `**Innledning 1 (kjedelig):**
«I denne teksten skal jeg skrive om identitet. Identitet handler om hvem du er. Tekstvedleggene handler også om identitet.»

**Innledning 2 (overambisiøs):**
«Hvem er du? Hvem er JEG? Hva er egentlig identitet? Er det noe vi velger, eller noe vi ER? Filosofer har grublet over dette i tusenvis av år, og fortsatt vet ingen svaret!!!»

**Innledning 3 (god):**
«Jeg var fjorten da jeg begynte å legge merke til det. At stemmen min endret seg avhengig av hvem jeg snakket med. Blant vennene mine var jeg høylytt og morsom. Foran foreldrene mine var jeg rolig og enig i alt. Alene foran speilet visste jeg ikke hvem av dem som var den ekte. Tekstvedleggene i dag handler om identitet — og begge beskriver noe jeg kjenner igjen: følelsen av å spille en rolle uten å vite hva stykket handler om.»

---

**Innledning 3 er best.** Fordi den:
- Starter med en **personlig opplevelse** som fenger
- Bruker **konkrete detaljer** (stemmen endrer seg, foran speilet)
- Kobler til **tekstvedleggene** naturlig
- Har en **sterk avslutningsmetafor** (spille en rolle uten å vite hva stykket handler om)
- Er **personlig uten å være privat** — alle kan kjenne seg igjen

**Innledning 1** er for generell og kjedelig.
**Innledning 2** stiller for mange retoriske spørsmål uten å svare på noen av dem — det virker ukontrollert.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-1',
        number: '10.35',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en god kreativ innledning til et eksamenssvar?',
        options: [
          {
            id: 'a',
            text: 'Den starter med mange retoriske spørsmål for å virke dyp',
            isCorrect: false,
            feedback: 'Feil. Mange retoriske spørsmål etter hverandre virker ukontrollert. Ett velplassert retorisk spørsmål kan fungere — men ikke tre eller fire.',
          },
          {
            id: 'b',
            text: 'Den bruker en personlig opplevelse eller konkret scene som fenger leseren, og kobler til temaet',
            isCorrect: true,
            feedback: 'Riktig! En konkret, personlig innledning fenger fordi den er levende og spesifikk. Koblingen til temaet viser at det personlige har en hensikt.',
          },
          {
            id: 'c',
            text: 'Den inneholder sitater fra berømte personer for å virke kunnskapsrik',
            isCorrect: false,
            feedback: 'Feil. Sitater fra berømte personer kan fungere, men det er overbrukt og virker ofte påklistret. Din egen stemme er mer verdifull.',
          },
          {
            id: 'd',
            text: 'Den er så lang som mulig for å vise at du kan skrive mye',
            isCorrect: false,
            feedback: 'Feil. Innledningen bør være kort og effektiv — maks 10-15% av teksten. Hovedinnholdet hører i hoveddelen.',
          },
        ],
        solution: 'Alternativ B er riktig. De beste innledningene er personlige, konkrete og kobler naturlig til temaet.',
      },
    },

    // ========== PERSONLIG STEMME ==========
    {
      id: 'norsk-10-10-6-stemme',
      type: 'text',
      content: `## Personlig stemme — din hemmelege superkraft

Hva betyr det å ha en «personlig stemme» i teksten? Det betyr at teksten din høres ut som **deg** — ikke som en mal, ikke som en lærebok, ikke som chatbot-generert tekst. Det betyr at du skriver med ekthet, presisjon og engasjement.

### Hva personlig stemme IKKE er

- Det er IKKE å skrive uformelt eller slangete
- Det er IKKE å dele private hemmeligheter
- Det er IKKE å skrive «jeg synes» i stedet for å analysere
- Det er IKKE å ignorere fagspråk

### Hva personlig stemme ER

**1. Konkrete eksempler fra eget liv**
I stedet for: «Mange unge opplever press fra sosiale medier.»
Prøv: «Jeg husker første gang jeg slettet et bilde fra Instagram fordi det ikke fikk nok likes. Jeg var tolv.»

**2. Presise formuleringer som bare du ville skrevet**
I stedet for: «Novellen er godt skrevet og interessant.»
Prøv: «Novellen setter seg i magen. Ikke fordi den er trist — men fordi den er ærlig på en måte som gjør vondt.»

**3. Selvstendig refleksjon**
I stedet for å gjengi hva andre mener, vis hva DU tenker. «Da jeg leste denne setningen, stoppet jeg opp. Fordi den beskrev noe jeg hadde følt, men aldri klart å sette ord på.»

**4. Variasjon i setningsrytme**
Korte setninger for effekt. Og lengre setninger som bølger seg fremover og bygger opp en tanke steg for steg, som om du inviterer leseren inn i resonnemanget ditt. Vekslingen mellom korte og lange skaper en naturlig rytme som holder leseren engasjert.

### Balansen: Personlig + faglig

Det viktigste er **balansen**. Sensor vil se at du kan analysere faglig OG reflektere personlig. Den ideelle teksten veksler mellom:
- Faglig analyse med begreper og eksempler fra teksten
- Personlig refleksjon med egne erfaringer og tanker
- Kobling: De to nivåene forsterker hverandre`,
    },

    // ========== DEFINISJON: REFLEKTERENDE TEKST ==========
    {
      id: 'norsk-10-10-6-def-2',
      type: 'definition',
      title: 'Den reflekterende teksten — essay-oppgaven på eksamen',
      content: `En **reflekterende tekst** (essay-oppgave) på eksamen ber deg om å tenke selv — ikke bare analysere en tekst, men koble den til egne erfaringer, samfunnet og livet.

**Typisk oppgaveformulering:**
«Skriv en reflekterende tekst om [tema], med utgangspunkt i tekstvedleggene.»

**Hva det betyr:**
- Du skal bruke tekstvedleggene som **springbrett** — ikke bare analysere dem
- Du skal reflektere over temaet med **egne tanker og erfaringer**
- Du skal vise at du kan **koble** det personlige til det faglige

**Struktur for en reflekterende tekst:**

1. **Kreativ innledning:** Personlig opplevelse, scene eller observasjon som introduserer temaet
2. **Kobling til tekstvedlegg 1:** Hva sier teksten om temaet? Analyse + din refleksjon
3. **Kobling til tekstvedlegg 2:** Hva sier denne teksten? Sammenligning med den første
4. **Utdyping/eget perspektiv:** Dine egne tanker, erfaringer, observasjoner fra samfunnet
5. **Avslutning:** Samle trådene, gi en innsikt eller et åpent spørsmål

**Viktig:** Selv om teksten er personlig, skal den fortsatt ha **struktur, fagspråk og referanser til tekstvedleggene**. En reflekterende tekst er ikke en dagbok — den er en gjennomtenkt, velformulert tekst med personlig preg.`,
    },

    // ========== EKSEMPEL: KREATIV AVSLUTNING ==========
    {
      id: 'norsk-10-10-6-example-2',
      type: 'example',
      title: 'Eksempel: Sterke avslutninger',
      problem: `Hvordan avslutter du en reflekterende tekst på en måte som gjør inntrykk?`,
      solution: `**Teknikk 1: Sirkelkomposisjon — kom tilbake til innledningen**
Hvis innledningen din handlet om en personlig opplevelse, kom tilbake til den — men med ny innsikt.

«Foran speilet den kvelden var stemmen min stille. Ikke fordi jeg ikke visste hvem jeg var — men fordi jeg endelig aksepterte at svaret ikke er enkelt. Identitet er ikke ett ansikt. Det er alle ansiktene, og rommet mellom dem.»

**Teknikk 2: Åpent spørsmål**
Still et spørsmål som leseren tar med seg videre.

«Kanskje er det ikke et spørsmål om hvem vi er — men om hvem vi velger å bli.»

**Teknikk 3: Uventet vending**
Overrask med en ny vinkling i siste avsnitt.

«Vi snakker om identitet som om det er noe vi finner. Som om det ligger et sted og venter på oss. Men kanskje er identitet noe vi bygger — dag for dag, valg for valg, ord for ord. Kanskje er denne teksten, akkurat nå, en del av det byggeprosjektet.»

**Teknikk 4: Kort, slagkraftig siste setning**
Etter et lengre reflekterende avsnitt, avslutt med noe kort og presist.

«Nora forlot Helmer. Jeg forlot Instagram. Skalaen er ulik. Mekanismen er den samme.»

**Felles for alle gode avslutninger:**
- De gir leseren noe å **tenke på** etter at teksten er ferdig
- De føles **uunngåelige** — som om hele teksten bygget opp mot dette
- De er **korte** — ikke gjenta alt du allerede har sagt`,
    },

    // ========== OPPGAVE 2: CLASSIC ==========
    {
      id: 'norsk-10-10-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-2',
        number: '10.36',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ulike innledninger (3-5 setninger hver) til denne oppgaven: «Skriv en reflekterende tekst om vennskap, med utgangspunkt i tekstvedleggene.»',
        subTasks: [
          {
            label: 'a',
            task: 'Innledning med personlig opplevelse',
            solution: 'En god personlig innledning beskriver et konkret øyeblikk (ikke en generell refleksjon) som kobles til temaet vennskap. For eksempel et minne om et vennskap som endret seg, en situasjon der du ble overrasket av en venns reaksjon, eller et øyeblikk der du innså hva vennskap faktisk betyr.',
          },
          {
            label: 'b',
            task: 'Innledning med et retorisk spørsmål',
            solution: 'Et godt retorisk spørsmål er spesifikt og tankevekkende — ikke generelt. «Har du noen gang latt være å sende den meldingen?» er bedre enn «Hva er egentlig vennskap?» Spørsmålet bør koble til noe konkret og lede naturlig inn i resten av teksten.',
          },
          {
            label: 'c',
            task: 'Innledning med en påstand eller observasjon',
            solution: 'En god påstand er overraskende, men sann. For eksempel: «De fleste vennskapene vi har i dag, vil ikke overleve de neste ti årene. Ikke fordi vi kranglet, men fordi vi stille gled fra hverandre.» Påstanden fanger oppmerksomheten og setter temaet i et nytt lys.',
          },
        ],
        solution: 'Å øve på flere innledningstyper gir deg valgmuligheter på eksamen. Du kan velge den som passer best til oppgaven og din egen stemme.',
      },
    },

    // ========== OPPGAVE 3: SKRIVEØVING ==========
    {
      id: 'norsk-10-10-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-3',
        number: '10.37',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriveøving: «Tell → Show» for reflekterende tekst.

Skriv om disse «tell»-setningene til levende, konkrete avsnitt (3-5 setninger). Bruk personlige detaljer, sanseinntrykk og presise formuleringer.

a) «Sosiale medier påvirker ungdoms selvbilde negativt.»
b) «Å lese bøker er viktig for å utvikle empati.»
c) «Vennskap er viktig, men kan også være vanskelig.»`,
        hints: [
          'Bruk konkrete eksempler — jo mer spesifikt, jo bedre',
          'Skriv det du faktisk opplever eller observerer, ikke det du tror sensor vil høre',
          'Prøv å unngå klisjeer. «Vennskap er gull» er en klisje. Finn din egen måte å si det på.',
        ],
        solution: 'Gode reflekterende tekster «viser» i stedet for å «fortelle» — akkurat som kreativ skriving. Forskjellen er at du viser egne tanker og erfaringer, ikke fiktive karakterer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== WARNING: FALLGRUVER ==========
    {
      id: 'norsk-10-10-6-warning',
      type: 'warning',
      title: 'Fallgruver i kreativ skriving på eksamen',
      content: `**1. For personlig, for lite faglig**
Å skrive bare om deg selv uten å koble til tekstvedlegg og fagbegreper gir lav karakter. Balansen er nøkkelen: Personlig refleksjon + faglig analyse.

**2. Overdreven bruk av retoriske spørsmål**
Ett retorisk spørsmål kan fungere godt. Fem etter hverandre virker desperat. Bruk dem sparsomt.

**3. Klisjeer**
«Det er viktig å være seg selv», «Vennskap er gull», «Vi lever i en digital verden». Disse setningene sier ingenting nytt. Finn din egen måte å uttrykke det på.

**4. Glemmer tekstvedleggene**
Selv i en reflekterende tekst SKAL du referere til tekstvedleggene. De er ikke valgfrie — de er en del av oppgaven.

**5. Prøver for hardt å være «kreativ»**
Sensor gjennomskuer tekster som prøver å imponere med fancy ord og kompliserte metaforer. Ekthet og presisjon trumfer alltid pynt.`,
    },

    // ========== OPPGAVE 4: MULTIPLE CHOICE ==========
    {
      id: 'norsk-10-10-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-4',
        number: '10.38',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste balansen å mestre i en reflekterende eksamenstekst?',
        options: [
          {
            id: 'a',
            text: 'Balansen mellom korte og lange setninger',
            isCorrect: false,
            feedback: 'Setningsrytme er viktig for godt språk, men det er ikke den viktigste balansen i en reflekterende tekst.',
          },
          {
            id: 'b',
            text: 'Balansen mellom innledning og avslutning',
            isCorrect: false,
            feedback: 'Innledning og avslutning bør være omtrent like lange, men det er ikke det mest kritiske.',
          },
          {
            id: 'c',
            text: 'Balansen mellom personlig refleksjon og faglig analyse med referanser til tekstvedleggene',
            isCorrect: true,
            feedback: 'Riktig! En reflekterende tekst som bare er personlig, mangler faglig dybde. En som bare er faglig, mangler personlighet. Sensor vil se begge deler, og at de forsterker hverandre.',
          },
          {
            id: 'd',
            text: 'Balansen mellom bokmål og nynorsk',
            isCorrect: false,
            feedback: 'Du skriver på enten bokmål eller nynorsk — du blander ikke. Språkvalget er viktig, men det er ikke det den reflekterende teksten handler om.',
          },
        ],
        solution: 'Alternativ C er riktig. Den viktigste balansen er mellom personlig refleksjon og faglig analyse.',
      },
    },

    // ========== OPPGAVE 5: SKRIVETRENING ==========
    {
      id: 'norsk-10-10-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-5',
        number: '10.39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en reflekterende tekst (400-600 ord) om ETT av disse temaene:

a) «Å finne sin egen stemme»
b) «Grensen mellom det offentlige og det private»
c) «Hva betyr det å forstå en annen person?»

Krav:
- Kreativ innledning (personlig opplevelse, scene eller observasjon)
- Kobling til minst én tekst du har lest i 10. klasse
- Bruk av fagbegreper (minst tre)
- Personlige refleksjoner som kobles til det faglige
- Sterk avslutning (sirkelkomposisjon, åpent spørsmål eller uventet vending)`,
        hints: [
          'Start med en konkret opplevelse — det personlige gir teksten energi',
          'Veksle mellom det personlige og det faglige i annethvert avsnitt',
          'Les teksten høyt til slutt. Har den en stemme? Høres den ut som deg?',
        ],
        solution: 'En god reflekterende tekst viser at du kan tenke selvstendig, koble personlige erfaringer til faglig innhold, og skrive med en stemme sensor husker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-10-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Essay:** En reflekterende tekst med personlig perspektiv og faglig forankring
- **Personlig stemme:** Din unike måte å skrive på — konkret, ekte, presis
- **Kreativ innledning:** Personlig opplevelse, retorisk spørsmål eller overraskende påstand
- **Reflekterende tekst:** Koble egne erfaringer til tekstvedlegg og fagkunnskap
- **Sirkelkomposisjon:** Å vende tilbake til innledningen i avslutningen, men med ny innsikt

### Viktige sammenhenger
- Personlig stemme + faglig analyse = den sterkeste kombinasjonen
- Konkrete detaljer er alltid bedre enn vage generaliseringer
- Tekstvedleggene er obligatoriske — bruk dem som springbrett for refleksjon
- Ekthet trumfer pynt — skriv det du faktisk tenker, med presise ord`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-10-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-6',
        number: '10.40',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Revisjon av reflekterende tekst.

Gå tilbake til den reflekterende teksten du skrev i oppgave 10.39. Les den gjennom og revidér den med fokus på:

a) **Stemme:** Høres teksten ut som deg, eller som en mal? Finn tre steder der du kan gjøre språket mer personlig.
b) **Faglig forankring:** Har du minst tre fagbegreper? Er de brukt riktig?
c) **Tekstvedlegg:** Har du referert til en tekst fra pensum? Er referansen integrert naturlig?
d) **Avslutning:** Er avslutningen sterk? Prøv å skrive den om med en annen teknikk (sirkelkomposisjon, åpent spørsmål eller kort slagkraftig setning).

Skriv en kort refleksjon (50-100 ord) om hva du endret og hvorfor.`,
        hints: [
          'Les teksten høyt — det avslører svake formuleringer',
          'Vær spesielt streng med avslutningen — den er det siste sensor leser',
          'Spør deg selv: Ville sensor husket denne teksten?',
        ],
        solution: 'Revisjon er der den virkelige kvaliteten kommer. De fleste gode tekster er ikke gode i førsteutkastet — de er gode fordi forfatteren har revidert dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-10-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-10-6-ex-7',
        number: '10.41',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Skriveportefølje — din beste tekst.

Velg den beste teksten du har skrevet gjennom dette kapittelet (eller andre kapitler). Revidér den en siste gang til den er så god som du klarer.

a) Velg teksten din
b) Revidér med fokus på alle kriteriene: innhold, struktur, fagspråk, språk, rettskriving
c) Skriv en kort egenvurdering (100-150 ord) der du:
   - Forklarer hvilken sjanger teksten er (tolkningsoppgave, kortsvar, essay, reflekterende tekst)
   - Beskriver hva du er mest fornøyd med
   - Identifiserer det svakeste punktet og forklarer hvordan du ville forbedret det
   - Gir deg selv en karakter (2-6) med begrunnelse

Denne teksten er din eksamensforberedelse i miniatyr — den viser hva du kan.`,
        hints: [
          'Velg teksten du er mest stolt av — men vær ærlig med svakhetene',
          'En god egenvurdering viser metakognisjon: at du forstår hva som gjør teksten god og hva som kan bli bedre',
          'Å gi seg selv karakter med begrunnelse er den beste treningen for å forstå vurderingskriteriene',
        ],
        solution: 'Evnen til å vurdere egen skriving er et tegn på faglig modenhet. Sensor ser etter nettopp denne evnen — og du viser den ved å ta vurderingsarbeidet seriøst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 8
// ============================================================================

export const NORSK_10_DEL8_CHAPTERS = [
  CHAPTER_NORSK_10_10_1,
  CHAPTER_NORSK_10_10_2,
  CHAPTER_NORSK_10_10_3,
  CHAPTER_NORSK_10_10_4,
  CHAPTER_NORSK_10_10_5,
  CHAPTER_NORSK_10_10_6,
];