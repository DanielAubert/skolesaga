/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Filosofi og etikk (VG2/VG3) - Del 1
 * Seksjon 1: Filosofiens grunnlag
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FILOSOFI_ETIKK_1_1: TextbookChapter = {
  id: 'filosofi-etikk-1-1',
  courseId: 'filosofi-etikk',
  chapterNumber: '1.1',
  title: 'Hva er filosofi?',
  description: 'En innføring i filosofi som fag, de grunnleggende spørsmålene og filosofiens hovedområder',
  estimatedMinutes: 20,
  competenceGoals: [
    'Forstå hva filosofi er og hva som skiller filosofiske spørsmål fra andre typer spørsmål',
    'Kjenne til filosofiens hovedområder og sentrale problemstillinger',
    'Utvikle evnen til å stille filosofiske spørsmål',
  ],
  content: [
    {
      id: 'fil-1-1-intro',
      type: 'text',
      content: `## Filosofiens grunnspørsmål

"Det eneste jeg vet, er at jeg ikke vet noe." Dette utsagnet, tilskrevet den greske filosofen Sokrates, fanger essensen i filosofisk tenkning. Filosofi handler ikke bare om å samle kunnskap, men om å stille grunnleggende spørsmål ved det vi tror vi vet.

Ordet filosofi kommer fra gresk: *philo* (kjærlighet) og *sophia* (visdom). Filosofi er altså kjærlighet til visdom. Men hva betyr det i praksis? Hvordan skiller filosofiske spørsmål seg fra andre typer spørsmål?`,
    },
    {
      id: 'fil-1-1-hva-er-filosofi',
      type: 'example',
      title: 'Filosofiske versus ikke-filosofiske spørsmål',
      content: `**Ikke-filosofiske spørsmål:**
- Hva er klokka? (Faktaspørsmål)
- Hvor mange innbyggere har Norge? (Empirisk spørsmål)
- Hva er formelen for tyngdekraft? (Vitenskapelig spørsmål)

**Filosofiske spørsmål:**
- Hva er tid? (Metafysisk spørsmål)
- Hva er rettferdig fordeling av ressurser? (Etisk spørsmål)
- Hvordan kan vi vite noe med sikkerhet? (Epistemologisk spørsmål)

Legg merke til at filosofiske spørsmål ikke kan besvares ved å slå opp fakta eller gjøre målinger. De krever refleksjon, argumentasjon og konseptuell analyse.`,
    },
    {
      id: 'fil-1-1-kjennetegn',
      type: 'text',
      content: `### Kjennetegn ved filosofiske spørsmål

Filosofiske spørsmål har flere særtrekk:

**1. Grunnleggende karakter**
Filosofien stiller spørsmål ved de grunnleggende forutsetningene vi tar for gitt. Ikke bare "Hva er rettferdig?", men "Hva mener vi egentlig med rettferdighet?"

**2. Konseptuell analyse**
Filosofi undersøker begreper og deres betydning. Hva mener vi med frihet, kunnskap, sannhet, skjønnhet?

**3. Normativ dimensjon**
Mange filosofiske spørsmål handler om hvordan ting bør være, ikke bare hvordan de er. Hva er et godt liv? Hva bør vi gjøre?

**4. Ingen endelige svar**
Filosofiske spørsmål har sjelden definitive svar. I stedet utvikler vi bedre argumenter og dypere forståelse.`,
    },
    {
      id: 'fil-1-1-oppgave-1',
      type: 'exercise',
      title: 'Identifisere filosofiske spørsmål',
    },
    {
      id: 'fil-1-1-hovedomrader',
      type: 'text',
      content: `### Filosofiens hovedområder

Filosofi er et vidtfavnende felt som tradisjonelt deles inn i flere delområder:

**Metafysikk** - studiet av virkeligheten
- Hva finnes? Hva er reelt?
- Har vi fri vilje eller er alt forutbestemt?
- Hva er forholdet mellom kropp og sinn?

**Epistemologi** - kunnskapsteori
- Hva er kunnskap?
- Hvordan kan vi vite noe med sikkerhet?
- Hva er forholdet mellom tro og viten?

**Etikk** - moralfilosofi
- Hva er riktig og galt?
- Hva er et godt liv?
- Hvordan bør vi handle?

**Logikk** - studiet av gyldige resonnementer
- Hva gjør et argument gyldig?
- Hvordan skiller vi gode fra dårlige argumenter?
- Hva er sannhet?`,
    },
    {
      id: 'fil-1-1-flere-omrader',
      type: 'text',
      content: `**Estetikk** - filosofi om kunst og skjønnhet
- Hva er skjønnhet?
- Hva gjør noe til kunst?
- Kan smak diskuteres objektivt?

**Politisk filosofi** - samfunnsfilosofi
- Hva legitimerer statens makt?
- Hva er rettferdig fordeling?
- Hva er frihet i et samfunn?

**Vitenskapsfilosofi** - refleksjon over vitenskapen
- Hva er vitenskapelig metode?
- Hvordan skiller vitenskap seg fra pseudovitenskap?
- Hva er forklaring?

Disse områdene overlapper ofte. Et spørsmål om kunstig intelligens kan for eksempel være både metafysisk (Hva er bevissthet?), etisk (Bør vi skape kunstig intelligens?) og epistemologisk (Kan maskiner tenke?).`,
    },
    {
      id: 'fil-1-1-oppgave-2',
      type: 'exercise',
      title: 'Klassifisere spørsmål etter område',
    },
    {
      id: 'fil-1-1-metode',
      type: 'text',
      content: `### Filosofisk metode

Hvordan jobber filosofer? Selv om metodene varierer, finnes det noen fellestrekk:

**Konseptuell analyse**
Filosofer analyserer begreper ved å undersøke deres betydning, implikasjoner og forutsetninger. Hva mener vi egentlig når vi sier at noe er "rettferdig" eller "sant"?

**Argumentasjon**
Filosofi handler om å utvikle gode argumenter og kritisk vurdere andres argumenter. Et godt filosofisk argument gir grunner for en påstand og viser hvorfor disse grunnene er relevante.

**Tankeeksperimenter**
Filosofer bruker ofte imaginære scenarier for å teste intuisjoner og ideer. Platons huleliknelse og moderne dilemmaer om selvkjørende biler er eksempler.

**Kritisk refleksjon**
Filosofi krever at vi setter spørsmålstegn ved våre egne forutsetninger og værer åpne for at vi kan ta feil.`,
    },
    {
      id: 'fil-1-1-relevans',
      type: 'example',
      title: 'Hvorfor studere filosofi?',
      content: `**Praktisk relevans:**
- Utvikler kritisk tenkning og analytiske ferdigheter
- Hjelper oss å forstå komplekse etiske dilemmaer i samfunnet
- Gir verktøy for å vurdere argumenter i politikk, vitenskap og hverdagen
- Fremmer refleksjon over egne verdier og forutsetninger

**Eksempler fra hverdagen:**
- Debatter om personvern i sosiale medier (etikk, politisk filosofi)
- Diskusjoner om kunstig intelligens (metafysikk, etikk, vitenskapsfilosofi)
- Spørsmål om klimaansvar (etikk, politisk filosofi)
- Fake news og sannhet i mediene (epistemologi, logikk)

Filosofi gir oss ikke ferdige svar, men bedre verktøy for å tenke gjennom vanskelige spørsmål.`,
    },
    {
      id: 'fil-1-1-oppgave-3',
      type: 'exercise',
      title: 'Filosofiske spørsmål i hverdagen',
    },
    {
      id: 'fil-1-1-sitater',
      type: 'text',
      content: `### Filosofi som livsholdning

"En som ikke har noen gang undret seg over noe, har aldri filosofert." – Arthur Schopenhauer

Filosofi er ikke bare et akademisk fag, men også en holdning til livet. Det handler om å bevare undringen, stille spørsmål og ikke akseptere lettvinte svar. Barn er naturlige filosofer – de spør "hvorfor?" om alt. Filosofi handler om å beholde denne nysgjerrigheten som voksen.

Den danske filosofen Søren Kierkegaard skrev: "Livet må leves forlengs, men kan bare forstås baklengs." Filosofi hjelper oss å forstå våre liv, våre samfunn og vår plass i verden.`,
    },
    {
      id: 'fil-1-1-oppgave-4',
      type: 'exercise',
      title: 'Refleksjon over egne filosofiske spørsmål',
    },
    {
      id: 'fil-1-1-oppsummering',
      type: 'text',
      content: `### Oppsummering

Filosofi er kjærlighet til visdom – en systematisk utforskning av grunnleggende spørsmål om virkelighet, kunnskap, moral, skjønnhet og samfunn. Filosofiske spørsmål kjennetegnes ved at de er grunnleggende, konseptuelle og ofte normative.

De viktigste filosofiske delområdene er metafysikk, epistemologi, etikk, logikk, estetikk, politisk filosofi og vitenskapsfilosofi. Filosofisk metode bygger på konseptuell analyse, argumentasjon, tankeeksperimenter og kritisk refleksjon.

Filosofi er relevant fordi det utvikler vår evne til kritisk tenkning og hjelper oss å navigere komplekse spørsmål i samfunnet og våre egne liv.`,
    },
    {
      id: 'fil-1-1-oppgave-5',
      type: 'exercise',
      title: 'Samleoppgave: Filosofi i praksis',
    },
    {
      id: 'fil-1-1-oppgave-6',
      type: 'exercise',
      title: 'Samleoppgave: Argumentanalyse',
    },
  ],
  exercises: [
    {
      id: 'fil-1-1-ex-1',
      type: 'multiple-choice',
      question: 'Hvilket av følgende er et typisk filosofisk spørsmål?',
      options: [
        'Når ble Sokrates født?',
        'Hva er rettferdighet?',
        'Hvor mange planeter er det i solsystemet?',
        'Hvem var Norges første statsminister?',
      ],
      correctAnswer: 1,
      explanation: 'Et filosofisk spørsmål undersøker begreper og deres betydning, ikke historiske fakta eller empiriske forhold. "Hva er rettferdighet?" krever konseptuell analyse og refleksjon.',
    },
    {
      id: 'fil-1-1-ex-2',
      type: 'multiple-choice',
      question: 'Hvilket delområde av filosofien undersøker spørsmål om hva som er rett og galt?',
      options: [
        'Metafysikk',
        'Epistemologi',
        'Etikk',
        'Estetikk',
      ],
      correctAnswer: 2,
      explanation: 'Etikk, også kalt moralfilosofi, studerer spørsmål om rett og galt, godt og ondt, og hvordan vi bør leve.',
    },
    {
      id: 'fil-1-1-ex-3',
      type: 'classic',
      question: 'Forklar forskjellen mellom et empirisk spørsmål og et filosofisk spørsmål. Gi eksempler på begge.',
      points: 3,
      hint: 'Tenk på hvordan man ville gått frem for å besvare de to typene spørsmål.',
    },
    {
      id: 'fil-1-1-ex-4',
      type: 'classic',
      question: 'Velg et filosofisk spørsmål som du synes er interessant. Forklar hvorfor dette spørsmålet ikke kan besvares ved å slå opp fakta eller gjøre målinger.',
      points: 3,
      hint: 'Tenk på hva som gjør spørsmålet filosofisk – kanskje det handler om begrepers betydning eller normative vurderinger?',
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-1-1-ex-5',
      type: 'classic',
      question: 'Du leser en nyhetsartikkel om at et selskap bruker kunstig intelligens til å ansette folk. Artikkelforfatteren hevder at dette er "urettferdig". Identifiser minst tre filosofiske spørsmål som oppstår i denne situasjonen, og angi hvilket delområde av filosofien hvert spørsmål tilhører.',
      points: 4,
      hint: 'Tenk på spørsmål om hva som gjør noe rettferdig (etikk), om AI kan tenke (metafysikk), og om vi kan stole på algoritmers beslutninger (epistemologi).',
    },
    {
      id: 'fil-1-1-ex-6',
      type: 'classic',
      question: 'Noen hevder at filosofi er unyttig fordi det ikke gir definitive svar. Utvikle et motargument som forsvarer filosofiens verdi, selv om den ikke alltid gir endelige konklusjoner.',
      points: 4,
      hint: 'Tenk på hva som er verdifullt utover å få svar – kanskje prosessen med å tenke kritisk, evnen til å stille gode spørsmål, eller forståelsen av kompleksitet?',
    },
  ],
  keyTerms: [
    { term: 'Filosofi', definition: 'Kjærlighet til visdom; systematisk utforskning av grunnleggende spørsmål om virkelighet, kunnskap og verdier' },
    { term: 'Metafysikk', definition: 'Studiet av virkelighetens natur og hva som eksisterer' },
    { term: 'Epistemologi', definition: 'Kunnskapsteori; studiet av hva kunnskap er og hvordan vi kan vite noe' },
    { term: 'Etikk', definition: 'Moralfilosofi; studiet av rett og galt, godt og ondt' },
    { term: 'Konseptuell analyse', definition: 'Filosofisk metode som undersøker begrepers betydning og implikasjoner' },
  ],
};

