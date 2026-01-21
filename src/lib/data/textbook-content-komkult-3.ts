/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Kommunikasjon og kultur 3 (VG3 valgfag)
 * Følger LK20 læreplan - fordypningskurs
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Fordypning i kulturteori
// ============================================================================

export const CHAPTER_KOMKULT3_1: TextbookChapter = {
  id: 'komkult3-1',
  courseId: 'komkult-3',
  chapterNumber: '1',
  title: 'Fordypning i kulturteori',
  description: 'Avanserte kulturteoretiske perspektiver og analytiske verktøy for å forstå kulturelle fenomener.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere kulturelle uttrykk ved hjelp av ulike teoretiske perspektiver',
    'drøfte hvordan kultur skapes, formidles og endres i samfunnet',
    'vurdere kritisk ulike kulturteoretiske tilnærminger',
  ],
  content: [
    {
      id: 'komkult3-1-intro',
      type: 'text',
      content: `## Kulturteoretiske perspektiver

Kulturteori gir oss verktøy for å analysere og forstå kulturelle fenomener. I dette kapittelet går vi i dybden på ulike teoretiske perspektiver som brukes i kulturstudier.

**Hvorfor kulturteori?**
- Gir analytiske verktøy for å forstå kulturelle uttrykk
- Avdekker skjulte maktstrukturer og betydninger
- Setter kulturelle fenomener i større sammenheng
- Utvikler kritisk tenkning om kultur og samfunn

Kulturteori er et tverrfaglig felt som henter inspirasjon fra sosiologi, antropologi, filosofi, litteraturvitenskap og mediefag.`,
    },
    {
      id: 'komkult3-1-def-1',
      type: 'definition',
      title: 'Sentrale kulturteoretiske retninger',
      content: `**Strukturalisme:**
Analyserer kultur som et system av tegn og strukturer. Fokuserer på underliggende mønstre som styrer kulturelle uttrykk. Ferdinand de Saussure og Claude Lévi-Strauss er sentrale.

**Poststrukturalisme:**
Kritiserer strukturalismens tro på faste strukturer. Mening er ustabil og kontekstavhengig. Jacques Derrida og Michel Foucault er sentrale.

**Kulturelle studier (Cultural Studies):**
Britisk tradisjon fra Birmingham-skolen. Analyserer populærkultur, medier og hverdagskultur med fokus på makt, klasse og motstand.

**Postkolonialisme:**
Analyserer kulturelle virkninger av kolonialismen og hvordan vestlige perspektiver dominerer. Edward Said og Gayatri Spivak er sentrale.

**Feminisme og kjønnsteori:**
Analyserer hvordan kjønn konstrueres kulturelt og hvordan makt er knyttet til kjønn. Judith Butler er sentral for queer-teori.`,
    },
    {
      id: 'komkult3-1-def-2',
      type: 'definition',
      title: 'Sentrale begreper i kulturanalyse',
      content: `**Diskurs:**
Måter å snakke om og forstå verden på. Diskurser former hva vi kan tenke og si om et tema. Foucaults begrep.

**Hegemoni:**
Antonio Gramscis begrep for kulturell og ideologisk dominans. Den herskende klassen opprettholder makt gjennom samtykke, ikke bare tvang.

**Representasjon:**
Hvordan kulturer, grupper eller fenomener fremstilles i medier og kulturelle uttrykk. Stuart Hall er sentral.

**Identitetspolitikk:**
Politisk mobilisering basert på gruppeidentitet som kjønn, etnisitet eller seksualitet.

**Hybriditet:**
Kulturell blanding og krysning som oppstår i møter mellom kulturer. Homi Bhabha er sentral.

**Performativitet:**
Identitet og kjønn skapes gjennom gjentatte handlinger, ikke noe vi er, men noe vi gjør. Judith Butler.`,
    },
    {
      id: 'komkult3-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av kulturelt fenomen',
      problem: `Hvordan kan vi bruke kulturteoretiske perspektiver til å analysere fenomenet influensere på sosiale medier?`,
      solution: `**Kulturell analyse av influensere:**

**Strukturalistisk perspektiv:**
- Identifiserer koder og konvensjoner i influenserinnhold
- Analyserer billedspråk, estetikk og narrative strukturer
- Finner underliggende mønstre på tvers av ulike influensere

**Poststrukturalistisk perspektiv:**
- Undersøker hvordan mening er ustabil og kontekstavhengig
- Analyserer hvordan influensere iscenesetter autentisitet
- Problematiserer grensen mellom ekte og konstruert

**Cultural Studies-perspektiv:**
- Ser på influensere som uttrykk for senkapitalisme
- Analyserer forholdet mellom reklame og innhold
- Undersøker publikums motstand eller aksept

**Feministisk perspektiv:**
- Analyserer kjønnede representasjoner
- Undersøker skjønnhetsidealer og kroppspress
- Ser på maktforhold i influenserøkonomien

**Postkolonialt perspektiv:**
- Analyserer hvem som får plass som influensere
- Undersøker kulturell appropriasjon
- Ser på globale maktforhold i sosiale medier`,
    },
    {
      id: 'komkult3-1-note-1',
      type: 'note',
      title: 'Kritisk kulturanalyse',
      content: `Når du analyserer kulturelle fenomener, er det viktig å:
- Være bevisst ditt eget ståsted og fordommer
- Anvende flere teoretiske perspektiver
- Se sammenhenger mellom kultur, makt og samfunn
- Stille spørsmål ved det som fremstår som selvfølgelig
- Undersøke hvem som tjener på bestemte kulturelle uttrykk`,
    },
    {
      id: 'komkult3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket kulturteoretisk begrep beskriver hvordan den dominerende gruppen opprettholder makt gjennom kulturell påvirkning og samtykke?',
        options: [
          { id: 'a', text: 'Hegemoni', isCorrect: true },
          { id: 'b', text: 'Diskurs', isCorrect: false },
          { id: 'c', text: 'Hybriditet', isCorrect: false },
          { id: 'd', text: 'Performativitet', isCorrect: false },
        ],
        solution: 'Hegemoni er Antonio Gramscis begrep for kulturell og ideologisk dominans, der den herskende klassen opprettholder makt gjennom samtykke og kulturell påvirkning, ikke bare tvang.',
      },
    },
    {
      id: 'komkult3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken teoretiker er mest forbundet med begrepet performativitet i sammenheng med kjønn?',
        options: [
          { id: 'a', text: 'Judith Butler', isCorrect: true },
          { id: 'b', text: 'Michel Foucault', isCorrect: false },
          { id: 'c', text: 'Stuart Hall', isCorrect: false },
          { id: 'd', text: 'Edward Said', isCorrect: false },
        ],
        solution: 'Judith Butler er mest kjent for begrepet performativitet i sammenheng med kjønn. Hun argumenterer for at kjønn ikke er noe vi er, men noe vi gjør gjennom gjentatte handlinger.',
      },
    },
    {
      id: 'komkult3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et kulturelt fenomen fra samtiden og analyser det ved hjelp av minst to ulike kulturteoretiske perspektiver.',
        hints: ['Du kan velge fenomener som strømmetjenester, gaming-kultur, motetrends eller musikksjangere'],
        solution: 'Svaret bør inneholde en klar beskrivelse av fenomenet, anvendelse av to teoretiske perspektiver med relevante begreper, og en refleksjon over hva de ulike perspektivene avdekker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med diskurs i kulturteoretisk sammenheng?',
        options: [
          { id: 'a', text: 'Måter å snakke om og forstå verden på som former hva vi kan tenke og si', isCorrect: true },
          { id: 'b', text: 'En formell debatt mellom to parter', isCorrect: false },
          { id: 'c', text: 'Skriftlig kommunikasjon i akademiske tekster', isCorrect: false },
          { id: 'd', text: 'Verbale konflikter i kulturmøter', isCorrect: false },
        ],
        solution: 'I kulturteoretisk sammenheng refererer diskurs til måter å snakke om og forstå verden på. Diskurser former hva vi kan tenke, si og gjøre innenfor et bestemt felt eller tema.',
      },
    },
    {
      id: 'komkult3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft begrepet representasjon. Hvorfor er det viktig hvem som representerer hvem i kulturelle uttrykk?',
        hints: ['Tenk på maktforhold, stereotypier og hvem som har definisjonsmakt'],
        solution: 'Representasjon handler om hvordan grupper fremstilles. Det er viktig fordi det påvirker hvordan vi forstår verden, kan forsterke eller utfordre stereotypier, og er knyttet til makt over hvem som får fortelle historier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken teoretisk retning fokuserer særlig på kulturelle virkninger av kolonialismen?',
        options: [
          { id: 'a', text: 'Postkolonialisme', isCorrect: true },
          { id: 'b', text: 'Strukturalisme', isCorrect: false },
          { id: 'c', text: 'Funksjonalisme', isCorrect: false },
          { id: 'd', text: 'Behaviorisme', isCorrect: false },
        ],
        solution: 'Postkolonialisme er den teoretiske retningen som fokuserer på kulturelle virkninger av kolonialismen og hvordan vestlige perspektiver fortsetter å dominere.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Kommunikasjon i arbeidslivet
// ============================================================================

export const CHAPTER_KOMKULT3_2: TextbookChapter = {
  id: 'komkult3-2',
  courseId: 'komkult-3',
  chapterNumber: '2',
  title: 'Kommunikasjon i arbeidslivet',
  description: 'Profesjonell kommunikasjon, organisasjonskultur og strategisk kommunikasjon i ulike arbeidskontekster.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere ulike kommunikasjonsformer i arbeidslivet',
    'vurdere hvordan organisasjonskultur påvirker kommunikasjon',
    'utvikle ferdigheter i profesjonell muntlig og skriftlig kommunikasjon',
  ],
  content: [
    {
      id: 'komkult3-2-intro',
      type: 'text',
      content: `## Profesjonell kommunikasjon

Kommunikasjon i arbeidslivet skiller seg fra hverdagskommunikasjon på flere måter. Den er ofte mer formell, strategisk og målrettet.

**Kjennetegn ved profesjonell kommunikasjon:**
- Tilpasset formål og mottaker
- Følger konvensjoner og sjangerkrav
- Bevisst bruk av språk og virkemidler
- Ivaretar profesjonelle relasjoner
- Ofte dokumentert og etterprøvbar

Å mestre profesjonell kommunikasjon er en viktig kompetanse i dagens arbeidsliv, uansett bransje.`,
    },
    {
      id: 'komkult3-2-def-1',
      type: 'definition',
      title: 'Kommunikasjonsformer i arbeidslivet',
      content: `**Intern kommunikasjon:**
Kommunikasjon innad i organisasjonen. Kan være vertikal (mellom nivåer) eller horisontal (mellom avdelinger). Viktig for samarbeid og kultur.

**Ekstern kommunikasjon:**
Kommunikasjon med omverdenen: kunder, samarbeidspartnere, media, myndigheter. Påvirker organisasjonens omdømme.

**Formell kommunikasjon:**
Følger offisielle kanaler og strukturer. Møter, rapporter, e-poster, offisielle brev.

**Uformell kommunikasjon:**
Samtaler i gangen, sosiale medier, uformelle møter. Viktig for relasjoner og informasjonsflyt.

**Digital kommunikasjon:**
E-post, chat, videokonferanser, prosjektstyringsverktøy. Dominerende i moderne arbeidsliv.

**Krisekommunikasjon:**
Kommunikasjon under og etter kriser. Krever åpenhet, raskhet og empati.`,
    },
    {
      id: 'komkult3-2-def-2',
      type: 'definition',
      title: 'Organisasjonskultur og kommunikasjon',
      content: `**Organisasjonskultur:**
De delte verdiene, normene og praksisene som preger en organisasjon. Påvirker hvordan man kommuniserer.

**Kulturtyper (etter Cameron og Quinn):**
- Klan-kultur: Samarbeidspreget, uformell
- Adhokrati-kultur: Innovativ, fleksibel
- Markeds-kultur: Konkurransepreget, resultatorientert
- Hierarki-kultur: Strukturert, formell

**Kommunikasjonsstil varierer:**
- Åpen vs. lukket kommunikasjonskultur
- Formell vs. uformell tone
- Direkte vs. indirekte tilbakemeldinger
- Hierarkisk vs. flat struktur

**Kulturens påvirkning:**
- Former forventninger til kommunikasjon
- Bestemmer hvilke kanaler som brukes
- Påvirker hva som er akseptabelt å si
- Skaper felles referanserammer`,
    },
    {
      id: 'komkult3-2-example-1',
      type: 'example',
      title: 'Eksempel: Effektiv møtekultur',
      problem: `Hvordan kan man forbedre kommunikasjonen i møter for å gjøre dem mer effektive?`,
      solution: `**Forbedring av møtekommunikasjon:**

**Før møtet:**
- Tydelig agenda sendt i forkant
- Klare forventninger til forberedelse
- Riktige deltakere invitert
- Tidsramme fastsatt

**Under møtet:**
- Møteleder styrer diskusjonen
- Alle får komme til orde
- Holder seg til agenda
- Aktiv lytting og respekt
- Konkluderer og oppsummerer

**Etter møtet:**
- Referat sendes ut raskt
- Ansvar og frister tydeliggjort
- Oppfølging av beslutninger
- Evaluering av møtekvalitet

**Vanlige problemer:**
- For mange eller for få deltakere
- Uklar hensikt med møtet
- Dominerende enkeltpersoner
- Mangel på oppfølging
- Unødvendige møter

**Digitale møter krever ekstra:**
- Tydelig turregler
- Kamerabruk for engasjement
- Kortere varighet med pauser
- God teknisk kvalitet`,
    },
    {
      id: 'komkult3-2-tip-1',
      type: 'tip',
      title: 'Profesjonell e-post',
      content: `En profesjonell e-post bør ha:
- Beskrivende emnefelt
- Høflig og passende hilsen
- Tydelig hensikt i starten
- Strukturert innhold
- Klar handlingsoppfordring
- Profesjonell avslutning
- Kontaktinformasjon

Husk: E-poster kan videresendes og lagres. Skriv alltid som om andre kan lese det.`,
    },
    {
      id: 'komkult3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom intern og ekstern kommunikasjon i en organisasjon?',
        options: [
          { id: 'a', text: 'Intern er kommunikasjon innad i organisasjonen, ekstern er med omverdenen', isCorrect: true },
          { id: 'b', text: 'Intern er skriftlig, ekstern er muntlig', isCorrect: false },
          { id: 'c', text: 'Intern er uformell, ekstern er formell', isCorrect: false },
          { id: 'd', text: 'Intern er mellom ledere, ekstern er med ansatte', isCorrect: false },
        ],
        solution: 'Intern kommunikasjon foregår innad i organisasjonen, mens ekstern kommunikasjon er med omverdenen som kunder, media og samarbeidspartnere.',
      },
    },
    {
      id: 'komkult3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken organisasjonskultur kjennetegnes av samarbeid, teamfølelse og uformell kommunikasjon?',
        options: [
          { id: 'a', text: 'Klan-kultur', isCorrect: true },
          { id: 'b', text: 'Markeds-kultur', isCorrect: false },
          { id: 'c', text: 'Hierarki-kultur', isCorrect: false },
          { id: 'd', text: 'Adhokrati-kultur', isCorrect: false },
        ],
        solution: 'Klan-kultur kjennetegnes av samarbeid, teamfølelse og uformell kommunikasjon, med fokus på mentorskap og lojalitet.',
      },
    },
    {
      id: 'komkult3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en profesjonell e-post der du ber om et møte med en potensiell samarbeidspartner.',
        hints: ['Husk emnefelt, høflig tone, klar hensikt og handlingsoppfordring'],
        solution: 'E-posten bør ha et informativt emnefelt, profesjonell hilsen, kort presentasjon, tydelig hensikt med møteforespørselen, forslag til tidspunkt, og høflig avslutning med kontaktinformasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er viktigst ved krisekommunikasjon?',
        options: [
          { id: 'a', text: 'Åpenhet, raskhet og empati', isCorrect: true },
          { id: 'b', text: 'Hemmelighold til situasjonen er avklart', isCorrect: false },
          { id: 'c', text: 'Fokusere på å beskytte organisasjonens omdømme først', isCorrect: false },
          { id: 'd', text: 'Vente til alle fakta er klare før man kommuniserer', isCorrect: false },
        ],
        solution: 'God krisekommunikasjon kjennetegnes av åpenhet, raskhet og empati. Det er viktig å kommunisere tidlig, være ærlig og vise at man tar situasjonen alvorlig.',
      },
    },
    {
      id: 'komkult3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser kommunikasjonskulturen i en organisasjon du kjenner til (skole, idrettslag, arbeidsplass). Hvordan påvirker kulturen kommunikasjonen?',
        hints: ['Bruk begreper som formell/uformell, åpen/lukket, hierarkisk/flat'],
        solution: 'Svaret bør beskrive organisasjonen kort, identifisere kjennetegn ved kommunikasjonskulturen, gi konkrete eksempler, og reflektere over hvordan kulturen påvirker kommunikasjonen positivt og negativt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør inkluderes i en god møteagenda?',
        options: [
          { id: 'a', text: 'Saker, ansvarlige, tidsrammer og forventet forberedelse', isCorrect: true },
          { id: 'b', text: 'Kun en liste over saker som skal diskuteres', isCorrect: false },
          { id: 'c', text: 'Detaljerte løsningsforslag til alle saker', isCorrect: false },
          { id: 'd', text: 'Navn på alle som skal delta', isCorrect: false },
        ],
        solution: 'En god møteagenda bør inneholde saker som skal behandles, hvem som er ansvarlig for hver sak, tidsrammer, og hva deltakerne forventes å forberede.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Flerkulturelle samfunn
// ============================================================================

export const CHAPTER_KOMKULT3_3: TextbookChapter = {
  id: 'komkult3-3',
  courseId: 'komkult-3',
  chapterNumber: '3',
  title: 'Flerkulturelle samfunn',
  description: 'Kulturelt mangfold, integrering, identitet og kommunikasjon i flerkulturelle samfunn.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere utfordringer og muligheter i flerkulturelle samfunn',
    'drøfte ulike perspektiver på integrering og kulturelt mangfold',
    'reflektere over egen kulturell bakgrunn og møter med andre kulturer',
  ],
  content: [
    {
      id: 'komkult3-3-intro',
      type: 'text',
      content: `## Hva er et flerkulturelt samfunn?

Et flerkulturelt samfunn er et samfunn der mennesker med ulik kulturell bakgrunn lever sammen. Norge har blitt et stadig mer flerkulturelt samfunn gjennom innvandring, globalisering og økt mobilitet.

**Flerkulturalitet som begrep:**
- Deskriptivt: Beskriver at samfunnet har kulturelt mangfold
- Normativt: En politikk som fremmer kulturelt mangfold

**Norges flerkulturelle utvikling:**
- Tradisjonelt mangfold: Samer, kvener, romani
- Arbeidsinnvandring fra 1960-tallet
- Flyktninger og familiegjenforening
- EØS-migrasjon og studentmigrasjon
- Internasjonalisering gjennom medier og teknologi`,
    },
    {
      id: 'komkult3-3-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Etnisitet:**
Tilhørighet til en gruppe basert på felles opphav, kultur, språk eller religion. Både selvidentifikasjon og tilskriving fra andre.

**Minoritet og majoritet:**
Minoritet: Gruppe som er i mindretall og ofte har mindre makt. Majoritet: Den dominerende gruppen i samfunnet.

**Integrering:**
Prosess der innvandrere blir del av samfunnet samtidig som de kan beholde egen kultur. Toveis prosess.

**Assimilering:**
Minoriteten oppgir egen kultur og tilpasser seg majoriteten fullt ut. Enveis prosess.

**Segregering:**
Grupper lever atskilt fra hverandre med lite kontakt og samhandling.

**Inkludering:**
Alle får delta i samfunnet uavhengig av bakgrunn. Vektlegger tilhørighet og deltakelse.

**Kulturrelativisme:**
Holdningen om at kulturer må forstås på egne premisser, ikke bedømmes ut fra egen kultur.

**Etnosentrisme:**
Å se verden fra egen kulturs perspektiv og vurdere andre kulturer ut fra dette.`,
    },
    {
      id: 'komkult3-3-def-2',
      type: 'definition',
      title: 'Perspektiver på mangfold',
      content: `**Multikulturalisme:**
Politikk som anerkjenner og støtter kulturelt mangfold. Vektlegger gruppers rett til å bevare egen kultur.

**Interkulturalisme:**
Vektlegger dialog og samhandling mellom kulturer. Fokuserer på det som er felles og på gjensidig læring.

**Universalisme:**
Vektlegger universelle menneskerettigheter og verdier som gjelder alle uavhengig av kultur.

**Kritikk av multikulturalisme:**
- Kan føre til parallellsamfunn
- Overser ulikhet innad i grupper
- Kan legitimere undertrykkelse
- Essensialiserer kultur

**Kritikk av assimilering:**
- Respekterer ikke kulturelt mangfold
- Ensidig tilpasningskrav
- Ignorerer strukturell diskriminering
- Kan være urealistisk`,
    },
    {
      id: 'komkult3-3-example-1',
      type: 'example',
      title: 'Eksempel: Interkulturell kommunikasjon',
      problem: `Hva er viktige hensyn ved interkulturell kommunikasjon?`,
      solution: `**Interkulturell kommunikasjon:**

**Verbale forskjeller:**
- Språkbarrierer og misforståelser
- Direkte vs. indirekte kommunikasjon
- Bruk av høflighetsformer
- Humor og ironi fungerer ulikt

**Non-verbale forskjeller:**
- Øyekontakt: respektfullt vs. uhøflig
- Kroppsspråk og gester
- Personlig rom og avstand
- Fysisk berøring

**Kontekstforskjeller:**
- Høykontekstkulturer: mye informasjon er implisitt
- Lavkontekstkulturer: informasjon er eksplisitt
- Tidsorientering: punktlighet vs. fleksibilitet
- Hierarki og maktdistanse

**Kompetanse for interkulturell kommunikasjon:**
- Kunnskap om kulturelle forskjeller
- Bevissthet om egne kulturelle briller
- Evne til å tilpasse kommunikasjonen
- Nysgjerrighet og åpenhet
- Tålmodighet og ydmykhet
- Evne til å håndtere usikkerhet`,
    },
    {
      id: 'komkult3-3-note-1',
      type: 'note',
      title: 'Identitet i flerkulturelle samfunn',
      content: `I flerkulturelle samfunn har mange sammensatte identiteter. Man kan samtidig være norsk, pakistansk, muslim og osloboer.

Bindestrek-identiteter (norsk-pakistaner) viser at identitet ikke er enten-eller, men både-og.

For mange unge med minoritetsbakgrunn kan identitet være et forhandlingsprosjekt mellom ulike forventninger fra familie, venner og samfunnet.`,
    },
    {
      id: 'komkult3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom integrering og assimilering?',
        options: [
          { id: 'a', text: 'Integrering er en toveis prosess der man beholder egen kultur, assimilering krever at man oppgir egen kultur', isCorrect: true },
          { id: 'b', text: 'De betyr det samme, bare ulike ord for samme prosess', isCorrect: false },
          { id: 'c', text: 'Integrering er frivillig, assimilering er tvungen', isCorrect: false },
          { id: 'd', text: 'Integrering gjelder bare arbeidslivet, assimilering gjelder hele samfunnet', isCorrect: false },
        ],
        solution: 'Integrering er en toveis prosess der innvandrere blir del av samfunnet samtidig som de kan beholde egen kultur. Assimilering innebærer at minoriteten oppgir egen kultur og fullt ut tilpasser seg majoriteten.',
      },
    },
    {
      id: 'komkult3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner høykontekstkulturer i kommunikasjon?',
        options: [
          { id: 'a', text: 'Mye informasjon er implisitt og forstås ut fra kontekst', isCorrect: true },
          { id: 'b', text: 'All informasjon må sies eksplisitt og direkte', isCorrect: false },
          { id: 'c', text: 'Kommunikasjonen foregår hovedsakelig skriftlig', isCorrect: false },
          { id: 'd', text: 'Det brukes mange teknologiske hjelpemidler', isCorrect: false },
        ],
        solution: 'I høykontekstkulturer er mye informasjon implisitt og forstås ut fra kontekst, relasjoner og non-verbal kommunikasjon. I lavkontekstkulturer er informasjonen mer eksplisitt.',
      },
    },
    {
      id: 'komkult3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og utfordringer ved kulturelt mangfold i samfunnet.',
        hints: ['Ta med perspektiver på økonomi, kultur, sosial samhørighet og identitet'],
        solution: 'Fordeler kan inkludere kulturell berikelse, økonomiske bidrag, innovasjon og nye perspektiver. Utfordringer kan være kommunikasjonsbarrierer, verdikonflikt, diskriminering og sosial fragmentering. En god drøfting ser nyansert på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med etnosentrisme?',
        options: [
          { id: 'a', text: 'Å se verden fra egen kulturs perspektiv og vurdere andre kulturer ut fra dette', isCorrect: true },
          { id: 'b', text: 'Å studere andre etniske grupper vitenskapelig', isCorrect: false },
          { id: 'c', text: 'Å respektere alle kulturers likeverd', isCorrect: false },
          { id: 'd', text: 'Å tilhøre flere etniske grupper samtidig', isCorrect: false },
        ],
        solution: 'Etnosentrisme betyr å se verden fra egen kulturs perspektiv og vurdere andre kulturer ut fra egne standarder, ofte med en antagelse om at egen kultur er overlegen.',
      },
    },
    {
      id: 'komkult3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi eksempler på hvordan non-verbal kommunikasjon kan variere mellom kulturer.',
        hints: ['Tenk på øyekontakt, kroppsspråk, avstand og gester'],
        solution: 'Eksempler kan inkludere: øyekontakt som respektfullt i noen kulturer og uhøflig i andre, ulike normer for personlig avstand, gester som betyr ulike ting, fysisk berøring ved hilsing, og tidsoppfatning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr kulturrelativisme?',
        options: [
          { id: 'a', text: 'At kulturer må forstås på egne premisser, ikke bedømmes ut fra egen kultur', isCorrect: true },
          { id: 'b', text: 'At alle kulturer er like gode i alle henseender', isCorrect: false },
          { id: 'c', text: 'At kultur ikke har noen betydning for menneskers atferd', isCorrect: false },
          { id: 'd', text: 'At kultur er i stadig endring og aldri stabil', isCorrect: false },
        ],
        solution: 'Kulturrelativisme er holdningen om at kulturer må forstås på egne premisser. Man bør ikke automatisk bedømme andre kulturer ut fra egen kulturs standarder.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Mediekritikk og kildekritikk
// ============================================================================

export const CHAPTER_KOMKULT3_4: TextbookChapter = {
  id: 'komkult3-4',
  courseId: 'komkult-3',
  chapterNumber: '4',
  title: 'Mediekritikk og kildekritikk',
  description: 'Kritisk analyse av medieinnhold, desinformasjon og utvikling av kildekritisk kompetanse.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere medietekster kritisk med fokus på avsender, formål og virkemidler',
    'vurdere kilders troverdighet og pålitelighet',
    'identifisere og motvirke desinformasjon og manipulasjon',
  ],
  content: [
    {
      id: 'komkult3-4-intro',
      type: 'text',
      content: `## Mediekritikk i det digitale samfunnet

I en tid med enorme mengder informasjon er kritisk mediekompetanse viktigere enn noensinne. Evnen til å vurdere informasjon kritisk er avgjørende for å delta i demokratiet.

**Utfordringer i medielandskapet:**
- Informasjonsoverflod
- Algoritmestyrte nyhetsstrømmer
- Filterbobler og ekkokamre
- Spredning av desinformasjon
- Politisk polarisering
- Kommersialisering av nyheter

Mediekritikk handler om å analysere medieinnhold systematisk og vurdere hvordan mediene fremstiller virkeligheten.`,
    },
    {
      id: 'komkult3-4-def-1',
      type: 'definition',
      title: 'Grunnleggende begreper',
      content: `**Mediekritikk:**
Systematisk analyse og vurdering av medieinnhold, inkludert form, innhold og kontekst.

**Kildekritikk:**
Vurdering av om kilder er troverdige, pålitelige og relevante. En vitenskapelig metode.

**Misinformasjon:**
Feil informasjon som spres uten intensjon om å villede. Ofte basert på misforståelser.

**Desinformasjon:**
Bevisst falsk eller villedende informasjon spredt for å manipulere.

**Propaganda:**
Systematisk påvirkning av meninger for å fremme bestemte interesser.

**Filterboble:**
Algoritmene viser deg innhold basert på tidligere atferd, noe som kan begrense perspektivmangfoldet.

**Ekkokammer:**
Miljøer der man hovedsakelig møter synspunkter som bekrefter egne holdninger.

**Clickbait:**
Sensasjonspregede overskrifter designet for å få klikk, ofte på bekostning av presisjon.`,
    },
    {
      id: 'komkult3-4-def-2',
      type: 'definition',
      title: 'Kildekritiske kriterier',
      content: `**TONE-modellen:**
- **T**roverdighet: Hvem står bak? Har de ekspertise?
- **O**bjektivitet: Er fremstillingen balansert? Skjulte interesser?
- **N**øyaktighet: Er fakta korrekte og dokumenterbare?
- **E**gnethet: Er kilden relevant for ditt formål?

**Tradisjonelle kildekritiske kriterier:**
- Opphav: Hvem har laget kilden?
- Tendens: Hvilken agenda kan kilden ha?
- Tid: Når er kilden fra? Er den oppdatert?
- Sammenheng: I hvilken kontekst ble kilden skapt?

**Vurdering av nettkilder:**
- Domenenavn og URL
- Forfatter og organisasjon
- Dato og oppdatering
- Kilder og dokumentasjon
- Design og profesjonalitet
- Speiling i andre kilder`,
    },
    {
      id: 'komkult3-4-example-1',
      type: 'example',
      title: 'Eksempel: Avsløre falske nyheter',
      problem: `Hvordan kan du identifisere og avsløre falske nyheter?`,
      solution: `**Sjekkliste for å avsløre falske nyheter:**

**1. Vurder kilden:**
- Kjent og seriøs nyhetsorganisasjon?
- Sjekk "Om oss"-siden
- Søk etter andre saker fra kilden
- Vær skeptisk til ukjente kilder

**2. Sjekk forfatteren:**
- Er forfatteren navngitt?
- Har vedkommende relevant ekspertise?
- Søk etter forfatteren

**3. Analyser innholdet:**
- Stemmer overskriften med innholdet?
- Er det ekstreme påstander uten dokumentasjon?
- Er språket sensasjonspreget eller emosjonelt?

**4. Krysssjekk:**
- Finnes historien i andre seriøse medier?
- Hva sier faktasjekkere? (Faktisk.no, Snopes)
- Kan påstandene dokumenteres?

**5. Vurder bilder og video:**
- Omvendt bildesøk
- Er bildet manipulert?
- Er det tatt ut av kontekst?

**6. Tenk kritisk:**
- Bekrefter dette mine fordommer?
- Hvem tjener på at dette spres?
- Er det for godt/dårlig til å være sant?`,
    },
    {
      id: 'komkult3-4-warning-1',
      type: 'warning',
      title: 'Vanlige feller',
      content: `Vær særlig på vakt mot:
- Bekreftelsestendens: Vi tror lettere på det som støtter vårt syn
- Autoritetsbias: Vi stoler ukritisk på eksperter og autoriteter
- Emosjonell påvirkning: Sterke følelser overskygger kritisk tenkning
- Flokkmentalitet: Vi påvirkes av hva andre mener og deler
- Gjentagelseseffekten: Det som gjentas ofte, oppfattes som sant`,
    },
    {
      id: 'komkult3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom misinformasjon og desinformasjon?',
        options: [
          { id: 'a', text: 'Misinformasjon spres uten vilje til å villede, desinformasjon er bevisst falsk', isCorrect: true },
          { id: 'b', text: 'Misinformasjon gjelder medier, desinformasjon gjelder sosiale medier', isCorrect: false },
          { id: 'c', text: 'De betyr det samme', isCorrect: false },
          { id: 'd', text: 'Misinformasjon er politisk, desinformasjon er kommersiell', isCorrect: false },
        ],
        solution: 'Misinformasjon er feil informasjon som spres uten intensjon om å villede, ofte basert på misforståelser. Desinformasjon er bevisst falsk eller villedende informasjon spredt for å manipulere.',
      },
    },
    {
      id: 'komkult3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står bokstaven T for i TONE-modellen for kildekritikk?',
        options: [
          { id: 'a', text: 'Troverdighet', isCorrect: true },
          { id: 'b', text: 'Tendens', isCorrect: false },
          { id: 'c', text: 'Tid', isCorrect: false },
          { id: 'd', text: 'Tekst', isCorrect: false },
        ],
        solution: 'I TONE-modellen står T for Troverdighet - hvem står bak kilden og har de relevant ekspertise?',
      },
    },
    {
      id: 'komkult3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en nyhetsartikkel fra sosiale medier eller nettaviser og gjennomfør en kildekritisk analyse. Vurder avsender, innhold, dokumentasjon og troverdighet.',
        hints: ['Bruk TONE-modellen og sjekklisten for falske nyheter'],
        solution: 'Analysen bør vurdere kildens troverdighet, forfatterens bakgrunn, innholdets saklighet, dokumentasjonen som brukes, og om påstandene kan bekreftes i andre kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Når algoritmer viser deg innhold basert på tidligere atferd, som begrenser perspektivmangfoldet', isCorrect: true },
          { id: 'b', text: 'En type spam-filter for e-post', isCorrect: false },
          { id: 'c', text: 'En metode for å beskytte personvern på nett', isCorrect: false },
          { id: 'd', text: 'En type nettangrep', isCorrect: false },
        ],
        solution: 'En filterboble oppstår når algoritmer viser deg innhold basert på tidligere atferd, noe som kan begrense perspektivmangfoldet og forsterke eksisterende holdninger.',
      },
    },
    {
      id: 'komkult3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft hvordan sosiale medier kan bidra til spredning av desinformasjon. Hva kan gjøres for å motvirke dette?',
        hints: ['Tenk på algoritmer, viralitet, anonymitet og ansvar'],
        solution: 'Sosiale medier fremmer viralitet, belønner engasjement og tillater rask deling uten kvalitetskontroll. Tiltak kan inkludere bedre algoritmer, faktasjekking, mediekompetanse, regulering og plattformansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er clickbait?',
        options: [
          { id: 'a', text: 'Sensasjonspregede overskrifter designet for å få klikk', isCorrect: true },
          { id: 'b', text: 'En type datavirus', isCorrect: false },
          { id: 'c', text: 'Annonser som skjuler seg som nyheter', isCorrect: false },
          { id: 'd', text: 'Automatiske kommentarer fra roboter', isCorrect: false },
        ],
        solution: 'Clickbait er sensasjonspregede overskrifter designet for å få klikk, ofte på bekostning av presisjon og sannhet. Typisk kjennetegn er overdrivelser og mystifisering.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Kulturproduksjon
// ============================================================================

export const CHAPTER_KOMKULT3_5: TextbookChapter = {
  id: 'komkult3-5',
  courseId: 'komkult-3',
  chapterNumber: '5',
  title: 'Kulturproduksjon',
  description: 'Skapende arbeid med kulturuttrykk, fra ide til ferdig produkt, inkludert planlegging, gjennomføring og formidling.',
  estimatedMinutes: 95,
  competenceGoals: [
    'planlegge og gjennomføre et kulturelt prosjekt fra ide til ferdig produkt',
    'reflektere over skapende prosesser og egne valg',
    'formidle kulturelle uttrykk til ulike målgrupper',
  ],
  content: [
    {
      id: 'komkult3-5-intro',
      type: 'text',
      content: `## Fra ide til ferdig kulturprodukt

Kulturproduksjon handler om å skape kulturelle uttrykk - alt fra tekster og filmer til arrangementer og kampanjer. I dette kapittelet lærer du om den kreative prosessen og hvordan du kan planlegge og gjennomføre egne prosjekter.

**Eksempler på kulturproduksjon:**
- Dokumentarfilm eller kortfilm
- Podkast eller radioproduksjon
- Kulturarrangement eller festival
- Kampanje eller informasjonsmateriell
- Utstilling eller performance
- Digitalt innhold for sosiale medier

Kulturproduksjon krever både kreativitet og systematikk.`,
    },
    {
      id: 'komkult3-5-def-1',
      type: 'definition',
      title: 'Den kreative prosessen',
      content: `**Fasene i kreativt arbeid:**

**1. Ideutvikling:**
- Brainstorming og idegenerering
- Research og inspirasjon
- Avgrensning og konseptutvikling

**2. Forprosjekt:**
- Målgruppanalyse
- Ressurskartlegging
- Tidsplan og budsjett
- Risikovurdering

**3. Produksjon:**
- Innholdsproduksjon
- Samarbeid og koordinering
- Kvalitetssikring
- Justeringer underveis

**4. Lansering:**
- Formidling til målgruppen
- Markedsføring og promotering
- Distribusjon

**5. Evaluering:**
- Tilbakemeldinger og respons
- Refleksjon over prosessen
- Læring til fremtidige prosjekter`,
    },
    {
      id: 'komkult3-5-def-2',
      type: 'definition',
      title: 'Prosjektplanlegging',
      content: `**Prosjektbeskrivelse bør inneholde:**
- Tittel og kort beskrivelse
- Bakgrunn og formål
- Målgruppe
- Innhold og form
- Tidsplan med milepæler
- Ressursbehov (personer, utstyr, økonomi)
- Ansvarsfordeling
- Plan for formidling

**SMART-mål:**
- Spesifikt: Hva konkret skal oppnås?
- Målbart: Hvordan måle suksess?
- Ambisiøst: Utfordrende men realistisk
- Relevant: Viktig og meningsfullt
- Tidsbestemt: Klar frist

**Risikovurdering:**
Identifiser mulige problemer og lag plan B.`,
    },
    {
      id: 'komkult3-5-example-1',
      type: 'example',
      title: 'Eksempel: Planlegge en podkast',
      problem: `Du skal lage en podkast om kulturmøter. Hvordan planlegger du prosjektet?`,
      solution: `**Prosjektplan for podkast:**

**Konsept:**
- Tema: Kulturmøter i hverdagen
- Format: Intervjupodkast, 20-30 min per episode
- Målgruppe: Ungdom 16-25 år
- Antall episoder: 5 episoder

**Forprosjekt:**
- Research på kulturmøter og gode historier
- Finne intervjuobjekter med interessante erfaringer
- Skaffe utstyr (mikrofon, opptaksprogram)
- Lage intervjuguide
- Planlegge design og profilmateriale

**Produksjon (per episode):**
- Forberedelse og kontakt med gjest
- Opptak av intervju
- Redigering og lydbehandling
- Skrive episodebeskrivelse
- Velge musikk/vignett

**Lansering:**
- Publisere på podkastplattformer
- Promotere i sosiale medier
- Kontakte relevante miljøer

**Tidsplan:**
- Uke 1-2: Forprosjekt
- Uke 3-6: Produksjon
- Uke 7: Lansering og promotering
- Uke 8: Evaluering`,
    },
    {
      id: 'komkult3-5-tip-1',
      type: 'tip',
      title: 'Samarbeid i prosjekter',
      content: `Gode samarbeid kjennetegnes av:
- Tydelig ansvarsfordeling
- Åpen kommunikasjon
- Regelmessige statusmøter
- Respekt for ulike arbeidsstiler
- Konstruktiv tilbakemelding
- Felles eierskap til resultatet

Bruk digitale verktøy for samarbeid (delt dokument, prosjektstyringsverktøy, chat).`,
    },
    {
      id: 'komkult3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står S for i SMART-mål?',
        options: [
          { id: 'a', text: 'Spesifikt', isCorrect: true },
          { id: 'b', text: 'Strategisk', isCorrect: false },
          { id: 'c', text: 'Systematisk', isCorrect: false },
          { id: 'd', text: 'Seriøst', isCorrect: false },
        ],
        solution: 'I SMART-mål står S for Spesifikt - målet må være konkret og tydelig definert.',
      },
    },
    {
      id: 'komkult3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken fase kommer først i den kreative prosessen?',
        options: [
          { id: 'a', text: 'Ideutvikling', isCorrect: true },
          { id: 'b', text: 'Produksjon', isCorrect: false },
          { id: 'c', text: 'Evaluering', isCorrect: false },
          { id: 'd', text: 'Lansering', isCorrect: false },
        ],
        solution: 'Ideutvikling er første fase i den kreative prosessen, der man genererer ideer, gjør research og utvikler konseptet.',
      },
    },
    {
      id: 'komkult3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en prosjektbeskrivelse for et kulturelt prosjekt du ønsker å gjennomføre. Inkluder formål, målgruppe, innhold, tidsplan og ressursbehov.',
        hints: ['Velg et format som interesserer deg: film, podkast, arrangement, utstilling eller annet'],
        solution: 'Prosjektbeskrivelsen bør ha klart definert formål, spesifikk målgruppe, detaljert innholdsbeskrivelse, realistisk tidsplan med milepæler, og oversikt over nødvendige ressurser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedformålet med en risikovurdering i prosjektplanlegging?',
        options: [
          { id: 'a', text: 'Å identifisere mulige problemer og lage plan B', isCorrect: true },
          { id: 'b', text: 'Å dokumentere alt som kan gå galt for ledelsen', isCorrect: false },
          { id: 'c', text: 'Å beregne forsikringskostnader', isCorrect: false },
          { id: 'd', text: 'Å velge bort risikable prosjekter', isCorrect: false },
        ],
        solution: 'Risikovurdering handler om å identifisere mulige problemer på forhånd slik at man kan lage planer for å forebygge eller håndtere dem.',
      },
    },
    {
      id: 'komkult3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hva en god målgruppeanalyse bør inneholde og forklar hvorfor målgruppeanalyse er viktig i kulturproduksjon.',
        hints: ['Tenk på hvem produktet er for og hva som kjennetegner dem'],
        solution: 'En målgruppeanalyse bør inneholde demografiske kjennetegn, interesser, behov, medievaner og kommunikasjonspreferanser. Det er viktig fordi det styrer valg av innhold, form, tone og formidlingskanaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er viktigst for godt samarbeid i prosjekter?',
        options: [
          { id: 'a', text: 'Tydelig ansvarsfordeling og åpen kommunikasjon', isCorrect: true },
          { id: 'b', text: 'At én person tar alle beslutninger', isCorrect: false },
          { id: 'c', text: 'At alle gjør det samme', isCorrect: false },
          { id: 'd', text: 'At man unngår uenigheter', isCorrect: false },
        ],
        solution: 'Godt samarbeid krever tydelig ansvarsfordeling så alle vet hva de skal gjøre, og åpen kommunikasjon så problemer kan løses og ideer deles.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Internasjonal kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT3_6: TextbookChapter = {
  id: 'komkult3-6',
  courseId: 'komkult-3',
  chapterNumber: '6',
  title: 'Internasjonal kommunikasjon',
  description: 'Kommunikasjon på tvers av landegrenser, diplomatisk kommunikasjon, internasjonale medier og global påvirkning.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere kommunikasjon mellom nasjoner og internasjonale aktører',
    'drøfte hvordan globalisering påvirker kommunikasjon og kultur',
    'vurdere medienes rolle i internasjonal kommunikasjon',
  ],
  content: [
    {
      id: 'komkult3-6-intro',
      type: 'text',
      content: `## Kommunikasjon i en global verden

Internasjonal kommunikasjon omfatter all kommunikasjon som krysser landegrenser - fra diplomatiske forhandlinger til globale medier og sosiale medier-kampanjer.

**Former for internasjonal kommunikasjon:**
- Diplomatisk kommunikasjon mellom stater
- Internasjonal journalistikk og medier
- Bedrifters internasjonale kommunikasjon
- NGO-er og internasjonale organisasjoner
- Kulturutveksling og kultureksport
- Digital kommunikasjon på globale plattformer

Globaliseringen har gjort internasjonal kommunikasjon mer tilgjengelig, men også mer kompleks.`,
    },
    {
      id: 'komkult3-6-def-1',
      type: 'definition',
      title: 'Diplomatisk kommunikasjon',
      content: `**Diplomati:**
Kunsten å håndtere internasjonale relasjoner gjennom forhandlinger og dialog. Foregår mellom stater og internasjonale organisasjoner.

**Tradisjonelt diplomati:**
- Formelle kanaler mellom statsledere og ambassader
- Protokoll og etikette
- Hemmelige forhandlinger
- Traktater og avtaler

**Offentlig diplomati:**
- Kommunikasjon rettet mot andre lands befolkning
- Kulturutveksling og informasjonsarbeid
- Nasjonsbranding
- Myk makt (soft power)

**Digital diplomati:**
- Bruk av sosiale medier
- Direkte kommunikasjon med publikum
- Raskere, men risikablere
- Twiplomacy og Facebook-diplomati

**Diplomatisk språk:**
Ofte indirekte og forsiktig. Bruker eufemismer og diplomatiske formuleringer for å unngå konflikt.`,
    },
    {
      id: 'komkult3-6-def-2',
      type: 'definition',
      title: 'Globale medier og informasjonsflyt',
      content: `**Internasjonale nyhetsbyråer:**
Reuters, AP, AFP - store byråer som forsyner medier verden over med nyheter.

**Globale medieselskaper:**
CNN, BBC, Al Jazeera - når publikum i mange land med sin dekning.

**Informasjonsflyt:**
Tradisjonelt fra vest til resten. Kritiseres for å gi vestlige perspektiver dominans.

**Medieimperialisme:**
Teori om at vestlige medier og kulturprodukter dominerer globalt og påvirker lokale kulturer.

**Glokalisering:**
Globale produkter tilpasses lokale markeder. Kombinerer globalt og lokalt.

**Sosiale medier som global arena:**
- Muliggjør kommunikasjon på tvers av grenser
- Kan mobilisere på tvers av land
- Sprer informasjon raskt
- Kan brukes til påvirkning og desinformasjon`,
    },
    {
      id: 'komkult3-6-example-1',
      type: 'example',
      title: 'Eksempel: Nasjonsbranding',
      problem: `Hva er nasjonsbranding og hvordan brukes det?`,
      solution: `**Nasjonsbranding:**

**Definisjon:**
Strategisk arbeid for å forme og kommunisere et lands image utad. Handler om å posisjonere nasjonen i global konkurranse.

**Formål:**
- Tiltrekke turister
- Tiltrekke investeringer
- Rekruttere talent
- Øke eksport
- Bygge politisk innflytelse

**Norges nasjonsbranding:**
- Natur og friluftsliv
- Velferdsstat og likestilling
- Bærekraft og miljø
- Innovasjon og teknologi
- Kultureksport (Skam, A-ha, Kygo)

**Virkemidler:**
- Kampanjer og informasjonsmateriell
- Kultureksport og kulturutveksling
- Internasjonale arrangementer
- Diplomati og utenrikspolitikk
- Sosiale medier

**Utfordringer:**
- Koster mye
- Vanskelig å måle effekt
- Må være autentisk
- Kan oppfattes som propaganda`,
    },
    {
      id: 'komkult3-6-note-1',
      type: 'note',
      title: 'Myk makt (Soft Power)',
      content: `Joseph Nye introduserte begrepet soft power - evnen til å påvirke andre gjennom tiltrekning og overbevisning, ikke tvang.

Myk makt bygges gjennom:
- Kultur (film, musikk, kunst)
- Verdier (demokrati, menneskerettigheter)
- Politikk (bistand, internasjonalt samarbeid)

Land som USA, Storbritannia, Frankrike og Japan har tradisjonelt hatt sterk myk makt gjennom sin kultureksport.`,
    },
    {
      id: 'komkult3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med offentlig diplomati?',
        options: [
          { id: 'a', text: 'Kommunikasjon rettet mot andre lands befolkning for å påvirke holdninger til eget land', isCorrect: true },
          { id: 'b', text: 'Åpne forhandlinger mellom statsledere', isCorrect: false },
          { id: 'c', text: 'Diplomati som foregår i internasjonale organisasjoner', isCorrect: false },
          { id: 'd', text: 'Kommunikasjon mellom offentlige etater i ulike land', isCorrect: false },
        ],
        solution: 'Offentlig diplomati er kommunikasjon rettet mot andre lands befolkning med mål om å påvirke holdninger og fremme nasjonens interesser gjennom kultur, informasjon og dialog.',
      },
    },
    {
      id: 'komkult3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er soft power (myk makt)?',
        options: [
          { id: 'a', text: 'Evnen til å påvirke andre gjennom tiltrekning og overbevisning, ikke tvang', isCorrect: true },
          { id: 'b', text: 'Militær makt som brukes på en forsiktig måte', isCorrect: false },
          { id: 'c', text: 'Økonomisk makt gjennom handel', isCorrect: false },
          { id: 'd', text: 'Makt som utøves gjennom hemmelige operasjoner', isCorrect: false },
        ],
        solution: 'Soft power er evnen til å påvirke andre gjennom tiltrekning og overbevisning - gjennom kultur, verdier og politikk - i motsetning til hard power som innebærer tvang.',
      },
    },
    {
      id: 'komkult3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser hvordan et land bruker kultureksport som del av sin myk makt-strategi. Velg et land og gi konkrete eksempler.',
        hints: ['Du kan velge Sør-Korea (K-pop, K-drama), USA (Hollywood), Japan (anime, mat) eller andre'],
        solution: 'Svaret bør beskrive landet, gi eksempler på kultureksport, analysere hvordan dette bidrar til myk makt, og reflektere over effekter på landets image og innflytelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er glokalisering?',
        options: [
          { id: 'a', text: 'Tilpasning av globale produkter til lokale markeder', isCorrect: true },
          { id: 'b', text: 'Spredning av lokale produkter globalt', isCorrect: false },
          { id: 'c', text: 'Motstand mot globalisering', isCorrect: false },
          { id: 'd', text: 'Lokalt samarbeid om globale problemer', isCorrect: false },
        ],
        solution: 'Glokalisering er tilpasning av globale produkter til lokale markeder - en kombinasjon av globalt og lokalt. Eksempler er McDonald\'s med lokale menyer eller Netflix med lokalt innhold.',
      },
    },
    {
      id: 'komkult3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft fordeler og utfordringer ved digital diplomati - bruk av sosiale medier i diplomatisk kommunikasjon.',
        hints: ['Tenk på hastighet, rekkevidde, risiko og autentisitet'],
        solution: 'Fordeler kan inkludere raskere kommunikasjon, direkte kontakt med publikum og lavere kostnader. Utfordringer kan være risiko for feiltrinn, mangel på nyanser og mulighet for misforståelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-6-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med medieimperialisme?',
        options: [
          { id: 'a', text: 'At vestlige medier og kulturprodukter dominerer globalt og påvirker lokale kulturer', isCorrect: true },
          { id: 'b', text: 'At mediene har for stor makt over politikken', isCorrect: false },
          { id: 'c', text: 'At ett medieselskap eier for mange medier', isCorrect: false },
          { id: 'd', text: 'At staten kontrollerer mediene', isCorrect: false },
        ],
        solution: 'Medieimperialisme er teorien om at vestlige medier og kulturprodukter dominerer globalt, noe som kan føre til at vestlige perspektiver og verdier påvirker lokale kulturer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Kultur og teknologi
// ============================================================================

export const CHAPTER_KOMKULT3_7: TextbookChapter = {
  id: 'komkult3-7',
  courseId: 'komkult-3',
  chapterNumber: '7',
  title: 'Kultur og teknologi',
  description: 'Hvordan teknologi former kultur og kommunikasjon, fra sosiale medier til kunstig intelligens.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere hvordan teknologiske endringer påvirker kultur og kommunikasjon',
    'drøfte etiske problemstillinger knyttet til digital kommunikasjon',
    'vurdere teknologiens rolle i kulturproduksjon og kulturformidling',
  ],
  content: [
    {
      id: 'komkult3-7-intro',
      type: 'text',
      content: `## Teknologi som kulturell kraft

Teknologi har alltid formet kultur og kommunikasjon. Fra trykkekunsten til internett har nye teknologier endret hvordan vi skaper, deler og opplever kultur.

**Teknologiske vendepunkter:**
- Trykkekunsten (ca. 1450): Masseproduksjon av bøker
- Telegrafen (1830-tallet): Kommunikasjon over avstand
- Radio og TV (1900-tallet): Massemedier
- Internett (1990-tallet): Global digital kommunikasjon
- Sosiale medier (2000-tallet): Alle kan være produsenter
- AI og VR (2020-tallet): Nye muligheter og utfordringer

I dag står vi midt i en digital transformasjon som endrer hvordan vi lever, arbeider og kommuniserer.`,
    },
    {
      id: 'komkult3-7-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Digital kultur:**
Kultur som skapes, deles og oppleves gjennom digitale medier. Inkluderer alt fra memer til strømmetjenester.

**Plattformsamfunnet:**
Samfunn der digitale plattformer (Facebook, Google, Amazon) har stor innflytelse på økonomi, kultur og kommunikasjon.

**Algoritmisk kultur:**
Kultur formet av algoritmer som bestemmer hva vi ser, hører og leser. Påvirker kulturelt mangfold.

**Deltakerkultur:**
Kultur der grensen mellom produsenter og forbrukere viskes ut. Alle kan skape og dele innhold.

**Digital kløft:**
Ulikhet i tilgang til og kompetanse i bruk av digital teknologi.

**Dataisering:**
Prosessen der stadig mer av livet vårt omgjøres til data som kan samles og analyseres.

**Kunstig intelligens (AI):**
Systemer som utfører oppgaver som normalt krever menneskelig intelligens. Kan skape tekst, bilder og musikk.`,
    },
    {
      id: 'komkult3-7-def-2',
      type: 'definition',
      title: 'Sosiale medier og kultur',
      content: `**Kjennetegn ved sosiale medier:**
- Brukerskapt innhold
- Nettverksbasert
- Interaktivt
- Algoritmestyrt

**Kulturelle effekter:**
- Nye uttrykksformer (memer, stories, TikTok)
- Nye stjerner og influensere
- Viralitet og trender
- Endret nyhetsvaner
- Identitetsutforskning og -presentasjon

**Utfordringer:**
- Personvern og overvåking
- Spredning av desinformasjon
- Polarisering og hat
- Avhengighet og tidsbruk
- Mental helse

**Muligheter:**
- Global tilkobling
- Nye stemmer og perspektiver
- Demokratisering av kulturproduksjon
- Mobilisering og aktivisme`,
    },
    {
      id: 'komkult3-7-example-1',
      type: 'example',
      title: 'Eksempel: AI i kulturproduksjon',
      problem: `Hvordan påvirker kunstig intelligens kulturproduksjon, og hvilke etiske spørsmål reiser dette?`,
      solution: `**AI i kulturproduksjon:**

**Bruksområder:**
- Tekstgenerering (ChatGPT, Claude)
- Bildegenerering (DALL-E, Midjourney)
- Musikkomposisjon
- Video og animasjon
- Oversettelse

**Muligheter:**
- Senker terskel for å skape
- Nye kreative verktøy
- Effektivisering av produksjon
- Personalisert innhold

**Etiske utfordringer:**

*Opphavsrett:*
- Hvem eier AI-generert innhold?
- Er trening på eksisterende verk lovlig?
- Kompensasjon til opprinnelige kunstnere?

*Autentisitet:*
- Hva er originalt og skapt av mennesker?
- Verdi av menneskelig kreativitet
- Transparens om AI-bruk

*Arbeidsmarked:*
- Erstatning av kreative yrker
- Nye kompetansekrav
- Omfordeling av verdier

*Deepfakes:*
- Falske bilder og video
- Desinformasjon
- Personvern og samtykke

**Refleksjon:**
Teknologien er verktøy - vi må avgjøre hvordan den brukes.`,
    },
    {
      id: 'komkult3-7-warning-1',
      type: 'warning',
      title: 'Digital etikk',
      content: `Viktige etiske hensyn i digital kultur:
- Personvern: Hvem har tilgang til dataene dine?
- Samtykke: Forstår brukerne hva de godtar?
- Transparens: Er det tydelig hvordan systemer fungerer?
- Ansvar: Hvem er ansvarlig når algoritmer tar feil?
- Inkludering: Er teknologien tilgjengelig for alle?
- Bærekraft: Hva er det digitale klimaavtrykket?`,
    },
    {
      id: 'komkult3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med deltakerkultur?',
        options: [
          { id: 'a', text: 'At grensen mellom produsenter og forbrukere viskes ut, og alle kan skape innhold', isCorrect: true },
          { id: 'b', text: 'En type politisk kultur med høy valgdeltakelse', isCorrect: false },
          { id: 'c', text: 'Kultur som krever fysisk oppmøte', isCorrect: false },
          { id: 'd', text: 'Demokratiske prosesser i kulturinstitusjoner', isCorrect: false },
        ],
        solution: 'Deltakerkultur betegner at grensen mellom produsenter og forbrukere viskes ut. Med digitale verktøy kan alle skape og dele innhold, ikke bare være passive mottakere.',
      },
    },
    {
      id: 'komkult3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er algoritmisk kultur?',
        options: [
          { id: 'a', text: 'Kultur formet av algoritmer som bestemmer hva vi ser og hører', isCorrect: true },
          { id: 'b', text: 'Kultur skapt av programmerere', isCorrect: false },
          { id: 'c', text: 'Kultur som handler om matematikk', isCorrect: false },
          { id: 'd', text: 'Kultur uten menneskelig innblanding', isCorrect: false },
        ],
        solution: 'Algoritmisk kultur refererer til at algoritmer i stadig større grad bestemmer hva vi eksponeres for kulturelt - hva vi ser på sosiale medier, hva som anbefales på strømmetjenester osv.',
      },
    },
    {
      id: 'komkult3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan kunstig intelligens (AI) kan påvirke fremtidens kulturproduksjon. Hvilke muligheter og utfordringer ser du?',
        hints: ['Ta med perspektiver på kreativitet, opphavsrett, arbeidsmarked og autentisitet'],
        solution: 'Drøftingen bør diskutere muligheter som nye verktøy og demokratisering, og utfordringer som opphavsrettsspørsmål, erstatning av menneskelige skapere, og spørsmål om autentisitet og verdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er digital kløft?',
        options: [
          { id: 'a', text: 'Ulikhet i tilgang til og kompetanse i bruk av digital teknologi', isCorrect: true },
          { id: 'b', text: 'Konflikter som oppstår i digitale fora', isCorrect: false },
          { id: 'c', text: 'Forskjellen mellom gammelt og nytt internett', isCorrect: false },
          { id: 'd', text: 'Skillet mellom jobb og privatliv digitalt', isCorrect: false },
        ],
        solution: 'Digital kløft betegner ulikheten i tilgang til og kompetanse i bruk av digital teknologi, både mellom land og innad i samfunn. Dette kan forsterke sosial ulikhet.',
      },
    },
    {
      id: 'komkult3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser hvordan en digital plattform (f.eks. TikTok, Spotify eller Netflix) påvirker kulturproduksjon og -konsum.',
        hints: ['Tenk på algoritmer, format, insentiver og brukeratferd'],
        solution: 'Analysen bør beskrive plattformen, forklare hvordan algoritmer og format påvirker innholdet som lages og konsumeres, og reflektere over konsekvenser for kulturelt mangfold og kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-7-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en deepfake?',
        options: [
          { id: 'a', text: 'AI-generert falsk video eller lyd som ser realistisk ut', isCorrect: true },
          { id: 'b', text: 'En særlig troverdig falsk nyhet', isCorrect: false },
          { id: 'c', text: 'Et skjult virus på nettet', isCorrect: false },
          { id: 'd', text: 'En avansert form for phishing', isCorrect: false },
        ],
        solution: 'Deepfakes er AI-genererte falske videoer eller lydopptak som ser eller høres realistiske ut. De kan brukes til underholdning, men også til desinformasjon og svindel.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Selvstendig prosjekt
// ============================================================================

export const CHAPTER_KOMKULT3_8: TextbookChapter = {
  id: 'komkult3-8',
  courseId: 'komkult-3',
  chapterNumber: '8',
  title: 'Selvstendig prosjekt',
  description: 'Planlegging, gjennomføring og presentasjon av et selvstendig fordypningsprosjekt innen kommunikasjon og kultur.',
  estimatedMinutes: 120,
  competenceGoals: [
    'gjennomføre et selvstendig fordypningsprosjekt med relevant problemstilling',
    'anvende faglige begreper og teorier i analyse av kulturelle fenomener',
    'presentere og begrunne faglige valg og konklusjoner',
  ],
  content: [
    {
      id: 'komkult3-8-intro',
      type: 'text',
      content: `## Det selvstendige fordypningsprosjektet

Fordypningsprosjektet er en mulighet til å utforske et selvvalgt tema i dybden. Du skal anvende kunnskap fra hele faget til å analysere et kulturelt fenomen eller problemstilling.

**Prosjektet kan være:**
- En forskningsoppgave/analyse
- Et praktisk kulturprodukt med refleksjonsnotat
- En kombinasjon av teori og praksis

**Mulige temaer:**
- Kulturanalyse av et fenomen
- Kommunikasjon i en bestemt kontekst
- Mediekritisk analyse
- Interkulturell kommunikasjon
- Kulturproduksjon og formidling
- Teknologi og kulturendring

Prosjektet vurderes på selvstendighet, faglig forankring, analyse og presentasjon.`,
    },
    {
      id: 'komkult3-8-def-1',
      type: 'definition',
      title: 'Forskningsprosessen',
      content: `**1. Valg av tema:**
- Velg noe som interesserer deg
- Avgrens til håndterbart omfang
- Sjekk at det finnes relevant materiale

**2. Problemstilling:**
- Formuler et klart spørsmål
- Bør kunne besvares innenfor rammene
- Må være faglig forankret

**3. Innsamling av materiale:**
- Primærkilder (egen datainnsamling)
- Sekundærkilder (andres forskning)
- Ulike typer materiale

**4. Analyse:**
- Bruk faglige begreper og teorier
- Strukturer analysen logisk
- Vær kritisk og nyansert

**5. Konklusjon:**
- Svar på problemstillingen
- Trekk tråder til teori
- Anerkjenn begrensninger

**6. Presentasjon:**
- Tilpass form til innhold
- Strukturer tydelig
- Vis faglig forståelse`,
    },
    {
      id: 'komkult3-8-def-2',
      type: 'definition',
      title: 'Problemstillingstyper',
      content: `**Beskrivende problemstilling:**
"Hvordan fremstilles [fenomen] i [medium/kontekst]?"
Eksempel: Hvordan fremstilles norsk kultur i Netflix-serier?

**Forklarende problemstilling:**
"Hvorfor [fenomen] / Hva er årsakene til [fenomen]?"
Eksempel: Hvorfor har K-pop blitt så populært globalt?

**Vurderende problemstilling:**
"I hvilken grad [påstand]?"
Eksempel: I hvilken grad har sosiale medier endret politisk kommunikasjon?

**Sammenlignende problemstilling:**
"Hva er forskjeller/likheter mellom X og Y?"
Eksempel: Hva er forskjellene i nyhetsdekking mellom NRK og VG?

**Tips:**
- Unngå ja/nei-spørsmål
- Vær spesifikk og avgrenset
- Sørg for at du kan samle relevant materiale`,
    },
    {
      id: 'komkult3-8-example-1',
      type: 'example',
      title: 'Eksempel: Prosjektskisse',
      problem: `Hvordan ser en god prosjektskisse ut?`,
      solution: `**Eksempel på prosjektskisse:**

**Tittel:**
Kulturmøter i norsk reality-TV

**Problemstilling:**
Hvordan fremstilles kulturmøter og flerkulturelle deltakere i norske reality-serier?

**Bakgrunn:**
Reality-TV når et stort publikum og former oppfatninger om samfunnet. Hvordan kulturmøter fremstilles kan påvirke holdninger.

**Teori:**
- Representasjonsteori (Stuart Hall)
- Stereotypier og othering
- Mediert virkelighet

**Materiale:**
- Analyse av 5 episoder fra 3 ulike serier
- Sekundærlitteratur om reality-TV og representasjon

**Metode:**
- Tekstanalyse av utvalgte scener
- Kategorisering av fremstillingsmåter
- Sammenligning på tvers av serier

**Tidsplan:**
- Uke 1-2: Research og materialinnsamling
- Uke 3-4: Analyse
- Uke 5: Skriving
- Uke 6: Ferdigstilling og presentasjon

**Forventet omfang:**
3000 ord + presentasjon`,
    },
    {
      id: 'komkult3-8-tip-1',
      type: 'tip',
      title: 'Gode tips for prosjektet',
      content: `**Valg av tema:**
- Velg noe du brenner for
- Sjekk at læreren godkjenner temaet
- Start tidlig med research

**Problemstilling:**
- Diskuter med andre for å spisse
- Vær villig til å justere underveis
- Fokuser på én hovedproblemstilling

**Analyse:**
- Bruk fagbegreper aktivt
- Vis at du kan koble teori og empiri
- Vær selvkritisk

**Skriving:**
- Start med disposisjon
- Skriv litt hver dag
- La andre lese og gi tilbakemelding

**Presentasjon:**
- Øv på fremføringen
- Forbered deg på spørsmål
- Vis engasjement for temaet`,
    },
    {
      id: 'komkult3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'komkult3-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type problemstilling er dette: "Hvorfor har strømmetjenester endret musikkbransjen?"',
        options: [
          { id: 'a', text: 'Forklarende problemstilling', isCorrect: true },
          { id: 'b', text: 'Beskrivende problemstilling', isCorrect: false },
          { id: 'c', text: 'Vurderende problemstilling', isCorrect: false },
          { id: 'd', text: 'Sammenlignende problemstilling', isCorrect: false },
        ],
        solution: 'Dette er en forklarende problemstilling fordi den spør etter årsaker til et fenomen (hvorfor strømmetjenester har endret musikkbransjen).',
      },
    },
    {
      id: 'komkult3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'komkult3-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner en god problemstilling for et fordypningsprosjekt?',
        options: [
          { id: 'a', text: 'Den er avgrenset, faglig forankret og mulig å besvare', isCorrect: true },
          { id: 'b', text: 'Den er så bred at den dekker hele faget', isCorrect: false },
          { id: 'c', text: 'Den kan besvares med ja eller nei', isCorrect: false },
          { id: 'd', text: 'Den handler om egne meninger', isCorrect: false },
        ],
        solution: 'En god problemstilling er avgrenset (håndterbart omfang), faglig forankret (kan bruke teori og begreper), og mulig å besvare innenfor prosjektets rammer.',
      },
    },
    {
      id: 'komkult3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'komkult3-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Formuler tre mulige problemstillinger for et fordypningsprosjekt innen kommunikasjon og kultur. Forklar kort hva hver problemstilling vil undersøke.',
        hints: ['Prøv ulike typer problemstillinger: beskrivende, forklarende og vurderende'],
        solution: 'Svaret bør inneholde tre tydelige problemstillinger av ulik type, hver med en kort forklaring av hva som skal undersøkes og hvorfor det er relevant for faget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'komkult3-8-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom primærkilder og sekundærkilder?',
        options: [
          { id: 'a', text: 'Primærkilder er materiale du samler selv, sekundærkilder er andres forskning', isCorrect: true },
          { id: 'b', text: 'Primærkilder er viktigere enn sekundærkilder', isCorrect: false },
          { id: 'c', text: 'Primærkilder er bøker, sekundærkilder er nettsider', isCorrect: false },
          { id: 'd', text: 'Primærkilder er gamle, sekundærkilder er nye', isCorrect: false },
        ],
        solution: 'Primærkilder er materiale du samler selv (intervjuer, observasjoner, tekster du analyserer), mens sekundærkilder er andres forskning og analyse som du bruker som bakgrunn.',
      },
    },
    {
      id: 'komkult3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'komkult3-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en prosjektskisse for et fordypningsprosjekt. Inkluder tema, problemstilling, teori du vil bruke, materiale, metode og tidsplan.',
        hints: ['Se eksempelet i kapitlet for inspirasjon til struktur'],
        solution: 'Prosjektskissen bør ha et tydelig tema, en avgrenset og faglig forankret problemstilling, relevante teorier og begreper, beskrivelse av materiale og metode, og en realistisk tidsplan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'komkult3-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'komkult3-8-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre først når du starter et fordypningsprosjekt?',
        options: [
          { id: 'a', text: 'Velge et tema som interesserer deg og avgrense det', isCorrect: true },
          { id: 'b', text: 'Skrive konklusjonen', isCorrect: false },
          { id: 'c', text: 'Lage presentasjonen', isCorrect: false },
          { id: 'd', text: 'Samle inn alt materialet', isCorrect: false },
        ],
        solution: 'Det første steget er å velge et tema som interesserer deg og avgrense det til et håndterbart omfang. Dette danner grunnlaget for problemstilling og videre arbeid.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const KOMKULT3_CHAPTERS = [
  CHAPTER_KOMKULT3_1,
  CHAPTER_KOMKULT3_2,
  CHAPTER_KOMKULT3_3,
  CHAPTER_KOMKULT3_4,
  CHAPTER_KOMKULT3_5,
  CHAPTER_KOMKULT3_6,
  CHAPTER_KOMKULT3_7,
  CHAPTER_KOMKULT3_8,
];

export default KOMKULT3_CHAPTERS;
