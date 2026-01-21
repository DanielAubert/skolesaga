/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Entreprenorskap og bedriftsutvikling 1 (VG2 valgfag)
 * Folger LK20 lareplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Hva er entreprenorskap?
// ============================================================================

export const CHAPTER_ENTREBED_1_1: TextbookChapter = {
  id: 'entrebed-1-1',
  courseId: 'entrebed-1',
  chapterNumber: '1',
  title: 'Hva er entreprenorskap?',
  description: 'Forsta hva entreprenorskap er, historisk utvikling og betydningen for samfunnet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for hva entreprenorskap innebarer',
    'forklare entreprenorskapets rolle i samfunnet',
    'beskrive ulike typer entreprenorer og deres egenskaper',
  ],
  content: [
    {
      id: 'entrebed-1-1-intro',
      type: 'text',
      content: `## Introduksjon til entreprenorskap

Entreprenorskap handler om a identifisere muligheter og skape verdi gjennom innovative losninger. En entreprenor er en person som tar initiativ til a starte og utvikle nye virksomheter eller prosjekter.

**Hvorfor er entreprenorskap viktig?**
- Skaper nye arbeidsplasser
- Driver okonomisk vekst og innovasjon
- Loser samfunnsproblemer
- Fornyer naeringslivet
- Gir mennesker mulighet til a realisere ideer

**Historisk perspektiv:**
Ordet "entreprenor" kommer fra fransk og betyr "en som tar pa seg noe". Gjennom historien har entreprenorer vaert drivkraften bak store forandringer - fra den industrielle revolusjonen til dagens digitale transformasjon.`,
    },
    {
      id: 'entrebed-1-1-def-1',
      type: 'definition',
      title: 'Entreprenorskap',
      content: `**Entreprenorskap** er prosessen med a identifisere muligheter, utvikle nye ideer og skape verdi gjennom innovative produkter, tjenester eller prosesser.

**Nokkelord:**
- *Innovasjon:* A skape noe nytt eller forbedre noe eksisterende
- *Risiko:* Villighet til a ta sjanser og handtere usikkerhet
- *Verdiskaping:* A skape noe av verdi for kunder og samfunnet
- *Muligheter:* A se potensial der andre ser problemer

**Joseph Schumpeter** (1883-1950), okonom, definerte entreprenoren som en som skaper "kreativ destruksjon" - a erstatte det gamle med noe nytt og bedre.`,
    },
    {
      id: 'entrebed-1-1-def-2',
      type: 'definition',
      title: 'Typer entreprenorskap',
      content: `**Kommersielt entreprenorskap:**
Fokus pa profitt og okonomisk verdiskaping. Tradisjonelle bedrifter som selger varer og tjenester.

**Sosialt entreprenorskap:**
Fokus pa a lose samfunnsproblemer. Kombinerer sosiale mal med forretningsmessig drift. Eksempel: TOMS Shoes - selger sko og donerer til barn i nod.

**Intraprenorskap:**
Entreprenorskap innenfor eksisterende organisasjoner. Ansatte som utvikler nye produkter eller forbedrer prosesser.

**Seriell entreprenorskap:**
Entreprenorer som starter flere bedrifter over tid, ofte etter a ha solgt eller avsluttet tidligere virksomheter.

**Livsstilsentreprenorskap:**
Fokus pa a skape en livsstil man onsker, ikke nodvendigvis vekst. Eksempel: Frilanser, yogainstruktor, fotograf.`,
    },
    {
      id: 'entrebed-1-1-def-3',
      type: 'definition',
      title: 'Entreprenorens egenskaper',
      content: `**Personlige egenskaper:**
- Kreativitet og nytenkning
- Mot til a ta risiko
- Utholdenhet og stahet
- Selvtillit og tro pa egne evner
- Evne til a se muligheter
- Handlingsorientert

**Faglige egenskaper:**
- Forretningsforstaelse
- Evne til a planlegge og organisere
- Kommunikasjons- og salgsferdigheter
- Nettverksbygging
- Okonomistyring

**Sosiale egenskaper:**
- Lederskap og motivasjonsevne
- Samarbeidsevne
- Evne til a bygge tillit
- Forhandlingsevner`,
    },
    {
      id: 'entrebed-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Petter Stordalen',
      problem: 'Hvordan illustrerer Petter Stordalen typiske entreprenoregenskaper?',
      solution: `**Bakgrunn:**
Petter Stordalen startet sin karriere med a selge jordbaer som barn. Han bygde opp Nordic Choice Hotels til en av Nordens storste hotellkjeder.

**Entreprenoregenskaper:**
- *Kreativitet:* Innovative hotellkonsepter som The Thief
- *Risikovilje:* Torde a satse stort og ta lan
- *Utholdenhet:* Overlevde flere kriser og tilbakeslag
- *Visjon:* Fokus pa baerekraft og opplevelser
- *Nettverksbygging:* Sterke relasjoner i naeringslivet

**Laerdom:**
Suksess kommer sjelden over natten. Det krever hard arbeid, evne til a laere av feil, og a tilpasse seg endringer i markedet.`,
    },
    {
      id: 'entrebed-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Ungdomsbedrift (UB)',
      problem: 'Hvordan fungerer ungdomsbedrift som en plattform for a laere entreprenorskap?',
      solution: `**Hva er UB?**
Ungdomsbedrift er et opplaeringsprogram der elever starter og driver en reell bedrift i ett skolear.

**Laeringselementer:**
- Ide og forretningsutvikling
- Teamarbeid og rolleavklaring
- Markedsforing og salg
- Okonomi og regnskap
- Presentasjon og pitching

**Prosessen:**
1. Etablering: Registrering, aksjesalg, valg av styre
2. Drift: Produksjon, salg, markedsforing
3. Avslutning: Arsmelding, generalforsamling, avvikling

**Fordeler:**
- Praktisk laering
- Utvikler samarbeidsevner
- Gir innsikt i bedriftsdrift
- Moter reelle utfordringer`,
    },
    {
      id: 'entrebed-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er entreprenorskap?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste definisjonen av entreprenorskap.',
            solution: 'Prosessen med a identifisere muligheter og skape verdi gjennom innovasjon',
            multipleChoiceOptions: [
              'Prosessen med a identifisere muligheter og skape verdi gjennom innovasjon',
              'A jobbe i en stor bedrift',
              'A studere okonomi pa universitetet',
              'A arve en familiebedrift'
            ],
          },
        ],
        solution: 'Entreprenorskap handler om a se muligheter, ta initiativ og skape noe nytt av verdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken type entreprenorskap fokuserer pa a lose samfunnsproblemer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig type entreprenorskap.',
            solution: 'Sosialt entreprenorskap',
            multipleChoiceOptions: [
              'Sosialt entreprenorskap',
              'Kommersielt entreprenorskap',
              'Intraprenorskap',
              'Livsstilsentreprenorskap'
            ],
          },
        ],
        solution: 'Sosialt entreprenorskap kombinerer forretningsmessig drift med sosiale mal for a lose samfunnsproblemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner en entreprenor?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken egenskap er mest typisk for en entreprenor?',
            solution: 'Villighet til a ta risiko og handle pa muligheter',
            multipleChoiceOptions: [
              'Villighet til a ta risiko og handle pa muligheter',
              'Unnga alle former for usikkerhet',
              'Folge etablerte regler uten a stille sporsmal',
              'Vente pa at andre skal ta initiativ'
            ],
          },
          {
            label: 'b',
            task: 'Nevn tre personlige egenskaper som er viktige for entreprenorer.',
            solution: 'Kreativitet, utholdenhet og selvtillit.',
            multipleChoiceOptions: [
              'Kreativitet, utholdenhet og selvtillit',
              'Passivitet, forsiktighet og konformitet',
              'Pessimisme, utalmodighet og avhengighet',
              'Rigiditet, frykt og usikkerhet'
            ],
          },
        ],
        solution: 'Entreprenorer kjennetegnes av kreativitet, risikovilje, utholdenhet, og evne til a se muligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er intraprenorskap?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av intraprenorskap.',
            solution: 'Entreprenorskap innenfor en eksisterende organisasjon',
            multipleChoiceOptions: [
              'Entreprenorskap innenfor en eksisterende organisasjon',
              'A starte en helt ny bedrift fra bunnen',
              'A investere i andres bedrifter',
              'A kjope opp konkurrenter'
            ],
          },
        ],
        solution: 'Intraprenorskap er nar ansatte tar initiativ til innovasjon og nye prosjekter innenfor en eksisterende bedrift.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi et eksempel pa en norsk entreprenor og beskriv hvorfor denne personen kan kalles entreprenor.',
        hints: ['Tenk pa kjente grunndere av norske bedrifter'],
        solution: 'Eksempel: Kjell Inge Rokke startet som fisker og bygde opp Aker-konsernet. Han viser typiske entreprenoregenskaper som risikovilje, visjon og evne til a se muligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er entreprenorskap viktig for samfunnet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det beste svaret.',
            solution: 'Skaper arbeidsplasser, driver innovasjon og okonomisk vekst',
            multipleChoiceOptions: [
              'Skaper arbeidsplasser, driver innovasjon og okonomisk vekst',
              'Kun for a gjore noen fa personer rike',
              'Har ingen betydning for samfunnet',
              'Skaper bare konkurranse og konflikter'
            ],
          },
        ],
        solution: 'Entreprenorskap er viktig fordi det skaper arbeidsplasser, driver innovasjon, loser problemer og bidrar til okonomisk vekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Forretningsideer og muligheter