export const CHAPTER_FILOSOFI_ETIKK_1_2: TextbookChapter = {
  id: 'filosofi-etikk-1-2',
  courseId: 'filosofi-etikk',
  chapterNumber: '1.2',
  title: 'De første filosofene',
  description: 'Presokratikerne og naturfilosofien: Fra myte til rasjonell forklaring',
  estimatedMinutes: 20,
  competenceGoals: [
    'Kjenne til de første greske filosofenes bidrag til vestlig tenkning',
    'Forstå overgangen fra mytisk til rasjonell forklaring av verden',
    'Kjenne til sentrale ideer hos Thales, Heraklit, Parmenides og Demokrit',
  ],
  content: [
    {
      id: 'fil-1-2-intro',
      type: 'text',
      content: `## Fra myte til logos

Omkring år 600 f.Kr. skjedde noe revolusjonerende i de greske koloniene i Lilleasia (dagens Tyrkia). Mennesker begynte å forklare verden, ikke ved hjelp av guder og myter, men gjennom rasjonell tenkning og observasjon. Dette var fødselen av filosofi som vi kjenner den.

De tidlige greske filosofene kalles ofte **presokratikere** fordi de levde før Sokrates (469–399 f.Kr.). Mens tidligere kulturer forklarte naturens krefter som guders vilje, søkte presokratikerne naturlige forklaringer. De spurte: Hva består verden av? Hvordan endrer ting seg? Finnes det grunnleggende prinsipper som forklarer alt?

Dette var en overgang fra **myte** til **logos** – fra mytisk fortelling til rasjonell forklaring.`,
    },
    {
      id: 'fil-1-2-hvorfor-lilleasia',
      type: 'example',
      title: 'Hvorfor startet filosofien i Lilleasia?',
      content: `De greske byene i Lilleasia (særlig Milet) var handelsknutepunkter der ulike kulturer møttes. Dette ga:

- **Kulturell utveksling**: Møte med egyptisk, babylonsk og persisk tenkning
- **Økonomisk velstand**: Tid og ressurser til refleksjon utover daglig overlevelse
- **Politisk frihet**: Mindre rigid maktstruktur enn i de store imperierne
- **Handelserfaring**: Pragmatisk problemløsning og åpenhet for nye ideer

Filosofi oppsto der hvor mennesker hadde tid, frihet og eksponering for ulike perspektiver.`,
    },
    {
      id: 'fil-1-2-thales',
      type: 'text',
      content: `### Thales av Milet (ca. 624–546 f.Kr.)

Thales regnes som den første filosofen. Hans revolusjonerende idé var enkel men dyptgående: Alt består av **vann**.

Dette kan virke naivt i dag, men Thales' betydning ligger ikke i at han hadde rett, men i **hvordan han tenkte**. I stedet for å si "Poseidon styrer havet", søkte han en naturlig, materiell forklaring. Vann kan ta mange former: is, væske, damp. Det er nødvendig for alt liv. Kanskje er det det grunnleggende stoffet all virkelighet består av?

**Thales' metode:**
- Observasjon av naturen
- Rasjonell slutning
- Søken etter underliggende enheter

Andre kilder tilskriver Thales prediksjonen av en solformørkelse (585 f.Kr.) og geometriske oppdagelser. Om disse historiene er sanne eller ikke, viser de at Thales ble sett på som en som brukte fornuft til å forstå verden.`,
    },
    {
      id: 'fil-1-2-oppgave-1',
      type: 'exercise',
      title: 'Thales\' betydning',
    },
    {
      id: 'fil-1-2-heraklit',
      type: 'text',
      content: `### Heraklit av Efesos (ca. 535–475 f.Kr.)

"Alt flyter" (*panta rhei*) – dette er Heraklits berømte prinsipp. Virkeligheten er i konstant endring. "Du kan ikke stige ned i den samme elven to ganger," sa han, "for nye vann strømmer alltid til."

For Heraklit var **endring** virkelighetens grunnleggende natur. Motsetninger – varmt og kaldt, dag og natt, liv og død – er ikke separate ting, men deler av samme prosess. Verden drives av konflikt og harmoni mellom motsatser.

**Logos**
Heraklit introduserte begrepet *logos* – en rasjonell orden eller lov som styrer alle endringer. Selv om alt endrer seg, er det en underliggende lovmessighet. Kaos er ikke tilfeldig, men følger en dypere orden.

**Ild som urelement**
Heraklit mente at ild var det grunnleggende stoffet – ikke fordi alt bokstavelig er ild, men fordi ild symboliserer forandring, transformasjon og energi.`,
    },
    {
      id: 'fil-1-2-parmenides',
      type: 'text',
      content: `### Parmenides av Elea (ca. 515–450 f.Kr.)

Parmenides tok et radikalt motsatt standpunkt til Heraklit: **Endring er en illusjon**.

Hans argument gikk omtrent slik:
1. Bare det som **er**, eksisterer. Det som **ikke er**, eksisterer ikke.
2. Endring ville bety at noe går fra å ikke være til å være, eller omvendt.
3. Men det ikke-værende kan ikke eksistere.
4. Derfor er endring umulig.

Dette virker absurd – vi ser jo endring overalt! Men Parmenides hevdet at sansene våre bedrar oss. Fornuften, ikke sansene, viser oss sannheten: Virkeligheten er **én, uforanderlig og evig**.

**Parmenides' påvirkning**
Hans argumentasjon viste kraften i logisk resonnement. Selv om konklusjonen virker gal, er logikken streng. Dette tvang senere filosofer (som Platon og Aristoteles) til å utvikle mer sofistikerte teorier om forholdet mellom det foranderlige og det evige.`,
    },
    {
      id: 'fil-1-2-oppgave-2',
      type: 'exercise',
      title: 'Heraklit versus Parmenides',
    },
    {
      id: 'fil-1-2-demokrit',
      type: 'text',
      content: `### Demokrit av Abdera (ca. 460–370 f.Kr.)

Demokrit utviklet **atomteorien** – en av de mest fremsynte ideene i antikken. Hans grunnidé:
- Virkeligheten består av udelelige partikler kalt **atomer** (fra gresk *atomos* = udelelig)
- Atomer beveger seg i tomt rom
- Alle ting er kombinasjoner av atomer
- Forskjeller mellom ting skyldes atomenes form, størrelse og arrangement

Dette var rent spekulativt – Demokrit hadde ingen mikroskoper. Men hans ide var bemerkelsesverdig lik moderne atomteori (om enn mye forenklet).

**Mekanistisk forklaring**
Demokrit var **materialist**: Alt kan forklares ved materie i bevegelse. Ikke guder, ikke ånder – bare atomer og tomhet. Selv sinnet og sjelen består av atomer, mente han.

**Determinisme**
Hvis alt er atomer som beveger seg etter naturlover, er da alt forutbestemt? Demokrit så ut til å mene ja. Dette reiste spørsmål om fri vilje som filosofer fortsatt diskuterer.`,
    },
    {
      id: 'fil-1-2-andre-presokratikere',
      type: 'example',
      title: 'Andre betydningsfulle presokratikere',
      content: `**Anaksimander (ca. 610–546 f.Kr.)**
Thales' student. Mente at det grunnleggende stoffet var *apeiron* – "det ubegrensede" eller "det ubestemte". Utviklet en tidlig evolusjonsteori: dyr kom fra havet.

**Anaksimenes (ca. 585–525 f.Kr.)**
Mente at luft var urelementet. Når luft fortynnes, blir det ild; når den fortettes, blir det vann, deretter jord.

**Pytagoras (ca. 570–495 f.Kr.)**
Berømt for Pytagoras' læresetning, men hans filosofi gikk dypere: Tall er virkelighetens grunnlag. Harmoni og proporsjon – i musikk, astronomi, etikk – kan uttrykkes matematisk.

**Empedokles (ca. 490–430 f.Kr.)**
Foreslo at alt består av fire elementer: jord, vann, luft og ild. Disse kombineres og separeres av to krefter: kjærlighet (attraksjon) og hat (frastøting).`,
    },
    {
      id: 'fil-1-2-oppgave-3',
      type: 'exercise',
      title: 'Sammenligne presokratikerne',
    },
    {
      id: 'fil-1-2-betydning',
      type: 'text',
      content: `### Presokratikernes bidrag

Selv om de første filosofenes teorier var spekulative og ofte gale, la de grunnlaget for vestlig tenkning:

**1. Rasjonell forklaring**
De søkte naturlige, ikke overnaturlige forklaringer. Dette er kimen til vitenskapelig tenkning.

**2. Søken etter enheter**
Kan mangfoldet i verden reduseres til noen få grunnleggende prinsipper? Dette spørsmålet driver fortsatt både filosofi og vitenskap.

**3. Logisk argumentasjon**
Særlig Parmenides viste at logikk kan føre til overraskende konklusjoner. Dette tvang frem mer raffinerte argumentasjonsteknikker.

**4. Kritisk holdning**
Filosofer var uenige med hverandre. Thales sa vann, Heraklit ild, Demokrit atomer. Denne tradisjonen med kritikk og debatt er essensiell for intellektuell fremgang.`,
    },
    {
      id: 'fil-1-2-oppgave-4',
      type: 'exercise',
      title: 'Presokratisk tenkning i dag',
    },
    {
      id: 'fil-1-2-oppsummering',
      type: 'text',
      content: `### Oppsummering

Presokratikerne markerte en revolusjonerende overgang fra mytisk til rasjonell forklaring. De spurte: Hva er virkelighetens grunnleggende natur?

- **Thales**: Alt er vann – søkte materielle forklaringer
- **Heraklit**: Alt flyter – endring er grunnleggende, styrt av logos
- **Parmenides**: Endring er illusjon – virkeligheten er uforanderlig og én
- **Demokrit**: Alt er atomer – materialistisk og mekanistisk forklaring

Deres spekulasjoner var begynnelsen på både filosofi og vitenskap. De viste at mennesker, ved hjelp av fornuft og observasjon, kan forsøke å forstå universets mysterier.`,
    },
    {
      id: 'fil-1-2-oppgave-5',
      type: 'exercise',
      title: 'Samleoppgave: Presokratisk debatt',
    },
  ],
  exercises: [
    {
      id: 'fil-1-2-ex-1',
      type: 'multiple-choice',
      question: 'Hva var Thales\' revolusjonerende bidrag til filosofien?',
      options: [
        'Han beviste at alt er vann',
        'Han søkte naturlige forklaringer i stedet for mytologiske',
        'Han oppfant logikken',
        'Han var den første som trodde på én gud',
      ],
      correctAnswer: 1,
      explanation: 'Thales\' betydning ligger ikke i at teorien hans var korrekt, men i at han søkte naturlige, rasjonelle forklaringer på verden i stedet for å vise til guder og myter.',
    },
    {
      id: 'fil-1-2-ex-2',
      type: 'multiple-choice',
      question: 'Hvem mente at endring er en illusjon og at virkeligheten er uforanderlig?',
      options: [
        'Heraklit',
        'Demokrit',
        'Parmenides',
        'Thales',
      ],
      correctAnswer: 2,
      explanation: 'Parmenides argumenterte logisk for at endring er umulig og at virkeligheten må være én, uforanderlig og evig – selv om dette strider mot sanseerfaring.',
    },
    {
      id: 'fil-1-2-ex-3',
      type: 'classic',
      question: 'Forklar Heraklits utsagn "Du kan ikke stige ned i den samme elven to ganger." Hva sier dette om hans syn på virkeligheten?',
      points: 3,
      hint: 'Tenk på hva som skjer med elven mellom første og andre gang du stiger ned i den.',
    },
    {
      id: 'fil-1-2-ex-4',
      type: 'classic',
      question: 'Demokrit mente at alt består av atomer i bevegelse. Hvilke filosofiske implikasjoner kan dette ha for spørsmål om fri vilje?',
      points: 3,
      hint: 'Hvis alt er atomer som følger naturlover, har vi da egentlig valgfrihet?',
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-1-2-ex-5',
      type: 'classic',
      question: 'Forestill deg en debatt mellom Heraklit og Parmenides. Heraklit sier "Alt endrer seg konstant", og Parmenides svarer "Endring er umulig – det er bare en illusjon." Formuler ett argument fra hver side, og vurder hvilken posisjon du finner mest overbevisende.',
      points: 5,
      hint: 'Heraklit kan vise til observasjon av endring i naturen. Parmenides kan bruke logikk om hva det betyr for noe å eksistere.',
    },
  ],
  keyTerms: [
    { term: 'Presokratikere', definition: 'De tidlige greske filosofene som levde før Sokrates' },
    { term: 'Logos', definition: 'Rasjonell forklaring eller orden; hos Heraklit: den lovmessigheten som styrer endring' },
    { term: 'Atom', definition: 'Hos Demokrit: udelelige partikler som alt består av' },
    { term: 'Materialisme', definition: 'Filosofisk syn at bare materie eksisterer; alt kan forklares ved fysiske prosesser' },
    { term: 'Urelement', definition: 'Det grunnleggende stoffet som alt annet består av' },
  ],
};

