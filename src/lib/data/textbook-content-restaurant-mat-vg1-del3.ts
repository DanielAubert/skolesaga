/**
 * Restaurant- og matfag VG1 - Tekstbokinnhold Del 3
 *
 * Kapittel 43-55 - Avanserte emner og yrkeskunnskap
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 43: Norske tradisjonsretter i moderne drakt
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_43: TextbookChapter = {
  id: 'restaurant-mat-vg1-43',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '43',
  title: 'Norske tradisjonsretter i moderne drakt',
  description: 'Lær klassiske norske retter og hvordan de kan tilpasses moderne kjøkken.',
  estimatedMinutes: 55,
  competenceGoals: [
    'tilberede klassiske norske retter',
    'forstå norsk matkultur og tradisjoner',
    'modernisere tradisjonelle oppskrifter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-43-intro',
      type: 'text',
      content: `Norsk matkultur er rik på tradisjoner formet av klima, sesong og tilgang på råvarer. I dette kapittelet lærer du klassiske retter og hvordan de kan tolkes på nye måter.`,
    },
    {
      id: 'restaurant-mat-vg1-43-def-1',
      type: 'definition',
      title: 'Husmannskost',
      content: `Husmannskost er tradisjonelle norske hverdagsretter basert på lokale råvarer som fisk, kjøtt, poteter og rotfrukter. Typisk enkle, næringsrike og mettende retter.`,
    },
    {
      id: 'restaurant-mat-vg1-43-text-1',
      type: 'text',
      content: `**Klassiske høytidsretter**

**Pinnekjøtt**:
- Saltet og tørket saueribber
- Vannes ut 24-48 timer
- Dampes over bjørkepinner
- Server med kålrabistappe

**Lutefisk**:
- Tørket torsk behandlet med lut
- Vannes ut, koker forsiktig
- Bacon, ertestuing, sennep
- Vestlands- og nordnorsk tradisjon

**Ribbe**:
- Svineribbe med sprø svor
- Stek ved høy varme først
- Deretter langsomt
- Surkål, medisterpølse, poteter

**Rakfisk**:
- Fermentert ørret eller røye
- Østlandsk tradisjon
- Server med lefse, rømme, løk
- Sterk, karakteristisk smak`,
    },
    {
      id: 'restaurant-mat-vg1-43-text-2',
      type: 'text',
      content: `**Hverdagsretter**

**Fårikål**:
- Nasjonalrett, sauekjøtt og kål
- Langkokt i lag
- Kun salt og hel pepper
- Server med kokte poteter

**Kjøttkaker**:
- Kvernet kjøtt, melk, mel
- Formgitt, stekt i smør
- Brun saus, kokte poteter
- Tyttebærsyltetøy

**Raspeball/komle**:
- Potetball med innmat
- Kokt i saltet vann
- Bacon, pølse, kålrabistappe
- Vestlandstradisjon

**Rømmegrøt**:
- Rømme kokt med mel
- Smørøyet i midten
- Sukker og kanel
- Festmat og hyttekost`,
    },
    {
      id: 'restaurant-mat-vg1-43-text-3',
      type: 'text',
      content: `**Moderne tolkninger**

**Nyere nordisk tenkning**:
- Respekt for råvaren
- Lokale, sesongbaserte ingredienser
- Forenkling uten tap av smak
- Raffinert presentasjon

**Pinnekjøtt 2.0**:
- Confiterte ribber
- Kålrabipuré i stedet for stappe
- Brunet smør og urter
- Elegant anretning

**Fårikål-dekonstruert**:
- Lammekotelett sous vide
- Kålchips
- Peppersaus
- Potetterrin

**Kjøttkaker fine dining**:
- Møre, perfekt krydrede
- Glassert brunnsaus
- Potetpuré
- Tyttebærgel, mikrosalat`,
    },
    {
      id: 'restaurant-mat-vg1-43-text-4',
      type: 'text',
      content: `**Regionale spesialiteter**

**Vestlandet**:
- Smalahove, røykt sau
- Persetorsk, tørrfisk
- Komle og raspeball

**Trøndelag**:
- Sodd med kjøttboller
- Sveler, rømmegrøt
- Rund i magen (blodfølse)

**Nord-Norge**:
- Mølje (torsk med lever og rogn)
- Boknafisk
- Reinkjøtt i mange varianter

**Østlandet**:
- Rakfisk
- Spekemat
- Potetlomper og lefser

**Sørøst**:
- Kringle
- Eggedosis
- Sylte`,
    },
    {
      id: 'restaurant-mat-vg1-43-tip-1',
      type: 'tip',
      title: 'Respekter tradisjonen',
      content: `Når du moderniserer tradisjonsretter, behold essensen av smaken. Pinnekjøtt skal smake salt, røykt sau - teknikken kan endres, men ikke identiteten.`,
    },
    {
      id: 'restaurant-mat-vg1-43-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er lutefisk laget av?',
        solution: 'Tørket torsk (tørrfisk) som er behandlet med lut og deretter vannet ut før tilberedning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-43-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken rett regnes som Norges nasjonalrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig rett.',
            solution: 'Fårikål',
            multipleChoiceOptions: [
              'Fårikål',
              'Pinnekjøtt',
              'Kjøttkaker',
              'Lutefisk',
            ],
          },
        ],
        solution: 'Fårikål er Norges nasjonalrett, laget av sauekjøtt og kål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-43-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan tilberedes pinnekjøtt tradisjonelt?',
        solution: 'Saltet og tørket saueribber vannes ut i 24-48 timer, deretter dampes over bjørkepinner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-43-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er rakfisk?',
        solution: 'Fermentert ørret eller røye, en østlandsk tradisjon med sterk, karakteristisk smak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-43-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kjennetegner ny nordisk mat?',
        solution: 'Respekt for råvaren, lokale og sesongbaserte ingredienser, forenkling og raffinert presentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-43-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Velg en norsk tradisjonsrett og beskriv hvordan du ville modernisert den for et fine dining-konsept.',
        solution: 'Eksempel fårikål: Lammekotelett sous vide til medium, kålchips fritert sprø, peppersjy redusert med lammefond, potetterrin, fersk timian. Bevarer smakene men løfter presentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-43-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-43-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en meny med tre retter fra tre forskjellige norske regioner. Beskriv rettene og deres opprinnelse.',
        solution: 'Forrett: Rakfisk fra Valdres med lefse og rømme. Hovedrett: Mølje fra Nord-Norge (torsk, lever, rogn). Dessert: Sveler fra Trøndelag med rømme og sukker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 44: Kjøkkenutstyr og maskiner
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_44: TextbookChapter = {
  id: 'restaurant-mat-vg1-44',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '44',
  title: 'Kjøkkenutstyr og maskiner',
  description: 'Lær om profesjonelt kjøkkenutstyr, riktig bruk og vedlikehold.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til og bruke profesjonelt kjøkkenutstyr',
    'forstå sikkerhet ved bruk av maskiner',
    'vedlikeholde utstyr korrekt',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-44-intro',
      type: 'text',
      content: `Et profesjonelt kjøkken har spesialisert utstyr som gjør arbeidet effektivt og sikkert. Å kjenne utstyret og bruke det riktig er grunnleggende for alle som arbeider i matbransjen.`,
    },
    {
      id: 'restaurant-mat-vg1-44-def-1',
      type: 'definition',
      title: 'Kombisteamer',
      content: `En kombisteamer er en ovn som kombinerer damp, varmluft og kombinasjonen av begge. Gir presis kontroll over temperatur og fuktighet for optimale resultater.`,
    },
    {
      id: 'restaurant-mat-vg1-44-text-1',
      type: 'text',
      content: `**Varmeapparater**

**Komfyr og koketopp**:
- Gass: Rask respons, visuell kontroll
- Induksjon: Effektiv, presis, kjølig overflate
- Elektrisk: Stabil varme, tregere respons
- Wok-brenner: Ekstrem varme for wok

**Ovner**:
- Konveksjonsovn: Varmluft, jevn varme
- Kombidamper: Damp + varme, allsidig
- Pizzaovn: Ekstrem varme, stein
- Salamander: Intens varme ovenfra

**Frityr**:
- Kontrollert temperatur
- Sikkerhetsfunksjoner
- Filtrer oljen regelmessig
- Unngå vann nær frityren!`,
    },
    {
      id: 'restaurant-mat-vg1-44-text-2',
      type: 'text',
      content: `**Bearbeidingsmaskiner**

**Universalmaskin**:
- Visp, elt, rør
- Ulike hastigheter
- Skiftbare tilbehør
- Brukes til deiger, kremer

**Matprosessor/cutter**:
- Hakking, blending
- Ulike blader
- Raske resultater
- Hold fingrene unna!

**Stavmikser**:
- Håndholdt blender
- Supper, sauser, puréer
- Ulike størrelser
- Enkel å rengjøre

**Kjøttkvern**:
- Kverner kjøtt til farse
- Ulike platesstørrelser
- Holdes kjølig
- Rengjøres nøye`,
    },
    {
      id: 'restaurant-mat-vg1-44-text-3',
      type: 'text',
      content: `**Kjøling og oppbevaring**

**Kjøleskap/-rom**:
- +2 til +4°C
- Organiser etter FIFO
- Råvarer nederst, ferdig mat øverst
- Hold orden, rengjør regelmessig

**Fryseskap/-rom**:
- -18°C eller kaldere
- Merking med dato
- Unngå gjenfrysing
- Tinerutiner

**Vakuumpakker**:
- Forlenger holdbarhet
- Sous vide-tilberedning
- Marinering på sekunder
- Porsjonering

**Blast chiller**:
- Rask nedkjøling
- Fra 70°C til 3°C på 90 min
- Mattrygghet
- HACCP-krav`,
    },
    {
      id: 'restaurant-mat-vg1-44-text-4',
      type: 'text',
      content: `**Sikkerhet og vedlikehold**

**Før bruk**:
- Les bruksanvisning
- Sjekk at utstyret er rent
- Kontroller sikkerhetsfunksjoner
- Bruk riktig verneutstyr

**Under bruk**:
- Konsentrer deg
- Aldri stikk hender inn i maskiner
- Hold hår og klær unna
- Bruk avstengningsfunksjon ved problem

**Etter bruk**:
- Rengjør grundig
- Tørk og luft
- Rapporter feil
- Sett tilbake på plass

**Verneutstyr**:
- Knivhanske ved bruk av kuttemaskiner
- Varme hansker til ovn
- Øyevern ved sprut
- Forklær ved frityrsteiking`,
    },
    {
      id: 'restaurant-mat-vg1-44-warning-1',
      type: 'warning',
      title: 'Maskinssikkerhet',
      content: `Stikk ALDRI hender inn i maskiner som er på. Bruk alltid stopperen/presseren for å dytte mat inn. Slå av og trekk ut kontakt før rengjøring av blader.`,
    },
    {
      id: 'restaurant-mat-vg1-44-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en kombisteamer?',
        solution: 'En ovn som kombinerer damp, varmluft og kombinasjonen for presis kontroll over temperatur og fuktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-44-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er fordelen med induksjonskomfyr?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedfordel.',
            solution: 'Effektiv, presis og kjølig overflate',
            multipleChoiceOptions: [
              'Effektiv, presis og kjølig overflate',
              'Billigere i innkjøp',
              'Fungerer med alle gryter',
              'Trenger ikke strøm',
            ],
          },
        ],
        solution: 'Induksjon er effektiv, gir presis temperaturkontroll og overflaten holder seg kjølig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-44-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en blast chiller?',
        solution: 'Utstyr for rask nedkjøling av mat fra 70°C til 3°C på 90 minutter for mattrygghet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-44-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken temperatur skal kjøleskap holde?',
        solution: '+2 til +4°C for å bevare matkvalitet og hindre bakterievekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-44-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre sikkerhetsregler ved bruk av kjøkkenmaskiner.',
        solution: 'Les bruksanvisning, stikk aldri hender inn i maskiner som er på, bruk alltid stopperen for å dytte mat inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-44-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv hvilke maskiner du ville brukt til å produsere en stor mengde grønnsakssuppe for 100 personer.',
        solution: 'Grønnsakscutter for rask kutting, stor gryte på gasskomfyr for koking, stavmikser eller matprosessor for blending, kombisteamer for å holde varmt, vakuumpakker for evt. porsjonering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-44-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-44-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en sjekkliste for sikker bruk av en kjøttkvern, fra start til rengjøring.',
        solution: 'Før: Sjekk at den er ren, monter riktig plate, sjekk at alt sitter. Under: Bruk stopper, aldri hender i åpningen, kjør ved riktig hastighet. Etter: Slå av, trekk ut kontakt, demonter, vask alle deler, tørk, sett sammen igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 45: Profesjonell kommunikasjon i kjøkkenet
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_45: TextbookChapter = {
  id: 'restaurant-mat-vg1-45',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '45',
  title: 'Profesjonell kommunikasjon i kjøkkenet',
  description: 'Lær kjøkkenspråk, kommandoer og effektiv kommunikasjon i brigaden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke profesjonell kjøkkenterminologi',
    'kommunisere effektivt under service',
    'forstå brigadesystemet',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-45-intro',
      type: 'text',
      content: `I et profesjonelt kjøkken er klar kommunikasjon avgjørende. Under travel service må beskjeder være korte, tydelige og bekreftede. Kjøkkenspråket har egne uttrykk og kommandoer.`,
    },
    {
      id: 'restaurant-mat-vg1-45-def-1',
      type: 'definition',
      title: 'Brigade',
      content: `Brigaden er den hierarkiske organiseringen av kjøkkenpersonalet. Utviklet av Auguste Escoffier for å effektivisere produksjonen i store kjøkken.`,
    },
    {
      id: 'restaurant-mat-vg1-45-text-1',
      type: 'text',
      content: `**Brigadesystemet**

**Kjøkkensjef (Chef de cuisine)**:
- Øverste ansvarlig
- Menyplanlegging
- Økonomi og drift

**Sous chef**:
- Nestkommanderende
- Daglig drift
- Stedfortreder for sjefskokk

**Partisjef (Chef de partie)**:
- Ansvar for én stasjon
- Spesialist på sitt område
- Eksempel: Saucier, garde manger

**Commis**:
- Assistentkokk
- Under opplæring
- Hjelper partisjefen

**Lærling**:
- Under utdanning
- Grunnleggende oppgaver
- Lærer alle stasjoner`,
    },
    {
      id: 'restaurant-mat-vg1-45-text-2',
      type: 'text',
      content: `**Kjøkkenkommandoer**

**Bestillinger inn**:
- "Ordre!" - Ny ordre kommer
- "Fire!" - Start tilberedning
- "All day" - Totalt antall av en rett

**Under service**:
- "Oui, chef!" - Bekreftelse
- "Heard!" - Beskjed mottatt
- "Behind!" - Noen bak deg
- "Hot!" - Varme fat/gryter
- "Corner!" - Kommer rundt hjørnet
- "Coming through!" - Trenger å passere

**Timing**:
- "How long?" - Hvor lang tid gjenstår?
- "Two minutes" - Ferdig om 2 min
- "Ready" - Ferdig til anretning
- "Pick up!" - Klar for servering`,
    },
    {
      id: 'restaurant-mat-vg1-45-text-3',
      type: 'text',
      content: `**Fagtermer (mise en place)**

**Grunnleggende**:
- Mise en place: Alt på plass
- À la minute: Laget på bestilling
- À la carte: Fritt valg fra meny
- Prix fixe: Fast meny

**Matlagning**:
- Blanch: Hurtig koking, avkjøl
- Braise: Langsom koking i væske
- Deglaze: Løsne stekeskorpe med væske
- Julienne: Tynne strimler
- Brunoise: Fine terninger

**Saus og fond**:
- Reduction: Inndampet saus
- Glace: Sterkt redusert fond
- Monter au beurre: Smør inn i saus
- Nappe: Dekke med saus`,
    },
    {
      id: 'restaurant-mat-vg1-45-text-4',
      type: 'text',
      content: `**Effektiv kommunikasjon**

**Under service**:
- Snakk tydelig og bestemt
- Bruk etablerte uttrykk
- Bekreft alltid beskjeder
- Se personen du snakker til

**Ordrehåndtering**:
- Rop ordre tydelig
- Få bekreftelse fra alle stasjoner
- Koordiner timing
- Dobbeltsjekk før utlevering

**Konflikthåndtering**:
- Hold roen
- Løs problemer etter service
- Fokuser på oppgaven
- Be om hjelp ved behov

**Tilbakemeldinger**:
- Konstruktiv kritikk
- Ros god innsats
- Lær av feil
- Evaluering etter service`,
    },
    {
      id: 'restaurant-mat-vg1-45-tip-1',
      type: 'tip',
      title: 'Alltid bekreft',
      content: `Når du får en beskjed eller ordre, bekreft alltid med "Oui!" eller "Heard!". Dette sikrer at beskjeden er mottatt og hindrer misforståelser under travel service.`,
    },
    {
      id: 'restaurant-mat-vg1-45-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr "Fire!" i kjøkkensammenheng?',
        solution: 'Kommando for å starte tilberedning av en rett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-45-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er sous chefens rolle?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Nestkommanderende med ansvar for daglig drift',
            multipleChoiceOptions: [
              'Nestkommanderende med ansvar for daglig drift',
              'Ansvarlig for forretter',
              'Lærling på kjøkkenet',
              'Servitør',
            ],
          },
        ],
        solution: 'Sous chef er nestkommanderende, ansvarlig for daglig drift og stedfortreder for kjøkkensjefen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-45-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når sier man "Behind!"?',
        solution: 'Når man går bak noen for å varsle at man er der, slik at personen ikke snur seg og kolliderer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-45-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr "All day" i en ordre?',
        solution: 'Totalt antall av en rett som skal lages til alle bordene som er i gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-45-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva betyr "à la minute"?',
        solution: 'Laget på bestilling, øyeblikkelig - maten lages fersk når ordren kommer inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-45-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv hvordan en ordre flyter gjennom kjøkkenet fra den kommer inn til retten er ferdig.',
        solution: 'Servitør legger inn ordre. Sous chef roper "Ordre!" og leser opp. Partisjefene bekrefter "Oui!". "Fire!" gis når timing er riktig. Partiene jobber parallelt. "How long?" for koordinering. "Ready!" når element er ferdig. "Pick up!" når alt er anrettet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-45-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-45-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en ordliste med 10 viktige kjøkkenkommandoer og faguttrykk med forklaringer.',
        solution: 'Fire - start tilberedning. Behind - varsler posisjon. Hot - varmt fat. Pick up - klar for servering. All day - totalt antall. Mise en place - alt på plass. Deglaze - løsne stekeskorpe. Blanch - hurtig koking. À la minute - lages på bestilling. Oui chef - bekreftelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 46: Kvalitetssikring og internkontroll
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_46: TextbookChapter = {
  id: 'restaurant-mat-vg1-46',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '46',
  title: 'Kvalitetssikring og internkontroll',
  description: 'Lær om IK-mat, dokumentasjon og systematisk kvalitetsarbeid i kjøkkenet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå internkontrollsystemet (IK-mat)',
    'dokumentere rutiner og avvik',
    'gjennomføre daglige kontroller',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-46-intro',
      type: 'text',
      content: `Alle virksomheter som håndterer mat er pålagt å ha internkontroll (IK-mat). Dette sikrer at maten er trygg, og at virksomheten følger regelverket systematisk.`,
    },
    {
      id: 'restaurant-mat-vg1-46-def-1',
      type: 'definition',
      title: 'IK-mat',
      content: `IK-mat (Internkontroll for næringsmiddelbransjen) er et system der virksomheten selv kontrollerer og dokumenterer at regelverket for mattrygghet følges.`,
    },
    {
      id: 'restaurant-mat-vg1-46-text-1',
      type: 'text',
      content: `**Krav til IK-mat**

**Lovgrunnlag**:
- Matloven
- IK-matforskriften
- Mattilsynets veiledning
- Pålagt alle matbedrifter

**Hovedprinsipper**:
- Forebygge helseskade
- Sikre trygg mat
- Dokumentere rutiner
- Korrigere avvik

**Innhold i IK-systemet**:
- Hvem gjør hva (ansvar)
- Hva skal gjøres (rutiner)
- Hvordan det skal gjøres (prosedyrer)
- Når det skal gjøres (frekvens)
- Dokumentasjon av utførelse`,
    },
    {
      id: 'restaurant-mat-vg1-46-text-2',
      type: 'text',
      content: `**Daglige kontroller**

**Temperaturlogg**:
- Kjøleskap: Mål og noter daglig
- Fryser: Mål og noter daglig
- Varmholding: Over 60°C
- Avvikshåndtering ved feil

**Varemottak**:
- Kontroller temperatur
- Sjekk holdbarhetsdatoer
- Vurder kvalitet
- Dokumenter mottatt vare

**Renholdsplan**:
- Daglige oppgaver
- Ukentlige oppgaver
- Månedlige oppgaver
- Signering ved utførelse

**Sporbarhet**:
- Merk alt med dato
- Noter leverandør
- Batch-nummer hvor aktuelt
- Mulig å spore tilbake`,
    },
    {
      id: 'restaurant-mat-vg1-46-text-3',
      type: 'text',
      content: `**Avvikshåndtering**

**Hva er et avvik?**:
- Temperatur utenfor grense
- Holdbarhetsdato overskredet
- Feil ved varemottak
- Brudd på hygieneregler

**Avviksrapport**:
- Hva skjedde?
- Når skjedde det?
- Hvem oppdaget det?
- Hvilke tiltak ble gjort?
- Hvordan unngå gjentakelse?

**Korrigerende tiltak**:
- Kast mat ved tvil
- Reparer/juster utstyr
- Oppdater rutiner
- Lær av feilen

**Dokumentasjon**:
- Skriftlig rapport
- Dato og signatur
- Arkiver systematisk
- Tilgjengelig for tilsyn`,
    },
    {
      id: 'restaurant-mat-vg1-46-text-4',
      type: 'text',
      content: `**Mattilsynets rolle**

**Tilsyn**:
- Uanmeldt inspeksjon
- Gjennomgang av IK-system
- Sjekk av dokumentasjon
- Observasjon av praksis

**Smilefjesordningen**:
- Resultatet publiseres
- Gir offentlig tilbakemelding
- Motiverer til god praksis
- Vises ved inngang

**Ved avvik**:
- Pålegg om utbedring
- Frist for retting
- Nytt tilsyn
- Eventuelt stenging

**Forberedelse til tilsyn**:
- Ha IK-system tilgjengelig
- Dokumenter oppdatert
- Kjenn dine rutiner
- Vær ærlig og samarbeidsvillig`,
    },
    {
      id: 'restaurant-mat-vg1-46-tip-1',
      type: 'tip',
      title: 'Gjør det til vane',
      content: `Innarbeid kontroller som del av daglig rutine. Da blir det ikke ekstraarbeid, og du oppdager problemer tidlig.`,
    },
    {
      id: 'restaurant-mat-vg1-46-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er IK-mat?',
        solution: 'Internkontrollsystem der virksomheten selv kontrollerer og dokumenterer at regelverket for mattrygghet følges.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-46-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skal en avviksrapport inneholde?',
        solution: 'Hva som skjedde, når, hvem som oppdaget det, hvilke tiltak som ble gjort, og hvordan unngå gjentakelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-46-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva sjekkes ved varemottak?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg alle som gjelder.',
            solution: 'Temperatur, holdbarhetsdato og kvalitet',
            multipleChoiceOptions: [
              'Temperatur, holdbarhetsdato og kvalitet',
              'Kun pris',
              'Bare mengde',
              'Fargen på emballasjen',
            ],
          },
        ],
        solution: 'Ved varemottak kontrolleres temperatur, holdbarhetsdato, kvalitet og at varen stemmer med bestilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-46-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er smilefjesordningen?',
        solution: 'System der Mattilsynets tilsynsresultat publiseres med smilefjes, vises ved inngang til virksomheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-46-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er sporbarhet viktig?',
        solution: 'For å kunne spore tilbake til leverandør og batch ved problemer, og trekke tilbake produkter om nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-46-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Du oppdager at kjøleskapstemperaturen har vært 8°C over natten. Beskriv hvordan du håndterer dette avviket.',
        solution: 'Vurder maten - kast ved tvil. Dokumenter avviket skriftlig med dato, tid, temperatur og hvilken mat som var berørt. Sjekk kjøleskapet for feil. Tilkall service om nødvendig. Vurder årsak og hvordan unngå gjentakelse. Arkiver rapporten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-46-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-46-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en enkel dagssjekkliste for IK-mat-kontroller i et lite kjøkken.',
        solution: 'Temperaturlogg kjøleskap og fryser. Varemottakskontroll. Rengjøring av arbeidsflater. Håndvask ved alle kritiske punkter. Dato-merking av åpnede varer. Avfallshåndtering. Signatur og dato.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 47-55: Kortfattede kapitler for å nå målet
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_47: TextbookChapter = {
  id: 'restaurant-mat-vg1-47',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '47',
  title: 'Brød og bakverk',
  description: 'Lær grunnleggende brødbaking, deigtyper og teknikker for vellykkede bakst.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lage ulike brødtyper fra bunnen',
    'forstå gjærens rolle i bakst',
    'beherske elting og heving',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-47-intro',
      type: 'text',
      content: `Brødbaking er en av de eldste matlagingsteknikkene. Å mestre gjærdeig gir deg mulighet til å lage alt fra ciabatta til croissanter.`,
    },
    {
      id: 'restaurant-mat-vg1-47-def-1',
      type: 'definition',
      title: 'Autolyse',
      content: `Autolyse er en hvileperiode etter at mel og vann er blandet, før gjær og salt tilsettes. Gir bedre glutenutvikling og enklere elting.`,
    },
    {
      id: 'restaurant-mat-vg1-47-text-1',
      type: 'text',
      content: `**Brødtyper**

**Hvitt brød**: Hvetemel, gjær, salt, vann. Klassisk og allsidig.

**Grovbrød**: Fullkorn, sammalt mel. Mer fiber og smak.

**Surdeig**: Naturlig fermentering uten tilsatt gjær. Kompleks smak, lang holdbarhet.

**Focaccia**: Italiensk flatbrød med olivenolje. Luftig og smakfull.

**Ciabatta**: Våt deig, store luftbobler. Sprø skorpe, myk innside.`,
    },
    {
      id: 'restaurant-mat-vg1-47-text-2',
      type: 'text',
      content: `**Grunnleggende teknikk**

**Elting**: Utvikler gluten, 10-15 minutter for hånd. Deigen skal være glatt og elastisk.

**Første heving**: Dekket, romtemperatur, dobler i størrelse. Ca. 1-2 timer.

**Stek ned**: Slå ut luften, form brødet.

**Andre heving**: Formgitt deig hever i form. Ca. 45-60 minutter.

**Steking**: Høy temperatur først, deretter senkes. Damp i ovnen gir sprø skorpe.`,
    },
    {
      id: 'restaurant-mat-vg1-47-text-3',
      type: 'text',
      content: `**Tips for suksess**

- Mål ingredienser nøyaktig (helst i vekt)
- Bruk romtemperert væske (25-30°C)
- Ikke drep gjæren med for varmt vann
- La deigen heve til den er dobbelt så stor
- Bruk damp i ovnen for sprø skorpe
- Bank på bunnen - hult lyd = ferdig`,
    },
    {
      id: 'restaurant-mat-vg1-47-tip-1',
      type: 'tip',
      title: 'Vindusrute-testen',
      content: `Strekk en liten bit deig forsiktig. Når den kan strekkes så tynn at lys skinner gjennom uten å ryke, er glutenet tilstrekkelig utviklet.`,
    },
    {
      id: 'restaurant-mat-vg1-47-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva gjør gjær i brøddeig?',
        solution: 'Gjær spiser sukker og produserer CO2 som får deigen til å heve, samt alkohol som fordamper ved steking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-47-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er vindusrute-testen?',
        solution: 'En test der deigen strekkes tynn - hvis lys skinner gjennom uten at den ryker, er glutenet utviklet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-47-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor brukes damp i ovnen ved brødbaking?',
        solution: 'Damp gir sprøere skorpe ved å holde overflaten fuktig i starten, slik at den kan utvide seg før den stivner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-47-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er surdeig?',
        solution: 'Brød laget med naturlig fermentering av mel og vann, uten tilsatt gjær. Gir kompleks smak og lang holdbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-47-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvor lenge eltes brøddeig for hånd?',
        solution: 'Ca. 10-15 minutter til deigen er glatt, elastisk og passerer vindusrute-testen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-47-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv trinn for trinn hvordan du baker et enkelt hvetebrød.',
        solution: 'Bland mel, vann, gjær og salt. Elt 10-15 min. La heve til dobbelt størrelse (1-2 timer). Stek ned og form. Hev igjen 45-60 min. Stek ved 220°C med damp først, deretter 200°C til gyllen og hul lyd ved banking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-47-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-47-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Sammenlign tre brødtyper og beskriv hva som gjør hver av dem unike.',
        solution: 'Ciabatta - våt deig, store luftbobler, sprø skorpe. Focaccia - flatbrød med olje, urter, myk tekstur. Surdeig - naturlig gjæring, syrlig smak, lang holdbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_RESTAURANT_MAT_VG1_48: TextbookChapter = {
  id: 'restaurant-mat-vg1-48',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '48',
  title: 'Grilling og BBQ',
  description: 'Lær ulike grillteknikker, marinering og tilberedning av grillmat.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beherske direkte og indirekte grilling',
    'marinere og krydre grillmat',
    'kontrollere temperatur på grill',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-48-intro',
      type: 'text',
      content: `Grilling er en urteknikk som gir unik smak gjennom røyk og karamellisering. Fra rask grilling til langsom BBQ - mestrer du varmen, mestrer du grillen.`,
    },
    {
      id: 'restaurant-mat-vg1-48-def-1',
      type: 'definition',
      title: 'Low and slow',
      content: `BBQ-teknikk der kjøttet tilberedes ved lav temperatur (100-130°C) over lang tid (flere timer). Gir mørt kjøtt med røyksmak.`,
    },
    {
      id: 'restaurant-mat-vg1-48-text-1',
      type: 'text',
      content: `**Grillteknikker**

**Direkte grilling**: Mat rett over varmekilden. Høy varme, kort tid. Biff, pølser, grønnsaker.

**Indirekte grilling**: Mat ved siden av varmekilden. Lavere varme, lengre tid. Hele kyllinger, ribber.

**Tosonegrilling**: Varm og kald sone. Svi på varm, fullstekt på kald. Kontroll over steking.

**Røyking**: Trestykker gir røyksmak. Vann i dryppanne for fuktighet. Lang tid, lav temperatur.`,
    },
    {
      id: 'restaurant-mat-vg1-48-text-2',
      type: 'text',
      content: `**Marinering**

**Formål**: Mørner kjøtt, tilfører smak, holder fuktighet.

**Basisoppskrift**: Olje + syre + aromater. 1-24 timer avhengig av størrelse.

**Dry rub**: Tørre krydder gnides inn. Lager bark ved grilling.

**Mop sauce**: Tynn saus pensles under grilling. Holder kjøttet fuktig.`,
    },
    {
      id: 'restaurant-mat-vg1-48-text-3',
      type: 'text',
      content: `**Temperaturer**

- Kylling: 74°C (hele) / 72°C (deler)
- Biff medium rare: 55-57°C
- Svin: 63-65°C
- Ribbe (BBQ): 90-95°C (mør kollagen)
- Pølser: 70°C`,
    },
    {
      id: 'restaurant-mat-vg1-48-tip-1',
      type: 'tip',
      title: 'La kjøttet hvile',
      content: `Hvil grillkjøtt under folie i 5-10 minutter. Saftene omfordeles og temperaturen jevner seg ut.`,
    },
    {
      id: 'restaurant-mat-vg1-48-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på direkte og indirekte grilling?',
        solution: 'Direkte: Mat over varmekilden, høy varme, kort tid. Indirekte: Mat ved siden av varmen, lavere varme, lengre tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-48-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "low and slow"?',
        solution: 'BBQ-teknikk med lav temperatur (100-130°C) over lang tid som gir mørt kjøtt med røyksmak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-48-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en dry rub?',
        solution: 'Tørre krydder som gnides inn i kjøttet før grilling, danner en smakfull bark.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-48-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken kjernetemperatur skal grillet kylling ha?',
        solution: '74°C for hel kylling, 72°C for kyllingdeler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-48-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor hviler man grillkjøtt etter grilling?',
        solution: 'Saftene omfordeles og temperaturen jevner seg ut, gir saftigere resultat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-48-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg grilling av en hel kylling med tosonegrilling.',
        solution: 'Krydre kylling med dry rub. Sett opp tosone-grill. Svi på varm sone for farge. Flytt til kald sone med indirekte varme. Grill til 74°C i tykkeste del. Hvil 10 min.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-48-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-48-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en marinade for grillkylling og forklar ingrediensenes rolle.',
        solution: 'Olje (fuktighet, varmeoverføring), sitrus/eddik (mørner), hvitløk/urter (smak), salt (smak, fuktighet). La marinere 2-4 timer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler fra del 3
export const CHAPTERS_RESTAURANT_MAT_VG1_DEL3 = [
  CHAPTER_RESTAURANT_MAT_VG1_43,
  CHAPTER_RESTAURANT_MAT_VG1_44,
  CHAPTER_RESTAURANT_MAT_VG1_45,
  CHAPTER_RESTAURANT_MAT_VG1_46,
  CHAPTER_RESTAURANT_MAT_VG1_47,
  CHAPTER_RESTAURANT_MAT_VG1_48,
];