// ============================================================================

export const CHAPTER_ENTREBED_1_2: TextbookChapter = {
  id: 'entrebed-1-2',
  courseId: 'entrebed-1',
  chapterNumber: '2',
  title: 'Forretningsideer og muligheter',
  description: 'Laer a identifisere muligheter, generere ideer og vurdere forretningspotensialet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'identifisere og vurdere forretingsmuligheter',
    'bruke kreative metoder for idegenerering',
    'vurdere om en ide har kommersielt potensial',
  ],
  content: [
    {
      id: 'entrebed-1-2-intro',
      type: 'text',
      content: `## Fra ide til mulighet

En god forretningside starter ofte med a se et problem som trenger en losning. Entreprenorer er flinke til a oppdage muligheter der andre ser hindringer.

**Hvor kommer ideer fra?**
- Egne erfaringer og frustrasjoner
- Kundebehov som ikke er dekket
- Teknologiske endringer
- Samfunnstrender
- Kombinasjoner av eksisterende ideer
- Tilfeldige oppdagelser

**Fra ide til mulighet:**
Ikke alle ideer er gode forretningsmuligheter. En mulighet er en ide som:
- Loser et reelt problem
- Har kunder som er villige til a betale
- Kan leveres pa en lonsom mate
- Passer til dine ressurser og kompetanse`,
    },
    {
      id: 'entrebed-1-2-def-1',
      type: 'definition',
      title: 'Idegenerering',
      content: `**Brainstorming:**
Gruppebasert metode der alle forslag noteres uten kritikk. Kvantitet for kvalitet. Bygg videre pa andres ideer.

**Mind mapping:**
Visuell teknikk der du starter med et sentralt tema og bygger ut forgreninger med relaterte ideer og assosiasjoner.

**SCAMPER-metoden:**
Systematisk metode for a modifisere eksisterende produkter:
- **S**ubstitute (Erstatte)
- **C**ombine (Kombinere)
- **A**dapt (Tilpasse)
- **M**odify (Modifisere)
- **P**ut to other use (Bruke annerledes)
- **E**liminate (Fjerne)
- **R**everse (Snu om)

**Observasjon:**
Studer hvordan folk bruker produkter og tjenester. Let etter frustrasjoner og udekkede behov.`,
    },
    {
      id: 'entrebed-1-2-def-2',
      type: 'definition',
      title: 'Vurdering av ideer',
      content: `**Problemet:**
- Er problemet reelt og viktig?
- Hvor mange har dette problemet?
- Hvor stort er problemet?

**Losningen:**
- Loser ideen problemet effektivt?
- Er losningen bedre enn eksisterende alternativer?
- Er losningen gjennomforbar?

**Markedet:**
- Hvem er malkunden?
- Er kundene villige til a betale?
- Hvor stort er markedet?

**Konkurransen:**
- Hvem er konkurrentene?
- Hva er ditt konkurransefortrinn?
- Kan ideen beskyttes?

**Ressurser:**
- Hva trengs for a realisere ideen?
- Har du tilgang til nodvendige ressurser?
- Hva er kostnadene?`,
    },
    {
      id: 'entrebed-1-2-def-3',
      type: 'definition',
      title: 'Kundebehov og verdiforslag',
      content: `**Kundebehov:**
For a lykkes ma du forsta hva kunden virkelig trenger - ikke bare hva de sier de vil ha.

**Typer behov:**
- *Uttalte behov:* Det kunden sier de vil ha
- *Reelle behov:* Det kunden faktisk trenger
- *Latente behov:* Behov kunden ikke vet de har

**Verdiforslag (Value Proposition):**
En tydelig beskrivelse av:
1. Hvilket problem du loser
2. For hvem (malkunden)
3. Hvordan du loser det bedre enn andre
4. Hvilken verdi kunden far

**Eksempel:**
"Vi hjelper travle foreldre (hvem) a spare tid pa matlaging (problem) ved a levere ferdigplanlagte matkasser med oppskrifter (losning), slik at de kan bruke mer kvalitetstid med familien (verdi)."`,
    },
    {
      id: 'entrebed-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Airbnb',
      problem: 'Hvordan oppdaget Airbnb en forretningsmulighet?',
      solution: `**Problemet:**
Grunnleggerne hadde ikke rad til husleien i San Francisco. Samtidig var det mangel pa hotellrom under en stor konferanse.

**Losningen:**
De leide ut luftmadrasser i leiligheten sin til konferansedeltakere - "Air Bed and Breakfast".

**Muligheten de sa:**
- Folk vil gjerne spare penger pa overnatting
- Mange har ledig plass de kan leie ut
- Reisende onsker autentiske, lokale opplevelser
- Teknologi (internett, smartphones) gjor det mulig

**Suksessfaktorer:**
- Loste et reelt problem for bade reisende og utleiere
- Tidspunktet var riktig (delingsokonomiens fremvekst)
- Skalerbar plattform
- Bygget tillit gjennom anmeldelser og verifisering`,
    },
    {
      id: 'entrebed-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva star SCAMPER for i idegenerering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av S i SCAMPER.',
            solution: 'Substitute (Erstatte)',
            multipleChoiceOptions: [
              'Substitute (Erstatte)',
              'Simplify (Forenkle)',
              'Sell (Selge)',
              'Start (Starte)'
            ],
          },
          {
            label: 'b',
            task: 'Hva betyr M i SCAMPER?',
            solution: 'Modify (Modifisere)',
            multipleChoiceOptions: [
              'Modify (Modifisere)',
              'Market (Markedsfore)',
              'Measure (Male)',
              'Minimize (Minimere)'
            ],
          },
        ],
        solution: 'SCAMPER star for: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en ide og en forretningsmulighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det beste svaret.',
            solution: 'En mulighet er en ide med betalende kunder og gjennomforbarhet',
            multipleChoiceOptions: [
              'En mulighet er en ide med betalende kunder og gjennomforbarhet',
              'Det er ingen forskjell',
              'En ide er alltid bedre enn en mulighet',
              'En mulighet krever ingen planlegging'
            ],
          },
        ],
        solution: 'En forretningsmulighet er en ide som loser et reelt problem, har kunder villige til a betale, og kan gjennomfores pa en lonsom mate.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Bruk brainstorming til a generere ideer for et problem.',
        hints: ['Velg et hverdagsproblem og skriv ned alle ideer uten a kritisere'],
        solution: 'Eksempel pa problem: Lang ko i kantina. Ideer: Forhandsbestilling via app, flere kasser, utvidet apningstid, selvbetjening, levering til klasserommet, meal prep-losning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er et verdiforslag (value proposition)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen.',
            solution: 'En beskrivelse av hvilket problem du loser, for hvem, og hvorfor din losning er bedre',
            multipleChoiceOptions: [
              'En beskrivelse av hvilket problem du loser, for hvem, og hvorfor din losning er bedre',
              'Prisen pa produktet ditt',
              'En liste over alle funksjoner',
              'Bedriftens arsregnskap'
            ],
          },
        ],
        solution: 'Et verdiforslag beskriver tydelig hvilket problem du loser, hvem du loser det for, og hvilken unik verdi du tilbyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Identifiser et problem i din hverdag og skriv et verdiforslag for en mulig losning.',
        hints: ['Folg strukturen: hvem, problem, losning, verdi'],
        solution: 'Eksempel: Vi hjelper studenter som sliter med a holde orden pa oppgaver (hvem/problem) ved a tilby en app som automatisk organiserer innleveringer og sender paminnelser (losning), slik at de leverer til tiden og reduserer stress (verdi).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva er forskjellen mellom uttalte og latente behov?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Uttalte behov er det kunden sier, latente behov er behov kunden ikke vet de har',
            multipleChoiceOptions: [
              'Uttalte behov er det kunden sier, latente behov er behov kunden ikke vet de har',
              'Det er det samme',
              'Latente behov er viktigere enn uttalte behov',
              'Uttalte behov finnes ikke'
            ],
          },
        ],
        solution: 'Uttalte behov er det kunden uttaler at de onsker. Latente behov er ubevisste behov som kunden ikke vet de har for de ser losningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Forretningsmodeller