export const CHAPTER_FILOSOFI_ETIKK_1_3: TextbookChapter = {
  id: 'filosofi-etikk-1-3',
  courseId: 'filosofi-etikk',
  chapterNumber: '1.3',
  title: 'Sokrates, Platon og Aristoteles',
  description: 'Antikkens tre store filosofer og deres innflytelse på vestlig tenkning',
  estimatedMinutes: 25,
  competenceGoals: [
    'Forstå den sokratiske metoden og dens betydning',
    'Kjenne til Platons idélære og dens implikasjoner',
    'Kjenne til Aristoteles\' bidrag til logikk, metafysikk og etikk',
  ],
  content: [
    {
      id: 'fil-1-3-intro',
      type: 'text',
      content: `## Athenernes storhetstid

På 400-tallet f.Kr. var Athen sentrum for gresk kultur og intellektuell blomstring. Det var her tre filosofer – lærer, student og studentens student – skapte fundamentet for vestlig filosofi: Sokrates, Platon og Aristoteles.

Disse tre flyttet fokus fra naturfilosofi til **etikk, erkjennelse og det gode liv**. I stedet for å spørre "Hva består verden av?", spurte de: "Hvordan bør vi leve? Hva er et godt menneske? Hva er kunnskap?"

Alfred North Whitehead, en filosof fra 1900-tallet, sa: "Den tryggeste generaliseringen om den europeiske filosofiske tradisjon er at den består av en serie fotnoter til Platon." La oss se hvorfor.`,
    },
    {
      id: 'fil-1-3-sokrates',
      type: 'text',
      content: `### Sokrates (469–399 f.Kr.)

Sokrates skrev aldri noe ned. Det vi vet om ham, kommer hovedsakelig fra hans student Platon. Likevel regnes Sokrates som en av historiens mest innflytelsesrike tenkere.

**"Det uprøvde liv er ikke verdt å leve"**
Sokrates vandret rundt i Athens gater og utfordret folk – politikere, diktere, håndverkere – til å forklare begreper de brukte: Hva er rettferdighet? Hva er mot? Hva er godhet?

Gang på gang viste det seg at folk trodde de visste, men ikke kunne forklare hva de mente. Sokrates hevdet ikke å vite selv – hans visdom lå i erkjennelsen av egen uvitenhet.

**Den sokratiske metoden**
Sokrates utviklet en dialektisk metode for å nå sannheten:
1. **Stille spørsmål**: Be noen definere et begrep (f.eks. "Hva er mot?")
2. **Teste definisjonen**: Foreslå moteksempler eller konsekvenser
3. **Avdekke motsetninger**: Vise at definisjonen fører til paradokser
4. **Revidere og prøve igjen**: Formulere en bedre definisjon

Dette var ikke ment for å ydmyke folk, men for å nå dypere innsikt gjennom kritisk undersøkelse.`,
    },
    {
      id: 'fil-1-3-sokrates-eksempel',
      type: 'example',
      title: 'Den sokratiske metoden i praksis',
      content: `**Dialog om mot:**

**Sokrates**: Hva er mot?
**Person**: Mot er å ikke flykte fra kamp.
**Sokrates**: Men hvis en general taktisk trekker seg tilbake for å lokke fienden i en felle, er han da feig?
**Person**: Nei, det er smart strategi.
**Sokrates**: Så mot er ikke alltid å bli stående?
**Person**: Nei... kanskje mot er å motstå frykt?
**Sokrates**: Men hva med noen som ikke er redd, fordi de er dumme og ikke forstår faren?
**Person**: Det er ikke mot, det er dumdristighet...
**Sokrates**: Så kanskje mot krever både å forstå faren og velge å møte den av rette grunner?

Gjennom slike samtaler kom man nærmere en dypere forståelse.`,
    },
    {
      id: 'fil-1-3-oppgave-1',
      type: 'exercise',
      title: 'Den sokratiske metoden',
    },
    {
      id: 'fil-1-3-sokrates-dod',
      type: 'text',
      content: `### Sokrates' død

I 399 f.Kr. ble Sokrates dømt til døden, anklaget for å "forderver ungdommen" og "ikke tro på byens guder". I virkeligheten var anklagene politisk motiverte – hans kritiske spørsmål hadde gjort ham upopulær hos maktpersoner.

Gitt muligheten til å flykte, nektet Sokrates. Han argumenterte for at han som borger hadde forpliktet seg til Athens lover. Å bryte dem ville være urettferdig, selv når lovene ble brukt urettferdig mot ham.

Sokrates drakk sikkuta (gift) omgitt av venner og studenter. Hans død ble et symbol på filosofens integritet – å leve i samsvar med sine prinsipper, selv når det koster livet.

"Derfor, mine dommere, vær ved godt mot om døden, og vit dette som en sannhet: at ingen ondt kan hende en god mann, verken i livet eller etter døden." – Sokrates (ifølge Platon)`,
    },
    {
      id: 'fil-1-3-platon',
      type: 'text',
      content: `### Platon (ca. 427–347 f.Kr.)

Platon var Sokrates' mest berømte student. Sokrates' død preget ham dypt, og han viet sitt liv til å bevare lærerens filosofi – og utvikle den videre.

**Idélæren (teorien om formene)**
Platons mest kjente bidrag er **idélæren**. Han skilte mellom to virkelighetsnivåer:

**1. Sanseverdenen**
Den fysiske verden vi sanser – ting som endrer seg, forfaller og dør. Dette er en ufullkommen, skyggeaktig virkelighet.

**2. Ideenes verden**
En uforanderlig, perfekt verden av rene former eller ideer. Her finnes det perfekte trekanten, den ideelle rettferdigheten, den rene skjønnheten.

Tingene i sanseverdenen er bare **kopier** av de perfekte ideene. En vakker blomst er vakker fordi den deltar i Ideen om Skjønnhet. En rettferdig handling er rettferdig fordi den deltar i Ideen om Rettferdighet.`,
    },
    {
      id: 'fil-1-3-hulelikning',
      type: 'example',
      title: 'Platons hulelikning',
      content: `I sin berømte **hulelikning** illustrerer Platon sin teori:

Forestill deg mennesker lenket i en hule siden fødselen, ansiktet mot veggen. Bak dem brenner en ild, og folk bærer gjenstander forbi ilden. Fangene ser bare skygger på veggen.

En av fangene blir frigjort og tvunget til å snu seg. Først smertefullt blender av ilden, ser han at skyggene bare er refleksjoner. Han føres ut av hulen og ser den virkelige verden – solen, trær, virkelighet selv.

Hvis han returnerer til hulen for å fortelle de andre, vil de tro ham? Nei, de vil anse ham som gal. Skyggene er den eneste virkeligheten de kjenner.

**Betydning:**
- Hulen = sanseverdenen (illusjon)
- Verden utenfor = ideenes verden (sann virkelighet)
- Frigjøringen = filosofisk opplysning
- Filosofen = den som ser sannheten men misforstås av andre`,
    },
    {
      id: 'fil-1-3-oppgave-2',
      type: 'exercise',
      title: 'Platons idélære',
    },
    {
      id: 'fil-1-3-platon-stat',
      type: 'text',
      content: `### Platons politiske filosofi

I verket *Staten* beskriver Platon sitt ideal for et rettferdig samfunn. Samfunnet bør ha tre klasser, tilsvarende sjelens tre deler:

**1. Filosofkonger** (fornuft)
De klokeste skal styre. Bare filosofer, som har sett ideenes verden, forstår hva som er sant godt.

**2. Voktere** (mot/vilje)
Soldater og administratorer som forsvarer staten og håndhever lover.

**3. Produsenter** (begjær)
Bønder, håndverkere, kjøpmenn som produserer det samfunnet trenger.

**Kontroversielt:**
- Platons stat er ikke-demokratisk (han så Athen dømme Sokrates, og stolte ikke på folkestyre)
- Barn skulle oppdras kollektivt
- Kunst og diktning skulle sensureres (da de skaper falske forestillinger)

Mange av Platons politiske ideer virker totalitære i dag, men han forsøkte å designe et system basert på rettferdighet og visdom.`,
    },
    {
      id: 'fil-1-3-aristoteles',
      type: 'text',
      content: `### Aristoteles (384–322 f.Kr.)

Aristoteles studerte ved Platons akademi i 20 år, men utviklet sin egen filosofi som i mange henseender brøt med lærerens.

**Kritikk av idélæren**
Aristoteles avviste Platons todeling av virkeligheten. Vi trenger ikke en egen "Ideverden". Formene finnes **i tingene selv**, ikke i en separat virkelighet.

En bestemt hest er virkelig. Hesteheten – det som gjør den til en hest – finnes i den faktiske hesten, ikke i en abstrakt "Ide om hest" et annet sted.

**Empirisme**
Mens Platon stolte på fornuft og abstrahering, verdsatte Aristoteles **observasjon**. For å forstå verden, må vi studere den – studere planter, dyr, fenomener. Han var en pioner i biologi, logikk, fysikk, politikk og etikk.`,
    },
    {
      id: 'fil-1-3-aristoteles-logikk',
      type: 'text',
      content: `### Aristoteles' logikk

Aristoteles grunnla formell logikk med sin **syllogismelære**. En syllogisme er en form for argument:

**Premiss 1**: Alle mennesker er dødelige.
**Premiss 2**: Sokrates er et menneske.
**Konklusjon**: Derfor er Sokrates dødelig.

Hvis premissene er sanne og formen er gyldig, må konklusjonen være sann. Aristoteles utviklet regler for hvilke former som er gyldige.

Dette la grunnlaget for deduktiv resonnering – en hjørnestein i vitenskap, matematikk og jus.`,
    },
    {
      id: 'fil-1-3-oppgave-3',
      type: 'exercise',
      title: 'Aristotelisk syllogisme',
    },
    {
      id: 'fil-1-3-aristoteles-etikk',
      type: 'text',
      content: `### Aristoteles' etikk (dydsetikk)

I *Nikomakiske etikk* spør Aristoteles: Hva er et godt liv?

**Eudaimonia**
Målet er **eudaimonia** – ofte oversatt som "lykke" eller "blomstring". Det er ikke bare å føle seg glad, men å leve et liv i samsvar med vår natur som rasjonelle vesener.

**Dyden som den gylne middelvei**
Moralske dyder er den gylne middelvei mellom to ekstremer:
- **Mot** er middelvei mellom feighet og dumdristighet
- **Gavmildhet** er middelvei mellom gjerrighet og sløsing
- **Ærlighet** er middelvei mellom løgn og brutal taktløshet

Dyd oppnås gjennom **vane**. Vi blir modige ved å handle modig, ærlighet ved å handle ærlig. Etikk er som å lære å spille et instrument – det krever praksis.

**Intellektuelle dyder**
Den høyeste formen for lykke, mente Aristoteles, er **teoretisk kontemplasjon** – å bruke fornuften til å forstå sannhet. Dette er det mest guddommelige i oss.`,
    },
    {
      id: 'fil-1-3-sammenligning',
      type: 'example',
      title: 'Sammenligning: Sokrates, Platon, Aristoteles',
      content: `**Metode:**
- **Sokrates**: Dialog og kritisk spørsmål
- **Platon**: Rasjonell refleksjon og matematikk
- **Aristoteles**: Observasjon og klassifikasjon

**Virkelighet:**
- **Sokrates**: Fokus på etikk og selverkjennelse
- **Platon**: To verdener – ideenes verden er den sanne
- **Aristoteles**: Én verden – former finnes i tingene

**Kunnskap:**
- **Sokrates**: Vet at han ikke vet
- **Platon**: Kunnskap er å huske ideene sjelen så før fødselen
- **Aristoteles**: Kunnskap kommer fra erfaring og resonnering

**Etikk:**
- **Sokrates**: Kunnskap er dyd; ingen gjør ondt med vilje
- **Platon**: Dyd er harmoni mellom sjelens deler
- **Aristoteles**: Dyd er den gylne middelvei, oppnås gjennom praksis`,
    },
    {
      id: 'fil-1-3-oppgave-4',
      type: 'exercise',
      title: 'Platons versus Aristoteles\' metode',
    },
    {
      id: 'fil-1-3-arv',
      type: 'text',
      content: `### Den greske filosofiens arv

Disse tre filosofene formet vestlig tenkning på dyptgående måter:

**Sokrates**: Kritisk tenkning, etisk refleksjon, dialogisk metode
**Platon**: Rasjonalisme, idealisme, politisk filosofi
**Aristoteles**: Logikk, empirisme, vitenskapelig metode, dydsetikk

Kristendommen ble påvirket av Platon (Augustin) og Aristoteles (Thomas Aquinas). Renessansen gjenoppdaget deres skrifter. Moderne filosofi, vitenskap og demokrati har røtter i antikkens Athen.

"Vi står på skuldrene av giganter," sa Isaac Newton. Sokrates, Platon og Aristoteles var tre av de høyeste gigantene.`,
    },
    {
      id: 'fil-1-3-oppgave-5',
      type: 'exercise',
      title: 'Samleoppgave: Anvendelse av filosofisk metode',
    },
    {
      id: 'fil-1-3-oppgave-6',
      type: 'exercise',
      title: 'Samleoppgave: Etisk dilemma med aristotelisk dydsetikk',
    },
    {
      id: 'fil-1-3-oppsummering',
      type: 'text',
      content: `### Oppsummering

Sokrates, Platon og Aristoteles representerer filosofiens kjerneområder:

**Sokrates** viste at det uprøvde liv ikke er verdt å leve. Gjennom kritiske spørsmål søkte han klarhet om begreper som rettferdighet, mot og godhet.

**Platon** utviklet idélæren: Den sanne virkeligheten er ikke den vi sanser, men en verden av perfekte, uforanderlige ideer. Hans hulelikning illustrerer filosofens oppgave – å søke sannhet bak sansenes illusjoner.

**Aristoteles** kritiserte lærerens dualisme og grunnla empirisk vitenskap. Hans logikk, metafysikk og dydsetikk har preget vestlig tenkning i over 2000 år.

Sammen skapte de fundamentet for filosofi som en systematisk søken etter visdom, sannhet og det gode liv.`,
    },
  ],
  exercises: [
    {
      id: 'fil-1-3-ex-1',
      type: 'multiple-choice',
      question: 'Hva kjennetegner den sokratiske metoden?',
      options: [
        'Å forelese om sannheten',
        'Å stille kritiske spørsmål for å avdekke motsetninger i folks syn',
        'Å observere naturen systematisk',
        'Å lese gamle tekster',
      ],
      correctAnswer: 1,
      explanation: 'Den sokratiske metoden går ut på å stille spørsmål som avdekker motsetninger og uklarheter i folks synspunkter, med mål om å nå dypere forståelse gjennom dialog.',
    },
    {
      id: 'fil-1-3-ex-2',
      type: 'multiple-choice',
      question: 'Hva er hovedpoenget i Platons idélære?',
      options: [
        'Alt består av atomer',
        'Den fysiske verden er en ufullkommen kopi av en perfekt idéverden',
        'Bare det vi kan observere, er virkelig',
        'Guder styrer naturens krefter',
      ],
      correctAnswer: 1,
      explanation: 'Platon mente at den sanne virkeligheten er ideenes verden – et rike av perfekte, uforanderlige former som tingene i sanseverdenen bare er ufullkomne kopier av.',
    },
    {
      id: 'fil-1-3-ex-3',
      type: 'classic',
      question: 'Forklar hva Aristoteles mener med "den gylne middelvei" i etikken. Gi to eksempler på dyder som representerer en middelvei mellom to ekstremer.',
      points: 3,
      hint: 'Tenk på moralske egenskaper som kan gå for langt i begge retninger – for lite og for mye.',
    },
    {
      id: 'fil-1-3-ex-4',
      type: 'classic',
      question: 'Platon stolte på fornuft og abstraksjon, mens Aristoteles verdsatte observasjon. Forklar denne forskjellen og gi et eksempel på hvordan de to ville nærmet seg et spørsmål ulikt.',
      points: 4,
      hint: 'Tenk på hvordan man ville studere f.eks. "Hva er en god stat?" – ville man dedusere fra prinsipper eller studere eksisterende stater?',
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-1-3-ex-5',
      type: 'classic',
      question: 'Bruk den sokratiske metoden på følgende påstand: "Rikdom gjør mennesker lykkelige." Still minst tre kritiske spørsmål som kan utfordre denne påstanden, og vis hvordan metoden kan føre til en mer nyansert forståelse.',
      points: 5,
      hint: 'Tenk på moteksempler, definisjoner av lykke, og hva som eventuelt mangler i påstanden.',
    },
    {
      id: 'fil-1-3-ex-6',
      type: 'classic',
      question: 'Du står overfor et dilemma: Du kan lyve for å redde en venns følelser, eller si en smertefull sannhet. Bruk Aristoteles\' dydsetikk (den gylne middelvei) til å analysere situasjonen. Hva ville være feighet, dumdristighet, og den modige middelvei? Hva ville være brutal ærlighet, løgn, og den ærlige middelvei?',
      points: 5,
      hint: 'Tenk på at den gylne middelvei krever praktisk visdom (phronesis) – det handler ikke om å alltid velge det som er "midt imellom", men det som er riktig i den konkrete situasjonen.',
    },
  ],
  keyTerms: [
    { term: 'Sokratisk metode', definition: 'Dialogisk metode der man stiller kritiske spørsmål for å avdekke motsetninger og nå dypere innsikt' },
    { term: 'Idélære', definition: 'Platons teori om at den sanne virkeligheten består av perfekte, uforanderlige ideer/former' },
    { term: 'Hulelikning', definition: 'Platons liknelse som illustrerer at de fleste mennesker lever i uvitenhet om den sanne virkeligheten' },
    { term: 'Syllogisme', definition: 'Logisk argumentform med to premisser og en konklusjon' },
    { term: 'Dydsetikk', definition: 'Etisk teori som fokuserer på karakterdannelse og moralske dyder' },
    { term: 'Eudaimonia', definition: 'Aristotelisk begrep for lykke/blomstring; det gode liv' },
    { term: 'Den gylne middelvei', definition: 'Aristotelisk prinsipp om at dyd er middelvei mellom to ekstreme laster' },
  ],
};

