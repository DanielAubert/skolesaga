/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Økonomi og ledelse (VG2 programfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Introduksjon til økonomi og ledelse
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_1_1: TextbookChapter = {
  id: 'okonomi-ledelse-1-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '1.1',
  title: 'Introduksjon til økonomi og ledelse',
  description: 'Lær om grunnleggende begreper innen økonomi og ledelse, og hvordan disse fagområdene henger sammen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for sentrale begreper innen økonomi og ledelse',
    'forklare sammenhengen mellom økonomi og ledelse i en virksomhet'
  ],
  content: [
    {
      id: 'okonomi-ledelse-1-1-intro',
      type: 'text',
      content: `Økonomi og ledelse er to fagområder som henger tett sammen. For at en virksomhet skal lykkes, må den både ha god økonomistyring og god ledelse. I dette kapitlet skal vi se nærmere på hva disse begrepene innebærer og hvordan de påvirker hverandre.`
    },
    {
      id: 'okonomi-ledelse-1-1-def-okonomi',
      type: 'definition',
      title: 'Økonomi',
      content: `**Økonomi** handler om hvordan vi forvalter knappe ressurser for å dekke menneskelige behov. I en bedriftssammenheng dreier det seg om hvordan virksomheten skaffer seg inntekter, disponerer ressurser og styrer kostnader for å oppnå lønnsomhet.`
    },
    {
      id: 'okonomi-ledelse-1-1-def-ledelse',
      type: 'definition',
      title: 'Ledelse',
      content: `**Ledelse** er prosessen med å påvirke andre mennesker til å arbeide mot felles mål. En leder planlegger, organiserer, motiverer og kontrollerer aktiviteter for å nå virksomhetens mål.`
    },
    {
      id: 'okonomi-ledelse-1-1-text-sammenheng',
      type: 'text',
      title: 'Sammenhengen mellom økonomi og ledelse',
      content: `God ledelse er en forutsetning for god økonomi. En dyktig leder:

- Setter klare mål og strategier
- Motiverer medarbeidere til å yte sitt beste
- Tar gode beslutninger basert på økonomisk informasjon
- Sikrer effektiv ressursutnyttelse
- Skaper et godt arbeidsmiljø som reduserer sykefravær og turnover

Samtidig påvirker økonomien ledelsens handlingsrom. Med god økonomi kan ledelsen investere i kompetanseutvikling, nye produkter og bedre arbeidsforhold.`
    },
    {
      id: 'okonomi-ledelse-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Bakeriets utfordringer',
      problem: 'Et lite bakeri har tre ansatte og en daglig leder. Bak-Erik har vært daglig leder i fem år. De siste årene har omsetningen gått ned, og flere ansatte har sluttet. Hvordan kan Bak-Erik bruke kunnskap om økonomi og ledelse for å snu utviklingen?',
      solution: `**Løsning:**

Bak-Erik kan ta grep både innen økonomi og ledelse:

**Økonomiske tiltak:**
- Analysere hvilke produkter som er mest lønnsomme
- Redusere svinn og matavfall
- Forhandle bedre innkjøpsavtaler
- Vurdere prisendringer

**Ledelsestiltak:**
- Gjennomføre medarbeidersamtaler for å forstå hvorfor folk slutter
- Forbedre arbeidsmiljøet
- Gi ansatte mer ansvar og innflytelse
- Innføre bonusordninger knyttet til resultater

Ved å kombinere god økonomistyring med god ledelse, kan bakeriet øke både lønnsomhet og medarbeidertilfredshet.`
    },
    {
      id: 'okonomi-ledelse-1-1-text-virksomhetstyper',
      type: 'text',
      title: 'Ulike typer virksomheter',
      content: `Virksomheter kan deles inn på flere måter:

**Etter eierskap:**
- **Private virksomheter** - eid av privatpersoner eller selskaper
- **Offentlige virksomheter** - eid av stat, fylkeskommune eller kommune
- **Ideelle virksomheter** - frivillige organisasjoner uten profittmål

**Etter størrelse:**
- **Små bedrifter** - under 20 ansatte
- **Mellomstore bedrifter** - 20-100 ansatte
- **Store bedrifter** - over 100 ansatte

**Etter bransje:**
- Primærnæringer (jordbruk, fiske, skogbruk)
- Sekundærnæringer (industri, bygg og anlegg)
- Tertiærnæringer (handel, tjenester)`
    },
    {
      id: 'okonomi-ledelse-1-1-def-interessenter',
      type: 'definition',
      title: 'Interessenter',
      content: `**Interessenter** er alle personer, grupper og organisasjoner som påvirkes av eller kan påvirke virksomheten. Viktige interessenter er:

- **Eiere** - ønsker avkastning på investert kapital
- **Ansatte** - ønsker lønn, trygghet og et godt arbeidsmiljø
- **Kunder** - ønsker gode produkter til riktig pris
- **Leverandører** - ønsker stabile kundeforhold og betaling
- **Samfunnet** - ønsker arbeidsplasser, skatteinntekter og miljøhensyn`
    },
    {
      id: 'okonomi-ledelse-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om økonomi og ledelse',
        subTasks: [
          { label: 'a', task: 'Hva mener vi med økonomi i en bedriftssammenheng?', solution: 'Økonomi i en bedriftssammenheng handler om hvordan virksomheten skaffer seg inntekter, disponerer ressurser og styrer kostnader for å oppnå lønnsomhet.' },
          { label: 'b', task: 'Nevn tre viktige oppgaver for en leder.', solution: 'Tre viktige oppgaver for en leder er: 1) Planlegge aktiviteter og sette mål, 2) Motivere medarbeidere, 3) Ta beslutninger og kontrollere at mål nås.' },
          { label: 'c', task: 'Hvorfor er god ledelse viktig for økonomien?', solution: 'God ledelse er viktig for økonomien fordi motiverte medarbeidere yter mer, gode beslutninger gir bedre ressursutnyttelse, og et godt arbeidsmiljø reduserer sykefravær og turnover.' }
        ],
        hints: ['Se definisjonene av økonomi og ledelse', 'Tenk på hvordan ledelse påvirker medarbeidernes innsats'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk på en virksomhet du kjenner til (for eksempel en lokal butikk, et idrettslag eller en bedrift der noen du kjenner jobber).',
        subTasks: [
          { label: 'a', task: 'Hvilken type virksomhet er det (privat, offentlig eller ideell)?', solution: 'Svaret avhenger av hvilken virksomhet eleven velger. Eksempel: En lokal dagligvarebutikk er en privat virksomhet.' },
          { label: 'b', task: 'Hvem er de viktigste interessentene til denne virksomheten?', solution: 'De viktigste interessentene varierer, men typiske eksempler er: eiere, ansatte, kunder, leverandører og lokalsamfunnet.' },
          { label: 'c', task: 'Hvordan tror du god ledelse kan bidra til bedre økonomi i denne virksomheten?', solution: 'God ledelse kan bidra til bedre økonomi gjennom økt motivasjon blant ansatte, bedre kundeservice, mer effektiv drift og lavere kostnader knyttet til sykefravær og turnover.' }
        ],
        hints: ['Tenk på hvem som eier virksomheten', 'Hvem blir påvirket av det virksomheten gjør?'],
        solution: 'Se deloppgavene for veiledende svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-1-1-note-1',
      type: 'note',
      title: 'Visste du at...',
      content: `I Norge er over 99 % av alle bedrifter små og mellomstore bedrifter (SMB). Disse står for omtrent halvparten av verdiskapingen i privat sektor og sysselsetter rundt 47 % av arbeidstakerne i privat næringsliv.`
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 2: Organisasjon og organisering
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_2_1: TextbookChapter = {
  id: 'okonomi-ledelse-2-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '2.1',
  title: 'Organisasjon og organisering',
  description: 'Lær om hvordan virksomheter organiseres, ulike organisasjonsstrukturer og organisasjonskultur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for ulike måter å organisere en virksomhet på',
    'forklare fordeler og ulemper med ulike organisasjonsstrukturer',
    'beskrive hva organisasjonskultur er og hvorfor den er viktig'
  ],
  content: [
    {
      id: 'okonomi-ledelse-2-1-intro',
      type: 'text',
      content: `En organisasjon er en gruppe mennesker som arbeider sammen for å nå felles mål. Måten organisasjonen er strukturert på, påvirker hvordan arbeidet utføres, hvordan beslutninger tas og hvordan informasjon flyter. I dette kapitlet skal vi se på ulike måter å organisere en virksomhet på.`
    },
    {
      id: 'okonomi-ledelse-2-1-def-organisasjon',
      type: 'definition',
      title: 'Organisasjon',
      content: `En **organisasjon** er et sosialt system som er bevisst konstruert for å løse bestemte oppgaver og realisere bestemte mål. En organisasjon kjennetegnes av:

- Medlemmer som arbeider sammen
- Felles mål
- Arbeidsdeling og koordinering
- Regler og rutiner`
    },
    {
      id: 'okonomi-ledelse-2-1-text-struktur',
      type: 'text',
      title: 'Organisasjonsstruktur',
      content: `**Organisasjonsstrukturen** viser hvordan en virksomhet er bygd opp. Den forteller oss:

- Hvem som rapporterer til hvem (kommandolinjer)
- Hvordan oppgaver er fordelt
- Hvor mange nivåer det er i hierarkiet
- Hvor mye myndighet som er delegert nedover

Organisasjonsstrukturen fremstilles ofte i et **organisasjonskart** som viser de formelle relasjonene mellom ulike stillinger og avdelinger.`
    },
    {
      id: 'okonomi-ledelse-2-1-def-linjeorg',
      type: 'definition',
      title: 'Linjeorganisasjon',
      content: `En **linjeorganisasjon** er den enkleste organisasjonsformen. Den har klare kommandolinjer fra topp til bunn. Hver ansatt har kun én overordnet å forholde seg til.

**Fordeler:**
- Klare ansvarsforhold
- Enkel å forstå
- Rask beslutningstaking

**Ulemper:**
- Kan bli byråkratisk i store organisasjoner
- Lite fleksibel
- Begrenset spesialisering`
    },
    {
      id: 'okonomi-ledelse-2-1-def-funksjonsorg',
      type: 'definition',
      title: 'Funksjonsorganisasjon',
      content: `I en **funksjonsorganisasjon** er virksomheten delt inn etter funksjon eller fagområde, for eksempel økonomi, salg, produksjon og personal.

**Fordeler:**
- Høy grad av spesialisering
- Effektiv utnyttelse av kompetanse
- Stordriftsfordeler innen hver funksjon

**Ulemper:**
- Kan gi "silotenkning" mellom avdelinger
- Koordinering på tvers kan være vanskelig
- Uklart hvem som har ansvar for helhetlig resultat`
    },
    {
      id: 'okonomi-ledelse-2-1-def-divisjonsorg',
      type: 'definition',
      title: 'Divisjonsorganisasjon',
      content: `I en **divisjonsorganisasjon** er virksomheten delt inn etter produkt, marked eller geografi. Hver divisjon har ansvar for sitt eget resultat.

**Fordeler:**
- Klar resultatansvar
- Nærhet til kunder og marked
- Fleksibilitet og rask tilpasning

**Ulemper:**
- Dobbeltarbeid mellom divisjoner
- Konkurranse om ressurser internt
- Vanskelig å utnytte stordriftsfordeler`
    },
    {
      id: 'okonomi-ledelse-2-1-def-matriseorg',
      type: 'definition',
      title: 'Matriseorganisasjon',
      content: `En **matriseorganisasjon** kombinerer funksjons- og divisjonsorganisering. Medarbeidere rapporterer både til en funksjonsleder og en prosjekt- eller produktleder.

**Fordeler:**
- Fleksibel ressursutnyttelse
- God kompetanseutnyttelse
- Fokus på både funksjon og produkt

**Ulemper:**
- Kan gi uklare ansvarsforhold
- Krever mye koordinering
- Ansatte kan oppleve krysspress`
    },
    {
      id: 'okonomi-ledelse-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Velge organisasjonsstruktur',
      problem: 'En IT-bedrift med 50 ansatte utvikler programvare for ulike bransjer (bank, helse og handel). De vurderer å endre fra funksjonsorganisering til divisjonsorganisering. Hva er fordeler og ulemper med dette?',
      solution: `**Løsning:**

**Fordeler med å endre til divisjonsorganisering:**
- Hver divisjon kan spesialisere seg på sin bransje
- Tettere kontakt med kundene i hver bransje
- Klart resultatansvar for hver divisjon
- Raskere tilpasning til bransjespesifikke behov

**Ulemper:**
- Må kanskje ansette flere med samme kompetanse i ulike divisjoner
- Vanskeligere å dele teknisk kompetanse på tvers
- Kan miste stordriftsfordeler i for eksempel innkjøp
- Krever ledere med bransjekunnskap til hver divisjon

**Konklusjon:** Divisjonsorganisering kan være fornuftig dersom bransjene er svært ulike og krever spesialisert kompetanse. Hvis mye av teknologien er felles, kan en matriseorganisering være et alternativ.`
    },
    {
      id: 'okonomi-ledelse-2-1-text-kultur',
      type: 'text',
      title: 'Organisasjonskultur',
      content: `**Organisasjonskultur** er de felles verdier, normer, holdninger og antakelser som preger en organisasjon. Kulturen påvirker hvordan folk oppfører seg, hvordan beslutninger tas og hvordan problemer løses.

Kulturen kan beskrives som "slik gjør vi det her hos oss". Den omfatter både synlige elementer (logoer, kontorutforming, kleskode) og usynlige elementer (verdier, holdninger, antakelser).`
    },
    {
      id: 'okonomi-ledelse-2-1-def-kulturtyper',
      type: 'definition',
      title: 'Fire kulturtyper',
      content: `Forskning har identifisert fire hovedtyper av organisasjonskultur:

**1. Klankultur** - Fokus på samarbeid, teamarbeid og medarbeidertilfredshet. Lederen er en mentor.

**2. Adhokrati-kultur** - Fokus på innovasjon, kreativitet og risikotaking. Lederen er en entreprenør.

**3. Markedskultur** - Fokus på resultater, konkurranse og måloppnåelse. Lederen er en driver.

**4. Hierarkisk kultur** - Fokus på stabilitet, effektivitet og kontroll. Lederen er en koordinator.`
    },
    {
      id: 'okonomi-ledelse-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om organisasjonsstruktur',
        subTasks: [
          { label: 'a', task: 'Hva viser et organisasjonskart?', solution: 'Et organisasjonskart viser de formelle relasjonene mellom ulike stillinger og avdelinger, hvem som rapporterer til hvem, og hvordan oppgaver er fordelt.' },
          { label: 'b', task: 'Hva er hovedforskjellen mellom en funksjonsorganisasjon og en divisjonsorganisasjon?', solution: 'I en funksjonsorganisasjon er virksomheten delt inn etter fagområde (økonomi, salg, produksjon), mens i en divisjonsorganisasjon er den delt inn etter produkt, marked eller geografi.' },
          { label: 'c', task: 'Nevn en fordel og en ulempe med matriseorganisasjon.', solution: 'Fordel: Fleksibel ressursutnyttelse og god kompetanseutnyttelse. Ulempe: Kan gi uklare ansvarsforhold og krysspress for ansatte.' }
        ],
        hints: ['Tenk på hva som kjennetegner de ulike strukturene', 'Hvem rapporterer ansatte til?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Organisasjonskultur i praksis',
        subTasks: [
          { label: 'a', task: 'Hva mener vi med organisasjonskultur?', solution: 'Organisasjonskultur er de felles verdier, normer, holdninger og antakelser som preger en organisasjon. Det handler om "slik gjør vi det her hos oss".' },
          { label: 'b', task: 'Gi eksempler på synlige og usynlige elementer i organisasjonskulturen.', solution: 'Synlige elementer: logo, kontorutforming, kleskode, ritualer. Usynlige elementer: verdier, holdninger, antakelser, uskrevne regler.' },
          { label: 'c', task: 'Hvilken kulturtype tror du passer best for en oppstartsbedrift som utvikler nye teknologiske løsninger? Begrunn svaret.', solution: 'Adhokrati-kultur passer best fordi den fokuserer på innovasjon, kreativitet og risikotaking - som er viktig for oppstartsbedrifter som skal utvikle nye løsninger og konkurrere mot etablerte aktører.' }
        ],
        hints: ['Tenk på hva som er synlig og usynlig', 'Hva kjennetegner oppstartsbedrifter?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Case: Tegn et organisasjonskart',
        subTasks: [
          { label: 'a', task: 'Et transportfirma har en daglig leder, en økonomisjef med to ansatte, en driftssjef med fem sjåfører, og en salgssjef med tre selgere. Tegn et organisasjonskart for denne virksomheten.', solution: 'Organisasjonskartet skal vise: Daglig leder på toppen, med tre bokser under: Økonomisjef, Driftssjef og Salgssjef. Under Økonomisjef er 2 ansatte, under Driftssjef er 5 sjåfører, og under Salgssjef er 3 selgere.' },
          { label: 'b', task: 'Hvilken type organisasjonsstruktur har transportfirmaet?', solution: 'Transportfirmaet har en funksjonsorganisasjon fordi det er delt inn etter funksjon/fagområde (økonomi, drift og salg).' },
          { label: 'c', task: 'Firmaet vokser og får kunder i både Norge og Sverige. Forklar hvordan organisasjonsstrukturen kan endres til en divisjonsorganisasjon.', solution: 'Firmaet kan opprette to divisjoner: Norge og Sverige. Hver divisjon får egen divisjonsleder med ansvar for økonomi, drift og salg i sitt land. Dette gir klart resultatansvar for hvert marked og mulighet for tilpasning til lokale forhold.' }
        ],
        hints: ['Bruk firkanter for stillinger og linjer for å vise hvem som rapporterer til hvem', 'Tenk på hvordan man kan dele inn etter geografi'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 3: Ledelse og lederroller
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_3_1: TextbookChapter = {
  id: 'okonomi-ledelse-3-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '3.1',
  title: 'Ledelse og lederroller',
  description: 'Lær om ulike lederstiler, lederroller og hva som kjennetegner god ledelse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for ulike lederstiler og når de passer',
    'forklare ulike lederroller',
    'reflektere over hva som kjennetegner god ledelse'
  ],
  content: [
    {
      id: 'okonomi-ledelse-3-1-intro',
      type: 'text',
      content: `Ledelse handler om å få mennesker til å arbeide sammen mot felles mål. En god leder må kunne tilpasse sin lederstil til situasjonen og de menneskene som skal ledes. I dette kapitlet skal vi se på ulike tilnærminger til ledelse.`
    },
    {
      id: 'okonomi-ledelse-3-1-def-ledelse',
      type: 'definition',
      title: 'Ledelse og administrasjon',
      content: `**Ledelse** handler om å skape retning, inspirere og motivere mennesker til å nå mål. Ledelse fokuserer på endring og utvikling.

**Administrasjon** handler om å planlegge, organisere og kontrollere at oppgaver blir utført. Administrasjon fokuserer på stabilitet og effektivitet.

En god leder må kunne både lede og administrere, men vektleggingen varierer med situasjon og nivå i organisasjonen.`
    },
    {
      id: 'okonomi-ledelse-3-1-text-lederstiler',
      type: 'text',
      title: 'Lederstiler',
      content: `**Lederstil** er måten en leder utøver ledelse på. Det finnes mange måter å kategorisere lederstiler på. En klassisk inndeling er:

**Autoritær ledelse** - Lederen tar beslutninger alene og forventer at de følges. Passer i krisesituasjoner eller når raske beslutninger er nødvendig.

**Demokratisk ledelse** - Lederen involverer medarbeidere i beslutninger. Passer når medarbeiderne har relevant kompetanse og tid til å diskutere.

**Delegerende ledelse** - Lederen gir medarbeiderne stor frihet til å ta egne beslutninger. Passer når medarbeiderne er kompetente og selvgående.`
    },
    {
      id: 'okonomi-ledelse-3-1-def-situasjonsbestemt',
      type: 'definition',
      title: 'Situasjonsbestemt ledelse',
      content: `**Situasjonsbestemt ledelse** innebærer at lederen tilpasser sin lederstil til medarbeiderens modenhetsnivå. Modenheten vurderes ut fra kompetanse og motivasjon:

**S1 - Instruerende:** For medarbeidere med lav kompetanse og varierende motivasjon. Lederen gir klare instruksjoner.

**S2 - Coachende:** For medarbeidere med noe kompetanse og varierende motivasjon. Lederen forklarer beslutninger og oppmuntrer til dialog.

**S3 - Støttende:** For medarbeidere med høy kompetanse men varierende motivasjon. Lederen støtter og fasiliterer.

**S4 - Delegerende:** For medarbeidere med høy kompetanse og høy motivasjon. Lederen delegerer ansvar og myndighet.`
    },
    {
      id: 'okonomi-ledelse-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Tilpasse lederstil',
      problem: 'Maria er leder for et team på fem personer. En av dem, Jonas, er nyansatt og usikker på arbeidsoppgavene. En annen, Kari, har jobbet i avdelingen i ti år og er svært kompetent. Hvordan bør Maria tilpasse sin lederstil til Jonas og Kari?',
      solution: `**Løsning:**

**Jonas (nyansatt, usikker):**
Maria bør bruke en **instruerende lederstil (S1)** overfor Jonas:
- Gi klare og detaljerte instruksjoner
- Forklare hvordan oppgaver skal utføres
- Følge opp hyppig og gi tilbakemelding
- Gradvis gi mer ansvar etter hvert som kompetansen øker

**Kari (erfaren, kompetent):**
Maria bør bruke en **delegerende lederstil (S4)** overfor Kari:
- Gi stor frihet til å planlegge og utføre arbeidet
- Stole på at Kari tar gode beslutninger
- Være tilgjengelig for støtte ved behov
- Involvere Kari i viktige beslutninger

Ved å tilpasse lederstilen til den enkelte medarbeiders modenhetsnivå, kan Maria få det beste ut av hele teamet.`
    },
    {
      id: 'okonomi-ledelse-3-1-text-lederroller',
      type: 'text',
      title: 'Mintzbergs lederroller',
      content: `Henry Mintzberg identifiserte ti lederroller fordelt på tre kategorier:

**Mellommenneskelige roller:**
- **Frontfigur** - representerer organisasjonen utad
- **Leder** - motiverer og utvikler medarbeidere
- **Kontaktskaper** - bygger nettverk

**Informasjonsroller:**
- **Overvåker** - samler informasjon
- **Informasjonsformidler** - deler informasjon internt
- **Talsmann** - formidler informasjon utad

**Beslutningsroller:**
- **Entreprenør** - initierer endringer
- **Problemløser** - håndterer kriser
- **Ressursfordeler** - fordeler ressurser
- **Forhandler** - forhandler med parter`
    },
    {
      id: 'okonomi-ledelse-3-1-def-transformasjon',
      type: 'definition',
      title: 'Transformasjonsledelse',
      content: `**Transformasjonsledelse** handler om å inspirere medarbeidere til å se utover egne interesser og arbeide for fellesskapets beste. Transformasjonsledere kjennetegnes av:

- **Idealisert innflytelse** - er rollemodeller som medarbeidere ser opp til
- **Inspirerende motivasjon** - kommuniserer en engasjerende visjon
- **Intellektuell stimulering** - utfordrer medarbeidere til å tenke nytt
- **Individuell omtanke** - ser og utvikler den enkelte medarbeider`
    },
    {
      id: 'okonomi-ledelse-3-1-note-1',
      type: 'note',
      title: 'Ledelse vs. styring',
      content: `"Managers do things right, leaders do the right things" - Peter Drucker

Dette sitatet illustrerer forskjellen mellom administrasjon (gjøre ting riktig) og ledelse (gjøre de riktige tingene). Begge deler er viktig, men ledelse handler mer om retning og visjon.`
    },
    {
      id: 'okonomi-ledelse-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om lederstiler',
        subTasks: [
          { label: 'a', task: 'Hva er forskjellen mellom autoritær og demokratisk ledelse?', solution: 'Ved autoritær ledelse tar lederen beslutninger alene, mens ved demokratisk ledelse involveres medarbeiderne i beslutningsprosessen.' },
          { label: 'b', task: 'Når kan autoritær ledelse være hensiktsmessig?', solution: 'Autoritær ledelse kan være hensiktsmessig i krisesituasjoner, når raske beslutninger er nødvendig, eller når medarbeiderne mangler kompetanse til å bidra.' },
          { label: 'c', task: 'Hva innebærer delegerende ledelse?', solution: 'Delegerende ledelse innebærer at lederen gir medarbeiderne stor frihet til å ta egne beslutninger og planlegge sitt arbeid. Passer for kompetente og selvgående medarbeidere.' }
        ],
        hints: ['Tenk på hvem som tar beslutninger', 'Når passer de ulike stilene?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Situasjonsbestemt ledelse i praksis',
        subTasks: [
          { label: 'a', task: 'Forklar hva som menes med situasjonsbestemt ledelse.', solution: 'Situasjonsbestemt ledelse innebærer at lederen tilpasser sin lederstil til medarbeiderens modenhetsnivå, vurdert ut fra kompetanse og motivasjon.' },
          { label: 'b', task: 'Hvilken lederstil passer for en medarbeider med høy kompetanse men lav motivasjon?', solution: 'En støttende lederstil (S3) passer best. Lederen bør støtte, oppmuntre og fasilitere, og fokusere på å øke motivasjonen gjennom involvering og anerkjennelse.' },
          { label: 'c', task: 'Hvorfor er det viktig at ledere kan variere sin lederstil?', solution: 'Det er viktig fordi medarbeidere har ulike behov og modenhetsnivåer. Ved å tilpasse lederstilen kan lederen gi riktig støtte til hver enkelt, noe som gir bedre resultater og utvikling.' }
        ],
        hints: ['Modenhet = kompetanse + motivasjon', 'Tenk på hva medarbeideren trenger'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjon om god ledelse',
        subTasks: [
          { label: 'a', task: 'Tenk på en god leder du har møtt (lærer, trener, arbeidsgiver). Hvilke egenskaper hadde denne lederen som gjorde at du opplevde ledelsen som god?', solution: 'Svarene vil variere, men typiske kjennetegn på god ledelse er: lytter til andre, er rettferdig, kommuniserer tydelig, gir tilbakemelding, er støttende, viser tillit, er engasjert og inspirerende.' },
          { label: 'b', task: 'Nevn tre av Mintzbergs lederroller og gi et eksempel på hver.', solution: 'Eksempler: 1) Frontfigur - holder tale på firmafest. 2) Problemløser - håndterer en kundekonflikt. 3) Ressursfordeler - fordeler budsjettet mellom avdelinger.' },
          { label: 'c', task: 'Hva kjennetegner en transformasjonsleder, og hvorfor tror du denne formen for ledelse er viktig i dagens arbeidsliv?', solution: 'Transformasjonsledere inspirerer, utfordrer og utvikler medarbeidere. Dette er viktig i dagens arbeidsliv fordi endringer skjer raskt, og organisasjoner trenger medarbeidere som er engasjerte, innovative og villige til å endre seg.' }
        ],
        hints: ['Tenk på konkrete situasjoner', 'Hva skiller ledelse fra administrasjon?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 4: Motivasjon og arbeidsmiljø
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_4_1: TextbookChapter = {
  id: 'okonomi-ledelse-4-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '4.1',
  title: 'Motivasjon og arbeidsmiljø',
  description: 'Lær om motivasjonsteorier, hva som skaper et godt arbeidsmiljø og hvordan dette påvirker produktivitet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for sentrale motivasjonsteorier',
    'forklare hva som kjennetegner et godt arbeidsmiljø',
    'drøfte sammenhengen mellom motivasjon, arbeidsmiljø og produktivitet'
  ],
  content: [
    {
      id: 'okonomi-ledelse-4-1-intro',
      type: 'text',
      content: `Motiverte medarbeidere er en av de viktigste ressursene i enhver virksomhet. Når folk er motiverte, yter de mer, er mer kreative og har lavere sykefravær. I dette kapitlet skal vi se på hva som motiverer mennesker og hvordan et godt arbeidsmiljø kan bidra til økt motivasjon.`
    },
    {
      id: 'okonomi-ledelse-4-1-def-motivasjon',
      type: 'definition',
      title: 'Motivasjon',
      content: `**Motivasjon** er de indre og ytre drivkreftene som får oss til å handle. Vi skiller mellom:

**Indre motivasjon** - Drivkraften kommer innenfra. Vi gjør noe fordi det er interessant, givende eller meningsfullt i seg selv.

**Ytre motivasjon** - Drivkraften kommer utenfra. Vi gjør noe for å oppnå en belønning eller unngå en straff.

Forskning viser at indre motivasjon ofte gir mer varige resultater enn ytre motivasjon.`
    },
    {
      id: 'okonomi-ledelse-4-1-text-maslow',
      type: 'text',
      title: 'Maslows behovspyramide',
      content: `Abraham Maslow utviklet en teori om at menneskers behov kan ordnes i en pyramide. Vi må tilfredsstille behovene på et nivå før behovene på neste nivå blir viktige:

**5. Selvrealisering** - å utnytte sitt potensial
**4. Anerkjennelse** - respekt, status, prestasjon
**3. Sosiale behov** - tilhørighet, vennskap, kjærlighet
**2. Trygghetsbehov** - sikkerhet, stabilitet, forutsigbarhet
**1. Fysiske behov** - mat, vann, søvn, husly

For en arbeidsgiver betyr dette at man må sikre grunnleggende behov (lønn, trygge arbeidsforhold) før man kan motivere gjennom høyere behov (anerkjennelse, utvikling).`
    },
    {
      id: 'okonomi-ledelse-4-1-def-herzberg',
      type: 'definition',
      title: 'Herzbergs tofaktorteori',
      content: `Frederick Herzberg delte faktorer i arbeidslivet i to kategorier:

**Hygienefaktorer** - Faktorer som kan skape misnøye hvis de mangler, men som ikke motiverer i seg selv:
- Lønn
- Arbeidsforhold
- Jobbsikkerhet
- Bedriftspolitikk
- Forholdet til kolleger og ledere

**Motivasjonsfaktorer** - Faktorer som skaper ekte motivasjon og tilfredshet:
- Prestasjoner
- Anerkjennelse
- Ansvar
- Vekst og utvikling
- Selve arbeidet

Ifølge Herzberg må hygienefaktorene være på plass for å unngå misnøye, men det er motivasjonsfaktorene som skaper engasjement.`
    },
    {
      id: 'okonomi-ledelse-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Øke motivasjonen',
      problem: 'En butikkjede opplever høy turnover og lav medarbeidertilfredshet. En undersøkelse viser at de ansatte er misfornøyde med lønnen og arbeidsforholdene, men også at de savner anerkjennelse og utviklingsmuligheter. Bruk Herzbergs teori til å foreslå tiltak.',
      solution: `**Løsning:**

**Tiltak for hygienefaktorer (redusere misnøye):**
- Gjennomgå lønnsnivået og vurdere justeringer
- Forbedre arbeidsforholdene (pauserom, utstyr)
- Sikre forutsigbare arbeidsplaner
- Forbedre kommunikasjonen fra ledelsen

**Tiltak for motivasjonsfaktorer (øke motivasjon):**
- Innføre systematisk anerkjennelse av gode prestasjoner
- Gi mer ansvar til erfarne medarbeidere
- Tilby kurs og utviklingsmuligheter
- La ansatte delta i beslutninger om hvordan butikken drives
- Skape karrieremuligheter internt

Ifølge Herzberg må hygienefaktorene på plass først, men varig forbedring krever at man også arbeider med motivasjonsfaktorene.`
    },
    {
      id: 'okonomi-ledelse-4-1-text-arbeidsmiljo',
      type: 'text',
      title: 'Arbeidsmiljø',
      content: `**Arbeidsmiljø** omfatter alle forhold som påvirker arbeidstakernes helse, sikkerhet og trivsel. Vi deler ofte inn i:

**Fysisk arbeidsmiljø:**
- Lokaler, belysning, temperatur
- Støy, luft, ergonomi
- Sikkerhet og verneutstyr

**Psykososialt arbeidsmiljø:**
- Samarbeid og relasjoner
- Ledelse og medbestemmelse
- Arbeidsbelastning og stress
- Mobbing og trakassering

**Organisatorisk arbeidsmiljø:**
- Arbeidstid og fleksibilitet
- Kompetanseutvikling
- Informasjon og kommunikasjon
- Balanse mellom arbeid og fritid`
    },
    {
      id: 'okonomi-ledelse-4-1-def-aml',
      type: 'definition',
      title: 'Arbeidsmiljøloven',
      content: `**Arbeidsmiljøloven** (AML) regulerer arbeidsmiljøet i Norge. Lovens formål er blant annet å:

- Sikre et arbeidsmiljø som gir full trygghet mot fysiske og psykiske skadevirkninger
- Sikre trygge ansettelsesforhold
- Legge til rette for et inkluderende arbeidsliv

Viktige krav i loven:
- Systematisk HMS-arbeid
- Verneombud og arbeidsmiljøutvalg
- Tilrettelegging for ansatte med redusert arbeidsevne
- Regler om arbeidstid, ferie og permisjon`
    },
    {
      id: 'okonomi-ledelse-4-1-note-1',
      type: 'note',
      title: 'Visste du at...',
      content: `Forskning viser at bedrifter med godt arbeidsmiljø har:
- 37 % lavere sykefravær
- 25 % høyere produktivitet
- Betydelig lavere turnover

Å investere i arbeidsmiljøet er derfor ikke bare etisk riktig, men også økonomisk lønnsomt.`
    },
    {
      id: 'okonomi-ledelse-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om motivasjon',
        subTasks: [
          { label: 'a', task: 'Hva er forskjellen mellom indre og ytre motivasjon?', solution: 'Indre motivasjon kommer innenfra - vi gjør noe fordi det er interessant eller meningsfullt. Ytre motivasjon kommer utenfra - vi gjør noe for å få belønning eller unngå straff.' },
          { label: 'b', task: 'Nevn de fem nivåene i Maslows behovspyramide fra bunn til topp.', solution: '1. Fysiske behov, 2. Trygghetsbehov, 3. Sosiale behov, 4. Anerkjennelse, 5. Selvrealisering.' },
          { label: 'c', task: 'Hva er forskjellen mellom hygienefaktorer og motivasjonsfaktorer ifølge Herzberg?', solution: 'Hygienefaktorer (lønn, arbeidsforhold) kan skape misnøye hvis de mangler, men motiverer ikke i seg selv. Motivasjonsfaktorer (anerkjennelse, ansvar, utvikling) skaper ekte motivasjon og tilfredshet.' }
        ],
        hints: ['Tenk på hva som driver deg', 'Hvilke behov må dekkes først?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeidsmiljø i praksis',
        subTasks: [
          { label: 'a', task: 'Gi tre eksempler på faktorer som påvirker det fysiske arbeidsmiljøet.', solution: 'Eksempler: belysning, støynivå, temperatur, ergonomisk utforming av arbeidsplass, luftkvalitet, sikkerhetsutstyr.' },
          { label: 'b', task: 'Hva menes med psykososialt arbeidsmiljø?', solution: 'Psykososialt arbeidsmiljø handler om de mellommenneskelige forholdene på arbeidsplassen: samarbeid, relasjoner, ledelse, arbeidsbelastning, stress, og fravær av mobbing/trakassering.' },
          { label: 'c', task: 'Nevn tre tiltak en arbeidsgiver kan gjøre for å forbedre arbeidsmiljøet.', solution: 'Tiltak kan være: gjennomføre medarbeidersamtaler, tilby kompetanseutvikling, forbedre fysiske arbeidsforhold, skape sosiale arenaer, gi medarbeidere medbestemmelse, sikre balanse mellom arbeid og fritid.' }
        ],
        hints: ['Tenk på hva som gjør en arbeidsplass god', 'Hva regulerer arbeidsmiljøloven?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Case: Motivasjon i en teknologibedrift',
        subTasks: [
          { label: 'a', task: 'En teknologibedrift tilbyr høy lønn, men opplever likevel høy turnover blant de ansatte. Bruk Herzbergs teori til å forklare hvorfor lønn alene ikke er nok til å beholde ansatte.', solution: 'Ifølge Herzberg er lønn en hygienefaktor som kun forhindrer misnøye. For å skape ekte motivasjon og lojalitet trengs motivasjonsfaktorer som anerkjennelse, interessante arbeidsoppgaver, ansvar og utviklingsmuligheter. Høy lønn kan tiltrekke ansatte, men det er motivasjonsfaktorene som får dem til å bli.' },
          { label: 'b', task: 'Foreslå fem konkrete tiltak bedriften kan gjøre for å øke motivasjonen og redusere turnover.', solution: 'Tiltak: 1) Gi regelmessig tilbakemelding og anerkjennelse, 2) Tilby faglig utvikling og kurs, 3) Gi ansatte mer autonomi og ansvar, 4) Skape karrieremuligheter internt, 5) Forbedre det sosiale miljøet gjennom teambuilding.' },
          { label: 'c', task: 'Diskuter sammenhengen mellom et godt arbeidsmiljø, motivasjon og bedriftens økonomiske resultater.', solution: 'Et godt arbeidsmiljø øker motivasjonen, som gir høyere produktivitet og kvalitet. Motiverte ansatte er mer kreative, har lavere sykefravær og blir lenger i bedriften. Dette reduserer kostnader til rekruttering/opplæring og gir bedre kundeservice. Alt dette bidrar positivt til bedriftens økonomiske resultater.' }
        ],
        hints: ['Tenk på forskjellen mellom hygiene- og motivasjonsfaktorer', 'Hva er kostnadene ved høy turnover?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 5: Kommunikasjon i organisasjoner
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_5_1: TextbookChapter = {
  id: 'okonomi-ledelse-5-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '5.1',
  title: 'Kommunikasjon i organisasjoner',
  description: 'Lær om kommunikasjonsprosessen, ulike kommunikasjonskanaler og hvordan god kommunikasjon bidrar til effektiv ledelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for kommunikasjonsprosessen',
    'forklare ulike kommunikasjonskanaler og når de passer',
    'drøfte betydningen av god kommunikasjon for ledelse og samarbeid'
  ],
  content: [
    {
      id: 'okonomi-ledelse-5-1-intro',
      type: 'text',
      content: `Kommunikasjon er limet som holder en organisasjon sammen. Uten god kommunikasjon vil misforståelser oppstå, beslutninger bli forsinket og samarbeidet lide. I dette kapitlet skal vi se på hvordan kommunikasjon fungerer og hvordan den kan forbedres.`
    },
    {
      id: 'okonomi-ledelse-5-1-def-kommunikasjon',
      type: 'definition',
      title: 'Kommunikasjon',
      content: `**Kommunikasjon** er prosessen der informasjon overføres fra en sender til en mottaker. Kommunikasjonsprosessen består av:

1. **Sender** - den som har et budskap å formidle
2. **Koding** - budskapet formuleres i ord, bilder eller andre symboler
3. **Kanal** - mediet budskapet sendes gjennom
4. **Dekoding** - mottakeren tolker budskapet
5. **Mottaker** - den som mottar budskapet
6. **Tilbakemelding** - mottakerens respons til senderen
7. **Støy** - forstyrrelser som kan forvanske budskapet`
    },
    {
      id: 'okonomi-ledelse-5-1-text-kanaler',
      type: 'text',
      title: 'Kommunikasjonskanaler',
      content: `Vi kan velge mellom mange ulike kanaler for å formidle et budskap:

**Muntlig kommunikasjon:**
- Ansikt til ansikt (møter, samtaler)
- Telefon
- Videokonferanse

**Skriftlig kommunikasjon:**
- E-post
- Meldinger og chat
- Rapporter og dokumenter
- Sosiale medier

**Visuell kommunikasjon:**
- Presentasjoner
- Infografikk
- Video

Valg av kanal avhenger av budskapet, mottakeren og situasjonen.`
    },
    {
      id: 'okonomi-ledelse-5-1-def-rikhet',
      type: 'definition',
      title: 'Kanalrikhet',
      content: `**Kanalrikhet** beskriver hvor mye informasjon en kommunikasjonskanal kan formidle. Rike kanaler egner seg for komplekse og tvetydige budskap, mens fattige kanaler passer for enkle og rutinemessige beskjeder.

**Rike kanaler** (mest informasjon):
- Ansikt til ansikt
- Videokonferanse
- Telefon

**Fattige kanaler** (minst informasjon):
- E-post
- Rapporter
- Oppslag

Kroppsspråk, tonefall og mulighet for umiddelbar tilbakemelding gjør en kanal rikere.`
    },
    {
      id: 'okonomi-ledelse-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Velge kommunikasjonskanal',
      problem: 'En leder skal formidle følgende tre budskap. Hvilken kommunikasjonskanal bør velges i hvert tilfelle?\n\na) Informere om nye åpningstider\nb) Gi en medarbeider negativ tilbakemelding på en presentasjon\nc) Diskutere en kompleks strategi med ledergruppen',
      solution: `**Løsning:**

**a) Nye åpningstider:**
E-post eller intranett er passende. Dette er enkel, faktabasert informasjon som ikke krever diskusjon. Skriftlig formidling sikrer at alle får samme informasjon og kan slå opp senere.

**b) Negativ tilbakemelding:**
Ansikt til ansikt er best. Personlig samtale gir mulighet til å vise empati gjennom kroppsspråk, observere medarbeiderens reaksjon, og ha en dialog om hvordan det kan forbedres. E-post kan oppleves kaldt og misforstås.

**c) Kompleks strategi:**
Fysisk møte eller videokonferanse er best. Komplekse temaer krever diskusjon, spørsmål og avklaringer. Deltakerne kan bidra med innspill og man kan sikre felles forståelse. Supplér gjerne med skriftlig materiale i forkant.`
    },
    {
      id: 'okonomi-ledelse-5-1-text-retning',
      type: 'text',
      title: 'Kommunikasjonsretninger',
      content: `I en organisasjon går kommunikasjonen i flere retninger:

**Nedadgående kommunikasjon** - fra ledelse til medarbeidere:
- Instruksjoner og retningslinjer
- Informasjon om mål og strategi
- Tilbakemelding på arbeid

**Oppadgående kommunikasjon** - fra medarbeidere til ledelse:
- Rapportering om status og resultater
- Forslag og ideer
- Problemer og bekymringer

**Horisontal kommunikasjon** - mellom kolleger på samme nivå:
- Koordinering av arbeid
- Deling av informasjon og kunnskap
- Samarbeid om oppgaver

God kommunikasjon krever at alle retninger fungerer godt.`
    },
    {
      id: 'okonomi-ledelse-5-1-text-barrierer',
      type: 'text',
      title: 'Kommunikasjonsbarrierer',
      content: `Flere faktorer kan hindre god kommunikasjon:

**Personlige barrierer:**
- Språkforskjeller
- Ulike referanserammer
- Fordommer og stereotypier
- Manglende lytteferdigheter

**Organisatoriske barrierer:**
- For mange ledd i kommunikasjonskjeden
- Informasjonsoverbelastning
- Tidspress
- Geografisk avstand

**Teknologiske barrierer:**
- Ustabile systemer
- Manglende digital kompetanse
- For mange kommunikasjonsverktøy`
    },
    {
      id: 'okonomi-ledelse-5-1-tip-1',
      type: 'tip',
      title: 'Tips for god kommunikasjon',
      content: `**For senderen:**
- Tenk gjennom budskapet før du sender
- Tilpass språk og kanal til mottakeren
- Be om tilbakemelding for å sikre forståelse
- Vær konkret og tydelig

**For mottakeren:**
- Lytt aktivt og still spørsmål
- Unngå å avbryte
- Oppsummer for å vise at du har forstått
- Gi konstruktiv tilbakemelding`
    },
    {
      id: 'okonomi-ledelse-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om kommunikasjon',
        subTasks: [
          { label: 'a', task: 'Nevn de seks elementene i kommunikasjonsprosessen.', solution: 'Sender, koding, kanal, dekoding, mottaker og tilbakemelding (pluss støy som kan forstyrre).' },
          { label: 'b', task: 'Hva menes med kanalrikhet?', solution: 'Kanalrikhet beskriver hvor mye informasjon en kommunikasjonskanal kan formidle. Rike kanaler (som ansikt til ansikt) formidler mye informasjon gjennom ord, tonefall og kroppsspråk.' },
          { label: 'c', task: 'Hva er forskjellen mellom nedadgående og oppadgående kommunikasjon?', solution: 'Nedadgående kommunikasjon går fra ledelse til medarbeidere (instruksjoner, mål). Oppadgående kommunikasjon går fra medarbeidere til ledelse (rapporter, forslag, problemer).' }
        ],
        hints: ['Tenk på hvordan et budskap går fra sender til mottaker', 'Hvilken vei går informasjonen?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kommunikasjonskanaler i praksis',
        subTasks: [
          { label: 'a', task: 'Nevn tre fordeler med muntlig kommunikasjon sammenlignet med skriftlig.', solution: 'Fordeler: 1) Umiddelbar tilbakemelding og mulighet for oppklaring, 2) Kan formidle tonefall og kroppsspråk, 3) Mer personlig og relasjonsbyggende.' },
          { label: 'b', task: 'I hvilke situasjoner er e-post et godt valg som kommunikasjonskanal?', solution: 'E-post passer når: budskapet er enkelt og faktabasert, mottakeren trenger dokumentasjon, tidspunktet ikke er kritisk, eller man vil nå mange samtidig med samme informasjon.' },
          { label: 'c', task: 'Hva er viktig å tenke på når man velger kommunikasjonskanal?', solution: 'Man bør vurdere: budskapets kompleksitet, behov for dokumentasjon, hastighet, mottakerens preferanser, sensitivitet i budskapet, og om det trengs dialog eller bare informasjon.' }
        ],
        hints: ['Tenk på hva de ulike kanalene kan og ikke kan formidle', 'Når passer ulike kanaler?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Case: Kommunikasjonsutfordringer',
        subTasks: [
          { label: 'a', task: 'En bedrift har kontorer i Oslo og Trondheim. De ansatte klager over at de ikke får nok informasjon fra ledelsen og at det er vanskelig å samarbeide på tvers. Identifiser minst tre mulige kommunikasjonsbarrierer i denne situasjonen.', solution: 'Barrierer kan være: 1) Geografisk avstand gjør spontan kommunikasjon vanskelig, 2) Tidsforsinkelser i informasjonsflyt, 3) Manglende felles møtepunkter og arenaer, 4) Ulike arbeidskulturer på kontorene, 5) Teknologiske utfordringer med samarbeidsverktøy.' },
          { label: 'b', task: 'Foreslå fem tiltak bedriften kan gjøre for å forbedre kommunikasjonen.', solution: 'Tiltak: 1) Innføre faste virtuelle møter mellom kontorene, 2) Bruke felles digitale samarbeidsplattformer, 3) Arrangere fysiske samlinger med jevne mellomrom, 4) Etablere tydelige rutiner for informasjonsdeling, 5) Utnevne kommunikasjonsansvarlige på hvert kontor.' },
          { label: 'c', task: 'Hvorfor er god kommunikasjon viktig for ledelse og samarbeid?', solution: 'God kommunikasjon er viktig fordi: det sikrer at alle jobber mot samme mål, reduserer misforståelser og konflikter, bygger tillit mellom ledelse og medarbeidere, muliggjør koordinering og samarbeid, og gir medarbeidere følelse av å være informert og involvert.' }
        ],
        hints: ['Tenk på utfordringer med geografisk avstand', 'Hva kan teknologi bidra med?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 6: Økonomiske grunnbegreper
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_6_1: TextbookChapter = {
  id: 'okonomi-ledelse-6-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '6.1',
  title: 'Økonomiske grunnbegreper',
  description: 'Lær om sentrale økonomiske begreper som inntekter, kostnader, resultat og lønnsomhet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for sentrale økonomiske begreper',
    'forklare forskjellen mellom ulike kostnadstyper',
    'beregne enkle lønnsomhetsmål'
  ],
  content: [
    {
      id: 'okonomi-ledelse-6-1-intro',
      type: 'text',
      content: `For å kunne styre en virksomhet godt, må man forstå grunnleggende økonomiske begreper. I dette kapitlet skal vi se på hva inntekter, kostnader og resultat er, og hvordan vi måler lønnsomhet.`
    },
    {
      id: 'okonomi-ledelse-6-1-def-inntekt',
      type: 'definition',
      title: 'Inntekter',
      content: `**Inntekter** er verdien av varer og tjenester som bedriften selger. Inntektene beregnes slik:

$$\\text{Inntekt} = \\text{Pris} \\times \\text{Antall solgt}$$

**Typer inntekter:**
- **Salgsinntekter** - fra salg av varer og tjenester
- **Andre driftsinntekter** - leieinntekter, tilskudd
- **Finansinntekter** - renter, aksjeutbytte`
    },
    {
      id: 'okonomi-ledelse-6-1-def-kostnad',
      type: 'definition',
      title: 'Kostnader',
      content: `**Kostnader** er verdien av ressurser som brukes for å skape inntekter. Vi skiller mellom:

**Faste kostnader** - kostnader som ikke endres med produksjonsmengden:
- Husleie
- Forsikring
- Lederlønninger
- Avskrivninger

**Variable kostnader** - kostnader som endres med produksjonsmengden:
- Råvarer
- Timelønninger i produksjon
- Emballasje
- Strøm til produksjon`
    },
    {
      id: 'okonomi-ledelse-6-1-formula-1',
      type: 'formula',
      title: 'Totale kostnader',
      latex: '\\text{Totale kostnader} = \\text{Faste kostnader} + \\text{Variable kostnader}',
      description: 'De totale kostnadene er summen av faste og variable kostnader.'
    },
    {
      id: 'okonomi-ledelse-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Klassifisere kostnader',
      problem: 'En bakeribedrift har følgende kostnader. Klassifiser dem som faste eller variable:\na) Mel og sukker\nb) Husleie for lokalet\nc) Timelønn til bakere\nd) Forsikring\ne) Emballasje til brød\nf) Regnskap (fast månedlig avtale)',
      solution: `**Løsning:**

**Faste kostnader:**
- b) Husleie - samme beløp uansett hvor mye som bakes
- d) Forsikring - samme beløp uansett produksjon
- f) Regnskap - fast avtale som ikke avhenger av produksjon

**Variable kostnader:**
- a) Mel og sukker - øker når produksjonen øker
- c) Timelønn - flere timer når produksjonen øker
- e) Emballasje - mer emballasje når det bakes mer

Noen kostnader kan være i en gråsone. For eksempel kan strøm ha både faste (grunnbeløp) og variable (forbruk) elementer.`
    },
    {
      id: 'okonomi-ledelse-6-1-def-resultat',
      type: 'definition',
      title: 'Resultat',
      content: `**Resultat** viser hva bedriften sitter igjen med etter at kostnadene er trukket fra inntektene:

$$\\text{Resultat} = \\text{Inntekter} - \\text{Kostnader}$$

- **Overskudd** (positivt resultat): Inntektene er større enn kostnadene
- **Underskudd** (negativt resultat): Kostnadene er større enn inntektene
- **Nullpunkt**: Inntektene er lik kostnadene`
    },
    {
      id: 'okonomi-ledelse-6-1-def-dekningsbidrag',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `**Dekningsbidrag** viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd etter at variable kostnader er trukket fra:

$$\\text{Dekningsbidrag} = \\text{Salgsinntekt} - \\text{Variable kostnader}$$

**Dekningsbidrag per enhet:**
$$\\text{DB per enhet} = \\text{Salgspris} - \\text{Variabel kostnad per enhet}$$

Dekningsbidraget er et viktig nøkkeltall for å vurdere lønnsomheten til produkter og tjenester.`
    },
    {
      id: 'okonomi-ledelse-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Beregne dekningsbidrag',
      problem: 'En bedrift selger sykler. Salgsprisen er 8 000 kr per sykkel. Variable kostnader per sykkel er 5 000 kr (innkjøp, frakt, montering). Faste kostnader er 600 000 kr per år. Bedriften selger 300 sykler i året.\n\na) Beregn dekningsbidrag per sykkel\nb) Beregn totalt dekningsbidrag\nc) Beregn årsresultatet',
      solution: `**Løsning:**

**a) Dekningsbidrag per sykkel:**
$$\\text{DB per enhet} = 8\\,000 - 5\\,000 = 3\\,000 \\text{ kr}$$

**b) Totalt dekningsbidrag:**
$$\\text{Totalt DB} = 3\\,000 \\times 300 = 900\\,000 \\text{ kr}$$

**c) Årsresultat:**
$$\\text{Resultat} = \\text{Totalt DB} - \\text{Faste kostnader}$$
$$\\text{Resultat} = 900\\,000 - 600\\,000 = 300\\,000 \\text{ kr}$$

Bedriften har et overskudd på 300 000 kr.`
    },
    {
      id: 'okonomi-ledelse-6-1-def-nullpunkt',
      type: 'definition',
      title: 'Nullpunktomsetning',
      content: `**Nullpunktomsetning** er den omsetningen bedriften må ha for å gå i null (hverken overskudd eller underskudd):

$$\\text{Nullpunktomsetning} = \\frac{\\text{Faste kostnader}}{\\text{Dekningsgrad}}$$

Hvor **dekningsgrad** er:
$$\\text{Dekningsgrad} = \\frac{\\text{Dekningsbidrag}}{\\text{Salgsinntekt}} \\times 100\\%$$

**Nullpunkt i antall enheter:**
$$\\text{Nullpunkt (antall)} = \\frac{\\text{Faste kostnader}}{\\text{DB per enhet}}$$`
    },
    {
      id: 'okonomi-ledelse-6-1-example-3',
      type: 'example',
      title: 'Eksempel: Nullpunktanalyse',
      problem: 'Bruk tallene fra forrige eksempel (sykkelbutikken) til å beregne:\na) Dekningsgraden\nb) Hvor mange sykler må selges for å gå i null?',
      solution: `**Løsning:**

**a) Dekningsgrad:**
$$\\text{Dekningsgrad} = \\frac{3\\,000}{8\\,000} \\times 100\\% = 37,5\\%$$

**b) Nullpunkt (antall sykler):**
$$\\text{Nullpunkt} = \\frac{600\\,000}{3\\,000} = 200 \\text{ sykler}$$

Bedriften må selge minst 200 sykler for å dekke alle kostnader. Salg over dette gir overskudd.

Vi kan kontrollere:
- Inntekt ved 200 sykler: $200 \\times 8\\,000 = 1\\,600\\,000$ kr
- Variable kostnader: $200 \\times 5\\,000 = 1\\,000\\,000$ kr
- Dekningsbidrag: $1\\,600\\,000 - 1\\,000\\,000 = 600\\,000$ kr
- Resultat: $600\\,000 - 600\\,000 = 0$ kr (nullpunkt)`
    },
    {
      id: 'okonomi-ledelse-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om økonomiske begreper',
        subTasks: [
          { label: 'a', task: 'Hva er forskjellen mellom faste og variable kostnader?', solution: 'Faste kostnader endres ikke med produksjonsmengden (f.eks. husleie), mens variable kostnader øker når produksjonen øker (f.eks. råvarer).' },
          { label: 'b', task: 'Hva er formelen for resultat?', solution: 'Resultat = Inntekter - Kostnader' },
          { label: 'c', task: 'Hva viser dekningsbidraget?', solution: 'Dekningsbidraget viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd etter at variable kostnader er trukket fra inntektene.' }
        ],
        hints: ['Tenk på hva som endres med produksjonen', 'Hva dekker dekningsbidraget?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regneoppgave: Dekningsbidrag',
        subTasks: [
          { label: 'a', task: 'En butikk selger t-skjorter for 300 kr. Variable kostnader per t-skjorte er 120 kr. Beregn dekningsbidrag per t-skjorte.', solution: 'DB per enhet = 300 - 120 = 180 kr', answer: 180 },
          { label: 'b', task: 'Butikken selger 500 t-skjorter i måneden. Beregn totalt dekningsbidrag.', solution: 'Totalt DB = 180 kr × 500 = 90 000 kr', answer: 90000 },
          { label: 'c', task: 'Faste kostnader er 60 000 kr i måneden. Beregn månedlig resultat.', solution: 'Resultat = 90 000 - 60 000 = 30 000 kr overskudd', answer: 30000 }
        ],
        hints: ['DB = Pris - VK', 'Resultat = Totalt DB - FK'],
        solution: 'a) 180 kr, b) 90 000 kr, c) 30 000 kr overskudd',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regneoppgave: Nullpunktanalyse',
        subTasks: [
          { label: 'a', task: 'Et treningssenter har medlemsavgift på 500 kr per måned. Variable kostnader per medlem er 100 kr (strøm, vann, forbruk). Faste kostnader er 120 000 kr i måneden. Beregn dekningsbidraget per medlem.', solution: 'DB per medlem = 500 - 100 = 400 kr', answer: 400 },
          { label: 'b', task: 'Beregn hvor mange medlemmer som trengs for å gå i null.', solution: 'Nullpunkt = 120 000 / 400 = 300 medlemmer', answer: 300 },
          { label: 'c', task: 'Senteret har 400 medlemmer. Beregn månedlig resultat.', solution: 'Totalt DB = 400 × 400 = 160 000 kr. Resultat = 160 000 - 120 000 = 40 000 kr overskudd', answer: 40000 },
          { label: 'd', task: 'Beregn dekningsgraden.', solution: 'Dekningsgrad = 400/500 × 100% = 80%', answer: 80 }
        ],
        hints: ['Nullpunkt = FK / DB per enhet', 'Dekningsgrad = DB / Pris × 100%'],
        solution: 'a) 400 kr, b) 300 medlemmer, c) 40 000 kr, d) 80%',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 7: Budsjettering og økonomistyring
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_7_1: TextbookChapter = {
  id: 'okonomi-ledelse-7-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '7.1',
  title: 'Budsjettering og økonomistyring',
  description: 'Lær om budsjetter som styringsverktøy, ulike budsjetttyper og hvordan budsjetter brukes i praksis.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for hva et budsjett er og hvorfor det er viktig',
    'forklare ulike typer budsjetter',
    'sette opp enkle budsjetter'
  ],
  content: [
    {
      id: 'okonomi-ledelse-7-1-intro',
      type: 'text',
      content: `Et budsjett er en plan for fremtiden uttrykt i tall. Budsjettering er et viktig styringsverktøy som hjelper ledelsen med å planlegge, koordinere og kontrollere virksomhetens aktiviteter. I dette kapitlet skal vi se på ulike typer budsjetter og hvordan de brukes.`
    },
    {
      id: 'okonomi-ledelse-7-1-def-budsjett',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en tallmessig beskrivelse av forventede inntekter, kostnader eller andre økonomiske størrelser for en fremtidig periode.

**Formål med budsjettering:**
- **Planlegging** - tvinger til å tenke fremover
- **Koordinering** - samordner ulike deler av virksomheten
- **Kommunikasjon** - formidler mål og forventninger
- **Motivasjon** - gir konkrete mål å strekke seg etter
- **Kontroll** - grunnlag for å sammenligne med faktiske tall`
    },
    {
      id: 'okonomi-ledelse-7-1-text-typer',
      type: 'text',
      title: 'Typer budsjetter',
      content: `**Resultatbudsjett:**
Viser forventede inntekter og kostnader, og dermed forventet overskudd eller underskudd.

**Likviditetsbudsjett:**
Viser forventede innbetalinger og utbetalinger, og dermed forventet likviditet (penger tilgjengelig).

**Balansebudsjett:**
Viser forventet finansiell stilling (eiendeler, gjeld, egenkapital) ved periodens slutt.

**Salgsbudsjett:**
Viser forventet salg fordelt på produkter, kunder eller perioder.

**Kostnadsbudsjett:**
Viser forventede kostnader fordelt på kostnadstyper eller avdelinger.`
    },
    {
      id: 'okonomi-ledelse-7-1-def-resultatbudsjett',
      type: 'definition',
      title: 'Resultatbudsjett',
      content: `Et **resultatbudsjett** viser virksomhetens forventede resultat i en periode. Oppbyggingen er typisk:

**Salgsinntekter**
- Variable kostnader
= **Dekningsbidrag**
- Faste kostnader
= **Driftsresultat**
+ Finansinntekter
- Finanskostnader
= **Resultat før skatt**
- Skatt
= **Resultat etter skatt**`
    },
    {
      id: 'okonomi-ledelse-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Sette opp resultatbudsjett',
      problem: 'En liten nettbutikk forventer følgende for neste år:\n- Salg: 1 000 enheter à 500 kr\n- Innkjøpskostnad per enhet: 300 kr\n- Fraktkostnad per enhet: 50 kr\n- Husleie lager: 60 000 kr\n- Lønn: 200 000 kr\n- Markedsføring: 40 000 kr\n\nSett opp et resultatbudsjett.',
      solution: `**Løsning - Resultatbudsjett:**

| Post | Beløp |
|------|-------|
| Salgsinntekter | 500 000 kr |
| - Variable kostnader | |
|   Innkjøp | 300 000 kr |
|   Frakt | 50 000 kr |
| = **Dekningsbidrag** | **150 000 kr** |
| - Faste kostnader | |
|   Husleie | 60 000 kr |
|   Lønn | 200 000 kr |
|   Markedsføring | 40 000 kr |
| = **Resultat** | **-150 000 kr** |

**Konklusjon:** Budsjettet viser et forventet underskudd på 150 000 kr. Bedriften må enten øke salget, øke prisen, eller redusere kostnadene for å oppnå lønnsomhet.`
    },
    {
      id: 'okonomi-ledelse-7-1-def-likviditet',
      type: 'definition',
      title: 'Likviditetsbudsjett',
      content: `Et **likviditetsbudsjett** viser forventede innbetalinger og utbetalinger, og når de skjer. Dette er viktig fordi:

- Resultat og likviditet er ikke det samme
- En bedrift kan gå konkurs selv med overskudd hvis den ikke har penger til å betale regningene
- Mange innbetalinger og utbetalinger kommer forskjøvet i tid (kredittid)

**Oppbygging:**
Inngående beholdning (IB)
+ Innbetalinger
- Utbetalinger
= Utgående beholdning (UB)`
    },
    {
      id: 'okonomi-ledelse-7-1-example-2',
      type: 'example',
      title: 'Eksempel: Likviditetsbudsjett',
      problem: 'En bedrift starter januar med 50 000 kr på konto. Forventet for 1. kvartal:\n\nJanuar: Innbetalinger 80 000, utbetalinger 90 000\nFebruar: Innbetalinger 100 000, utbetalinger 85 000\nMars: Innbetalinger 120 000, utbetalinger 95 000\n\nSett opp et likviditetsbudsjett.',
      solution: `**Løsning - Likviditetsbudsjett:**

| | Januar | Februar | Mars |
|---|--------|---------|------|
| IB | 50 000 | 40 000 | 55 000 |
| + Innbetalinger | 80 000 | 100 000 | 120 000 |
| - Utbetalinger | 90 000 | 85 000 | 95 000 |
| = **UB** | **40 000** | **55 000** | **80 000** |

**Analyse:**
- Januar: Negativ likviditetsutvikling (-10 000), men beholdningen holder
- Februar: Positiv likviditetsutvikling (+15 000)
- Mars: Positiv likviditetsutvikling (+25 000)

Bedriften har positiv likviditet gjennom hele kvartalet, så det er ingen umiddelbar likviditetskrise.`
    },
    {
      id: 'okonomi-ledelse-7-1-text-avvik',
      type: 'text',
      title: 'Budsjettoppfølging og avviksanalyse',
      content: `Budsjettet er først nyttig når det følges opp. **Avviksanalyse** innebærer å:

1. **Sammenligne** budsjetterte tall med faktiske tall
2. **Identifisere** avvik (forskjeller)
3. **Analysere** årsakene til avvikene
4. **Iverksette** tiltak ved behov

**Typer avvik:**
- **Positivt avvik** - bedre enn budsjett (høyere inntekt eller lavere kostnad)
- **Negativt avvik** - dårligere enn budsjett (lavere inntekt eller høyere kostnad)

Avviksanalyse gir læring som forbedrer fremtidige budsjetter.`
    },
    {
      id: 'okonomi-ledelse-7-1-tip-1',
      type: 'tip',
      title: 'Tips for god budsjettering',
      content: `- **Vær realistisk** - for optimistiske budsjetter mister troverdighet
- **Bruk historiske data** - fjorårsdtall er et godt utgangspunkt
- **Involver de som påvirkes** - øker eierskap og realisme
- **Følg opp regelmessig** - månedlig sammenligning med faktiske tall
- **Vær forberedt på endringer** - revider budsjettet ved store avvik`
    },
    {
      id: 'okonomi-ledelse-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om budsjettering',
        subTasks: [
          { label: 'a', task: 'Nevn tre formål med budsjettering.', solution: 'Formål med budsjettering er blant annet: planlegging, koordinering, kommunikasjon av mål, motivasjon, og kontroll/oppfølging.' },
          { label: 'b', task: 'Hva er forskjellen mellom resultatbudsjett og likviditetsbudsjett?', solution: 'Resultatbudsjettet viser forventede inntekter og kostnader (lønnsomhet), mens likviditetsbudsjettet viser forventede innbetalinger og utbetalinger (pengestrøm).' },
          { label: 'c', task: 'Hvorfor kan en bedrift med overskudd likevel få likviditetsproblemer?', solution: 'Fordi inntekter og innbetalinger ikke skjer samtidig. En kunde kan få kreditt, så salget (inntekt) skjer før innbetalingen. Samtidig må bedriften betale sine regninger. Tidsforskyvning mellom inn- og utbetalinger kan gi likviditetskrise.' }
        ],
        hints: ['Tenk på hva budsjettet brukes til', 'Hva er forskjellen på inntekt og innbetaling?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp resultatbudsjett',
        subTasks: [
          { label: 'a', task: 'En frisørsalong forventer 400 kunder i måneden med snittinntekt 600 kr per kunde. Beregn forventede salgsinntekter.', solution: 'Salgsinntekter = 400 × 600 = 240 000 kr', answer: 240000 },
          { label: 'b', task: 'Variable kostnader (produkter) er 50 kr per kunde. Beregn totale variable kostnader.', solution: 'Variable kostnader = 400 × 50 = 20 000 kr', answer: 20000 },
          { label: 'c', task: 'Faste kostnader er: Husleie 30 000 kr, Lønn 150 000 kr, Andre kostnader 15 000 kr. Beregn forventet månedlig resultat.', solution: 'Dekningsbidrag = 240 000 - 20 000 = 220 000 kr. Faste kostnader = 30 000 + 150 000 + 15 000 = 195 000 kr. Resultat = 220 000 - 195 000 = 25 000 kr', answer: 25000 }
        ],
        hints: ['Inntekt = Pris × Antall', 'Resultat = DB - FK'],
        solution: 'a) 240 000 kr, b) 20 000 kr, c) 25 000 kr overskudd',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Likviditetsbudsjett og avviksanalyse',
        subTasks: [
          { label: 'a', task: 'Sett opp et likviditetsbudsjett for april-juni basert på: IB april 100 000 kr. April: Inn 150 000, Ut 180 000. Mai: Inn 200 000, Ut 170 000. Juni: Inn 220 000, Ut 190 000.', solution: 'April: IB 100 000 + 150 000 - 180 000 = UB 70 000. Mai: IB 70 000 + 200 000 - 170 000 = UB 100 000. Juni: IB 100 000 + 220 000 - 190 000 = UB 130 000.' },
          { label: 'b', task: 'En bedrift budsjetterte med salg på 500 000 kr, men oppnådde kun 450 000 kr. Beregn avviket i kroner og prosent.', solution: 'Avvik = 450 000 - 500 000 = -50 000 kr (negativt avvik). Prosent: -50 000/500 000 × 100 = -10%', answer: -50000 },
          { label: 'c', task: 'Nevn tre mulige årsaker til salgsavviket og foreslå tiltak for hver.', solution: '1) Lavere etterspørsel enn forventet - tiltak: økt markedsføring, rabatter. 2) Økt konkurranse - tiltak: differensiering, serviceforbedring. 3) Feil prissetting - tiltak: markedsundersøkelse, prisjustering.' }
        ],
        hints: ['UB = IB + Innbetalinger - Utbetalinger', 'Avvik = Faktisk - Budsjett'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 8: Etikk og samfunnsansvar
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_8_1: TextbookChapter = {
  id: 'okonomi-ledelse-8-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '8.1',
  title: 'Etikk og samfunnsansvar',
  description: 'Lær om etiske dilemmaer i næringslivet, bedriftens samfunnsansvar og bærekraftig virksomhetsstyring.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for hva etikk og samfunnsansvar innebærer for en virksomhet',
    'drøfte etiske dilemmaer i næringslivet',
    'forklare sammenhengen mellom bærekraft og lønnsomhet'
  ],
  content: [
    {
      id: 'okonomi-ledelse-8-1-intro',
      type: 'text',
      content: `I en tid med økt fokus på bærekraft, miljø og sosiale forhold, stilles det stadig strengere krav til hvordan virksomheter driver sin virksomhet. Etikk og samfunnsansvar handler om mer enn å følge lover og regler - det handler om å ta ansvar for konsekvensene av virksomhetens aktiviteter.`
    },
    {
      id: 'okonomi-ledelse-8-1-def-etikk',
      type: 'definition',
      title: 'Etikk',
      content: `**Etikk** er læren om rett og galt, godt og ondt. I næringslivssammenheng handler etikk om:

- Hvordan bedriften behandler ansatte, kunder og leverandører
- Hvordan produkter og tjenester påvirker samfunn og miljø
- Hvordan bedriften opptrer overfor konkurrenter
- Åpenhet og ærlighet i kommunikasjon

**Næringslivsetikk** er anvendelse av etiske prinsipper på beslutninger og handlinger i bedrifter.`
    },
    {
      id: 'okonomi-ledelse-8-1-text-dilemma',
      type: 'text',
      title: 'Etiske dilemmaer',
      content: `Et **etisk dilemma** oppstår når vi må velge mellom alternativer der ingen er helt gode, eller når ulike hensyn står mot hverandre.

**Eksempler på etiske dilemmaer i næringslivet:**
- Skal bedriften si opp ansatte for å øke overskuddet?
- Skal bedriften bruke underleverandører i lavkostland med dårlige arbeidsforhold?
- Skal bedriften markedsføre produkter som kan være skadelige?
- Hvor mye skal bedriften investere i miljøtiltak som går utover det loven krever?
- Skal bedriften betale lavest mulig skatt gjennom skatteplanlegging?`
    },
    {
      id: 'okonomi-ledelse-8-1-def-csr',
      type: 'definition',
      title: 'Samfunnsansvar (CSR)',
      content: `**Samfunnsansvar** (CSR - Corporate Social Responsibility) innebærer at bedrifter tar ansvar for hvordan deres virksomhet påvirker mennesker, samfunn og miljø.

Samfunnsansvaret omfatter typisk tre dimensjoner:

**1. Økonomisk ansvar:**
- Drive lønnsom virksomhet
- Skape arbeidsplasser og verdier
- Betale skatt

**2. Sosialt ansvar:**
- Gode arbeidsforhold
- Mangfold og inkludering
- Bidra til lokalsamfunnet

**3. Miljøansvar:**
- Redusere utslipp og forurensning
- Effektiv ressursbruk
- Bærekraftige produkter`
    },
    {
      id: 'okonomi-ledelse-8-1-def-baerekraft',
      type: 'definition',
      title: 'Bærekraft',
      content: `**Bærekraft** handler om å dekke dagens behov uten å ødelegge for fremtidige generasjoners muligheter til å dekke sine behov.

**FNs bærekraftsmål** er 17 mål for bærekraftig utvikling som verden skal oppnå innen 2030. Eksempler som er relevante for næringslivet:

- Mål 8: Anstendig arbeid og økonomisk vekst
- Mål 9: Industri, innovasjon og infrastruktur
- Mål 12: Ansvarlig forbruk og produksjon
- Mål 13: Stoppe klimaendringene

Mange bedrifter integrerer bærekraftsmålene i sin strategi og rapportering.`
    },
    {
      id: 'okonomi-ledelse-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Etisk dilemma',
      problem: 'En klesbutikk kan kjøpe t-skjorter fra to leverandører:\n\nLeverandør A: Pris 80 kr, produsert i fabrikk med dokumentert dårlige arbeidsforhold\nLeverandør B: Pris 120 kr, sertifisert for gode arbeidsforhold og miljøstandarder\n\nHvis butikken selger 1000 t-skjorter, vil leverandør B gi 40 000 kr lavere fortjeneste. Drøft det etiske dilemmaet.',
      solution: `**Drøfting:**

**Argumenter for leverandør A (billigst):**
- Høyere fortjeneste sikrer butikkens overlevelse
- Lavere pris til kunder
- Konkurrenter bruker kanskje lignende leverandører

**Argumenter for leverandør B (etisk):**
- Ta ansvar for arbeidsforhold i leverandørkjeden
- Unngå omdømmerisiko hvis forholdene avdekkes
- Mange kunder verdsetter etisk produksjon
- Langsiktig bidrag til bedre standarder globalt

**Mulige løsninger:**
- Velge leverandør B og markedsføre den etiske profilen
- Øke prisen noe for å kompensere merkostnaden
- Gradvis overgang til mer etiske leverandører
- Arbeide for å forbedre forholdene hos leverandør A

**Konklusjon:** Det finnes ikke ett riktig svar, men bedriften bør ta en bevisst beslutning og kunne stå for den.`
    },
    {
      id: 'okonomi-ledelse-8-1-text-lonnsomhet',
      type: 'text',
      title: 'Bærekraft og lønnsomhet',
      content: `Tidligere ble samfunnsansvar ofte sett som en kostnad. I dag ser stadig flere bedrifter at bærekraft og lønnsomhet kan gå hånd i hånd:

**Hvorfor bærekraft kan være lønnsomt:**
- **Omdømme:** Kunder, ansatte og investorer foretrekker ansvarlige bedrifter
- **Risikostyring:** Reduserer risiko for bøter, søksmål og omdømmetap
- **Innovasjon:** Bærekraftskrav driver frem nye produkter og løsninger
- **Kostnadsbesparelser:** Energieffektivisering og mindre avfall
- **Tilgang til kapital:** Mange investorer har bærekraftskriterier
- **Rekruttering:** Attraktiv arbeidsgiver for talenter

**ESG-rapportering:** Stadig flere bedrifter rapporterer på Environmental, Social og Governance-faktorer i tillegg til finansielle resultater.`
    },
    {
      id: 'okonomi-ledelse-8-1-note-1',
      type: 'note',
      title: 'Åpenhetsloven',
      content: `Fra 2022 gjelder **åpenhetsloven** i Norge. Den pålegger større virksomheter å:

- Gjennomføre aktsomhetsvurderinger for menneskerettigheter og arbeidsforhold
- Offentliggjøre en redegjørelse for arbeidet
- Svare på henvendelser fra allmennheten

Loven skal fremme virksomheters respekt for menneskerettigheter og anstendige arbeidsforhold, også i leverandørkjeder.`
    },
    {
      id: 'okonomi-ledelse-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om etikk og samfunnsansvar',
        subTasks: [
          { label: 'a', task: 'Hva mener vi med etikk i næringslivssammenheng?', solution: 'Etikk i næringslivssammenheng handler om rett og galt i hvordan bedriften behandler ansatte, kunder, leverandører og samfunnet, og hvordan den tar hensyn til miljø og sosiale forhold.' },
          { label: 'b', task: 'Nevn de tre dimensjonene i bedriftens samfunnsansvar (CSR).', solution: 'De tre dimensjonene er: 1) Økonomisk ansvar (lønnsomhet, arbeidsplasser, skatt), 2) Sosialt ansvar (arbeidsforhold, mangfold, lokalsamfunn), 3) Miljøansvar (utslipp, ressursbruk, bærekraftige produkter).' },
          { label: 'c', task: 'Hva er bærekraft?', solution: 'Bærekraft handler om å dekke dagens behov uten å ødelegge for fremtidige generasjoners muligheter til å dekke sine behov.' }
        ],
        hints: ['Tenk på hva bedriften har ansvar for', 'Hva betyr det å tenke langsiktig?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Etiske dilemmaer i praksis',
        subTasks: [
          { label: 'a', task: 'Gi et eksempel på et etisk dilemma en bedrift kan stå overfor.', solution: 'Eksempler: Skal bedriften si opp ansatte for å øke overskuddet? Skal den bruke billige leverandører med dårlige arbeidsforhold? Skal den markedsføre produkter som kan være usunne?' },
          { label: 'b', task: 'En bedrift oppdager at en konkurrent bryter miljøreglene og dermed kan tilby lavere priser. Hva bør bedriften gjøre?', solution: 'Bedriften kan: 1) Varsle myndighetene om lovbruddet, 2) Kommunisere til kunder at egne produkter er produsert lovlig og bærekraftig, 3) Ikke selv begynne å bryte reglene. Rettferdig konkurranse krever at alle følger samme regler.' },
          { label: 'c', task: 'Nevn tre grunner til at bærekraft kan være lønnsomt for en bedrift.', solution: 'Grunner: 1) Bedre omdømme som tiltrekker kunder og talenter, 2) Redusert risiko for bøter og omdømmetap, 3) Kostnadsbesparelser gjennom effektivisering, 4) Tilgang til investorer med bærekraftskriterier, 5) Innovasjon og nye markedsmuligheter.' }
        ],
        hints: ['Tenk på situasjoner der ulike hensyn står mot hverandre', 'Hvordan kan ansvar lønne seg?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'okonomi-ledelse-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'okonomi-ledelse-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Case: Bærekraftig forretningsmodell',
        subTasks: [
          { label: 'a', task: 'En møbelprodusent vurderer å satse på bærekraftige møbler laget av resirkulert materiale. Dette vil øke produksjonskostnadene med 20 %. Diskuter fordeler og ulemper med denne strategien.', solution: 'Fordeler: Differensiering fra konkurrenter, appellerer til miljøbevisste kunder, kan ta høyere pris, positivt omdømme, fremtidsrettet strategi. Ulemper: Høyere kostnader, usikkert om kunder vil betale mer, kan tape kunder som prioriterer pris, krever investeringer og kompetanse.' },
          { label: 'b', task: 'Hvordan kan møbelprodusenten kommunisere sin bærekraftsstrategi til kunder og andre interessenter?', solution: 'Kommunikasjon kan skje gjennom: merking og sertifisering av produkter, informasjon på nettsider og i butikk, sosiale medier, bærekraftsrapportering, samarbeid med miljøorganisasjoner, PR og medieomtale.' },
          { label: 'c', task: 'Velg tre av FNs bærekraftsmål som kan være relevante for møbelprodusenten og forklar hvorfor.', solution: 'Relevante mål kan være: Mål 8 (Anstendig arbeid) - sikre gode arbeidsforhold i produksjonen. Mål 12 (Ansvarlig forbruk og produksjon) - bruke resirkulert materiale og redusere avfall. Mål 13 (Klimahandling) - redusere klimaavtrykk i produksjon og transport.' }
        ],
        hints: ['Tenk på hvordan bærekraft kan skape konkurransefortrinn', 'Hvilke interessenter bryr seg om bærekraft?'],
        solution: 'Se deloppgavene for fullstendige svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const OKONOMI_LEDELSE_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_LEDELSE_1_1,
  CHAPTER_OKONOMI_LEDELSE_2_1,
  CHAPTER_OKONOMI_LEDELSE_3_1,
  CHAPTER_OKONOMI_LEDELSE_4_1,
  CHAPTER_OKONOMI_LEDELSE_5_1,
  CHAPTER_OKONOMI_LEDELSE_6_1,
  CHAPTER_OKONOMI_LEDELSE_7_1,
  CHAPTER_OKONOMI_LEDELSE_8_1
];