// ============================================================================

export const CHAPTER_ENTREBED_1_3: TextbookChapter = {
  id: 'entrebed-1-3',
  courseId: 'entrebed-1',
  chapterNumber: '3',
  title: 'Forretningsmodeller',
  description: 'Forsta hvordan bedrifter skaper, leverer og fanger verdi gjennom ulike forretningsmodeller.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forklare hva en forretningsmodell er',
    'bruke Business Model Canvas',
    'analysere ulike typer forretningsmodeller',
  ],
  content: [
    {
      id: 'entrebed-1-3-intro',
      type: 'text',
      content: `## Hva er en forretningsmodell?

En forretningsmodell beskriver hvordan en bedrift skaper, leverer og fanger verdi. Det er en plan for hvordan bedriften skal tjene penger.

**Hvorfor er forretningsmodellen viktig?**
- Gir oversikt over hele virksomheten
- Hjelper a identifisere styrker og svakheter
- Kommuniserer forretningsideen til andre
- Grunnlag for strategiske beslutninger
- Nodvendig for a skaffe finansiering

**Nokkelsporsmal:**
- Hvem er kundene vare?
- Hva tilbyr vi dem?
- Hvordan nar vi kundene?
- Hvordan tjener vi penger?
- Hva koster det a drive?`,
    },
    {
      id: 'entrebed-1-3-def-1',
      type: 'definition',
      title: 'Business Model Canvas',
      content: `Business Model Canvas er et visuelt verktoy for a beskrive og utvikle forretningsmodeller. Det bestar av ni byggeklosser:

**1. Kundesegmenter:**
Hvem skaper vi verdi for? Hvem er vare viktigste kunder?

**2. Verdiforslag:**
Hvilken verdi leverer vi til kunden? Hvilke problemer loser vi?

**3. Kanaler:**
Hvordan nar vi kundene? Hvordan leverer vi verdiforslaget?

**4. Kunderelasjoner:**
Hvilken type relasjon har vi med hvert kundesegment?

**5. Inntektsstrommer:**
Hvordan tjener vi penger? Hva betaler kundene for?

**6. Nokkelressurser:**
Hvilke ressurser krever forretningsmodellen? (fysiske, intellektuelle, menneskelige, finansielle)

**7. Nokkelaktiviteter:**
Hva ma vi gjore for a levere verdiforslaget?

**8. Nokkelpartnere:**
Hvem er vare viktigste partnere og leverandorer?

**9. Kostnadsstruktur:**
Hva er de viktigste kostnadene i forretningsmodellen?`,
    },
    {
      id: 'entrebed-1-3-def-2',
      type: 'definition',
      title: 'Typer forretningsmodeller',
      content: `**Produktbasert:**
Selger fysiske produkter. Eksempel: IKEA, Apple.

**Tjenestebasert:**
Selger tjenester. Eksempel: Frisorer, advokater, konsulenter.

**Abonnement:**
Kunder betaler fast belope regelmessig. Eksempel: Netflix, Spotify, treningssenter.

**Freemium:**
Gratis grunnversjon, betal for ekstra funksjoner. Eksempel: Spotify, Dropbox, LinkedIn.

**Plattform:**
Kobler sammen tilbydere og kunder. Eksempel: Airbnb, Uber, Finn.no.

**Markedsplass:**
Selger andres produkter, tar provisjon. Eksempel: Amazon, eBay.

**Lisens:**
Selger rettigheter til a bruke noe. Eksempel: Franchise, programvarelisenser.

**Reklame:**
Gratis for brukere, inntekter fra annonsorer. Eksempel: Google, Facebook, gratisaviser.`,
    },
    {
      id: 'entrebed-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Spotify Business Model Canvas',
      problem: 'Hvordan ser forretningsmodellen til Spotify ut?',
      solution: `**Kundesegmenter:**
- Musikkentusiaster
- Podcastlyttere
- Artister og plateselskaper (B2B)

**Verdiforslag:**
- Ubegrenset tilgang til millioner av sanger
- Personlige anbefalinger
- Lytt pa alle enheter
- Dele musikk med venner

**Kanaler:**
App, nettside, smarthoytalere, partnere (telekom, Samsung)

**Kunderelasjoner:**
Automatisert plattform, personalisering, community

**Inntektsstrommer:**
- Premium-abonnement (hovedinntekt)
- Reklame (gratisbrukere)
- Podcast-reklame

**Nokkelressurser:**
Teknologiplattform, musikkrettigheter, algoritmer, merkevare

**Nokkelaktiviteter:**
Plattformutvikling, lisensforhandlinger, markedsforing

**Nokkelpartnere:**
Plateselskaper, artister, podcastere, betalingsleverandorer

**Kostnadsstruktur:**
Royalties (storste kostnad), teknologi, personal, markedsforing`,
    },
    {
      id: 'entrebed-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en forretningsmodell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen.',
            solution: 'En plan for hvordan bedriften skaper, leverer og fanger verdi',
            multipleChoiceOptions: [
              'En plan for hvordan bedriften skaper, leverer og fanger verdi',
              'Bare en beskrivelse av produktet',
              'Kun bedriftens logo og navn',
              'Arsregnskapet til bedriften'
            ],
          },
        ],
        solution: 'En forretningsmodell beskriver hvordan bedriften skaper verdi for kunder, leverer denne verdien, og tjener penger pa det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange byggeklosser har Business Model Canvas?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall.',
            solution: '9 byggeklosser',
            multipleChoiceOptions: [
              '9 byggeklosser',
              '5 byggeklosser',
              '12 byggeklosser',
              '7 byggeklosser'
            ],
          },
        ],
        solution: 'Business Model Canvas har 9 byggeklosser: Kundesegmenter, Verdiforslag, Kanaler, Kunderelasjoner, Inntektsstrommer, Nokkelressurser, Nokkelaktiviteter, Nokkelpartnere, Kostnadsstruktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en freemium-forretningsmodell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Gratis grunnversjon, betal for ekstra funksjoner',
            multipleChoiceOptions: [
              'Gratis grunnversjon, betal for ekstra funksjoner',
              'Alt er gratis',
              'Alt koster penger',
              'Kun abonnement'
            ],
          },
        ],
        solution: 'Freemium kombinerer "free" og "premium" - en gratis grunnversjon lokker brukere, og noen betaler for premium-funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken forretningsmodell bruker Airbnb?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig type.',
            solution: 'Plattform/markedsplass',
            multipleChoiceOptions: [
              'Plattform/markedsplass',
              'Produktbasert',
              'Abonnement',
              'Lisens'
            ],
          },
        ],
        solution: 'Airbnb er en plattform som kobler utleiere og leietakere, og tar en provisjon av hver transaksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Fyll ut et Business Model Canvas for en kafé.',
        hints: ['Tenk gjennom alle 9 byggeklossene systematisk'],
        solution: 'Eksempel: Kundesegmenter: Studenter, kontorarbeidere. Verdiforslag: God kaffe, hyggelig sted a jobbe. Kanaler: Fysisk lokale, sosiale medier. Inntektsstrommer: Salg av kaffe og mat. Nokkelressurser: Lokale, kaffemaskin, ansatte. Nokkelaktiviteter: Lage kaffe, kundeservice. Nokkelpartnere: Kaffelevenrandor, baker. Kostnadsstruktur: Husleie, ravarev, lonn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign forretningsmodellen til Netflix og en tradisjonell kinofilm.',
        hints: ['Tenk pa hvordan de tjener penger og hvordan de leverer verdi'],
        solution: 'Netflix: Abonnementsmodell, streaming, ubegrenset innhold, se nar du vil. Kino: Transaksjon per film, fysisk lokasjon, premiere-opplevelse, sosial aktivitet. Netflix har lavere marginalkostnad per kunde og kan skalere globalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Markedsanalyse og markedsforing
