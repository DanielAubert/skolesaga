/**
 * Håndverk, design og produktutvikling VG1 - Del 4: Digital teknologi
 *
 * Dekker kapittel 4.1-4.6 om digitale verktøy og teknikker i håndverk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Introduksjon til digitale designverktøy
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4_1: TextbookChapter = {
  id: 'handverk-design-vg1-4-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4.1',
  title: 'Introduksjon til digitale designverktøy',
  description: 'Grunnleggende innføring i digitale verktøy for design og produktutvikling. Elevene lærer å bruke programvare for skissering, tegning og enkel 3D-modellering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utarbeide og videreutvikle skisser og arbeidstegninger manuelt og ved hjelp av digitale ressurser',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-1-intro',
      type: 'text',
      content: `Digitale verktøy har revolusjonert måten vi arbeider med design og håndverk på. Fra enkle skisseprogrammer til avansert 3D-programvare finnes det verktøy som kan hjelpe deg i alle faser av designprosessen. I dette kapittelet får du en introduksjon til de viktigste digitale verktøyene og lærer hvordan du kan bruke dem til å visualisere og utvikle ideene dine.`,
    },
    {
      id: 'handverk-design-vg1-4-1-def-1',
      type: 'definition',
      title: 'Digitale designverktøy',
      content: `Digitale designverktøy er programvare som brukes til å skape, visualisere og bearbeide design på en datamaskin eller nettbrett. Dette inkluderer alt fra enkle tegneapper til avanserte 3D-modelleringsprogrammer.`,
    },
    {
      id: 'handverk-design-vg1-4-1-text-1',
      type: 'text',
      content: `**Hvorfor bruke digitale verktøy?**

Digitale verktøy gir deg mange fordeler i designarbeidet:

**Fleksibilitet**:
- Du kan enkelt gjøre endringer uten å starte på nytt
- Lagre flere versjoner av samme design
- Prøve ut ulike farger, materialer og størrelser raskt

**Presisjon**:
- Eksakte mål og proporsjoner
- Perfekte linjer og former
- Mulighet for å zoome inn på detaljer

**Deling og samarbeid**:
- Send filer digitalt til kunder eller samarbeidspartnere
- Arbeid på samme prosjekt fra ulike steder
- Få tilbakemeldinger direkte i dokumentet

**Dokumentasjon**:
- Automatisk lagring av prosessen
- Enkelt å lage profesjonelle presentasjoner
- Digital arkivering av alle prosjekter`,
    },
    {
      id: 'handverk-design-vg1-4-1-def-2',
      type: 'definition',
      title: 'Vektorgrafikk',
      content: `Vektorgrafikk er digitale bilder som er bygget opp av matematiske formler i stedet for piksler. Vektorbilder kan skaleres uendelig uten å miste kvalitet, noe som gjør dem ideelle for logoer, illustrasjoner og tekniske tegninger.`,
    },
    {
      id: 'handverk-design-vg1-4-1-text-2',
      type: 'text',
      content: `**Typer designprogramvare**

**Skisse- og tegneapper**:
- Procreate (iPad) - naturlig tegnefølelse
- Adobe Fresco - kombinerer vektor og raster
- Concepts - fleksibel skisseapp
- Autodesk SketchBook - gratis og brukervennlig

**2D-design og illustrasjon**:
- Adobe Illustrator - industristandardfor vektorgrafikk
- Affinity Designer - rimelig alternativ
- Inkscape - gratis og åpen kildekode
- Canva - nettbasert, enkel å bruke

**3D-modellering for nybegynnere**:
- Tinkercad - gratis, nettbasert, perfekt for å starte
- SketchUp Free - intuitiv grenseflate
- Blender - gratis, kraftig, men brattere læringskurve
- Fusion 360 - gratis for studenter, kombinerer design og teknikk`,
    },
    {
      id: 'handverk-design-vg1-4-1-text-3',
      type: 'text',
      content: `**Fra manuell til digital skisse**

Mange designere kombinerer manuell og digital skissering:

**Arbeidsflyten**:
1. Start med raske idéskisser for hånd
2. Skann eller fotografer de beste skissene
3. Importer til digitalt program
4. Videreutvikle og rendere digitalt
5. Eksporter til produksjon eller presentasjon

**Tips for digital skissering**:
- Bruk lag (layers) for å organisere arbeidet
- Lær hurtigtaster for effektivitet
- Start med enkle former og bygg opp kompleksitet
- Lagre regelmessig og ha backup

**Verktøy for digitalisering**:
- Tegnebrett (Wacom, Huion)
- iPad med Apple Pencil
- Skanner for å digitalisere håndtegninger
- Mobilkamera med gode lysforhold`,
    },
    {
      id: 'handverk-design-vg1-4-1-def-3',
      type: 'definition',
      title: 'Lag (layers)',
      content: `Lag er som gjennomsiktige ark stablet oppå hverandre i et digitalt program. Du kan tegne på hvert lag separat, noe som gjør det enkelt å redigere deler av tegningen uten å påvirke resten.`,
    },
    {
      id: 'handverk-design-vg1-4-1-text-4',
      type: 'text',
      content: `**Grunnleggende om filformater**

**For skisser og bilder**:
- **PNG**: Støtter gjennomsiktighet, god for web
- **JPEG**: Komprimert, egnet for foto
- **PSD**: Adobe Photoshop, bevarer lag
- **TIFF**: Høy kvalitet, stor filstørrelse

**For vektorgrafikk**:
- **SVG**: Skalerbar vektor, åpent format
- **AI**: Adobe Illustrator-format
- **EPS**: Universelt vektorformat
- **PDF**: Bevarer formatering på tvers av enheter

**For 3D-modeller**:
- **STL**: Standard for 3D-printing
- **OBJ**: Vanlig utvekslingsformat
- **STEP**: For presisjonsarbeid og CNC

Velg riktig format basert på hva filen skal brukes til!`,
    },
    {
      id: 'handverk-design-vg1-4-1-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Du trenger ikke dyr programvare for å komme i gang. Tinkercad, Canva og Inkscape er alle gratis og gir deg en god start. Lær det grunnleggende først, og oppgrader til mer avanserte verktøy når du er klar.`,
    },
    {
      id: 'handverk-design-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en hovedfordel med vektorgrafikk sammenlignet med pikselbaserte bilder?',
        options: [
          { id: 'a', text: 'Vektorgrafikk tar mindre lagringsplass', isCorrect: false },
          { id: 'b', text: 'Vektorgrafikk kan skaleres uten å miste kvalitet', isCorrect: true },
          { id: 'c', text: 'Vektorgrafikk viser bedre farger', isCorrect: false },
          { id: 'd', text: 'Vektorgrafikk er lettere å lage', isCorrect: false },
        ],
        solution: 'Vektorgrafikk er bygget opp av matematiske formler, ikke piksler. Dette betyr at bildet kan forstørres uendelig uten at det blir pikselert eller mister kvalitet.',
      },
    },
    {
      id: 'handverk-design-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva lag (layers) er i et digitalt tegneprogram, og hvorfor de er nyttige.',
        solution: 'Lag er som gjennomsiktige ark som ligger oppå hverandre. Du kan tegne på hvert lag separat, noe som gjør det enkelt å redigere deler av tegningen uten å påvirke andre deler. For eksempel kan du ha bakgrunnen på ett lag, hovedmotivet på et annet, og detaljer på et tredje. Dette gir deg full kontroll og fleksibilitet i designarbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket filformat bør du bruke hvis du skal sende en 3D-modell til 3D-printing?',
        options: [
          { id: 'a', text: 'PNG', isCorrect: false },
          { id: 'b', text: 'SVG', isCorrect: false },
          { id: 'c', text: 'STL', isCorrect: true },
          { id: 'd', text: 'PDF', isCorrect: false },
        ],
        solution: 'STL (Stereolithography) er standardformatet for 3D-printing. Det beskriver overflategeometrien til et 3D-objekt og kan leses av de fleste 3D-printere og slicing-programvare.',
      },
    },
    {
      id: 'handverk-design-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv en arbeidsflyt der du kombinerer manuell og digital skissering.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke steg ville du inkludert i prosessen?',
            solution: 'En typisk arbeidsflyt: 1) Tegne raske idéskisser for hånd, 2) Velge ut de beste ideene, 3) Skanne eller fotografere skissene, 4) Importere til digitalt program, 5) Videreutvikle og forbedre digitalt.',
          },
          {
            label: 'b',
            task: 'Hva er fordelene med å kombinere manuelle og digitale teknikker?',
            solution: 'Fordelene inkluderer: Rask idéutvikling med penn og papir, enkel digitalisering, mulighet for presis videreutvikling digitalt, og fleksibilitet til å gjøre endringer uten å starte på nytt.',
          },
        ],
        solution: 'Kombinasjonen av manuell og digital skissering gir det beste fra begge verdener - den intuitive flyten fra håndtegning og presisjonen og fleksibiliteten fra digitale verktøy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Prøv et gratis digitalt designverktøy (f.eks. Tinkercad, Canva eller Inkscape) og lag en enkel skisse av et produkt du vil lage.',
        solution: 'Oppgaven krever praktisk arbeid. Vurder resultatet etter: Er produktideen tydelig kommunisert? Er verktøyet brukt på en hensiktsmessig måte? Viser skissen god forståelse av grunnleggende funksjoner?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-1-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Fordelene med digitale designverktøy: fleksibilitet, presisjon og deling
- Ulike typer programvare for skissering, 2D-design og 3D-modellering
- Hvordan du kan kombinere manuell og digital skissering i arbeidsflyten
- Grunnleggende om lag og filformater
- Viktigheten av å velge riktig verktøy og format for oppgaven

Digitale verktøy er verdifulle hjelpemidler som kan effektivisere og forbedre designprosessen din, men de erstatter ikke kreativitet og håndverkskunnskap.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Digitale designverktøy', definition: 'Programvare for å skape, visualisere og bearbeide design digitalt' },
    { term: 'Vektorgrafikk', definition: 'Bilder bygget av matematiske formler som kan skaleres uten kvalitetstap' },
    { term: 'Lag (layers)', definition: 'Gjennomsiktige nivåer i et digitalt program som kan redigeres separat' },
    { term: 'STL', definition: 'Standard filformat for 3D-printing' },
    { term: 'SVG', definition: 'Skalerbart vektorformat for web og illustrasjon' },
    { term: 'Tegnebrett', definition: 'Maskinvare for digital tegning med penn, gir naturlig tegnefølelse' },
  ],
};

// ============================================================================
// Kapittel 4.2: 3D-modellering og visualisering
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4_2: TextbookChapter = {
  id: 'handverk-design-vg1-4-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4.2',
  title: '3D-modellering og visualisering',
  description: 'Fordypning i 3D-modellering som verktøy for å planlegge og visualisere håndverksprodukter. Elevene lærer å lage digitale modeller som kan brukes som grunnlag for produksjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utarbeide og videreutvikle skisser og arbeidstegninger manuelt og ved hjelp av digitale ressurser',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-2-intro',
      type: 'text',
      content: `3D-modellering lar deg skape digitale versjoner av produkter før du begynner å lage dem fysisk. Du kan rotere modellen, se den fra alle vinkler, og oppdage potensielle problemer før du bruker tid og materialer på produksjon. I dette kapittelet lærer du grunnleggende 3D-modellering og hvordan du kan bruke det i håndverksarbeidet ditt.`,
    },
    {
      id: 'handverk-design-vg1-4-2-def-1',
      type: 'definition',
      title: '3D-modellering',
      content: `3D-modellering er prosessen med å lage en matematisk representasjon av et tredimensjonalt objekt i et dataprogram. Modellen kan vises, roteres og manipuleres på skjermen, og kan brukes til visualisering, analyse eller digital fabrikasjon.`,
    },
    {
      id: 'handverk-design-vg1-4-2-text-1',
      type: 'text',
      content: `**Hvorfor 3D-modellere?**

3D-modellering gir deg flere fordeler i produktutviklingen:

**Visualisering**:
- Se produktet fra alle vinkler før det lages
- Presentere ideer til kunder på en overbevisende måte
- Oppdage designfeil tidlig i prosessen

**Planlegging**:
- Beregne nøyaktige mål og proporsjoner
- Teste hvordan deler passer sammen
- Planlegge material- og fargvalg

**Produksjon**:
- Eksportere filer direkte til 3D-printer eller CNC-maskin
- Lage presise arbeidstegninger
- Dokumentere designet for senere reproduksjon

**Iterasjon**:
- Enkelt å lage og sammenligne flere varianter
- Rask endring av design basert på tilbakemeldinger
- Eksperimentere uten å bruke materialer`,
    },
    {
      id: 'handverk-design-vg1-4-2-def-2',
      type: 'definition',
      title: 'CAD (Computer-Aided Design)',
      content: `CAD er samlebetegnelsen på dataassistert design og konstruksjon. CAD-programmer brukes til å lage presise tekniske tegninger og 3D-modeller for produkter, bygninger og maskindeler.`,
    },
    {
      id: 'handverk-design-vg1-4-2-text-2',
      type: 'text',
      content: `**Grunnleggende modelleringsteknikker**

**Primitiver og grunnformer**:
De fleste 3D-programmer starter med enkle grunnformer:
- Kuber og bokser
- Sylindre og kjegler
- Kuler
- Torus (ringform)

**Boolske operasjoner**:
Kombiner grunnformer på ulike måter:
- **Union**: Slår sammen to former til én
- **Subtraksjon**: Trekker én form fra en annen (lager hull)
- **Snitt**: Beholder kun området der formene overlapper

**Ekstrusjon**:
- Start med en 2D-form (f.eks. en firkant)
- Dra den ut i dybden for å lage en 3D-form
- Grunnleggende teknikk i de fleste CAD-programmer

**Revolusjon**:
- Roter en 2D-profil rundt en akse
- Perfekt for å lage symmetriske objekter som vaser og skåler`,
    },
    {
      id: 'handverk-design-vg1-4-2-text-3',
      type: 'text',
      content: `**Populære 3D-programmer for håndverk**

**Tinkercad** (gratis, nettbasert):
- Perfekt for nybegynnere
- Intuitiv drag-and-drop-grenseflate
- Bruker primitive former og boolske operasjoner
- Eksporterer direkte til 3D-print

**Fusion 360** (gratis for studenter):
- Profesjonelt CAD-verktøy
- Parametrisk modellering (mål kan endres i ettertid)
- Integrert simulering og rendering
- God for produktdesign og prototyping

**Blender** (gratis, åpen kildekode):
- Kraftig for organiske former og visualisering
- Bratt læringskurve, men mange ressurser tilgjengelig
- Utmerket for rendering og animasjon
- Kan brukes til skulpturering av digitale objekter

**SketchUp** (gratis versjon tilgjengelig):
- Intuitiv grenseflate
- Populær for møbler og interiør
- Stort bibliotek med ferdige modeller
- Enkel å komme i gang med`,
    },
    {
      id: 'handverk-design-vg1-4-2-text-4',
      type: 'text',
      content: `**Fra 3D-modell til virkelighet**

Når modellen er ferdig, kan du bruke den på flere måter:

**Visualisering og presentasjon**:
- Lag fotorealistiske bilder (rendering)
- Vis produktet i ulike farger og materialer
- Presenter for kunder eller lærere

**Arbeidstegninger**:
- Eksporter 2D-tegninger med mål
- Lag eksplosjonstegninger som viser deler
- Dokumenter konstruksjonsdetaljer

**Digital fabrikasjon**:
- 3D-printing av prototyper eller ferdige produkter
- Laserkutting av flate deler
- CNC-fresing av komplekse former

**Tips for god 3D-modellering**:
- Start med grunnformene og bygg opp kompleksitet
- Mål nøye før du modellerer
- Tenk på hvordan produktet skal lages fysisk
- Lagre versjoner underveis`,
    },
    {
      id: 'handverk-design-vg1-4-2-tip-1',
      type: 'tip',
      title: 'Lær av tutorials',
      content: `YouTube er full av gratis tutorials for 3D-modellering. Søk etter nybegynnerguider for programmet du vil lære. Følg med og gjør øvelsene selv - det er den beste måten å lære på.`,
    },
    {
      id: 'handverk-design-vg1-4-2-example-1',
      type: 'example',
      title: 'Modellere en enkel skål i Tinkercad',
      content: `**Steg for steg:**

1. **Start med en halvkule**: Plasser en kule på arbeidsflaten og senk den halvveis ned

2. **Lag hulrommet**: Plasser en mindre kule inni den første og marker den som "hull"

3. **Kombiner**: Bruk grupper-funksjonen for å trekke den indre kulen fra den ytre

4. **Juster bunnen**: Legg til en flat sylinder i bunnen for å gi skålen et stabilt fotfeste

5. **Eksporter**: Lagre som STL for 3D-printing eller OBJ for videre arbeid

Resultat: En enkel, funksjonell skål klar for produksjon!`,
    },
    {
      id: 'handverk-design-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en boolsk subtraksjonsoperasjon i 3D-modellering?',
        options: [
          { id: 'a', text: 'Å slå sammen to former til én', isCorrect: false },
          { id: 'b', text: 'Å trekke én form fra en annen for å lage hull', isCorrect: true },
          { id: 'c', text: 'Å rotere en form rundt en akse', isCorrect: false },
          { id: 'd', text: 'Å kopiere en form flere ganger', isCorrect: false },
        ],
        solution: 'Boolsk subtraksjon brukes til å trekke én form fra en annen. Dette er nyttig for å lage hull, utsparinger og komplekse former ved å "kutte bort" materiale fra et objekt.',
      },
    },
    {
      id: 'handverk-design-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva parametrisk modellering er og hvorfor det er nyttig.',
        solution: 'Parametrisk modellering er en metode der modellen er definert av parametre (mål og verdier) som kan endres i ettertid. Hvis du for eksempel lager en boks med bredde 10 cm, kan du senere endre dette til 15 cm, og hele modellen oppdateres automatisk. Dette er nyttig fordi du kan gjøre raske endringer uten å modellere på nytt, og fordi du kan lage varianter av samme design med ulike mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan du ville gått frem for å 3D-modellere en kaffekopp med hank.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke grunnformer ville du startet med?',
            solution: 'Start med en sylinder for hovedkoppen og en torus (eller bøyd sylinder) for hanken.',
          },
          {
            label: 'b',
            task: 'Hvilke operasjoner ville du brukt for å lage hulrommet?',
            solution: 'Bruk boolsk subtraksjon med en mindre sylinder for å lage hulrommet inni koppen.',
          },
        ],
        solution: 'En kaffekopp kan modelleres ved å starte med en sylinder, bruke boolsk subtraksjon for hulrommet, og legge til en torus eller bøyd sylinder som hank. Bunn og vegger kan justeres for riktig tykkelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket program er best egnet for en nybegynner som vil lære 3D-modellering for håndverk?',
        options: [
          { id: 'a', text: 'AutoCAD - fordi det er industristandardard', isCorrect: false },
          { id: 'b', text: 'Tinkercad - fordi det er gratis, nettbasert og enkelt å lære', isCorrect: true },
          { id: 'c', text: 'Maya - fordi det har flest funksjoner', isCorrect: false },
          { id: 'd', text: 'SolidWorks - fordi det brukes av ingeniører', isCorrect: false },
        ],
        solution: 'Tinkercad er ideelt for nybegynnere fordi det er gratis, kjører i nettleseren uten installasjon, og har en intuitiv grenseflate med drag-and-drop. Det gir en god grunnforståelse før man eventuelt går videre til mer avanserte programmer.',
      },
    },
    {
      id: 'handverk-design-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en enkel 3D-modell i Tinkercad av et produkt du vil lage i verkstedet.',
        solution: 'Oppgaven krever praktisk arbeid i Tinkercad. Vurder resultatet etter: Er modellen gjennomførbar å lage fysisk? Er målene realistiske? Er grunnleggende modelleringsteknikker brukt riktig?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-2-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Fordelene med 3D-modellering for visualisering, planlegging og produksjon
- Grunnleggende modelleringsteknikker: primitiver, boolske operasjoner, ekstrusjon og revolusjon
- Ulike 3D-programmer og deres styrker
- Hvordan en 3D-modell kan brukes til arbeidstegninger og digital fabrikasjon

3D-modellering er et kraftig verktøy som lar deg planlegge og visualisere produkter før du investerer tid og materialer i fysisk produksjon.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: '3D-modellering', definition: 'Prosessen med å lage digitale representasjoner av tredimensjonale objekter' },
    { term: 'CAD', definition: 'Computer-Aided Design - dataassistert design og konstruksjon' },
    { term: 'Boolske operasjoner', definition: 'Union, subtraksjon og snitt for å kombinere 3D-former' },
    { term: 'Ekstrusjon', definition: 'Å dra en 2D-form ut i dybden for å lage en 3D-form' },
    { term: 'Parametrisk modellering', definition: 'Modellering der mål kan endres i ettertid' },
    { term: 'Rendering', definition: 'Å lage fotorealistiske bilder fra 3D-modeller' },
  ],
};

// ============================================================================
// Kapittel 4.3: Laserkutting og CNC-fresing
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4_3: TextbookChapter = {
  id: 'handverk-design-vg1-4-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4.3',
  title: 'Laserkutting og CNC-fresing',
  description: 'Innføring i digital fabrikasjon med laserkutter og CNC-fres. Elevene lærer å forberede filer for maskinell produksjon og forstå sammenhenger mellom digital design og fysisk resultat.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og lage håndverksprodukter med presisjon og nøyaktighet med utgangspunkt i eget planleggingsarbeid og gitte tidsfrister',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-3-intro',
      type: 'text',
      content: `Digital fabrikasjon kombinerer dataassistert design med maskinstyrt produksjon. Laserkuttere og CNC-fresere kan lage presise deler basert på digitale filer, noe som åpner nye muligheter for håndverkere. I dette kapittelet lærer du grunnleggende om disse teknologiene og hvordan du forbereder filer for maskinell produksjon.`,
    },
    {
      id: 'handverk-design-vg1-4-3-def-1',
      type: 'definition',
      title: 'Digital fabrikasjon',
      content: `Digital fabrikasjon er en samlebetegnelse for produksjonsmetoder der maskiner styres av digitale filer for å lage fysiske objekter. Dette inkluderer laserkutting, CNC-fresing, 3D-printing og andre datastyrte teknikker.`,
    },
    {
      id: 'handverk-design-vg1-4-3-text-1',
      type: 'text',
      content: `**Laserkutting**

En laserkutter bruker en fokusert laserstråle til å kutte eller gravere materialer.

**Hvordan det fungerer**:
- En kraftig laserstråle fokuseres til et lite punkt
- Laseren beveger seg over materialet etter et digitalt mønster
- Materialet smelter, fordamper eller brennes bort langs banen
- Resultatet er presise kutt med minimal materialspill

**Hva kan laserkuttes?**:
- **Tre og kryssfiner**: Gir fine kanter, kan graveres
- **Akryl og plast**: Polerte kanter, mange farger
- **Papp og papir**: Detaljerte mønstre, kort produksjonstid
- **Lær og tekstil**: Presise kutt, gravering mulig
- **Metall**: Krever kraftigere lasere (industrielt nivå)

**Begrensninger**:
- Kan bare kutte flate materialer
- Tykkelse begrenset av laserens styrke
- Noen materialer avgir giftige gasser (f.eks. PVC)
- Etterlater brente kanter på noen materialer`,
    },
    {
      id: 'handverk-design-vg1-4-3-def-2',
      type: 'definition',
      title: 'CNC-fresing',
      content: `CNC står for Computer Numerical Control. En CNC-fres er en maskin som bruker roterende skjæreverktøy (fres) for å fjerne materiale basert på digitale instruksjoner. Maskinen kan arbeide i flere akser og lage komplekse tredimensjonale former.`,
    },
    {
      id: 'handverk-design-vg1-4-3-text-2',
      type: 'text',
      content: `**CNC-fresing**

CNC-fresing bruker roterende verktøy for å skjære bort materiale.

**Hvordan det fungerer**:
- En motor spinner et skjæreverktøy i høy hastighet
- Verktøyet beveger seg i X, Y og Z-retning etter digitale instruksjoner
- Materiale fjernes lag for lag til ønsket form er oppnådd
- Prosessen kalles subtraktiv produksjon (fjerner materiale)

**Hva kan CNC-freses?**:
- **Tre**: Møbler, skilt, skulpturer
- **Aluminium**: Lette metalldeler, prototyper
- **Plast**: Funksjonsmodeller, skilt
- **Skum**: Modeller, støpeformer
- **Kompositter**: Glass- og karbonfiber

**Fordeler med CNC**:
- Kan lage 3D-former, ikke bare flate deler
- Høy presisjon og gjentakbarhet
- Kan bearbeide hardere materialer enn laser
- God overflatekonsekvens`,
    },
    {
      id: 'handverk-design-vg1-4-3-text-3',
      type: 'text',
      content: `**Forberede filer for digital fabrikasjon**

**For laserkutting**:

Filer lages vanligvis i 2D-programmer som Illustrator eller Inkscape.

- **Vektorfiler**: Bruk SVG, DXF eller AI-format
- **Linjefarger**: Ulike farger for kutt vs. gravering
- **Linjetykkelse**: Ultratynne linjer (0,001 mm) for kutt
- **Kutt vs. gravering**: Definer hva som skal kuttes gjennom og hva som skal graveres

**For CNC-fresing**:

Filer lages i CAD/CAM-programmer som Fusion 360 eller VCarve.

- **3D-modell**: Start med en komplett 3D-modell
- **CAM-oppsett**: Definer verktøybaner og rekkefølge
- **Verktøyvalg**: Velg riktig fres for jobben
- **G-kode**: Eksporter maskinlesbare instruksjoner

**Viktige hensyn**:
- Materialtykkelse må stemme med designet
- Tenk på festepunkter så deler ikke løsner under kutting
- Vurder kuttebredde (kerf) i presisjonskutt
- Test på restavfall før finproduksjon`,
    },
    {
      id: 'handverk-design-vg1-4-3-def-3',
      type: 'definition',
      title: 'Kerf',
      content: `Kerf er bredden på kuttet som laseren eller fresen lager. Fordi verktøyet har en viss tykkelse, blir kuttet litt bredere enn linjen i designfilen. Dette må tas hensyn til i presisjonsarbeid.`,
    },
    {
      id: 'handverk-design-vg1-4-3-text-4',
      type: 'text',
      content: `**Sammenligning: Laser vs. CNC**

| Egenskap | Laserkutter | CNC-fres |
|----------|-------------|----------|
| **Materialtype** | Flate plater | Flate og tykke emner |
| **Dimensjoner** | 2D + gravering | Ekte 3D-former |
| **Presisjon** | Svært høy | Høy |
| **Hastighet** | Rask for tynne materialer | Varierer med kompleksitet |
| **Kanter** | Brente/smeltede | Fresede, kan poleres |
| **Støy** | Lav | Høy |
| **Vedlikehold** | Moderat | Mer krevende |

**Når bruke hva?**:
- **Laser**: Flate deler, detaljert gravering, papp/akryl/tynn kryssfiner
- **CNC**: Tykke materialer, 3D-relieffer, deler som skal sammenføyes med presisjon`,
    },
    {
      id: 'handverk-design-vg1-4-3-tip-1',
      type: 'tip',
      title: 'Sikkerhet først',
      content: `Digital fabrikasjonsmaskiner krever opplæring og forsiktighet. Bruk alltid verneutstyr, sørg for god ventilasjon, og følg maskinens sikkerhetsregler. Aldri laserkutt materialer du er usikker på - noen avgir giftige gasser.`,
    },
    {
      id: 'handverk-design-vg1-4-3-example-1',
      type: 'example',
      title: 'Prosjekt: Laserkuttet smykkeskrin',
      content: `**Prosessen steg for steg:**

1. **Design**: Tegn alle sidene i Illustrator/Inkscape
2. **Fingerskjøter**: Design hakk som gjør at sidene låser i hverandre
3. **Kompenser for kerf**: Juster mål slik at delene passer perfekt
4. **Forbered fil**: Sett kutte-linjer i én farge, graveringslinjer i en annen
5. **Materialvalg**: 3 mm kryssfiner eller akryl
6. **Test**: Kutt en liten prøve for å sjekke passform
7. **Produksjon**: Kutt alle delene
8. **Montering**: Sett sammen og lim om nødvendig
9. **Etterbehandling**: Slip, oljer eller lakkerer

Resultatet er et presist, profesjonelt utseende produkt med gjennomtenkt design!`,
    },
    {
      id: 'handverk-design-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom laserkutting og CNC-fresing?',
        options: [
          { id: 'a', text: 'Laserkutting er raskere', isCorrect: false },
          { id: 'b', text: 'CNC-fresing kan lage ekte 3D-former, laserkutting er begrenset til flate materialer', isCorrect: true },
          { id: 'c', text: 'Laserkutting er billigere', isCorrect: false },
          { id: 'd', text: 'CNC-fresing bruker laser', isCorrect: false },
        ],
        solution: 'CNC-fresing bruker et roterende verktøy som kan bevege seg i X, Y og Z-retning, noe som gjør det mulig å lage ekte tredimensjonale former. Laserkutting er begrenset til å kutte og gravere flate materialer.',
      },
    },
    {
      id: 'handverk-design-vg1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva kerf er og hvorfor det er viktig å ta hensyn til det.',
        solution: 'Kerf er bredden på kuttet som lages av laseren eller fresen. Fordi verktøyet har en viss tykkelse, blir det faktiske kuttet litt bredere enn linjen i designfilen. Hvis du ikke kompenserer for kerf i presisjonsarbeid, kan delene bli for løse eller for stramme når de skal settes sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket filformat er mest egnet for laserkutting?',
        options: [
          { id: 'a', text: 'JPEG', isCorrect: false },
          { id: 'b', text: 'STL', isCorrect: false },
          { id: 'c', text: 'SVG eller DXF', isCorrect: true },
          { id: 'd', text: 'MP4', isCorrect: false },
        ],
        solution: 'SVG og DXF er vektorformater som definerer presise linjer og kurver. Laserkuttere trenger vektorfiler for å kunne følge kutte-baner nøyaktig. Pikselbaserte formater som JPEG kan ikke brukes direkte til kutting.',
      },
    },
    {
      id: 'handverk-design-vg1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Design en enkel boks med lokk som kan laserkuttes.',
        subTasks: [
          {
            label: 'a',
            task: 'Tegn alle sidene som flate deler i et 2D-tegneprogram.',
            solution: 'Boksen trenger bunn, fire sider og lokk - totalt seks flate deler.',
          },
          {
            label: 'b',
            task: 'Hvordan ville du designet sammenføyningen mellom sidene?',
            solution: 'Bruk fingerskjøter (hakk som griper i hverandre) eller tapper og hull for å låse delene sammen.',
          },
        ],
        solution: 'En laserkuttet boks designes ved å tegne alle sidene separat med sammenføyningsdetaljer som fingerskjøter. Husk å ta hensyn til materialtykkelse og kerf.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-3-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Hvordan laserkutting fungerer og hvilke materialer som kan kuttes
- Hvordan CNC-fresing fungerer og dens fordeler
- Filklargjøring for digital fabrikasjon (vektorformater, CAM-oppsett)
- Kerf og hvorfor det er viktig i presisjonsarbeid
- Forskjellene mellom laser og CNC og når du bør bruke hva

Digital fabrikasjon gir håndverkere muligheten til å lage presise deler som kan være vanskelige eller tidkrevende å lage manuelt.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Digital fabrikasjon', definition: 'Produksjonsmetoder der maskiner styres av digitale filer' },
    { term: 'Laserkutting', definition: 'Kutting med fokusert laserstråle som smelter eller brenner bort materiale' },
    { term: 'CNC-fresing', definition: 'Datastyrte skjæreverktøy som fjerner materiale for å lage 3D-former' },
    { term: 'Kerf', definition: 'Bredden på kuttet som verktøyet lager' },
    { term: 'G-kode', definition: 'Maskinlesbare instruksjoner som styrer CNC-maskiner' },
    { term: 'Fingerskjøt', definition: 'Sammenføyningsteknikk med hakk som griper i hverandre' },
  ],
};

// ============================================================================
// Kapittel 4.4: 3D-printing og hurtig prototyping
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4_4: TextbookChapter = {
  id: 'handverk-design-vg1-4-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4.4',
  title: '3D-printing og hurtig prototyping',
  description: 'Praktisk bruk av 3D-printing for å lage prototyper og ferdige produkter. Elevene lærer om ulike 3D-printteknologier, materialer og muligheter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og lage håndverksprodukter med presisjon og nøyaktighet med utgangspunkt i eget planleggingsarbeid og gitte tidsfrister',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-4-intro',
      type: 'text',
      content: `3D-printing har revolusjonert prototyping og småskalaproduksjon. Med en 3D-printer kan du gå fra digital modell til fysisk objekt på noen timer. I dette kapittelet lærer du om ulike 3D-printteknologier, materialer og hvordan du kan bruke 3D-printing i ditt håndverksarbeid.`,
    },
    {
      id: 'handverk-design-vg1-4-4-def-1',
      type: 'definition',
      title: '3D-printing',
      content: `3D-printing, også kalt additiv tilvirkning, er en prosess der et objekt bygges opp lag for lag basert på en digital 3D-modell. I motsetning til subtraktive metoder (som fresing) som fjerner materiale, legger 3D-printing til materiale for å skape formen.`,
    },
    {
      id: 'handverk-design-vg1-4-4-text-1',
      type: 'text',
      content: `**Vanlige 3D-printteknologier**

**FDM (Fused Deposition Modeling)**:
- Mest vanlig for hobbybruk og skoler
- Smelter plastfilament og legger det lag for lag
- Rimelig og enkel å bruke
- Materialer: PLA, ABS, PETG, TPU med flere

**SLA (Stereolithography)**:
- Bruker UV-lys til å herde flytende resin lag for lag
- Høyere detaljeringsgrad enn FDM
- Glattere overflater
- Krever etterprosessering (vask og herding)

**SLS (Selective Laser Sintering)**:
- Bruker laser til å smelte pulverformet materiale
- Profesjonell teknologi, ofte industriell
- Kan printe komplekse former uten støttestrukturer
- Materialer: Nylon, metall (DMLS)

For de fleste håndverksprosjekter er **FDM** det beste valget på grunn av pris, tilgjengelighet og brukervennlighet.`,
    },
    {
      id: 'handverk-design-vg1-4-4-def-2',
      type: 'definition',
      title: 'Slicing',
      content: `Slicing er prosessen med å dele en 3D-modell i tynne lag og generere instruksjoner (G-kode) som forteller 3D-printeren hvordan den skal printe hvert lag. Slicing-programvare (som Cura eller PrusaSlicer) konverterer STL-filer til printbare filer.`,
    },
    {
      id: 'handverk-design-vg1-4-4-text-2',
      type: 'text',
      content: `**Materialer for FDM-printing**

**PLA (Polylactic Acid)**:
- Mest brukte materialet for nybegynnere
- Laget av fornybare kilder (mais, sukkerrør)
- Enkel å printe, lite vridning
- Biologisk nedbrytbart
- Tåler ikke høy varme

**ABS (Acrylonitrile Butadiene Styrene)**:
- Sterkere og mer fleksibelt enn PLA
- Tåler høyere temperaturer
- Krever oppvarmet printflate
- Avgir lukt under printing (bruk ventilasjon)

**PETG**:
- God balanse mellom styrke og brukervennlighet
- Mer fleksibelt enn PLA
- Vannresistent
- Populært for funksjonelle deler

**TPU (Thermoplastic Polyurethane)**:
- Fleksibelt, gummiliknende materiale
- Perfekt for deksler, tetninger og fleksible deler
- Litt vanskeligere å printe enn PLA`,
    },
    {
      id: 'handverk-design-vg1-4-4-text-3',
      type: 'text',
      content: `**Fra modell til print**

**Steg 1: 3D-modellering**
- Lag eller last ned en 3D-modell
- Eksporter som STL eller OBJ-fil
- Sørg for at modellen er "vanntett" (ingen hull)

**Steg 2: Slicing**
- Åpne modellen i slicing-programvare (Cura, PrusaSlicer)
- Velg materiale og kvalitetsinnstillinger
- Plasser modellen på den virtuelle printflaten
- Generer støttestrukturer om nødvendig
- Eksporter G-kode

**Steg 3: Printing**
- Last inn filament i printeren
- Overfør G-kode til printeren
- Start printen og overvåk første lag
- La printen fullføre (kan ta timer til dager)

**Steg 4: Etterprosessering**
- Fjern støttestrukturer
- Slip eller fil ned ujevnheter
- Mal eller overflatebehandler om ønskelig`,
    },
    {
      id: 'handverk-design-vg1-4-4-text-4',
      type: 'text',
      content: `**Designhensyn for 3D-printing**

**Orientering**:
- Hvordan modellen står på printflaten påvirker styrke og overflatekvalitet
- Lag (layers) er svakest i bindingen mellom lagene
- Roter modellen for å minimere støttestrukturer

**Overheng og støtte**:
- FDM kan ikke printe i løse luften
- Overheng over 45 grader krever støttestrukturer
- Design med tanke på printbarhet for å redusere støttebehov

**Veggtykkelse**:
- Minimum veggtykkelse avhenger av materialet
- Typisk minimum 1-2 mm for PLA
- Tynne vegger kan bli sprø eller mislykkes under printing

**Toleranser**:
- Husk at printe deler krymper litt
- Legg til ekstra klaring (0,2-0,5 mm) for deler som skal passe sammen
- Test og juster for nøyaktige pasninger`,
    },
    {
      id: 'handverk-design-vg1-4-4-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Begynn med enkle modeller for å lære printeren og materialene å kjenne. Kalibrer printeren riktig før du starter komplekse prosjekter. Et godt første lag er nøkkelen til en vellykket print!`,
    },
    {
      id: 'handverk-design-vg1-4-4-example-1',
      type: 'example',
      title: 'Hurtig prototyping av et produktdesign',
      content: `**Scenario**: Du designer en ny type flaskeholder.

**Prosessen:**
1. **Skisse**: Tegn ideen for hånd
2. **3D-modell**: Lag modellen i Tinkercad eller Fusion 360
3. **Første prototype**: Print i PLA med 20% infill (hurtig, billig)
4. **Test**: Prøv med en ekte flaske - passer den? Er den stabil?
5. **Iterasjon**: Juster målene og designet basert på testen
6. **Andre prototype**: Print med forbedret design
7. **Gjenta**: Fortsett til produktet fungerer perfekt
8. **Final versjon**: Print med høyere kvalitet og riktig materiale

**Fordeler med prototyping:**
- Rask testing av ideer
- Billig å feile og lære
- Enkelt å sammenligne varianter
- Fysisk produkt å vise til andre`,
    },
    {
      id: 'handverk-design-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom additiv og subtraktiv produksjon?',
        options: [
          { id: 'a', text: 'Additiv er raskere', isCorrect: false },
          { id: 'b', text: 'Additiv legger til materiale lag for lag, subtraktiv fjerner materiale', isCorrect: true },
          { id: 'c', text: 'Subtraktiv er mer presis', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        solution: 'Additiv produksjon (som 3D-printing) bygger opp objekter ved å legge til materiale lag for lag. Subtraktiv produksjon (som CNC-fresing) starter med et emne og fjerner materiale for å oppnå ønsket form.',
      },
    },
    {
      id: 'handverk-design-vg1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva slicing er og hvorfor det er nødvendig før 3D-printing.',
        solution: 'Slicing er prosessen med å dele en 3D-modell i tynne horisontale lag og generere instruksjoner (G-kode) som forteller printeren hvordan den skal bevege seg og legge ut materiale for hvert lag. Det er nødvendig fordi 3D-printeren ikke forstår 3D-modeller direkte - den trenger steg-for-steg-instruksjoner for hvordan den skal bygge opp objektet lag for lag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket materiale er best egnet for en nybegynner som skal 3D-printe?',
        options: [
          { id: 'a', text: 'ABS - fordi det er sterkt', isCorrect: false },
          { id: 'b', text: 'PLA - fordi det er enkelt å printe og miljøvennlig', isCorrect: true },
          { id: 'c', text: 'TPU - fordi det er fleksibelt', isCorrect: false },
          { id: 'd', text: 'Nylon - fordi det er profesjonelt', isCorrect: false },
        ],
        solution: 'PLA er best for nybegynnere fordi det er enkelt å printe (krever ikke oppvarmet seng, lite vridning), er laget av fornybare kilder, og gir gode resultater uten mye erfaring. Det er også det rimeligste alternativet.',
      },
    },
    {
      id: 'handverk-design-vg1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er orientering av modellen viktig når du forbereder en 3D-print?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan påvirker orientering styrken på den ferdige delen?',
            solution: 'Lagene i en FDM-print binder svakest mellom seg. Orienter modellen slik at belastningen går langs lagene, ikke på tvers.',
          },
          {
            label: 'b',
            task: 'Hvordan påvirker orientering behovet for støttestrukturer?',
            solution: 'Ved å orientere modellen smart kan du redusere eller eliminere overheng over 45 grader, og dermed trenge færre eller ingen støttestrukturer.',
          },
        ],
        solution: 'Orientering påvirker både styrke (lagenes retning) og mengden støtte som trengs (overheng). God orientering gir sterkere deler med mindre etterarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Design og 3D-print en enkel gjenstand (f.eks. en nøkkelring, en krok eller en holder).',
        solution: 'Oppgaven krever praktisk arbeid. Vurder: Er designet printbart (vegger, overheng, støtte)? Fungerer gjenstanden til sitt formål? Er målene riktige?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-4-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Ulike 3D-printteknologier (FDM, SLA, SLS) og deres bruksområder
- Materialer for FDM-printing og deres egenskaper
- Prosessen fra 3D-modell til ferdig print via slicing
- Designhensyn som orientering, overheng og toleranser
- Hurtig prototyping som metode for produktutvikling

3D-printing gjør det mulig å teste og utvikle ideer raskt og rimelig før du investerer i mer permanente produksjonsmetoder.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: '3D-printing', definition: 'Additiv tilvirkning der objekter bygges lag for lag' },
    { term: 'FDM', definition: 'Fused Deposition Modeling - 3D-printing med smeltet plastfilament' },
    { term: 'Slicing', definition: 'Å dele 3D-modell i lag og generere printeinstruksjoner' },
    { term: 'PLA', definition: 'Polylactic Acid - biologisk nedbrytbart plastfilament' },
    { term: 'Støttestruktur', definition: 'Midlertidig materiale som støtter overheng under printing' },
    { term: 'Infill', definition: 'Fylningsmønster inni et 3D-printet objekt, angis i prosent' },
  ],
};

// ============================================================================
// Kapittel 4.5: Digital dokumentasjon og presentasjon
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4_5: TextbookChapter = {
  id: 'handverk-design-vg1-4-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4.5',
  title: 'Digital dokumentasjon og presentasjon',
  description: 'Bruk av digitale verktøy for å dokumentere designprosesser og presentere ferdige produkter. Elevene lærer om fotografi, film og digital portefølje.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og dokumentere en design- og produktutviklingsprosess alene og i samarbeid med andre innenfor gitte tidsrammer',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-5-intro',
      type: 'text',
      content: `God dokumentasjon er like viktig som selve håndverket. Å kunne vise frem prosessen og det ferdige produktet på en profesjonell måte er avgjørende enten du skal søke jobb, stille ut, eller selge produktene dine. I dette kapittelet lærer du hvordan du bruker digitale verktøy for dokumentasjon og presentasjon.`,
    },
    {
      id: 'handverk-design-vg1-4-5-def-1',
      type: 'definition',
      title: 'Digital portefølje',
      content: `En digital portefølje er en samling av ditt arbeid presentert digitalt. Den kan inkludere bilder, videoer, skisser og beskrivelser av prosjekter. En god portefølje viser bredden i ferdighetene dine og kvaliteten på arbeidet ditt.`,
    },
    {
      id: 'handverk-design-vg1-4-5-text-1',
      type: 'text',
      content: `**Hvorfor dokumentere?**

**For læring**:
- Reflektere over prosessen og hva du har lært
- Identifisere hva som fungerte og hva som kan forbedres
- Huske teknikker og løsninger til senere

**For kommunikasjon**:
- Vise arbeidet til lærere, kunder eller arbeidsgiver
- Forklare designvalg og prosess
- Bygge et profesjonelt omdømme

**For profesjonell utvikling**:
- Dokumentere kompetanse for jobbsøking
- Bygge opp en portefølje over tid
- Dele kunnskap med andre

**Hva bør dokumenteres?**:
- Idéskisser og tidlige konsepter
- Materialvalg og begrunnelser
- Utfordringer og løsninger
- Steg i produksjonsprosessen
- Det ferdige produktet fra ulike vinkler`,
    },
    {
      id: 'handverk-design-vg1-4-5-def-2',
      type: 'definition',
      title: 'Produktfotografi',
      content: `Produktfotografi er kunsten å fotografere produkter på en måte som viser dem fra sin beste side. God produktfotografi krever oppmerksomhet på lys, bakgrunn, vinkel og komposisjon.`,
    },
    {
      id: 'handverk-design-vg1-4-5-text-2',
      type: 'text',
      content: `**Grunnleggende produktfotografi**

**Lys**:
- Naturlig dagslys er ofte best
- Unngå direkte sollys som skaper harde skygger
- Bruk hvit kartong eller reflektorer for å fylle skygger
- Konsistent lys gir profesjonelt resultat

**Bakgrunn**:
- Enkel, nøytral bakgrunn lar produktet skinne
- Hvit bakgrunn for ren, moderne stil
- Tre eller tekstil for varm, håndverksmessig følelse
- Unngå rotete bakgrunner som distraherer

**Komposisjon**:
- Bruk tredjedelsregelen for balanserte bilder
- Vis produktet fra flere vinkler
- Inkluder nærbilder av detaljer
- Vis produktet i bruk for kontekst

**Utstyr**:
- Smarttelefon med godt kamera er nok til å starte
- Stativ for skarpere bilder
- Enkelt hjemmelaget lysstudio med hvit bakgrunn
- Bilderedigeringsprogram for justering`,
    },
    {
      id: 'handverk-design-vg1-4-5-text-3',
      type: 'text',
      content: `**Video for dokumentasjon**

Video er kraftfullt for å vise prosesser og teknikker.

**Typer video**:
- **Prosessvideo**: Viser hvordan produktet lages, ofte timelapse
- **Tutorial**: Lærer bort en teknikk steg for steg
- **Produktpresentasjon**: Viser det ferdige produktet i bruk
- **Behind-the-scenes**: Gir innblikk i verkstedet og arbeidsdagen

**Tips for god video**:
- Planlegg hva du vil vise før du filmer
- Hold kameraet stabilt (bruk stativ)
- Sørg for godt lys
- Kort og konsist er bedre enn langt og kjedelig
- Enkel redigering gjør stor forskjell

**Verktøy for videoredigering**:
- iMovie (gratis på Mac/iOS)
- CapCut (gratis, mobil)
- DaVinci Resolve (gratis, profesjonell)
- Adobe Premiere (industristandardard)`,
    },
    {
      id: 'handverk-design-vg1-4-5-text-4',
      type: 'text',
      content: `**Bygge en digital portefølje**

**Plattformer**:
- **Behance/Dribbble**: For designere og kreative
- **Instagram**: Visuelt fokus, stor rekkevidde
- **Egen nettside**: Full kontroll, profesjonelt
- **PDF-portefølje**: Enkelt å dele, fungerer offline

**Struktur**:
- Velg dine beste prosjekter (kvalitet over kvantitet)
- Vis prosess, ikke bare ferdig resultat
- Skriv korte, informative beskrivelser
- Organiser prosjektene logisk
- Oppdater jevnlig med nytt arbeid

**Hva skal med for hvert prosjekt?**:
1. Prosjekttittel og kort beskrivelse
2. Bilder av prosessen (skisser, underveis)
3. Profesjonelle bilder av ferdig produkt
4. Materialer og teknikker brukt
5. Utfordringer og løsninger
6. Hva du lærte`,
    },
    {
      id: 'handverk-design-vg1-4-5-tip-1',
      type: 'tip',
      title: 'Dokumenter underveis',
      content: `Ikke vent til prosjektet er ferdig med å dokumentere. Ta bilder underveis i prosessen - det er vanskelig å gjenskape senere. Et bilde fra hvert hovedsteg gir verdifull dokumentasjon.`,
    },
    {
      id: 'handverk-design-vg1-4-5-example-1',
      type: 'example',
      title: 'Dokumentasjon av et prosjekt',
      content: `**Prosjekt: Håndlaget treboks**

**1. Idéfasen:**
- Bilde av første skisse
- Beskrivelse av inspirasjon og formål

**2. Materialvalg:**
- Foto av valgte tresorter
- Tekst om hvorfor disse ble valgt

**3. Produksjon:**
- Bilde av tilskjæring
- Bilde av sammenføyning
- Bilde av sliping
- Bilde av overflatebehandling

**4. Ferdig produkt:**
- Hovedbilde med god belysning
- Detaljbilder av hjørner og finish
- Bilde av boksen i bruk

**5. Refleksjon:**
- Hva fungerte godt?
- Hva ville du gjort annerledes?
- Hva lærte du?`,
    },
    {
      id: 'handverk-design-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er viktigst for god produktfotografi?',
        options: [
          { id: 'a', text: 'Dyrt kamerautstyr', isCorrect: false },
          { id: 'b', text: 'Godt lys og enkel bakgrunn', isCorrect: true },
          { id: 'c', text: 'Mange filtre og effekter', isCorrect: false },
          { id: 'd', text: 'Høy oppløsning', isCorrect: false },
        ],
        solution: 'Godt lys og en enkel, nøytral bakgrunn er de viktigste faktorene for god produktfotografi. Med disse på plass kan selv en smarttelefon ta profesjonelle bilder.',
      },
    },
    {
      id: 'handverk-design-vg1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hva en god digital portefølje bør inneholde for en håndverker.',
        solution: 'En god digital portefølje bør inneholde: Utvalgte prosjekter som viser bredde og kvalitet, prosessbilder (skisser, underveis, ferdig), beskrivelser av materialer og teknikker, refleksjoner over utfordringer og læring, og profesjonelle produktbilder. Porteføljen bør være godt organisert og oppdateres jevnlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Ta produktbilder av et håndverksprodukt du har laget.',
        subTasks: [
          {
            label: 'a',
            task: 'Ta et hovedbilde med god belysning og enkel bakgrunn.',
            solution: 'Bruk naturlig lys eller lampe, hvit eller nøytral bakgrunn, og sørg for at produktet er i fokus.',
          },
          {
            label: 'b',
            task: 'Ta minst to detaljbilder som viser kvaliteten på arbeidet.',
            solution: 'Fokuser på sammenføyninger, overflatebehandling eller andre detaljer som viser håndverkskvalitet.',
          },
        ],
        solution: 'Bildene bør vise produktet fra sin beste side med godt lys, ryddig bakgrunn og fokus på detaljer som demonstrerer kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en enkel prosessdokumentasjon av et lite prosjekt med bilder og tekst.',
        solution: 'Dokumentasjonen bør vise prosjektet fra idé til ferdig produkt med bilder fra hvert hovedsteg og korte beskrivelser av hva som ble gjort og hvorfor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-5-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Viktigheten av dokumentasjon for læring, kommunikasjon og karriere
- Grunnleggende produktfotografi (lys, bakgrunn, komposisjon)
- Bruk av video for prosessdokumentasjon
- Hvordan bygge en digital portefølje

God dokumentasjon gjør at arbeidet ditt får den oppmerksomheten det fortjener og hjelper deg med å utvikle deg som håndverker.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Digital portefølje', definition: 'Samling av arbeid presentert digitalt for å vise kompetanse' },
    { term: 'Produktfotografi', definition: 'Fotografering av produkter med fokus på lys og presentasjon' },
    { term: 'Prosessdokumentasjon', definition: 'Dokumentasjon av alle steg fra idé til ferdig produkt' },
    { term: 'Timelapse', definition: 'Video der lang tid komprimeres til kort klipp' },
    { term: 'Tredjedelsregelen', definition: 'Komposisjonsregel der bildet deles i ni like deler' },
  ],
};

// ============================================================================
// Kapittel 4.6: Kombinasjon av digitale og manuelle teknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4_6: TextbookChapter = {
  id: 'handverk-design-vg1-4-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4.6',
  title: 'Kombinasjon av digitale og manuelle teknikker',
  description: 'Utforsking av hvordan digitale og manuelle teknikker kan kombineres i moderne håndverk. Elevene reflekterer over fordeler og begrensninger ved begge tilnærminger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende og velge hensiktsmessige teknikker, verktøyer og materialer til produktet',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-6-intro',
      type: 'text',
      content: `De mest spennende håndverksproduktene i dag kombinerer ofte det beste fra digitale og manuelle teknikker. Digital teknologi kan gi presisjon og effektivitet, mens manuelt arbeid tilfører sjel, unike detaljer og håndverkskvalitet. I dette kapittelet utforsker vi hvordan du kan kombinere disse tilnærmingene i ditt eget arbeid.`,
    },
    {
      id: 'handverk-design-vg1-4-6-def-1',
      type: 'definition',
      title: 'Hybrid produksjon',
      content: `Hybrid produksjon kombinerer digitale og manuelle teknikker i samme prosjekt. For eksempel kan grunnstrukturen laserkuttes mens detaljer og finish gjøres for hånd. Målet er å utnytte styrkene til begge tilnærminger.`,
    },
    {
      id: 'handverk-design-vg1-4-6-text-1',
      type: 'text',
      content: `**Styrker og begrensninger**

**Digitale teknikker - styrker**:
- Høy presisjon og gjentakbarhet
- Rask produksjon av komplekse former
- Eksakt reproduksjon av design
- Effektiv materialutnyttelse
- Enkel lagring og deling av design

**Digitale teknikker - begrensninger**:
- Krever opplæring og utstyr
- Kan gi "maskinelt" uttrykk
- Begrenset materialutvalg
- Mindre fleksibilitet for improvisasjon

**Manuelle teknikker - styrker**:
- Håndverksmessig kvalitet og sjel
- Mulighet for improvisasjon og tilpasning
- Bredt materialutvalg
- Tradisjonsbærende kunnskap
- Unike, personlige uttrykk

**Manuelle teknikker - begrensninger**:
- Tidkrevende
- Varierende presisjon
- Avhengig av håndverksferdigheter
- Vanskelig å reprodusere nøyaktig`,
    },
    {
      id: 'handverk-design-vg1-4-6-text-2',
      type: 'text',
      content: `**Kombinasjonsstrategier**

**1. Digital grovarbeid, manuell finish**:
- Laserkutt eller CNC-fres grunnformen
- Håndslip, skjær detaljer, overflatebehandler manuelt
- Eksempel: Laserkuttet skilt med håndmalt dekor

**2. Manuell form, digital presisjon**:
- Design og skiss for hånd
- Digitaliser og perfeksjoner i CAD
- Produser med digital fabrikasjon
- Eksempel: Håndtegnet mønster som lasergraveres

**3. Digitale komponenter, manuell sammenføyning**:
- 3D-print eller laserkutt deler
- Sett sammen og finish for hånd
- Eksempel: 3D-printede beslag til et håndlaget møbel

**4. Digital prototyping, manuell produksjon**:
- Test design digitalt
- Produser i tradisjonelle materialer
- Eksempel: 3D-print prototypen, lage finalen i tre`,
    },
    {
      id: 'handverk-design-vg1-4-6-text-3',
      type: 'text',
      content: `**Når velge hva?**

**Velg digital når**:
- Du trenger høy presisjon
- Du skal lage flere like deler
- Formen er kompleks og vanskelig å lage manuelt
- Tid er begrenset
- Du skal prøve ut mange varianter

**Velg manuelt når**:
- Du ønsker unikt, personlig uttrykk
- Materialet krever håndverkskunnskap
- Designet utvikles underveis
- Du vil bygge tradisjonelle ferdigheter
- Prosjektet er småskala og unikt

**Kombiner når**:
- Du vil ha presisjon OG sjel
- Deler av prosjektet passer for digital, andre for manuelt
- Du vil utforske nye muligheter
- Du ønsker effektivitet uten å miste håndverkskvalitet`,
    },
    {
      id: 'handverk-design-vg1-4-6-def-2',
      type: 'definition',
      title: 'Digital håndverk',
      content: `Digital håndverk er et begrep som beskriver moderne håndverkspraksis der digitale verktøy brukes som en naturlig del av prosessen, på samme måte som tradisjonelle håndverktøy. Målet er å bruke teknologi for å utvide, ikke erstatte, håndverkerens ferdigheter.`,
    },
    {
      id: 'handverk-design-vg1-4-6-text-4',
      type: 'text',
      content: `**Eksempler på hybrid praksis**

**Møbeldesign**:
- Design i CAD for presise mål
- CNC-fres komplekse deler
- Håndskjær dekorative elementer
- Håndmonter og overflatebehandler

**Smykker**:
- 3D-modeller for presisjonsdesign
- 3D-print voksmodeller for støping
- Håndpolering og steinfatting
- Manuell gravering

**Keramikk**:
- 3D-print former og maler
- Håndform leiren
- Manuell glasering og dekor
- Tradisjonell brenning

**Tekstil**:
- Digital mønsterkonstruksjon
- Laserkutt stoffdeler
- Håndsøm detaljer og pynt
- Manuelt broderi eller trykk`,
    },
    {
      id: 'handverk-design-vg1-4-6-tip-1',
      type: 'tip',
      title: 'Vær bevisst på valgene',
      content: `Ikke bruk digital teknologi bare fordi du kan. Tenk gjennom hva prosjektet krever og velg teknikker som gir best resultat. Noen ganger er manuelt arbeid raskere og bedre enn å sette opp en maskin for en enkel oppgave.`,
    },
    {
      id: 'handverk-design-vg1-4-6-example-1',
      type: 'example',
      title: 'Hybrid prosjekt: Personlig veggklokke',
      content: `**Kombinasjon av teknikker:**

**Digitalt:**
1. Design klokkeskiven i Illustrator
2. Laserkutt skiven i kryssfiner
3. Lasergravér tall og dekor

**Manuelt:**
4. Slip og avrund kantene for hånd
5. Mal eller beis overflaten
6. Monter urverket
7. Lakkér for beskyttelse

**Resultat:**
En unik klokke med presisjonen fra digital fabrikasjon og varmen fra manuelt håndverk. Graveringen er perfekt, mens finishen viser at den er laget av et menneske.`,
    },
    {
      id: 'handverk-design-vg1-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedfordelen med hybrid produksjon?',
        options: [
          { id: 'a', text: 'Det er billigere enn ren digital produksjon', isCorrect: false },
          { id: 'b', text: 'Det kombinerer presisjon fra digital og sjel fra manuelt arbeid', isCorrect: true },
          { id: 'c', text: 'Det går raskere enn både digital og manuell produksjon', isCorrect: false },
          { id: 'd', text: 'Det krever mindre kompetanse', isCorrect: false },
        ],
        solution: 'Hybrid produksjon lar deg utnytte styrkene til begge tilnærminger - presisjonen og effektiviteten fra digital teknologi kombinert med den unike kvaliteten og sjelen fra manuelt håndverk.',
      },
    },
    {
      id: 'handverk-design-vg1-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign styrker og begrensninger ved digitale og manuelle teknikker.',
        solution: 'Digitale teknikker: Styrker - presisjon, gjentakbarhet, hastighet, effektiv materiautnyttelse. Begrensninger - krever utstyr og opplæring, begrenset materialvalg, kan virke upersonlig. Manuelle teknikker: Styrker - håndverkskvalitet, fleksibilitet, bredt materialvalg, unike uttrykk. Begrensninger - tidkrevende, varierende presisjon, avhengig av ferdigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Planlegg et hybrid prosjekt som kombinerer digitale og manuelle teknikker.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv produktet du vil lage.',
            solution: 'Velg et produkt som kan dra nytte av både presisjon og håndverksmessig finish.',
          },
          {
            label: 'b',
            task: 'Hvilke deler vil du lage digitalt og hvilke manuelt?',
            solution: 'Definer hvilke oppgaver som passer best for digital fabrikasjon og hvilke som bør gjøres for hånd.',
          },
          {
            label: 'c',
            task: 'Begrunn valgene dine.',
            solution: 'Forklar hvorfor denne kombinasjonen gir et bedre resultat enn ren digital eller ren manuell produksjon.',
          },
        ],
        solution: 'Planen bør vise gjennomtenkt bruk av begge teknikktyper basert på deres styrker, og begrunne hvorfor kombinasjonen gir et bedre resultat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når bør du velge manuell produksjon fremfor digital?',
        options: [
          { id: 'a', text: 'Når du skal lage mange identiske deler', isCorrect: false },
          { id: 'b', text: 'Når du ønsker et unikt, personlig uttrykk og designet utvikles underveis', isCorrect: true },
          { id: 'c', text: 'Når formen er svært kompleks', isCorrect: false },
          { id: 'd', text: 'Når tid er svært begrenset', isCorrect: false },
        ],
        solution: 'Manuell produksjon er best når du ønsker et unikt uttrykk, når designet utvikles underveis, eller når prosjektet krever tradisjonelle håndverksteknikker som gir materialet sjel og karakter.',
      },
    },
    {
      id: 'handverk-design-vg1-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjennomfør det hybride prosjektet du planla i oppgave 3, eller et annet prosjekt som kombinerer digitale og manuelle teknikker.',
        solution: 'Prosjektet bør demonstrere bevisst bruk av både digitale og manuelle teknikker, der hver teknikktype bidrar med sine styrker til det endelige resultatet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-6-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Styrker og begrensninger ved digitale og manuelle teknikker
- Ulike strategier for å kombinere teknikkene
- Når du bør velge digital, manuell eller hybrid tilnærming
- Konkrete eksempler på hybrid praksis i ulike håndverksfag

Det moderne håndverket handler ikke om å velge mellom gammelt og nytt, men om å bruke alle tilgjengelige verktøy - både digitale og manuelle - for å skape best mulig resultat.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Hybrid produksjon', definition: 'Kombinasjon av digitale og manuelle teknikker i samme prosjekt' },
    { term: 'Digital håndverk', definition: 'Moderne håndverkspraksis som integrerer digitale verktøy' },
    { term: 'Digital grovarbeid', definition: 'Bruke digital fabrikasjon for grunnform, manuell for finish' },
    { term: 'Digital prototyping', definition: 'Teste design digitalt før manuell produksjon' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 4
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL4_CHAPTERS = [
  CHAPTER_HANDVERK_DESIGN_VG1_4_1,
  CHAPTER_HANDVERK_DESIGN_VG1_4_2,
  CHAPTER_HANDVERK_DESIGN_VG1_4_3,
  CHAPTER_HANDVERK_DESIGN_VG1_4_4,
  CHAPTER_HANDVERK_DESIGN_VG1_4_5,
  CHAPTER_HANDVERK_DESIGN_VG1_4_6,
];
