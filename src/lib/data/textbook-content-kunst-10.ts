/**
 * Kunst og håndverk 10. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kunst og håndverk på 10. trinn
 * Fokus på eksamensprosjekt, fordypning og refleksjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Kunsthistorie og samtidskunst
// ============================================================================

export const CHAPTER_KUNST_10_1: TextbookChapter = {
  id: 'kunst-10-1',
  courseId: 'kunst-10',
  chapterNumber: '1',
  title: 'Kunsthistorie og samtidskunst',
  description: 'Utforsk kunstens utvikling fra historiske epoker til dagens samtidskunst.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og reflektere over kunst og design fra ulike kulturer og historiske perioder',
    'analysere og tolke kunstverk i kontekst',
  ],
  content: [
    {
      id: 'kunst-10-1-intro',
      type: 'text',
      content: `Kunsthistorie gir oss nøklene til å forstå hvordan mennesker har uttrykt seg visuelt gjennom tidene. Fra hulemalerier til digitale installasjoner har kunsten alltid speilet samfunnet den ble skapt i. I 10. klasse skal vi se på de store epokene og hvordan de har ført frem til dagens mangfoldige samtidskunst.`,
    },
    {
      id: 'kunst-10-1-def-1',
      type: 'definition',
      title: 'Kunsthistorie',
      content: `Kunsthistorie er studiet av visuell kunst gjennom tidene. Det omfatter analyse av kunstverk, kunstnere, stilretninger og de sosiale, politiske og kulturelle kontekstene kunsten ble skapt i.`,
    },
    {
      id: 'kunst-10-1-text-2',
      type: 'text',
      content: `**De store kunsthistoriske epokene**

- **Antikken** (ca. 800 f.Kr. - 500 e.Kr.): Gresk og romersk kunst med fokus på idealskjønnhet og realisme
- **Middelalderen** (ca. 500 - 1400): Religiøs kunst, ikoner, gotiske katedraler
- **Renessansen** (ca. 1400 - 1600): Gjenoppdagelse av antikken, perspektiv, humanisme
- **Barokken** (ca. 1600 - 1750): Dramatikk, bevegelse, lys og skygge
- **Romantikken** (ca. 1780 - 1850): Følelser, natur, nasjonalisme
- **Modernismen** (ca. 1860 - 1970): Eksperimentering, brudd med tradisjoner
- **Samtidskunst** (ca. 1970 - i dag): Mangfold, konseptkunst, nye medier`,
    },
    {
      id: 'kunst-10-1-text-3',
      type: 'text',
      content: `**Samtidskunst - kjennetegn**

Samtidskunsten kjennetegnes av:

- **Mangfold**: Ingen dominerende stil, alle uttrykk er gyldige
- **Konseptfokus**: Ideen er ofte viktigere enn objektet
- **Tverrfaglighet**: Kombinasjon av ulike kunstformer
- **Deltakelse**: Publikum involveres ofte i verket
- **Kontekstsensitivitet**: Kunsten forholder seg til sin samtid
- **Nye medier**: Digital kunst, video, installasjon, performance

Samtidskunstnere som Olafur Eliasson, Yayoi Kusama og Banksy representerer dette mangfoldet.`,
    },
    {
      id: 'kunst-10-1-tip-1',
      type: 'tip',
      title: 'Å analysere et kunstverk',
      content: `Bruk disse spørsmålene: 1) Hva ser du? (beskrivelse) 2) Hvordan er det laget? (teknikk) 3) Hva betyr det? (tolkning) 4) Når og hvor ble det laget? (kontekst) 5) Hva synes du? (vurdering)`,
    },
    {
      id: 'kunst-10-1-example-1',
      type: 'example',
      title: 'Fra renessanse til samtid',
      content: `**Leonardo da Vinci - Mona Lisa (1503-1519)**
En renessanseklassiker: Realistisk portrett, sfumato-teknikk, mystisk uttrykk.

**Marcel Duchamp - L.H.O.O.Q. (1919)**
Duchamp tegnet bart på en Mona Lisa-reproduksjon. Dette utfordret ideen om "høy kunst" og originaler. Det var et tidlig eksempel på konseptkunst.

**Banksy - Mona Lisa with Rocket Launcher (2007)**
Streetart-versjonen kommenterer krig, terrorisme og hvordan ikoniske bilder brukes og misbrukes.

Slik kan ett motiv utvikles gjennom kunsthistorien og få stadig ny mening.`,
    },
    {
      id: 'kunst-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken epoke kjennetegnes av gjenoppdagelse av antikken og bruk av perspektiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Renessansen',
            multipleChoiceOptions: ['Renessansen', 'Barokken', 'Romantikken', 'Modernismen'],
          },
        ],
        solution: 'Renessansen (ca. 1400-1600) gjenoppdaget antikkens idealer og utviklet lineærperspektivet som revolusjonerte billedkunsten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner samtidskunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Mangfold, konseptfokus og bruk av nye medier',
            multipleChoiceOptions: ['Mangfold, konseptfokus og bruk av nye medier', 'Kun tradisjonelle teknikker', 'Strenge regler for utførelse', 'Fokus på religiøse motiver'],
          },
        ],
        solution: 'Samtidskunsten kjennetegnes av stort mangfold, fokus på konsepter og ideer, samt bruk av nye medier som video og digital kunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var typisk for barokkens kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Dramatikk, bevegelse og sterke kontraster mellom lys og skygge',
            multipleChoiceOptions: ['Dramatikk, bevegelse og sterke kontraster mellom lys og skygge', 'Enkle, geometriske former', 'Flate bilder uten dybde', 'Kun abstrakte motiver'],
          },
        ],
        solution: 'Barokken (ca. 1600-1750) var preget av dramatiske komposisjoner, bevegelse og sterke kontraster mellom lys og skygge (chiaroscuro).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er kontekst viktig når vi analyserer kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi kunsten reflekterer tiden og stedet den ble skapt',
            multipleChoiceOptions: ['Fordi kunsten reflekterer tiden og stedet den ble skapt', 'Fordi det gjør analysen lengre', 'Fordi kunstneren alltid forklarer verket', 'Kontekst er ikke viktig'],
          },
        ],
        solution: 'Kontekst er viktig fordi kunstverk speiler de sosiale, politiske og kulturelle forholdene de ble skapt under. Uten kontekst går ofte viktig mening tapt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvem er kjent for "readymades" og utfordret tradisjonelle kunstdefinisjoner?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Marcel Duchamp',
            multipleChoiceOptions: ['Marcel Duchamp', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
          },
        ],
        solution: 'Marcel Duchamp (1887-1968) er kjent for sine "readymades" - hverdagsobjekter presentert som kunst. Dette utfordret fundamentalt hva kunst kan være.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en kunstner fra samtiden og forklar kort hvorfor du synes arbeidet er interessant.',
        solution: 'Elevens egen refleksjon. Gode svar viser forståelse for samtidskunstens mangfold og evne til å artikulere personlige kunstopplevelser med begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Visuell kommunikasjon
// ============================================================================

export const CHAPTER_KUNST_10_2: TextbookChapter = {
  id: 'kunst-10-2',
  courseId: 'kunst-10',
  chapterNumber: '2',
  title: 'Visuell kommunikasjon',
  description: 'Lær hvordan bilder, symboler og design formidler budskap.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke visuell kommunikasjon for å formidle budskap',
    'analysere hvordan bilder påvirker mottakeren',
  ],
  content: [
    {
      id: 'kunst-10-2-intro',
      type: 'text',
      content: `Vi lever i en visuell verden. Hver dag bombarderes vi med bilder, logoer, reklame og design som forsøker å påvirke oss. Visuell kommunikasjon handler om hvordan vi bruker bilder og design til å formidle budskap - og hvordan vi kan analysere og forstå de visuelle budskapene rundt oss.`,
    },
    {
      id: 'kunst-10-2-def-1',
      type: 'definition',
      title: 'Visuell kommunikasjon',
      content: `Visuell kommunikasjon er formidling av ideer og informasjon gjennom visuelle elementer som bilder, symboler, farger, typografi og layout. Målet er å påvirke, informere eller engasjere mottakeren.`,
    },
    {
      id: 'kunst-10-2-text-2',
      type: 'text',
      content: `**Visuelle virkemidler**

- **Komposisjon**: Hvordan elementer plasseres i bildet
- **Farger**: Skaper stemning og assosierer til følelser
- **Kontrast**: Skaper fokus og hierarki
- **Typografi**: Skriftvalg kommuniserer holdninger
- **Symboler**: Forkortelser for komplekse ideer
- **Tomrom (whitespace)**: Gir pusterom og fokus
- **Linje og form**: Guider øyet og skaper dynamikk`,
    },
    {
      id: 'kunst-10-2-text-3',
      type: 'text',
      content: `**Retorikk i bilder**

Bilder bruker retoriske virkemidler akkurat som tekst:

- **Etos**: Troverdighet (profesjonelt design, ekspertuttalelser)
- **Patos**: Følelser (rørende bilder, farger som skaper stemning)
- **Logos**: Logikk (diagrammer, fakta, statistikk)

Reklame kombinerer ofte alle tre: Et profesjonelt design (etos) med et emosjonelt bilde (patos) og produktfakta (logos).`,
    },
    {
      id: 'kunst-10-2-note-1',
      type: 'note',
      title: 'Semiotikk',
      content: `Semiotikk er læren om tegn og betydning. Et tegn har tre deler: 1) Signifikant (det vi ser), 2) Signifikat (det vi forstår), 3) Referent (det i virkeligheten det viser til). For eksempel: Et hjerte-symbol (signifikant) betyr kjærlighet (signifikat), som refererer til den følelsen vi kaller kjærlighet.`,
    },
    {
      id: 'kunst-10-2-text-4',
      type: 'text',
      content: `**Grafisk design i praksis**

Grafisk design kombinerer visuelle elementer for å løse kommunikasjonsoppgaver:

- **Logodesign**: Visuell identitet for merkevarer
- **Plakater**: Fange oppmerksomhet og formidle budskap
- **Infografikk**: Visualisere data og informasjon
- **Emballasje**: Selge produkter og informere forbrukere
- **Nettsider**: Navigasjon og brukeropplevelse
- **Sosiale medier**: Tilpasset format og målgruppe`,
    },
    {
      id: 'kunst-10-2-example-1',
      type: 'example',
      title: 'Analyse av en logo',
      content: `**Apple-logoen**
- **Form**: Eplet med bitt (bite/byte - ordspill)
- **Farge**: Opprinnelig regnbue (kreativitet), nå monokrom (eleganse)
- **Enkelhet**: Lett gjenkjennelig i alle størrelser
- **Assosiasjon**: Kunnskap (Adam og Eva), innovasjon (Newton)
- **Personlighet**: Minimalistisk, premium, brukervennlig

En god logo er enkel, minneverdig og formidler merkevarens verdier.`,
    },
    {
      id: 'kunst-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er hovedformålet med visuell kommunikasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å formidle budskap gjennom visuelle elementer',
            multipleChoiceOptions: ['Å formidle budskap gjennom visuelle elementer', 'Å lage pene bilder', 'Å kopiere andres design', 'Å bruke så mange farger som mulig'],
          },
        ],
        solution: 'Visuell kommunikasjon handler om å formidle ideer, budskap og informasjon effektivt gjennom visuelle elementer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er patos i visuell retorikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å appellere til mottakerens følelser',
            multipleChoiceOptions: ['Å appellere til mottakerens følelser', 'Å vise fakta og statistikk', 'Å fremstå troverdig', 'Å bruke mange farger'],
          },
        ],
        solution: 'Patos handler om å appellere til følelser. I bilder oppnås dette gjennom emosjonelle motiver, fargevalg og komposisjon som skaper stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er tomrom (whitespace) i design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ubrukt plass som gir pusterom og fokus',
            multipleChoiceOptions: ['Ubrukt plass som gir pusterom og fokus', 'Feil i designet', 'Plass for mer tekst', 'Bakgrunnsfargen hvit'],
          },
        ],
        solution: 'Tomrom er den tomme plassen mellom designelementer. Det skaper pusterom, gjør design lettere å lese, og kan fremheve viktige elementer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke tre deler har et tegn ifølge semiotikken?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Signifikant, signifikat og referent',
            multipleChoiceOptions: ['Signifikant, signifikat og referent', 'Form, farge og størrelse', 'Logo, tekst og bilde', 'Etos, patos og logos'],
          },
        ],
        solution: 'I semiotikken består et tegn av signifikant (det vi ser), signifikat (det vi forstår) og referent (det i virkeligheten det henviser til).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kjennetegner en god logo?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Enkel, minneverdig og formidler merkevarens verdier',
            multipleChoiceOptions: ['Enkel, minneverdig og formidler merkevarens verdier', 'Komplisert og detaljert', 'Bruker så mange farger som mulig', 'Kopierer konkurrentenes logoer'],
          },
        ],
        solution: 'En god logo er enkel (fungerer i alle størrelser), minneverdig (lett å gjenkjenne) og formidler merkevarens verdier og personlighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser en reklame du har sett nylig. Hvilke visuelle virkemidler bruker den?',
        solution: 'Elevens egen analyse. Gode svar identifiserer konkrete virkemidler (farger, komposisjon, symboler, typografi) og forklarer hvordan de bidrar til budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Design og bærekraft
// ============================================================================

export const CHAPTER_KUNST_10_3: TextbookChapter = {
  id: 'kunst-10-3',
  courseId: 'kunst-10',
  chapterNumber: '3',
  title: 'Design og bærekraft',
  description: 'Utforsk hvordan design kan bidra til en bærekraftig fremtid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over bærekraftig design og materialvalg',
    'undersøke og presentere en designprosess fra idé til ferdig produkt',
  ],
  content: [
    {
      id: 'kunst-10-3-intro',
      type: 'text',
      content: `Design påvirker miljøet vårt på fundamentale måter. Hver gjenstand som produseres krever ressurser, energi og skaper avfall. Bærekraftig design handler om å skape produkter og løsninger som møter dagens behov uten å ødelegge for fremtidige generasjoner.`,
    },
    {
      id: 'kunst-10-3-def-1',
      type: 'definition',
      title: 'Bærekraftig design',
      content: `Bærekraftig design er en tilnærming som minimerer negativ miljøpåvirkning gjennom hele produktets livssyklus - fra råvareutvinning til produksjon, bruk og avhending. Det inkluderer sosiale og økonomiske aspekter i tillegg til miljø.`,
    },
    {
      id: 'kunst-10-3-text-2',
      type: 'text',
      content: `**Livssyklustenkning**

For å designe bærekraftig må vi tenke på hele produktets liv:

1. **Råvarer**: Hvor kommer materialene fra? Er de fornybare?
2. **Produksjon**: Hvor mye energi og vann brukes? Hva med arbeidsforhold?
3. **Transport**: Hvor langt fraktes produktet? Hvilken transportmetode?
4. **Bruk**: Hvor lenge varer produktet? Kan det repareres?
5. **Avhending**: Kan det resirkuleres, komposteres eller må det deponeres?

Et produkt kan være "grønt" i én fase men problematisk i en annen.`,
    },
    {
      id: 'kunst-10-3-text-3',
      type: 'text',
      content: `**Designstrategier for bærekraft**

- **Design for lang levetid**: Kvalitet, tidløst design, oppgraderbarhet
- **Design for reparasjon**: Modulær konstruksjon, tilgjengelige reservedeler
- **Design for resirkulering**: Rene materialer, enkel demontering
- **Design for minimal materialer**: Lettere produkter, mindre emballasje
- **Cradle to Cradle**: Alle materialer går tilbake i biologisk eller teknisk kretsløp
- **Sirkulær økonomi**: Produkter designes for gjenbruk og resirkulering`,
    },
    {
      id: 'kunst-10-3-note-1',
      type: 'note',
      title: 'Greenwashing',
      content: `Greenwashing er når bedrifter gir inntrykk av å være mer miljøvennlige enn de er. Vær kritisk til vage påstander som "naturlig" eller "grønn". Se etter konkrete tall, sertifiseringer og transparent dokumentasjon.`,
    },
    {
      id: 'kunst-10-3-text-4',
      type: 'text',
      content: `**Materialer og bærekraft**

**Miljøvennlige alternativer**:
- **Tre** (sertifisert): Fornybart, binder CO2, biologisk nedbrytbart
- **Bambus**: Rasktvoksende, sterkt, fornybart
- **Resirkulert plast**: Reduserer avfall og oljebehov
- **Bioplast**: Laget av planter, kan være komposterbart
- **Resirkulerte tekstiler**: Gjenbruk av fibre
- **Naturfibre**: Lin, hamp, ull (velg økologisk)

Husk: Intet materiale er perfekt. Kontekst og mengde er avgjørende.`,
    },
    {
      id: 'kunst-10-3-example-1',
      type: 'example',
      title: 'Fairphone - bærekraftig smarttelefon',
      content: `Fairphone er en nederlandsk smarttelefon designet for bærekraft:

- **Modulær design**: Enkelt å bytte batteri, skjerm og andre deler
- **Etiske materialer**: Konfliktfrie mineraler, fairtrade-gull
- **Lang levetid**: 5+ år med programvareoppdateringer
- **Reparerbarhet**: Høyeste score på iFixit
- **Gjenvinning**: Tar imot gamle telefoner for resirkulering

Dette viser at bærekraft og teknologi kan kombineres.`,
    },
    {
      id: 'kunst-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva innebærer livssyklustenkning i design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å vurdere miljøpåvirkning fra råvare til avhending',
            multipleChoiceOptions: ['Å vurdere miljøpåvirkning fra råvare til avhending', 'Å bare se på produksjonsfasen', 'Å fokusere kun på bruksfasen', 'Å ignorere transport'],
          },
        ],
        solution: 'Livssyklustenkning innebærer å vurdere alle faser av et produkts liv: råvarer, produksjon, transport, bruk og avhending.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "Cradle to Cradle"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et designprinsipp der alle materialer går tilbake i et kretsløp',
            multipleChoiceOptions: ['Et designprinsipp der alle materialer går tilbake i et kretsløp', 'En type emballasje', 'Et transportselskap', 'En resirkuleringsmetode'],
          },
        ],
        solution: 'Cradle to Cradle er et designrammeverk der produkter designes slik at alle materialer enten går tilbake i biologisk eller teknisk kretsløp - ingen avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er greenwashing?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Når bedrifter fremstår mer miljøvennlige enn de er',
            multipleChoiceOptions: ['Når bedrifter fremstår mer miljøvennlige enn de er', 'Å vaske produkter med grønn såpe', 'En type miljøsertifisering', 'Å male produkter grønne'],
          },
        ],
        solution: 'Greenwashing er villedende markedsføring der bedrifter gir inntrykk av å være mer miljøvennlige enn de faktisk er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er modulær design bra for bærekraft?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi deler kan byttes ut og repareres i stedet for å kaste hele produktet',
            multipleChoiceOptions: ['Fordi deler kan byttes ut og repareres i stedet for å kaste hele produktet', 'Fordi det er billigere å produsere', 'Fordi det ser penere ut', 'Fordi det bruker mer materiale'],
          },
        ],
        solution: 'Modulær design forlenger produkters levetid ved at enkeltdeler kan byttes når de går i stykker, i stedet for å kaste hele produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilket materiale binder CO2 mens det vokser?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tre',
            multipleChoiceOptions: ['Tre', 'Stål', 'Plast', 'Betong'],
          },
        ],
        solution: 'Tre binder CO2 fra atmosfæren gjennom fotosyntese mens det vokser. Når tre brukes i produkter, lagres karbonet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg et produkt du bruker daglig og foreslå hvordan det kunne vært mer bærekraftig designet.',
        solution: 'Elevens egen analyse. Gode svar identifiserer konkrete problemer (materialvalg, levetid, emballasje) og foreslår realistiske forbedringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Arkitektur
// ============================================================================

export const CHAPTER_KUNST_10_4: TextbookChapter = {
  id: 'kunst-10-4',
  courseId: 'kunst-10',
  chapterNumber: '4',
  title: 'Arkitektur',
  description: 'Utforsk arkitekturens historie, prinsipper og fremtid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over arkitektur fra ulike kulturer og perioder',
    'reflektere over bærekraftig arkitektur og design',
  ],
  content: [
    {
      id: 'kunst-10-4-intro',
      type: 'text',
      content: `Arkitektur er kunsten og vitenskapen om å designe bygninger og rom. Det er en av de mest synlige kunstformene - vi lever våre liv inne i og rundt arkitektur. Gode bygninger påvirker vårt velvære, vår oppførsel og vår identitet.`,
    },
    {
      id: 'kunst-10-4-def-1',
      type: 'definition',
      title: 'Arkitektur',
      content: `Arkitektur er planlegging, design og konstruksjon av bygninger og andre fysiske strukturer. Det kombinerer estetikk, funksjon, teknikk og kontekst for å skape rom der mennesker bor, arbeider og møtes.`,
    },
    {
      id: 'kunst-10-4-text-2',
      type: 'text',
      content: `**Arkitekturhistoriske epoker**

- **Antikken**: Søyler, symmetri, templer (Parthenon)
- **Romansk**: Tykke murer, rundbuer, festningskirker
- **Gotikk**: Spissbuer, ribbehvelv, store vinduer (katedraler)
- **Renessanse**: Harmoni, proporsjoner, kupler
- **Barokk**: Overdådighet, kurver, dramatikk
- **Klassisisme**: Tilbake til antikken, orden og balanse
- **Modernisme**: "Form følger funksjon", glass og betong
- **Postmodernisme**: Lek med historiske referanser
- **Samtidsarkitektur**: Bærekraft, teknologi, parametrisk design`,
    },
    {
      id: 'kunst-10-4-text-3',
      type: 'text',
      content: `**Grunnleggende arkitekturprinsipper**

**Vitruvius' triade** (ca. 15 f.Kr.):
- **Firmitas** (soliditet): Konstruksjonen må være stabil og holdbar
- **Utilitas** (nytte): Bygningen må fungere for sitt formål
- **Venustas** (skjønnhet): Bygningen bør være estetisk tiltalende

Disse tre prinsippene er fortsatt relevante i dag, men mange vil legge til et fjerde: **Bærekraft** (sustentabilitas).`,
    },
    {
      id: 'kunst-10-4-text-4',
      type: 'text',
      content: `**Norsk samtidsarkitektur**

Norge har mange internasjonalt anerkjente arkitekturprosjekter:

- **Operaen i Oslo** (Snøhetta, 2008): "Teppet" man kan gå på
- **Munchmuseet** (Estudio Herreros, 2021): Vertikal kulturkatedral
- **Svart hotell** (Snøhetta): Verdens første energipositive hotell
- **Mjøstårnet** (Voll Arkitekter): Verdens høyeste trebygning
- **Nasjonale turistveger**: Arkitektur i naturen

Norsk arkitektur kombinerer ofte natur, lys og enkle materialer.`,
    },
    {
      id: 'kunst-10-4-note-1',
      type: 'note',
      title: 'Passivhus og plusshus',
      content: `Et passivhus bruker minimalt med energi til oppvarming (maks 15 kWh/m²/år). Et plusshus produserer mer energi enn det bruker over sin levetid. Norge er ledende på slik arkitektur.`,
    },
    {
      id: 'kunst-10-4-example-1',
      type: 'example',
      title: 'Operahuset i Oslo',
      content: `Operahuset i Oslo (2008) av Snøhetta er Norges mest besøkte turistattraksjon:

- **Konsept**: Et isfjell som stiger opp av fjorden
- **Tak**: Hvit marmor og granitt man kan gå på
- **Interiør**: Varmt eiketre som kontrast
- **Funksjon**: Opera, ballett, foyer, restaurant
- **Byrom**: Skaper offentlig møteplass ved sjøen

Bygget vant Mies van der Rohe-prisen i 2009.`,
    },
    {
      id: 'kunst-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Vitruvius tre prinsipper for arkitektur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Soliditet, nytte og skjønnhet',
            multipleChoiceOptions: ['Soliditet, nytte og skjønnhet', 'Høyde, bredde og dybde', 'Pris, tid og kvalitet', 'Tre, glass og betong'],
          },
        ],
        solution: 'Vitruvius definerte tre grunnleggende prinsipper: Firmitas (soliditet), Utilitas (nytte) og Venustas (skjønnhet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken epoke kjennetegnes av spissbuer, ribbehvelv og store vinduer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gotikken',
            multipleChoiceOptions: ['Gotikken', 'Romansk', 'Barokken', 'Modernismen'],
          },
        ],
        solution: 'Gotisk arkitektur (ca. 1140-1500) kjennetegnes av spissbuer, ribbehvelv og store glassmalte vinduer som slapp inn lys.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er et passivhus?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En bygning som bruker minimalt med energi til oppvarming',
            multipleChoiceOptions: ['En bygning som bruker minimalt med energi til oppvarming', 'Et hus uten elektrisitet', 'Et hus som er ubebodd', 'Et hus laget av tre'],
          },
        ],
        solution: 'Et passivhus er en bygning designet for å bruke svært lite energi til oppvarming, gjennom god isolasjon, tette konstruksjoner og varmegjenvinning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilket arkitektkontor designet Operaen i Oslo?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Snøhetta',
            multipleChoiceOptions: ['Snøhetta', 'IKEA', 'Apple', 'Renzo Piano'],
          },
        ],
        solution: 'Snøhetta er et norsk arkitektkontor som designet Operahuset i Oslo (2008), samt mange andre kjente prosjekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kjennetegner modernistisk arkitektur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '"Form følger funksjon", rene linjer, glass og betong',
            multipleChoiceOptions: ['"Form følger funksjon", rene linjer, glass og betong', 'Overdådige ornamenter og kupler', 'Gotiske spissbuer', 'Tykke steinmurer'],
          },
        ],
        solution: 'Modernistisk arkitektur prioriterer funksjon, bruker nye materialer som glass og armert betong, og unngår unødvendige ornamenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en bygning du synes er vellykket. Hva gjør den bra?',
        solution: 'Elevens egen vurdering. Gode svar bruker arkitekturbegreper og diskuterer både estetikk, funksjon og kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Digital kunst og medier
// ============================================================================

export const CHAPTER_KUNST_10_5: TextbookChapter = {
  id: 'kunst-10-5',
  courseId: 'kunst-10',
  chapterNumber: '5',
  title: 'Digital kunst og medier',
  description: 'Utforsk digital kunst, nye medier og teknologiens rolle i kunsten.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke digitale verktøy til å visualisere ideer',
    'utforske og reflektere over digital kunst og nye medier',
  ],
  content: [
    {
      id: 'kunst-10-5-intro',
      type: 'text',
      content: `Digital kunst bruker datateknologi som verktøy eller medium. Fra de første datagrafikk-eksperimentene på 1960-tallet har feltet eksplodert til å omfatte alt fra digital maleri og 3D-modellering til AI-generert kunst og immersive VR-opplevelser.`,
    },
    {
      id: 'kunst-10-5-def-1',
      type: 'definition',
      title: 'Digital kunst',
      content: `Digital kunst er kunstverk skapt med digitale verktøy (programmer, algoritmer, kode) eller presentert gjennom digitale medier (skjermer, projektorer, VR). Det inkluderer alt fra digital illustrasjon til interaktive installasjoner og AI-kunst.`,
    },
    {
      id: 'kunst-10-5-text-2',
      type: 'text',
      content: `**Former for digital kunst**

- **Digital maleri/tegning**: Programvare simulerer tradisjonelle verktøy
- **3D-modellering**: Virtuelle skulpturer og miljøer
- **Generativ kunst**: Algoritmer skaper verket (helt eller delvis)
- **Interaktiv kunst**: Publikum påvirker verket
- **Nettkunst**: Kunst skapt for og vist på internett
- **VR/AR-kunst**: Immersive og utvidede opplevelser
- **AI-kunst**: Maskinlæring genererer eller assisterer skapelse
- **NFT-kunst**: Digitale verk med blokkjede-sertifikat`,
    },
    {
      id: 'kunst-10-5-text-3',
      type: 'text',
      content: `**AI og kunst**

Kunstig intelligens utfordrer tradisjonelle ideer om kreativitet:

- **Bildegeneratorer**: DALL-E, Midjourney, Stable Diffusion skaper bilder fra tekstbeskrivelser
- **Stiloverføring**: AI kan male i stilen til kjente kunstnere
- **Kollaborasjon**: Kunstnere bruker AI som verktøy og partner
- **Spørsmål som reises**: Hvem er kunstneren? Hva er originalitet? Opphavsrett?

AI er et verktøy - det erstatter ikke kunstnerisk visjon og konsept.`,
    },
    {
      id: 'kunst-10-5-note-1',
      type: 'note',
      title: 'NFT og kunstmarkedet',
      content: `NFT (Non-Fungible Token) er et digitalt sertifikat på blokkjeden som beviser eierskap av et digitalt verk. I 2021 solgte Beeple et NFT-verk for 69 millioner dollar. NFT har skapt nye muligheter for digitale kunstnere, men også reist spørsmål om miljøpåvirkning og spekulasjon.`,
    },
    {
      id: 'kunst-10-5-text-4',
      type: 'text',
      content: `**Verktøy for digital kunst**

**2D**:
- Adobe Photoshop, Fresco
- Procreate (iPad)
- Clip Studio Paint
- Krita, GIMP (gratis)

**3D**:
- Blender (gratis)
- Maya, Cinema 4D
- ZBrush (skulptering)

**Generativ**:
- Processing, p5.js
- TouchDesigner
- Runway ML

Mange verktøy er gratis eller har studentlisenser.`,
    },
    {
      id: 'kunst-10-5-example-1',
      type: 'example',
      title: 'teamLab - digital kunst i stor skala',
      content: `teamLab er et japansk kunstkollektiv som skaper immersive digitale opplevelser:

- **Interaktive rom**: Vegger og gulv dekkes av projiserte bilder som reagerer på bevegelse
- **Grenseløst**: Verkene flyter over i hverandre uten rammer
- **Naturtemaer**: Blomster, vann, dyr i konstant endring
- **Teknologi**: Sensorer, projektorer, sanntidsrender

Deres permanente museer i Tokyo og andre byer viser hvordan digital kunst kan transformere romopplevelser.`,
    },
    {
      id: 'kunst-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er generativ kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst der algoritmer skaper verket helt eller delvis',
            multipleChoiceOptions: ['Kunst der algoritmer skaper verket helt eller delvis', 'Kunst laget for flere generasjoner', 'Kunst som kopierer andre verk', 'Tradisjonell maling'],
          },
        ],
        solution: 'Generativ kunst bruker algoritmer, kode eller matematiske regler til å skape kunstverket. Kunstneren definerer reglene, datamaskinen utfører dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en NFT?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et digitalt sertifikat som beviser eierskap av et digitalt verk',
            multipleChoiceOptions: ['Et digitalt sertifikat som beviser eierskap av et digitalt verk', 'En type bildefil', 'Et tegneprogram', 'En fysisk kunstsamling'],
          },
        ],
        solution: 'NFT (Non-Fungible Token) er et blokkjede-basert sertifikat som beviser eierskap og autentisitet av et digitalt kunstverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket program er gratis og brukes til 3D-modellering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Blender',
            multipleChoiceOptions: ['Blender', 'Photoshop', 'Procreate', 'Maya'],
          },
        ],
        solution: 'Blender er et kraftig, gratis 3D-modelleringsprogram med åpen kildekode. Det brukes profesjonelt til film, spill og kunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner interaktiv kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Publikum påvirker eller endrer verket',
            multipleChoiceOptions: ['Publikum påvirker eller endrer verket', 'Kunstneren snakker med publikum', 'Verket er laget av flere kunstnere', 'Verket vises på internett'],
          },
        ],
        solution: 'Interaktiv kunst involverer publikum aktivt - deres handlinger, bevegelser eller valg påvirker hvordan verket oppfører seg eller ser ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke etiske spørsmål reiser AI-generert kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Spørsmål om kunstnerskap, originalitet og opphavsrett',
            multipleChoiceOptions: ['Spørsmål om kunstnerskap, originalitet og opphavsrett', 'Ingen etiske spørsmål', 'Kun tekniske problemer', 'Bare økonomiske spørsmål'],
          },
        ],
        solution: 'AI-kunst reiser spørsmål som: Hvem er kunstneren - mennesket eller maskinen? Er det originalt hvis AI trener på andres kunst? Hvem eier rettighetene?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en skisse eller beskriv en idé for et interaktivt digitalt kunstverk.',
        solution: 'Elevens egen idé. Gode svar beskriver tydelig hvordan publikum interagerer med verket og hva som skjer som respons på interaksjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Kunst og identitet
// ============================================================================

export const CHAPTER_KUNST_10_6: TextbookChapter = {
  id: 'kunst-10-6',
  courseId: 'kunst-10',
  chapterNumber: '6',
  title: 'Kunst og identitet',
  description: 'Utforsk hvordan kunst uttrykker og former personlig og kulturell identitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over kunst og identitet',
    'utvikle og presentere eget visuelt uttrykk',
  ],
  content: [
    {
      id: 'kunst-10-6-intro',
      type: 'text',
      content: `Kunst har alltid vært en måte å uttrykke og utforske identitet på. Hvem er jeg? Hvor kommer jeg fra? Hva tror jeg på? Gjennom kunst kan vi utforske disse spørsmålene for oss selv og kommunisere dem til andre. Identitet er komplekst - det handler om personlighet, kultur, kjønn, etnisitet, klasse og mye mer.`,
    },
    {
      id: 'kunst-10-6-def-1',
      type: 'definition',
      title: 'Identitet',
      content: `Identitet er de egenskapene, overbevisningene og tilhørighetene som definerer hvem vi er. Den er både personlig (individuelle trekk) og sosial (gruppetilhørighet). Identitet er ikke fast, men utvikler seg gjennom livet.`,
    },
    {
      id: 'kunst-10-6-text-2',
      type: 'text',
      content: `**Selvportrettet - en lang tradisjon**

Selvportrettet har vært kunstneres måte å utforske identitet på:

- **Albrecht Dürer** (1500): Et av de første kjente selvportrettene, kunstneren som kristen figur
- **Rembrandt**: Over 80 selvportretter gjennom hele livet, viser aldring og ærlig selvransakelse
- **Frida Kahlo**: Utforsket smerte, meksikansk identitet og kjønn
- **Cindy Sherman**: Fotograferer seg selv i roller, utfordrer kvinnelige stereotyper
- **Ai Weiwei**: Bruker egen kropp for politisk aktivisme

Selvportrettet fortsetter i dag gjennom selfies, avatarer og digital selvrepresentasjon.`,
    },
    {
      id: 'kunst-10-6-text-3',
      type: 'text',
      content: `**Kulturell identitet i kunst**

Kunst uttrykker og bevarer kulturell identitet:

- **Urfolkskunst**: Samisk duodji, maoritatoveringer, aboriginsk "dreamtime"-kunst
- **Diasporakunst**: Kunstnere som utforsker migrasjon og tilhørighet
- **Postkolonial kunst**: Kritikk av vestlig dominans, gjenvinning av egne narrativer
- **Hybrididentitet**: Kunst som kombinerer flere kulturelle tradisjoner

I Norge er samisk kunst et viktig eksempel - fra tradisjonelt duodji til samtidskunstnere som Britta Marakatt-Labba og Máret Ánne Sara.`,
    },
    {
      id: 'kunst-10-6-text-4',
      type: 'text',
      content: `**Kjønn og identitet**

Kunst har alltid utforsket kjønn, men fra 1970-tallet har dette blitt mer eksplisitt:

- **Feministisk kunst**: Judy Chicago, Guerrilla Girls - utfordret mannsdominansen i kunstverden
- **Queer kunst**: Utforsker LHBT+-erfaringer og utfordrer binære kategorier
- **Maskulinitetsstudier**: Dekonstruerer ideer om hva det vil si å være mann

Dagens samtidskunst inkluderer et mangfold av kjønnsuttrykk og stiller spørsmål ved tradisjonelle kategorier.`,
    },
    {
      id: 'kunst-10-6-example-1',
      type: 'example',
      title: 'Frida Kahlo - personlig og politisk',
      content: `Frida Kahlo (1907-1954) er et ikon for identitetskunst:

- **Selvportretter**: Ærlige fremstillinger av smerte, kropp og følelser
- **Meksikansk identitet**: Bar tradisjonelle klær, brukte folkelige motiver
- **Fysisk lidelse**: Etter en bussolykke levde hun med kronisk smerte
- **Politikk**: Kommunist, feminist, aktivist
- **Kompleksitet**: Blandet europeisk og urfolksarv

Kahlos kunst viser hvordan personlig erfaring og større identitetskategorier veves sammen.`,
    },
    {
      id: 'kunst-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er identitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'De egenskapene, overbevisningene og tilhørighetene som definerer hvem vi er',
            multipleChoiceOptions: ['De egenskapene, overbevisningene og tilhørighetene som definerer hvem vi er', 'Bare navnet vårt', 'Kun nasjonalitet', 'ID-kortet vårt'],
          },
        ],
        solution: 'Identitet er sammensatt av mange faktorer: personlighet, kultur, kjønn, etnisitet, verdier og mer. Den utvikler seg gjennom livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvem er kjent for å ha malt over 80 selvportretter gjennom hele livet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Rembrandt',
            multipleChoiceOptions: ['Rembrandt', 'Picasso', 'Monet', 'Van Gogh'],
          },
        ],
        solution: 'Rembrandt van Rijn malte over 80 selvportretter fra ungdom til alderdom, som viser hans ærlige selvransakelse og kunstneriske utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er samisk duodji?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tradisjonelt samisk håndverk og kunstform',
            multipleChoiceOptions: ['Tradisjonelt samisk håndverk og kunstform', 'En dans', 'En type mat', 'Et musikkinstrument'],
          },
        ],
        solution: 'Duodji er samisk håndverk som inkluderer knivlaging, koftedekor, sølvsmykker, skinnarbeid og mer. Det er både brukskunst og identitetsuttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegnet Frida Kahlos kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Selvportretter som utforsket smerte, meksikansk identitet og personlig erfaring',
            multipleChoiceOptions: ['Selvportretter som utforsket smerte, meksikansk identitet og personlig erfaring', 'Abstrakte geometriske former', 'Landskapsmaleri', 'Skulpturer i bronse'],
          },
        ],
        solution: 'Frida Kahlo er kjent for intense selvportretter som kombinerte personlig smerte, meksikansk kulturarv, politikk og surrealistiske elementer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er postkolonial kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst som kritiserer vestlig dominans og gjenvinner egne kulturelle narrativer',
            multipleChoiceOptions: ['Kunst som kritiserer vestlig dominans og gjenvinner egne kulturelle narrativer', 'Kunst laget etter 2000', 'Kunst som feirer kolonitiden', 'Kun europeisk kunst'],
          },
        ],
        solution: 'Postkolonial kunst utfordrer hvordan vestlig kultur har dominert kunsthistorien og gir stemme til kunstnere fra tidligere koloniserte kulturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en idé til et selvportrett som uttrykker noe viktig ved din identitet. Beskriv eller skisser.',
        solution: 'Elevens egen idé. Gode svar reflekterer over hva som er viktig for deres identitet og hvordan dette kan visualiseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Håndverk og tradisjon
// ============================================================================

export const CHAPTER_KUNST_10_7: TextbookChapter = {
  id: 'kunst-10-7',
  courseId: 'kunst-10',
  chapterNumber: '7',
  title: 'Håndverk og tradisjon',
  description: 'Utforsk tradisjonelt håndverk og dets plass i samtiden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over norsk kunst og håndverkstradisjoner',
    'bruke ulike materialer, teknikker og verktøy',
  ],
  content: [
    {
      id: 'kunst-10-7-intro',
      type: 'text',
      content: `Håndverk er praktisk kunnskap overført gjennom generasjoner. I en tid med masseproduksjon og digitalisering har tradisjonelt håndverk fått fornyet interesse. Det representerer både kulturarv, bærekraft og en motreaksjon mot det upersonlige og maskinproduserte.`,
    },
    {
      id: 'kunst-10-7-def-1',
      type: 'definition',
      title: 'Håndverk',
      content: `Håndverk er praktisk skapervirksomhet der gjenstander lages for hånd med tradisjonelle teknikker og verktøy. Det inkluderer både bruksgjenstander og kunsthåndverk, og kjennetegnes av håndverkerens ferdighet og materialforståelse.`,
    },
    {
      id: 'kunst-10-7-text-2',
      type: 'text',
      content: `**Norske håndverkstradisjoner**

- **Rosemaling**: Dekorativ maling med ranker og blomster (Telemark, Hallingdal, Rogaland)
- **Treskjæring**: Utskjæringer med røtter til vikingtiden (akantus, drage, kolrosing)
- **Bunad og tekstil**: Regionale drakter med broderi og vevde stoffer
- **Smedarbeid**: Jernsmie, sølvsmie, knivlaging
- **Samisk duodji**: Kofter, kniver, hornarbeid, sølvsmykker
- **Kurvfletting**: Pileflett, sponfletting, neverarbeid

Husflidslagene og folkemuseer arbeider for å bevare disse tradisjonene.`,
    },
    {
      id: 'kunst-10-7-text-3',
      type: 'text',
      content: `**Håndverk i samtiden**

Tradisjonelt håndverk møter nye utfordringer og muligheter:

- **Slow movement**: Motreaksjon mot masseproduksjon og kjappe løsninger
- **Bærekraft**: Lokale materialer, lang levetid, reparerbarhet
- **Terapi**: Håndarbeid som stressreduksjon og mindfulness
- **Hybrid praksis**: Kombiner tradisjon med ny teknologi
- **Unge håndverkere**: Ny generasjon som tar opp gamle teknikker

Håndverket handler ikke bare om produktet, men om prosessen og forbindelsen til materialet.`,
    },
    {
      id: 'kunst-10-7-text-4',
      type: 'text',
      content: `**Materialforståelse**

God håndverker kjenner materialene sine:

**Tre**: Ulike treslag har forskjellige egenskaper
- Bjørk: Hardt, fint til drejing
- Furu: Mykt, lett å skjære
- Osp: Lett, god til never og flette
- Eik: Sterkt, holdbart

**Tekstil**: Fibrenes egenskaper bestemmer bruken
- Ull: Varmer, isolerer, selvrenende
- Lin: Sterkt, kjølende, slitesterkt
- Silke: Lett, glansfull, delikat

Respekt for materialet er grunnleggende i godt håndverk.`,
    },
    {
      id: 'kunst-10-7-example-1',
      type: 'example',
      title: 'Tollekniven - norsk håndverkstradisjon',
      content: `Tollekniven er et symbol på norsk håndverkstradisjon:

- **Blad**: Smidd av stål, ofte med flere lag (damascus)
- **Skaft**: Tre, horn, ben eller bjørkenever
- **Slire**: Lær eller bjørkenever
- **Dekor**: Utskjæringer, innlegg, gravert messing
- **Funksjon**: Allsidig brukskniv

En god knivmaker kombinerer smedarbeid, treskjæring og lærarbeid. Det tar år å mestre alle teknikkene.`,
    },
    {
      id: 'kunst-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner håndverk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gjenstander lages for hånd med tradisjonelle teknikker og materialforståelse',
            multipleChoiceOptions: ['Gjenstander lages for hånd med tradisjonelle teknikker og materialforståelse', 'Masseproduksjon i fabrikker', 'Kun bruk av maskiner', 'Billig produksjon'],
          },
        ],
        solution: 'Håndverk handler om å lage gjenstander for hånd med ferdighet og forståelse for materialer og tradisjonelle teknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er rosemaling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Norsk dekorativ maling med ranker og blomster',
            multipleChoiceOptions: ['Norsk dekorativ maling med ranker og blomster', 'Maling av roser', 'En type graffiti', 'Moderne kunstretning'],
          },
        ],
        solution: 'Rosemaling er en norsk folkekunsttradisjon med stiliserte ranker, blomster og C/S-former. Ulike regioner har distinkte stiler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor har tradisjonelt håndverk fått fornyet interesse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Som motreaksjon mot masseproduksjon og fokus på bærekraft',
            multipleChoiceOptions: ['Som motreaksjon mot masseproduksjon og fokus på bærekraft', 'Fordi det er billigere', 'Fordi det går raskere', 'Fordi maskiner ikke finnes lenger'],
          },
        ],
        solution: 'Håndverk representerer autentisitet, bærekraft, kvalitet og personlighet i kontrast til upersonlig masseproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilket treslag er kjent for å være mykt og lett å skjære i?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Furu',
            multipleChoiceOptions: ['Furu', 'Eik', 'Bjørk', 'Teak'],
          },
        ],
        solution: 'Furu er et mykt treslag som er relativt lett å skjære og bearbeide, noe som gjør det populært for treskjæring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er "slow movement" i forbindelse med håndverk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En bevegelse som verdsetter langsomhet, kvalitet og tradisjon over hastighet',
            multipleChoiceOptions: ['En bevegelse som verdsetter langsomhet, kvalitet og tradisjon over hastighet', 'En treningsform', 'En musikksjanger', 'Sakte film'],
          },
        ],
        solution: 'Slow movement er en kulturell bevegelse som reagerer mot det raske tempoet i moderne liv, og verdsetter kvalitet, bærekraft og tradisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilken håndverkstradisjon ville du likt å lære? Hvorfor?',
        solution: 'Elevens egen refleksjon. Gode svar viser interesse for en spesifikk tradisjon og begrunner valget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Kunst som sosial kommentar
// ============================================================================

export const CHAPTER_KUNST_10_8: TextbookChapter = {
  id: 'kunst-10-8',
  courseId: 'kunst-10',
  chapterNumber: '8',
  title: 'Kunst som sosial kommentar',
  description: 'Utforsk hvordan kunst kommenterer og påvirker samfunnet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over kunstens rolle i samfunnet',
    'bruke kunst til å kommunisere budskap',
  ],
  content: [
    {
      id: 'kunst-10-8-intro',
      type: 'text',
      content: `Kunst har alltid vært en måte å kommentere og kritisere samfunnet på. Fra politiske karikaturer til protestplakater og aktivistisk samtidskunst - kunstnere bruker sin stemme til å belyse urettferdighet, stille spørsmål og inspirere til endring.`,
    },
    {
      id: 'kunst-10-8-def-1',
      type: 'definition',
      title: 'Aktivistisk kunst',
      content: `Aktivistisk kunst er kunst som tar stilling til politiske eller sosiale spørsmål med mål om å skape bevissthet, provosere diskusjon eller inspirere til handling. Den utfordrer ofte etablerte maktstrukturer og normer.`,
    },
    {
      id: 'kunst-10-8-text-2',
      type: 'text',
      content: `**Kunstens politiske historie**

Kunst har alltid vært politisk:

- **Propaganda**: Kunst brukt av makthavere (romerske statuer, nazistisk kunst, sosialistisk realisme)
- **Motstand**: Kunst som opposisjon (Goyas krigsbilder, antinazistisk satire, apartheid-kunst)
- **Karikaturer**: Politisk satire gjennom overdrivelse
- **Plakater**: Direkte kommunikasjon for bevegelser (suffragetter, borgerrettigheter, miljø)
- **Street art**: Demokratisering av det offentlige rommet

Selv "upolitisk" kunst tar en posisjon ved å ikke ta stilling.`,
    },
    {
      id: 'kunst-10-8-text-3',
      type: 'text',
      content: `**Samtidskunst og aktivisme**

Dagens kunstnere engasjerer seg i:

- **Klimakrise**: Olafur Eliasson, Ice Watch - smeltende isblokker i byer
- **Flyktningkrise**: Ai Weiwei, redningsvester på Berlins konserthus
- **Rasisme**: Kara Walker, silhuetter som konfronterer slavehistorien
- **Kapitalismekritikk**: Banksy, street art som angriper forbrukersamfunnet
- **Kjønnsrettigheter**: Guerrilla Girls, statistikk om kvinner i kunstverden
- **Urfolksrettigheter**: Máret Ánne Sara, reindriftskamp i samtidskunst`,
    },
    {
      id: 'kunst-10-8-text-4',
      type: 'text',
      content: `**Street art som sosial kommentar**

Street art er særlig egnet for sosial kommentar:

- **Tilgjengelighet**: Alle kan se den, ikke bare museumsgjengere
- **Ulovlig element**: Utfordrer eiendomsrett og hvem som kontrollerer det offentlige rom
- **Hurtig respons**: Kan reagere på aktuelle hendelser
- **Viral spredning**: Bilder deles på sosiale medier

**Banksy** er det mest kjente eksempelet - anonyme stensiler som kommenterer krig, kapitalisme, overvåkning og mer.`,
    },
    {
      id: 'kunst-10-8-example-1',
      type: 'example',
      title: 'Guerrilla Girls',
      content: `Guerrilla Girls er en anonym feministisk kunstgruppe (fra 1985):

- **Metode**: Plakater med statistikk om kvinner og minoriteter i kunstverden
- **Identitet**: Bruker gorillamasker og pseudonymer etter døde kvinnelige kunstnere
- **Budskap**: "Må kvinner være nakne for å komme inn på Met Museum?"
- **Stil**: Grafisk, direkte, humoristisk
- **Effekt**: Har bidratt til økt bevissthet og endring

De viser at kunst kan være effektivt våpen i kampen for likestilling.`,
    },
    {
      id: 'kunst-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er aktivistisk kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst som tar stilling til politiske/sosiale spørsmål for å skape bevissthet eller endring',
            multipleChoiceOptions: ['Kunst som tar stilling til politiske/sosiale spørsmål for å skape bevissthet eller endring', 'Kunst som handler om fysisk aktivitet', 'Kunst som er nøytral', 'Kunst som unngår politikk'],
          },
        ],
        solution: 'Aktivistisk kunst bruker kunstneriske virkemidler til å ta stilling i politiske og sosiale spørsmål, med mål om bevisstgjøring eller endring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er street art godt egnet for sosial kommentar?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi den er tilgjengelig for alle og kan reagere raskt på aktuelle hendelser',
            multipleChoiceOptions: ['Fordi den er tilgjengelig for alle og kan reagere raskt på aktuelle hendelser', 'Fordi den er dyr', 'Fordi den kun finnes i museer', 'Fordi den er lovlig overalt'],
          },
        ],
        solution: 'Street art er synlig for alle i det offentlige rom, kan lages raskt som respons på hendelser, og deles viralt på sosiale medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem er Guerrilla Girls?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En anonym feministisk kunstgruppe som bruker plakater og statistikk',
            multipleChoiceOptions: ['En anonym feministisk kunstgruppe som bruker plakater og statistikk', 'En popgruppe', 'Et filmselskap', 'En sportsorganisasjon'],
          },
        ],
        solution: 'Guerrilla Girls er anonyme feministiske kunstnere som siden 1985 har laget plakater med statistikk om kjønnsubalanse i kunstverden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er propaganda i kunstsammenheng?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst brukt av makthavere for å fremme bestemte ideer eller regimer',
            multipleChoiceOptions: ['Kunst brukt av makthavere for å fremme bestemte ideer eller regimer', 'All politisk kunst', 'Kunst som kritiserer makten', 'Abstrakt kunst'],
          },
        ],
        solution: 'Propaganda er kunst og bilder brukt av myndigheter eller bevegelser for å påvirke opinionen i en bestemt retning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken samtidskunstner er kjent for aktivistiske verk om Kina og flyktninger?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ai Weiwei',
            multipleChoiceOptions: ['Ai Weiwei', 'Banksy', 'Damien Hirst', 'Jeff Koons'],
          },
        ],
        solution: 'Ai Weiwei er en kinesisk kunstner og aktivist kjent for å kritisere kinesiske myndigheter og for verk om flyktningkrisen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en sak du bryr deg om og lag en idé til et kunstverk som kommenterer den.',
        solution: 'Elevens egen idé. Gode svar identifiserer en konkret sak, forklarer hvordan kunstverket vil kommunisere budskapet, og vurderer hvem målgruppen er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Tverrfaglige prosjekter
// ============================================================================

export const CHAPTER_KUNST_10_9: TextbookChapter = {
  id: 'kunst-10-9',
  courseId: 'kunst-10',
  chapterNumber: '9',
  title: 'Tverrfaglige prosjekter',
  description: 'Lær å kombinere kunst og håndverk med andre fagområder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske tverrfaglige tema gjennom kunst og håndverk',
    'bruke skapende prosesser i møte med problemstillinger',
  ],
  content: [
    {
      id: 'kunst-10-9-intro',
      type: 'text',
      content: `Tverrfaglige prosjekter kombinerer kunnskap og metoder fra flere fag. I kunst og håndverk kan du utforske temaer fra naturfag, samfunnsfag, språk og andre fag gjennom visuelle og praktiske uttrykk. Dette gir dypere forståelse og viser hvordan fagene henger sammen.`,
    },
    {
      id: 'kunst-10-9-def-1',
      type: 'definition',
      title: 'Tverrfaglighet',
      content: `Tverrfaglighet innebærer at flere fagområder arbeider sammen om felles tema eller problemstillinger. I skolen betyr det ofte å kombinere kompetansemål fra ulike fag i ett prosjekt.`,
    },
    {
      id: 'kunst-10-9-text-2',
      type: 'text',
      content: `**Kunst og naturfag**

Kunst og vitenskap har mye til felles:

- **Observasjon**: Både kunstnere og forskere studerer verden nøye
- **Visualisering**: Kunst gjør vitenskapelige konsepter synlige
- **Eksperimentering**: Begge felt prøver ut nye ideer
- **Kommunikasjon**: Infografikk, illustrasjoner, modeller

**Eksempler**:
- Anatomiske tegninger (Leonardo da Vinci)
- Naturvitenskapelig illustrasjon (Maria Sibylla Merian)
- Datavisualisering av klimaendringer
- Kunst som utforsker økosystemer`,
    },
    {
      id: 'kunst-10-9-text-3',
      type: 'text',
      content: `**Kunst og samfunnsfag**

Kunst dokumenterer og kommenterer samfunnet:

- **Historie**: Kunst som historisk kilde, tidsbilder
- **Geografi**: Kartografi, stedsspesifikk kunst
- **Politikk**: Aktivistisk kunst, propaganda, motstand
- **Økonomi**: Kunst om forbruk, reklame, arbeidsliv
- **Sosiologi**: Kunst om identitet, klasse, kjønn

**Eksempler**:
- Dokumentarfotografi
- Historiske rekonstruksjoner
- Infografikk om sosiale forhold`,
    },
    {
      id: 'kunst-10-9-text-4',
      type: 'text',
      content: `**Prosjektmetodikk**

For vellykkede tverrfaglige prosjekter:

1. **Velg tema**: Noe som naturlig berører flere fag
2. **Definer problemstilling**: Klar og gjennomførbar
3. **Research**: Samle kunnskap fra de relevante fagene
4. **Idéutvikling**: Brainstorm mulige uttrykksformer
5. **Planlegging**: Tidsplan, materialer, arbeidsdeling
6. **Gjennomføring**: Produser verket/produktet
7. **Dokumentasjon**: Prosesslogg, foto, refleksjon
8. **Presentasjon**: Vis frem og forklar

Sørg for at alle involverte fag er synlige i sluttproduktet.`,
    },
    {
      id: 'kunst-10-9-example-1',
      type: 'example',
      title: 'Tverrfaglig prosjekt: Bærekraftig lokalsamfunn',
      content: `**Tema**: Hvordan kan vi gjøre lokalsamfunnet mer bærekraftig?

**Naturfag**: Undersøke energibruk, avfallshåndtering, biologisk mangfold
**Samfunnsfag**: Kartlegge infrastruktur, intervjue politikere, historisk utvikling
**Kunst og håndverk**: Visualisere løsninger, lage modeller, designe plakatkampanje

**Sluttprodukt**: Utstilling med modeller, infografikk og forslag til lokale myndigheter

Dette kombinerer naturvitenskapelig, samfunnsfaglig og kreativ kompetanse.`,
    },
    {
      id: 'kunst-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er tverrfaglighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Når flere fagområder arbeider sammen om felles tema',
            multipleChoiceOptions: ['Når flere fagområder arbeider sammen om felles tema', 'Når man jobber alene', 'Når man bare bruker ett fag', 'Når man unngår praktisk arbeid'],
          },
        ],
        solution: 'Tverrfaglighet innebærer at kunnskap og metoder fra flere fag kombineres for å gi dypere forståelse av et tema.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva har kunst og vitenskap til felles?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Begge krever observasjon, eksperimentering og nysgjerrighet',
            multipleChoiceOptions: ['Begge krever observasjon, eksperimentering og nysgjerrighet', 'Ingenting - de er helt forskjellige', 'Begge handler bare om tall', 'Begge unngår kreativitet'],
          },
        ],
        solution: 'Kunst og vitenskap deler grunnleggende metoder: Nøye observasjon, eksperimentering med ideer og nysgjerrig utforskning av verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør et tverrfaglig prosjekt inneholde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Klar problemstilling, research fra flere fag, praktisk arbeid og dokumentasjon',
            multipleChoiceOptions: ['Klar problemstilling, research fra flere fag, praktisk arbeid og dokumentasjon', 'Kun teori', 'Bare ett fag', 'Ingen plan'],
          },
        ],
        solution: 'Et godt tverrfaglig prosjekt har tydelig problemstilling, henter kunnskap fra relevante fag, inkluderer praktisk arbeid og dokumenteres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan kunst bidra til å formidle naturvitenskapelige konsepter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gjennom visualisering, modeller og illustrasjoner som gjør abstrakte ideer konkrete',
            multipleChoiceOptions: ['Gjennom visualisering, modeller og illustrasjoner som gjør abstrakte ideer konkrete', 'Kunst kan ikke formidle vitenskap', 'Ved å ignorere fakta', 'Ved å erstatte eksperimenter'],
          },
        ],
        solution: 'Kunst kan visualisere komplekse vitenskapelige konsepter, gjøre data forståelig gjennom infografikk, og skape engasjement gjennom estetikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er dokumentasjon viktig i prosjektarbeid?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å vise prosessen, reflektere over læring og dele erfaringer',
            multipleChoiceOptions: ['For å vise prosessen, reflektere over læring og dele erfaringer', 'Det er ikke viktig', 'Bare for å fylle tid', 'Kun for karakter'],
          },
        ],
        solution: 'Dokumentasjon viser hele prosessen, hjelper med refleksjon, og gjør det mulig å dele og lære av erfaringene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Foreslå et tverrfaglig prosjekt som kombinerer kunst og et annet fag du liker. Beskriv kort tema, fag og mulig sluttprodukt.',
        solution: 'Elevens egen idé. Gode svar viser tydelig kobling mellom fagene, en gjennomførbar problemstilling og relevant sluttprodukt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Eksamensforberedelse
// ============================================================================

export const CHAPTER_KUNST_10_10: TextbookChapter = {
  id: 'kunst-10-10',
  courseId: 'kunst-10',
  chapterNumber: '10',
  title: 'Eksamensforberedelse',
  description: 'Forbered deg til muntlig-praktisk eksamen i kunst og håndverk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge, gjennomføre og dokumentere et større kunstprosjekt',
    'reflektere over egen prosess og presentere arbeidet',
  ],
  content: [
    {
      id: 'kunst-10-10-intro',
      type: 'text',
      content: `Eksamen i kunst og håndverk er muntlig-praktisk. Du får en oppgave med forberedelsestid der du skal lage et produkt og deretter presentere det muntlig. God forberedelse handler om å forstå eksamensformatet, kunne planlegge effektivt og vise kompetansen din på best mulig måte.`,
    },
    {
      id: 'kunst-10-10-def-1',
      type: 'definition',
      title: 'Muntlig-praktisk eksamen',
      content: `Muntlig-praktisk eksamen i kunst og håndverk består av forberedelsestid (vanligvis 24-48 timer) der du lager et praktisk arbeid, etterfulgt av en muntlig presentasjon der du viser frem og snakker om produktet og prosessen.`,
    },
    {
      id: 'kunst-10-10-text-2',
      type: 'text',
      content: `**Eksamensoppgaven**

Typiske oppgaveformuleringer:

- Får et tema eller problemstilling
- Kan velge teknikk og materiale (innen rammer)
- Må vise prosess og refleksjon
- Skal knyttes til kompetansemål

**Eksempel på oppgave**:
"Lag et verk som utforsker temaet 'identitet'. Velg selv teknikk og materiale. Dokumenter prosessen og forbered en presentasjon der du forklarer valgene dine."`,
    },
    {
      id: 'kunst-10-10-text-3',
      type: 'text',
      content: `**Planlegging av forberedelsestiden**

Med 24 timers forberedelse:

**Første timer** (2-3 timer):
- Les oppgaven nøye flere ganger
- Brainstorm ideer (mengde)
- Research om temaet
- Velg retning og skisser

**Midtfase** (10-14 timer):
- Samle materialer
- Utfør praktisk arbeid
- Dokumenter underveis (foto!)
- Juster ved behov

**Siste timer** (4-6 timer):
- Ferdigstill produkt
- Skriv stikkord til presentasjon
- Øv på å snakke om prosessen
- Sov!`,
    },
    {
      id: 'kunst-10-10-text-4',
      type: 'text',
      content: `**Den muntlige presentasjonen**

Strukturer presentasjonen:

1. **Introduksjon**: Presenter oppgaven og din tolkning
2. **Idéutvikling**: Hvordan kom du frem til ideen?
3. **Prosess**: Hvilke valg tok du? Hva fungerte/fungerte ikke?
4. **Teknikk**: Forklar hvordan du har jobbet
5. **Resultat**: Presenter sluttproduktet
6. **Refleksjon**: Hva lærte du? Hva ville du gjort annerledes?
7. **Kompetansemål**: Knytt til pensum

Vær forberedt på oppfølgingsspørsmål fra sensor.`,
    },
    {
      id: 'kunst-10-10-tip-1',
      type: 'tip',
      title: 'Tips til eksamen',
      content: `- Start med det du kan, ikke det vanskeligste
- Dokumenter prosessen med bilder - det viser refleksjon
- Ha backup-plan hvis noe går galt
- Sov tilstrekkelig natten før
- Snakk tydelig og vis entusiasme for prosjektet ditt
- Det er OK å innrømme at noe ikke ble perfekt - vis at du reflekterer`,
    },
    {
      id: 'kunst-10-10-text-5',
      type: 'text',
      content: `**Vurderingskriterier**

Sensorene vurderer typisk:

- **Håndverkskvalitet**: Teknisk utførelse, materialbehandling
- **Prosess**: Idéutvikling, eksperimentering, problemløsning
- **Originalitet**: Egne ideer, personlig uttrykk
- **Kommunikasjon**: Hvor godt formidler verket budskapet?
- **Refleksjon**: Evne til å vurdere egne valg og resultater
- **Presentasjon**: Muntlig fremstilling, bruk av fagbegreper

Prosess og refleksjon teller like mye som sluttproduktet!`,
    },
    {
      id: 'kunst-10-10-example-1',
      type: 'example',
      title: 'Eksempel på eksamensbesvarelse',
      content: `**Oppgave**: "Utforsk temaet bærekraft gjennom et praktisk arbeid"

**Idé**: Skulptur laget av plastavfall fra stranden

**Prosess**:
- Research på havplast-problematikken
- Samlet plast på lokal strand (dokumentert)
- Skisser av ulike komposisjoner
- Eksperimenterte med å smelte/sy/binde sammen
- Valgte å lage en "plastfugl" som symbol

**Refleksjon**: "Jeg ville vise hvordan plast påvirker fuglelivet. Utfordringen var å få skulpturen til å stå stabilt. Neste gang ville jeg brukt mer tid på å sortere plastfargene."

God besvarelse: Klar idé, synlig prosess, relevant tema, ærlig refleksjon.`,
    },
    {
      id: 'kunst-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva består muntlig-praktisk eksamen av?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Forberedelsestid med praktisk arbeid og deretter muntlig presentasjon',
            multipleChoiceOptions: ['Forberedelsestid med praktisk arbeid og deretter muntlig presentasjon', 'Kun skriftlig prøve', 'Bare praktisk arbeid uten presentasjon', 'Kun muntlig uten forberedelse'],
          },
        ],
        solution: 'Muntlig-praktisk eksamen har en forberedelsestid der du lager et praktisk arbeid, etterfulgt av muntlig presentasjon for sensor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør du gjøre i de første timene av forberedelsestiden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Lese oppgaven nøye, brainstorme ideer og velge retning',
            multipleChoiceOptions: ['Lese oppgaven nøye, brainstorme ideer og velge retning', 'Starte å lage produktet med én gang', 'Sove', 'Vente til siste stund'],
          },
        ],
        solution: 'Bruk de første timene til å forstå oppgaven, generere mange ideer, og velge retning før du begynner det praktiske arbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er prosessdokumentasjon viktig på eksamen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi prosess og refleksjon teller like mye som sluttproduktet',
            multipleChoiceOptions: ['Fordi prosess og refleksjon teller like mye som sluttproduktet', 'Det er ikke viktig', 'Bare for å fylle tid', 'Fordi sensor krever det'],
          },
        ],
        solution: 'Prosessdokumentasjon viser din arbeidsmetode, refleksjon og læring. Dette vurderes like høyt som det ferdige produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du inkludere i refleksjonsdelen av presentasjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hva du lærte og hva du ville gjort annerledes',
            multipleChoiceOptions: ['Hva du lærte og hva du ville gjort annerledes', 'Bare positive ting', 'Ingen kritikk av eget arbeid', 'Kun ros av produktet'],
          },
        ],
        solution: 'God refleksjon viser selvinnsikt: Hva lærte du? Hva fungerte og hva fungerte ikke? Hva ville du gjort annerledes med mer tid?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke kriterier vurderes typisk på eksamen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Håndverk, prosess, originalitet, kommunikasjon, refleksjon og presentasjon',
            multipleChoiceOptions: ['Håndverk, prosess, originalitet, kommunikasjon, refleksjon og presentasjon', 'Bare hvor pent det ser ut', 'Kun materialkostnad', 'Bare tidsbruk'],
          },
        ],
        solution: 'Eksamensvurdering ser på flere aspekter: teknisk kvalitet, arbeidsprosess, kreativitet, kommunikasjon, refleksjon og muntlig presentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Øv deg: Velg et tema (f.eks. "natur" eller "fremtid") og skisser hvordan du ville løst en eksamensoppgave om dette.',
        solution: 'Elevens egen øvelse. Gode svar viser tydelig idé, materialvalg, tidsplan og refleksjon over mulige utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kunst-10-10-ex-7',
        number: '7',
        type: 'classic',
        task: 'Skriv stikkord til en 5-minutters presentasjon av et tenkt eksamensprosjekt.',
        solution: 'Elevens egen øvelse. Gode stikkord dekker: introduksjon, idéutvikling, prosess, teknikk, resultat, refleksjon og kobling til kompetansemål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KUNST_10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KUNST_10_1,
  CHAPTER_KUNST_10_2,
  CHAPTER_KUNST_10_3,
  CHAPTER_KUNST_10_4,
  CHAPTER_KUNST_10_5,
  CHAPTER_KUNST_10_6,
  CHAPTER_KUNST_10_7,
  CHAPTER_KUNST_10_8,
  CHAPTER_KUNST_10_9,
  CHAPTER_KUNST_10_10,
];