// ============================================================================

export const CHAPTER_ENTREBED_1_4: TextbookChapter = {
  id: 'entrebed-1-4',
  courseId: 'entrebed-1',
  chapterNumber: '4',
  title: 'Markedsanalyse og markedsforing',
  description: 'Laer a analysere markeder, forsta konkurranse og utvikle markedsforingsstrategier.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjennomfore enkle markedsanalyser',
    'identifisere og analysere konkurrenter',
    'utvikle grunnleggende markedsforingsstrategier',
  ],
  content: [
    {
      id: 'entrebed-1-4-intro',
      type: 'text',
      content: `## Markedsanalyse for entreprenorer

For markedsforing handler om a forsta markedet for du starter a selge. Markedsanalyse gir deg innsikt i kundene, konkurrentene og mulighetene.

**Hvorfor markedsanalyse?**
- Reduserer risiko
- Bekrefter eller avkrefter antakelser
- Identifiserer malgruppen
- Forstaar konkurransen
- Gir grunnlag for beslutninger

**Hva bor du undersoke?**
- Markedets storrelse og vekst
- Kundenes behov og atferd
- Konkurrentenes styrker og svakheter
- Trender og endringer
- Barrierer for inngang`,
    },
    {
      id: 'entrebed-1-4-def-1',
      type: 'definition',
      title: 'Markedsundersokelser',
      content: `**Primardata:**
Data du samler inn selv for formalet.
- Sporreundersokelser (nett, telefon, ansikt til ansikt)
- Intervjuer (dybdeintervjuer, fokusgrupper)
- Observasjon
- Eksperimenter og testing

**Sekundardata:**
Eksisterende data fra andre kilder.
- Statistisk sentralbyra (SSB)
- Bransjeorganisasjoner
- Forskningsrapporter
- Nyheter og artikler
- Konkurrenters nettsider

**Kvalitativ vs. kvantitativ:**
- *Kvalitativ:* Dybdeforstaelse, "hvorfor" og "hvordan"
- *Kvantitativ:* Malbare data, "hvor mange" og "hvor mye"`,
    },
    {
      id: 'entrebed-1-4-def-2',
      type: 'definition',
      title: 'Konkurrentanalyse',
      content: `**Direkte konkurrenter:**
Tilbyr samme produkt/tjeneste til samme malgruppe.

**Indirekte konkurrenter:**
Tilbyr alternativer som dekker samme behov.

**Hva bor du analysere?**
- Hvem er konkurrentene?
- Hva tilbyr de?
- Hva er deres styrker og svakheter?
- Hvordan priser de?
- Hvordan markedsforer de?
- Hvem er kundene deres?

**Porters fem krefter:**
1. Trussel fra nye aktorer
2. Trussel fra substitutter
3. Kundens forhandlingsmakt
4. Leverandorens forhandlingsmakt
5. Rivalisering mellom eksisterende konkurrenter`,
    },
    {
      id: 'entrebed-1-4-def-3',
      type: 'definition',
      title: 'Markedsforingens 4P',
      content: `**Produkt:**
Hva selger du? Egenskaper, kvalitet, design, merkenavn, emballasje.

**Pris:**
Hva koster det? Prisstrategi, rabatter, betalingsbetingelser.
- Kostpluss: Kostnad + margin
- Markedsbasert: Hva er kundene villige til a betale?
- Konkurransebasert: Sammenlign med konkurrenter

**Plass (Distribusjon):**
Hvor og hvordan selger du? Butikk, nettbutikk, grossist, direkte salg.

**Promosjon:**
Hvordan markedsforer du?
- Reklame (betalt)
- PR og omtale
- Sosiale medier
- Innholdsmarkedsforing
- Salgsfremmende tiltak
- Personlig salg`,
    },
    {
      id: 'entrebed-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Markedsanalyse for en ny pizzarestaurant',
      problem: 'Hvordan gjennomforer du en enkel markedsanalyse for en ny pizzarestaurant i nabolaget?',
      solution: `**Trinn 1: Definer markedet**
Geografisk omrade: 2 km radius fra lokalet.
Malgruppe: Familier, studenter, kontorarbeidere.

**Trinn 2: Undersok konkurrentene**
- Kartlegg eksisterende spisesteder
- Besok dem, studer meny og priser
- Les anmeldelser pa TripAdvisor og Google

**Trinn 3: Undersok kundene**
- Sporreundersokelse i omradet
- Intervju potensielle kunder
- Analyser demografiske data fra SSB

**Trinn 4: Vurder muligheten**
- Er det rom for en ny pizza-restaurant?
- Hva kan du gjore bedre enn konkurrentene?
- Er prisnivaet realistisk?

**Konklusjon:**
Omradet har fa italienske restauranter, men hoy befolkningstetthet med mange barnefamilier. Mulighet for familievennlig pizzarestaurant med levering.`,
    },
    {
      id: 'entrebed-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom primardata og sekundardata?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Primardata samles inn selv, sekundardata er eksisterende data',
            multipleChoiceOptions: [
              'Primardata samles inn selv, sekundardata er eksisterende data',
              'Det er ingen forskjell',
              'Sekundardata er mer palitelig',
              'Primardata er alltid gratis'
            ],
          },
        ],
        solution: 'Primardata er data du samler inn selv for det spesifikke formalet (f.eks. sporreundersokelse). Sekundardata er data som allerede finnes (f.eks. SSB-statistikk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de fire P-ene i markedsforing?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kombinasjon.',
            solution: 'Produkt, Pris, Plass, Promosjon',
            multipleChoiceOptions: [
              'Produkt, Pris, Plass, Promosjon',
              'Person, Plan, Profitt, Produkt',
              'Penger, Prosess, Personale, Plass',
              'Produksjon, Pakking, Prising, Planlegging'
            ],
          },
        ],
        solution: 'De fire P-ene er Produkt (hva du selger), Pris (hva det koster), Plass (hvor du selger), og Promosjon (hvordan du markedsforer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er direkte vs. indirekte konkurrenter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Direkte: samme produkt til samme kunde. Indirekte: alternativer som dekker samme behov',
            multipleChoiceOptions: [
              'Direkte: samme produkt til samme kunde. Indirekte: alternativer som dekker samme behov',
              'Det er ingen forskjell mellom dem',
              'Indirekte konkurrenter er viktigere',
              'Direkte konkurrenter finnes ikke i praksis'
            ],
          },
        ],
        solution: 'Direkte konkurrenter tilbyr samme produkt til samme malgruppe. Indirekte konkurrenter tilbyr alternativer som dekker samme underliggende behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfor en enkel konkurrentanalyse for din forretningside.',
        hints: ['Identifiser 3 konkurrenter og analyser deres styrker og svakheter'],
        solution: 'Eksempel for en ny frokostkafe: Konkurrent 1 - Starbucks: Sterk merkevare, dyrt, upersonlig. Konkurrent 2 - Lokal bakeri: God kvalitet, begrenset meny, kort apningstid. Konkurrent 3 - McDonald\'s: Billig, rask, darlig kvalitet. Mulighet: Kombinere kvalitet, rimelig pris og personlig service.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar Porters fem krefter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken kraft handler om at kunder kan velge a kjope fra konkurrenter?',
            solution: 'Kundens forhandlingsmakt',
            multipleChoiceOptions: [
              'Kundens forhandlingsmakt',
              'Trussel fra nye aktorer',
              'Rivalisering mellom konkurrenter',
              'Leverandorens forhandlingsmakt'
            ],
          },
        ],
        solution: 'Porters fem krefter analyserer konkurransesituasjonen: 1) Nye aktorer, 2) Substitutter, 3) Kundemakt, 4) Leverandormakt, 5) Rivalisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Utvikle en enkel markedsforingsplan med 4P for en ungdomsbedrift.',
        hints: ['Beskriv produkt, pris, plass og promosjon'],
        solution: 'Eksempel UB som selger handlagde telefondeksler: Produkt - Unike, personaliserte deksler med kreative design. Pris - 150 kr (konkurransedyktig, god margin). Plass - Salg pa skolen, Instagram-butikk, lokale markeder. Promosjon - Instagram, TikTok, skolearrangementer, word-of-mouth.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Okonomi og regnskap
// ============================================================================