export const CHAPTER_FILOSOFI_ETIKK_1_4: TextbookChapter = {
  id: 'filosofi-etikk-1-4',
  courseId: 'filosofi-etikk',
  chapterNumber: '1.4',
  title: 'Østlig filosofi',
  description: 'En reise gjennom asiatisk visdomstradisjon: Konfutsius, Laozi, Buddha og Ubuntu',
  estimatedMinutes: 20,
  competenceGoals: [
    'Kjenne til hovedtrekkene i konfutsiansk, taoistisk og buddhistisk filosofi',
    'Forstå forskjeller og likheter mellom vestlig og østlig filosofi',
    'Kjenne til Ubuntu-filosofien fra afrikansk tradisjon',
  ],
  content: [
    {
      id: 'fil-1-4-intro',
      type: 'text',
      content: `## Filosofi utenfor den greske tradisjonen

Mens de greske filosofene reflekterte i Athen, utviklet det seg like rike filosofiske tradisjoner i andre deler av verden. I Kina, India og Afrika blomstret visdomstradisjoner som stilte mange av de samme grunnleggende spørsmålene – men ofte med andre svar.

Østlig filosofi skiller seg fra vestlig på flere måter:
- **Mindre fokus på logisk abstraksjon**, mer på praktisk visdom for å leve godt
- **Helhetlig tenkning** – sammenheng mellom menneske, natur og kosmos
- **Etikk som livskunst** – filosofi som vei til harmoni og opplysning
- **Mindre skille mellom filosofi og religion** – ofte integrert i spirituelle tradisjoner

La oss utforske noen av de mest innflytelsesrike østlige filosofiske tradisjonene.`,
    },
    {
      id: 'fil-1-4-konfutsius',
      type: 'text',
      content: `### Konfutsius og konfutsianismen (Kina, ca. 551–479 f.Kr.)

Konfutsius (Kongzi) levde omtrent samtidig med Buddha og presokratikerne. Hans filosofi fokuserte på **etikk, sosiale relasjoner og god styring**.

**Ren (仁) – Medmenneskelig godhet**
Kjernen i Konfutsius' etikk er *ren* – ofte oversatt som kjærlighet, humanitet eller medmenneskelig godhet. Det handler om å behandle andre med omsorg og respekt.

**De fem relasjonene**
Samfunnet bygger på fem fundamentale relasjoner:
1. Hersker og undersått
2. Far og sønn
3. Eldre og yngre bror
4. Ektemann og hustru
5. Venn og venn

Hver relasjon har gjensidig plikter. En hersker skal være rettferdig; en undersått skal være lojal. En far skal være omsorgsfullt; en sønn skal vise respekt (*xiao* – filial fromhet).

**Li (禮) – Ritualer og passende oppførsel**
*Li* refererer til ritualer, etikette og sosiale normer. Konfutsius mente at å følge passende ritualer former karakter og skaper harmoni. Ytre form påvirker indre holdning.`,
    },
    {
      id: 'fil-1-4-konfutsius-eksempel',
      type: 'example',
      title: 'Den gylne regelen i konfutsiansk form',
      content: `En student spurte Konfutsius: "Er det ett ord som kan veilede ens handlinger hele livet?"

Konfutsius svarte: "*Shu* (gjensidighet): Gjør ikke mot andre hva du ikke vil at andre skal gjøre mot deg."

Dette ligner Jesu gylne regel, men Konfutsius formulerte det negativt – fokus på å unngå skade fremfor aktivt å gjøre godt. Begge peker likevel mot den samme grunnleggende etiske innsikten: empati og gjensidighet er fundamentet for moral.`,
    },
    {
      id: 'fil-1-4-oppgave-1',
      type: 'exercise',
      title: 'Konfutsianisme og sosiale roller',
    },
    {
      id: 'fil-1-4-taoisme',
      type: 'text',
      content: `### Laozi og taoismen (Kina, ca. 600 f.Kr.)

Hvis konfutsianismen fokuserer på sosiale plikter, fokuserer **taoismen** på harmoni med naturens vei.

**Tao (道) – Veien**
*Tao* betyr "vei" eller "bane", men peker mot noe dypere: den grunnleggende ordenen og rytmen i universet. Tao kan ikke fullt ut beskrives med ord – det er opprinnelsen og kilden til alt.

"Tao som kan beskrives er ikke den evige Tao.
Navnet som kan navngis er ikke det evige navnet."
– *Tao Te Ching*, åpningslinjer

**Wu wei (無為) – Handling uten handling**
Taoismens sentrale etiske prinsipp er *wu wei*: å handle i harmoni med Tao, uten å fremtvinge ting. Det handler ikke om passivitet, men om å handle naturlig, uten å kjempe mot tingenes natur.

Vann er taoismens store metafor: Det er mykt, men sliter ned stein. Det søker det laveste, men er uunnværlig. Det tilpasser seg, men er ustoppelig.`,
    },
    {
      id: 'fil-1-4-taoisme-eksempel',
      type: 'example',
      title: 'Wu wei i praksis',
      content: `**Hva wu wei IKKE er:**
- Lat dovenskap eller unnvikelse
- Mangel på handling

**Hva wu wei ER:**
- Å la ting utvikle seg naturlig når det er mulig
- Å handle når det er rett tid, ikke for tidlig eller for sent
- Å arbeide med, ikke mot, tingenes natur

**Eksempel**: En båt på en elv. En uerfaren padler desperat mot strømmen, sliter seg ut. En erfaren padler med strømmen, bruker elven til å nå sitt mål. Det er wu wei – effektivitet gjennom harmoni med naturlige krefter.`,
    },
    {
      id: 'fil-1-4-oppgave-2',
      type: 'exercise',
      title: 'Taoisme og vestlig filosofi',
    },
    {
      id: 'fil-1-4-buddhisme',
      type: 'text',
      content: `### Buddha og buddhismen (India/Nepal, ca. 563–483 f.Kr.)

Siddharta Gautama, kjent som Buddha ("den opplyste"), grunnla en av verdens store filosofiske og religiøse tradisjoner.

**De fire edle sannheter**
Buddhas kjernelære kan oppsummeres i fire prinsipper:

1. **Livet er lidelse (dukkha)**
Fødsel, alderdom, sykdom, død, å ikke få det man ønsker, å miste det man elsker – alle disse innebærer lidelse.

2. **Lidelsens årsak er begjær og hengivenhet (tanha)**
Vi lider fordi vi henger oss til ting som er forgjenglelige. Vi begjærer lyst, unngår smerte, og identifiserer oss med et "jeg" som egentlig ikke eksisterer som noe permanent.

3. **Lidelsen kan opphøre (nirvana)**
Det er mulig å bli fri fra lidelse ved å overvinne begjær og uvitenhet.

4. **Veien til frigjøring er den åttedelte sti**
En praktisk vei bestående av riktig forståelse, intensjon, tale, handling, levebrød, innsats, oppmerksomt nærvær og meditasjon.`,
    },
    {
      id: 'fil-1-4-buddhisme-metafysikk',
      type: 'text',
      content: `**Anatta – ikke-selv**
En av buddhismens mest radikale ideer er *anatta*: det finnes intet permanent selv eller sjel. Det vi kaller "jeg" er en konstant skiftende samling av erfaringer, følelser og tanker. Å tro på et permanent selv er en illusjon som fører til lidelse.

Dette står i skarp kontrast til mye vestlig filosofi og hinduismen, som ofte ser selvet som noe reelt og varig.

**Anicca – forgjengelighet**
Alt er i konstant endring. Ingenting varer. Dette ligner Heraklits "alt flyter", men hos Buddha er innsikten i forgjengelighet nøkkelen til frigjøring: Når vi forstår at ingenting varer, slutter vi å klynge oss til ting.

**Oppmerksomt nærvær (mindfulness)**
Buddhismen legger stor vekt på meditasjon og oppmerksomt nærvær – å være fullstendig til stede i øyeblikket, observere tanker og følelser uten å dømme eller klynge seg til dem.`,
    },
    {
      id: 'fil-1-4-oppgave-3',
      type: 'exercise',
      title: 'Buddhisme og vestlig filosofi',
    },
    {
      id: 'fil-1-4-ubuntu',
      type: 'text',
      content: `### Ubuntu – afrikansk filosofi

Mens vestlig filosofi ofte fokuserer på individet ("Jeg tenker, derfor er jeg"), og østlig filosofi på harmoni med natur/kosmos, fremhever afrikansk filosofi **fellesskapet**.

**Ubuntu**
Ubuntu er et begrep fra Bantu-språk i sørlige Afrika, ofte oversatt som "Jeg er fordi vi er" eller "En person er en person gjennom andre personer."

Kjernen i Ubuntu er at individets identitet og verdighet er uløselig knyttet til fellesskapet. Vi blir mennesker gjennom våre relasjoner til andre. Egoisme og isolasjon er derfor ikke bare umoralsk, men et angrep på vår egen menneskelighet.

**Ubuntu som etisk prinsipp**
Ubuntu-filosofien innebærer:
- **Gjensidighet**: Hva som påvirker én, påvirker alle
- **Solidaritet**: Fellesskapets velvære er hver enkelts ansvar
- **Medfølelse**: Å se den andre som fundamentalt lik deg selv
- **Verdighet**: Alle mennesker har iboende verdi

Ubuntu ble brukt som filosofisk grunnlag for Sør-Afrikas sannhets- og forsoningskommisjon etter apartheid. I stedet for hevn, søkte man restorative rettferdighet – å gjenopprette menneskeverd og fellesskap.`,
    },
    {
      id: 'fil-1-4-ubuntu-eksempel',
      type: 'example',
      title: 'Ubuntu i praksis',
      content: `Erkebiskop Desmond Tutu, som ledet sannhets- og forsoningskommisjonen, forklarte Ubuntu slik:

"En person med Ubuntu er åpen og tilgjengelig for andre, bekrefter andre, føler seg ikke truet av at andre er dyktige og gode, for han eller hun har en passende selvtillit som kommer fra å vite at de tilhører en større helhet og blir forminsket når andre blir ydmyket eller forminsket, når andre blir torturert eller undertrykt."

Ubuntu er ikke bare passiv empati, men aktiv anerkjennelse av vår sammenvevde menneskelighet.`,
    },
    {
      id: 'fil-1-4-oppgave-4',
      type: 'exercise',
      title: 'Ubuntu og vestlig individualisme',
    },
    {
      id: 'fil-1-4-sammenligning',
      type: 'text',
      content: `### Vestlig versus østlig filosofi – hovedtrekk

**Vestlig filosofi** (generalisert):
- Fokus på abstrakt logikk og konseptuell analyse
- Individet som grunnleggende enhet
- Skarpt skille mellom subjekt og objekt, sinn og materie
- Sannhet som overensstemmelse med virkeligheten

**Østlig filosofi** (generalisert):
- Fokus på praktisk visdom og livskunst
- Sammenheng og relasjon som grunnleggende
- Helhetlig tenkning – alt er forbundet
- Sannhet som noe som erfares, ikke bare forstås intellektuelt

**Viktig presisering:**
Dette er grove generaliseringer. Det finnes vestlige filosofer med helhetlig tenkning (Spinoza, Heidegger) og østlige filosofer med analytisk tilnærming (Nyaya-skolen i indisk filosofi). Poenget er å se at filosofi kan ta mange former, og at ulike kulturer har stilt de store spørsmålene på ulike måter.`,
    },
    {
      id: 'fil-1-4-relevans',
      type: 'text',
      content: `### Hvorfor studere østlig filosofi?

**1. Utvidet perspektiv**
Østlig filosofi utfordrer forutsetninger vi tar for gitt. Er selvet virkelig noe reelt og varig (som mange vestlige filosofer antok), eller er det en illusjon (som buddhismen hevder)?

**2. Praktisk visdom**
Konfutsianismens refleksjoner over sosiale dyder, taoismens tanker om å leve i harmoni, og buddhismens meditasjonspraksis tilbyr praktiske verktøy for å leve bedre.

**3. Globalisering**
I en sammenvevd verden er det viktig å forstå ulike tankesystemer. Økonomisk samarbeid med Kina krever forståelse av konfutsiansk sosial etikk. Fredsprosesser kan dra nytte av Ubuntu-tenkning.

**4. Tverrfaglig berikelse**
Østlig filosofi påvirker moderne psykologi (mindfulness), miljøetikk (taoistisk naturforståelse), og organisasjonsteori (konfutsiansk ledelse).`,
    },
    {
      id: 'fil-1-4-oppgave-5',
      type: 'exercise',
      title: 'Samleoppgave: Østlig filosofi på moderne dilemmaer',
    },
    {
      id: 'fil-1-4-oppsummering',
      type: 'text',
      content: `### Oppsummering

Østlig filosofi representerer rike tradisjoner med egne svar på filosofiens grunnspørsmål:

**Konfutsianismen** fokuserer på etikk, sosiale relasjoner og god styring. Nøkkelbegreper er *ren* (medmenneskelig godhet) og *li* (ritualer og passende oppførsel).

**Taoismen** søker harmoni med Tao – universets grunnleggende vei. *Wu wei* (handling uten handling) innebærer å arbeide med, ikke mot, tingenes natur.

**Buddhismen** lærer at livet er lidelse forårsaket av begjær, og at frigjøring er mulig gjennom den åttedelte sti. Sentrale ideer er *anatta* (ikke-selv) og *anicca* (forgjengelighet).

**Ubuntu** fra afrikansk filosofi fremhever fellesskapet: "Jeg er fordi vi er." Vår menneskelighet realiseres gjennom relasjoner.

Disse tradisjonene utfyller vestlig filosofi og gir oss rikere verktøy for å forstå eksistens, etikk og mening.`,
    },
  ],
  exercises: [
    {
      id: 'fil-1-4-ex-1',
      type: 'multiple-choice',
      question: 'Hva er kjernen i Konfutsius\' etikk?',
      options: [
        'Wu wei – handling uten handling',
        'Ren – medmenneskelig godhet og omsorg',
        'Anatta – læren om ikke-selv',
        'Ubuntu – jeg er fordi vi er',
      ],
      correctAnswer: 1,
      explanation: 'Ren (仁) er det sentrale begrepet i konfutsiansk etikk. Det refererer til medmenneskelig godhet, omsorg og respekt i sosiale relasjoner.',
    },
    {
      id: 'fil-1-4-ex-2',
      type: 'multiple-choice',
      question: 'Hva betyr "wu wei" i taoismen?',
      options: [
        'Meditasjon og indre fred',
        'Handling uten handling – å arbeide i harmoni med tingenes natur',
        'Sosiale plikter og ritualer',
        'Frigjøring fra lidelse',
      ],
      correctAnswer: 1,
      explanation: 'Wu wei (無為) betyr "handling uten handling" – ikke passivitet, men å handle effektivt ved å være i harmoni med Tao, universets naturlige vei.',
    },
    {
      id: 'fil-1-4-ex-3',
      type: 'classic',
      question: 'Forklar buddhismens lære om "anatta" (ikke-selv). Hvordan skiller denne seg fra vestlige oppfatninger av selvet?',
      points: 3,
      hint: 'Tenk på hva vestlige filosofer som Descartes ("Jeg tenker, derfor er jeg") sier om selvet, og hvordan Buddha utfordrer ideen om et permanent jeg.',
    },
    {
      id: 'fil-1-4-ex-4',
      type: 'classic',
      question: 'Ubuntu-filosofien sier "Jeg er fordi vi er." Hvordan skiller denne tilnærmingen til identitet seg fra vestlig individualisme? Gi et eksempel på hvordan Ubuntu kan påvirke etiske valg.',
      points: 4,
      hint: 'Tenk på hvordan vestlig kultur ofte ser individet som primært, mens Ubuntu ser fellesskapet som grunnlaget for identitet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-1-4-ex-5',
      type: 'classic',
      question: 'Klimakrisen er en global utfordring. Diskuter hvordan henholdsvis taoistisk naturforståelse (harmoni med Tao) og Ubuntu-filosofi (vi er alle forbundet) kan gi nye perspektiver på miljøetikk sammenlignet med tradisjonell vestlig individualistisk tilnærming.',
      points: 5,
      hint: 'Tenk på hvordan taoisme ser mennesker som del av naturen (ikke herskere over den), og hvordan Ubuntu peker på at skade på naturen skader fellesskapet.',
    },
  ],
  keyTerms: [
    { term: 'Konfutsianisme', definition: 'Kinesisk filosofi fokusert på etikk, sosiale relasjoner og god styring' },
    { term: 'Ren', definition: 'Konfutsiansk begrep for medmenneskelig godhet, omsorg, humanitet' },
    { term: 'Li', definition: 'Ritualer og passende oppførsel i konfutsianismen' },
    { term: 'Taoisme', definition: 'Kinesisk filosofi fokusert på harmoni med Tao, universets naturlige vei' },
    { term: 'Wu wei', definition: 'Handling uten handling; å handle i harmoni med tingenes natur' },
    { term: 'Buddhisme', definition: 'Filosofisk og religiøs tradisjon grunnlagt av Buddha, fokusert på frigjøring fra lidelse' },
    { term: 'Anatta', definition: 'Buddhistisk lære om ikke-selv; det finnes intet permanent jeg' },
    { term: 'Ubuntu', definition: 'Afrikansk filosofi: "Jeg er fordi vi er" – menneskelig identitet gjennom fellesskap' },
  ],
};

