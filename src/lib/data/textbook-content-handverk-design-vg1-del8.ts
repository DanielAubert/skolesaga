/**
 * Håndverk, design og produktutvikling VG1 - Del 8: Bærekraft og arbeidsliv
 *
 * Dekker LK20 læreplan for Håndverk, design og produktutvikling på VG1
 * Kapitler 8.1-8.7: Bærekraft, HMS, vedlikehold og arbeidsliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Bærekraftig produksjon og materialvalg
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_1: TextbookChapter = {
  id: 'handverk-design-vg1-8-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.1',
  title: 'Bærekraftig produksjon og materialvalg',
  description: 'Miljøvennlige valg, livssyklusanalyse og etisk produksjon i håndverksfag.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og formidle hvordan etterspørsel, kultur, tradisjon, trender og bærekraft har betydning for håndverksfagene lokalt og regionalt',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-1-intro',
      type: 'text',
      content: `Som håndverker har du mulighet til å gjøre valg som påvirker miljøet positivt. Bærekraftig produksjon handler om å lage produkter som dekker dagens behov uten å ødelegge for fremtidige generasjoners muligheter. I dette kapittelet lærer du om miljøvennlige materialer, livssyklusanalyse og hvordan du kan ta ansvarlige valg i ditt arbeid.`,
    },
    {
      id: 'handverk-design-vg1-8-1-def-1',
      type: 'definition',
      title: 'Bærekraftig produksjon',
      content: `Bærekraftig produksjon er fremstilling av produkter på en måte som minimerer negative miljøpåvirkninger, bevarer energi og naturressurser, er økonomisk gjennomførbar, og trygg for arbeidere, lokalsamfunn og forbrukere.`,
    },
    {
      id: 'handverk-design-vg1-8-1-def-2',
      type: 'definition',
      title: 'Livssyklusanalyse (LCA)',
      content: `Livssyklusanalyse er en metode for å vurdere miljøpåvirkningen av et produkt gjennom hele dets livsløp - fra råvareutvinning, via produksjon og bruk, til avhending eller resirkulering. Kalles også "fra vugge til grav"-analyse.`,
    },
    {
      id: 'handverk-design-vg1-8-1-text-1',
      type: 'text',
      content: `**Miljøvennlige materialvalg**

Når du velger materialer, bør du vurdere flere faktorer:

**Fornybare vs. ikke-fornybare ressurser**:
- **Fornybare**: Tre fra bærekraftig skogbruk, bambus, lin, ull, bomull
- **Ikke-fornybare**: Plast fra olje, metaller, fossile ressurser

**Lokale vs. importerte materialer**:
- Lokale materialer har kortere transportvei og lavere klimaavtrykk
- Norsk tre, stein og ull er gode alternativer
- Kortreiste materialer støtter lokal næring

**Sertifiseringer å se etter**:
- **FSC/PEFC**: Tre fra ansvarlig skogbruk
- **GOTS**: Økologisk tekstil
- **Svanemerket**: Nordisk miljømerke
- **EU Ecolabel**: Europeisk miljømerke`,
    },
    {
      id: 'handverk-design-vg1-8-1-text-2',
      type: 'text',
      content: `**Livssyklusens faser**

Et produkts livssyklus kan deles inn i fem hovedfaser:

**1. Råvareutvinning**
- Uttak av materialer fra naturen
- Energiforbruk og utslipp ved gruvedrift, hogst, etc.
- Påvirkning på økosystemer og biologisk mangfold

**2. Produksjon**
- Bearbeiding av råvarer til ferdige produkter
- Energiforbruk i produksjonsprosessen
- Avfall og utslipp fra fabrikker

**3. Distribusjon**
- Transport fra fabrikk til forbruker
- Emballasje og pakking
- Lagring og logistikk

**4. Bruksfase**
- Energiforbruk under bruk
- Vedlikeholdsbehov
- Reparasjoner og utskiftning av deler

**5. Avhending**
- Gjenbruk eller resirkulering
- Kompostering (for biologiske materialer)
- Deponering eller forbrenning`,
    },
    {
      id: 'handverk-design-vg1-8-1-text-3',
      type: 'text',
      content: `**Design for bærekraft**

Du kan designe produkter som er mer bærekraftige ved å tenke på:

**Design for lang levetid**:
- Velg holdbare materialer
- Lag tidløst design som ikke går av moten
- Dimensjoner konstruksjonen for slitestyrke

**Design for reparasjon**:
- Bruk standarddeler som kan skiftes ut
- Gjør produktet mulig å demontere
- Unngå liming der skruer kan brukes

**Design for resirkulering**:
- Bruk færrest mulig materialtyper
- Merk materialene tydelig
- Unngå sammensatte materialer som er vanskelige å skille

**Etisk produksjon**:
- Kjenn til arbeidsforholdene i leverandørkjeden
- Velg leverandører som behandler arbeidere rettferdig
- Vurder sosiale konsekvenser av materialvalg`,
    },
    {
      id: 'handverk-design-vg1-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Bærekraftig møbelproduksjon',
      content: `**Case: En trearbeider skal lage en spisestol**

Tradisjonelt valg:
- Importert tropisk hardved
- Lakk med løsemidler
- Skumgummi i setet
- Syntetisk tekstil

Bærekraftig alternativ:
- Lokalt norsk tre (ask eller eik) med FSC-merking
- Naturlig olje eller vannbasert lakk
- Sete med naturlige fibre eller resirkulert materiale
- Ull fra norske sauer eller resirkulert tekstil

Fordeler med det bærekraftige valget:
- Kortere transport reduserer CO2-utslipp
- Ingen farlige løsemidler i produksjonen
- Støtter lokale produsenter
- Produktet kan lettere resirkuleres til slutt`,
    },
    {
      id: 'handverk-design-vg1-8-1-tip-1',
      type: 'tip',
      title: 'Spørsmål å stille om materialer',
      content: `Før du velger materiale, still disse spørsmålene: Hvor kommer materialet fra? Hvordan er det produsert? Finnes det miljømerkinger? Kan det repareres eller resirkuleres? Finnes det et mer miljøvennlig alternativ som fungerer like godt?`,
    },
    {
      id: 'handverk-design-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva en livssyklusanalyse er, og nevn de fem fasene i et produkts livssyklus.',
        solution: 'En livssyklusanalyse (LCA) er en metode for å vurdere miljøpåvirkningen av et produkt gjennom hele dets livsløp. De fem fasene er: 1) Råvareutvinning - uttak av materialer fra naturen, 2) Produksjon - bearbeiding til ferdige produkter, 3) Distribusjon - transport og lagring, 4) Bruksfase - bruk og vedlikehold, 5) Avhending - gjenbruk, resirkulering eller deponering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken miljømerking garanterer at tre kommer fra ansvarlig skogbruk?',
        options: [
          {
            id: 'a',
            text: 'GOTS',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'FSC',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'EU Ecolabel',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'OEKO-TEX',
            isCorrect: false,
          },
        ],
        solution: 'FSC (Forest Stewardship Council) er en sertifisering som garanterer at tre kommer fra ansvarlig og bærekraftig skogbruk. GOTS og OEKO-TEX gjelder tekstiler, mens EU Ecolabel er en generell miljømerking.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du skal lage en enkel hylle. Sammenlign et bærekraftig og et mindre bærekraftig materialvalg.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke materialer vil være mest miljøvennlige?',
            solution: 'Lokalt norsk tre (furu, bjørk eller gran) med FSC-merking, naturlig olje eller bivoks som overflatebehandling, og gjenbrukte eller resirkulerte beslag.',
          },
          {
            label: 'b',
            task: 'Hvilke materialer bør du unngå, og hvorfor?',
            solution: 'Unngå sponplater med formaldehydlim (gir avgassing), tropisk trevirke uten sertifisering (kan bidra til avskoging), og løsemiddelbasert lakk (avgir skadelige stoffer).',
          },
        ],
        solution: 'Et bærekraftig valg ville være lokalt tre med FSC-merking og naturlig overflatebehandling, mens et mindre bærekraftig valg kunne være importert tre uten sertifisering med løsemiddelbasert lakk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er hovedmålet med "design for reparasjon"?',
        options: [
          {
            id: 'a',
            text: 'At produktet ser pent ut',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'At produktet kan fikses når noe går i stykker, i stedet for å kastes',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'At produktet blir billigere å produsere',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'At produktet veier mindre',
            isCorrect: false,
          },
        ],
        solution: 'Design for reparasjon handler om å lage produkter som kan repareres når deler slites ut eller går i stykker. Dette forlenger produktets levetid og reduserer avfall.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg et produkt du har laget eller bruker daglig. Gjør en enkel livssyklusanalyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv materialene og hvor de kommer fra.',
            solution: 'Varierer basert på valgt produkt. Beskriv hovedmaterialene og deres opprinnelse.',
          },
          {
            label: 'b',
            task: 'Vurder miljøpåvirkningen i hver av de fem livssyklusfasene.',
            solution: 'Gå gjennom råvareutvinning, produksjon, distribusjon, bruk og avhending. Identifiser hvor de største miljøbelastningene ligger.',
          },
          {
            label: 'c',
            task: 'Foreslå hvordan produktet kunne vært mer bærekraftig.',
            solution: 'Forslag kan inkludere alternative materialer, lokal produksjon, enklere reparasjon, eller bedre resirkuleringsmuligheter.',
          },
        ],
        solution: 'En god analyse identifiserer materialene, vurderer miljøpåvirkningen i hver fase, og foreslår konkrete forbedringer for økt bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-1-summary',
      type: 'text',
      content: `**Oppsummering**

Bærekraftig produksjon handler om å minimere miljøpåvirkningen gjennom hele et produkts livssyklus. Du kan bidra ved å:
- Velge fornybare og lokale materialer
- Se etter miljømerkinger som FSC, Svanemerket og EU Ecolabel
- Designe for lang levetid, reparasjon og resirkulering
- Gjøre livssyklusanalyse av produktene dine
- Ta hensyn til etiske aspekter i produksjonen

Som håndverker har du direkte innflytelse på materialvalg og produksjonsmetoder, og kan dermed gjøre en reell forskjell for miljøet.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bærekraftig produksjon', definition: 'Fremstilling av produkter som minimerer negative miljøpåvirkninger' },
    { term: 'Livssyklusanalyse (LCA)', definition: 'Metode for å vurdere miljøpåvirkning fra vugge til grav' },
    { term: 'FSC', definition: 'Forest Stewardship Council - sertifisering for ansvarlig skogbruk' },
    { term: 'Fornybare ressurser', definition: 'Ressurser som kan fornyes naturlig, som tre og bambus' },
    { term: 'Design for reparasjon', definition: 'Designprinsipp der produktet lages slik at det kan repareres' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk system der ressurser gjenbrukes og resirkuleres' },
  ],
};

// ============================================================================
// Kapittel 8.2: Gjenbruk, reparasjon og vedlikehold
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_2: TextbookChapter = {
  id: 'handverk-design-vg1-8-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.2',
  title: 'Gjenbruk, reparasjon og vedlikehold',
  description: 'Sirkulærøkonomi, produktlevetid og teknikker for å gi nytt liv til produkter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjenbruke, tilpasse, reparere og vedlikeholde ulike håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-2-intro',
      type: 'text',
      content: `I en verden med begrensede ressurser er det viktigere enn noensinne å ta vare på det vi har. Gjenbruk, reparasjon og vedlikehold er ikke bare bra for miljøet - det er også tradisjonelle håndverksferdigheter som gir deg mulighet til å skape verdi fra ting andre kaster. I dette kapittelet lærer du praktiske teknikker for å forlenge produkters levetid.`,
    },
    {
      id: 'handverk-design-vg1-8-2-def-1',
      type: 'definition',
      title: 'Sirkulærøkonomi',
      content: `Sirkulærøkonomi er et økonomisk system der produkter, materialer og ressurser holdes i bruk så lenge som mulig. I motsetning til lineær økonomi (ta-bruk-kast) fokuserer sirkulærøkonomi på gjenbruk, reparasjon, oppgradering og resirkulering.`,
    },
    {
      id: 'handverk-design-vg1-8-2-def-2',
      type: 'definition',
      title: 'Upcycling',
      content: `Upcycling er kreativ gjenbruk der man transformerer avfall eller ubrukte produkter til noe av høyere kvalitet eller verdi enn originalen. For eksempel å lage en designlampe av gamle flasker.`,
    },
    {
      id: 'handverk-design-vg1-8-2-text-1',
      type: 'text',
      content: `**Avfallshierarkiet**

Avfallshierarkiet viser prioriteringen vi bør følge for å håndtere ressurser mest miljøvennlig:

**1. Forebygging** (best)
- Unngå å skape avfall i utgangspunktet
- Kjøp mindre og velg kvalitet
- Del og lån i stedet for å eie

**2. Gjenbruk**
- Bruk produkter om igjen til samme formål
- Selg eller gi bort ting du ikke bruker
- Kjøp brukt

**3. Resirkulering**
- Kildesortér materialer
- Lever til gjenvinning
- Velg produkter med resirkulert innhold

**4. Energigjenvinning**
- Forbrenning med energiutnyttelse
- Biogass fra organisk avfall

**5. Deponering** (verst)
- Siste utvei for avfall som ikke kan håndteres annerledes`,
    },
    {
      id: 'handverk-design-vg1-8-2-text-2',
      type: 'text',
      content: `**Gjenbruk i praksis**

**Finne materialer til gjenbruk**:
- Gjenbruksstasjoner og byggavfall
- Loppemarkeder og bruktbutikker
- Rivningsobjekter og kasserte møbler
- Egne ting som ikke lenger brukes
- Nettbaserte markedsplasser (Finn.no, Facebook Marketplace)

**Vurdere gjenbruksmaterialer**:
- Sjekk for skader, råte eller insekter (i tre)
- Se etter rust eller korrosjon (i metall)
- Kontroller at tekstiler er rene og hele
- Vurder om eventuelle skader kan repareres

**Kreative gjenbruksideer**:
- Paller blir til møbler
- Gamle vinduer blir til bilderammer
- Tekstilrester blir til puter eller tepper
- Hermetikkbokser blir til oppbevaring
- Trebiter blir til skjærefjøler eller hyller`,
    },
    {
      id: 'handverk-design-vg1-8-2-text-3',
      type: 'text',
      content: `**Reparasjonsteknikker**

**Tre og møbler**:
- Lime løse sammenføyninger med trelim
- Fylle sprekker med tresparkel eller blanda sagspon og lim
- Slipe og beise eller male på nytt
- Skifte ut ødelagte deler
- Forsterke svake konstruksjoner

**Tekstil og klær**:
- Sy igjen hull og rifter
- Lapper og dekorative reparasjoner (synlig stopping)
- Skifte ut glidelåser og knapper
- Ta inn eller ut plagg som ikke passer
- Rense og fjerne flekker

**Metall**:
- Fjerne rust med stålbørste eller rustløser
- Sveise eller lodde sammen brudd
- Polere og beskytte overflaten
- Skifte ut rustne skruer og beslag
- Male med rustbeskyttende maling`,
    },
    {
      id: 'handverk-design-vg1-8-2-text-4',
      type: 'text',
      content: `**Vedlikehold for lang levetid**

Regelmessig vedlikehold forlenger produktenes levetid betydelig.

**Tre**:
- Hold rent og tørt
- Olje eller voks regelmessig (1-2 ganger i året for møbler)
- Reparer skader tidlig før de sprer seg
- Beskytt mot direkte sol og fuktighet

**Tekstil**:
- Følg vaskeanvisningene
- Luft regelmessig i stedet for å vaske unødvendig
- Fjern flekker raskt
- Oppbevar riktig (ull i tette poser mot møll)

**Metall**:
- Hold rent og tørt
- Smør bevegelige deler
- Beskytt mot fukt og salt
- Behandle rust med én gang den oppdages

**Lær**:
- Rengjør med egnet såpe
- Smør inn med lærfett eller -balsam
- Unngå sterk varme og sol
- Oppbevar luftig, ikke i plast`,
    },
    {
      id: 'handverk-design-vg1-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Gi nytt liv til en gammel stol',
      content: `**Prosjekt: Oppussing av en gammel trestol**

Utgangspunkt: En sliten trestol med løse bein, avflasset maling og slitt sete.

**Trinn 1: Vurdering**
- Sjekk at grunnstrukturen er solid
- Identifiser hva som må repareres
- Bestem ønsket sluttresultat

**Trinn 2: Demontering**
- Ta fra hverandre det som skal repareres
- Fjern gammelt setetrekk
- Skrap vekk løs maling

**Trinn 3: Reparasjon**
- Lim løse sammenføyninger (bruk klemmer til limet tørker)
- Fyll eventuelle hull eller sprekker
- Slip alle overflater

**Trinn 4: Overflatebehandling**
- Grunning hvis nødvendig
- Maling eller beis (2-3 strøk)
- Eventuelt lakk for beskyttelse

**Trinn 5: Nytt sete**
- Skjær til nytt skumgummi
- Trekk med nytt stoff (kan være resirkulert)
- Fest med stifter på undersiden

Resultat: En unik, oppusset stol med ny bruksverdi!`,
    },
    {
      id: 'handverk-design-vg1-8-2-tip-1',
      type: 'tip',
      title: 'Verktøykasse for reparasjon',
      content: `Ha alltid disse tingene tilgjengelig: Trelim, epoksy, gaffatape, nål og tråd i ulike farger, diverse skruer og beslag, sandpapir i ulike grovheter, stålull, olje og smøremidler. Med dette kan du fikse det meste!`,
    },
    {
      id: 'handverk-design-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva sirkulærøkonomi er, og hvordan det skiller seg fra lineær økonomi.',
        solution: 'Sirkulærøkonomi er et økonomisk system der produkter, materialer og ressurser holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering. Lineær økonomi følger modellen "ta-bruk-kast" der råvarer utvinnes, produkter lages og brukes, og deretter kastes som avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er riktig rekkefølge i avfallshierarkiet, fra best til verst?',
        options: [
          {
            id: 'a',
            text: 'Resirkulering - Gjenbruk - Deponering - Forebygging',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Forebygging - Gjenbruk - Resirkulering - Energigjenvinning - Deponering',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Deponering - Energigjenvinning - Forebygging - Gjenbruk',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Gjenbruk - Forebygging - Deponering - Resirkulering',
            isCorrect: false,
          },
        ],
        solution: 'Riktig rekkefølge fra best til verst er: 1) Forebygging (unngå avfall), 2) Gjenbruk, 3) Resirkulering, 4) Energigjenvinning, 5) Deponering.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv forskjellen mellom gjenbruk, resirkulering og upcycling. Gi et eksempel på hver.',
        solution: 'Gjenbruk er å bruke noe om igjen til samme formål (f.eks. selge brukte klær). Resirkulering er å bryte ned materialer for å lage nye produkter (f.eks. smelte glass til nye flasker). Upcycling er å transformere noe til et produkt av høyere verdi (f.eks. lage designmøbler av paller).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du har funnet en gammel trekommode med løse skuffer og avflasset lakk. Beskriv trinnene du ville tatt for å reparere den.',
        solution: 'Trinnene ville være: 1) Vurder skadene og sjekk at strukturen er solid. 2) Fjern skuffene og demonter deler som trenger reparasjon. 3) Lim løse sammenføyninger og fyll eventuelle hull. 4) Slip vekk gammel lakk og gjør overflatene jevne. 5) Grunne hvis nødvendig. 6) Påfør ny overflatebehandling (maling, beis eller olje). 7) Sett sammen igjen og juster skuffene så de glir lett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er det viktigste du bør gjøre for å vedlikeholde tremøbler?',
        options: [
          {
            id: 'a',
            text: 'Vaske dem med vann hver uke',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Lakke dem på nytt hvert år',
            isCorrect: false,
          },
          {
            id: 'c',
            text: 'Holde dem rene og tørre, og olje/vokse regelmessig',
            isCorrect: true,
          },
          {
            id: 'd',
            text: 'La dem stå i direkte sollys for å tørke',
            isCorrect: false,
          },
        ],
        solution: 'Tremøbler bør holdes rene og tørre, og behandles med olje eller voks 1-2 ganger i året. Unngå mye vann og direkte sollys, da dette kan skade treet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Finn en gjenstand hjemme som trenger reparasjon eller vedlikehold. Lag en plan for hvordan du vil fikse den.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv gjenstanden og hva som er galt med den.',
            solution: 'Varierer basert på valgt gjenstand. Beskriv material, skader og slitasje.',
          },
          {
            label: 'b',
            task: 'List opp verktøy og materialer du trenger.',
            solution: 'Avhenger av type reparasjon - f.eks. lim, skruer, sandpapir, maling, nål og tråd.',
          },
          {
            label: 'c',
            task: 'Beskriv trinn for trinn hvordan du vil utføre reparasjonen.',
            solution: 'En systematisk plan med forberedelse, reparasjon og etterarbeid.',
          },
        ],
        solution: 'En god reparasjonsplan inkluderer analyse av problemet, nødvendige materialer og verktøy, og en trinnvis fremgangsmåte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-2-summary',
      type: 'text',
      content: `**Oppsummering**

Gjenbruk, reparasjon og vedlikehold er sentrale ferdigheter i sirkulærøkonomien. Viktige prinsipper:
- Følg avfallshierarkiet: forebygg, gjenbruk, resirkuler
- Finn gjenbruksmaterialer på gjenbruksstasjoner, loppemarkeder og nettsteder
- Lær grunnleggende reparasjonsteknikker for tre, tekstil og metall
- Vedlikehold produkter regelmessig for å forlenge levetiden
- Upcycling kan skape verdi fra ting andre kaster

Som håndverker har du ferdighetene til å reparere og transformere - bruk dem!`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sirkulærøkonomi', definition: 'Økonomisk system der ressurser holdes i bruk så lenge som mulig' },
    { term: 'Upcycling', definition: 'Kreativ gjenbruk der avfall transformeres til noe av høyere verdi' },
    { term: 'Avfallshierarkiet', definition: 'Prioritert rekkefølge for avfallshåndtering fra best til verst' },
    { term: 'Gjenbruk', definition: 'Bruke produkter om igjen til samme eller lignende formål' },
    { term: 'Resirkulering', definition: 'Bryte ned materialer for å lage nye produkter' },
    { term: 'Produktlevetid', definition: 'Tiden et produkt kan brukes før det må erstattes' },
  ],
};

// ============================================================================
// Kapittel 8.3: Helse, miljø og sikkerhet i verkstedet
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_3: TextbookChapter = {
  id: 'handverk-design-vg1-8-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.3',
  title: 'Helse, miljø og sikkerhet i verkstedet',
  description: 'HMS-regler, verneutstyr, risikovurdering og sikker arbeidspraksis.',
  estimatedMinutes: 40,
  competenceGoals: [
    'holde orden i verkstedet og bruke materialer, teknikker og utstyr i henhold til gjeldende regler for helse, miljø og sikkerhet',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-3-intro',
      type: 'text',
      content: `Sikkerhet i verkstedet handler om å beskytte deg selv og andre mot skader. God HMS-praksis (helse, miljø og sikkerhet) er ikke bare et lovkrav - det er sunn fornuft som lar deg jobbe trygt og effektivt. I dette kapittelet lærer du om risikovurdering, verneutstyr og hvordan du skaper et trygt arbeidsmiljø.`,
    },
    {
      id: 'handverk-design-vg1-8-3-def-1',
      type: 'definition',
      title: 'HMS (Helse, miljø og sikkerhet)',
      content: `HMS er et samlebegrep for arbeidet med å sikre et trygt og helsefremmende arbeidsmiljø, forebygge ulykker og skader, og minimere miljøbelastningen fra virksomheten. I Norge reguleres HMS av Arbeidsmiljøloven.`,
    },
    {
      id: 'handverk-design-vg1-8-3-def-2',
      type: 'definition',
      title: 'Risikovurdering',
      content: `Risikovurdering er en systematisk gjennomgang av hva som kan gå galt, hvor sannsynlig det er at det skjer, og hvor alvorlige konsekvensene kan bli. Basert på dette iverksettes tiltak for å redusere risikoen.`,
    },
    {
      id: 'handverk-design-vg1-8-3-text-1',
      type: 'text',
      content: `**Vanlige farer i verkstedet**

**Mekaniske farer**:
- Kuttskader fra skarpe verktøy og kanter
- Klemskader fra maskiner og tunge gjenstander
- Slag- og støtskader fra fallende objekter
- Skader fra roterende maskindeler

**Kjemiske farer**:
- Innånding av støv og partikler
- Giftige damper fra løsemidler og lim
- Hudirritasjon fra kjemikalier
- Allergi fra visse materialer

**Fysiske farer**:
- Hørselsskader fra støy
- Øyeskader fra partikler og sprut
- Brannskader fra varme overflater og verktøy
- Belastningsskader fra tungt arbeid

**Elektriske farer**:
- Støt fra defekte ledninger eller verktøy
- Brann fra overbelastede kurser
- Kortslutning i fuktige miljøer`,
    },
    {
      id: 'handverk-design-vg1-8-3-text-2',
      type: 'text',
      content: `**Personlig verneutstyr (PVU)**

**Øyevern**:
- Vernebriller ved sliping, boring, fresing
- Visir ved fare for sprut
- Sveisemaske ved sveising

**Hørselsvern**:
- Ørepropper ved moderat støy
- Hørselsvern/øreklokker ved høy støy
- Bruk alltid ved maskiner som bråker

**Åndedrettsvern**:
- Støvmaske (P2/P3) ved støvende arbeid
- Kullfiltermaske ved arbeid med løsemidler
- Friskluftsmaske ved sterkt forurenset luft

**Håndvern**:
- Arbeidshansker mot kutt og stikk
- Kjemikaliebestandige hansker ved kjemikaliebruk
- Varmebeskyttende hansker ved varmt arbeid

**Kroppsvern**:
- Vernesko med tåhette
- Arbeidstøy uten løse deler
- Forkle ved fare for sprut
- Hjelm ved fare for fallende gjenstander`,
    },
    {
      id: 'handverk-design-vg1-8-3-text-3',
      type: 'text',
      content: `**Gjennomføre en risikovurdering**

Følg disse trinnene for å vurdere risiko før du starter et arbeid:

**Trinn 1: Identifiser farer**
- Hva kan gå galt?
- Hvilke verktøy og maskiner brukes?
- Hvilke materialer og kjemikalier er involvert?

**Trinn 2: Vurder risiko**
- Hvor sannsynlig er det at faren inntreffer?
- Hvor alvorlige er konsekvensene?
- Risiko = Sannsynlighet x Konsekvens

**Trinn 3: Iverksett tiltak**
- Hvordan kan risikoen elimineres eller reduseres?
- Kan arbeidet gjøres på en tryggere måte?
- Hvilket verneutstyr trengs?

**Trinn 4: Dokumenter og følg opp**
- Skriv ned vurderingen og tiltakene
- Informer alle som er involvert
- Kontroller at tiltakene fungerer`,
    },
    {
      id: 'handverk-design-vg1-8-3-text-4',
      type: 'text',
      content: `**Orden og sikkerhet i verkstedet**

**Generelle regler**:
- Hold arbeidsplassen ryddig og ren
- Rydd opp etter deg - verktøy på plass
- Meld fra om feil og mangler
- Følg sikkerhetsinstrukser for maskiner

**Før arbeid**:
- Les bruksanvisning for ukjent utstyr
- Sjekk at verneutstyr er tilgjengelig og i orden
- Kontroller at maskiner fungerer som de skal
- Fjern løse gjenstander som kan sette seg fast

**Under arbeid**:
- Bruk riktig verneutstyr
- Ikke forstyrr andre som arbeider med maskiner
- Vær konsentrert om det du gjør
- Ta pauser ved tungt eller monotont arbeid

**Etter arbeid**:
- Slå av og sikre maskiner
- Rydd verktøy og materialer
- Rengjør arbeidsplassen
- Kast avfall sortert og forsvarlig`,
    },
    {
      id: 'handverk-design-vg1-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Risikovurdering for båndsaging',
      content: `**Arbeid: Sage trematerialer med båndsag**

**Identifiserte farer**:
1. Kuttskader på fingre fra sagbladet
2. Øyeskader fra sagflis
3. Hørselsskader fra støy
4. Innånding av trestøv

**Risikovurdering**:
- Kuttskader: Høy konsekvens, middels sannsynlighet = Høy risiko
- Øyeskader: Middels konsekvens, høy sannsynlighet = Høy risiko
- Hørselsskader: Lav konsekvens per gang, høy over tid = Middels risiko
- Trestøv: Middels konsekvens, høy sannsynlighet = Middels risiko

**Tiltak**:
1. Bruk skyvepinne for små arbeidsstykker, hold fingrene unna bladet
2. Bruk vernebriller under hele arbeidet
3. Bruk hørselsvern
4. Bruk støvmaske eller sørg for god avsug
5. Sjekk at bladspenning og styreskinner er riktig justert
6. Sag ikke i materialer med spiker eller skruer`,
    },
    {
      id: 'handverk-design-vg1-8-3-warning-1',
      type: 'warning',
      title: 'Viktig ved ulykker',
      content: `Ved ulykker: 1) Sikre skadestedet, 2) Varsle (ring 113 ved alvorlige skader), 3) Gi førstehjelp. Alle verksteder skal ha førstehjelpsutstyr tilgjengelig. Lær hvor det er og hvordan du bruker det. Meld alltid fra om ulykker og nestenulykker til ansvarlig person.`,
    },
    {
      id: 'handverk-design-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står HMS for, og hvorfor er det viktig i verkstedet?',
        solution: 'HMS står for Helse, Miljø og Sikkerhet. Det er viktig fordi det beskytter arbeidere mot skader og helseplager, sikrer et trygt arbeidsmiljø, forebygger ulykker, og er et lovkrav i henhold til Arbeidsmiljøloven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken type verneutstyr bør du alltid bruke ved sliping med vinkelsliper?',
        options: [
          {
            id: 'a',
            text: 'Bare hansker',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Vernebriller, hørselsvern og hansker',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Bare hørselsvern',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Ingen verneutstyr er nødvendig',
            isCorrect: false,
          },
        ],
        solution: 'Ved bruk av vinkelsliper bør du bruke vernebriller (mot gnister og partikler), hørselsvern (mot støy), og hansker (mot varme og vibrasjoner). I tillegg anbefales støvmaske og vernesko.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fire trinnene i en risikovurdering.',
        solution: 'De fire trinnene er: 1) Identifisere farer - finne ut hva som kan gå galt, 2) Vurdere risiko - hvor sannsynlig og alvorlig er farene, 3) Iverksette tiltak - finne måter å redusere risikoen på, 4) Dokumentere og følge opp - skrive ned vurderingen og kontrollere at tiltakene fungerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en maskin eller et verktøy du har brukt. Gjør en enkel risikovurdering.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke farer kan oppstå ved bruk av dette verktøyet?',
            solution: 'Varierer basert på verktøy - list opp mekaniske, kjemiske og fysiske farer.',
          },
          {
            label: 'b',
            task: 'Hvilke tiltak kan redusere risikoen?',
            solution: 'Beskrive verneutstyr, riktig teknikk og sikkerhetsprosedyrer.',
          },
        ],
        solution: 'En god risikovurdering identifiserer konkrete farer og foreslår praktiske tiltak for å redusere dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-3-summary',
      type: 'text',
      content: `**Oppsummering**

God HMS-praksis er avgjørende for trygt arbeid i verkstedet:
- Kjenn farene: mekaniske, kjemiske, fysiske og elektriske
- Bruk riktig verneutstyr: øyevern, hørselsvern, åndedrettsvern, hansker og vernesko
- Gjør risikovurdering: identifiser, vurder, tiltak, dokumenter
- Hold orden: rydd, rengjør, meld fra om feil
- Ved ulykker: sikre, varsle, gi førstehjelp

Husk: Sikkerhet er et felles ansvar, og det er alltid bedre å forebygge enn å reparere skader.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet - arbeidet med å sikre et trygt arbeidsmiljø' },
    { term: 'Risikovurdering', definition: 'Systematisk gjennomgang av farer, sannsynlighet og konsekvenser' },
    { term: 'Personlig verneutstyr (PVU)', definition: 'Utstyr som beskytter arbeideren mot skader' },
    { term: 'Arbeidsmiljøloven', definition: 'Norsk lov som regulerer arbeidsforhold og sikkerhet' },
    { term: 'Førstehjelp', definition: 'Umiddelbar hjelp ved skader eller plutselig sykdom' },
  ],
};

// ============================================================================
// Kapittel 8.4: Vedlikehold av maskiner og verktøy
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_4: TextbookChapter = {
  id: 'handverk-design-vg1-8-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.4',
  title: 'Vedlikehold av maskiner og verktøy',
  description: 'Vedlikeholdsrutiner, sikkerhetsbestemmelser og verktøypleie.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utføre enkelt vedlikehold av maskiner, verktøy og utstyr etter gjeldende sikkerhetsbestemmelser',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-4-intro',
      type: 'text',
      content: `Godt vedlikeholdte verktøy og maskiner er tryggere å bruke, gir bedre resultater og varer lenger. Som håndverker bør du kunne utføre enkelt vedlikehold selv, og vite når du skal overlate jobben til fagfolk. I dette kapittelet lærer du grunnleggende vedlikeholdsrutiner for vanlige verktøy og maskiner.`,
    },
    {
      id: 'handverk-design-vg1-8-4-def-1',
      type: 'definition',
      title: 'Forebyggende vedlikehold',
      content: `Forebyggende vedlikehold er planlagte tiltak som utføres regelmessig for å hindre at utstyr slites ut eller går i stykker. Dette inkluderer rengjøring, smøring, justering og utskifting av slitedeler.`,
    },
    {
      id: 'handverk-design-vg1-8-4-def-2',
      type: 'definition',
      title: 'Sikkerhetsbestemmelser',
      content: `Sikkerhetsbestemmelser er regler og prosedyrer som skal følges for å forhindre ulykker og skader ved bruk og vedlikehold av utstyr. Disse finnes i bruksanvisninger, forskrifter og interne rutiner.`,
    },
    {
      id: 'handverk-design-vg1-8-4-text-1',
      type: 'text',
      content: `**Grunnleggende vedlikeholdsprinsipper**

**Før vedlikehold**:
- Les alltid bruksanvisningen
- Koble fra strømmen på elektriske maskiner
- Vent til bevegelige deler har stoppet
- Bruk riktig verneutstyr
- Ha nødvendige verktøy og materialer klart

**Rengjøring**:
- Fjern støv og spon regelmessig
- Bruk trykkluft forsiktig (ikke mot lagre)
- Tørk av med tørr eller lett fuktig klut
- Ikke bruk vann på elektriske komponenter
- Rengjør filtre og avsug

**Smøring**:
- Bruk riktig type smøremiddel (olje/fett)
- Smør bevegelige deler som angitt
- Ikke oversmør - det tiltrekker støv
- Tørk av overflødig smøremiddel

**Kontroll**:
- Sjekk ledninger og støpsler for skader
- Kontroller at verneinnretninger fungerer
- Lytt etter unormale lyder
- Test nødstopp og sikkerhetsfunksjoner`,
    },
    {
      id: 'handverk-design-vg1-8-4-text-2',
      type: 'text',
      content: `**Vedlikehold av håndverktøy**

**Skjærende verktøy (stemjern, høvler, kniver)**:
- Hold skarpe - sløve verktøy er farligere
- Slip regelmessig på slipestein eller bryne
- Beskytt eggen under lagring
- Rengjør og olje etter bruk

**Sager (håndsager)**:
- Rengjør tenner for harpiks og spon
- Kontroller at håndtaket sitter godt
- Sett bort bladet beskyttet
- La fagfolk skjerpe sagblad

**Hammere og slagverktøy**:
- Sjekk at hodet sitter godt på skaftet
- Bytt skaft som er sprukket
- Hold slagflaten ren og jevn
- Bruk riktig hammer til jobben

**Skrutrekkere og nøkler**:
- Ikke bruk skrutrekkere med sprukket håndtak
- Kontroller at spisser ikke er slitt
- Hold nøkler rene og fettfrie
- Kast verktøy som er deformert`,
    },
    {
      id: 'handverk-design-vg1-8-4-text-3',
      type: 'text',
      content: `**Vedlikehold av elektriske maskiner**

**Boremaskin/skrutrekker**:
- Rengjør ventilasjonsåpninger
- Sjekk chuck og låsemekanisme
- Kontroller ledning og støpsel
- Smør chuck lett med olje

**Stikksag/sirkelsag**:
- Bytt sagblad når det blir sløvt
- Rengjør sagsko og styreskinner
- Kontroller at vernedeksel fungerer
- Tøm støvpose/koble til avsug

**Pussemaskin/sliper**:
- Bytt slipepapir når det er slitt
- Rengjør festemekanismen
- Tøm støvbeholder regelmessig
- Sjekk at platen er plan

**Generelt for elektriske verktøy**:
- Oppbevar tørt og støvfritt
- Ikke rull opp ledninger for stramt
- Service av fagfolk ved behov
- Følg produsentens vedlikeholdsintervaller`,
    },
    {
      id: 'handverk-design-vg1-8-4-text-4',
      type: 'text',
      content: `**Vedlikehold av stasjonære maskiner**

**Bordsirkelsag**:
- Rengjør bordet og holde det fritt for rust
- Sjekk at spaltekniven og vernedeksel er riktig justert
- Kontroller at sagbladet er skarpt og skadefritt
- Juster styreskinner og anlegg regelmessig

**Avretter/tykkelseshøvel**:
- Hold bord og valser rene
- Sjekk at knivene er skarpe og riktig justert
- Smør stillbare deler
- Kontroller avsug

**Båndsag**:
- Sjekk bladspenning og styring
- Kontroller at hjulene er rene
- Bytt blad ved tegn på slitasje
- Smør justeringsmekanismer

**Viktig**: Større reparasjoner og justeringer skal utføres av kvalifisert personell. Ikke prøv å reparere noe du er usikker på!`,
    },
    {
      id: 'handverk-design-vg1-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Vedlikeholdsrutine for boremaskin',
      content: `**Daglig vedlikehold etter bruk**:
1. Koble fra strømmen
2. Fjern bor fra chuck
3. Blås ut støv fra ventilasjonsåpninger med trykkluft
4. Tørk av maskinen med en tørr klut
5. Kontroller ledningen visuelt for skader
6. Sett maskinen på sin plass

**Ukentlig vedlikehold**:
1. Smør chucken lett med maskinolje
2. Test at chucken åpner og lukker jevnt
3. Kontroller at nøkkelen til chucken er tilgjengelig
4. Sjekk at støpselet ikke er skadet

**Ved behov**:
- Service av fagfolk hvis maskinen lager unormale lyder
- Bytt kullbørster når de er slitt (ofte synlig gjennom inspeksjonsluke)
- Reparer eller bytt skadet ledning`,
    },
    {
      id: 'handverk-design-vg1-8-4-tip-1',
      type: 'tip',
      title: 'Lag en vedlikeholdsplan',
      content: `Lag en enkel sjekkliste for vedlikehold av verktøyene du bruker ofte. Merk av når du sist utførte vedlikehold. Dette sikrer at ingenting glemmes og forlenger utstyrets levetid betydelig.`,
    },
    {
      id: 'handverk-design-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forebyggende vedlikehold, og hvorfor er det viktig?',
        solution: 'Forebyggende vedlikehold er planlagte tiltak som utføres regelmessig for å hindre at utstyr slites ut eller går i stykker. Det er viktig fordi det øker sikkerheten ved bruk, forlenger utstyrets levetid, gir bedre arbeidsresultater, reduserer risikoen for kostbare reparasjoner, og minimerer driftsstans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva bør du alltid gjøre FØR du utfører vedlikehold på en elektrisk maskin?',
        options: [
          {
            id: 'a',
            text: 'Teste at maskinen fungerer',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Koble fra strømmen og vente til bevegelige deler har stoppet',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Smøre alle bevegelige deler',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Fjerne alle verneutstyret fra maskinen',
            isCorrect: false,
          },
        ],
        solution: 'Du må alltid koble fra strømmen og vente til alle bevegelige deler har stoppet helt før du utfører vedlikehold. Dette forhindrer elektriske støt og skader fra roterende deler.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag en enkel vedlikeholdsplan for et stemjern.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du gjøre etter hver bruk?',
            solution: 'Tørke av støv og spon, beskytte eggen med hylse eller ved å legge det riktig i verktøykassen.',
          },
          {
            label: 'b',
            task: 'Hva bør du gjøre regelmessig?',
            solution: 'Slipe eggen på slipestein eller bryne når den blir sløv, olje metallet lett for å forhindre rust.',
          },
        ],
        solution: 'God vedlikeholdsplan inkluderer daglig rengjøring og beskyttelse av eggen, samt regelmessig sliping og oljevern.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-4-summary',
      type: 'text',
      content: `**Oppsummering**

Godt vedlikehold av verktøy og maskiner krever:
- Regelmessig rengjøring etter bruk
- Smøring av bevegelige deler med riktig smøremiddel
- Kontroll av sikkerhetsutstyr og elektriske komponenter
- Skarpe verktøy - sløve er farligere
- Korrekt oppbevaring som beskytter mot skader
- Overlat komplisert reparasjon til fagfolk

Husk: Et godt vedlikeholdt verktøy er en investering i sikkerhet, kvalitet og effektivitet.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Forebyggende vedlikehold', definition: 'Planlagte tiltak for å hindre slitasje og havari' },
    { term: 'Sikkerhetsbestemmelser', definition: 'Regler for sikker bruk og vedlikehold av utstyr' },
    { term: 'Smøring', definition: 'Tilførsel av olje eller fett for å redusere friksjon' },
    { term: 'Verneinnretning', definition: 'Utstyr på maskiner som beskytter mot skader' },
    { term: 'Slipedeler', definition: 'Deler som slites og må byttes regelmessig' },
  ],
};

// ============================================================================
// Kapittel 8.5: Håndverksfagene og arbeidslivet
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_5: TextbookChapter = {
  id: 'handverk-design-vg1-8-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.5',
  title: 'Håndverksfagene og arbeidslivet',
  description: 'Fagbrev, karriereveier og samarbeid mellom partene i arbeidslivet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for og vurdere hvordan partene i arbeidslivet samarbeider for å utvikle et bedre arbeidsliv',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-5-intro',
      type: 'text',
      content: `Håndverksfagene tilbyr mange spennende karrieremuligheter. Med fagbrev eller mesterutdanning kan du jobbe som ansatt, starte egen bedrift, eller videreutdanne deg. I dette kapittelet lærer du om utdanningsveier, arbeidslivets organisering og hvordan arbeidstakere og arbeidsgivere samarbeider.`,
    },
    {
      id: 'handverk-design-vg1-8-5-def-1',
      type: 'definition',
      title: 'Fagbrev',
      content: `Fagbrev er et offentlig dokument som bekrefter at du har bestått fag- eller svenneprøven i et yrke. Det er en formell godkjenning av yrkeskompetansen din og gir deg rett til å bruke yrkestittel som fagarbeider.`,
    },
    {
      id: 'handverk-design-vg1-8-5-def-2',
      type: 'definition',
      title: 'Trepartssamarbeidet',
      content: `Trepartssamarbeidet er samarbeidet mellom staten, arbeidstakerorganisasjonene (f.eks. LO, YS) og arbeidsgiverorganisasjonene (f.eks. NHO, Virke). Dette samarbeidet er sentralt i den norske arbeidslivsmodellen og bidrar til å utvikle lover, avtaler og politikk.`,
    },
    {
      id: 'handverk-design-vg1-8-5-text-1',
      type: 'text',
      content: `**Utdanningsveier i håndverksfag**

**2+2-modellen (vanligst)**:
- 2 år på videregående skole (VG1 + VG2)
- 2 år læretid i bedrift
- Avslutter med fag- eller svenneprøve

**1+3-modellen**:
- 1 år på skole
- 3 år læretid i bedrift

**Praksiskandidat**:
- For de med lang arbeidserfaring (5 år)
- Kan gå opp til fagprøve uten formell utdanning

**Videre utdanning etter fagbrev**:
- **Mesterutdanning**: Gir rett til tittelen mester og kompetanse til å drive egen bedrift
- **Fagskole**: Videreutdanning innen spesialområder
- **Høyere utdanning**: Fagbrev + påbygg gir studiekompetanse
- **Bedriftslederutdanning**: For de som vil starte egen virksomhet`,
    },
    {
      id: 'handverk-design-vg1-8-5-text-2',
      type: 'text',
      content: `**Aktuelle håndverksfag**

**Trearbeidsfag**:
- Møbelsnekker
- Tømrer
- Treskjærer
- Båtbygger

**Metallfag**:
- Smed
- Gullsmed/sølvsmed
- Industrimekaniker
- Platearbeider

**Tekstilfag**:
- Skredder
- Bunadstilvirker
- Møbeltapetserer
- Seilmaker

**Keramikk og glass**:
- Keramiker
- Glassmester

**Grafiske fag**:
- Bokbinder
- Grafiker

De fleste av disse fagene fører til fagbrev, og noen har egen mesterutdanning.`,
    },
    {
      id: 'handverk-design-vg1-8-5-text-3',
      type: 'text',
      content: `**Partene i arbeidslivet**

**Arbeidstakerorganisasjoner**:
- **LO (Landsorganisasjonen)**: Norges største hovedsammenslutning
- **YS (Yrkesorganisasjonenes Sentralforbund)**: Partipolitisk uavhengig
- **Unio**: Organiserer høyere utdannede
- **Akademikerne**: For de med høyere akademisk utdanning

**Arbeidsgiverorganisasjoner**:
- **NHO (Næringslivets Hovedorganisasjon)**: Største private arbeidsgiverorganisasjon
- **Virke**: Handels- og tjenestesektoren
- **KS**: Kommuner og fylkeskommuner
- **Spekter**: Helse og kultur

**Statens rolle**:
- Fastsetter lover og forskrifter (Arbeidsmiljøloven, Ferieloven)
- Deltar i forhandlinger
- Tilrettelegger for samarbeid`,
    },
    {
      id: 'handverk-design-vg1-8-5-text-4',
      type: 'text',
      content: `**Samarbeid for et bedre arbeidsliv**

**Tariffavtaler**:
- Avtaler mellom arbeidstaker- og arbeidsgiverorganisasjoner
- Regulerer lønn, arbeidstid, ferie og andre arbeidsvilkår
- Reforhandles vanligvis hvert annet år (tariffoppgjør)

**Hovedavtalen**:
- Grunnlaget for samarbeid mellom partene
- Regulerer medbestemmelse og tillitsvalgtes rolle
- Kalles "arbeidslivets grunnlov"

**Arbeidsmiljøutvalg (AMU)**:
- Finnes i bedrifter med minst 50 ansatte
- Likt antall representanter fra ledelse og ansatte
- Arbeider med helse, miljø og sikkerhet

**Tillitsvalgte**:
- Valgt av de ansatte
- Representerer arbeidstakerne overfor ledelsen
- Viktig bindeledd i samarbeidet`,
    },
    {
      id: 'handverk-design-vg1-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Veien til å bli møbelsnekker',
      content: `**Emma vil bli møbelsnekker - slik kan veien se ut:**

**År 1-2: Videregående skole**
- VG1 Håndverk, design og produktutvikling
- VG2 Møbel og trevare

**År 3-4: Lærling i møbelbedrift**
- Praktisk opplæring under veiledning
- Lærer fagspesifikke teknikker
- Følger opplæringsplan

**Fagprøve**
- Praktisk prøve med planlegging, gjennomføring og dokumentasjon
- Vurderes av prøvenemd
- Får fagbrev ved bestått

**Videre muligheter**
- Jobb som møbelsnekker i bedrift
- Mesterutdanning (2 år deltid)
- Starte egen bedrift
- Spesialisering (f.eks. restaurering)`,
    },
    {
      id: 'handverk-design-vg1-8-5-tip-1',
      type: 'tip',
      title: 'Finn din læreplasss',
      content: `Bruk vilbli.no for å finne oversikt over utdanningsprogrammer og lærefag. Ta kontakt med opplæringskontoret i ditt fylke for hjelp til å finne læreplass. Jobbskygging og utplassering kan gi deg kontakter i bransjen.`,
    },
    {
      id: 'handverk-design-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv 2+2-modellen for yrkesfaglig utdanning.',
        solution: '2+2-modellen innebærer 2 år på videregående skole (VG1 og VG2), etterfulgt av 2 år som lærling i bedrift. Utdanningen avsluttes med fag- eller svenneprøve, og ved bestått får du fagbrev.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er trepartssamarbeidet?',
        options: [
          {
            id: 'a',
            text: 'Samarbeid mellom tre forskjellige bedrifter',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Samarbeid mellom staten, arbeidstakerorganisasjoner og arbeidsgiverorganisasjoner',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Samarbeid mellom tre ulike fagforeninger',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Samarbeid mellom skole, elev og foreldre',
            isCorrect: false,
          },
        ],
        solution: 'Trepartssamarbeidet er samarbeidet mellom staten, arbeidstakerorganisasjoner (som LO) og arbeidsgiverorganisasjoner (som NHO). Dette er sentralt i den norske arbeidslivsmodellen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en tariffavtale, og hva regulerer den?',
        solution: 'En tariffavtale er en avtale mellom arbeidstaker- og arbeidsgiverorganisasjoner som regulerer lønns- og arbeidsvilkår. Den dekker typisk lønn, arbeidstid, ferie, pensjon og andre rettigheter. Tariffavtaler reforhandles vanligvis hvert annet år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et håndverksfag som interesserer deg. Undersøk og beskriv utdanningsveien.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken VG2-linje fører til dette faget?',
            solution: 'Varierer basert på valgt fag - finn informasjon på vilbli.no.',
          },
          {
            label: 'b',
            task: 'Hva kan du jobbe med etter fagbrev?',
            solution: 'Beskriv typiske arbeidsplasser og arbeidsoppgaver for det valgte faget.',
          },
        ],
        solution: 'En god besvarelse viser at eleven har undersøkt utdanningsveien og karrieremulighetene for det valgte faget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-5-summary',
      type: 'text',
      content: `**Oppsummering**

Håndverksfagene tilbyr solide karrieremuligheter:
- 2+2-modellen: 2 år skole + 2 år lære = fagbrev
- Videre muligheter: Mesterutdanning, fagskole, høyere utdanning
- Partene i arbeidslivet samarbeider gjennom trepartssamarbeidet
- Tariffavtaler sikrer gode lønns- og arbeidsvilkår
- Tillitsvalgte og arbeidsmiljøutvalg bidrar til medbestemmelse

Med fagbrev har du et solid grunnlag for en lang og givende karriere i håndverksfag.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fagbrev', definition: 'Offentlig dokument som bekrefter bestått fagprøve' },
    { term: 'Trepartssamarbeidet', definition: 'Samarbeid mellom stat, arbeidstakere og arbeidsgivere' },
    { term: 'Tariffavtale', definition: 'Avtale om lønns- og arbeidsvilkår mellom partene' },
    { term: '2+2-modellen', definition: '2 år skole + 2 år læretid = fagbrev' },
    { term: 'Mesterutdanning', definition: 'Videreutdanning som gir rett til mestertittel' },
    { term: 'Tillitsvalgt', definition: 'Ansatt som representerer arbeidstakerne' },
  ],
};

// ============================================================================
// Kapittel 8.6: Lokale håndverksfag og regionale tradisjoner
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_6: TextbookChapter = {
  id: 'handverk-design-vg1-8-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.6',
  title: 'Lokale håndverksfag og regionale tradisjoner',
  description: 'Nærmiljø, lokal ressursbruk og regionale håndverkstradisjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og formidle hvordan etterspørsel, kultur, tradisjon, trender og bærekraft har betydning for håndverksfagene lokalt og regionalt',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-6-intro',
      type: 'text',
      content: `Norge har rike håndverkstradisjoner som varierer fra region til region. Lokale ressurser, klima og kulturelle tradisjoner har formet håndverkene i ulike deler av landet. I dette kapittelet utforsker vi hvordan lokale forhold påvirker håndverksfagene og hvorfor det er viktig å ta vare på disse tradisjonene.`,
    },
    {
      id: 'handverk-design-vg1-8-6-def-1',
      type: 'definition',
      title: 'Håndverkstradisjon',
      content: `Håndverkstradisjon er kunnskap, teknikker og estetiske uttrykk som er overført fra generasjon til generasjon innen et håndverksfag. Tradisjonene er formet av lokale ressurser, behov og kulturelle verdier.`,
    },
    {
      id: 'handverk-design-vg1-8-6-def-2',
      type: 'definition',
      title: 'Immateriell kulturarv',
      content: `Immateriell kulturarv er tradisjoner, kunnskaper og ferdigheter som overføres mellom mennesker og generasjoner. Håndverkstradisjoner er en viktig del av den immaterielle kulturarven.`,
    },
    {
      id: 'handverk-design-vg1-8-6-text-1',
      type: 'text',
      content: `**Lokale ressurser former håndverket**

**Tre og skog**:
- Norge har rik tilgang på tre, spesielt furu og gran
- Trearbeid er derfor sentralt i norsk håndverkstradisjon
- Regionalt: Hardere tresorter i sør, mer bartre i nord

**Ull og tekstil**:
- Saueholdet varierer med geografi
- Kystområder: Seil- og notbinding
- Fjellbygder: Ullproduksjon og strikking

**Metall og mineralressurser**:
- Kobber- og jerngruver har gitt grunnlag for smiing
- Sølvverkene ga opphav til sølvsmedtradisjoner
- Regionale variasjoner i metallhåndverk

**Leire og stein**:
- Keramikktradisjoner der det finnes god leire
- Steinhoggertradisjoner i områder med egnet stein
- Skifer til takstein i visse regioner`,
    },
    {
      id: 'handverk-design-vg1-8-6-text-2',
      type: 'text',
      content: `**Regionale håndverkstradisjoner i Norge**

**Vestlandet**:
- Båtbygging og trebåter (færing, oselvar)
- Hardangersøm og hardangertrenering
- Rosemaling (særlig Telemark og Hallingdal)
- Knivmaking (Hardanger)

**Østlandet**:
- Rosemaling (Hallingdal, Telemark)
- Treskjæring og stavkirketradisjon
- Smijern og låsesmedarbeid
- Møbelsnekring

**Trøndelag**:
- Smitradisjoner (Røros)
- Skinn- og lærarbeid
- Trearbeid og byggeskikk

**Nord-Norge**:
- Samisk duodji (håndverk)
- Båtbygging tilpasset arktiske forhold
- Skinn- og pelsberedning
- Knivmaking (samisk tradisjon)`,
    },
    {
      id: 'handverk-design-vg1-8-6-text-3',
      type: 'text',
      content: `**Samisk duodji - et eksempel på levende tradisjon**

Duodji er samisk tradisjonshåndverk som har utviklet seg gjennom tusenvis av år.

**Materialer**:
- Reinskinn og -horn
- Tre (bjørk, vier)
- Tinn og sølv
- Ull og garn

**Typiske produkter**:
- Kniver med skaft av reinhorn
- Kofter og luer
- Skaller (fottøy)
- Bruksgjenstander i tre

**Duodji i dag**:
- Aktiv bevaring og utvikling av tradisjonene
- Duodjiskole i Kautokeino
- Kombinasjon av tradisjon og moderne design
- UNESCO immateriell kulturarv-status

Duodji viser hvordan håndverkstradisjoner kan holdes levende og utvikles videre.`,
    },
    {
      id: 'handverk-design-vg1-8-6-text-4',
      type: 'text',
      content: `**Bevaring og formidling av tradisjoner**

**Organisasjoner og institusjoner**:
- **Norges Husflidslag**: Bevarer og formidler tradisjonelt håndverk
- **Norsk Håndverksinstitutt**: Dokumenterer og forsker på håndverk
- **Museene**: Bevarer gjenstander og formidler kunnskap
- **Kulturrådet**: Støtter prosjekter innen kulturarv

**Utfordringer**:
- Færre mestere med tradisjonell kunnskap
- Konkurranse fra industriell produksjon
- Mangel på lærlinger i noen fag
- Økonomiske utfordringer for håndverkere

**Muligheter**:
- Økt interesse for autentisitet og kvalitet
- Bærekraftstrenden favoriserer håndverk
- Turisme etterspør lokale produkter
- Digitale plattformer for markedsføring og salg`,
    },
    {
      id: 'handverk-design-vg1-8-6-example-1',
      type: 'example',
      title: 'Eksempel: Rosemaling - fra tradisjon til nåtid',
      content: `**Rosemaling som levende tradisjon**

**Historisk bakgrunn**:
- Utviklet seg på 1700-tallet
- Ulike stiler i forskjellige bygder (Hallingdal, Telemark, Rogaland)
- Brukt til dekorasjon av møbler, vegger og bruksgjenstander

**Kjennetegn**:
- Blomstermotiver med stiliserte roser og ranker
- Karakteristisk penselføring og fargepalet
- Regionale forskjeller i stil og uttrykk

**I dag**:
- Rosemalerlaug holder tradisjonene levende
- Kurs og opplæring i tradisjonelle teknikker
- Moderne tilpasninger (nye farger, nye underlag)
- Populært både i Norge og blant norskamerikanere

Rosemalingen viser hvordan en tradisjon kan bevares samtidig som den utvikles videre.`,
    },
    {
      id: 'handverk-design-vg1-8-6-tip-1',
      type: 'tip',
      title: 'Utforsk ditt lokalområde',
      content: `Besøk lokalmuseet, husflidsforeningen eller eldre håndverkere i ditt område. Spør om tradisjonelle teknikker og materialer som er typiske for regionen din. Du kan finne mye spennende inspirasjon rett i nærheten!`,
    },
    {
      id: 'handverk-design-vg1-8-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan lokale ressurser har påvirket håndverkstradisjonene i Norge.',
        solution: 'Lokale ressurser har formet håndverkene ved at håndverkere brukte det som var tilgjengelig i området. Tre fra skogene ga grunnlag for trearbeid, ull fra sauer ble til tekstiler, lokale mineraler og metaller ga opphav til smitradisjoner, og god leire muliggjorde keramikk. Ulike regioner utviklet derfor forskjellige tradisjoner basert på sine ressurser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er duodji?',
        options: [
          {
            id: 'a',
            text: 'En type rosemaling fra Telemark',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Samisk tradisjonshåndverk',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'En båtbyggertradisjon fra Vestlandet',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'En type metallarbeid fra Røros',
            isCorrect: false,
          },
        ],
        solution: 'Duodji er samisk tradisjonshåndverk som har utviklet seg gjennom tusenvis av år. Det omfatter arbeid med materialer som reinskinn, -horn, tre, tinn og ull.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Undersøk håndverkstradisjoner i ditt lokalområde.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke tradisjonelle håndverk finner du i din region?',
            solution: 'Varierer basert på region - undersøk lokalt museum, husflidsforening eller historiske kilder.',
          },
          {
            label: 'b',
            task: 'Hvilke lokale ressurser har disse håndverkene vært basert på?',
            solution: 'Beskriv hvilke naturressurser (tre, ull, metall, stein, leire) som finnes lokalt og hvordan de er brukt.',
          },
        ],
        solution: 'En god besvarelse viser at eleven har undersøkt lokale tradisjoner og forstår sammenhengen mellom ressurser og håndverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter hvorfor det er viktig å bevare håndverkstradisjoner.',
        solution: 'Håndverkstradisjoner bør bevares fordi de: representerer verdifull kunnskap utviklet over generasjoner, er en del av vår kulturelle identitet, inneholder bærekraftige produksjonsmetoder, gir grunnlag for kvalitetsprodukter, skaper arbeidsplasser og attraktive lokalsamfunn, og kan inspirere moderne design og innovasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-6-summary',
      type: 'text',
      content: `**Oppsummering**

Lokale håndverkstradisjoner er formet av:
- Tilgjengelige naturressurser (tre, ull, metall, leire)
- Regionale behov og klima
- Kulturelle tradisjoner og estetikk

Norge har rike regionale variasjoner:
- Vestlandet: Båtbygging, hardangersøm
- Østlandet: Rosemaling, treskjæring
- Nord-Norge: Samisk duodji, knivmaking

Bevaring av tradisjoner er viktig for kulturarv, bærekraft og lokal identitet. Kombinasjonen av tradisjonell kunnskap og moderne uttrykk holder håndverkene levende.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Håndverkstradisjon', definition: 'Kunnskap og teknikker overført fra generasjon til generasjon' },
    { term: 'Immateriell kulturarv', definition: 'Tradisjoner og ferdigheter som overføres mellom mennesker' },
    { term: 'Duodji', definition: 'Samisk tradisjonshåndverk' },
    { term: 'Rosemaling', definition: 'Norsk dekorasjonskunst med blomstermotiver' },
    { term: 'Lokale ressurser', definition: 'Naturressurser tilgjengelig i et bestemt område' },
  ],
};

// ============================================================================
// Kapittel 8.7: Trender, innovasjon og entreprenørskap
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8_7: TextbookChapter = {
  id: 'handverk-design-vg1-8-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8.7',
  title: 'Trender, innovasjon og entreprenørskap',
  description: 'Forretningsidé, markedsforståelse og innovasjon i håndverksfagene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og formidle hvordan etterspørsel, kultur, tradisjon, trender og bærekraft har betydning for håndverksfagene lokalt og regionalt',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-7-intro',
      type: 'text',
      content: `Håndverksfagene er i stadig utvikling. Nye trender, teknologier og forbrukerbehov skaper muligheter for innovasjon og entreprenørskap. I dette kapittelet lærer du å følge med på trender, utvikle ideer og forstå grunnleggende om å starte egen virksomhet innen håndverk.`,
    },
    {
      id: 'handverk-design-vg1-8-7-def-1',
      type: 'definition',
      title: 'Trend',
      content: `En trend er en retning eller tendens i samfunnet som påvirker smak, preferanser og forbrukermønstre over tid. Trender kan være kortvarige (mote) eller langsiktige (megatrender som bærekraft).`,
    },
    {
      id: 'handverk-design-vg1-8-7-def-2',
      type: 'definition',
      title: 'Entreprenørskap',
      content: `Entreprenørskap er evnen til å se muligheter og omsette ideer til handling. En entreprenør starter og driver virksomheter, tar risiko og skaper verdier. Intraprenørskap er entreprenørskap innenfor en eksisterende organisasjon.`,
    },
    {
      id: 'handverk-design-vg1-8-7-def-3',
      type: 'definition',
      title: 'Innovasjon',
      content: `Innovasjon er å skape noe nytt som har verdi - et nytt produkt, en ny tjeneste, en ny prosess eller en ny måte å organisere på. Innovasjon kan være radikal (helt ny) eller inkrementell (forbedring av eksisterende).`,
    },
    {
      id: 'handverk-design-vg1-8-7-text-1',
      type: 'text',
      content: `**Aktuelle trender i håndverksfagene**

**Bærekraft og miljø**:
- Økt etterspørsel etter miljøvennlige produkter
- Gjenbruk og upcycling som designkonsept
- Lokalt produsert og kortreist
- Reparasjon fremfor nykjøp

**Autentisitet og kvalitet**:
- Ønske om unike, håndlagede produkter
- Motreaksjon mot masseproduksjon
- Verdsetting av håndverk og historiefortelling
- "Made in Norway" som kvalitetsmerke

**Personalisering og skreddersøm**:
- Kunder vil ha tilpassede produkter
- Mulighet for medbestemmelse i design
- Småskalaproduksjon og spesialprodukter

**Digitalisering**:
- Netthandel og sosiale medier for markedsføring
- Digitale verktøy i produksjonen (CNC, 3D-print)
- Kombinasjon av tradisjonelt håndverk og ny teknologi`,
    },
    {
      id: 'handverk-design-vg1-8-7-text-2',
      type: 'text',
      content: `**Fra idé til forretning**

**Steg 1: Finn din nisje**
- Hva er du god på og brenner for?
- Hva trenger markedet?
- Hvor er det rom for noe nytt?
- Hva gjør deg unik?

**Steg 2: Utvikle forretningsidéen**
- Hva skal du tilby? (produkt/tjeneste)
- Hvem er målgruppen?
- Hvordan skal du tjene penger?
- Hva er din unike verdi?

**Steg 3: Test idéen**
- Lag prototyper
- Få tilbakemeldinger fra potensielle kunder
- Juster og forbedre
- Regn på kostnader og pris

**Steg 4: Start virksomheten**
- Velg organisasjonsform (enkeltpersonforetak, AS)
- Registrer i Brønnøysundregistrene
- Skaff nødvendige tillatelser
- Planlegg markedsføring og salg`,
    },
    {
      id: 'handverk-design-vg1-8-7-text-3',
      type: 'text',
      content: `**Markedsforståelse**

**Kjenn dine kunder**:
- Hvem er de? (alder, interesser, økonomi)
- Hva trenger og ønsker de?
- Hvor finner de produkter som dine?
- Hva er de villige til å betale?

**Analyser konkurrenter**:
- Hvem selger lignende produkter?
- Hva er deres styrker og svakheter?
- Hva er prisene i markedet?
- Hvordan kan du skille deg ut?

**Posisjonering**:
- Lav pris eller høy kvalitet?
- Bredt utvalg eller spesialisering?
- Lokalt marked eller nasjonalt/internasjonalt?
- Hvilken historie forteller produktene dine?

**Markedsføringskanaler**:
- Sosiale medier (Instagram, Facebook)
- Egen nettside/nettbutikk
- Markeder og messer
- Samarbeid med butikker
- Direkte kundekontakt`,
    },
    {
      id: 'handverk-design-vg1-8-7-text-4',
      type: 'text',
      content: `**Innovasjon i praksis**

**Kilder til innovasjon**:
- Nye materialer og teknikker
- Kundebehov og tilbakemeldinger
- Trender i samfunnet
- Kombinasjon av tradisjon og nytenkning
- Teknologisk utvikling

**Innovasjonsprosessen**:
1. **Identifiser muligheter**: Hva kan forbedres?
2. **Generer idéer**: Brainstorm, skisser, eksperimenter
3. **Velg de beste**: Vurder gjennomførbarhet og potensial
4. **Utvikle**: Lag prototyper og test
5. **Implementer**: Sett i produksjon eller tjeneste

**Kreative metoder**:
- Brainstorming uten sensur
- Kombiner ulike elementer på nye måter
- Still spørsmålet "hva om...?"
- Hent inspirasjon fra andre bransjer
- Samarbeid med andre`,
    },
    {
      id: 'handverk-design-vg1-8-7-example-1',
      type: 'example',
      title: 'Eksempel: En ung møbelsnekker starter bedrift',
      content: `**Case: Olea starter "Olea Snekkerverksted"**

**Bakgrunn**:
Olea (25) har fagbrev som møbelsnekker og har jobbet i en møbelfabrikk i to år. Hun ser en mulighet i markedet for skreddersydde møbler i bærekraftige materialer.

**Forretningsidé**:
- Tilby håndlagede møbler i lokalt tre
- Skreddersøm etter kundens ønsker
- Fokus på reparasjon og restaurering
- Fortelle historien om materialer og håndverk

**Målgruppe**:
- Bevisste forbrukere som verdsetter kvalitet
- Familier som vil ha unike møbler
- Bedrifter som ønsker bærekraftig innredning

**Markedsføring**:
- Instagram med bilder fra verkstedet
- Deltakelse på designmarkeder
- Samarbeid med interiørarkitekter
- Lokal pressedekning

**Resultat etter ett år**:
- 30 solgte møbler
- Bygget opp kundebase og rykte
- Lønnsomhet fra måned 8
- Planlegger å ansette lærling`,
    },
    {
      id: 'handverk-design-vg1-8-7-example-2',
      type: 'example',
      title: 'Eksempel: Innovasjon - tradisjonelt håndverk møter teknologi',
      content: `**Kombinasjon av rosemaling og digital design**

En ung rosemaler kombinerer tradisjonell teknikk med digital teknologi:

**Tradisjonelt**:
- Håndmalt rosemaling på møbler
- Klassiske teknikker og motiver
- Personlig tilpasning for hver kunde

**Digitalt**:
- Skanner sine design og selger som digitale filer
- Kunder kan få mønstrene laserkuttet i tre
- Tilbyr digitale kurs i rosemaling online
- Bruker 3D-modellering for å vise kunder hvordan møbler vil se ut

**Resultat**:
- Flere inntektsstrømmer
- Når kunder globalt
- Bevarer og sprer tradisjonen
- Kombinerer gammelt og nytt på kreativ måte`,
    },
    {
      id: 'handverk-design-vg1-8-7-tip-1',
      type: 'tip',
      title: 'Start smått',
      content: `Du trenger ikke starte stort. Begynn med å selge til venner og familie, på lokale markeder eller gjennom sosiale medier. Test idéen din, lær av tilbakemeldinger, og skaler opp gradvis når du ser at det fungerer.`,
    },
    {
      id: 'handverk-design-vg1-8-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fire aktuelle trender som påvirker håndverksfagene, og forklar hvordan de skaper muligheter.',
        solution: 'Fire aktuelle trender er: 1) Bærekraft - økt etterspørsel etter miljøvennlige produkter gir muligheter for håndverkere som bruker lokale, fornybare materialer. 2) Autentisitet - kunder ønsker unike, håndlagede produkter fremfor masseprodusert. 3) Personalisering - ønske om skreddersydde produkter passer perfekt for håndverkeres fleksibilitet. 4) Digitalisering - nye kanaler for markedsføring og salg, samt digitale verktøy i produksjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er det første steget når du skal utvikle en forretningsidé?',
        options: [
          {
            id: 'a',
            text: 'Registrere bedriften i Brønnøysundregistrene',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Finne din nisje - hva du er god på og hva markedet trenger',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Lage en stor markedsføringskampanje',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Låne penger i banken',
            isCorrect: false,
          },
        ],
        solution: 'Det første steget er å finne din nisje - identifisere hva du er god på, hva du brenner for, hva markedet trenger, og hva som gjør deg unik. Dette danner grunnlaget for resten av forretningsutviklingen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-8-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva markedsforståelse er, og hvorfor det er viktig for en håndverker som vil starte egen bedrift.',
        solution: 'Markedsforståelse handler om å kjenne kundene dine (hvem de er, hva de trenger, hva de vil betale), analysere konkurrenter (hvem selger lignende produkter, hva er deres styrker), og posisjonere seg i markedet. Det er viktig fordi det hjelper deg å tilby riktige produkter til riktig pris til de riktige kundene, skille deg fra konkurrenter, og markedsføre effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Utvikle en enkel forretningsidé innen håndverk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva vil du tilby? Beskriv produktet eller tjenesten.',
            solution: 'Beskriv et konkret produkt eller tjeneste du kunne tenke deg å tilby.',
          },
          {
            label: 'b',
            task: 'Hvem er målgruppen din?',
            solution: 'Beskriv hvem du vil selge til - alder, interesser, behov.',
          },
          {
            label: 'c',
            task: 'Hvordan vil du markedsføre og selge?',
            solution: 'Beskriv kanaler som sosiale medier, markeder, butikker, nettbutikk.',
          },
        ],
        solution: 'En god forretningsidé har et klart produkt/tjeneste, en definert målgruppe, og en plan for hvordan du skal nå kundene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi et eksempel på hvordan et tradisjonelt håndverk kan kombineres med moderne teknologi eller nye materialer for å skape innovasjon.',
        solution: 'Eksempler kan inkludere: rosemaling kombinert med laserkutting, tradisjonell keramikk med 3D-printede former, strikkedesign skapt med digital programvare, møbelsnekring med CNC-maskinering av komplekse deler, eller salgav håndlagede produkter via egen nettbutikk med digital historiefortelling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-7-summary',
      type: 'text',
      content: `**Oppsummering**

Trender, innovasjon og entreprenørskap åpner muligheter for håndverkere:

**Trender som skaper muligheter**:
- Bærekraft og miljøbevissthet
- Autentisitet og kvalitet
- Personalisering og skreddersøm
- Digitalisering

**Veien til egen bedrift**:
- Finn din nisje
- Utvikle forretningsidéen
- Test og juster
- Start og lær underveis

**Nøkler til suksess**:
- God markedsforståelse
- Evne til innovasjon
- Kombinere tradisjon med nytenkning
- Bruk digitale verktøy for å nå kunder

Med fagkunnskap, kreativitet og entreprenørånd kan du skape en karriere på dine egne premisser!`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Trend', definition: 'Retning i samfunnet som påvirker smak og forbrukermønstre' },
    { term: 'Entreprenørskap', definition: 'Evnen til å se muligheter og omsette ideer til handling' },
    { term: 'Innovasjon', definition: 'Å skape noe nytt som har verdi' },
    { term: 'Forretningsidé', definition: 'Beskrivelse av hva du tilbyr, til hvem, og hvordan du tjener penger' },
    { term: 'Markedsforståelse', definition: 'Kunnskap om kunder, konkurrenter og markedsforhold' },
    { term: 'Nisje', definition: 'Et avgrenset markedssegment med spesifikke behov' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 8
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HANDVERK_DESIGN_VG1_8_1,
  CHAPTER_HANDVERK_DESIGN_VG1_8_2,
  CHAPTER_HANDVERK_DESIGN_VG1_8_3,
  CHAPTER_HANDVERK_DESIGN_VG1_8_4,
  CHAPTER_HANDVERK_DESIGN_VG1_8_5,
  CHAPTER_HANDVERK_DESIGN_VG1_8_6,
  CHAPTER_HANDVERK_DESIGN_VG1_8_7,
];