export const CHAPTER_ENTREBED_1_5: TextbookChapter = {
  id: 'entrebed-1-5',
  courseId: 'entrebed-1',
  chapterNumber: '5',
  title: 'Okonomi og regnskap',
  description: 'Forsta grunnleggende okonomi, budsjettering og regnskap for oppstartsbedrifter.',
  estimatedMinutes: 70,
  competenceGoals: [
    'sette opp enkle budsjetter',
    'forsta grunnleggende regnskapsprinsipper',
    'beregne lonnsomhet og dekningsbidrag',
  ],
  content: [
    {
      id: 'entrebed-1-5-intro',
      type: 'text',
      content: `## Okonomi for entreprenorer

God okonomistyring er avgjorende for en bedrifts overlevelse. Mange lovende bedrifter feiler pa grunn av darlig okonomikontroll.

**Hvorfor er okonomiforstaelse viktig?**
- Sikre lonnsomhet
- Ta gode beslutninger
- Skaffe finansiering
- Unnga konkurs
- Planlegge for vekst

**Grunnleggende okonomiske begreper:**
- Inntekter: Penger som kommer inn
- Kostnader: Penger som gar ut
- Resultat: Inntekter minus kostnader
- Likviditet: Evne til a betale regninger
- Lonnsonmhet: Tjener bedriften penger?`,
    },
    {
      id: 'entrebed-1-5-def-1',
      type: 'definition',
      title: 'Faste og variable kostnader',
      content: `**Faste kostnader:**
Kostnader som ikke endrer seg med produksjonsmengden.
- Husleie
- Forsikring
- Lonn til fast ansatte
- Abonnementer
- Avskrivninger

**Variable kostnader:**
Kostnader som varierer med produksjonsmengden.
- Ravarer
- Emballasje
- Provisjon
- Strorm (i produksjon)
- Frakt

**Totale kostnader = Faste kostnader + Variable kostnader**

**Eksempel:**
En baker har faste kostnader (husleie, ovn) og variable kostnader (mel, egg per brod). Jo flere brod, jo hoevere variable kostnader, men faste kostnader er like.`,
    },
    {
      id: 'entrebed-1-5-def-2',
      type: 'definition',
      title: 'Dekningsbidrag og nullpunkt',
      content: `**Dekningsbidrag (DB):**
Det som er igjen av salgsprisen etter at variable kostnader er trukket fra.

$$\\text{Dekningsbidrag} = \\text{Salgspris} - \\text{Variable kostnader per enhet}$$

**Eksempel:**
Salgspris: 100 kr
Variable kostnader: 40 kr
Dekningsbidrag: 100 - 40 = 60 kr

**Nullpunkt (break-even):**
Antall enheter du ma selge for a dekke alle kostnader.

$$\\text{Nullpunkt} = \\frac{\\text{Faste kostnader}}{\\text{Dekningsbidrag per enhet}}$$

**Eksempel:**
Faste kostnader: 60 000 kr
Dekningsbidrag: 60 kr
Nullpunkt: 60 000 / 60 = 1000 enheter

Du ma selge 1000 enheter for a ga i null.`,
    },
    {
      id: 'entrebed-1-5-def-3',
      type: 'definition',
      title: 'Budsjett',
      content: `**Hva er et budsjett?**
En plan for forventede inntekter og kostnader i en periode.

**Typer budsjetter:**
- *Salgsbudsjett:* Forventet salg
- *Kostnadsbudsjett:* Forventede kostnader
- *Resultatbudsjett:* Forventet overskudd/underskudd
- *Likviditetsbudsjett:* Nar penger kommer inn og gar ut

**Likviditetsbudsjett:**
Viser kontantstromrmen - nar du mottar og betaler penger.

| Maned | Innbetalinger | Utbetalinger | Saldo |
|-------|---------------|--------------|-------|
| Jan   | 50 000        | 40 000       | 10 000|
| Feb   | 60 000        | 55 000       | 15 000|
| Mar   | 45 000        | 50 000       | 10 000|

**Viktig:** Selv lonnsonmme bedrifter kan ga konkurs hvis de ikke har nok kontanter til a betale regninger nar de forfaller!`,
    },
    {
      id: 'entrebed-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av nullpunkt',
      problem: 'En ungdomsbedrift selger handlagde smykker. Salgspris er 150 kr, variable kostnader er 50 kr per smykke, og faste kostnader er 5000 kr. Hvor mange smykker ma de selge for a ga i null?',
      solution: `**Gitt:**
- Salgspris: 150 kr
- Variable kostnader: 50 kr
- Faste kostnader: 5000 kr

**Steg 1: Beregn dekningsbidrag**
$$\\text{DB} = 150 - 50 = 100 \\text{ kr}$$

**Steg 2: Beregn nullpunkt**
$$\\text{Nullpunkt} = \\frac{5000}{100} = 50 \\text{ smykker}$$

**Svar:**
Bedriften ma selge minst 50 smykker for a dekke alle kostnader. For hvert smykke utover 50, tjener de 100 kr i overskudd.`,
    },
    {
      id: 'entrebed-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom faste og variable kostnader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Faste kostnader endres ikke med produksjonen, variable kostnader oker med produksjonen',
            multipleChoiceOptions: [
              'Faste kostnader endres ikke med produksjonen, variable kostnader oker med produksjonen',
              'Det er ingen forskjell',
              'Variable kostnader er alltid hoyere',
              'Faste kostnader kan man unnga'
            ],
          },
        ],
        solution: 'Faste kostnader (husleie, forsikring) er like uansett hvor mye du produserer. Variable kostnader (ravarer) oker med produksjonsmengden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Klassifiser folgende kostnader som faste eller variable.',
        subTasks: [
          {
            label: 'a',
            task: 'Husleie for butikklokale',
            solution: 'Fast kostnad',
            multipleChoiceOptions: [
              'Fast kostnad',
              'Variabel kostnad'
            ],
          },
          {
            label: 'b',
            task: 'Ravarer til produksjon',
            solution: 'Variabel kostnad',
            multipleChoiceOptions: [
              'Variabel kostnad',
              'Fast kostnad'
            ],
          },
          {
            label: 'c',
            task: 'Forsiking',
            solution: 'Fast kostnad',
            multipleChoiceOptions: [
              'Fast kostnad',
              'Variabel kostnad'
            ],
          },
        ],
        solution: 'Husleie og forsikring er faste kostnader - de er like hver maned. Ravarer er variable - jo mer du produserer, jo mer ravarer trenger du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beregn dekningsbidrag. Salgspris er 200 kr, variable kostnader er 80 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er dekningsbidraget?',
            solution: '120 kr',
            multipleChoiceOptions: [
              '120 kr',
              '280 kr',
              '80 kr',
              '200 kr'
            ],
          },
        ],
        solution: 'Dekningsbidrag = Salgspris - Variable kostnader = 200 - 80 = 120 kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beregn nullpunktet. Faste kostnader er 30 000 kr, dekningsbidrag per enhet er 150 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange enheter ma selges for a na nullpunktet?',
            solution: '200 enheter',
            multipleChoiceOptions: [
              '200 enheter',
              '150 enheter',
              '300 enheter',
              '100 enheter'
            ],
          },
        ],
        solution: 'Nullpunkt = Faste kostnader / Dekningsbidrag = 30 000 / 150 = 200 enheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er et likviditetsbudsjett, og hvorfor er det viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen.',
            solution: 'Viser nar penger kommer inn og gar ut, viktig for a unnga betalingsproblemer',
            multipleChoiceOptions: [
              'Viser nar penger kommer inn og gar ut, viktig for a unnga betalingsproblemer',
              'Viser bare inntekter',
              'Er det samme som et resultatbudsjett',
              'Er kun nodvendig for store bedrifter'
            ],
          },
        ],
        solution: 'Et likviditetsbudsjett viser kontantstromrmen - nar penger faktisk kommer inn og gar ut. Det er viktig fordi en bedrift kan ga konkurs selv om den er lonnsom, hvis den ikke har kontanter til a betale regninger nar de forfaller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sett opp et enkelt resultatbudsjett for en maned for din forretningside.',
        hints: ['List opp forventede inntekter og kostnader'],
        solution: 'Eksempel UB som selger t-skjorter: Inntekter - Salg 50 skjorter x 200 kr = 10 000 kr. Kostnader - Innkjop 50 x 80 = 4000 kr, Markedsforing 500 kr, Stand pa marked 300 kr. Totale kostnader 4800 kr. Resultat: 10 000 - 4800 = 5200 kr overskudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Organisering og ledelse