export const CHAPTER_FILOSOFI_ETIKK_1_5: TextbookChapter = {
  id: 'filosofi-etikk-1-5',
  courseId: 'filosofi-etikk',
  chapterNumber: '1.5',
  title: 'Filosofiske metoder',
  description: 'Verktøy for filosofisk tenkning: tankeeksperimenter, begrepsanalyse, dialektikk og fenomenologi',
  estimatedMinutes: 20,
  competenceGoals: [
    'Kjenne til og kunne anvende sentrale filosofiske metoder',
    'Forstå hvordan tankeeksperimenter kan teste intuisjoner og teorier',
    'Utvikle ferdigheter i begrepsanalyse og argumentasjon',
  ],
  content: [
    {
      id: 'fil-1-5-intro',
      type: 'text',
      content: `## Hvordan jobber filosofer?

Filosofi handler ikke bare om hva man tenker, men også **hvordan** man tenker. Filosofer har gjennom tidene utviklet en verktøykasse av metoder for å utforske vanskelige spørsmål.

Mens vitenskapen bruker eksperimenter og observasjon, bruker filosofien primært:
- **Tankeeksperimenter** – imaginære scenarier som tester intuisjoner
- **Begrepsanalyse** – nøye undersøkelse av begrepers betydning
- **Dialektikk** – utvikling av ideer gjennom debatt og motsetninger
- **Fenomenologi** – systematisk beskrivelse av erfaring

Disse metodene overlapper, og de fleste filosofiske undersøkelser bruker flere samtidig. La oss utforske hver metode.`,
    },
    {
      id: 'fil-1-5-tankeeksperimenter',
      type: 'text',
      content: `### Tankeeksperimenter

Et **tankeeksperiment** er et imaginært scenario designet for å teste en teori, avdekke forutsetninger, eller utforske implikasjoner av en idé.

**Hvorfor tankeeksperimenter?**
Mange filosofiske spørsmål kan ikke undersøkes empirisk. Vi kan ikke gjennomføre eksperimenter på hva som er rettferdig, eller observere om vi har fri vilje. Men vi kan forestille oss scenarier som klargjør våre intuisjoner.

**Platons hulelikning** (som vi møtte tidligere) er et klassisk tankeeksperiment. Den utforsker forholdet mellom sansing og kunnskap uten å måtte bygge en faktisk hule med fanger.`,
    },
    {
      id: 'fil-1-5-trolley',
      type: 'example',
      title: 'Trolleyproblemet',
      content: `**Scenario 1: Sporveiskifte**
En vognfører på en sporvogn har mistet kontrollen. Vognen ruller mot fem personer bundet til sporet. Du står ved en spake som kan skifte sporet til et sidespor, der bare én person er bundet. Hva bør du gjøre?

De fleste intuitivt føler at det er riktig å skifte sporet – én død er bedre enn fem.

**Scenario 2: Broen**
Samme situasjon, men nå står du på en bro over sporet sammen med en stor person. Den eneste måten å stoppe vognen og redde de fem, er å dytte den store personen ned på sporet (de vil dø, men stoppe vognen). Hva bør du gjøre?

De fleste føler at det er galt å dytte personen – selv om resultatet er det samme (én dør, fem reddes).

**Hva viser dette?**
Våre etiske intuisjoner er komplekse. Vi bryr oss ikke bare om konsekvenser, men også om hvordan vi forårsaker ting (handling versus unnlatelse, direkte versus indirekte). Tankeeksperimentet tvinger oss til å reflektere over hvilke prinsipper som egentlig styrer våre moralske dommer.`,
    },
    {
      id: 'fil-1-5-oppgave-1',
      type: 'exercise',
      title: 'Analysere et tankeeksperiment',
    },
    {
      id: 'fil-1-5-flere-tankeeksperimenter',
      type: 'text',
      content: `**Kinesisk rom (John Searle)**
En person som ikke kan kinesisk, sitter i et rom med en regelbok for å manipulere kinesiske symboler. Utenfor rommet sender noen inn spørsmål på kinesisk. Personen bruker regelboken til å generere svar – som på kinesisk ser perfekte ut. Men forstår personen kinesisk?

Dette utforsker spørsmålet: Kan datamaskiner virkelig tenke, eller bare simulere tenkning?

**Hjernen i tanken (Hilary Putnam)**
Forestill deg at du egentlig er en hjerne i en tank, koblet til en datamaskin som simulerer alle sanseinntrykkene dine. Hvordan kan du vite at du ikke er det?

Dette reiser skeptiske spørsmål om kunnskap og virkelighet.

**Det erfarne rommet (Frank Jackson)**
Mary er en vitenskapsmann som har levd hele livet i et sort-hvitt rom. Hun vet alt det er å vite om fysikken bak farger – bølgelengder, hjerneprosesser, alt. Men hun har aldri sett farger. En dag forlater hun rommet og ser rødt for første gang. Lærer hun noe nytt?

Dette utforsker forholdet mellom vitenskapelig kunnskap og subjektiv erfaring.`,
    },
    {
      id: 'fil-1-5-oppgave-2',
      type: 'exercise',
      title: 'Skape eget tankeeksperiment',
    },
    {
      id: 'fil-1-5-begrepsanalyse',
      type: 'text',
      content: `### Begrepsanalyse

**Begrepsanalyse** er metoden for å undersøke betydningen, bruken og implikasjonene av sentrale begreper.

**Hvorfor begrepsanalyse?**
Mange filosofiske debatter bunner i uenighet om hva begreper betyr. Er abort "drap"? Er kapitalisme "rettferdig"? Er kunstig intelligens "bevissthet"? Før vi kan svare, må vi klargjøre hva vi mener med disse begrepene.

**Metode:**
1. **Identifiser begrepet** som skal analyseres
2. **Foreslå en definisjon** basert på normal bruk
3. **Test definisjonen** med eksempler og moteksempler
4. **Rafiner definisjonen** for å håndtere problematiske tilfeller
5. **Utforsk implikasjoner** av den reviderte forståelsen`,
    },
    {
      id: 'fil-1-5-begrepsanalyse-eksempel',
      type: 'example',
      title: 'Begrepsanalyse av "kunnskap"',
      content: `**Første forsøk**: Kunnskap er sann tro.
**Problem**: Hvis du gjetter riktig på en flervalgsoppgave, har du sann tro, men ikke kunnskap.

**Andre forsøk**: Kunnskap er velgrunnet sann tro.
**Problem** (Gettier-problem): Forestill deg at du ser en klokke som viser 12:00, og du danner troen "Klokken er 12:00." Troen er sann (det er faktisk 12:00), og velgrunnet (du så på klokken). Men klokken er stoppet og har vist 12:00 i dager. Har du kunnskap?

Denne analysen viser at kunnskap er mer komplekst enn "velgrunnet sann tro" – det må være en passende forbindelse mellom troen og sannheten. Begrepsanalyse hjelper oss å raffinere vår forståelse.`,
    },
    {
      id: 'fil-1-5-oppgave-3',
      type: 'exercise',
      title: 'Begrepsanalyse',
    },
    {
      id: 'fil-1-5-dialektikk',
      type: 'text',
      content: `### Dialektikk

**Dialektikk** refererer til utviklingen av ideer gjennom debatt, motsetning og syntese.

**Sokratisk dialektikk**
Som vi så tidligere, brukte Sokrates dialog for å nå sannheten. Gjennom spørsmål og svar avdekkes motsetninger, og bedre forståelse oppnås.

**Hegeliansk dialektikk**
Den tyske filosofen Hegel (1770–1831) beskrev en prosess:
- **Tese**: En idé eller påstand
- **Antitese**: Motsigelsen eller negasjonen av tesen
- **Syntese**: En høyere forståelse som integrerer sannheten i begge

**Eksempel**:
- **Tese**: Frihet er å gjøre hva man vil
- **Antitese**: Frihet er å følge rasjonelle lover
- **Syntese**: Frihet er å velge å følge rasjonelle lover man selv kan godta

Dialektikk viser at sannhet ofte ikke finnes i den ene eller den andre ytterligheten, men i en integrering som overstiger begge.`,
    },
    {
      id: 'fil-1-5-dialektikk-praksis',
      type: 'example',
      title: 'Dialektikk i praksis',
      content: `**Debatt om utdanning:**
- **Tese**: Utdanning handler om å lære fakta
- **Antitese**: Utdanning handler om å utvikle kritisk tenkning
- **Syntese**: Utdanning handler om å lære fakta som grunnlag for å utvikle kritisk tenkning

**Debatt om straff:**
- **Tese**: Straff skal rehabilitere
- **Antitese**: Straff skal være gjengjeldelse
- **Syntese**: Straff skal balansere rettferdighet (gjengjeldelse) med rehabilitering og samfunnssikkerhet

Dialektikk viser at mange filosofiske debatter fremskyndes ved å integrere, ikke bare velge mellom, motsatte perspektiver.`,
    },
    {
      id: 'fil-1-5-oppgave-4',
      type: 'exercise',
      title: 'Dialektisk analyse',
    },
    {
      id: 'fil-1-5-fenomenologi',
      type: 'text',
      content: `### Fenomenologi

**Fenomenologi** er metoden for å systematisk beskrive hvordan ting fremstår for bevisstheten, uten forutsetninger om hva som er objektivt sant.

Grunnlagt av Edmund Husserl (1859–1938), søker fenomenologi å undersøke strukturene i erfaring selv. Ikke "Hva er verden?", men "Hvordan erfarer vi verden?"

**Metode:**
1. **Epoke** (bracking): Sette i parentes våre forutsetninger om hva som er objektivt sant
2. **Beskrivelse**: Nøye beskrive hvordan fenomener fremstår i erfaring
3. **Essensiell analyse**: Identifisere de essensielle strukturene i erfaringen

**Eksempel:**
Hvordan erfarer vi tid? Vi opplever ikke bare "nå", men også umiddelbart fortid (retensjon) og forventet fremtid (protensjon). Når du hører en melodi, erfarer du ikke bare den nåværende tonen, men også de foregående tonene (som glir bort) og forventningen om neste tone. Dette er tidens fenomenologi.`,
    },
    {
      id: 'fil-1-5-fenomenologi-relevans',
      type: 'text',
      content: `**Heidegger og eksistensiell fenomenologi**
Martin Heidegger (1889–1976) utvidet fenomenologien til å undersøke menneskets eksistens (*Dasein*). Hvordan erfarer vi å være til? Hvordan relaterer vi oss til død, angst, valg?

**Anvendelse:**
Fenomenologi har påvirket psykologi, sosiologi, medisin og kunstteori. Når psykologer studerer opplevelsen av angst, sykepleierleidere studerer pasientens erfaring av sykdom, eller kunstfilosofer studerer estetisk erfaring, bruker de fenomenologiske metoder.

**Forskjell fra tradisjonell filosofi:**
Mens mye filosofi starter med abstrakte prinsipper, starter fenomenologi med konkret erfaring. Ikke "Hva er sannheten om tid?", men "Hvordan erfarer vi tid?"`,
    },
    {
      id: 'fil-1-5-oppgave-5',
      type: 'exercise',
      title: 'Fenomenologisk beskrivelse',
    },
    {
      id: 'fil-1-5-kombinasjon',
      type: 'text',
      content: `### Metodene i samspill

I praksis kombinerer filosofer ofte flere metoder:

- **Begrepsanalyse** + **tankeeksperimenter**: Analysere "kunnskap" ved å teste definisjonen mot imaginære scenarier
- **Dialektikk** + **begrepsanalyse**: Utvikle forståelsen av "frihet" gjennom å integrere motsetninger
- **Fenomenologi** + **begrepsanalyse**: Forstå "angst" ved både å analysere begrepet og beskrive hvordan angst erfares

Det finnes ikke én "riktig" filosofisk metode, men et sett av verktøy som kan anvendes avhengig av spørsmålet.

**Hva gjør en god filosofisk analyse?**
- **Klarhet**: Tydelige definisjoner og argumenter
- **Rigorositet**: Nøye resonnering som unngår logiske feilslutninger
- **Kreativitet**: Evne til å se nye perspektiver og koble ulike ideer
- **Åpenhet**: Villighet til å revidere syn når bedre argumenter fremkommer`,
    },
    {
      id: 'fil-1-5-oppgave-6',
      type: 'exercise',
      title: 'Samleoppgave: Anvendelse av flere metoder',
    },
    {
      id: 'fil-1-5-oppsummering',
      type: 'text',
      content: `### Oppsummering

Filosofiske metoder gir oss verktøy for å utforske vanskelige spørsmål systematisk:

**Tankeeksperimenter** bruker imaginære scenarier for å teste teorier og avdekke intuisjoner. Trolleyproblemet, kinesisk rom, og hjernen i tanken er klassiske eksempler.

**Begrepsanalyse** undersøker betydningen av sentrale begreper gjennom definisjon, testing med eksempler, og raffinering. Analysen av "kunnskap" illustrerer metoden.

**Dialektikk** utvikler ideer gjennom tese, antitese og syntese – å integrere innsikter fra motsatte perspektiver til en dypere forståelse.

**Fenomenologi** beskriver systematisk hvordan fenomener fremstår i erfaring, uten forutsetninger om objektiv sannhet.

Å mestre disse metodene gjør oss bedre til å tenke kritisk, analysere argumenter, og utforske filosofiske spørsmål – både klassiske og samtidige.`,
    },
  ],
  exercises: [
    {
      id: 'fil-1-5-ex-1',
      type: 'multiple-choice',
      question: 'Hva er hovedformålet med et filosofisk tankeeksperiment?',
      options: [
        'Å bevise en teori eksperimentelt',
        'Å teste intuisjoner og utforske implikasjoner av ideer gjennom imaginære scenarier',
        'Å samle empiriske data',
        'Å beskrive hvordan ting faktisk er',
      ],
      correctAnswer: 1,
      explanation: 'Tankeeksperimenter bruker imaginære scenarier for å teste teorier, avdekke forutsetninger og klargjøre intuisjoner uten å gjennomføre faktiske eksperimenter.',
    },
    {
      id: 'fil-1-5-ex-2',
      type: 'multiple-choice',
      question: 'Hva menes med "dialektikk" i filosofisk sammenheng?',
      options: [
        'En metode for å samle empiriske data',
        'Utvikling av ideer gjennom motsetning og syntese',
        'Beskrivelse av subjektiv erfaring',
        'Logisk resonnering med syllogismer',
      ],
      correctAnswer: 1,
      explanation: 'Dialektikk er en metode der ideer utvikles gjennom konfrontasjon mellom tese og antitese, som leder til en syntese som integrerer innsikter fra begge.',
    },
    {
      id: 'fil-1-5-ex-3',
      type: 'classic',
      question: 'Gjennomfør en begrepsanalyse av ordet "frihet". Foreslå en definisjon, test den med eksempler, og rafiner den basert på eventuelle problemer du finner.',
      points: 4,
      hint: 'Start enkelt (kanskje "å kunne gjøre hva man vil"), og test mot situasjoner som fengsling, sosiale forventninger, indre tvang (avhengighet).',
    },
    {
      id: 'fil-1-5-ex-4',
      type: 'classic',
      question: 'Bruk dialektisk metode på følgende: Tese: "Sosiale medier gjør oss mer forbundet." Antitese: "Sosiale medier gjør oss mer isolerte." Formuler en syntese som integrerer sannheten i begge påstander.',
      points: 4,
      hint: 'Tenk på i hvilken forstand begge kan være sanne samtidig, og hva en dypere forståelse ville vektlegge.',
    },
    {
      id: 'fil-1-5-ex-5',
      type: 'classic',
      question: 'Skriv en fenomenologisk beskrivelse av opplevelsen av å vente. Hvordan erfares tid? Hva kjennetegner bevisstheten i denne tilstanden? Forsøk å sette i parentes hva som objektivt skjer, og fokuser på hvordan det oppleves.',
      points: 4,
      hint: 'Tenk på hvordan tid "trekker seg ut", hvordan oppmerksomheten rettes mot fremtiden, og hvordan nåtiden kan føles tom eller fylt med rastløshet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'fil-1-5-ex-6',
      type: 'classic',
      question: 'Velg et aktuelt etisk dilemma (f.eks. bruk av ansiktsgjenkjenning, klimakvoter, eller genredigering). Anvend minst to av de filosofiske metodene vi har lært (tankeeksperiment, begrepsanalyse, dialektikk, fenomenologi) for å utforske problemstillingen. Vis tydelig hvordan hver metode bidrar til en dypere forståelse.',
      points: 6,
      hint: 'For eksempel: Bruk begrepsanalyse på "personvern", deretter et tankeeksperiment for å teste grenser, og til slutt dialektikk for å integrere motsetninger mellom sikkerhet og frihet.',
    },
  ],
  keyTerms: [
    { term: 'Tankeeksperiment', definition: 'Imaginært scenario designet for å teste teorier eller utforske filosofiske intuisjoner' },
    { term: 'Begrepsanalyse', definition: 'Filosofisk metode for å undersøke betydningen og implikasjonene av sentrale begreper' },
    { term: 'Dialektikk', definition: 'Utvikling av ideer gjennom tese, antitese og syntese' },
    { term: 'Fenomenologi', definition: 'Filosofisk metode som systematisk beskriver hvordan fenomener fremstår i erfaring' },
    { term: 'Epoke', definition: 'Fenomenologisk praksis: å sette i parentes forutsetninger om objektiv virkelighet' },
    { term: 'Trolleyproblemet', definition: 'Klassisk tankeeksperiment som utforsker etiske intuisjoner om handling versus unnlatelse' },
  ],
};

export const FILOSOFI_ETIKK_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FILOSOFI_ETIKK_1_1,
  CHAPTER_FILOSOFI_ETIKK_1_2,
  CHAPTER_FILOSOFI_ETIKK_1_3,
  CHAPTER_FILOSOFI_ETIKK_1_4,
  CHAPTER_FILOSOFI_ETIKK_1_5,
];
