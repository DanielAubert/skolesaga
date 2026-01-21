/**
 * Kunst og håndverk 6. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kunst og håndverk på 6. trinn
 * Innhold tilpasset 11-12 åringer med fokus på praktisk og kreativ læring
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Visuell kommunikasjon
// ============================================================================

export const CHAPTER_KUNST_6_1_1: TextbookChapter = {
  id: 'kunst-6-1-1',
  courseId: 'kunst-6',
  chapterNumber: '1.1',
  title: 'Hva er visuell kommunikasjon?',
  description: 'Lær hvordan bilder, symboler og farger formidler budskap uten ord.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og bruke visuell kommunikasjon i eget arbeid',
    'forstå hvordan bilder og symboler formidler budskap',
  ],
  content: [
    {
      id: 'kunst-6-1-1-intro',
      type: 'text',
      content: `Har du noen gang lagt merke til hvordan et trafikkskilt kan fortelle deg noe uten å bruke ord? Eller hvordan et logo kan få deg til å tenke på et bestemt merke? Dette er visuell kommunikasjon - kunsten å formidle budskap gjennom bilder, farger og former.`,
    },
    {
      id: 'kunst-6-1-1-def-1',
      type: 'definition',
      title: 'Visuell kommunikasjon',
      content: `Visuell kommunikasjon er å formidle informasjon, ideer eller følelser gjennom det vi ser - som bilder, symboler, farger, former og typografi. Det er en måte å "snakke" på uten å bruke ord.`,
    },
    {
      id: 'kunst-6-1-1-text-2',
      type: 'text',
      content: `**Hvorfor er visuell kommunikasjon viktig?**

- **Universalt**: Bilder kan forstås uansett hvilket språk du snakker
- **Raskt**: Vi oppfatter bilder mye raskere enn tekst
- **Følelser**: Bilder kan vekke følelser på en kraftig måte
- **Hukommelse**: Vi husker bilder bedre enn ord

Tenk på emojier - de er et perfekt eksempel på visuell kommunikasjon som brukes over hele verden!`,
    },
    {
      id: 'kunst-6-1-1-text-3',
      type: 'text',
      content: `**Elementer i visuell kommunikasjon**

**Farger**: Rød kan bety fare eller kjærlighet, grønn betyr ofte "gå" eller natur
**Former**: Rundinger føles myke og vennlige, spisse former kan virke farlige
**Linjer**: Horisontale linjer gir ro, diagonale linjer gir bevegelse
**Bilder**: Fotografier, tegninger og illustrasjoner
**Symboler**: Enkle bilder som representerer noe (f.eks. hjerte = kjærlighet)
**Typografi**: Hvordan bokstaver ser ut - store, små, tynne, tykke`,
    },
    {
      id: 'kunst-6-1-1-example-1',
      type: 'example',
      title: 'Trafikkskilt som visuell kommunikasjon',
      content: `Trafikkskilt er designet for å bli forstått raskt:
- **Rødt**: Stopp eller forbud
- **Gult**: Advarsel, vær oppmerksom
- **Blått**: Informasjon eller påbud
- **Trekant**: Advarsel
- **Sirkel**: Påbud eller forbud
- **Firkant**: Informasjon

Du trenger ikke lese teksten - formen og fargen forteller deg hva du skal gjøre!`,
    },
    {
      id: 'kunst-6-1-1-tip-1',
      type: 'tip',
      title: 'Se etter visuell kommunikasjon rundt deg',
      content: `Prøv å legge merke til visuell kommunikasjon i hverdagen:
- Logoer på butikker og produkter
- Ikoner på telefonen din
- Skilt og veivisere
- Forsider på bøker og blader
- Reklameplakater`,
    },
    {
      id: 'kunst-6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er visuell kommunikasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å formidle budskap gjennom bilder, farger og former',
            multipleChoiceOptions: ['Å formidle budskap gjennom bilder, farger og former', 'Å skrive lange tekster', 'Å snakke høyt', 'Å bruke bare svart-hvitt'],
          },
        ],
        solution: 'Visuell kommunikasjon handler om å formidle informasjon og følelser gjennom det vi ser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken farge betyr vanligvis "stopp" eller "fare" i trafikkskilt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Rød',
            multipleChoiceOptions: ['Rød', 'Blå', 'Grønn', 'Gul'],
          },
        ],
        solution: 'Rød farge brukes for stopp og fare fordi den fanger oppmerksomheten vår best.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Design et symbol som betyr "vennskap" uten å bruke ord.',
        solution: 'Tenk på hva vennskap betyr for deg. Du kan bruke hjerter, sammenkoblede hender, figurer sammen, eller andre visuelle elementer som formidler tilknytning og omsorg.',
        hints: ['Hva symboliserer vennskap for deg?', 'Bruk enkle former', 'Test om andre forstår symbolet ditt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_1_2: TextbookChapter = {
  id: 'kunst-6-1-2',
  courseId: 'kunst-6',
  chapterNumber: '1.2',
  title: 'Logoer og merkevarebygging',
  description: 'Forstå hvordan logoer lages og hva som gjør dem effektive.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og forstå visuell identitet og logodesign',
    'lage egne logoer med tydelig budskap',
  ],
  content: [
    {
      id: 'kunst-6-1-2-intro',
      type: 'text',
      content: `Tenk på Apple-logoen, Nike-swooshen eller McDonalds gylne buer. Du kjenner dem igjen med en gang! En god logo er enkel, minneverdig og formidler noe om merkevaren. La oss lære hvordan designere lager logoer.`,
    },
    {
      id: 'kunst-6-1-2-def-1',
      type: 'definition',
      title: 'Logo',
      content: `En logo er et visuelt symbol som representerer et selskap, en organisasjon eller et produkt. Den skal være gjenkjennelig og formidle merkevarens personlighet og verdier.`,
    },
    {
      id: 'kunst-6-1-2-text-2',
      type: 'text',
      content: `**Typer logoer**

**Bokstavmerke**: Bare bokstaver eller initialer (f.eks. HBO, IBM)
**Ordmerke**: Firmanavnet i en spesiell skrifttype (f.eks. Google, Coca-Cola)
**Bildemerke**: Et symbol eller ikon (f.eks. Apple-eplet, Twitter-fuglen)
**Kombinasjonsmerke**: Både tekst og symbol (f.eks. Adidas, Burger King)
**Emblem**: Tekst inne i et symbol (f.eks. Harley-Davidson, Starbucks)`,
    },
    {
      id: 'kunst-6-1-2-text-3',
      type: 'text',
      content: `**Hva gjør en logo god?**

1. **Enkel**: Lett å tegne og huske
2. **Minneverdig**: Skiller seg ut og huskes
3. **Tidløs**: Fungerer også om 10-20 år
4. **Allsidig**: Fungerer i alle størrelser og på alle materialer
5. **Passende**: Passer til det merkevaren representerer

De mest kjente logoene i verden er ofte de enkleste!`,
    },
    {
      id: 'kunst-6-1-2-example-1',
      type: 'example',
      title: 'Nike-logoen "Swoosh"',
      content: `Nike-logoen er en av verdens mest gjenkjennelige:
- Designet i 1971 av en student
- Kostet bare 35 dollar å designe!
- Symboliserer bevegelse og fart
- Inspirert av den greske gudinnen Nikes vinger
- Fungerer i alle størrelser, fra sko til store reklamer

Den enkle formen gjør den lett å huske og tegne.`,
    },
    {
      id: 'kunst-6-1-2-tip-1',
      type: 'tip',
      title: 'Start med skisser',
      content: `Når du designer en logo:
1. Brainstorm ideer med ord først
2. Tegn mange raske skisser (minst 10-20!)
3. Velg de beste ideene å utvikle videre
4. Forenkle, forenkle, forenkle
5. Test i ulike størrelser`,
    },
    {
      id: 'kunst-6-1-2-text-4',
      type: 'text',
      content: `**Farger i logoer**

Farger påvirker hvordan vi oppfatter en merkevare:

- **Rød**: Energi, lidenskap, handling (Coca-Cola, YouTube)
- **Blå**: Tillit, profesjonalitet, ro (Facebook, Samsung)
- **Grønn**: Natur, helse, vekst (Starbucks, Spotify)
- **Gul**: Optimisme, varme, glede (McDonalds, IKEA)
- **Svart**: Eleganse, luksus, styrke (Chanel, Nike)
- **Oransje**: Kreativitet, eventyr, vennlighet (Fanta, Nickelodeon)`,
    },
    {
      id: 'kunst-6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en kombinasjonslogo?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En logo med både tekst og symbol',
            multipleChoiceOptions: ['En logo med både tekst og symbol', 'En logo med bare bokstaver', 'En logo med bare bilde', 'En logo med mange farger'],
          },
        ],
        solution: 'En kombinasjonslogo bruker både et symbol/ikon og tekst sammen, som Adidas eller Burger King.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken farge assosieres ofte med tillit og profesjonalitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Blå',
            multipleChoiceOptions: ['Blå', 'Rød', 'Gul', 'Grønn'],
          },
        ],
        solution: 'Blå farge assosieres med tillit og profesjonalitet. Derfor bruker mange banker og teknologiselskaper blå logoer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Design en logo for en fiktiv bedrift (f.eks. en iskrembutikk, et spillselskap, eller en miljøorganisasjon).',
        solution: 'Velg en bedrift, tenk på hva den representerer, og lag enkle skisser. Velg farger som passer til budskapet. Husk: enkelt er ofte bedre!',
        hints: ['Hvilke verdier har bedriften?', 'Lag minst 5 forskjellige skisser', 'Hold det enkelt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Tegning og form
// ============================================================================

export const CHAPTER_KUNST_6_2_1: TextbookChapter = {
  id: 'kunst-6-2-1',
  courseId: 'kunst-6',
  chapterNumber: '2.1',
  title: 'Perspektiv og dybde',
  description: 'Lær å tegne med perspektiv for å skape illusjon av dybde.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke perspektiv for å skape dybde i tegninger',
    'forstå og anvende forsvinningspunkt og horisontlinje',
  ],
  content: [
    {
      id: 'kunst-6-2-1-intro',
      type: 'text',
      content: `Har du noen gang lagt merke til at ting som er langt unna ser mindre ut enn ting som er nære? Og at parallelle linjer, som jernbaneskinner, ser ut til å møtes i det fjerne? Dette er perspektiv, og ved å forstå det kan du tegne bilder som ser tredimensjonale ut!`,
    },
    {
      id: 'kunst-6-2-1-def-1',
      type: 'definition',
      title: 'Perspektiv',
      content: `Perspektiv er en teknikk for å vise dybde og avstand på en flat overflate. Det får tegninger til å se ut som om de har tre dimensjoner i stedet for to.`,
    },
    {
      id: 'kunst-6-2-1-text-2',
      type: 'text',
      content: `**Viktige begreper**

**Horisontlinje**: Den horisontale linjen der himmelen møter bakken. Den er alltid på øyehøyde din.

**Forsvinningspunkt**: Punktet på horisontlinjen der parallelle linjer ser ut til å møtes.

**Perspektivlinjer**: Linjer som går fra objekter mot forsvinningspunktet.`,
    },
    {
      id: 'kunst-6-2-1-text-3',
      type: 'text',
      content: `**Ettpunktsperspektiv**

Dette er den enkleste formen for perspektiv:
- En forsvinningspunkt på horisontlinjen
- Alle linjer som går "inn i" bildet peker mot dette punktet
- Linjer som går opp/ned eller til sidene forblir rette

Perfekt for å tegne:
- Veier som forsvinner i det fjerne
- Korridorer og tunneler
- Jernbaneskinner`,
    },
    {
      id: 'kunst-6-2-1-example-1',
      type: 'example',
      title: 'Tegne en vei med ettpunktsperspektiv',
      content: `1. Tegn en horisontal linje (horisontlinjen)
2. Sett et punkt midt på linjen (forsvinningspunktet)
3. Tegn to linjer fra bunnen av papiret til forsvinningspunktet - dette er veienes kanter
4. Legg til stiplete linjer i midten som også peker mot forsvinningspunktet
5. Tegn trær eller stolper på sidene - de blir mindre jo nærmere forsvinningspunktet de er`,
    },
    {
      id: 'kunst-6-2-1-text-4',
      type: 'text',
      content: `**Andre måter å vise dybde på**

I tillegg til perspektiv kan du bruke:

- **Størrelse**: Store ting virker nære, små ting virker langt unna
- **Overlapping**: Ting foran dekker delvis ting bak
- **Detaljer**: Ting nært har mer detaljer enn ting langt unna
- **Farger**: Ting langt unna blir lysere og mer blålige
- **Plassering**: Ting høyere på arket virker lengre unna`,
    },
    {
      id: 'kunst-6-2-1-tip-1',
      type: 'tip',
      title: 'Bruk linjal!',
      content: `For nøyaktige perspektivtegninger:
- Bruk alltid linjal for rette linjer
- Merk forsvinningspunktet tydelig
- Tegn perspektivlinjene lett med blyant først
- Viskelær ut hjelpelinjer når du er ferdig`,
    },
    {
      id: 'kunst-6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et forsvinningspunkt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Punktet der parallelle linjer ser ut til å møtes',
            multipleChoiceOptions: ['Punktet der parallelle linjer ser ut til å møtes', 'Der du signerer tegningen', 'Midten av papiret', 'Der du starter å tegne'],
          },
        ],
        solution: 'Forsvinningspunktet er der parallelle linjer som går inn i bildet ser ut til å møtes på horisontlinjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor er horisontlinjen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'På øyehøyde, der himmelen møter bakken',
            multipleChoiceOptions: ['På øyehøyde, der himmelen møter bakken', 'Alltid øverst på arket', 'Alltid nederst på arket', 'Den finnes ikke i perspektiv'],
          },
        ],
        solution: 'Horisontlinjen er alltid på øyehøyde og er der himmelen ser ut til å møte bakken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn en vei eller en korridor med ettpunktsperspektiv.',
        solution: 'Tegn først horisontlinjen, marker forsvinningspunktet, og tegn linjer fra papirkantene mot dette punktet. Legg til detaljer som blir mindre mot forsvinningspunktet.',
        hints: ['Start med horisontlinjen', 'Marker forsvinningspunktet tydelig', 'Bruk linjal for rette linjer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_2_2: TextbookChapter = {
  id: 'kunst-6-2-2',
  courseId: 'kunst-6',
  chapterNumber: '2.2',
  title: 'Proporsjoner og menneskekroppen',
  description: 'Lær å tegne mennesker med riktige proporsjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke proporsjoner i tegning',
    'tegne menneskekroppen med riktige størrelsesforhold',
  ],
  content: [
    {
      id: 'kunst-6-2-2-intro',
      type: 'text',
      content: `Å tegne mennesker kan virke vanskelig, men det blir mye lettere når du kjenner til proporsjonene - altså hvordan de ulike delene av kroppen forholder seg til hverandre i størrelse. Kunstnere har brukt disse "reglene" i tusenvis av år!`,
    },
    {
      id: 'kunst-6-2-2-def-1',
      type: 'definition',
      title: 'Proporsjoner',
      content: `Proporsjoner handler om størrelsesforhold - hvor store de ulike delene er i forhold til hverandre. For eksempel er hodet vårt omtrent en viss del av hele kroppens høyde.`,
    },
    {
      id: 'kunst-6-2-2-text-2',
      type: 'text',
      content: `**Proporsjonene til en voksen**

Kunstnere bruker ofte hodet som målestokk:
- Hele kroppen er ca. **7-8 hoder høy**
- Skuldrene er ca. **2 hoder brede**
- Albuen er ved **midjen** (halvveis)
- Fingrene rekker til **midt på låret**
- Knærne er ca. **2 hoder** fra bakken

Disse reglene gir deg en god start, men alle mennesker er litt forskjellige!`,
    },
    {
      id: 'kunst-6-2-2-text-3',
      type: 'text',
      content: `**Barn har andre proporsjoner**

Barn er ikke bare små voksne - de har andre proporsjoner:
- Et spedbarn er bare ca. **4 hoder høyt**
- Et 6-åring er ca. **6 hoder høyt**
- Barn har **større hoder** i forhold til kroppen
- Armer og bein er **kortere** i forhold til kroppen

Derfor ser det rart ut hvis du tegner et barn med voksenproporsjoner!`,
    },
    {
      id: 'kunst-6-2-2-tip-1',
      type: 'tip',
      title: 'Pinnemenneske først!',
      content: `For å få riktige proporsjoner:
1. Start med et enkelt pinnemenneske
2. Marker leddene som punkter
3. Sjekk at proporsjonene stemmer
4. Bygg kroppen rundt pinnemennesket
5. Legg til detaljer til slutt`,
    },
    {
      id: 'kunst-6-2-2-text-4',
      type: 'text',
      content: `**Ansiktets proporsjoner**

Også ansiktet har faste proporsjoner:
- Øynene er **midt på hodet** (ikke øverst!)
- Avstanden mellom øynene er **ett øyes bredde**
- Nesen slutter **halvveis mellom øyne og hake**
- Munnen er **en tredel ned** fra nese til hake
- Ørene går fra **øyenivå til nesenivå**

Mange tegner øynene for høyt - de er faktisk midt på hodet!`,
    },
    {
      id: 'kunst-6-2-2-example-1',
      type: 'example',
      title: 'Tegne et ansikt steg for steg',
      content: `1. Tegn en oval (eggform, smal nederst)
2. Del ovalen i to med en vannrett linje - her kommer øynene
3. Del nedre halvdel i to - her kommer nesen
4. Del den nedre fjerdedelen i to - her kommer munnen
5. Tegn ørene mellom øye- og neselinjen
6. Legg til hår på toppen og sidene`,
    },
    {
      id: 'kunst-6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange "hoder høy" er en voksen person ca.?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '7-8 hoder',
            multipleChoiceOptions: ['7-8 hoder', '3-4 hoder', '10-12 hoder', '5-6 hoder'],
          },
        ],
        solution: 'En voksen person er omtrent 7-8 hoder høy. Dette er en nyttig målestokk for å tegne mennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor på hodet befinner øynene seg?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Midt på hodet',
            multipleChoiceOptions: ['Midt på hodet', 'I øvre tredjedel', 'I nedre tredjedel', 'Rett under håret'],
          },
        ],
        solution: 'Øynene befinner seg midt på hodet, ikke øverst som mange tror!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn en stående person med riktige proporsjoner. Bruk hodet som målestokk.',
        solution: 'Start med å tegne hodet, og mål deretter ut 7-8 hoder nedover. Marker midjen ved ca. 4 hoder, knærne ved 2 hoder fra bakken.',
        hints: ['Tegn hodet først', 'Bruk hodet til å måle resten av kroppen', 'Start med pinnemenneske'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Fargelære
// ============================================================================

export const CHAPTER_KUNST_6_3_1: TextbookChapter = {
  id: 'kunst-6-3-1',
  courseId: 'kunst-6',
  chapterNumber: '3.1',
  title: 'Fargeharmonier',
  description: 'Lær hvordan farger kan kombineres på harmoniske og effektive måter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke ulike fargeharmonier',
    'velge fargekombinasjoner som fungerer godt sammen',
  ],
  content: [
    {
      id: 'kunst-6-3-1-intro',
      type: 'text',
      content: `Du har kanskje lært om fargesirkelen og primærfarger før. Nå skal vi gå dypere og lære hvordan designere og kunstnere velger farger som ser bra ut sammen. Dette kalles fargeharmonier!`,
    },
    {
      id: 'kunst-6-3-1-def-1',
      type: 'definition',
      title: 'Fargeharmoni',
      content: `Fargeharmoni er når farger er kombinert på en måte som er behagelig for øyet. Det finnes flere "oppskrifter" for å finne farger som harmonerer godt.`,
    },
    {
      id: 'kunst-6-3-1-text-2',
      type: 'text',
      content: `**Komplementære farger**

Farger som står rett overfor hverandre i fargesirkelen:
- Rød og grønn
- Blå og oransje
- Gul og lilla

Disse fargene skaper sterk kontrast og gjør hverandre mer intense. Brukes ofte i reklame og logoer for å få ting til å "poppe"!`,
    },
    {
      id: 'kunst-6-3-1-text-3',
      type: 'text',
      content: `**Analoge farger**

Farger som ligger ved siden av hverandre i fargesirkelen:
- Blå, blågrønn og grønn
- Rød, oransje og gul
- Lilla, rød og rosa

Disse fargene skaper rolige, harmoniske kombinasjoner. De finnes ofte i naturen, som høstløv eller solnedganger.`,
    },
    {
      id: 'kunst-6-3-1-text-4',
      type: 'text',
      content: `**Triadiske farger**

Tre farger som er jevnt fordelt rundt fargesirkelen (120 grader mellom hver):
- Rød, gul og blå (primærfargene)
- Oransje, grønn og lilla (sekundærfargene)

Triadiske farger er livlige og lekne, men kan være overveldende. Bruk en hovedfarge og de andre som aksenter.`,
    },
    {
      id: 'kunst-6-3-1-example-1',
      type: 'example',
      title: 'Fargeharmonier i kjente logoer',
      content: `**Komplementære**: McDonalds (rød og gul/gull), FedEx (oransje og lilla)
**Analoge**: BP (grønn og gul), Instagram (rosa, oransje, lilla gradient)
**Triadiske**: Google (rød, gul, blå, grønn), Burger King (rød, gul, blå)

Legg merke til at de ofte bruker en dominerende farge med aksenter av de andre!`,
    },
    {
      id: 'kunst-6-3-1-tip-1',
      type: 'tip',
      title: '60-30-10-regelen',
      content: `For balanserte fargekombinasjoner:
- **60%** - Hovedfargen (bakgrunn, store flater)
- **30%** - Sekundærfarge (møbler, klær i et bilde)
- **10%** - Aksentfarge (detaljer som popper)

Dette skaper visuell balanse uten at det blir rotete!`,
    },
    {
      id: 'kunst-6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er komplementærfarger?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Farger som står rett overfor hverandre i fargesirkelen',
            multipleChoiceOptions: ['Farger som står rett overfor hverandre i fargesirkelen', 'Farger som er ved siden av hverandre', 'Bare primærfarger', 'Farger med hvitt blandet inn'],
          },
        ],
        solution: 'Komplementærfarger står overfor hverandre i fargesirkelen, som rød-grønn og blå-oransje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken fargeharmoni gir en rolig og naturlig følelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Analog fargeharmoni',
            multipleChoiceOptions: ['Analog fargeharmoni', 'Komplementær fargeharmoni', 'Triadisk fargeharmoni', 'Svart-hvitt'],
          },
        ],
        solution: 'Analoge farger (som ligger ved siden av hverandre i fargesirkelen) skaper rolige, harmoniske kombinasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag tre små malerier - ett med komplementære farger, ett med analoge farger, og ett med triadiske farger.',
        solution: 'Velg farger fra fargesirkelen etter de tre harmoniene. Legg merke til hvordan de ulike kombinasjonene føles forskjellig!',
        hints: ['Bruk fargesirkelen', 'Start med hovedfargen', 'Bruk 60-30-10-regelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_3_2: TextbookChapter = {
  id: 'kunst-6-3-2',
  courseId: 'kunst-6',
  chapterNumber: '3.2',
  title: 'Fargers psykologi og symbolikk',
  description: 'Forstå hvordan farger påvirker følelser og hva de symboliserer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå hvordan farger påvirker følelser',
    'bruke fargers symbolikk bevisst i eget arbeid',
  ],
  content: [
    {
      id: 'kunst-6-3-2-intro',
      type: 'text',
      content: `Farger gjør mye mer enn å se pene ut - de påvirker hvordan vi føler oss! Restauranter bruker rødt fordi det gjør oss sultne, sykehus bruker ofte blått fordi det er beroligende. La oss lære om fargers kraft!`,
    },
    {
      id: 'kunst-6-3-2-def-1',
      type: 'definition',
      title: 'Fargepsykologi',
      content: `Fargepsykologi handler om hvordan farger påvirker våre følelser, tankemønster og atferd. Farger kan gjøre oss glade, triste, rolige eller energiske.`,
    },
    {
      id: 'kunst-6-3-2-text-2',
      type: 'text',
      content: `**Varme farger - energi og handling**

**Rød**: Lidenskap, energi, fare, kjærlighet
- Øker pulsen og oppmerksomheten
- Brukes i salgskampanjer og "kjøp nå"-knapper

**Oransje**: Kreativitet, entusiasme, vennlighet
- Kombinerer røds energi med guls glede
- Ofte brukt for å vise rimelige priser

**Gul**: Glede, optimisme, advarsel
- Den mest synlige fargen
- Kan også bety forsiktighet (trafikkskilt)`,
    },
    {
      id: 'kunst-6-3-2-text-3',
      type: 'text',
      content: `**Kalde farger - ro og tillit**

**Blå**: Tillit, ro, tristhet, profesjonalitet
- Senker pulsen og stressnivået
- Den mest populære fargen i verden
- Brukes av banker, teknologiselskaper, sosiale medier

**Grønn**: Natur, vekst, helse, penger
- Beroligende for øynene
- Symboliserer ofte miljøvennlighet

**Lilla**: Luksus, mysterium, kreativitet
- Historisk en dyr farge (sjelden i naturen)
- Brukes av luksusmerkevarer`,
    },
    {
      id: 'kunst-6-3-2-text-4',
      type: 'text',
      content: `**Nøytrale farger**

**Hvit**: Renhet, enkelhet, fred
- Gir følelse av rom og lys
- Brukes mye i medisin og teknologi

**Svart**: Eleganse, makt, mysterium
- Kan virke sofistikert eller truende
- Populær i moteverden

**Grå**: Balanse, nøytralitet, profesjonalitet
- Kan virke kjedelig alene, men balanserer andre farger

**Brun**: Natur, varme, pålitelighet
- Jordnær og trygg
- Brukes av kaffemerker og naturprodukter`,
    },
    {
      id: 'kunst-6-3-2-tip-1',
      type: 'tip',
      title: 'Farger betyr forskjellige ting i ulike kulturer',
      content: `Husk at fargesymbolikk varierer:
- **Hvit** betyr renhet i Vesten, men sorg i noen asiatiske land
- **Rød** er lykkefargen i Kina
- **Grønn** er hellig i islam
- **Gul** kan bety feighet i noen kulturer

Tenk på publikumet ditt når du velger farger!`,
    },
    {
      id: 'kunst-6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken farge assosieres med ro og tillit?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Blå',
            multipleChoiceOptions: ['Blå', 'Rød', 'Oransje', 'Gul'],
          },
        ],
        solution: 'Blå farge assosieres med ro, tillit og profesjonalitet. Derfor er den populær blant banker og teknologiselskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor bruker mange restauranter rød farge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi rød øker appetitten og energinivået',
            multipleChoiceOptions: ['Fordi rød øker appetitten og energinivået', 'Fordi det er billigst', 'Fordi det er vanskelig å se flekker', 'Fordi alle restauranter må bruke rød'],
          },
        ],
        solution: 'Rød farge øker pulsen, energien og appetitten - perfekt for å få folk til å bli sultne og spise mer!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag to versjoner av samme bilde - en med varme farger og en med kalde farger. Beskriv hvordan de føles forskjellig.',
        solution: 'Det varme bildet vil føles energisk og aktivt, mens det kalde bildet vil føles rolig og fredelig. Samme motiv kan gi helt ulike følelser!',
        hints: ['Velg et enkelt motiv', 'Bruk bare varme farger i den ene', 'Bruk bare kalde farger i den andre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Design og arkitektur
// ============================================================================

export const CHAPTER_KUNST_6_4_1: TextbookChapter = {
  id: 'kunst-6-4-1',
  courseId: 'kunst-6',
  chapterNumber: '4.1',
  title: 'Grunnleggende arkitektur',
  description: 'Lær om hvordan bygninger designes og hva som gjør arkitektur interessant.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive arkitektur i nærmiljøet',
    'forstå grunnleggende arkitektoniske begreper og elementer',
  ],
  content: [
    {
      id: 'kunst-6-4-1-intro',
      type: 'text',
      content: `Arkitektur er kunsten å designe bygninger. Fra hytter til skyskrapere, fra eldgamle templer til moderne museer - arkitektur former verden vi lever i. La oss utforske hva som gjør bygninger interessante!`,
    },
    {
      id: 'kunst-6-4-1-def-1',
      type: 'definition',
      title: 'Arkitektur',
      content: `Arkitektur er kunsten og vitenskapen om å designe og konstruere bygninger og strukturer. En arkitekt må tenke på både hvordan bygningen ser ut (estetikk) og hvordan den fungerer (funksjon).`,
    },
    {
      id: 'kunst-6-4-1-text-2',
      type: 'text',
      content: `**Grunnleggende elementer i arkitektur**

**Vegger**: Definerer rom og gir beskyttelse
**Tak**: Beskytter mot vær og vind
**Vinduer**: Slipper inn lys og luft
**Dører**: Gir tilgang og forbindelse mellom rom
**Søyler**: Bærer vekten av bygningen
**Trapper**: Kobler sammen etasjer
**Fasade**: Bygningens "ansikt" mot gaten`,
    },
    {
      id: 'kunst-6-4-1-text-3',
      type: 'text',
      content: `**Arkitektoniske stiler gjennom tidene**

**Antikk (Hellas/Roma)**: Søyler, symmetri, templer
**Gotisk**: Høye spisser, store vinduer, katedraler
**Renessanse**: Harmoni, kupler, symmetri
**Barokk**: Overdådig, kurvede former, dekorasjon
**Moderne**: Enkle former, store vindusflater, betong og glass
**Samtidsarkitektur**: Eksperimentell, miljøvennlig, ulike materialer`,
    },
    {
      id: 'kunst-6-4-1-example-1',
      type: 'example',
      title: 'Norsk arkitektur',
      content: `Norge har spennende arkitektur:
- **Stavkirker**: Vikingtidens trekirker med dragehoder
- **Stortinget**: Historisk bygning i Oslo
- **Operaen i Oslo**: Moderne hvit bygning du kan gå på taket av
- **Holmenkollen**: Ikonisk skihoppbakke
- **Nordlyskatedralen i Alta**: Moderne kirke med bølgende form

Legg merke til arkitekturen rundt deg - hva slags stil har skolen din?`,
    },
    {
      id: 'kunst-6-4-1-text-4',
      type: 'text',
      content: `**Form følger funksjon**

Dette er et viktig prinsipp i arkitektur:
- Et sykehus trenger store korridorer og mye lys
- En konserthall trenger god akustikk
- En skole trenger klasserom og gymsal
- Et hjem trenger soverom, kjøkken og bad

Arkitekten må alltid tenke på hva bygningen skal brukes til!`,
    },
    {
      id: 'kunst-6-4-1-tip-1',
      type: 'tip',
      title: 'Se på bygninger med nye øyne',
      content: `Når du ser på en bygning, spør deg selv:
- Hvilke former ser jeg? (firkanter, sirkler, trekanter)
- Hvilke materialer er brukt? (tre, stein, betong, glass)
- Er den symmetrisk eller asymmetrisk?
- Hvordan brukes lys og vinduer?
- Passer den inn i omgivelsene?`,
    },
    {
      id: 'kunst-6-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr "form følger funksjon"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At bygningens utseende bør bestemmes av hva den skal brukes til',
            multipleChoiceOptions: ['At bygningens utseende bør bestemmes av hva den skal brukes til', 'At alle bygninger bør se like ut', 'At funksjon ikke er viktig', 'At form kommer før funksjon'],
          },
        ],
        solution: 'Prinsippet "form følger funksjon" betyr at designet til en bygning bør bestemmes av hva den skal brukes til.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken arkitektonisk stil kjennetegnes av høye spisser og store vinduer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gotisk',
            multipleChoiceOptions: ['Gotisk', 'Moderne', 'Antikk', 'Barokk'],
          },
        ],
        solution: 'Gotisk arkitektur kjennetegnes av høye spisser (spir), store vinduer og imponerende katedraler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn fasaden til drømmehuset ditt. Tenk på stil, vinduer, dører og materialer.',
        solution: 'Bestem først hvilken stil du liker. Tegn grunnformen, legg til vinduer og dør, og dekorer fasaden. Husk å tenke på proporsjoner!',
        hints: ['Hvilken stil liker du best?', 'Hvor mange etasjer?', 'Hvordan er vinduene plassert?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_4_2: TextbookChapter = {
  id: 'kunst-6-4-2',
  courseId: 'kunst-6',
  chapterNumber: '4.2',
  title: 'Romdesign og interiør',
  description: 'Lær hvordan man designer funksjonelle og estetiske rom.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og presentere enkle romløsninger',
    'forstå hvordan møbler og farger påvirker et rom',
  ],
  content: [
    {
      id: 'kunst-6-4-2-intro',
      type: 'text',
      content: `Interiørdesign handler om å gjøre innsiden av bygninger funksjonelle og vakre. Fra hvordan møbler plasseres til hvilke farger som velges - alt påvirker hvordan vi føler oss i et rom.`,
    },
    {
      id: 'kunst-6-4-2-def-1',
      type: 'definition',
      title: 'Interiørdesign',
      content: `Interiørdesign er kunsten å planlegge og utforme innendørs rom. En interiørdesigner velger møbler, farger, materialer, belysning og dekorasjon for å skape funksjonelle og behagelige rom.`,
    },
    {
      id: 'kunst-6-4-2-text-2',
      type: 'text',
      content: `**Grunnleggende prinsipper**

**Funksjon**: Hva skal rommet brukes til?
**Flyt**: Kan du bevege deg lett gjennom rommet?
**Balanse**: Er møblene jevnt fordelt?
**Fokuspunkt**: Hva ser du først når du kommer inn?
**Skala**: Passer møblene til rommets størrelse?
**Harmoni**: Passer fargene og materialene sammen?`,
    },
    {
      id: 'kunst-6-4-2-text-3',
      type: 'text',
      content: `**Planløsning**

En planløsning er et kart over rommet sett ovenfra:
- Viser vegger, dører og vinduer
- Viser hvor møblene er plassert
- Tegnes i målestokk (f.eks. 1:50)
- Hjelper deg planlegge før du møblerer

Før du flytter tunge møbler, lag en planløsning på papir!`,
    },
    {
      id: 'kunst-6-4-2-tip-1',
      type: 'tip',
      title: 'Soner i et rom',
      content: `Del opp store rom i soner:
- **Aktivitetssone**: TV, spill, lek
- **Rolig sone**: Lesing, avslapping
- **Arbeidssone**: Lekser, hobbyarbeid

Bruk tepper, møbelplassering eller belysning for å definere sonene.`,
    },
    {
      id: 'kunst-6-4-2-text-4',
      type: 'text',
      content: `**Farger i interiør**

- **Lyse farger**: Får rom til å virke større og lysere
- **Mørke farger**: Skaper intimitet, kan virke mindre
- **Varme farger**: Gjør rom koselige (stue, soverom)
- **Kalde farger**: Gir ro og fokus (kontor, bad)
- **Aksentfarger**: Små detaljer som tilfører liv

Husk: Du kan alltid male om, men velg farger du trives med!`,
    },
    {
      id: 'kunst-6-4-2-example-1',
      type: 'example',
      title: 'Planlegge et soverom',
      content: `For å designe et soverom:
1. **Mål rommet** og tegn veggene i målestokk
2. **Plasser sengen** først - den er viktigst
3. **Legg til** nattbord, klesskap, skrivebord
4. **Sjekk** at dører og vinduer kan åpnes
5. **Tenk på** belysning - trenger du leselampe?
6. **Velg farger** som er rolige og beroligende`,
    },
    {
      id: 'kunst-6-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en planløsning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et kart over rommet sett ovenfra',
            multipleChoiceOptions: ['Et kart over rommet sett ovenfra', 'Et bilde av rommet', 'En liste over møbler', 'En fargepalett'],
          },
        ],
        solution: 'En planløsning er en tegning av rommet sett ovenfra, som viser vegger, dører, vinduer og møbelplassering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke farger får et rom til å virke større?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Lyse farger',
            multipleChoiceOptions: ['Lyse farger', 'Mørke farger', 'Bare svart', 'Bare rødt'],
          },
        ],
        solution: 'Lyse farger reflekterer mer lys og får rom til å virke større og luftigere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn en planløsning av ditt eget rom eller drømmerommet ditt.',
        solution: 'Mål rommet ditt eller velg mål for drømmerommet. Tegn veggene, marker dører og vinduer, og plasser møblene. Husk å sjekke at det er plass til å bevege seg!',
        hints: ['Start med å tegne veggene', 'Marker dører og vinduer', 'Tegn møblene i riktig størrelse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Håndverk og materialer
// ============================================================================

export const CHAPTER_KUNST_6_5_1: TextbookChapter = {
  id: 'kunst-6-5-1',
  courseId: 'kunst-6',
  chapterNumber: '5.1',
  title: 'Tekstil og veving',
  description: 'Lær grunnleggende teknikker for å arbeide med tekstil og veving.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike tekstile teknikker',
    'forstå hvordan tekstiler lages og brukes',
  ],
  content: [
    {
      id: 'kunst-6-5-1-intro',
      type: 'text',
      content: `Mennesker har laget tekstiler i tusenvis av år - fra enkle flettverk til avanserte stoffer. I dag skal vi lære om veving, en av de eldste teknikkene for å lage stoff.`,
    },
    {
      id: 'kunst-6-5-1-def-1',
      type: 'definition',
      title: 'Veving',
      content: `Veving er en teknikk der tråder flettes sammen i et mønster. Trådene som går opp og ned kalles renning, og trådene som går på tvers kalles innslag.`,
    },
    {
      id: 'kunst-6-5-1-text-2',
      type: 'text',
      content: `**Grunnleggende vevebegreper**

**Renning**: De vertikale trådene som er spent opp først
**Innslag**: Tråden som veves gjennom renningen
**Vevramme**: Rammen renningen settes opp på
**Skyttel**: Verktøyet som fører innslagstråden
**Binde**: Hvordan trådene krysser hverandre

I enkel veving går innslaget over-under-over-under gjennom renningen.`,
    },
    {
      id: 'kunst-6-5-1-text-3',
      type: 'text',
      content: `**Typer vev**

**Lerret**: Den enkleste veven - over en, under en
**Kypert**: Diagonale linjer i stoffet (som dongeri)
**Billedvev**: Vev med bilder og mønstre

Du kan starte med lerretsbinding på en enkel vevramme eller til og med på en pappramme!`,
    },
    {
      id: 'kunst-6-5-1-example-1',
      type: 'example',
      title: 'Lag en enkel vevramme av papp',
      content: `Du trenger: Pappbit, saks, garn

1. Klipp hakk i topp og bunn av pappen (ca. 1 cm mellom)
2. Trekk garnet opp og ned gjennom hakkene (renningen)
3. Fest enden på baksiden med tape
4. Begynn å veve innslaget med et annet garn
5. Bruk en gaffel til å presse trådene tett sammen
6. Bytt farger for å lage mønstre!`,
    },
    {
      id: 'kunst-6-5-1-text-4',
      type: 'text',
      content: `**Andre tekstile teknikker**

**Sying**: Feste stoffbiter sammen med nål og tråd
**Broderi**: Dekorere stoff med fargerike sting
**Strikking**: Lage stoff med pinner og garn
**Hekling**: Lage stoff med krok og garn
**Filtring**: Presse ull til det blir til stoff
**Batikk**: Farging med voks for mønstre`,
    },
    {
      id: 'kunst-6-5-1-tip-1',
      type: 'tip',
      title: 'Tips for veving',
      content: `- Hold renningen stram, men ikke for stram
- Ikke trekk for hardt i innslaget - stoffet blir smalt
- La innslaget ligge litt løst i buer før du presser det ned
- Bytt farger for å lage striper eller mønstre
- Vev likt på hver side for å holde kantene rette`,
    },
    {
      id: 'kunst-6-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles de vertikale trådene i veving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Renning',
            multipleChoiceOptions: ['Renning', 'Innslag', 'Skyttel', 'Binde'],
          },
        ],
        solution: 'De vertikale trådene som settes opp først kalles renning. Innslaget veves gjennom dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er lerretsbinding?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Den enkleste veven der tråden går over en, under en',
            multipleChoiceOptions: ['Den enkleste veven der tråden går over en, under en', 'Å binde bøker', 'En type strikking', 'Å male på lerret'],
          },
        ],
        solution: 'Lerretsbinding er den enkleste formen for veving, der innslaget går over en renning og under den neste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en enkel veving på en pappramme. Bruk gjerne flere farger.',
        solution: 'Sett opp renningen på papprammen. Vev innslaget over-under-over-under. Bytt farge når du vil for å lage striper eller mønstre.',
        hints: ['Start med å lage renningen', 'Vev over-under-over-under', 'Bruk gaffel for å presse trådene tett'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_5_2: TextbookChapter = {
  id: 'kunst-6-5-2',
  courseId: 'kunst-6',
  chapterNumber: '5.2',
  title: 'Tre og metall',
  description: 'Utforsk grunnleggende teknikker for å arbeide med tre og metall.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke enkle verktøy for tre- og metallarbeid',
    'forstå materialenes egenskaper og bruksområder',
  ],
  content: [
    {
      id: 'kunst-6-5-2-intro',
      type: 'text',
      content: `Tre og metall er to av de viktigste materialene i håndverk og design. Tre er varmt og naturlig, metall er sterkt og holdbart. La oss lære om hvordan vi kan arbeide med disse materialene!`,
    },
    {
      id: 'kunst-6-5-2-text-1',
      type: 'text',
      content: `**Egenskaper ved tre**

**Myke tresorter**: Furu, gran - lette å bearbeide
**Harde tresorter**: Eik, bøk, ask - mer holdbare

Tre har fibre som går i en retning. Det er lettere å sage og høvle med fiberretningen enn mot den!

**Fordeler**: Naturlig, fornybart, lett å bearbeide, isolerer
**Ulemper**: Kan sprekke, påvirkes av fukt, brennbart`,
    },
    {
      id: 'kunst-6-5-2-text-2',
      type: 'text',
      content: `**Verktøy for trearbeid**

**Sag**: Kutter tre (bruk riktig sag til jobben)
**Hammer**: Slår inn spiker
**Skrujern**: Skrur inn skruer
**Sandpapir**: Gjør overflaten glatt
**Høvel**: Lager jevne overflater
**Fil**: Former og jevner ut
**Lim**: Fester trebiter sammen (trelim)`,
    },
    {
      id: 'kunst-6-5-2-warning-1',
      type: 'warning',
      title: 'Sikkerhet først!',
      content: `- Bruk alltid vernebriller når du sager eller filer
- Hold fingrene unna sagbladet
- Fest arbeidsstykket godt i skrustikke
- Bruk riktig verktøy til jobben
- Rydd opp spon og avfall - de kan være skarpe
- Be en voksen om hjelp med vanskelige oppgaver`,
    },
    {
      id: 'kunst-6-5-2-text-3',
      type: 'text',
      content: `**Egenskaper ved metall**

**Jern/stål**: Sterkt, magnetisk, kan ruste
**Aluminium**: Lett, ruster ikke
**Kopper**: Mykt, leder strøm og varme
**Messing**: Gullaktig farge, brukes i dekorasjon

Metall kan bøyes, hamres og formes når det varmes opp. Noen metaller kan også støpes.`,
    },
    {
      id: 'kunst-6-5-2-text-4',
      type: 'text',
      content: `**Enkle metallteknikker**

**Bøying**: Bøy tynn metalltråd med tang
**Filing**: Glatt skarpe kanter med fil
**Punching**: Lag mønstre med punsel og hammer
**Lodding**: Feste metallbiter med smeltet metall

På skolen arbeider vi ofte med metalltråd og tynne metallplater som er trygge å håndtere.`,
    },
    {
      id: 'kunst-6-5-2-example-1',
      type: 'example',
      title: 'Lag en nøkkelring av metalltråd',
      content: `Du trenger: Metalltråd, tang, rundtang

1. Klipp av ca. 30 cm metalltråd
2. Bøy tråden til ønsket form (hjerte, stjerne, bokstav)
3. Bruk rundtang til å lage jevne buer
4. Lag en løkke i enden for å feste nøkkelringen
5. Klipp av overflødig tråd
6. Fil eventuelle skarpe ender glatte`,
    },
    {
      id: 'kunst-6-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom myke og harde tresorter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Myke tresorter er lettere å bearbeide, harde er mer holdbare',
            multipleChoiceOptions: ['Myke tresorter er lettere å bearbeide, harde er mer holdbare', 'Det er ingen forskjell', 'Myke tresorter er tyngre', 'Harde tresorter kommer fra busker'],
          },
        ],
        solution: 'Myke tresorter som furu er lettere å sage og forme, mens harde tresorter som eik er sterkere og mer holdbare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor bør du bruke vernebriller når du sager?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å beskytte øynene mot spon og støv',
            multipleChoiceOptions: ['For å beskytte øynene mot spon og støv', 'For å se bedre', 'Fordi det ser kult ut', 'Det trenger du ikke'],
          },
        ],
        solution: 'Vernebriller beskytter øynene dine mot spon, støv og små partikler som kan fly opp når du sager.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et enkelt produkt av tre eller metalltråd - for eksempel en nøkkelring, en bilderamme, eller et smykke.',
        solution: 'Velg materiale og design. Planlegg før du starter. Bruk riktig verktøy og husk sikkerhet!',
        hints: ['Lag en skisse først', 'Velg riktig verktøy', 'Husk sikkerhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Kunst og kultur
// ============================================================================

export const CHAPTER_KUNST_6_6_1: TextbookChapter = {
  id: 'kunst-6-6-1',
  courseId: 'kunst-6',
  chapterNumber: '6.1',
  title: 'Kunsttradisjoner fra ulike kulturer',
  description: 'Utforsk kunst og håndverkstradisjoner fra forskjellige deler av verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og lære om kunst fra ulike kulturer',
    'forstå hvordan kultur og tradisjon påvirker kunstuttrykk',
  ],
  content: [
    {
      id: 'kunst-6-6-1-intro',
      type: 'text',
      content: `Kunst finnes i alle kulturer, men den ser veldig forskjellig ut rundt i verden. Fra japanske blekktegninger til afrikanske masker og samisk duodji - la oss reise rundt i verden gjennom kunsten!`,
    },
    {
      id: 'kunst-6-6-1-text-1',
      type: 'text',
      content: `**Samisk kunst - Duodji**

Samene er urfolket i nordlige Skandinavia. Deres tradisjonelle håndverk kalles duodji.

**Materialer**: Reinskinn, bein, tre, tinn
**Produkter**: Kofter (gakti), kniver, smykker, vesker
**Kjennetegn**: Vakre mønstre, ofte i rødt, blått, gult og grønt
**Symboler**: Naturen, reinsdyr, sola

Duodji er ikke bare kunst - det er bruksgjenstander laget med stor dyktighet og respekt for tradisjonen.`,
    },
    {
      id: 'kunst-6-6-1-text-2',
      type: 'text',
      content: `**Japansk kunst**

Japan har mange unike kunstformer:

**Origami**: Papirbretting (som du har lært om!)
**Kalligrafi**: Vakker skrift med pensel og blekk
**Ukiyo-e**: Tresnitt med bølger og landskap
**Keramikk**: Enkle, vakre former (wabi-sabi)

Japansk kunst verdsetter enkelhet, natur og ro. "Mindre er mer" er et viktig prinsipp.`,
    },
    {
      id: 'kunst-6-6-1-text-3',
      type: 'text',
      content: `**Afrikansk kunst**

Afrika har utrolig mangfoldig kunst:

**Masker**: Brukes i seremonier og dans
**Skulpturer**: Ofte av tre eller bronse
**Tekstiler**: Fargerike stoffer som kente fra Ghana
**Perlearbeid**: Detaljerte mønstre og symboler

Afrikansk kunst har inspirert mange moderne kunstnere, inkludert Pablo Picasso.`,
    },
    {
      id: 'kunst-6-6-1-text-4',
      type: 'text',
      content: `**Latinamerikansk kunst**

Fra Mexico til Argentina finner vi:

**Muralisme**: Store veggmalerier med politiske budskap
**Dia de los Muertos**: Fargerike hodeskaller og dekorasjoner
**Tekstiler**: Vakre vevde tepper og klær
**Keramikk**: Fargerike fat og figurer

Farger er viktige i latinamerikansk kunst - jo sterkere, jo bedre!`,
    },
    {
      id: 'kunst-6-6-1-tip-1',
      type: 'tip',
      title: 'Respekt for andre kulturer',
      content: `Når du lar deg inspirere av andre kulturer:
- Lær om bakgrunnen og betydningen
- Vis respekt for tradisjonene
- Vær forsiktig med hellige symboler
- Gi kreditt til kulturen du er inspirert av

Det er forskjell på å verdsette og å "stjele" fra en kultur!`,
    },
    {
      id: 'kunst-6-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles samisk tradisjonelt håndverk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Duodji',
            multipleChoiceOptions: ['Duodji', 'Origami', 'Ukiyo-e', 'Mural'],
          },
        ],
        solution: 'Duodji er det samiske navnet på tradisjonelt håndverk, som inkluderer arbeid med reinskinn, bein, tre og tinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken japansk kunstform handler om vakker skrift med pensel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kalligrafi',
            multipleChoiceOptions: ['Kalligrafi', 'Origami', 'Ikebana', 'Kabuki'],
          },
        ],
        solution: 'Kalligrafi er kunsten å skrive vakkert med pensel og blekk. Det er høyt verdsatt i Japan og Kina.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et kunstverk inspirert av en kultur du har lært om. Forklar hvilken kultur og hva som inspirerte deg.',
        solution: 'Velg en kultur og studer kunsten deres. Lag noe som er inspirert av deres teknikker, mønstre eller farger. Skriv en kort tekst om inspirasjonen din.',
        hints: ['Velg en kultur som interesserer deg', 'Studer typiske trekk ved kunsten', 'Bruk elementer på din egen måte'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_6_2: TextbookChapter = {
  id: 'kunst-6-6-2',
  courseId: 'kunst-6',
  chapterNumber: '6.2',
  title: 'Kjente kunstnere og kunstverk',
  description: 'Lær om kjente kunstnere fra ulike tidsepoker og deres viktigste verk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til viktige kunstnere og kunstverk',
    'forstå hvordan kunst reflekterer sin tid',
  ],
  content: [
    {
      id: 'kunst-6-6-2-intro',
      type: 'text',
      content: `Gjennom historien har kunstnere laget verk som fortsatt berører oss i dag. Ved å lære om disse kunstnerne, kan vi bedre forstå kunsten og la oss inspirere i vårt eget arbeid.`,
    },
    {
      id: 'kunst-6-6-2-text-1',
      type: 'text',
      content: `**Edvard Munch (1863-1944) - Norge**

Norges mest kjente kunstner, kjent for "Skrik" (1893).

**Stil**: Ekspresjonisme - viste følelser gjennom farger og form
**Kjente verk**: Skrik, Madonna, Syk pike
**Tema**: Angst, kjærlighet, død, ensomhet

Munch sa: "Jeg maler ikke det jeg ser, men det jeg følte."`,
    },
    {
      id: 'kunst-6-6-2-text-2',
      type: 'text',
      content: `**Leonardo da Vinci (1452-1519) - Italia**

En av historiens største genier - kunstner, oppfinner og vitenskapsmann.

**Stil**: Renessanse - fokus på realisme og perspektiv
**Kjente verk**: Mona Lisa, Nattverden
**Teknikk**: Sfumato - myke overganger uten synlige penselstrøk

Leonardo studerte alt fra anatomi til fugler for å gjøre kunsten sin mer realistisk.`,
    },
    {
      id: 'kunst-6-6-2-text-3',
      type: 'text',
      content: `**Vincent van Gogh (1853-1890) - Nederland**

Malte med intense farger og synlige penselstrøk.

**Stil**: Post-impresjonisme
**Kjente verk**: Stjernenatten, Solsikker, Soverommet
**Teknikk**: Tykke, virvlende penselstrøk

Van Gogh solgte nesten ingen malerier i sin levetid, men nå er de verdt milliarder!`,
    },
    {
      id: 'kunst-6-6-2-text-4',
      type: 'text',
      content: `**Frida Kahlo (1907-1954) - Mexico**

Kjent for fargerike selvportretter med symbolsk innhold.

**Stil**: Surrealisme, latinamerikansk kunst
**Kjente verk**: De to Fridaene, Selvportrett med tornhalskjede
**Tema**: Identitet, smerte, meksikansk kultur

Kahlo brukte kunsten til å bearbeide fysisk og emosjonell smerte etter en alvorlig ulykke.`,
    },
    {
      id: 'kunst-6-6-2-def-1',
      type: 'definition',
      title: 'Ekspresjonisme',
      content: `En kunstretning der følelser uttrykkes gjennom forvrengte former og intense farger. Kunstneren viser ikke verden slik den ser ut, men slik den føles.`,
    },
    {
      id: 'kunst-6-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem malte "Skrik"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Edvard Munch',
            multipleChoiceOptions: ['Edvard Munch', 'Vincent van Gogh', 'Leonardo da Vinci', 'Frida Kahlo'],
          },
        ],
        solution: 'Edvard Munch malte "Skrik" i 1893. Det er et av verdens mest kjente kunstverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner ekspresjonismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Følelser uttrykkes gjennom forvrengte former og intense farger',
            multipleChoiceOptions: ['Følelser uttrykkes gjennom forvrengte former og intense farger', 'Perfekt realistisk gjengivelse av naturen', 'Bare svart-hvitt bilder', 'Geometriske former og linjer'],
          },
        ],
        solution: 'Ekspresjonismen handler om å vise følelser gjennom kunst, ikke om å male verden slik den faktisk ser ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et kunstverk inspirert av en av kunstnerne du har lært om. Prøv å bruke deres stil eller teknikk.',
        solution: 'Velg en kunstner og studer stilen deres. Lag et eget verk som er inspirert av deres bruk av farger, penselstrøk eller temaer.',
        hints: ['Studer kunstnerens teknikk', 'Velg et tema som passer til stilen', 'Eksperimenter med lignende farger eller penselstrøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Digitale verktøy
// ============================================================================

export const CHAPTER_KUNST_6_7_1: TextbookChapter = {
  id: 'kunst-6-7-1',
  courseId: 'kunst-6',
  chapterNumber: '7.1',
  title: 'Digital tegning og bildebehandling',
  description: 'Lær å lage og redigere bilder med digitale verktøy.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til å lage og bearbeide bilder',
    'forstå grunnleggende bildebehandling',
  ],
  content: [
    {
      id: 'kunst-6-7-1-intro',
      type: 'text',
      content: `I dag lager mange kunstnere kunst på datamaskiner og nettbrett. Digitale verktøy gir deg muligheter som ikke finnes med tradisjonelle materialer - som å angre, kopiere, og prøve uendelig mange farger!`,
    },
    {
      id: 'kunst-6-7-1-def-1',
      type: 'definition',
      title: 'Digital kunst',
      content: `Digital kunst er kunst som lages ved hjelp av datamaskiner, nettbrett eller andre digitale enheter. Det kan være tegning, maling, fotomanipulasjon, 3D-modellering og mye mer.`,
    },
    {
      id: 'kunst-6-7-1-text-2',
      type: 'text',
      content: `**Verktøy for digital kunst**

**Tegneprogram** (gratis alternativer):
- **Krita**: Kraftig, gratis tegneprogram
- **GIMP**: Gratis bildebehandling
- **Canva**: Nettbasert designverktøy
- **Photopea**: Nettbasert, ligner Photoshop

**Maskinvare**:
- Datamaskin eller nettbrett
- Tegnebrett med penn (anbefalt)
- Eventuelt iPad med Apple Pencil`,
    },
    {
      id: 'kunst-6-7-1-text-3',
      type: 'text',
      content: `**Grunnleggende verktøy i tegneprogram**

**Pensel**: Tegner streker, mange stiler tilgjengelig
**Viskelær**: Fjerner det du har tegnet
**Bøtte**: Fyller områder med farge
**Utvalg**: Markerer områder du vil jobbe med
**Lag (layers)**: Tegn på separate "ark" som legges oppå hverandre
**Angre (Ctrl+Z)**: Gjør om siste handling - bruk den ofte!`,
    },
    {
      id: 'kunst-6-7-1-tip-1',
      type: 'tip',
      title: 'Jobbe med lag',
      content: `Lag er som gjennomsiktige ark lagt oppå hverandre:
- Tegn bakgrunnen på ett lag
- Tegn hovedmotivet på et annet lag
- Legg til detaljer på et tredje lag

Da kan du endre en del uten å påvirke resten!`,
    },
    {
      id: 'kunst-6-7-1-text-4',
      type: 'text',
      content: `**Grunnleggende bildebehandling**

Du kan endre eksisterende bilder:

**Beskjæring**: Kutte bort deler av bildet
**Rotasjon**: Snu eller vippe bildet
**Lysstyrke/kontrast**: Gjøre lysere eller mørkere
**Fargejustering**: Endre fargene
**Filtre**: Automatiske effekter (blur, skarphet, osv.)
**Retusjering**: Fjerne feil eller uønskede elementer`,
    },
    {
      id: 'kunst-6-7-1-text-5',
      type: 'text',
      content: `**Filformater**

**JPEG**: Komprimert, bra for foto, mister litt kvalitet
**PNG**: Støtter gjennomsiktighet, bra for grafikk
**GIF**: Kan være animert, begrenset antall farger
**SVG**: Vektorgrafikk som kan skaleres uendelig
**PSD/XCF**: Programspesifikke formater som bevarer lag`,
    },
    {
      id: 'kunst-6-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fordelen med å jobbe med lag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Du kan endre en del uten å påvirke resten',
            multipleChoiceOptions: ['Du kan endre en del uten å påvirke resten', 'Bildet blir mindre', 'Du kan bare bruke en farge', 'Det blir raskere å tegne'],
          },
        ],
        solution: 'Med lag kan du tegne på separate "ark". Dette gjør det lett å endre bakgrunnen uten å påvirke figuren foran, for eksempel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket filformat støtter gjennomsiktighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'PNG',
            multipleChoiceOptions: ['PNG', 'JPEG', 'MP3', 'TXT'],
          },
        ],
        solution: 'PNG-formatet støtter gjennomsiktighet (transparens), noe som gjør det perfekt for logoer og grafikk som skal legges oppå andre bilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en digital tegning med minst 3 lag - ett for bakgrunn, ett for hovedmotiv, og ett for detaljer.',
        solution: 'Åpne et tegneprogram, lag tre lag, og tegn forskjellige elementer på hvert lag. Prøv å flytte og endre lagene for å se hvordan det fungerer.',
        hints: ['Start med bakgrunnsfargen', 'Tegn hovedmotivet på et nytt lag', 'Legg til detaljer øverst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_7_2: TextbookChapter = {
  id: 'kunst-6-7-2',
  courseId: 'kunst-6',
  chapterNumber: '7.2',
  title: 'Fotografi og komposisjon',
  description: 'Lær å ta bedre bilder med grunnleggende fototeknikk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke fotografi som kunstnerisk uttrykk',
    'forstå grunnleggende prinsipper for god komposisjon',
  ],
  content: [
    {
      id: 'kunst-6-7-2-intro',
      type: 'text',
      content: `Du trenger ikke et dyrt kamera for å ta gode bilder - en mobiltelefon duger fint! Det viktigste er å forstå hvordan du komponerer bildet. La oss lære noen teknikker som profesjonelle fotografer bruker.`,
    },
    {
      id: 'kunst-6-7-2-def-1',
      type: 'definition',
      title: 'Komposisjon',
      content: `Komposisjon handler om hvordan du arrangerer elementene i bildet. Hvor du plasserer hovedmotivet, hva som er i bakgrunnen, og hvordan øyet ledes gjennom bildet.`,
    },
    {
      id: 'kunst-6-7-2-text-2',
      type: 'text',
      content: `**Tredelsregelen**

Den viktigste komposisjonsregelen:
1. Del bildet i 9 like deler med 2 linjer vannrett og 2 linjer loddrett
2. Plasser hovedmotivet der linjene krysser
3. Plasser horisontlinjen langs en av de vannrette linjene

Dette gir mer interessante bilder enn å alltid sette motivet midt i!`,
    },
    {
      id: 'kunst-6-7-2-text-3',
      type: 'text',
      content: `**Andre komposisjonsteknikker**

**Ledende linjer**: Bruk veier, gjerder, eller elver til å lede øyet inn i bildet
**Rammer**: Bruk dører, vinduer eller grener til å "ramme inn" motivet
**Dybde**: Ha noe i forgrunnen, midten og bakgrunnen
**Mønster**: Gjentakende former skaper interesse
**Kontrast**: Lys mot mørk, stort mot lite`,
    },
    {
      id: 'kunst-6-7-2-tip-1',
      type: 'tip',
      title: 'Fotograferingstips',
      content: `- **Lys**: Morgen- og kveldslys er vakrest
- **Vinkel**: Prøv forskjellige vinkler - ovenfra, nedenfra, fra siden
- **Bakgrunn**: Pass på rotete bakgrunner
- **Tålmodighet**: Vent på det perfekte øyeblikket
- **Mengde**: Ta mange bilder og velg de beste etterpå`,
    },
    {
      id: 'kunst-6-7-2-text-4',
      type: 'text',
      content: `**Typer fotografering**

**Portrett**: Bilder av mennesker
**Landskap**: Natur og omgivelser
**Makro**: Nærbilde av små ting
**Stilleben**: Arrangement av gjenstander
**Dokumentar**: Forteller en historie
**Action**: Fanger bevegelse`,
    },
    {
      id: 'kunst-6-7-2-example-1',
      type: 'example',
      title: 'Ta et godt portrett',
      content: `1. **Lys**: Plasser personen mot et vindu (mykt, naturlig lys)
2. **Bakgrunn**: Velg en enkel, ryddig bakgrunn
3. **Vinkel**: Ta bildet litt ovenfra for en flatterende vinkel
4. **Komposisjon**: Bruk tredelsregelen - øynene på øvre tredel
5. **Fokus**: Fokuser på øynene
6. **Moment**: Snakk med personen for naturlige uttrykk`,
    },
    {
      id: 'kunst-6-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er tredelsregelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å dele bildet i 9 deler og plassere motivet der linjene krysser',
            multipleChoiceOptions: ['Å dele bildet i 9 deler og plassere motivet der linjene krysser', 'Å alltid ta tre bilder', 'Å bruke tre farger', 'Å vente tre sekunder'],
          },
        ],
        solution: 'Tredelsregelen deler bildet i 9 deler. Hovedmotivet plasseres der linjene krysser for en mer interessant komposisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "ledende linjer" i fotografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Linjer som leder øyet inn i bildet mot hovedmotivet',
            multipleChoiceOptions: ['Linjer som leder øyet inn i bildet mot hovedmotivet', 'Linjer du tegner på bildet etterpå', 'Elektriske ledninger', 'Streker på kameraet'],
          },
        ],
        solution: 'Ledende linjer er elementer som veier, gjerder eller elver som leder betrakterens øye inn i bildet og mot hovedmotivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Ta tre bilder som demonstrerer tredelsregelen. Vis hvordan du har plassert hovedmotivet.',
        solution: 'Ta bilder der hovedmotivet er plassert ved skjæringspunktene i tredelsnettet, ikke midt i bildet. Vis linjene i beskrivelsen.',
        hints: ['Slå på rutenett i kameraet hvis mulig', 'Prøv ulike motiver', 'Unngå å plassere alt midt i'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Bærekraftig design
// ============================================================================

export const CHAPTER_KUNST_6_8_1: TextbookChapter = {
  id: 'kunst-6-8-1',
  courseId: 'kunst-6',
  chapterNumber: '8.1',
  title: 'Gjenbruk og upcycling',
  description: 'Lær å lage kunst og design av materialer som ellers ville blitt kastet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke gjenbruksmaterialer kreativt',
    'forstå bærekraftig design og sirkulær økonomi',
  ],
  content: [
    {
      id: 'kunst-6-8-1-intro',
      type: 'text',
      content: `Hver dag kaster vi ting som kunne blitt til noe nytt og fint. Upcycling handler om å ta ting som skulle kastes og gjøre dem om til noe mer verdifullt. Det er både kreativt og bra for miljøet!`,
    },
    {
      id: 'kunst-6-8-1-def-1',
      type: 'definition',
      title: 'Upcycling',
      content: `Upcycling er å ta kasserte materialer eller produkter og gjøre dem om til noe nytt med høyere verdi eller kvalitet. I motsetning til resirkulering, som ofte bryter ned materialer, gir upcycling nytt liv til tingene.`,
    },
    {
      id: 'kunst-6-8-1-text-2',
      type: 'text',
      content: `**Materialer du kan bruke**

**Fra hjemmet**:
- Tomflasker og bokser
- Gamle klær og stoff
- Papp og papir
- Korker og lokk
- Gamle smykker og knapper

**Fra naturen**:
- Pinner og kvister
- Steiner og skjell
- Tørre blader og blomster
- Kongler og frø`,
    },
    {
      id: 'kunst-6-8-1-text-3',
      type: 'text',
      content: `**Ideer til upcycling-prosjekter**

- **Glasskrukker**: Lyslykt, penneholder, vase
- **T-skjorter**: Handlenett, puter, tepper
- **Pappesker**: Oppbevaring, leker, dukkehus
- **Plastflasker**: Blomsterpotter, fuglemater
- **Gamle bøker**: Kunst, bokser, smykker
- **CD-plater**: Mosaikk, speil, dekorasjoner`,
    },
    {
      id: 'kunst-6-8-1-example-1',
      type: 'example',
      title: 'Lag en veske av en gammel bok',
      content: `Du trenger: Gammel bok, to belteremmer eller bånd, lim, verktøy

1. Velg en bok med fint omslag
2. Lim alle sidene sammen (bruk hvitlim tynnet med vann)
3. La tørke over natten
4. Skjær ut midten av sidene med skalpell (la 2 cm kant)
5. Fest bånd eller remmer som håndtak på innsiden av permen
6. Dekorer etter ønske

Nå har du en unik veske!`,
    },
    {
      id: 'kunst-6-8-1-tip-1',
      type: 'tip',
      title: 'Tenk før du kaster',
      content: `Før du kaster noe, spør deg selv:
- Kan dette brukes til noe annet?
- Kan jeg lage kunst av dette?
- Kan noen andre ha bruk for det?
- Kan det repareres i stedet for å kastes?

"Søppel" er ofte bare materialer på feil sted!`,
    },
    {
      id: 'kunst-6-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom resirkulering og upcycling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Upcycling gir tingene ny verdi, resirkulering bryter dem ned',
            multipleChoiceOptions: ['Upcycling gir tingene ny verdi, resirkulering bryter dem ned', 'De betyr det samme', 'Resirkulering er bedre', 'Upcycling bruker bare plast'],
          },
        ],
        solution: 'Upcycling transformerer avfall til noe med høyere verdi, mens resirkulering ofte bryter ned materialer for å lage nye råvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre ting fra hjemmet som kan brukes til upcycling.',
        solution: 'Eksempler: Glasskrukker kan bli vaselys, t-skjorter kan bli handlenett, pappesker kan bli oppbevaringsbokser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et kunstverk eller nyttig gjenstand av materialer som ellers ville blitt kastet.',
        solution: 'Samle materialer du finner hjemme eller i naturen. Planlegg hva du vil lage. Dokumenter prosessen og det ferdige produktet.',
        hints: ['Samle interessante materialer først', 'Tenk på hva du trenger eller ønsker deg', 'Vær kreativ - det finnes ingen feil svar!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_6_8_2: TextbookChapter = {
  id: 'kunst-6-8-2',
  courseId: 'kunst-6',
  chapterNumber: '8.2',
  title: 'Design for fremtiden',
  description: 'Forstå hvordan design kan bidra til en bærekraftig fremtid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå prinsipper for bærekraftig design',
    'reflektere over designens påvirkning på miljøet',
  ],
  content: [
    {
      id: 'kunst-6-8-2-intro',
      type: 'text',
      content: `Alt vi bruker er designet av noen. Og måten ting er designet på påvirker miljøet - fra materialene som brukes til hvor lenge produktet varer. Designere i dag må tenke på hvordan valgene deres påvirker planeten.`,
    },
    {
      id: 'kunst-6-8-2-def-1',
      type: 'definition',
      title: 'Bærekraftig design',
      content: `Bærekraftig design er å lage produkter og løsninger som tilfredsstiller dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Det handler om å tenke på hele produktets livsløp - fra materialer til avfall.`,
    },
    {
      id: 'kunst-6-8-2-text-2',
      type: 'text',
      content: `**Prinsipper for bærekraftig design**

**1. Design for holdbarhet**: Lag ting som varer
**2. Design for reparasjon**: Gjør det lett å fikse
**3. Design for gjenbruk**: Tenk på hva som skjer etter bruk
**4. Bruk miljøvennlige materialer**: Resirkulert, fornybart, lokalt
**5. Minimer avfall**: Bruk alt, kast minst mulig
**6. Spar energi**: I produksjon og bruk`,
    },
    {
      id: 'kunst-6-8-2-text-3',
      type: 'text',
      content: `**Sirkulær økonomi**

I stedet for "ta-bruk-kast" (lineær økonomi), tenker vi:

**Lag** - **Bruk** - **Reparer** - **Gjenbruk** - **Resirkuler** - **Lag nytt**

Alt går i en sirkel! Ingenting er egentlig avfall - bare ressurser på feil sted.`,
    },
    {
      id: 'kunst-6-8-2-example-1',
      type: 'example',
      title: 'IKEA og bærekraftig design',
      content: `IKEA jobber med bærekraft på flere måter:
- **Flatpakking**: Sparer plass i transport = mindre CO2
- **Gjenbruksstasjon**: Selger brukte møbler
- **Resirkulerte materialer**: Bruker gjenvunnet tre og plast
- **Design for demontering**: Lett å ta fra hverandre for resirkulering
- **LED-lys**: Sparer energi for kundene

Selv store selskaper kan gjøre en forskjell!`,
    },
    {
      id: 'kunst-6-8-2-text-4',
      type: 'text',
      content: `**Hvordan du kan designe bærekraftig**

Når du lager noe, spør deg selv:
- Hvilke materialer bruker jeg? Er de miljøvennlige?
- Vil dette vare lenge eller bli raskt ødelagt?
- Kan det repareres hvis det går i stykker?
- Hva skjer med det når det ikke brukes lenger?
- Bruker jeg mer materiale enn nødvendig?`,
    },
    {
      id: 'kunst-6-8-2-tip-1',
      type: 'tip',
      title: 'Design for glede!',
      content: `Bærekraftig design handler ikke bare om miljøet:
- Ting vi er glad i, tar vi bedre vare på
- Vakre ting kastes sjeldnere enn stygge
- Kvalitet er ofte mer bærekraftig enn kvantitet

Lag ting som folk vil beholde og elske!`,
    },
    {
      id: 'kunst-6-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er sirkulær økonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et system der materialer brukes om og om igjen',
            multipleChoiceOptions: ['Et system der materialer brukes om og om igjen', 'Å tjene penger på sirkler', 'Å kaste alt i en rund boks', 'Å bare kjøpe runde ting'],
          },
        ],
        solution: 'Sirkulær økonomi er et system der produkter og materialer holdes i bruk så lenge som mulig, repareres, gjenbrukes og resirkuleres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er det viktig å designe for reparasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi produkter som kan repareres varer lenger og skaper mindre avfall',
            multipleChoiceOptions: ['Fordi produkter som kan repareres varer lenger og skaper mindre avfall', 'Fordi det er morsommere', 'Fordi reparatører trenger jobb', 'Det er ikke viktig'],
          },
        ],
        solution: 'Produkter som kan repareres trenger ikke kastes når noe går galt. Dette sparer ressurser og reduserer avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-6-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-6-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Design et produkt med bærekraft i tankene. Beskriv hvilke materialer du ville brukt og hvorfor, og hva som skjer med produktet når det ikke brukes lenger.',
        solution: 'Velg et produkt å designe. Tenk gjennom materialvalg, holdbarhet, reparerbarhet og hva som skjer etter bruk. Dokumenter tankeprosessen din.',
        hints: ['Hva slags produkt vil du designe?', 'Hvilke materialer er mest miljøvennlige?', 'Kan det gjenbrukes eller resirkuleres?'],
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

export const KUNST_6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KUNST_6_1_1,
  CHAPTER_KUNST_6_1_2,
  CHAPTER_KUNST_6_2_1,
  CHAPTER_KUNST_6_2_2,
  CHAPTER_KUNST_6_3_1,
  CHAPTER_KUNST_6_3_2,
  CHAPTER_KUNST_6_4_1,
  CHAPTER_KUNST_6_4_2,
  CHAPTER_KUNST_6_5_1,
  CHAPTER_KUNST_6_5_2,
  CHAPTER_KUNST_6_6_1,
  CHAPTER_KUNST_6_6_2,
  CHAPTER_KUNST_6_7_1,
  CHAPTER_KUNST_6_7_2,
  CHAPTER_KUNST_6_8_1,
  CHAPTER_KUNST_6_8_2,
];