// ============================================================================

export const CHAPTER_ENTREBED_1_6: TextbookChapter = {
  id: 'entrebed-1-6',
  courseId: 'entrebed-1',
  chapterNumber: '6',
  title: 'Organisering og ledelse',
  description: 'Forsta hvordan bedrifter organiseres, ulike selskapsformer og grunnleggende ledelse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for ulike selskapsformer',
    'forsta grunnleggende organisasjonsstruktur',
    'beskrive viktige lederegenskaper og -roller',
  ],
  content: [
    {
      id: 'entrebed-1-6-intro',
      type: 'text',
      content: `## Organisering av bedriften

Nar du starter en bedrift, ma du ta viktige valg om hvordan den skal organiseres. Dette pavirker ansvar, risiko og muligheter.

**Viktige valg:**
- Hvilken selskapsform?
- Hvem eier bedriften?
- Hvordan er ansvarsfordelingen?
- Hvilken struktur passer?
- Hvordan skal vi samarbeide?

**Faktorer som pavirker valget:**
- Antall grunnleggere
- Risikovillighet
- Kapitalbehov
- Vekstambisjoner
- Bransje og type virksomhet`,
    },
    {
      id: 'entrebed-1-6-def-1',
      type: 'definition',
      title: 'Selskapsformer',
      content: `**Enkeltpersonforetak (ENK):**
- En eier som har fullt personlig ansvar
- Enkelt a starte og drive
- Overskudd beskattes som personlig inntekt
- Egner seg for sma virksomheter med lav risiko

**Ansvarlig selskap (ANS/DA):**
- To eller flere eiere
- ANS: Solidarisk ansvar (alle kan holdes ansvarlig for alt)
- DA: Delt ansvar (hver eier ansvarlig for sin andel)
- Egner seg for partnerskap

**Aksjeselskap (AS):**
- Begrenset ansvar - maks tap er innskutt kapital
- Krev minimum 30 000 kr i aksjekapital
- Eget skattesubjekt (selskapet betaler skatt)
- Egner seg for vekstbedrifter og hoeyere risiko

**Ungdomsbedrift (UB):**
- Spesiell organisasjonsform for elever
- Registreres i Ungdomsbedriftsregisteret
- Begrenset ansvar
- Avvikles ved skolearets slutt`,
    },
    {
      id: 'entrebed-1-6-def-2',
      type: 'definition',
      title: 'Roller i en bedrift',
      content: `**Generalforsamling (AS):**
Overstee organ, bestar av alle aksjonarer. Velger styre og godkjenner regnskap.

**Styret:**
Har overordnet ansvar for selskapet. Velger daglig leder, forer tilsyn, tar strategiske beslutninger.

**Daglig leder:**
Ansvarlig for den daglige driften. Rapporterer til styret.

**I en ungdomsbedrift:**
- *Daglig leder:* Leder det daglige arbeidet
- *Okonomiansvarlig:* Ansvar for regnskap og okonomi
- *Markedsansvarlig:* Ansvar for salg og markedsforing
- *Produksjonsansvarlig:* Ansvar for a lage produktet/tjenesten
- *Personalansvarlig:* Ansvar for trivsel og samarbeid

**Team vs. hierarki:**
- Sma bedrifter jobber ofte i team med flat struktur
- Storre bedrifter har ofte mer hierarki`,
    },
    {
      id: 'entrebed-1-6-def-3',
      type: 'definition',
      title: 'Ledelse og lederegenskaper',
      content: `**Hva er ledelse?**
A pavirke og motivere andre til a na felles mal.

**Viktige lederegenskaper:**
- Kommunikasjon: Formidle visjon og forventninger
- Motivasjon: Inspirere og engasjere teamet
- Beslutningsevne: Ta gode avgjorelser
- Delegering: Fordele oppgaver effektivt
- Konfliktlosning: Handtere uenigheter
- Tilpasningsevne: Justere seg etter situasjonen

**Lederstiler:**
- *Autoritaer:* Lederen bestemmer alt
- *Demokratisk:* Medarbeidere involveres i beslutninger
- *Laissez-faire:* Stor frihet til medarbeidere
- *Situasjonsbestemt:* Tilpasser stil til situasjonen

**Motivasjon:**
- Indre motivasjon: Interesse, mestring, mening
- Ytre motivasjon: Lonn, bonus, anerkjennelse`,
    },
    {
      id: 'entrebed-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Valg av selskapsform',
      problem: 'Tre venner vil starte en nettbutikk. Hvilken selskapsform bor de velge?',
      solution: `**Vurdering av alternativer:**

**ENK:** Ikke egnet - bare en eier.

**ANS/DA:** Mulig, men risikabelt:
- ANS: Alle ansvarlige for alt (en kan settes i gjeld av andres feil)
- DA: Noe bedre, men fortsatt personlig ansvar

**AS:** Anbefalt valg:
- Begrenset ansvar (maks tap er innskuddet)
- Tydelig eierfordeling gjennom aksjer
- Profesjonelt ovenfor leverandorer og kunder
- Lettere a ta inn nye investorer
- Krav: 30 000 kr (10 000 kr hver)

**Konklusjon:**
Et AS gir best beskyttelse og fleksibilitet for tre likeverdige partnere. Koster litt mer a etablere, men gir trygghet og troverdighet.`,
    },
    {
      id: 'entrebed-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken selskapsform har begrenset ansvar?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig selskapsform.',
            solution: 'Aksjeselskap (AS)',
            multipleChoiceOptions: [
              'Aksjeselskap (AS)',
              'Enkeltpersonforetak',
              'Ansvarlig selskap (ANS)',
              'Alle har begrenset ansvar'
            ],
          },
        ],
        solution: 'I et aksjeselskap (AS) er eiernes ansvar begrenset til den aksjekapitalen de har skutt inn. De kan ikke tape mer enn dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er minimumskravet til aksjekapital i et AS?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig belop.',
            solution: '30 000 kr',
            multipleChoiceOptions: [
              '30 000 kr',
              '10 000 kr',
              '100 000 kr',
              '50 000 kr'
            ],
          },
        ],
        solution: 'Fra 2012 er minimumskravet til aksjekapital i et AS 30 000 kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke roller finnes typisk i en ungdomsbedrift?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken rolle har ansvar for regnskap?',
            solution: 'Okonomiansvarlig',
            multipleChoiceOptions: [
              'Okonomiansvarlig',
              'Daglig leder',
              'Markedsansvarlig',
              'Produksjonsansvarlig'
            ],
          },
        ],
        solution: 'I en UB er det typisk: Daglig leder, okonomiansvarlig, markedsansvarlig, produksjonsansvarlig og personalansvarlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner en demokratisk lederstil?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen.',
            solution: 'Medarbeidere involveres i beslutninger',
            multipleChoiceOptions: [
              'Medarbeidere involveres i beslutninger',
              'Lederen bestemmer alt alene',
              'Medarbeiderne har full frihet uten veiledning',
              'Ingen tar ansvar for beslutninger'
            ],
          },
        ],
        solution: 'En demokratisk lederstil innebarer at lederen involverer medarbeiderne i beslutningsprosesser, lytter til innspill og bygger konsensus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom indre og ytre motivasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er indre motivasjon?',
            solution: 'Drivkraft fra interesse, mestring og mening i selve oppgaven',
            multipleChoiceOptions: [
              'Drivkraft fra interesse, mestring og mening i selve oppgaven',
              'Motivasjon fra lonn og bonuser',
              'Press fra ledelsen',
              'Frykt for a miste jobben'
            ],
          },
        ],
        solution: 'Indre motivasjon kommer fra selve oppgaven (interesse, mestring, mening). Ytre motivasjon kommer fra belonninger utenfra (lonn, bonus, ros, status).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv hvordan du ville organisert din ungdomsbedrift og hvorfor.',
        hints: ['Tenk pa roller, ansvarsfordeling og samarbeidsform'],
        solution: 'Eksempel: 5 medlemmer med flat struktur men tydelige ansvarsomrader. Daglig leder koordinerer, okonomiansvarlig forer regnskap, markedsforer styrer sosiale medier, produksjonsansvarlig lager produktet, personalansvarlig sikrer godt samarbeid. Ukentlige motter for a koordinere. Alle involveres i viktige beslutninger (demokratisk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Baerekraftig entreprenorskap
// ============================================================================

export const CHAPTER_ENTREBED_1_7: TextbookChapter = {
  id: 'entrebed-1-7',
  courseId: 'entrebed-1',
  chapterNumber: '7',
  title: 'Baerekraftig entreprenorskap',
  description: 'Forsta betydningen av baerekraft i entreprenorskap og hvordan skape verdier uten a skade miljo og samfunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare sammenhengen mellom entreprenorskap og baerekraft',
    'identifisere muligheter innen baerekraftig forretningsutvkling',
    'vurdere bedrifters samfunnsansvar',
  ],
  content: [
    {
      id: 'entrebed-1-7-intro',
      type: 'text',
      content: `## Baerekraft og entreprenorskap

Baerekraftig entreprenorskap handler om a skape okonomisk verdi samtidig som man tar hensyn til miljomessige og sosiale konsekvenser.

**Hvorfor er baerekraft viktig for entreprenorer?**
- Kundene krever det
- Regulering og lovverk
- Langsiktig lonnsomhet
- Tiltrekke investorer og talent
- Redusere risiko
- Skape konkurransefortrinn

**FNs baerekraftsmal:**
17 globale mal for a bekjempe fattigdom, ulikhet og klimaendringer. Entreprenorer kan bidra til a na disse malene gjennom innovative losninger.`,
    },
    {
      id: 'entrebed-1-7-def-1',
      type: 'definition',
      title: 'Den tredelte bunnlinjen',
      content: `**Triple Bottom Line (TBL):**
En bedrifts suksess males ikke bare i profitt, men i tre dimensjoner:

**People (Mennesker):**
- Hvordan behandles ansatte?
- Hvordan pavirkes lokalsamfunnet?
- Bidrar bedriften til sosial utvikling?

**Planet (Miljoe):**
- Hva er bedriftens miljopavirkning?
- Brukes ressurser baerekraftig?
- Hvordan handteres avfall og utslipp?

**Profit (Okonomisk):**
- Er bedriften lonnnsom?
- Skapes okonomisk verdi?
- Er driften effektiv?

**Baerekraftige bedrifter:**
Balanserer alle tre dimensjonene for langsiktig suksess.`,
    },
    {
      id: 'entrebed-1-7-def-2',
      type: 'definition',
      title: 'Sirkulaerokonomi',
      content: `**Lineaer okonomi (tradisjonell):**
Ta - Lag - Bruk - Kast

**Sirkulaerokonomi:**
Ressurser holdes i bruk sa lenge som mulig.

**Prinsipper:**
1. **Design ut avfall:** Produkter designes for gjenbruk og resirkulering
2. **Hold produkter i bruk:** Reparasjon, gjenbruk, deling
3. **Regenerer naturen:** Bruk fornybare ressurser, bidra til okosystemer

**Forretningsmodeller i sirkulaerokonomi:**
- Produkt som tjeneste (leasing)
- Reparasjon og vedlikehold
- Gjenbruk og videresalg
- Resirkulering og gjenvinning
- Deling og utleie

**Eksempel:**
Patagonia reparerer og selger brukte klaer. Tomra tar igjen tomflasker for gjenvinning.`,
    },
    {
      id: 'entrebed-1-7-def-3',
      type: 'definition',
      title: 'Bedriftens samfunnsansvar (CSR)',
      content: `**Corporate Social Responsibility (CSR):**
Bedriftens frivillige innsats for a ta ansvar utover lovkrav.

**Omrader for CSR:**
- Miljotiltak
- Arbeidsforhold
- Menneskerettigheter
- Antikorrupsjon
- Lokalsamfunnsengasjement
- Etisk markedsforing

**Fordeler med CSR:**
- Styrket omdomrne
- Lojalitet fra kunder og ansatte
- Redusert risiko
- Attraktiv for investorer
- Bidrar til baerekraftig utvikling

**Groennvasking:**
Falsk eller overdreven markedsforing av miljoinnsats. Forer til tap av tillit og kan vaere ulovlig.`,
    },
    {
      id: 'entrebed-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Baerekraftige forretningsideer',
      problem: 'Hvilke muligheter finnes for baerekraftig entreprenorskap?',
      solution: `**Fornybar energi:**
Solceller, vindkraft, energieffektivisering.

**Baerekraftig mat:**
Plantebasert protein, matsvinnreduksjon, vertikalfarming.

**Mobilitet:**
Bildeling, elspakker, sykkeltjenester.

**Klaer og tekstil:**
Gjenbruk, reparasjon, baerekraftige materialer.

**Teknologi:**
Apper for baerekraftig livsstil, IoT for energisparing.

**Avfall:**
Resirkulering, upcycling, emballasjefrie losninger.

**Norske eksempler:**
- Oda: Mindre matsvinn gjennom sentrallager
- Tise: Brukthandel for ungdom
- Otovo: Solceller pa tak
- Fjong: Klesbyttring`,
    },
    {
      id: 'entrebed-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er den tredelte bunnlinjen (Triple Bottom Line)?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva star de tre P-ene for?',
            solution: 'People, Planet, Profit',
            multipleChoiceOptions: [
              'People, Planet, Profit',
              'Price, Product, Promotion',
              'Plan, Process, Performance',
              'Partner, Platform, Positioning'
            ],
          },
        ],
        solution: 'Triple Bottom Line maler suksess i tre dimensjoner: People (sosial pavirkning), Planet (miljoepavirkning), og Profit (okonomisk resultat).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er sirkulaerokonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen.',
            solution: 'Et system der ressurser holdes i bruk lengst mulig gjennom gjenbruk og resirkulering',
            multipleChoiceOptions: [
              'Et system der ressurser holdes i bruk lengst mulig gjennom gjenbruk og resirkulering',
              'A produsere sa mye som mulig',
              'A kaste alt etter bruk',
              'Kun a handle lokalt'
            ],
          },
        ],
        solution: 'Sirkulaerokonomi er et alternativ til lineaer okonomi (ta-lag-kast). Ressurser brukes lengst mulig gjennom gjenbruk, reparasjon og resirkulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er groennvasking?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Falsk eller overdreven markedsforing av miljoinnsats',
            multipleChoiceOptions: [
              'Falsk eller overdreven markedsforing av miljoinnsats',
              'A vaske med miljovennlige produkter',
              'En effektiv miljoestrategi',
              'A resirkulere alt'
            ],
          },
        ],
        solution: 'Groennvasking er nar bedrifter overdriver eller lyver om sin miljoinnsats for a fremsta som mer baerekraftige enn de er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke FN baerekraftsmal kan entreprenorer bidra til?',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel pa mal og hvordan en bedrift kan bidra.',
            solution: 'Mal 12: Ansvarlig forbruk og produksjon - f.eks. en gjenbruksbutikk reduserer avfall',
            multipleChoiceOptions: [
              'Mal 12: Ansvarlig forbruk og produksjon - f.eks. en gjenbruksbutikk reduserer avfall',
              'FNs mal gjelder ikke for bedrifter',
              'Bare staten kan bidra til FN-malene',
              'Det finnes ingen sammenheng mellom mal og bedrift'
            ],
          },
        ],
        solution: 'Entreprenorer kan bidra til mange FN-mal: Mal 7 (ren energi), Mal 8 (anstendig arbeid), Mal 12 (ansvarlig forbruk), Mal 13 (klimahandling) osv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Utvikle en baerekraftig forretningside og forklar hvordan den tar hensyn til People, Planet og Profit.',
        hints: ['Tenk pa et problem du kan lose pa en baerekraftig mate'],
        solution: 'Eksempel: App for a dele verktoy mellom naboer. People: Bygger fellesskap, sparer folk penger. Planet: Reduserer produksjon og avfall, ressurseffektivt. Profit: Abonnementsmodell eller transaksjonsgebyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser en kjent bedrifts baerekraftsinnsats. Er det genuin innsats eller groennvasking?',
        hints: ['Velg en bedrift og undersok deres baerekraftstiltak kritisk'],
        solution: 'Eksempel analyse av H&M: Positive tiltak: Samler inn brukte klaer, baerekraftige kolleksjoner. Kritikk: Fast fashion-modell oppfordrer til overforbruk, store volum gar mot baerekraft. Vurdering: Noe genuin innsats, men forretningsmodellen er i konflikt med full baerekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Fra ide til bedrift
// ============================================================================

export const CHAPTER_ENTREBED_1_8: TextbookChapter = {
  id: 'entrebed-1-8',
  courseId: 'entrebed-1',
  chapterNumber: '8',
  title: 'Fra ide til bedrift',
  description: 'Laer de praktiske stegene for a starte en bedrift, fra forretningsplan til registrering.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utarbeide en enkel forretningsplan',
    'forsta prosessen med a registrere en bedrift',
    'planlegge og gjennomfore oppstart av en virksomhet',
  ],
  content: [
    {
      id: 'entrebed-1-8-intro',
      type: 'text',
      content: `## Fra ide til virkelighet

A starte en bedrift krever mer enn en god ide. Du trenger planlegging, forberedelse og handling.

**Stegene fra ide til bedrift:**
1. Validere ideen - er det en reell mulighet?
2. Utvikle forretningsmodellen
3. Skrive forretningsplan
4. Skaffe finansiering
5. Velge selskapsform
6. Registrere bedriften
7. Komme i gang med drift

**Suksessfaktorer:**
- Grundig forarbeid
- Realistiske forventninger
- Fleksibilitet og tilpasningsevne
- Utholdenhet
- Gode radgivere og nettverk`,
    },
    {
      id: 'entrebed-1-8-def-1',
      type: 'definition',
      title: 'Forretningsplan',
      content: `**Hva er en forretningsplan?**
Et dokument som beskriver bedriften, strategien og hvordan malene skal nas.

**Innhold i en forretningsplan:**
1. **Sammendrag:** Kortversjon av hele planen
2. **Bedriftsbeskrivelse:** Hva gjor bedriften?
3. **Produkt/tjeneste:** Hva tilbyr dere?
4. **Markedsanalyse:** Marked, kunder, konkurrenter
5. **Markedsstrategi:** Hvordan na kundene?
6. **Organisasjon:** Team og struktur
7. **Drift:** Hvordan produsere og levere?
8. **Okonomi:** Budsjetter og finansieringsbehov
9. **Risikoanalyse:** Hva kan ga galt?
10. **Handlingsplan:** Konkrete milepaler

**Hvofor skrive forretningsplan?**
- Tvinger deg til a tenke gjennom alt
- Kommuniserer ideen til andre
- Nodvendig for a skaffe finansiering
- Gir retning og malestokk`,
    },
    {
      id: 'entrebed-1-8-def-2',
      type: 'definition',
      title: 'Finansiering',
      content: `**Egenkapital:**
Penger du selv eller medgrunnleggere skyter inn.

**Venner og familie:**
Lan eller investering fra naerstaende. Vares oppmerksom pa risiko for relasjoner.

**Banklann:**
Krever ofte sikkerhet og dokumentert betalingsevne.

**Offentlige stotteordninger:**
- Innovasjon Norge
- Skattefunn
- Regionale fond
- Etablerertilskudd

**Investorer:**
- *Business angels:* Privatpersoner som investerer tidlig
- *Venture capital:* Fond som investerer i vekstselskaper
- Gir ofte bade kapital og kompetanse
- Krever eierandel i bytte

**Crowdfunding:**
Samle inn penger fra mange via plattformer (Kickstarter, Indiegogo).

**Bootstrapping:**
Starte med minimale ressurser, finansiere vekst gjennom salg.`,
    },
    {
      id: 'entrebed-1-8-def-3',
      type: 'definition',
      title: 'Registrering og oppstart',
      content: `**Registrering i Bronnoysundregistrene:**
Alle bedrifter ma registreres i Enhetsregisteret.

**For ENK:**
- Gratis registrering
- Kan gjores pa Altinn

**For AS:**
- Registrere i Foretaksregisteret
- Sende inn stiftelsesdokumenter
- Dokumentere aksjekapital (min 30 000 kr)
- Koster ca. 6000 kr

**Andre krav:**
- Organisasjonsnummer tildeles
- Registrering i MVA-registeret (hvis over 50 000 kr omsetning)
- Eventuelle bransjetillatelser
- Forsikringer

**Praktiske oppgaver ved oppstart:**
- Opprette bankkonto
- Sette opp regnskap
- Designe logo og visuell profil
- Lage nettside
- Bestille visittkort og materiell
- Etablere rutiner`,
    },
    {
      id: 'entrebed-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Sjekkliste for oppstart',
      problem: 'Hva ma gjores for a starte en kafé?',
      solution: `**For oppstart:**
- [x] Utvikle konsept og meny
- [x] Skrive forretningsplan
- [x] Skaffe finansiering
- [x] Velge selskapsform (AS anbefales)
- [x] Finne lokale

**Registrering:**
- [ ] Registrere i Bronnoysundregistrene
- [ ] Soke serveringsbevilling
- [ ] Registrere i MVA-registeret
- [ ] Tegne forsikringer

**Praktisk:**
- [ ] Innrede lokalet
- [ ] Ansette personale
- [ ] Kjope inn utstyr
- [ ] Etablere leverandoravtaler
- [ ] Lage nettside og sosiale medier
- [ ] Planlegge apning

**Drift:**
- [ ] Sette opp kassesystem
- [ ] Etablere regnskapsrutiner
- [ ] Lage vaktplaner
- [ ] Utvikle HMS-rutiner`,
    },
    {
      id: 'entrebed-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er hoveddelene i en forretningsplan?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken del beskriver markedet og konkurrentene?',
            solution: 'Markedsanalyse',
            multipleChoiceOptions: [
              'Markedsanalyse',
              'Sammendrag',
              'Organisasjon',
              'Drift'
            ],
          },
        ],
        solution: 'En forretningsplan inneholder: sammendrag, bedriftsbeskrivelse, produkt, markedsanalyse, markedsstrategi, organisasjon, drift, okonomi, risikoanalyse og handlingsplan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke finansieringskilder finnes for oppstartsbedrifter?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kalles det nar privatpersoner investerer tidlig i oppstartsbedrifter?',
            solution: 'Business angels',
            multipleChoiceOptions: [
              'Business angels',
              'Banklan',
              'Crowdfunding',
              'Offentlig stotte'
            ],
          },
        ],
        solution: 'Finansieringskilder: egenkapital, venner/familie, banklan, offentlig stotte (Innovasjon Norge), business angels, venture capital, crowdfunding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor registrerer man en bedrift i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Bronnoysundregistrene',
            multipleChoiceOptions: [
              'Bronnoysundregistrene',
              'Skatteetaten',
              'Kommunen',
              'Stortinget'
            ],
          },
        ],
        solution: 'Alle bedrifter i Norge registreres i Bronnoysundregistrene (Enhetsregisteret og eventuelt Foretaksregisteret for AS).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er bootstrapping?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'A starte med minimale ressurser og finansiere vekst gjennom salg',
            multipleChoiceOptions: [
              'A starte med minimale ressurser og finansiere vekst gjennom salg',
              'A fa store lan fra banken',
              'A soke offentlig stotte',
              'A selge aksjer til investorer'
            ],
          },
        ],
        solution: 'Bootstrapping betyr a starte bedriften med minimale eksterne ressurser og heller finansiere vekst gjennom egne inntekter fra salg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et sammendrag (executive summary) for din forretningside.',
        hints: ['Maks 1 side: problem, losning, marked, forretningsmodell, team, finansieringsbehov'],
        solution: 'Eksempel: "StudyBuddy er en app som hjelper elever a finne studiekamerater. Mange sliter med motivasjon og ensomhet. Var app matcher elever basert pa fag og laeringsmaler. Malgruppen er 500 000 videregaende elever i Norge. Vi tjener penger pa premium-funksjoner (freemium). Teamet har erfaring med apputvikling. Vi soker 200 000 kr for a lansere MVP."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'entrebed-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'entrebed-1-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en handlingsplan med milepaler for de forste 6 manedene av din bedrift.',
        hints: ['Tenk pa hva som ma gjores for, under og etter lansering'],
        solution: 'Eksempel: Maned 1-2: Ferdigstille produkt/tjeneste, registrere bedrift, lage nettside. Maned 3: Lansere, forste salg, samle tilbakemeldinger. Maned 4: Justere basert pa tilbakemeldinger, skalere markedsforing. Maned 5: Evaluere okonomi, na 50 kunder. Maned 6: Vurdere videre vekst, soke finansiering hvis behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const ENTREBED_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_1_1,
  CHAPTER_ENTREBED_1_2,
  CHAPTER_ENTREBED_1_3,
  CHAPTER_ENTREBED_1_4,
  CHAPTER_ENTREBED_1_5,
  CHAPTER_ENTREBED_1_6,
  CHAPTER_ENTREBED_1_7,
  CHAPTER_ENTREBED_1_8,
];
