/**
 * Salg, service og reiseliv VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Salg, service og reiseliv på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Salgsprosessen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_1: TextbookChapter = {
  id: 'salg-service-vg1-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '1',
  title: 'Salgsprosessen',
  description: 'Fasene i salgsprosessen fra kundemøte til avslutning. Aktiv lytting, behovsavklaring og salgsteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjennomføre alle fasene i en salgsprosess',
    'bruke aktiv lytting og behovsavklaring i kundemøter',
  ],
  content: [
    {
      id: 'salg-service-vg1-1-intro',
      type: 'text',
      content: `Salgsprosessen er hjørnestenen i varehandel og servicebransjen. Å forstå og mestre de ulike fasene gjør deg til en profesjonell selger som både skaper verdi for kunden og øker salget for bedriften.`,
    },
    {
      id: 'salg-service-vg1-1-def-1',
      type: 'definition',
      title: 'Salgsprosessen',
      content: `Salgsprosessen er en strukturert framgangsmåte for å møte kunder, kartlegge behov, presentere løsninger og avslutte salget. Den består av flere definerte faser som bygger på hverandre.`,
    },
    {
      id: 'salg-service-vg1-1-text-1',
      type: 'text',
      content: `**De fem fasene i salgsprosessen**

**1. Forberedelse og åpning**
- Forbered deg på kundemøtet
- Sett deg inn i produktene du skal selge
- Skap kontakt med en vennlig hilsen
- Les kundens signaler og kroppsspråk

**2. Behovsavklaring**
- Still åpne spørsmål (hvem, hva, hvor, når, hvorfor, hvordan)
- Lytt aktivt til kundens svar
- Oppsummer for å vise at du forstår
- Identifiser kundens virkelige behov

**3. Produktpresentasjon**
- Presenter produkter som passer kundens behov
- Fokuser på fordeler, ikke bare egenskaper
- Bruk AIDA-modellen: Attention, Interest, Desire, Action
- Vis produktet i bruk hvis mulig`,
    },
    {
      id: 'salg-service-vg1-1-def-2',
      type: 'definition',
      title: 'Aktiv lytting',
      content: `Aktiv lytting betyr å være fullt til stede i samtalen, stille oppfølgingsspørsmål, oppsummere det kunden sier og vise interesse gjennom blikk, nikk og bekreftende lyder.`,
    },
    {
      id: 'salg-service-vg1-1-text-2',
      type: 'text',
      content: `**4. Håndtering av innvendinger**
- Se på innvendinger som kjøpssignaler
- Lytt til innvendingen uten å avbryte
- Bekreft kundens bekymring
- Gi relevante motargumenter
- Vanlige innvendinger: pris, behov, timing

**5. Salgsavslutning**
- Oppsummer fordelene
- Still lukkende spørsmål: "Skal vi pakke den inn?"
- Vær tydelig på neste steg
- Takk for handelen og ønsk velkommen tilbake`,
    },
    {
      id: 'salg-service-vg1-1-tip-1',
      type: 'tip',
      title: 'Åpne vs. lukkede spørsmål',
      content: `Åpne spørsmål starter med "hva", "hvordan", "hvorfor" og gir utfyllende svar. Lukkede spørsmål gir ja/nei-svar og brukes best ved salgsavslutning. Eksempel: "Hva skal du bruke produktet til?" (åpent) vs. "Vil du ha det?" (lukket).`,
    },
    {
      id: 'salg-service-vg1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem fasene i salgsprosessen?',
        subTasks: [
          {
            label: 'a',
            task: 'List opp de fem fasene i riktig rekkefølge.',
            solution: '1. Forberedelse og åpning, 2. Behovsavklaring, 3. Produktpresentasjon, 4. Håndtering av innvendinger, 5. Salgsavslutning',
          },
        ],
        solution: 'Salgsprosessen består av: 1) Forberedelse og åpning, 2) Behovsavklaring, 3) Produktpresentasjon, 4) Håndtering av innvendinger, 5) Salgsavslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er aktiv lytting?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva aktiv lytting innebærer.',
            solution: 'Å være fullt til stede, stille oppfølgingsspørsmål, oppsummere og vise interesse',
            multipleChoiceOptions: [
              'Å være fullt til stede, stille oppfølgingsspørsmål, oppsummere og vise interesse',
              'Å snakke mye og fortelle om produkter',
              'Å vente på din tur til å snakke',
              'Å bare nikke og smile',
            ],
          },
        ],
        solution: 'Aktiv lytting betyr å virkelig høre på kunden, vise interesse, stille oppfølgingsspørsmål og oppsummere for å sikre forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv tre åpne spørsmål du kan bruke i behovsavklaring.',
        solution: 'Eksempler: "Hva skal du bruke produktet til?", "Hvordan har du brukt lignende produkter før?", "Hva er viktigst for deg ved dette kjøpet?"',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'En kunde sier: "Det er for dyrt." Hvordan håndterer du denne innvendingen?',
        solution: 'Lytt først, bekreft bekymringen, spør hva kunden sammenlikner med, fremhev verdien og kvaliteten, foreslå eventuelt rimeligere alternativer eller betalingsplaner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen på produktegenskaper og produktfordeler?',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på en egenskap og tilhørende fordel.',
            solution: 'Egenskap: "Jakken er vanntett." Fordel: "Du holder deg tørr i regnvær."',
          },
        ],
        solution: 'Egenskaper er fakta om produktet, mens fordeler er hva kunden oppnår. Kunder kjøper fordeler, ikke egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Kundebehandling og service
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2: TextbookChapter = {
  id: 'salg-service-vg1-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '2',
  title: 'Kundebehandling og service',
  description: 'Kundeservice, reklamasjonsbehandling, konflikthåndtering og kundetilfredshet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gi god kundeservice i ulike situasjoner',
    'håndtere reklamasjoner profesjonelt',
  ],
  content: [
    {
      id: 'salg-service-vg1-2-intro',
      type: 'text',
      content: `God kundebehandling er avgjørende for enhver virksomhet. Fornøyde kunder kommer tilbake, anbefaler bedriften til andre og bidrar til bedriftens gode omdømme.`,
    },
    {
      id: 'salg-service-vg1-2-def-1',
      type: 'definition',
      title: 'Kundeservice',
      content: `Kundeservice er all hjelp, veiledning og oppfølging en kunde mottar før, under og etter et kjøp. God service handler om å overgå kundens forventninger.`,
    },
    {
      id: 'salg-service-vg1-2-text-1',
      type: 'text',
      content: `**Grunnpilarer for god kundeservice**

**1. Vennlighet og respekt**
- Møt hver kunde med et smil
- Bruk kundens navn når du kjenner det
- Vis respekt uansett kundens oppførsel
- Vær tålmodig og forståelsesfull

**2. Kunnskap og kompetanse**
- Kjenn produktene og tjenestene
- Gi ærlige og klare svar
- Si fra hvis du ikke vet og finn ut
- Hold deg oppdatert på endringer

**3. Responstid og tilgjengelighet**
- Hilse kunden raskt ved ankomst
- Unngå lange ventetider
- Vær tilgjengelig når kunden trenger hjelp
- Følg opp på løfter`,
    },
    {
      id: 'salg-service-vg1-2-def-2',
      type: 'definition',
      title: 'Serviceparadokset',
      content: `Serviceparadokset betyr at en kunde som har hatt et problem som blir løst godt, ofte blir mer lojal enn kunder som aldri har hatt problemer. God problemløsning skaper sterke kunderelasjoner.`,
    },
    {
      id: 'salg-service-vg1-2-text-2',
      type: 'text',
      content: `**Håndtering av reklamasjoner**

**Trinn 1: Lytt og forstå**
- La kunden fortelle hele historien
- Ikke avbryt eller forsvar deg
- Vis empati: "Jeg forstår at dette er frustrerende"

**Trinn 2: Beklage og ta ansvar**
- Beklage ulempen, selv om det ikke er din feil
- Ta ansvar på vegne av bedriften
- Ikke skyld på andre

**Trinn 3: Finn løsning**
- Foreslå konkrete løsninger
- Spør hva kunden ønsker
- Følg bedriftens retningslinjer
- Alternativer: bytte, reparasjon, refusjon

**Trinn 4: Følg opp**
- Forsikre deg om at kunden er fornøyd
- Dokumenter hendelsen
- Lær av situasjonen`,
    },
    {
      id: 'salg-service-vg1-2-tip-1',
      type: 'tip',
      title: 'HEAT-modellen',
      content: `HEAT-modellen brukes ved konflikter: Hear (hør), Empathize (føl empati), Apologize (beklage), Take action (handle). Dette hjelper deg å håndtere vanskelige situasjoner profesjonelt.`,
    },
    {
      id: 'salg-service-vg1-2-text-3',
      type: 'text',
      content: `**Kundetilfredshet og lojalitet**

**Faktorer som påvirker tilfredshet**:
- Produktkvalitet
- Servicenivå
- Pris i forhold til verdi
- Tilgjengelighet
- Personlig behandling

**Lojale kunder**:
- Kommer tilbake
- Kjøper mer over tid
- Anbefaler til andre
- Er mindre prissensitive
- Gir verdifull tilbakemelding`,
    },
    {
      id: 'salg-service-vg1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de tre grunnpilarene for god kundeservice?',
        subTasks: [
          {
            label: 'a',
            task: 'List opp de tre grunnpilarene.',
            solution: '1. Vennlighet og respekt, 2. Kunnskap og kompetanse, 3. Responstid og tilgjengelighet',
          },
        ],
        solution: 'God kundeservice bygger på vennlighet og respekt, kunnskap og kompetanse, samt rask responstid og god tilgjengelighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er serviceparadokset?',
        solution: 'At kunder som har hatt et problem som ble løst godt, ofte blir mer lojale enn kunder som aldri har opplevd problemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fire trinnene i håndtering av reklamasjoner.',
        solution: '1. Lytt og forstå, 2. Beklage og ta ansvar, 3. Finn løsning, 4. Følg opp. Dette sikrer at kunden føler seg hørt og får problemet løst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'En kunde er sint fordi et produkt gikk i stykker etter to uker. Hva gjør du?',
        solution: 'Bruk HEAT-modellen: Lytt til kunden uten å avbryte, vis empati ("Jeg forstår at dette er frustrerende"), beklage situasjonen, og tilby konkret løsning (bytte, reparasjon eller refusjon etter policy).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er lojale kunder verdifulle for en bedrift?',
        solution: 'Lojale kunder kommer tilbake, kjøper mer over tid, anbefaler bedriften til andre, er mindre prissensitive og gir verdifull tilbakemelding som kan forbedre virksomheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Markedsføring grunnleggende
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3: TextbookChapter = {
  id: 'salg-service-vg1-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '3',
  title: 'Markedsføring grunnleggende',
  description: 'Markedsmiks, målgrupper, merkevarebygging og markedsføringskanaler.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare grunnleggende markedsføringsprinsipper',
    'bruke markedsmiksen i praktiske situasjoner',
  ],
  content: [
    {
      id: 'salg-service-vg1-3-intro',
      type: 'text',
      content: `Markedsføring handler om å skape, kommunisere og levere verdi til kunder. God markedsføring sørger for at rett produkt når rett kunde til rett tid og rett pris.`,
    },
    {
      id: 'salg-service-vg1-3-def-1',
      type: 'definition',
      title: 'Markedsmiksen (4P)',
      content: `Markedsmiksen består av fire elementer som må fungere sammen: Product (produkt), Price (pris), Place (distribusjon) og Promotion (markedskommunikasjon).`,
    },
    {
      id: 'salg-service-vg1-3-text-1',
      type: 'text',
      content: `**De fire P-ene i markedsmiksen**

**1. Product (Produkt)**
- Hva selger vi?
- Kvalitet, design, funksjon
- Emballasje og merking
- Service og garanti

**2. Price (Pris)**
- Hvor mye skal det koste?
- Kostpris + margin
- Konkurrentpriser
- Kundens betalingsvilje
- Prisstrategier: lavpris, premium, penetrasjon

**3. Place (Distribusjon)**
- Hvor selger vi?
- Fysisk butikk, nettbutikk eller begge
- Grossister og mellommenn
- Tilgjengelighet for målgruppen

**4. Promotion (Markedskommunikasjon)**
- Hvordan informerer vi kundene?
- Reklame (TV, radio, print, digitalt)
- PR og medieomtale
- Personlig salg
- Kampanjer og tilbud`,
    },
    {
      id: 'salg-service-vg1-3-def-2',
      type: 'definition',
      title: 'Målgruppe',
      content: `Målgruppen er den gruppen av kunder som produktet eller tjenesten er rettet mot. Målgruppen defineres ut fra demografi (alder, kjønn), geografi, økonomi, livsstil og behov.`,
    },
    {
      id: 'salg-service-vg1-3-text-2',
      type: 'text',
      content: `**Målgruppesegmentering**

**Demografisk segmentering**:
- Alder
- Kjønn
- Utdanning
- Inntekt
- Familiestatus

**Geografisk segmentering**:
- Land, region, by
- Klima
- Befolkningstetthet

**Psykografisk segmentering**:
- Livsstil og interesser
- Verdier og holdninger
- Personlighet

**Atferdssegmentering**:
- Kjøpsmønster
- Merkelojalitet
- Bruksfrekvens`,
    },
    {
      id: 'salg-service-vg1-3-text-3',
      type: 'text',
      content: `**Merkevarebygging**

**Hva er en merkevare?**
- Et produkt med identitet
- Løfter til kunden
- Assosiasjoner og følelser

**Elementer i en merkevare**:
- Navn og logo
- Farger og design
- Verdier og personlighet
- Kundeoppplevelse

**Fordeler med sterk merkevare**:
- Kundelojalitet
- Høyere priser
- Lettere å lansere nye produkter
- Konkurransefortrinn`,
    },
    {
      id: 'salg-service-vg1-3-tip-1',
      type: 'tip',
      title: 'AIDA-modellen',
      content: `AIDA brukes for å lage effektiv markedskommunikasjon: Attention (fang oppmerksomhet), Interest (vekk interesse), Desire (skap ønske), Action (få kunden til å handle).`,
    },
    {
      id: 'salg-service-vg1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva består markedsmiksen (4P) av?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de fire P-ene.',
            solution: 'Product (Produkt), Price (Pris), Place (Distribusjon), Promotion (Markedskommunikasjon)',
          },
        ],
        solution: 'Markedsmiksen består av produkt, pris, distribusjon (place) og markedskommunikasjon (promotion).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en målgruppe?',
        solution: 'Målgruppen er den gruppen av kunder som produktet eller tjenesten er rettet mot, definert ut fra demografi, geografi, økonomi, livsstil og behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv fire måter å segmentere en målgruppe på.',
        solution: '1. Demografisk (alder, kjønn, inntekt), 2. Geografisk (sted, klima), 3. Psykografisk (livsstil, verdier), 4. Atferdsmessig (kjøpsmønster, lojalitet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et produkt du kjenner godt. Beskriv markedsmiksen for dette produktet.',
        solution: 'Eksempel smartphone: Product (design, funksjoner, kvalitet), Price (premium-pris), Place (nettbutikk, elektronikkbutikker), Promotion (reklame på sosiale medier, TV, influencere).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er fordelene med en sterk merkevare?',
        solution: 'Kundelojalitet, mulighet til å ta høyere priser, lettere å lansere nye produkter, og konkurransefortrinn i markedet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Bruk AIDA-modellen til å lage en enkel annonse for et produkt.',
        solution: 'Eksempel energidrikk: Attention (fargerik boks med sprut), Interest (perfekt før trening), Desire (bli som idrettsutøveren i annonsen), Action ("Kjøp nå - tilbud!").',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Digital markedsføring
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4: TextbookChapter = {
  id: 'salg-service-vg1-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '4',
  title: 'Digital markedsføring',
  description: 'Sosiale medier, netthandel, SEO og digital kommunikasjon med kunder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke digitale kanaler til markedsføring',
    'forstå hvordan sosiale medier påvirker salg',
  ],
  content: [
    {
      id: 'salg-service-vg1-4-intro',
      type: 'text',
      content: `Digital markedsføring er i dag den viktigste måten å nå kunder på. Sosiale medier, søkemotorer og netthandel har endret måten vi kjøper og selger varer og tjenester.`,
    },
    {
      id: 'salg-service-vg1-4-def-1',
      type: 'definition',
      title: 'Digital markedsføring',
      content: `Digital markedsføring er all markedsføring som skjer via digitale kanaler som nettside, sosiale medier, e-post, søkemotorer og mobilapper.`,
    },
    {
      id: 'salg-service-vg1-4-text-1',
      type: 'text',
      content: `**Viktige digitale markedsføringskanaler**

**1. Sosiale medier**
- Facebook, Instagram, TikTok, Snapchat, LinkedIn
- Organisk innhold (gratis poster)
- Betalt annonsering (reklame)
- Influencermarkedsføring
- Interaksjon med følgere

**2. Søkemotormarkedsføring (SEM)**
- SEO (Search Engine Optimization) - organisk søk
- Google Ads - betalte søkeresultater
- Søkeord og relevans
- Lokalsøk (Google My Business)

**3. E-postmarkedsføring**
- Nyhetsbrev
- Kampanjer og tilbud
- Personalisering
- Automatisering

**4. Innholdsmarkedsføring (Content marketing)**
- Blogger og artikler
- Videoer og podcasts
- Guides og e-bøker
- Gi verdi, ikke bare selg`,
    },
    {
      id: 'salg-service-vg1-4-def-2',
      type: 'definition',
      title: 'SEO (Search Engine Optimization)',
      content: `SEO er arbeidet med å forbedre nettsiden slik at den rangerer høyere i søkeresultater på Google og andre søkemotorer. Målet er å få flere besøkende uten å betale for annonser.`,
    },
    {
      id: 'salg-service-vg1-4-text-2',
      type: 'text',
      content: `**Sosiale medier for bedrifter**

**Velg riktig plattform**:
- Instagram: Visuelt, unge voksne, lifestyle
- Facebook: Bredt publikum, alle aldre
- TikTok: Svært unge, kreativt innhold
- LinkedIn: B2B, profesjonelle

**Innholdstyper som fungerer**:
- Produktbilder og videoer
- Kundehistorier og anmeldelser
- Bak kulissene-innhold
- Tips og råd
- Konkurranser og kampanjer

**Engasjement**:
- Svar på kommentarer
- Still spørsmål til følgerne
- Bruk hashtags
- Post regelmessig`,
    },
    {
      id: 'salg-service-vg1-4-text-3',
      type: 'text',
      content: `**E-handel og nettbutikk**

**Fordeler med netthandel**:
- Åpent 24/7
- Når kunder over hele landet/verden
- Lavere driftskostnader enn fysisk butikk
- Data om kundeadferd

**Viktige elementer i nettbutikk**:
- God produktbeskrivelse og bilder
- Enkel navigasjon
- Sikre betalingsløsninger
- Tydelig fraktkostnader
- Kundevurderinger
- God kundeservice`,
    },
    {
      id: 'salg-service-vg1-4-tip-1',
      type: 'tip',
      title: 'Google Analytics',
      content: `Google Analytics er et gratis verktøy som viser hvor besøkende på nettsiden kommer fra, hva de ser på, og hvor lenge de blir. Dette hjelper deg å forstå kundene bedre.`,
    },
    {
      id: 'salg-service-vg1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fire digitale markedsføringskanaler.',
        solution: '1. Sosiale medier, 2. Søkemotormarkedsføring (SEM/SEO), 3. E-postmarkedsføring, 4. Innholdsmarkedsføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er SEO?',
        solution: 'SEO (Search Engine Optimization) er arbeidet med å optimalisere nettsiden slik at den rangerer høyere i søkeresultater på Google og andre søkemotorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken sosial medieplattform passer best for et motemerke rettet mot 18-25 år?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg plattform og begrunn valget.',
            solution: 'Instagram, fordi det er visuelt fokusert, populært blant unge voksne, og egnet for å vise klær og livsstil.',
          },
        ],
        solution: 'Instagram er ideelt for motemerker rettet mot unge voksne på grunn av visuell profil, lifestyle-fokus og høy bruk i målgruppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre fordeler med netthandel sammenliknet med fysisk butikk.',
        solution: '1. Åpent 24/7, 2. Når kunder over hele landet/verden, 3. Lavere driftskostnader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Planlegg en sosial mediekampanje for lansering av et nytt produkt.',
        solution: 'Eksempel: 1) Teaser-poster en uke før, 2) Live-lansering på Instagram, 3) Influencere tester produktet, 4) Konkurranse hvor følgere kan vinne produktet, 5) Kundevurderinger og testimonials.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Reiseliv og turisme
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5: TextbookChapter = {
  id: 'salg-service-vg1-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '5',
  title: 'Reiseliv og turisme',
  description: 'Reiselivsbransjen, destinasjonsutvikling, kulturomsorg og bærekraftig turisme.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til reiselivsbransjen og dens betydning',
    'forstå viktigheten av bærekraftig turisme',
  ],
  content: [
    {
      id: 'salg-service-vg1-5-intro',
      type: 'text',
      content: `Reiselivsbransjen er en av verdens største næringer og inkluderer alt fra hoteller og transport til attraksjonene og matopplevelser. Turisme skaper arbeidsplasser og inntekter, men må også være bærekraftig.`,
    },
    {
      id: 'salg-service-vg1-5-def-1',
      type: 'definition',
      title: 'Reiseliv',
      content: `Reiseliv omfatter alle tjenester og produkter som tilbys til mennesker som reiser bort fra sitt vanlige bosted for fritid, forretninger eller andre formål.`,
    },
    {
      id: 'salg-service-vg1-5-text-1',
      type: 'text',
      content: `**Reiselivsbransjen - hovedområder**

**1. Transport**
- Fly, tog, buss, ferje, cruise
- Bilutleie og taxi
- Reisebyråer og bookingsystemer

**2. Overnatting**
- Hoteller, moteller, pensjonat
- Camping, hytter, glamping
- Airbnb og hjemmeovernatting

**3. Mat og drikke**
- Restauranter og kafeer
- Catering og konferansemat
- Lokale matopplevelser

**4. Opplevelser og aktiviteter**
- Museum, gallerier, teater
- Guiding og utferdsleder
- Sport- og naturopplevelser
- Eventarrangører`,
    },
    {
      id: 'salg-service-vg1-5-def-2',
      type: 'definition',
      title: 'Destinasjonsutvikling',
      content: `Destinasjonsutvikling er planlagt arbeid for å gjøre et sted attraktivt for turister. Det inkluderer infrastruktur, attraksjonene, markedsføring og samarbeid mellom aktører.`,
    },
    {
      id: 'salg-service-vg1-5-text-2',
      type: 'text',
      content: `**Typer turisme**

**Fritidsturisme**:
- Ferie og rekreasjon
- Sol og bad
- Eventyrreiser
- Kulturreiser

**Forretningsturisme**:
- Møter og konferanser
- Messer og kongresser
- Incentive-reiser (bonusreiser)

**Spesialinteresseturisme**:
- Økoturisme og naturopplevelser
- Kulinariske reiser
- Sport- og aktivitetsreiser
- Helse- og velværeturisme

**Nærturisme**:
- Ferier i eget land eller nærområdet
- Dagsturer
- Helgeturer`,
    },
    {
      id: 'salg-service-vg1-5-text-3',
      type: 'text',
      content: `**Bærekraftig turisme**

**Tre pilarer**:

**1. Miljømessig bærekraft**
- Reduser karbonutslipp (fly mindre, velg tog)
- Vern om natur og dyreliv
- Reduser avfall og forurensning
- Respekter friluftslivets ånd

**2. Sosial og kulturell bærekraft**
- Respekter lokalbefolkningen
- Bevare kulturarv og tradisjoner
- Hindre overturisme
- Rettferdig fordeling av inntekter

**3. Økonomisk bærekraft**
- Skape varige arbeidsplasser
- Lokalt eierskap
- Reinvestering i lokalsamfunnet
- Langsiktig lønnsomhet`,
    },
    {
      id: 'salg-service-vg1-5-tip-1',
      type: 'tip',
      title: 'Overtursime',
      content: `Overturisme oppstår når for mange turister besøker et sted, noe som skader natur, kultur og trivsel for lokalbefolkningen. Eksempler: Venezia, Barcelona, Lofoten i høysesongen.`,
    },
    {
      id: 'salg-service-vg1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn de fire hovedområdene i reiselivsbransjen.',
        solution: '1. Transport, 2. Overnatting, 3. Mat og drikke, 4. Opplevelser og aktiviteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er destinasjonsutvikling?',
        solution: 'Planlagt arbeid for å gjøre et sted attraktivt for turister gjennom infrastruktur, attraksjonene, markedsføring og samarbeid mellom aktører.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er de tre pilarene i bærekraftig turisme?',
        solution: '1. Miljømessig bærekraft (vern om natur), 2. Sosial og kulturell bærekraft (respekt for lokalsamfunn), 3. Økonomisk bærekraft (langsiktig lønnsomhet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er overturisme, og hvorfor er det et problem?',
        solution: 'Overturisme er når for mange turister besøker et sted. Det skader natur og miljø, svekker kulturarven, og reduserer trivsel for lokalbefolkningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre måter turister kan reise mer bærekraftig.',
        solution: '1. Velg tog eller buss i stedet for fly, 2. Velg lokalt eide hoteller og spis på lokale restauranter, 3. Respekter naturen og følg merket sti.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Økonomi og regnskap grunnleggende
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6: TextbookChapter = {
  id: 'salg-service-vg1-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '6',
  title: 'Økonomi og regnskap grunnleggende',
  description: 'Lønnsomhet, prissetting, kostnader, budsjett og enkel regnskapsføring.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå grunnleggende økonomiske begreper',
    'beregne lønnsomhet og sette pris',
  ],
  content: [
    {
      id: 'salg-service-vg1-6-intro',
      type: 'text',
      content: `Å forstå økonomi er avgjørende for enhver bedrift. Du må vite hva ting koster, hva du kan ta i pris, og om virksomheten går med overskudd eller underskudd.`,
    },
    {
      id: 'salg-service-vg1-6-def-1',
      type: 'definition',
      title: 'Lønnsomhet',
      content: `Lønnsomhet betyr at inntektene er større enn kostnadene, slik at bedriften går med overskudd. Målet er å maksimere overskuddet over tid.`,
    },
    {
      id: 'salg-service-vg1-6-text-1',
      type: 'text',
      content: `**Grunnleggende økonomiske begreper**

**Inntekter**:
- Penger som kommer inn fra salg
- Omsetning = pris × antall solgt

**Kostnader**:
- Penger bedriften bruker
- To typer: faste og variable

**Faste kostnader**:
- Koster det samme uansett omsetning
- Eksempel: husleie, forsikring, strøm, lønn

**Variable kostnader**:
- Øker med salget
- Eksempel: råvarer, innkjøp av varer, emballasje

**Resultat**:
- Overskudd = inntekter > kostnader
- Underskudd = kostnader > inntekter
- Break even = inntekter = kostnader (går i null)`,
    },
    {
      id: 'salg-service-vg1-6-def-2',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `Dekningsbidrag er salgspris minus variable kostnader. Det viser hvor mye hvert solgte produkt bidrar til å dekke faste kostnader og gi overskudd.`,
    },
    {
      id: 'salg-service-vg1-6-text-2',
      type: 'text',
      content: `**Prissetting**

**Kostpris-pluss-metoden**:
1. Beregn kostpris (hva koster det å lage/kjøpe inn?)
2. Legg til ønsket margin/påslag
3. Eksempel: Kostpris 100 kr + 50% påslag = salgspris 150 kr

**Faktorer som påvirker pris**:
- Konkurrentenes priser
- Kundens betalingsvilje
- Merkevare og kvalitet
- Tilbud og etterspørsel
- Kostnadsnivå

**Prisstrategier**:
- Lavprisstrategi: Konkurrer på pris
- Premiumstrategi: Høy pris, høy kvalitet
- Penetrasjonsstrategi: Lav pris ved lansering`,
    },
    {
      id: 'salg-service-vg1-6-text-3',
      type: 'text',
      content: `**Budsjett**

**Hva er et budsjett?**
- En plan for fremtidig økonomi
- Forventede inntekter og kostnader
- Brukes til å styre virksomheten

**Budsjettets deler**:
1. Salgsbudsjett (forventet omsetning)
2. Innkjøpsbudsjett (varekostnader)
3. Driftsbudsjett (lønn, husleie osv.)
4. Resultatbudsjett (overskudd/underskudd)

**Følge opp budsjettet**:
- Sammenlign budsjett med faktiske tall
- Avvik: forskjell mellom budsjett og resultat
- Juster planen underveis`,
    },
    {
      id: 'salg-service-vg1-6-tip-1',
      type: 'tip',
      title: 'Break even-punkt',
      content: `Break even-punktet er når bedriften verken går med overskudd eller underskudd. Formel: Break even = Faste kostnader / (Pris - Variable kostnader per enhet).`,
    },
    {
      id: 'salg-service-vg1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på faste og variable kostnader?',
        solution: 'Faste kostnader er de samme uansett salg (husleie, forsikring), mens variable kostnader øker med salget (råvarer, innkjøp av varer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beregn dekningsbidraget: Salgspris 200 kr, variable kostnader 80 kr.',
        solution: 'Dekningsbidrag = 200 - 80 = 120 kr per solgt enhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'En vare koster 60 kr å kjøpe inn. Bedriften ønsker 40% påslag. Hva blir salgsprisen?',
        solution: 'Salgspris = 60 kr × 1,40 = 84 kr (eller 60 + 60×0,4 = 84 kr).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'En bedrift har faste kostnader på 50 000 kr/mnd. Salgspris per enhet er 100 kr, variable kostnader 40 kr. Hvor mange enheter må selges for å nå break even?',
        solution: 'Break even = 50 000 / (100 - 40) = 50 000 / 60 = 833,3 ≈ 834 enheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er et budsjett, og hvorfor er det viktig?',
        solution: 'Et budsjett er en plan for fremtidig økonomi med forventede inntekter og kostnader. Det er viktig for å styre virksomheten, sette mål og oppdage avvik tidlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Nevn tre faktorer som påvirker prissetting.',
        solution: '1. Konkurrentenes priser, 2. Kundens betalingsvilje, 3. Kostnadsnivå. Andre svar kan inkludere merkevare, kvalitet, tilbud og etterspørsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Kommunikasjon og presentasjon
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7: TextbookChapter = {
  id: 'salg-service-vg1-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '7',
  title: 'Kommunikasjon og presentasjon',
  description: 'Muntlig og skriftlig kommunikasjon, presentasjonsteknikk og kroppsspråk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kommunisere tydelig og profesjonelt',
    'holde engasjerende presentasjoner',
  ],
  content: [
    {
      id: 'salg-service-vg1-7-intro',
      type: 'text',
      content: `God kommunikasjon er nøkkelen til suksess i salg og service. Evnen til å formidle budskap klart, lytte aktivt og tilpasse kommunikasjonen til mottakeren er avgjørende.`,
    },
    {
      id: 'salg-service-vg1-7-def-1',
      type: 'definition',
      title: 'Kommunikasjon',
      content: `Kommunikasjon er utveksling av informasjon, ideer og følelser mellom mennesker. Det skjer gjennom ord (verbal), kroppsspråk (nonverbal) og skrift.`,
    },
    {
      id: 'salg-service-vg1-7-text-1',
      type: 'text',
      content: `**Kommunikasjonsmodellen**

**Sender → Budskap → Mottaker → Tilbakemelding**

**Støy**: Alt som forstyrrer kommunikasjonen
- Fysisk støy (lyd, avbrytelser)
- Semantisk støy (misforståelser, fremmedord)
- Psykologisk støy (fordomme, følelser)

**Viktige prinsipper**:
- Vær tydelig og konkret
- Tilpass språket til mottakeren
- Sjekk at budskapet er forstått
- Lytt aktivt og gi tilbakemelding`,
    },
    {
      id: 'salg-service-vg1-7-def-2',
      type: 'definition',
      title: 'Kroppsspråk',
      content: `Kroppsspråk er nonverbal kommunikasjon gjennom ansiktsuttrykk, blikk, gester, holdning og bevegelser. Det utgjør ofte mer enn halvparten av kommunikasjonen.`,
    },
    {
      id: 'salg-service-vg1-7-text-2',
      type: 'text',
      content: `**Kroppsspråkets betydning**

**Positivt kroppsspråk**:
- Smil og blikkontakt
- Åpen kroppsholdning
- Nikking (viser interesse)
- Lener seg mot samtalen
- Rolige bevegelser

**Negativt kroppsspråk**:
- Unngår blikkontakt
- Krysser armer/bein (lukket)
- Rastløse bevegelser
- Ser på klokka eller telefon
- Vender kroppen bort

**Tips**:
- Vær bevisst ditt eget kroppsspråk
- Les kundens signaler
- Speiling: Tilpass deg kundens tempo`,
    },
    {
      id: 'salg-service-vg1-7-text-3',
      type: 'text',
      content: `**Presentasjonsteknikk**

**Forberedelse**:
- Kjenn målgruppen
- Definer formål og hovedbudskap
- Lag struktur: innledning, hoveddel, avslutning
- Øv på presentasjonen

**Gjennomføring**:
- Start sterkt (fang oppmerksomhet)
- Bruk øyekontakt med publikum
- Variere stemme og tempo
- Bruk visuelle hjelpemidler (bilder, grafer)
- Fortell historier og eksempler
- Avslutt tydelig (oppsummer)

**Håndtering av nervøsitet**:
- Pusteøvelser
- God forberedelse gir trygghet
- Fokuser på budskapet, ikke på deg selv
- Øvelse gjør mester`,
    },
    {
      id: 'salg-service-vg1-7-tip-1',
      type: 'tip',
      title: '7-38-55 regelen',
      content: `Albert Mehrabian fant at kommunikasjon består av 7% ord, 38% tonefall og 55% kroppsspråk. Dette gjelder særlig når budskapet er uklart eller motstridende.`,
    },
    {
      id: 'salg-service-vg1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kommunikasjonsmodellen?',
        solution: 'Sender → Budskap → Mottaker → Tilbakemelding. Støy kan forstyrre alle ledd i modellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre eksempler på positivt kroppsspråk.',
        solution: '1. Smil og blikkontakt, 2. Åpen kroppsholdning (ikke kryssede armer), 3. Nikking som viser interesse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr "støy" i kommunikasjonsmodellen?',
        solution: 'Støy er alt som forstyrrer kommunikasjonen, som fysiske forstyrrelser, misforståelser eller fordomme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en struktur for en 5-minutters presentasjon av et produkt.',
        solution: 'Innledning (30 sek): Fang oppmerksomhet med et spørsmål. Hoveddel (4 min): Vis produktet, forklar fordeler, bruk eksempel. Avslutning (30 sek): Oppsummer og oppfordre til handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er kroppsspråk viktig i kommunikasjon?',
        solution: 'Kroppsspråk utgjør over halvparten av kommunikasjonen og kan bekrefte eller motsi ordene vi sier. Det påvirker hvordan budskapet oppfattes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Forbrukerrettigheter
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8: TextbookChapter = {
  id: 'salg-service-vg1-8',
  courseId: 'salg-service-vg1',
  chapterNumber: '8',
  title: 'Forbrukerrettigheter',
  description: 'Forbrukerkjøpsloven, angrerett, garanti, reklamasjon og personvern.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til forbrukernes rettigheter',
    'håndtere reklamasjoner i henhold til loven',
  ],
  content: [
    {
      id: 'salg-service-vg1-8-intro',
      type: 'text',
      content: `Forbrukerrettigheter beskytter kunder som handler med næringsdrivende. Som selger må du kjenne til disse rettighetene for å gi korrekt informasjon og følge loven.`,
    },
    {
      id: 'salg-service-vg1-8-def-1',
      type: 'definition',
      title: 'Forbrukerkjøpsloven',
      content: `Forbrukerkjøpsloven regulerer kjøp mellom forbrukere (privatpersoner) og næringsdrivende (butikker/bedrifter). Loven gir forbrukeren sterke rettigheter.`,
    },
    {
      id: 'salg-service-vg1-8-text-1',
      type: 'text',
      content: `**Forbrukerens rettigheter**

**1. Angrerett**
- Rett til å ombestemme seg ved netthandel
- Gjelder i 14 dager fra varen mottas
- Forbrukeren betaler returfrakt
- Gjelder ikke for: matvarer, spesialtilpassede varer, digitalt innhold som er tatt i bruk

**2. Reklamasjonsrett (mangel)**
- Varen må fungere som forventet
- Reklamasjon må skje innen rimelig tid (2 måneder)
- Reklamasjonsfristen er 5 år fra kjøp (2 år for elektronikk)

**3. Garanti**
- Ekstra løfte om kvalitet fra produsent
- Gjelder i tillegg til lovpålagte rettigheter
- Vanligvis 1-5 år

**4. Rett til å velge avhjelp**
Forbrukeren kan velge:
- Reparasjon
- Omlevering (ny vare)
- Prisavslag
- Heving (pengene tilbake)`,
    },
    {
      id: 'salg-service-vg1-8-def-2',
      type: 'definition',
      title: 'Mangel',
      content: `En mangel er når varen ikke er slik kjøperen med rimelighet kunne forvente basert på produktbeskrivelse, pris, merking og annen informasjon fra selger.`,
    },
    {
      id: 'salg-service-vg1-8-text-2',
      type: 'text',
      content: `**Forbrukerens plikter**

**Ved reklamasjon**:
- Gi melding til selger innen rimelig tid
- Dokumentere feilen (kvittering, bilder)
- Ikke bruke varen videre hvis det kan forverre skaden
- Samarbeide med selger om løsning

**Ved angrerett**:
- Returnere varen innen 14 dager
- Varen må være i samme stand som mottatt
- Oppbevare kvittering og emballasje
- Betale returfrakt`,
    },
    {
      id: 'salg-service-vg1-8-text-3',
      type: 'text',
      content: `**Personvern og GDPR**

**Personopplysninger**:
- Navn, adresse, telefonnummer, e-post
- Kjøpshistorikk
- Betalingsinformasjon

**Forbrukerens rettigheter**:
- Rett til innsyn i egne data
- Rett til å rette feil
- Rett til sletting ("bli glemt")
- Rett til å motsette seg markedsføring

**Bedriftens plikter**:
- Informere om databruk
- Innhente samtykke
- Sikre dataene
- Slette data når de ikke trengs`,
    },
    {
      id: 'salg-service-vg1-8-tip-1',
      type: 'tip',
      title: 'Forbrukerrådet',
      content: `Forbrukerrådet er en uavhengig organisasjon som gir gratis råd til forbrukere. De kan hjelpe ved tvister og har informasjon om forbrukerrettigheter på forbrukerradet.no.`,
    },
    {
      id: 'salg-service-vg1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor lenge er angreretten ved netthandel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '14 dager fra varen mottas',
            multipleChoiceOptions: [
              '14 dager fra varen mottas',
              '7 dager fra kjøp',
              '30 dager fra varen mottas',
              'Det er ingen angrerett',
            ],
          },
        ],
        solution: 'Angreretten ved netthandel er 14 dager fra forbrukeren mottar varen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor lang er reklamasjonsfristen for de fleste varer?',
        solution: 'Reklamasjonsfristen er 5 år fra kjøpsdato (2 år for elektronikk). Reklamasjon må skje innen rimelig tid etter oppdagelse av mangelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på reklamasjonsrett og garanti?',
        solution: 'Reklamasjonsrett er lovpålagt (forbrukerkjøpsloven) og varer 5 år. Garanti er et ekstra løfte fra produsent og kommer i tillegg til lovrettighetene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke fire avhjelpsalternativer kan forbrukeren velge ved mangel?',
        solution: '1. Reparasjon, 2. Omlevering (ny vare), 3. Prisavslag, 4. Heving (pengene tilbake).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre rettigheter forbrukeren har under GDPR.',
        solution: '1. Rett til innsyn i egne data, 2. Rett til retting av feil, 3. Rett til sletting (bli glemt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Butikkdrift og varehandel
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_9: TextbookChapter = {
  id: 'salg-service-vg1-9',
  courseId: 'salg-service-vg1',
  chapterNumber: '9',
  title: 'Butikkdrift og varehandel',
  description: 'Butikkorganisering, varemottak, kassarutiner og varepresentasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå grunnleggende butikkdrift',
    'utføre varemottak og kassarutiner',
  ],
  content: [
    {
      id: 'salg-service-vg1-9-intro',
      type: 'text',
      content: `Butikkdrift handler om alt som skal til for å drive en vellykket butikk - fra varemottak og lagerstyring til kassabetjening og kundeservice.`,
    },
    {
      id: 'salg-service-vg1-9-def-1',
      type: 'definition',
      title: 'Butikkdrift',
      content: `Butikkdrift omfatter alle oppgaver knyttet til den daglige driften av en butikk: varemottak, lagerstyring, prissetting, salg, kasse og kundeservice.`,
    },
    {
      id: 'salg-service-vg1-9-text-1',
      type: 'text',
      content: `**Organisering av butikken**

**Butikkens avdelinger**:
- Salgsareal (butikkgulv)
- Lager/bakrom
- Kontor
- Personalrom
- Varemottak

**Roller i butikken**:
- Butikksjef (ansvar for drift)
- Avdelingsleder
- Butikkmedarbeider/selger
- Kasserer
- Lagermedarbeider

**Åpningstider og bemanning**:
- Tilpasset kundestrøm
- Lovkrav om søndagsåpent
- Turnusplaner for ansatte`,
    },
    {
      id: 'salg-service-vg1-9-def-2',
      type: 'definition',
      title: 'Varemottak',
      content: `Varemottak er prosessen der butikken mottar varer fra leverandør, kontrollerer leveransen mot følgeseddel, og registrerer varene i systemet.`,
    },
    {
      id: 'salg-service-vg1-9-text-2',
      type: 'text',
      content: `**Varemottak - steg for steg**

**1. Forberedelse**
- Sjekk når leveransen kommer
- Klargjør plass for varene
- Ha verktøy klart (kniv, strekkodeleser)

**2. Mottak**
- Sjekk følgeseddel mot bestilling
- Tell antall kolli
- Sjekk for synlige skader

**3. Kontroll**
- Pakk ut varene
- Tell og kontroller mot følgeseddel
- Registrer i systemet

**4. Merking og prising**
- Sett på prislapper hvis nødvendig
- Merk med dato (matvarer)
- Kontroller at strekkoder fungerer

**5. Plassering**
- Plasser varene i butikk eller lager
- Følg FIFO-prinsippet (først inn, først ut)
- Rotasjon av varer`,
    },
    {
      id: 'salg-service-vg1-9-text-3',
      type: 'text',
      content: `**Kassarutiner**

**Åpne kassa**:
- Tell opp startbeholdning (vekselpen ger)
- Logg inn i kassasystemet
- Sjekk at alt fungerer (skriver, kortleser)

**Betjene kunde**:
- Hilse vennlig
- Skanne varer
- Informere om totalsum
- Ta betaling (kontant, kort, Vipps)
- Gi kvittering
- Pakke varene

**Avslutte kassa**:
- Tell opp kontanter
- Avstemming: kontanter + kort = salg
- Levere kontanter til safe
- Rydde og klargjøre for neste vakt

**Sikkerhetsrutiner**:
- Aldri la kassa stå åpen ubevoktet
- Tøm kassa ved mye kontanter
- Vær oppmerksom på falske sedler`,
    },
    {
      id: 'salg-service-vg1-9-tip-1',
      type: 'tip',
      title: 'FIFO-prinsippet',
      content: `FIFO (First In, First Out) betyr at de eldste varene skal selges først. Dette er spesielt viktig for matvarer og produkter med holdbarhetsdato.`,
    },
    {
      id: 'salg-service-vg1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem stegene i varemottak?',
        solution: '1. Forberedelse, 2. Mottak, 3. Kontroll, 4. Merking og prising, 5. Plassering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr FIFO, og hvorfor er det viktig?',
        solution: 'FIFO (First In, First Out) betyr at eldste varer selges først. Det er viktig for å unngå at varer går ut på dato og må kastes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv en god kassarutine fra kunde kommer til du er ferdig.',
        solution: 'Hils vennlig, skann varer, informer om sum, ta betaling, gi kvittering, pakk varene pent, takk og ønsk god dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva skal du gjøre hvis antall varer ikke stemmer med følgesedde len ved varemottak?',
        solution: 'Dokumenter avviket, kontakt butikksjef eller leverandør, registrer riktig antall i systemet, eventuelt reklamere manglende varer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre sikkerhetsrutiner ved kassabetjening.',
        solution: '1. Aldri la kassa stå åpen ubevoktet, 2. Tøm kassa ved mye kontanter, 3. Vær oppmerksom på falske sedler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Logistikk og lagerstyring
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_10: TextbookChapter = {
  id: 'salg-service-vg1-10',
  courseId: 'salg-service-vg1',
  chapterNumber: '10',
  title: 'Logistikk og lagerstyring',
  description: 'Lagerstyring, bestilling, vareflyt og FIFO-prinsippet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå grunnleggende logistikk og lagerstyring',
    'optimalisere vareflyt i butikk',
  ],
  content: [
    {
      id: 'salg-service-vg1-10-intro',
      type: 'text',
      content: `Logistikk handler om å få riktige varer til rett tid på rett sted. God lagerstyring sikrer at butikken har nok varer, uten å binde opp for mye kapital i lager.`,
    },
    {
      id: 'salg-service-vg1-10-def-1',
      type: 'definition',
      title: 'Logistikk',
      content: `Logistikk er planlegging, gjennomføring og styring av vareflyt fra leverandør til kunde. Det inkluderer transport, lagring, pakking og distribusjon.`,
    },
    {
      id: 'salg-service-vg1-10-text-1',
      type: 'text',
      content: `**Logistikkjeden**

**1. Innkjøp**
- Bestille varer fra leverandør
- Forhandle pris og leveringsbetingelser
- Kvalitetssikring av leverandører

**2. Transport**
- Frakt fra leverandør til butikk
- Fraktmetoder: lastebil, tog, skip, fly
- Sporing av forsendelser

**3. Lagring**
- Mottak og plassering på lager
- Organisering for effektiv plukking
- Temperaturkontroll (kjøle-/fryselager)

**4. Distribusjon**
- Fra lager til salgsareal
- Fra sentrallager til butikker
- Hjemlevering til kunder`,
    },
    {
      id: 'salg-service-vg1-10-def-2',
      type: 'definition',
      title: 'Lagerstyring',
      content: `Lagerstyring er å ha kontroll på lagerbeholdningen - hva som finnes, hvor mye, og når det må bestilles mer. Målet er å unngå både tomme hyller og for mye varer på lager.`,
    },
    {
      id: 'salg-service-vg1-10-text-2',
      type: 'text',
      content: `**Prinsipper for god lagerstyring**

**1. Riktig lagernivå**
- Nok varer til å møte etterspørselen
- Ikke for mye (binder kapital, risiko for svinn)
- Bestillingspunkt: når lageret når et visst nivå

**2. FIFO (First In, First Out)**
- Selg eldste varer først
- Viktig for holdbarhet
- Reduserer svinn

**3. ABC-analyse**
- A-varer: Høy verdi, høy omsetning
- B-varer: Middels verdi og omsetning
- C-varer: Lav verdi, lav omsetning
- Prioriter A-varer i styringen

**4. Sikkerhetsmargin**
- Buffer for uventede hendelser
- Leverandørforsinkelser
- Plutselig økt etterspørsel`,
    },
    {
      id: 'salg-service-vg1-10-text-3',
      type: 'text',
      content: `**Bestilling av varer**

**Bestillingspunkt**:
- Når lageret når et visst nivå
- Eksempel: Bestill når 10 enheter gjenstår

**Bestillingsmengde**:
- Hvor mye skal bestilles?
- Balanse: rabatt ved store ordre vs. lagerkostnader
- Leveringstid må tas hensyn til

**Automatisk bestilling**:
- Moderne kassasystem kan bestille automatisk
- Basert på salgshistorikk
- Tar hensyn til sesongvariasjoner

**Lagerverdi**:
- Verdien av alle varer på lager
- Bør ikke være for høy (binder kapital)
- Inventur: telling av lagerbeholdning`,
    },
    {
      id: 'salg-service-vg1-10-tip-1',
      type: 'tip',
      title: 'JIT (Just In Time)',
      content: `Just In Time er et logistikkprinsipp der varer ankommer akkurat når de trengs. Det reduserer lagerkostnader, men krever pålitelige leverandører og god planlegging.`,
    },
    {
      id: 'salg-service-vg1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er logistikkjeden?',
        solution: 'Logistikkjeden består av innkjøp, transport, lagring og distribusjon - fra leverandør til kunde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er målet med god lagerstyring?',
        solution: 'Å ha riktig mengde varer til rett tid - unngå både tomme hyller og for mye kapital bundet i lager.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar ABC-analyse i lagerstyring.',
        solution: 'A-varer har høy verdi og omsetning (prioriter), B-varer er middels, C-varer har lav verdi og omsetning (mindre fokus). Hjelper å prioritere ressursene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor skal butikken ha en sikkerhetsmargin på lageret?',
        solution: 'For å ha buffer mot uventede hendelser som leverandørforsinkelser, plutselig økt etterspørsel, eller andre forstyrrelser i tilførselen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er JIT (Just In Time)?',
        solution: 'Et logistikkprinsipp der varer ankommer akkurat når de trengs. Reduserer lagerkostnader, men krever pålitelige leverandører.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11: Bærekraftig handel og turisme
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_11: TextbookChapter = {
  id: 'salg-service-vg1-11',
  courseId: 'salg-service-vg1',
  chapterNumber: '11',
  title: 'Bærekraftig handel og turisme',
  description: 'Miljøbevisst forretningsdrift, etisk handel, sirkulærøkonomi og grønne verdikjeder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå betydningen av bærekraftig handel',
    'anvende prinsipper for sirkulærøkonomi',
  ],
  content: [
    {
      id: 'salg-service-vg1-11-intro',
      type: 'text',
      content: `Bærekraftig handel og turisme handler om å drive virksomhet på en måte som ivaretar miljø, mennesker og økonomi. Dette er ikke bare viktig for planeten, men også for bedriftens langsiktige suksess.`,
    },
    {
      id: 'salg-service-vg1-11-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `Bærekraftig utvikling er utvikling som møter dagens behov uten å ødelegge mulighetene for fremtidige generasjoner til å møte sine behov.`,
    },
    {
      id: 'salg-service-vg1-11-text-1',
      type: 'text',
      content: `**FNs bærekraftsmål**

Relevante for handel og turisme:
- Mål 8: Anstendig arbeid og økonomisk vekst
- Mål 12: Ansvarlig forbruk og produksjon
- Mål 13: Stoppe klimaendringene
- Mål 14: Livet i havet
- Mål 15: Livet på land

**Tre pilarer i bærekraft**:
1. Miljømessig: Reduser utslipp, vern natur
2. Sosial: Rettferdige arbeidsforhold, menneskerettigheter
3. Økonomisk: Langsiktig lønnsomhet`,
    },
    {
      id: 'salg-service-vg1-11-def-2',
      type: 'definition',
      title: 'Sirkulærøkonomi',
      content: `Sirkulærøkonomi er et økonomisk system der produkter og materialer gjenbrukes, repareres og resirkuleres i stedet for å kastes. Målet er å eliminere avfall.`,
    },
    {
      id: 'salg-service-vg1-11-text-2',
      type: 'text',
      content: `**Sirkulærøkonomi i praksis**

**Lineær økonomi (gammel modell)**:
Ta → Lag → Bruk → Kast

**Sirkulær økonomi (ny modell)**:
- Design for lang levetid
- Reparer og vedlikehold
- Gjenbruk og videresalg
- Resirkulering av materialer

**Forretningsmodeller**:
- Produktleasing i stedet for salg
- Reparasjonstjenester
- Brukthandel og byttemarkeder
- Gjenvinning og upcycling`,
    },
    {
      id: 'salg-service-vg1-11-text-3',
      type: 'text',
      content: `**Miljøbevisst forretningsdrift**

**I butikken**:
- LED-belysning
- Reduser matsvinn
- Gjenbruk av emballasje
- Kildesortering
- Miljøvennlige produkter

**I reiselivet**:
- Energieffektive bygg
- Lokalmat og sesongvarer
- Reduser plastbruk
- Vern om natur og kultur
- Oppmuntre til miljøvennlig transport

**Grønne merkeordninger**:
- Svanemerket
- Miljøfyrtårn
- Fair Trade
- Debio (økologisk)`,
    },
    {
      id: 'salg-service-vg1-11-tip-1',
      type: 'tip',
      title: 'Grønnvasking',
      content: `Grønnvasking (greenwashing) er når bedrifter gir inntrykk av å være mer miljøvennlige enn de egentlig er. Vær kritisk og sjekk dokumentasjon og sertifiseringer.`,
    },
    {
      id: 'salg-service-vg1-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-11-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de tre pilarene i bærekraftig utvikling?',
        solution: '1. Miljømessig bærekraft, 2. Sosial bærekraft, 3. Økonomisk bærekraft. Alle tre må ivaretas samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-11-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er sirkulærøkonomi?',
        solution: 'Et økonomisk system der produkter og materialer gjenbrukes, repareres og resirkuleres i stedet for å kastes. Målet er å eliminere avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-11-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fire måter en butikk kan drive mer miljøvennlig.',
        solution: '1. LED-belysning, 2. Redusere matsvinn, 3. Gjenbruk av emballasje, 4. Kildesortering. Andre svar kan også være riktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-11-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er grønnvasking?',
        solution: 'Når bedrifter gir inntrykk av å være mer miljøvennlige enn de egentlig er, uten reell dokumentasjon eller handling bak påstandene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-11-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv forskjellen mellom lineær og sirkulær økonomi.',
        solution: 'Lineær: Ta → Lag → Bruk → Kast. Sirkulær: Produkter gjenbrukes, repareres og resirkuleres i kretsløp, slik at avfall elimineres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12: HMS og arbeidsmiljø
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_12: TextbookChapter = {
  id: 'salg-service-vg1-12',
  courseId: 'salg-service-vg1',
  chapterNumber: '12',
  title: 'HMS og arbeidsmiljø',
  description: 'Helse, miljø og sikkerhet i servicebransjen. Ergonomi, brannsikkerhet og arbeidsmiljøloven.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå HMS-krav i servicebransjen',
    'arbeide ergonomisk riktig',
  ],
  content: [
    {
      id: 'salg-service-vg1-12-intro',
      type: 'text',
      content: `HMS (Helse, Miljø og Sikkerhet) handler om å skape trygge og gode arbeidsforhold. Et godt arbeidsmiljø reduserer sykefravær, øker trivsel og gjør ansatte mer produktive.`,
    },
    {
      id: 'salg-service-vg1-12-def-1',
      type: 'definition',
      title: 'HMS',
      content: `HMS står for Helse, Miljø og Sikkerhet. Det omfatter alle tiltak for å forebygge ulykker, skader og sykdom på arbeidsplassen, samt å ta vare på det ytre miljøet.`,
    },
    {
      id: 'salg-service-vg1-12-text-1',
      type: 'text',
      content: `**Arbeidsmiljøloven**

**Hovedprinsipp**:
Arbeidsgiver har ansvar for et fullt forsvarlig arbeidsmiljø

**Arbeidsgivers plikter**:
- Sørge for HMS-opplæring
- Gjennomføre risikovurderinger
- Tilby verneutstyr
- Forebygge trakassering og mobbing
- Tilrettelegge for gravide og funksjonshemmede

**Arbeidstakers plikter**:
- Følge HMS-rutiner
- Bruke verneutstyr
- Melde fra om farlige forhold
- Ta vare på egen og andres sikkerhet`,
    },
    {
      id: 'salg-service-vg1-12-def-2',
      type: 'definition',
      title: 'Ergonomi',
      content: `Ergonomi er tilpasning av arbeid, utstyr og omgivelser til menneskets forutsetninger. Målet er å forebygge belastningsskader og øke trivsel og produktivitet.`,
    },
    {
      id: 'salg-service-vg1-12-text-2',
      type: 'text',
      content: `**Ergonomi i butikk og service**

**Riktig løfteteknikk**:
- Bøy i knærne, ikke ryggen
- Hold lasten nær kroppen
- Løft med beina, ikke ryggen
- Unngå vridning
- Be om hjelp ved tunge løft

**Arbeid i kassa**:
- Justerbar stol med god støtte
- Veksle mellom å stå og sitte
- Skjerm i riktig høyde
- Pauseog variert arbeid

**Arbeid på lager**:
- Verktøy for å unngå tunge løft
- Antiglimatter ved langvarig stående arbeid
- Godt lys
- Ryddige gangveier`,
    },
    {
      id: 'salg-service-vg1-12-text-3',
      type: 'text',
      content: `**Brannsikkerhet**

**Forebygging**:
- Orden og ryddig
- Sikre elektriske installasjoner
- Røykforbud der det gjelder
- Branninstruks og øvelser

**Ved brann**:
1. Varsle (112)
2. Evakuer
3. Slokke (hvis trygt)

**Brannslukkingsutstyr**:
- Brannslukningsapparat (rød)
- Brannvarslere
- Nødutganger (merket)
- Samlingsplass utenfor

**Viktig**:
- Ikke bruk heis ved brann
- Lukk dører bak deg
- Kryp under røyk`,
    },
    {
      id: 'salg-service-vg1-12-tip-1',
      type: 'tip',
      title: 'Verneombud',
      content: `Verneombudet er ansattes representant i HMS-arbeidet. De har rett til å stoppe farlig arbeid og skal involveres i HMS-vurderinger. Bedrifter med mer enn 10 ansatte skal ha verneombud.`,
    },
    {
      id: 'salg-service-vg1-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-12-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står HMS for?',
        solution: 'HMS står for Helse, Miljø og Sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-12-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv riktig løfteteknikk.',
        solution: 'Bøy i knærne (ikke ryggen), hold lasten nær kroppen, løft med beina, unngå vridning, be om hjelp ved tunge løft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-12-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva skal du gjøre hvis du oppdager brann på arbeidsplassen?',
        solution: '1. Varsle (ring 112), 2. Evakuer, 3. Slokke hvis det er trygt. Viktig: Ikke bruk heis, lukk dører bak deg, kryp under røyk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-12-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er ergonomi?',
        solution: 'Tilpasning av arbeid, utstyr og omgivelser til menneskets forutsetninger for å forebygge belastningsskader og øke trivsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-12-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvem har hovedansvaret for et forsvarlig arbeidsmiljø?',
        solution: 'Arbeidsgiver har hovedansvaret for et fullt forsvarlig arbeidsmiljø, men arbeidstakere har også plikter til å følge HMS-rutiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13: Entreprenørskap
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_13: TextbookChapter = {
  id: 'salg-service-vg1-13',
  courseId: 'salg-service-vg1',
  chapterNumber: '13',
  title: 'Entreprenørskap',
  description: 'Forretningsidé, forretningsplan, oppstart av bedrift og innovasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utvikle en forretningsidé',
    'lage en enkel forretningsplan',
  ],
  content: [
    {
      id: 'salg-service-vg1-13-intro',
      type: 'text',
      content: `Entreprenørskap handler om å se muligheter, ta initiativ og skape noe nytt. Mange starter sin egen bedrift innen salg, service eller reiseliv.`,
    },
    {
      id: 'salg-service-vg1-13-def-1',
      type: 'definition',
      title: 'Entreprenørskap',
      content: `Entreprenørskap er prosessen med å identifisere muligheter, utvikle ideer og skape verdier gjennom å starte og drive virksomhet. Entreprenøren tar risiko for å realisere en ide.`,
    },
    {
      id: 'salg-service-vg1-13-text-1',
      type: 'text',
      content: `**Fra idé til virksomhet**

**1. Idéutvikling**
- Identifiser et problem eller behov
- Finn en løsning
- Vurder om det finnes marked

**2. Forretningsidé**
- Hva skal du selge? (produkt/tjeneste)
- Hvem er kundene? (målgruppe)
- Hvordan skape verdi? (konkurransefortrinn)

**3. Forretningsmodell**
- Hvordan tjene penger?
- Prissetting
- Kostnadsstruktur
- Inntektskilder

**4. Gjennomføring**
- Registrere bedrift
- Finansiering
- Markedsføring
- Salg`,
    },
    {
      id: 'salg-service-vg1-13-def-2',
      type: 'definition',
      title: 'Forretningsplan',
      content: `En forretningsplan er et skriftlig dokument som beskriver virksomheten, målene, strategien og økonomien. Den brukes til å planlegge og søke finansiering.`,
    },
    {
      id: 'salg-service-vg1-13-text-2',
      type: 'text',
      content: `**Innhold i en forretningsplan**

**1. Sammendrag (Executive Summary)**
- Kort om virksomheten
- Hva gjør dere unike?

**2. Bedriftsbeskrivelse**
- Navn, sted, juridisk form
- Eiere og nøkkelpersoner
- Visjon og verdier

**3. Marked og konkurrenter**
- Målgruppe
- Markedsstørrelse
- Konkurrentanalyse
- Markedsføringsplan

**4. Produkter/tjenester**
- Hva tilbyr dere?
- Fordeler for kunden
- Prissetting

**5. Økonomi**
- Oppstartskostnader
- Budsjett første 1-3 år
- Finansieringsbehov
- Lønnsomhetsvurdering`,
    },
    {
      id: 'salg-service-vg1-13-text-3',
      type: 'text',
      content: `**Finansiering av oppstart**

**Egenkapital**:
- Egne sparepenger
- Familie og venner
- Crowdfunding

**Lånekapital**:
- Bank (kre ver sikkerhet)
- Innovasjon Norge
- Startlån

**Offentlig støtte**:
- Etablererstipend (6 måneder)
- Innovasjon Norge
- Kommunale tilskudd

**Andre muligheter**:
- Investorer (angels, venture capital)
- Inkubatorer og gründersentre
- Samarbeid/partnerskap`,
    },
    {
      id: 'salg-service-vg1-13-tip-1',
      type: 'tip',
      title: 'Unngående fallgruver',
      content: `Vanlige feil ved oppstart: Ikke nok kapital, dårlig markedsundersøkelse, for høye kostnader i starten, dårlig prisetting, manglende markedsføring. Planlegg grundig!`,
    },
    {
      id: 'salg-service-vg1-13-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-13-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er entreprenørskap?',
        solution: 'Prosessen med å identifisere muligheter, utvikle ideer og skape verdier gjennom å starte og drive virksomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-13-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-13-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de fem hoveddelene i en forretningsplan.',
        solution: '1. Sammendrag, 2. Bedriftsbeskrivelse, 3. Marked og konkurrenter, 4. Produkter/tjenester, 5. Økonomi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-13-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-13-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på egenkapital og lånekapital?',
        solution: 'Egenkapital er egne penger (sparing, fra familie). Lånekapital er lånte penger som skal betales tilbake med renter (bank, lån).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-13-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-13-ex-4',
        number: '4',
        type: 'classic',
        task: 'Utvikle en enkel forretningsidé innen salg, service eller reiseliv.',
        solution: 'Eksempel: Mobil hundefrisør. Hva: Frisørtjenester for hund hjemme hos kunde. Hvem: Hundeeiere i byen. Hvordan: Bekvemmelighet (slipper å reise), personlig service, konkurransedyktig pris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-13-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-13-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre vanlige fallgruver ved oppstart av bedrift.',
        solution: '1. Ikke nok startkapital, 2. Dårlig markedsundersøkelse, 3. For høye kostnader i starten. Andre riktige svar: dårlig prissetting, manglende markedsføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 14: Yrkesmuligheter
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_14: TextbookChapter = {
  id: 'salg-service-vg1-14',
  courseId: 'salg-service-vg1',
  chapterNumber: '14',
  title: 'Yrkesmuligheter',
  description: 'Karriereveier i salg, service og reiseliv. Videregående opplæring og arbeidsmarked.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til karrieremuligheter i bransjen',
    'planlegge egen utdannings- og karrierevei',
  ],
  content: [
    {
      id: 'salg-service-vg1-14-intro',
      type: 'text',
      content: `Salg, service og reiseliv er en mangfoldig bransje med mange ulike karriereveier. Fra butikkmedarbeider til reiselivsleder - mulighetene er mange.`,
    },
    {
      id: 'salg-service-vg1-14-text-1',
      type: 'text',
      content: `**Utdanningsveier etter VG1**

**VG2 Salg, service og sikkerhet**
- Videre spesialisering
- Praksis i bedrift
- Grunnlag for VG3

**VG3 alternativer**:
1. **VG3 påbygging** → Studiekompetanse
2. **VG3 i bedrift** → Fagbrev som:
   - Salgskonsulent
   - Reiselivsfagarbeider
   - Servicemedarbeider

**Videre studier**:
- Markedsføring
- Reiseliv og destinasjonsutvikling
- Økonomi og administrasjon
- Hotellhøyskole`,
    },
    {
      id: 'salg-service-vg1-14-text-2',
      type: 'text',
      content: `**Yrker innen salg**

**Butikk og varehandel**:
- Butikkmedarbeider
- Visual merchandiser
- Butikksjef
- Kjøpmann/kjøpman
- Innkjøper
- Category manager

**B2B-salg**:
- Salgskonsulent
- Key Account Manager
- Salgssjef
- Produktspesialist

**Digital handel**:
- E-handelskoordinator
- Digital markedsfører
- CRM-spesialist`,
    },
    {
      id: 'salg-service-vg1-14-text-3',
      type: 'text',
      content: `**Yrker innen reiseliv**

**Hotell og overnatting**:
- Resepsjonist
- Concierge
- Hotelldirektør
- Revenue Manager

**Reisebyråer og booking**:
- Reisekonsulent
- Researrangør
- Destinasjonsrådgiver

**Opplevelser og aktiviteter**:
- Reiseguide
- Eventkoordinator
- Cruise-personell
- Flyvertinne/flyvert

**Destinasjonsutvikling**:
- Destinasjonssjef
- Markedsfører reiseliv
- Prosjektleder`,
    },
    {
      id: 'salg-service-vg1-14-tip-1',
      type: 'tip',
      title: 'Praksis og nettverk',
      content: `Bruk sommerjobber og deltidsjobber til å bygge erfaring og nettverk. Mange får fast jobb hos bedrifter de har jobbet i som lærling eller ekstrahjelp.`,
    },
    {
      id: 'salg-service-vg1-14-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-14-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kan du bli etter VG3 i bedrift innen Salg, service og reiseliv?',
        solution: 'Du kan ta fagbrev som salgskonsulent, reiselivsfagarbeider eller servicemedarbeider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-14-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-14-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fire yrker innen reiseliv.',
        solution: 'Eksempler: Resepsjonist, reisekonsulent, reiseguide, eventkoordinator. Andre riktige svar finnes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-14-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-14-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på VG3 påbygging og VG3 i bedrift?',
        solution: 'VG3 påbygging gir studiekompetanse (kan søke høyskole/universitet). VG3 i bedrift gir fagbrev (to år læretid + fagprøve).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-14-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-14-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilket yrke innen salg, service eller reiseliv interesserer deg mest? Hvorfor?',
        solution: 'Personlig svar. Eksempel: Reiseguide fordi jeg elsker å reise, møte mennesker fra ulike kulturer og dele kunnskap om steder jeg brenner for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 15: Visuell merchandising og butikkdesign
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_15: TextbookChapter = {
  id: 'salg-service-vg1-15',
  courseId: 'salg-service-vg1',
  chapterNumber: '15',
  title: 'Visuell merchandising og butikkdesign',
  description: 'Butikkinnredning, varedisplay, fargebruk, belysning og skapning av kjøpsatmosfære.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå prinsipper for visuell merchandising',
    'lage attraktive varedisplay',
  ],
  content: [
    {
      id: 'salg-service-vg1-15-intro',
      type: 'text',
      content: `Visuell merchandising handler om å presentere varer på en måte som tiltrekker kunder, skaper kjøpslyst og styrker merkevaren. Det er kunsten å «fortelle en historie» med produktene.`,
    },
    {
      id: 'salg-service-vg1-15-def-1',
      type: 'definition',
      title: 'Visuell merchandising',
      content: `Visuell merchandising (VM) er visning og presentasjon av varer i butikk for å maksimere salg. Det omfatter vindusutstilling, varedisplay, skilting, farger og belysning.`,
    },
    {
      id: 'salg-service-vg1-15-text-1',
      type: 'text',
      content: `**Mål med visuell merchandising**

**1. Tiltrekke oppmerksomhet**
- Få folk til å stoppe opp
- Vindusutstilling
- Tydelig butikkfront

**2. Skape kjøpslyst**
- Vise produkter i bruk
- Inspirere kunden
- Vekke følelser

**3. Lede kunden gjennom butikken**
- Butikklayout
- Fokuspunkter
- Logisk vareflyt

**4. Styrke merkevaren**
- Konsistent stil
- Gjenkjennelig
- Formidle verdier`,
    },
    {
      id: 'salg-service-vg1-15-def-2',
      type: 'definition',
      title: 'Focal point',
      content: `Et focal point (fokuspunkt) er et område i butikken som trekker kundens oppmerksomhet. Det kan være en spesiell utstilling, kampanjevarer eller et visuelt interessant display.`,
    },
    {
      id: 'salg-service-vg1-15-text-2',
      type: 'text',
      content: `**Prinsipper for varedisplay**

**1. Gruppering**
- Samle lignende produkter
- Fargegrupper
- Temaer (f.eks. «Sommeroutfit»)

**2. Pyramideprinsippet**
- Høyest i midten
- Skaper visuell balanse
- Trekker blikket

**3. Trekantprinsippet**
- Plasser varer i trekanter
- Skaper dynamikk
- Unngå stive linjer

**4. «Less is more»**
- Ikke overfylt
- Gi produktene pusterom
- Fremhev de viktigste

**5. Endring og variasjon**
- Bytt utstilling regelmessig
- Sesongvarer
- Nye produkter fram`,
    },
    {
      id: 'salg-service-vg1-15-text-3',
      type: 'text',
      content: `**Farger og belysning**

**Fargepsykologi**:
- Rødt: Energi, oppmerksomhet, salg
- Blått: Tillit, ro, profesjonalitet
- Grønt: Natur, helse, bærekraft
- Gult: Glede, optimisme, oppmerksomhet
- Svart/hvitt: Eleganse, eksklusivitet

**Belysning**:
- Generell belysning: Grunnlys i butikken
- Spotlights: Fremhev spesielle produkter
- Varmt lys: Koselig, innbydende
- Kaldt lys: Moderne, profesjonelt
- Dagslys: Viser farger naturlig`,
    },
    {
      id: 'salg-service-vg1-15-tip-1',
      type: 'tip',
      title: 'Kundeflyt',
      content: `De fleste kunder går mot høyre når de kommer inn i en butikk. Plasser derfor viktige og populære produkter til høyre for inngangen, og lokk kunder bakover med fokuspunkter.`,
    },
    {
      id: 'salg-service-vg1-15-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-15-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er visuell merchandising?',
        solution: 'Visning og presentasjon av varer i butikk for å maksimere salg, gjennom vindusutstilling, varedisplay, skilting, farger og belysning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-15-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-15-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv pyramideprinsippet i varedisplay.',
        solution: 'Plassere varer høyest i midten og lavere på sidene, som en pyramide. Dette skaper visuell balanse og trekker blikket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-15-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-15-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken farge assosieres med tillit og ro?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig farge.',
            solution: 'Blått',
            multipleChoiceOptions: [
              'Blått',
              'Rødt',
              'Gult',
              'Grønt',
            ],
          },
        ],
        solution: 'Blått assosieres med tillit, ro og profesjonalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-15-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-15-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er et focal point i butikken?',
        solution: 'Et fokuspunkt som trekker kundens oppmerksomhet, som en spesiell utstilling, kampanjevarer eller et visuelt interessant display.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-15-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-15-ex-5',
        number: '5',
        type: 'classic',
        task: 'Planlegg en vindusutstilling for en klesbutikk i mai (vår/sommer).',
        solution: 'Eksempel: Tema «Sommerferie». Mannekenger i sommerkjoler/shorts, solbriller, hatt. Farger: lyst blått, hvitt, gult. Dekorelementer: sand, skjell, surfebrett. Belysning: varmt lys. Budskap: «Klar for sommer?»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 16: CRM og kundelojalitet
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_16: TextbookChapter = {
  id: 'salg-service-vg1-16',
  courseId: 'salg-service-vg1',
  chapterNumber: '16',
  title: 'CRM og kundelojalitet',
  description: 'Customer Relationship Management, lojalitetsprogrammer, kundedata og personalisert service.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå betydningen av CRM',
    'bruke kundedata til å forbedre service',
  ],
  content: [
    {
      id: 'salg-service-vg1-16-intro',
      type: 'text',
      content: `CRM (Customer Relationship Management) handler om å bygge varige relasjoner med kunder. Lojale kunder er mer verdifulle enn enkeltkjøp, fordi de kommer tilbake og anbefaler til andre.`,
    },
    {
      id: 'salg-service-vg1-16-def-1',
      type: 'definition',
      title: 'CRM',
      content: `CRM (Customer Relationship Management) er en strategi og verktøy for å administrere alle interaksjoner med kunder. Målet er å forbedre kundeforhold, øke salg og bygge lojalitet.`,
    },
    {
      id: 'salg-service-vg1-16-text-1',
      type: 'text',
      content: `**CRM-systemets funksjoner**

**1. Kundedatabase**
- Kontaktinformasjon
- Kjøpshistorikk
- Preferanser
- Kommunikasjonshistorie

**2. Salgsoppfølging**
- Spore potensielle kunder
- Påminnelser om oppfølging
- Tilbud og kampanjer

**3. Kundeservice**
- Raskere hjelp (kjenner kundens historie)
- Personalisert service
- Problemløsning

**4. Analyse**
- Identifisere mønstre
- Forutsi kundeadferd
- Segmentering`,
    },
    {
      id: 'salg-service-vg1-16-def-2',
      type: 'definition',
      title: 'Kundelojalitet',
      content: `Kundelojalitet er når kunder gjentar kjøp og velger samme bedrift fremfor konkurrentene. Lojale kunder er mer lønnsomme og koster mindre å beholde enn å skaffe nye.`,
    },
    {
      id: 'salg-service-vg1-16-text-2',
      type: 'text',
      content: `**Lojalitetsprogrammer**

**Typer programmer**:

**1. Poengprogrammer**
- Samle poeng ved kjøp
- Bytte poeng mot rabatt eller produkter
- Eksempel: Coop, Trumf

**2. Nivåbaserte programmer**
- Bronse, sølv, gull
- Høyere nivå = bedre fordeler
- Motiverer til flere kjøp

**3. Cashback**
- Få penger tilbake
- Prosentandel av kjøpet

**4. VIP-medlemskap**
- Eksklusiv tilgang
- Spesialtilbud
- Prioritert service

**Fordeler for bedriften**:
- Økt salg
- Kundeinformasjon
- Konkurransefortrinn`,
    },
    {
      id: 'salg-service-vg1-16-text-3',
      type: 'text',
      content: `**Bygge kundelojalitet**

**1. Utmerket kundeservice**
- Overgå forventninger
- Løs problemer raskt
- Vær konsekvent

**2. Personalisering**
- Bruk kundens navn
- Husk preferanser
- Skreddersydde tilbud

**3. Kommunikasjon**
- Hold kontakt (nyhetsbrev, SMS)
- Relevante tilbud
- Be om tilbakemelding

**4. Belønning**
- Lojalitetsprogrammer
- Eksklusiv tilgang
- Overraskelser

**5. Skape fellesskap**
- Sosiale medier
- Arrangementer
- Kundeklubber`,
    },
    {
      id: 'salg-service-vg1-16-tip-1',
      type: 'tip',
      title: 'RFM-analyse',
      content: `RFM-analyse segmenterer kunder basert på Recency (hvor nylig de kjøpte), Frequency (hvor ofte de kjøper) og Monetary (hvor mye de bruker). Dette hjelper å identifisere de mest verdifulle kundene.`,
    },
    {
      id: 'salg-service-vg1-16-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-16-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står CRM for, og hva er målet?',
        solution: 'CRM står for Customer Relationship Management. Målet er å forbedre kundeforhold, øke salg og bygge lojalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-16-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-16-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre typer lojalitetsprogrammer.',
        solution: '1. Poengprogrammer, 2. Nivåbaserte programmer, 3. Cashback. Andre riktige svar: VIP-medlemskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-16-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-16-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er lojale kunder verdifulle for bedriften?',
        solution: 'De kjøper mer over tid, koster mindre å beholde enn å skaffe nye, anbefaler bedriften til andre, og er mindre prissensitive.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-16-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-16-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre måter å bygge kundelojalitet.',
        solution: '1. Utmerket kundeservice, 2. Personalisering, 3. Lojalitetsprogrammer. Andre riktige svar: kommunikasjon, skape fellesskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-16-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-16-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva står RFM for i RFM-analyse?',
        solution: 'R = Recency (hvor nylig kunde kjøpte), F = Frequency (hvor ofte de kjøper), M = Monetary (hvor mye de bruker).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 17: E-handel og nettbutikk
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_17: TextbookChapter = {
  id: 'salg-service-vg1-17',
  courseId: 'salg-service-vg1',
  chapterNumber: '17',
  title: 'E-handel og nettbutikk',
  description: 'Netthandel, betalingsløsninger, logistikk, kundeservice online og omnikanalhandel.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå hvordan netthandel fungerer',
    'kjenne til omnikanalstrategi',
  ],
  content: [
    {
      id: 'salg-service-vg1-17-intro',
      type: 'text',
      content: `E-handel (elektronisk handel) vokser raskt og er en viktig del av detaljhandelen. Nettbutikker gir kunder mulighet til å handle når som helst, hvor som helst.`,
    },
    {
      id: 'salg-service-vg1-17-def-1',
      type: 'definition',
      title: 'E-handel',
      content: `E-handel er kjøp og salg av varer og tjenester via internett. Det inkluderer nettbutikker, markedsplasser (som Amazon) og sosial handel (via Instagram, Facebook).`,
    },
    {
      id: 'salg-service-vg1-17-text-1',
      type: 'text',
      content: `**Fordeler og ulemper med e-handel**

**Fordeler for bedriften**:
- Åpent 24/7
- Når kunder over hele landet/verden
- Lavere driftskostnader
- Data om kundeadferd
- Enklere å teste priser og produkter

**Ulemper for bedriften**:
- Høy konkurranse
- Tekniske kostnader (nettside, betaling)
- Logistikk og retur
- Vanskelig å skille seg ut

**For kunden**:
- Bekvemmelighet
- Stor utvalg
- Prissammenligning
- Men: Kan ikke se/prøve produktet`,
    },
    {
      id: 'salg-service-vg1-17-def-2',
      type: 'definition',
      title: 'Omnikanalhandel',
      content: `Omnikanalhandel (omnichannel) er en strategi der alle salgskanaler (fysisk butikk, nettbutikk, app, sosiale medier) er integrert og gir en sømløs kundeopplevelse.`,
    },
    {
      id: 'salg-service-vg1-17-text-2',
      type: 'text',
      content: `**Viktige elementer i nettbutikk**

**1. Brukervennlig design**
- Enkel navigasjon
- Mobiloptimalisert
- Rask lasting

**2. Produktinformasjon**
- Gode bilder (flere vinkler)
- Detaljert beskrivelse
- Kundevurderinger
- Størrelsesguide (klær)

**3. Betalingsløsninger**
- Kort (Visa, Mastercard)
- Vipps
- Klarna (faktura/delbetaling)
- PayPal
- Sikker betaling (SSL-sertifikat)

**4. Frakt og levering**
- Tydelige fraktkostnader
- Leveringsalternativer
- Sporingsmulighet
- Hjemlevering eller hentepunkt

**5. Kundeservice**
- Chat (live eller chatbot)
- E-post
- Telefon
- FAQ (ofte stilte spørsmål)`,
    },
    {
      id: 'salg-service-vg1-17-text-3',
      type: 'text',
      content: `**Omnikanalstrategi**

**Integrerte kanaler**:
- Kjøp online, hent i butikk (Click & Collect)
- Se i butikk, kjøp online
- Samme tilbud og priser i alle kanaler
- Felles kundedata

**Fordeler**:
- Bedre kundeopplevelse
- Fleksibilitet for kunden
- Økt salg
- Bedre utnyttelse av lager

**Eksempler**:
- Kunde ser produkt på Instagram → Kjøper i nettbutikk → Henter i butikk
- Kunde ser produkt i butikk → Sjekker pris online → Kjøper via app`,
    },
    {
      id: 'salg-service-vg1-17-tip-1',
      type: 'tip',
      title: 'Handlekurv-forlating',
      content: `Ca. 70% av netthandlere forlater handlekurven uten å kjøpe. Årsaker: Høye fraktkostnader, komplisert checkout, manglende tillit. Send påminnelses-e-post eller gi rabatt for å få dem tilbake.`,
    },
    {
      id: 'salg-service-vg1-17-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-17-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er e-handel?',
        solution: 'Kjøp og salg av varer og tjenester via internett, inkludert nettbutikker, markedsplasser og sosial handel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-17-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-17-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre fordeler med e-handel for bedriften.',
        solution: '1. Åpent 24/7, 2. Når kunder over hele landet/verden, 3. Lavere driftskostnader enn fysisk butikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-17-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-17-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er omnikanalhandel?',
        solution: 'En strategi der alle salgskanaler (fysisk butikk, nettbutikk, app, sosiale medier) er integrert og gir en sømløs kundeopplevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-17-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-17-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn fire betalingsløsninger som brukes i nettbutikker.',
        solution: '1. Kort (Visa, Mastercard), 2. Vipps, 3. Klarna (faktura), 4. PayPal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-17-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-17-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er Click & Collect?',
        solution: 'En tjeneste der kunden kjøper online og henter varen i fysisk butikk. Dette er et eksempel på omnikanalhandel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 18: Reiselivsprodukter og pakkereiser
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_18: TextbookChapter = {
  id: 'salg-service-vg1-18',
  courseId: 'salg-service-vg1',
  chapterNumber: '18',
  title: 'Reiselivsprodukter og pakkereiser',
  description: 'Reiselivsprodukter, pakkereiser, charterreiser, cruise og fleksible reisepakker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til ulike reiselivsprodukter',
    'forstå hvordan pakkereiser er bygget opp',
  ],
  content: [
    {
      id: 'salg-service-vg1-18-intro',
      type: 'text',
      content: `Reiselivsprodukter er pakker og tjenester som gjør det enklere for turister å reise. Fra ferdige charterreiser til skreddersydde opplevelser - mangfoldet er stort.`,
    },
    {
      id: 'salg-service-vg1-18-def-1',
      type: 'definition',
      title: 'Pakkereise',
      content: `En pakkereise er en reise der minst to tjenester (transport, overnatting, billeiing, aktiviteter) er kombinert og solgt til en samlet pris. Arrangøren har ansvar for hele reisen.`,
    },
    {
      id: 'salg-service-vg1-18-text-1',
      type: 'text',
      content: `**Typer reiselivsprodukter**

**1. Charterreiser**
- Fly + hotell til feriedestinasjon
- All inclusive eller halvpensjon
- Typisk sol og bad
- Populære destinasjoner: Spania, Tyrkia, Hellas, Thailand

**2. Cruise**
- Reise med cruiseskip
- Flere destinasjoner på én reise
- Overnatting, mat og underholdning inkludert
- Landutflukter i havner

**3. Rundreiser**
- Flere stopp i ett eller flere land
- Buss, tog eller bil
- Guide eller selvstyrt

**4. Helgetur/bytur**
- Korte ferier (2-4 dager)
- Fly/tog + hotell
- Populære byer: København, Stockholm, London`,
    },
    {
      id: 'salg-service-vg1-18-def-2',
      type: 'definition',
      title: 'All inclusive',
      content: `All inclusive betyr at alle måltider, snacks og drikke (ofte alkohol) er inkludert i prisen, i tillegg til overnatting. Dette gir forutsigbare kostnader for turisten.`,
    },
    {
      id: 'salg-service-vg1-18-text-2',
      type: 'text',
      content: `**Oppbygging av en pakkereise**

**Inkluderte komponenter**:

**1. Transport**
- Fly (chartrefly eller rutefly)
- Buss, tog, ferje
- Transfer fra flyplass til hotell

**2. Overnatting**
- Hotell, leilighet, feriehus
- Romkategori (standard, suite)
- Antall netter

**3. Måltider**
- Kun frokost (BB - Bed & Breakfast)
- Halvpensjon (HB - frokost + middag)
- Helpensjon (FB - Full Board)
- All inclusive (AI)

**4. Ekstra**
- Reiseforsikring
- Guide
- Utflukter og aktiviteter
- Leiebil`,
    },
    {
      id: 'salg-service-vg1-18-text-3',
      type: 'text',
      content: `**Fleksible vs. faste pakker**

**Faste pakker (Statisk pakkereise)**:
- Fast program
- Felles avreise
- Standardisert
- Ofte billigere

**Dynamiske pakker**:
- Tilpass selv
- Velg fly, hotell, aktiviteter
- Mer fleksibilitet
- Høyere pris

**Fordeler med pakkereiser**:
- Enklere planlegging
- Ofte billigere enn å booke separat
- Arrangøren har ansvar
- Trygghet (pakkereiseloven)

**Ulemper**:
- Mindre fleksibilitet
- Bundet til program
- Kan være overfylt (turister)`,
    },
    {
      id: 'salg-service-vg1-18-tip-1',
      type: 'tip',
      title: 'Pakkereiseloven',
      content: `Pakkereiseloven beskytter kunder som kjøper pakkereiser. Arrangøren har plikt til å oppfylle det som er lovet, og kunden kan kreve erstatning hvis reisen ikke holder mål.`,
    },
    {
      id: 'salg-service-vg1-18-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-18-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en pakkereise?',
        solution: 'En reise der minst to tjenester (transport, overnatting, billeiing, aktiviteter) er kombinert og solgt til en samlet pris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-18-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-18-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr all inclusive?',
        solution: 'At alle måltider, snacks og drikke er inkludert i prisen, i tillegg til overnatting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-18-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-18-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på halvpensjon og helpensjon?',
        solution: 'Halvpensjon (HB) inkluderer frokost og middag. Helpensjon (FB - Full Board) inkluderer alle tre måltider (frokost, lunsj, middag).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-18-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-18-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre fordeler med pakkereiser.',
        solution: '1. Enklere planlegging, 2. Ofte billigere enn å booke separat, 3. Arrangøren har ansvar (trygghet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-18-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-18-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er en dynamisk pakke?',
        solution: 'En tilpassbar pakkereise der kunden selv velger fly, hotell, aktiviteter osv. Gir mer fleksibilitet, men er ofte dyrere enn faste pakker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19: Hotell og overnatting
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_19: TextbookChapter = {
  id: 'salg-service-vg1-19',
  courseId: 'salg-service-vg1',
  chapterNumber: '19',
  title: 'Hotell og overnatting',
  description: 'Hotelltyper, romkategorier, innsjekking, utsjekking og servicestandarder i overnattingsbransjen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til ulike overnattingsformer',
    'forstå rutiner for innsjekking og utsjekking',
  ],
  content: [
    {
      id: 'salg-service-vg1-19-intro',
      type: 'text',
      content: `Overnattingsbransjen er en viktig del av reiselivet. Fra luksushoteller til enkle vandrehjem - det finnes alternativer for alle behov og budsjetter.`,
    },
    {
      id: 'salg-service-vg1-19-def-1',
      type: 'definition',
      title: 'Hotell',
      content: `Et hotell er en kommersiell virksomhet som tilbyr overnatting, ofte med tilleggstjenester som restaurant, rom service, konferansefasiliteter og treningsstudio.`,
    },
    {
      id: 'salg-service-vg1-19-text-1',
      type: 'text',
      content: `**Typer overnattingssteder**

**1. Hoteller**
- Ulike stjernekategorier (1-5 stjerner)
- Resepsjon, rengjøring, frokost
- Eksempel: Radisson, Scandic, Thon

**2. Motell**
- Mindre hoteller langs veier
- Enkel standard
- Gratis parkering

**3. Pensjonat/gjestehus**
- Mindre og mer personlig
- Familiendrevet
- Hjemmekoselig

**4. Vandrehjem (Hostel)**
- Rimelig
- Sovesaler eller private rom
- Delt kjøkken og bad

**5. Leiligheter (Airbnb, Booking.com)**
- Hele leilighet eller rom
- Selvhushold
- Privat eller kommersiell utleie

**6. Camping/hytter**
- Telt, campingvogn, hytte
- Naturopplevelser`,
    },
    {
      id: 'salg-service-vg1-19-def-2',
      type: 'definition',
      title: 'Check-in / Check-out',
      content: `Check-in er innsjekking på hotellet når gjesten ankommer. Check-out er utsjekking når gjesten forlater hotellet. Vanlige tider: Check-in kl. 15, Check-out kl. 12.`,
    },
    {
      id: 'salg-service-vg1-19-text-2',
      type: 'text',
      content: `**Romkategorier**

**Enkeltrom (Single)**
- Én person
- Én enkeltseng

**Dobbeltrom (Double)**
- To personer
- Én dobbeltseng eller to enkeltsenger (Twin)

**Suite**
- Større rom
- Separat stue og soverom
- Ofte ekstra service

**Familierom**
- Plass til familie
- Flere senger
- Eventuelt kjøkkenkrok

**Fasiliteter**:
- Standard: Seng, bad, TV, Wi-Fi
- Ekstra: Minibar, safe, balkong, sjøutsikt`,
    },
    {
      id: 'salg-service-vg1-19-text-3',
      type: 'text',
      content: `**Inn sjekking og utsjekking**

**Check-in prosedyre**:
1. Gjest kommer til resepsjonen
2. Identifisering (pass/ID)
3. Bekrefte reservasjon
4. Registrere gjesten i systemet
5. Betaling (kort depositum eller full betaling)
6. Utlevere nøkkelkort
7. Gi informasjon (frokost, Wi-Fi, fasiliteter)

**Check-out prosedyre**:
1. Gjest leverer nøkkelkort
2. Sjekke minibar og ekstra kjøp
3. Utarbeide slutt faktura
4. Betaling (hvis ikke forhåndsbetalt)
5. Spørre om oppholdet var bra
6. Takke for besøket

**Viktig**:
- Vær vennlig og profesjonell
- Husk gjestens navn
- Løs problemer raskt`,
    },
    {
      id: 'salg-service-vg1-19-tip-1',
      type: 'tip',
      title: 'Overbooking',
      content: `Overbooking er når hotellet har solgt flere rom enn de har tilgjengelig. Dette gjøres fordi noen kansellerer. Hvis alle dukker opp, må hotellet finne alternativ overnatting til gjestene.`,
    },
    {
      id: 'salg-service-vg1-19-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-19-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fire typer overnattingssteder.',
        solution: '1. Hotell, 2. Motell, 3. Vandrehjem, 4. Leiligheter (Airbnb). Andre riktige svar: Pensjonat, camping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-19-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-19-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på et dobbeltrom og en suite?',
        solution: 'Dobbeltrom har plass til to personer med dobbeltseng eller to enkeltsenger. Suite er et større rom med separat stue og soverom, ofte med ekstra service.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-19-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-19-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva skjer under check-in på et hotell?',
        solution: 'Identifisering, bekrefte reservasjon, registrere i systemet, betaling/depositum, utlevere nøkkelkort, gi informasjon om hotellet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-19-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-19-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er overbooking?',
        solution: 'Når hotellet har solgt flere rom enn de har tilgjengelig, i forventning om at noen vil kansellere. Hvis alle møter opp, må hotellet finne alternativ overnatting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-19-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-19-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er vanlige tider for check-in og check-out?',
        solution: 'Check-in: kl. 15:00, Check-out: kl. 12:00. Dette kan variere mellom hoteller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20: Eventplanlegging og arrangement
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_20: TextbookChapter = {
  id: 'salg-service-vg1-20',
  courseId: 'salg-service-vg1',
  chapterNumber: '20',
  title: 'Eventplanlegging og arrangement',
  description: 'Planlegging av arrangementer, konferanser, bryllup, messer og kurs. Logistikk og koordinering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre arrangementer',
    'forstå logistikk i eventbransjen',
  ],
  content: [
    {
      id: 'salg-service-vg1-20-intro',
      type: 'text',
      content: `Eventplanlegging handler om å organisere arrangementer som konferanser, bryllup, messer og konserter. Det krever kreativitet, organisering og evne til å koordinere mange detaljer.`,
    },
    {
      id: 'salg-service-vg1-20-def-1',
      type: 'definition',
      title: 'Event',
      content: `Et event (arrangement) er en planlagt begivenhet med et bestemt formål, som kan være sosialt, kommersielt, kulturelt eller utdanningsmessig. Eksempler: konferanse, bryllup, konsert, messe.`,
    },
    {
      id: 'salg-service-vg1-20-text-1',
      type: 'text',
      content: `**Typer arrangementer**

**1. Forretnings-events**
- Konferanser og seminarer
- Messer og utstillinger
- Produktlanseringer
- Nettverkingsarrangementer

**2. Sosiale events**
- Bryllup
- Bursdager og jubileum
- Firmafester
- Gallamiddager

**3. Kultur- og underholdning**
- Konserter og festivaler
- Teater og forestillinger
- Idrettsarrangementer
- Kunstutstillinger

**4. Opplærings-events**
- Kurs og workshops
- Team building
- Foredrag`,
    },
    {
      id: 'salg-service-vg1-20-def-2',
      type: 'definition',
      title: 'Eventplanlegger',
      content: `En eventplanlegger (eller eventkoordinator) er ansvarlig for å planlegge, organisere og gjennomføre arrangementer fra start til slutt.`,
    },
    {
      id: 'salg-service-vg1-20-text-2',
      type: 'text',
      content: `**Planlegging av et arrangement**

**Fase 1: Forberedelse**
1. Definere formål og mål
2. Budsjett
3. Velge dato og sted
4. Målgruppe og antall deltagere

**Fase 2: Planlegging**
5. Lage program/agenda
6. Booke sted (venue)
7. Catering (mat og drikke)
8. Teknisk utstyr (lyd, lys, projektor)
9. Dekorasjon og design
10. Markedsføring og påmelding

**Fase 3: Gjennomføring**
11. Koordinere leverandører
12. Praktisk rigg
13. Registrering av deltakere
14. Overvåke at alt går etter planen
15. Håndtere uforutsette hendelser

**Fase 4: Oppfølging**
16. Evaluering
17. Takke til deltakere og leverandører
18. Rapportering`,
    },
    {
      id: 'salg-service-vg1-20-text-3',
      type: 'text',
      content: `**Viktige elementer i eventplanlegging**

**Budsjett**:
- Inntekter (billetter, sponsorer)
- Kostnader (lokale, catering, markedsføring, personale)
- Buffer for uforutsette utgifter (10-15%)

**Logistikk**:
- Transport av utstyr
- Parkering for gjester
- Toaletter og garderobe
- Tilgjengelighet (rullestol)

**Sikkerhet og beredskap**:
- Brannvern og evakueringsplan
- Førstehjelpsutstyr
- Forsikring
- Vakter ved behov

**Kommunikasjon**:
- Invitasjoner
- Påminnelser
- Informasjon under event
- Takk-e-post etter`,
    },
    {
      id: 'salg-service-vg1-20-tip-1',
      type: 'tip',
      title: 'Sjekkliste',
      content: `Bruk alltid en detaljert sjekkliste for arrangement. Dette sikrer at ingenting blir glemt. Mange bruker digitale verktøy som Trello, Asana eller Excel for å holde oversikten.`,
    },
    {
      id: 'salg-service-vg1-20-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-20-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fire fasene i planlegging av et arrangement?',
        solution: '1. Forberedelse, 2. Planlegging, 3. Gjennomføring, 4. Oppfølging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-20-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-20-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre typer forretnings-events.',
        solution: '1. Konferanser og seminarer, 2. Messer og utstillinger, 3. Produktlanseringer. Andre riktige svar: Nettverkingsarrangementer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-20-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-20-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør et eventbudsjett inneholde?',
        solution: 'Inntekter (billetter, sponsorer), kostnader (lokale, catering, markedsføring, personale), og en buffer (10-15%) for uforutsette utgifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-20-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-20-ex-4',
        number: '4',
        type: 'classic',
        task: 'Planlegg et enkelt arrangement (50 personer) med formål, sted, budsjett og program.',
        solution: 'Eksempel: Firmafest. Formål: Takke ansatte. Sted: Restaurantlokale. Budsjett: 50 000 kr (1000 kr/person). Program: 18:00 Velkomst, 18:30 Middag, 20:00 Tale, 20:30 Underholdning, 22:00 Avslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-20-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-20-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er sikkerhet og beredskap viktig ved arrangementer?',
        solution: 'For å beskytte deltakere mot farer (brann, ulykker), håndtere nødsituasjoner raskt, og sikre at arrangementet følger lovkrav. Dette omfatter brannvern, førstehjelpsutstyr og evakueringsplaner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 21: Klagebehandling og konflikthåndtering
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_21: TextbookChapter = {
  id: 'salg-service-vg1-21',
  courseId: 'salg-service-vg1',
  chapterNumber: '21',
  title: 'Klagebehandling og konflikthåndtering',
  description: 'Reklamasjoner, konfliktløsning, de-eskalering og profesjonell håndtering av vanskelige kunder.',
  estimatedMinutes: 50,
  competenceGoals: [
    'håndtere klager og konflikter profesjonelt',
    'de-eskalere vanskelige situasjoner',
  ],
  content: [
    {
      id: 'salg-service-vg1-21-intro',
      type: 'text',
      content: `Å håndtere klager og konflikter er en viktig del av kundeservice. Hvordan du møter en sint kunde kan avgjøre om de blir lojale eller aldri kommer tilbake.`,
    },
    {
      id: 'salg-service-vg1-21-def-1',
      type: 'definition',
      title: 'Klagebehandling',
      content: `Klagebehandling er prosessen med å motta, analysere og løse kunders klager og misnøye på en profesjonell og konstruktiv måte.`,
    },
    {
      id: 'salg-service-vg1-21-text-1',
      type: 'text',
      content: `**Typer konflikter i kundeservice**

**1. Produktrelatert**
- Defekt produkt
- Feil produkt levert
- Produktet svarer ikke til forventningene

**2. Servicerelatert**
- Dårlig kundebehandling
- Lang ventetid
- Uhøflig betjening

**3. Prisrelatert**
- Feil pris
- Skjulte kostnader
- Uenighet om rabatt

**4. Leveranserelatert**
- Forsinket levering
- Manglende varer
- Skadet i transport`,
    },
    {
      id: 'salg-service-vg1-21-def-2',
      type: 'definition',
      title: 'De-eskalering',
      content: `De-eskalering er teknikker for å roe ned en opphetet situasjon og bringe konflikten tilbake til et konstruktivt nivå.`,
    },
    {
      id: 'salg-service-vg1-21-text-2',
      type: 'text',
      content: `**Trinnvis klagebehandling**

**Trinn 1: Ta imot klagen**
- Lytt aktivt uten å avbryte
- Vis empati: "Jeg forstår at dette er frustrerende"
- Ikke ta det personlig
- Hold øyekontakt (hvis fysisk møte)

**Trinn 2: Forstå problemet**
- Still avklarende spørsmål
- Oppsummer for å sikre forståelse
- Gjenta kundens hovedpoeng

**Trinn 3: Beklage**
- Beklage ulempen
- Ta ansvar på vegne av bedriften
- Ikke skyld på andre

**Trinn 4: Finn løsning**
- Foreslå konkrete alternativer
- Spør hva kunden forventer
- Følg bedriftens retningslinjer
- Vær kreativ innenfor rammene

**Trinn 5: Gjennomfør og følg opp**
- Utfør løsningen raskt
- Bekreft at kunden er fornøyd
- Dokumenter hendelsen
- Lær av situasjonen`,
    },
    {
      id: 'salg-service-vg1-21-text-3',
      type: 'text',
      content: `**Teknikker for de-eskalering**

**1. Behold roen**
- Ikke hev stemmen
- Pust rolig
- Vis profesjonalitet

**2. Vis empati**
- "Jeg forstår hvorfor du er opprørt"
- Sett deg i kundens sted
- Anerkjenn følelsene

**3. Unngå forsvar**
- Ikke bli defensiv
- Ikke si "Det er ikke min feil"
- Fokuser på løsning, ikke skyld

**4. Bygg tillit**
- Vær ærlig
- Hold løfter
- Vis at du bryr deg

**5. Gi kontroll**
- La kunden føle seg hørt
- Involver i løsningen
- Gi valg der det er mulig

**Når du må si nei**:
- Forklar hvorfor tydelig
- Vis til policy
- Tilby alternativer
- Behold høfligheten`,
    },
    {
      id: 'salg-service-vg1-21-tip-1',
      type: 'tip',
      title: 'Aggressiv kunde',
      content: `Hvis en kunde blir truende eller aggressiv: Behold roen, sett grenser tydelig ("Jeg ønsker å hjelpe, men vi må snakke i normale toner"), hent leder hvis nødvendig, prioriter din egen sikkerhet.`,
    },
    {
      id: 'salg-service-vg1-21-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-21-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem trinnene i klagebehandling?',
        solution: '1. Ta imot klagen, 2. Forstå problemet, 3. Beklage, 4. Finn løsning, 5. Gjennomfør og følg opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-21-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-21-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr de-eskalering?',
        solution: 'Teknikker for å roe ned en opphetet situasjon og bringe konflikten tilbake til et konstruktivt nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-21-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-21-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre teknikker for de-eskalering.',
        solution: '1. Behold roen, 2. Vis empati, 3. Unngå forsvar. Andre riktige svar: Bygg tillit, gi kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-21-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-21-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan håndterer du en kunde som er sint fordi de fikk feil produkt levert?',
        solution: 'Lytt uten å avbryte, vis empati ("Jeg forstår frustrasjonen"), beklage feilen, tilby løsning (rask ombytting, eventuell frakt dekkes), følg opp at kunden er fornøyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-21-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-21-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva gjør du hvis en kunde blir truende eller aggressiv?',
        solution: 'Behold roen, sett tydelige grenser, hent leder/vakt, prioriter din egen sikkerhet, avslutt samtalen hvis nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 22: Salgsteknikker og overtalelse
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_22: TextbookChapter = {
  id: 'salg-service-vg1-22',
  courseId: 'salg-service-vg1',
  chapterNumber: '22',
  title: 'Salgsteknikker og overtalelse',
  description: 'Mersalg, kryssalg, påvirkningsteknikker, argumentasjon og etisk salg.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke salgsteknikker for å øke salget',
    'selge etisk og ansvarsfu llt',
  ],
  content: [
    {
      id: 'salg-service-vg1-22-intro',
      type: 'text',
      content: `Salgsteknikker hjelper deg å øke salget, men må alltid brukes etisk. Målet er å hjelpe kunden finne det de trenger, ikke presse dem til å kjøpe noe de ikke vil ha.`,
    },
    {
      id: 'salg-service-vg1-22-def-1',
      type: 'definition',
      title: 'Mersalg (Upselling)',
      content: `Mersalg er å tilby kunden en dyrere eller bedre versjon av produktet de vurderer. Eksempel: Kunden ser på en enkel PC, du viser en kraftigere modell.`,
    },
    {
      id: 'salg-service-vg1-22-text-1',
      type: 'text',
      content: `**Mersalg og kryssalg**

**Mersalg (Upselling)**:
- Selge dyrere/bedre versjon
- Eksempel: "Premium-versjonen har ekstra funksjoner"
- Fokuser på merverdi, ikke bare høyere pris
- Når: Kunden er interessert, men usikker

**Kryssalg (Cross-selling)**:
- Selge tilleggsprodukter
- Eksempel: "Vil du ha et deksel til telefonen?"
- Komplettere kjøpet
- Naturlig sammenheng

**Tips for suksess**:
- Forstå kundens behov først
- Foreslå relevant
- Ikke vær pushy
- Forklar fordelen tydelig`,
    },
    {
      id: 'salg-service-vg1-22-def-2',
      type: 'definition',
      title: 'Sosialbevis',
      content: `Sosialbevis er tendensen til å følge andres valg. I salg brukes dette ved å vise at "mange andre kjøper dette" eller "bestselger". Det skaper trygghet hos kunden.`,
    },
    {
      id: 'salg-service-vg1-22-text-2',
      type: 'text',
      content: `**Påvirkningsprinsipper (Cialdini)**

**1. Gjensidighet**
- Gi noe først (gratis prøve, god service)
- Kunden føler seg forpliktet til å gi tilbake

**2. Knapphet**
- "Siste sjanse", "Kun 2 igjen"
- Skaper følelse av hastverk
- MEN: Bruk ærlig, ikke løgn

**3. Autoritet**
- Ekspertvurderinger
- "Anbefalt av..."
- Din kunnskap som selger

**4. Sosialbevis**
- "Bestselger"
- Anmeldelser
- "Mange kjøper denne"

**5. Liking**
- Folk kjøper fra folk de liker
- Vær vennlig, finn felles interesser
- Ekte interesse for kunden

**6. Forpliktelse og konsistens**
- Små ja-spørsmål først
- Bygger opp til større beslutning`,
    },
    {
      id: 'salg-service-vg1-22-text-3',
      type: 'text',
      content: `**Etisk salg**

**Prinsipper**:

**1. Ærlighet**
- Ikke lyv om produktet
- Innrøm begrensninger
- Korrekt informasjon

**2. Kundens beste**
- Selg det de trenger, ikke bare det som gir mest provisjon
- Si nei hvis produktet ikke passer
- Langsiktig kundeforhold viktigere enn én handel

**3. Respekt for nei**
- Aksepter når kunden sier nei
- Ikke press
- Vær profesjonell uansett

**4. Transparens**
- Tydelig på pris, betingelser
- Ingen skjulte kostnader
- Klar kommunikasjon

**Uetisk salg**:
- Pushy/aggressivt salg
- Skjulte gebyrer
- Villedende påstander
- Utnytte sårbare grupper`,
    },
    {
      id: 'salg-service-vg1-22-tip-1',
      type: 'tip',
      title: 'Timing',
      content: `Riktig timing er avgjørende. Tilby mersalg/kryssalg etter at kunden har bestemt seg for hovedkjøpet, men før de betaler. Da er de i "kjøpsmodus" og mer åpne for tillegg.`,
    },
    {
      id: 'salg-service-vg1-22-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-22-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på mersalg og kryssalg?',
        solution: 'Mersalg (upselling) er å tilby en dyrere/bedre versjon av produktet. Kryssalg (cross-selling) er å tilby tilleggsprodukter som kompletterer kjøpet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-22-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-22-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre av Cialdinis påvirkningsprinsipper.',
        solution: '1. Gjensidighet, 2. Knapphet, 3. Sosialbevis. Andre riktige svar: Autoritet, Liking, Forpliktelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-22-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-22-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er sosialbevis i salg?',
        solution: 'Å vise at andre kjøper eller anbefaler produktet (bestselger, kundevurderinger, anbefalinger). Dette skaper trygghet hos kunden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-22-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-22-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi et eksempel på mersalg og kryssalg i en klesbutikk.',
        solution: 'Mersalg: Kunde ser på en t-skjorte til 200 kr, du viser en premiumversjon til 350 kr med bedre kvalitet. Kryssalg: Kunde kjøper bukse, du foreslår et belte som passer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-22-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-22-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kjennetegner etisk salg?',
        solution: 'Ærlighet om produktet, fokus på kundens beste, respekt for nei, transparens om pris og betingelser. Motsatt av pushy/aggressivt salg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 23: Innkjøp og leverandørforhold
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_23: TextbookChapter = {
  id: 'salg-service-vg1-23',
  courseId: 'salg-service-vg1',
  chapterNumber: '23',
  title: 'Innkjøp og leverandørforhold',
  description: 'Innkjøpsprosessen, leverandøravtaler, forhandlinger, kvalitetskontroll og leverandørstyring.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå innkjøpsprosessen',
    'bygge gode leverandørforhold',
  ],
  content: [
    {
      id: 'salg-service-vg1-23-intro',
      type: 'text',
      content: `Innkjøp handler om å skaffe varer til rett kvalitet, pris og tid. Gode leverandørforhold er avgjørende for butikkens suksess.`,
    },
    {
      id: 'salg-service-vg1-23-def-1',
      type: 'definition',
      title: 'Innkjøp',
      content: `Innkjøp er prosessen med å identifisere behov, finne leverandører, forhandle avtaler og bestille varer til virksomheten.`,
    },
    {
      id: 'salg-service-vg1-23-text-1',
      type: 'text',
      content: `**Innkjøpsprosessen - steg for steg**

**1. Behovsanalyse**
- Hva trenger vi?
- Hvor mye?
- Når må vi ha det?
- Budsjett?

**2. Leverandørsøk**
- Finne potensielle leverandører
- Sammenligne tilbud
- Sjekke referanser

**3. Forespørsel (RFQ - Request for Quotation)**
- Be om pristilbud
- Spesifiser krav
- Leveringstid

**4. Evaluering**
- Sammenligne pris
- Kvalitet
- Leveringstid
- Betalingsbetingelser

**5. Forhandling**
- Pris
- Rabatter ved volum
- Betalingsbetingelser
- Returrett

**6. Bestilling**
- Formell ordre
- Bekreft detaljer
- Leveringsdato

**7. Oppfølging**
- Motta og sjekke varer
- Betaling
- Evaluere leverandøren`,
    },
    {
      id: 'salg-service-vg1-23-def-2',
      type: 'definition',
      title: 'Leverandøravtale',
      content: `En leverandøravtale er en kontrakt mellom kjøper og leverandør som regulerer betingelser for kjøp, som pris, kvalitet, leveringstid, betaling og ansvar.`,
    },
    {
      id: 'salg-service-vg1-23-text-2',
      type: 'text',
      content: `**Viktige elementer i leverandøravtale**

**Pris og rabatter**:
- Enhetspris
- Volum rabatter
- Sesongrabatter
- Betalingsrabatt (f.eks. 2% ved betaling innen 10 dager)

**Leveringsbetingelser**:
- Leveringstid
- Fraktansvar (hvem betaler?)
- Leverings sted
- Emballasje

**Kvalitet**:
- Spesifikasjoner
- Sertifiseringer
- Reklamasjonsrett
- Returpolicy

**Betalingsbetingelser**:
- Betalingsfrist (f.eks. 30 dager netto)
- Betalingsmåte
- Straff ved forsinket betaling`,
    },
    {
      id: 'salg-service-vg1-23-text-3',
      type: 'text',
      content: `**Bygge gode leverandørforhold**

**Kommunikasjon**:
- Være tydelig på forventninger
- Regelmessig kontakt
- Varsle om endringer tidlig

**Langsiktig samarbeid**:
- Lojalitet gir ofte bedre betingelser
- Prioritet ved knapphet
- Fleksibilitet

**Betaling**:
- Betal til avtalt tid
- Bygger tillit
- Bedre forhandlingsposisjon

**Tilbakemelding**:
- Gi ros for god levering
- Konstruktiv kritikk ved problemer
- Samarbeid om forbedringer

**Etikk**:
- Vær rettferdig
- Ikke utnytt monopolsituasjoner
- Respekter avtaler`,
    },
    {
      id: 'salg-service-vg1-23-tip-1',
      type: 'tip',
      title: 'Diversifisering',
      content: `Ikke vær avhengig av én leverandør for kritiske varer. Ha alltid en backup-leverandør i tilfelle problemer oppstår (streik, konkurs, kvalitetssvikt).`,
    },
    {
      id: 'salg-service-vg1-23-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-23-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn de syv stegene i innkjøpsprosessen.',
        solution: '1. Behovsanalyse, 2. Leverandørsøk, 3. Forespørsel, 4. Evaluering, 5. Forhandling, 6. Bestilling, 7. Oppfølging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-23-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-23-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør en leverandøravtale inneholde?',
        solution: 'Pris og rabatter, leveringsbetingelser, kvalitetskrav, betalingsbetingelser, returpolicy og reklamasjonsrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-23-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-23-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr "30 dager netto"?',
        solution: 'Betalingsfristen er 30 dager fra fakturadato, uten rabatt for tidlig betaling. "Netto" betyr full pris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-23-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-23-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det lurt å ha flere leverandører for kritiske varer?',
        solution: 'For å unngå å være avhengig av én leverandør. Hvis problemer oppstår (streik, konkurs, kvalitetssvikt), har du en backup-leverandør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-23-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-23-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre måter å bygge gode leverandørforhold.',
        solution: '1. Tydelig kommunikasjon, 2. Betale til avtalt tid, 3. Gi tilbakemelding (ros og konstruktiv kritikk). Andre riktige svar: Langsiktig samarbeid, etisk oppførsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 24: Butikkøkonomi og nøkkeltall
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_24: TextbookChapter = {
  id: 'salg-service-vg1-24',
  courseId: 'salg-service-vg1',
  chapterNumber: '24',
  title: 'Butikkøkonomi og nøkkeltall',
  description: 'Salgsnøkkeltall, margin, dekningsbidrag, lønnsomhetsanalyse og økonomisk styring.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne og tolke økonomiske nøkkeltall',
    'forstå lønnsomhet i butikkdrift',
  ],
  content: [
    {
      id: 'salg-service-vg1-24-intro',
      type: 'text',
      content: `Nøkkeltall er målbare verdier som viser hvordan butikken presterer. Ved å følge disse tallene kan du styre virksomheten bedre og ta riktige beslutninger.`,
    },
    {
      id: 'salg-service-vg1-24-def-1',
      type: 'definition',
      title: 'Nøkkeltall',
      content: `Nøkkeltall (KPI - Key Performance Indicators) er målbare verdier som viser hvordan virksomheten presterer innenfor viktige områder som salg, lønnsomhet og effektivitet.`,
    },
    {
      id: 'salg-service-vg1-24-text-1',
      type: 'text',
      content: `**Viktige salgsnøkkeltall**

**1. Omsetning**
- Total salgsverdi
- Måles per dag/uke/måned/år
- Formel: Pris × Antall solgt

**2. Margin**
- Fortjeneste per produkt
- Bruttomargin = Salgspris - Kostpris
- Marginprosent = (Bruttomargin / Salgspris) × 100
- Eksempel: Kostpris 60 kr, salgspris 100 kr → Margin 40 kr (40%)

**3. Gjennomsnittskjøp (Average Transaction Value - ATV)**
- Hvor mye kunder bruker per besøk
- Formel: Total omsetning / Antall transaksjoner

**4. Konverteringsrate**
- Hvor mange besøkende som kjøper
- Formel: (Antall kjøp / Antall besøkende) × 100
- Eksempel: 200 besøkende, 50 kjøp → 25% konvertering`,
    },
    {
      id: 'salg-service-vg1-24-def-2',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `Dekningsbidrag er salgsinntekter minus variable kostnader. Det viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd.`,
    },
    {
      id: 'salg-service-vg1-24-text-2',
      type: 'text',
      content: `**Lønnsomhetsanalyse**

**Dekningsbidrag**:
- Formel: Salgsinntekt - Variable kostnader
- Eksempel: Selger vare for 1000 kr, kostpris 600 kr → DB = 400 kr

**Dekningsgrad** (Margin %):
- Formel: (Dekningsbidrag / Salgsinntekt) × 100
- Eksempel: DB 400 kr / Salg 1000 kr = 40%

**Break even**:
- Når dekker vi faste kostnader?
- Formel: Faste kostnader / Dekningsgrad
- Eksempel: Faste kost 100 000 kr/mnd, DB 40% → Trenger 250 000 kr i salg

**Netto resultat**:
- Overskudd/underskudd
- Formel: Salgsinntekter - Alle kostnader`,
    },
    {
      id: 'salg-service-vg1-24-text-3',
      type: 'text',
      content: `**Effektivitetsmål**

**1. Lagerhastighet (Inventory Turnover)**
- Hvor raskt selger vi ut lageret?
- Formel: Årlig salg (til kostpris) / Gjennomsnittlig lagerverdi
- Høy verdi = effektivt lager

**2. Salg per kvadratmeter**
- Hvor mye tjener vi per m² butikkareal?
- Formel: Årlig omsetning / Kvadratmeter
- Viser effektivitet i arealbruk

**3. Svinnprosent**
- Hvor mye går tapt (tyveri, skade, utgått dato)?
- Formel: (Svinn / Omsetning) × 100
- Målet er å minimere

**4. Salg per ansatt**
- Produktivitet
- Formel: Omsetning / Antall ansatte`,
    },
    {
      id: 'salg-service-vg1-24-tip-1',
      type: 'tip',
      title: 'Målstyring',
      content: `Sett konkrete mål for nøkkeltall (f.eks. "Øke ATV med 10% neste kvartal"). Følg opp regelmessig og juster strategi basert på resultater.`,
    },
    {
      id: 'salg-service-vg1-24-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-24-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beregn marginprosent: Kostpris 80 kr, salgspris 120 kr.',
        solution: 'Margin = 120 - 80 = 40 kr. Marginprosent = (40/120) × 100 = 33,3%.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-24-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-24-ex-2',
        number: '2',
        type: 'classic',
        task: 'En butikk har 300 besøkende per dag, 90 kjøper. Hva er konverteringsraten?',
        solution: 'Konverteringsrate = (90/300) × 100 = 30%.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-24-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-24-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er dekningsbidrag?',
        solution: 'Salgsinntekter minus variable kostnader. Det viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-24-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-24-ex-4',
        number: '4',
        type: 'classic',
        task: 'En butikk har faste kostnader 80 000 kr/mnd og dekningsgrad 40%. Hva er break even?',
        solution: 'Break even = 80 000 / 0,40 = 200 000 kr i salg per måned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-24-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-24-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig å følge nøkkeltall i butikkdrift?',
        solution: 'For å styre virksomheten bedre, ta riktige beslutninger, oppdage problemer tidlig, og sikre lønnsomhet. Nøkkeltall gir målbare data om hvordan butikken presterer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-24-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-24-ex-6',
        number: '6',
        type: 'classic',
        task: 'Daglig omsetning er 15 000 kr fordelt på 60 kjøp. Hva er gjennomsnittskjøpet (ATV)?',
        solution: 'ATV = 15 000 / 60 = 250 kr per transaksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 25: Internasjonalt reiseliv og destinasjoner
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_25: TextbookChapter = {
  id: 'salg-service-vg1-25',
  courseId: 'salg-service-vg1',
  chapterNumber: '25',
  title: 'Internasjonalt reiseliv og destinasjoner',
  description: 'Populære reisemål, geografi, klimasoner, tidssoner og internasjonale reisebestemmelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til populære reisemål',
    'forstå reisebestemmelser og tidssoner',
  ],
  content: [
    {
      id: 'salg-service-vg1-25-intro',
      type: 'text',
      content: `Som reisekonsulent eller reiselivsmedarbeider må du kjenne til verdens destinasjoner, reisebestemmelser og praktiske forhold for turister.`,
    },
    {
      id: 'salg-service-vg1-25-def-1',
      type: 'definition',
      title: 'Destinasjon',
      content: `En destinasjon er et sted turister reiser til for ferie, forretninger eller andre formål. Det kan være by, region, land eller attraksjon.`,
    },
    {
      id: 'salg-service-vg1-25-text-1',
      type: 'text',
      content: `**Populære reisemål for nordmenn**

**Europa**:
- **Spania**: Sol og bad (Costa del Sol, Kanariøyene), kultur (Barcelona, Madrid)
- **Italia**: Kultur og mat (Roma, Firenze), strender (Amalfikysten)
- **Frankrike**: Paris, Rivieraen, vinområder
- **Hellas**: Øyhopping, antikke ruiner, mat
- **Storbritannia**: London, skotsk landsbygd
- **Tyrkia**: All inclusive-ferie, kultur (Istanbul)

**Asia**:
- **Thailand**: Strender, kultur, rimelig
- **Vietnam**: Kultur, mat, natur
- **Japan**: Kultur, teknologi, mat

**Amerika**:
- **USA**: New York, California, nasjonalparker
- **Mexico**: Riviera Maya, kultur

**Afrika**:
- **Egypt**: Pyramider, Rødehavet
- **Kenya/Tanzania**: Safari`,
    },
    {
      id: 'salg-service-vg1-25-def-2',
      type: 'definition',
      title: 'Tidssone',
      content: `Tidssoner deler verden inn i områder med samme klokkeslett. Ved reise over tidssoner opplever man jetlag. Norge ligger i CET (Central European Time) = UTC+1.`,
    },
    {
      id: 'salg-service-vg1-25-text-2',
      type: 'text',
      content: `**Klimasoner og beste reisetid**

**Temperert sone** (Nord-Europa):
- Fire årstider
- Sommer: juni-august
- Vinter: desember-februar

**Middelhavsklima**:
- Varme, tørre somre
- Milde, fuktige vintre
- Beste tid: april-oktober

**Tropisk klima** (Thailand, Karibia):
- Varmt året rundt
- Regntid vs. tørketid
- Sjekk regntid før booking

**Ørkenklima**:
- Store temperaturforskjeller
- Veldig varmt om dagen
- Kaldt om natten

**Viktig**:
- Råd turister om beste reisetid
- Ta hensyn til monsun, orkaner osv.
- Klima påvirker pris og tilgjengelighet`,
    },
    {
      id: 'salg-service-vg1-25-text-3',
      type: 'text',
      content: `**Reisebestemmelser**

**Pass og visum**:
- **Schengen**: Fri bevegelse (Norge, EU)
- **Utenfor Schengen**: Pass påkrevd
- **Visum**: Noen land krever visum (Russland, India, Kina)
- Pass må være gyldig minst 6 mnd etter hjemkomst

**Helsekrav**:
- Vaksiner (gulfeber, malaria)
- Reiseforsikring anbefales sterkt
- Europeisk helsetrygdkort (EU/EØS)

**Toll**:
- Alkohol og tobakk (kvotebelagt)
- Tollregler varierer per land
- Anmeldelsesplikt ved store beløp

**Sikkerhet**:
- Sjekk UDs reiseråd
- Registrere reisen (for nordmenn)
- Ambassadens kontaktinfo`,
    },
    {
      id: 'salg-service-vg1-25-tip-1',
      type: 'tip',
      title: 'Jetlag',
      content: `Jetlag oppstår ved reise over flere tidssoner. Tips: Tilpass deg ny tid raskt, få sollys, hold deg våken til kvelden første dag, drikk mye vann.`,
    },
    {
      id: 'salg-service-vg1-25-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-25-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre populære europeiske reisemål for nordmenn.',
        solution: '1. Spania, 2. Italia, 3. Hellas. Andre riktige svar: Frankrike, Tyrkia, Storbritannia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-25-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-25-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er Schengen?',
        solution: 'Schengen er et område med fri bevegelse uten passkontroll, som inkluderer Norge og de fleste EU-land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-25-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-25-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig å kjenne til klimasoner når du rådgir turister?',
        solution: 'For å anbefale beste reisetid, unngå regntid/monsun, sikre behagelig temperatur, og gi riktig informasjon om hva de skal pakke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-25-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-25-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er jetlag?',
        solution: 'Jetlag oppstår ved reise over flere tidssoner. Kroppen er ikke tilpasset ny tid, noe som gir tretthet, søvnproblemer og konsentrasjonsvansker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-25-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-25-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør en turist sjekke før reise til land utenfor Schengen?',
        solution: 'Visum-krav, vaksinekrav, pass-gyldighet (minst 6 mnd), UDs reiseråd, reiseforsikring, tollregler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 26: Kulturforståelse og interkulturell kommunikasjon
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_26: TextbookChapter = {
  id: 'salg-service-vg1-26',
  courseId: 'salg-service-vg1',
  chapterNumber: '26',
  title: 'Kulturforståelse og interkulturell kommunikasjon',
  description: 'Kulturelle forskjeller, interkulturell kommunikasjon, kultursjokk og servicekultur i ulike land.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå kulturelle forskjeller',
    'kommunisere respektfullt på tvers av kulturer',
  ],
  content: [
    {
      id: 'salg-service-vg1-26-intro',
      type: 'text',
      content: `I en global bransje som reiseliv og handel møter du mennesker fra ulike kulturer. Kulturforståelse og respekt er nøkkelen til god kommunikasjon og service.`,
    },
    {
      id: 'salg-service-vg1-26-def-1',
      type: 'definition',
      title: 'Kultur',
      content: `Kultur er de verdier, normer, skikker, språk og atferdsmønstre som deles av en gruppe mennesker. Kultur påvirker hvordan vi tenker, kommuniserer og handler.`,
    },
    {
      id: 'salg-service-vg1-26-text-1',
      type: 'text',
      content: `**Kulturelle dimensjoner (Hofstede)**

**1. Individ vs. kollektiv**
- Individualistiske (Norge, USA): Uavhengighet, personlig frihet
- Kollektive (Japan, Kina): Gruppeidentitet, lojalitet til familie/firma

**2. Maktdistanse**
- Lav (Norge, Danmark): Likeverd, flat struktur
- Høy (Malaysia, Mexico): Hierarki, respekt for autoritet

**3. Usikkerhetsunngåelse**
- Lav (Singapore): Tåler usikkerhet, fleksible
- Høy (Grekenland): Trenger regler, forutsigbarhet

**4. Maskulinitet vs. femininitet**
- Maskuline (USA, Tyskland): Konkurr anse, prestasjon
- Feminine (Norge, Sverige): Samarbeid, livskvalitet

**5. Tidsorientering**
- Kortsiktig (USA): Raske resultater
- Langsiktig (Kina, Japan): Tålmodighet, fremtidsplanlegging`,
    },
    {
      id: 'salg-service-vg1-26-def-2',
      type: 'definition',
      title: 'Kultursjokk',
      content: `Kultursjokk er forvirring og ubehag man opplever når man møter en ukjent kultur. Dette er normalt og går over etter hvert som man tilpasser seg.`,
    },
    {
      id: 'salg-service-vg1-26-text-2',
      type: 'text',
      content: `**Interkulturell kommunikasjon**

**Verbale forskjeller**:
- Direkte vs. indirekte kommunikasjon
- Norge: Direkte, konkret
- Japan: Indirekte, subtil, "les mellom linjene"

**Nonverbal kommunikasjon**:
- **Kroppsspråk**: Varierer sterkt
- **Øyekontakt**: Høflig i Norge, uhøflig i noen asiatiske kulturer
- **Personlig avstand**: Skandinaver: stor avstand, Latinamerikanske: liten
- **Gester**: Tommel opp OK i Norge, støtende i Midt-Østen

**Tid**:
- Monokron (Norge, Tyskland): Punktlighet viktig, én ting om gangen
- Polykron (Spania, Latin-Amerika): Mer avslappet til tid, mange ting samtidig`,
    },
    {
      id: 'salg-service-vg1-26-text-3',
      type: 'text',
      content: `**Servicekultur i ulike land**

**USA**:
- Svært serviceinnstilt
- Forventet tipping (15-20%)
- Vennlighet og smil

**Japan**:
- Ekstremt høflig
- Bøying i hilsning
- Kundens tilfredshet høyeste prioritet

**Frankrike**:
- Formelt
- Forventer at du snakker fransk eller prøver
- Service kan virke kjølig for nordmenn

**Midtøsten**:
- Gjestfrihet høyt verdsatt
- Respekt for religion og tradisjoner
- Klesdrakt: konservativt

**Norge**:
- Uformelt (bruker fornavn)
- Egalitært
- "Lagom" service (ikke overdrevent)`,
    },
    {
      id: 'salg-service-vg1-26-tip-1',
      type: 'tip',
      title: 'Kultursensitivitet',
      content: `Lær om kundens kultur før møtet hvis mulig. Vær ydmyk, still spørsmål respektfullt, og unngå å dømme andre kulturer ut fra dine egne normer.`,
    },
    {
      id: 'salg-service-vg1-26-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-26-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kultursjokk?',
        solution: 'Forvirring og ubehag når man møter en ukjent kultur. Det er normalt og går over etter hvert som man tilpasser seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-26-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-26-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på individualistiske og kollektive kulturer?',
        solution: 'Individualistiske (Norge, USA) fokuserer på uavhengighet og personlig frihet. Kollektive (Japan, Kina) fokuserer på gruppeidentitet og lojalitet til familie/firma.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-26-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-26-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor kan øyekontakt oppfattes ulikt i forskjellige kulturer?',
        solution: 'I Norge er øyekontakt høflig og viser interesse. I noen asiatiske kulturer kan det oppfattes som uhøflig eller utfordrende, spesielt overfor eldre eller autoritet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-26-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-26-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv norsk servicekultur.',
        solution: 'Uformell (bruker fornavn), egalitær (likeverd), "lagom" service (verken overdrevent eller distansert), direkte kommunikasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 27: Bookingsystemer og teknologi
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_27: TextbookChapter = {
  id: 'salg-service-vg1-27',
  courseId: 'salg-service-vg1',
  chapterNumber: '27',
  title: 'Bookingsystemer og teknologi',
  description: 'Bookingsystemer, POS-systemer, betalingsterminaler, digitale verktøy i handel og reiseliv.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke bookingsystemer og POS-systemer',
    'forstå digital teknologi i bransjen',
  ],
  content: [
    {
      id: 'salg-service-vg1-27-intro',
      type: 'text',
      content: `Digitale verktøy og systemer er essensielle i moderne handel og reiseliv. Fra kasse til booking av hotellrom - teknologien effektiviserer arbeidet.`,
    },
    {
      id: 'salg-service-vg1-27-def-1',
      type: 'definition',
      title: 'POS-system',
      content: `POS (Point of Sale) er kassasystemet som registrerer salg, håndterer betaling, oppdaterer lager og genererer rapporter. Moderne POS er ofte skybasert.`,
    },
    {
      id: 'salg-service-vg1-27-text-1',
      type: 'text',
      content: `**POS-system (Point of Sale)**

**Funksjoner**:
- Registrere salg (skanne strekkoder)
- Betalingshåndtering (kort, kontant, Vipps)
- Lagerstyring (automatisk oppdatering)
- Kundedata (CRM-integrasjon)
- Rapporter (salg, margin, toppselgere)

**Typer POS**:
- **Tradisjonelt**: Desktop-basert
- **Skybasert**: Tilgang fra mobil/nettbrett
- **Mobilt**: iPad/Android med kortleser

**Fordeler med moderne POS**:
- Sanntidsdata
- Integrasjon med nettbutikk
- Lagerstyring på tvers av butikker
- Kundelojalitetsprogrammer

**Populære systemer**:
- Shopify POS
- Square
- Vend
- Tripletex`,
    },
    {
      id: 'salg-service-vg1-27-def-2',
      type: 'definition',
      title: 'Bookingsystem',
      content: `Et bookingsystem er programvare som håndterer reservasjoner av hotellrom, billetter, bord på restaurant, aktiviteter osv. Det kan være eget system eller integrert i nettside.`,
    },
    {
      id: 'salg-service-vg1-27-text-2',
      type: 'text',
      content: `**Bookingsystemer**

**For hoteller**:
- **PMS (Property Management System)**
- Håndterer reservasjoner
- Innsjekking/utsjekking
- Romstatus (ledig/okkupert/rengjøring)
- Fakturering
- Eksempler: Opera, Mews, Hotellinx

**For reisebyråer**:
- **GDS (Global Distribution System)**
- Søk og book fly, hotell, leiebil
- Sanntidspriser
- Eksempler: Amadeus, Sabre, Travelport

**For restauranter og aktiviteter**:
- Bordreservasjon
- Eksempler: BookaBord, OpenTable

**Channel Manager**:
- Synkroniserer tilgjengelighet på tvers av plattformer
- Eks: Booking.com, Airbnb, eget nettsted`,
    },
    {
      id: 'salg-service-vg1-27-text-3',
      type: 'text',
      content: `**Betalingsteknologi**

**Betalingsterminaler**:
- Kortlesere (fysisk kort)
- Kontaktløs betaling (NFC)
- Mobil betaling (Vipps, Apple Pay)

**Online betalinger**:
- Stripe, Klarna, PayPal
- Sikkerhet: SSL, PCI-DSS

**Fremtidens betaling**:
- Biometrisk (fingeravtrykk, ansiktsgjenkjenning)
- Kryptovaluta (Bitcoin, Ethereum)

**Sikkerhet**:
- Kryptering av data
- Tokenisering (skjuler kortnummer)
- 2-faktor autentisering`,
    },
    {
      id: 'salg-service-vg1-27-tip-1',
      type: 'tip',
      title: 'Opplæring',
      content: `Alle systemer krever opplæring. Ta deg tid til å lære systemet grundig - det sparer tid og reduserer feil. De fleste leverandører tilbyr gratis opplæring og support.`,
    },
    {
      id: 'salg-service-vg1-27-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-27-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står POS for, og hva er det?',
        solution: 'POS står for Point of Sale. Det er kassasystemet som registrerer salg, håndterer betaling, oppdaterer lager og genererer rapporter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-27-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-27-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et PMS i hotellbransjen?',
        solution: 'PMS (Property Management System) er et system som håndterer hotellreservasjoner, innsjekking/utsjekking, romstatus og fakturering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-27-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-27-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre fordeler med moderne skybaserte POS-systemer.',
        solution: '1. Sanntidsdata, 2. Tilgang fra mobil/nettbrett, 3. Integrasjon med nettbutikk. Andre riktige svar: Lagerstyring på tvers av butikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-27-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-27-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er et GDS, og hvem bruker det?',
        solution: 'GDS (Global Distribution System) brukes av reisebyråer til å søke og booke fly, hotell og leiebil i sanntid. Eksempler: Amadeus, Sabre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-27-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-27-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre betalingsmåter som brukes i moderne handel.',
        solution: '1. Kort (fysisk og kontaktløst), 2. Vipps, 3. Apple Pay/Google Pay. Andre riktige svar: PayPal, Klarna.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 28: Trender i handel og reiseliv
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_28: TextbookChapter = {
  id: 'salg-service-vg1-28',
  courseId: 'salg-service-vg1',
  chapterNumber: '28',
  title: 'Trender i handel og reiseliv',
  description: 'Fremtidens handel, digitalisering, automatisering, personalisering og nye forbrukertrend.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå fremtidige trender i bransjen',
    'forberede seg på endringer i arbeidsmarkedet',
  ],
  content: [
    {
      id: 'salg-service-vg1-28-intro',
      type: 'text',
      content: `Handel og reiseliv er i rask endring. Teknologi, bærekraft og nye forbrukerpreferanser former fremtidens bransje. Å forstå trendene hjelper deg å være forberedt.`,
    },
    {
      id: 'salg-service-vg1-28-def-1',
      type: 'definition',
      title: 'Trend',
      content: `En trend er en utvikling eller retning som viser hvordan noe endrer seg over tid. Trender påvirker forbruk, teknologi, verdier og forretningsmodeller.`,
    },
    {
      id: 'salg-service-vg1-28-text-1',
      type: 'text',
      content: `**Digitalisering og teknologi**

**1. Kunstig intelligens (AI)**
- Chatbots for kundeservice
- Personaliserte anbefalinger
- Prediktiv analyse (forutsi etterspørsel)
- Dynamisk prising

**2. Automatisering**
- Selvbetjente kasser
- Lagerstyring med roboter
- Automatisert bookingsbekreftelse

**3. Virtuell og augmentert virkelighet (VR/AR)**
- Virtuell hotell-/destinasjonsvisning før booking
- Prøve klær virtuelt
- Interaktive produktdemonstrasjoner

**4. IoT (Internet of Things)**
- Smarte hotellrom (temperatur, lys tilpasser seg)
- Connected devices i butikk`,
    },
    {
      id: 'salg-service-vg1-28-def-2',
      type: 'definition',
      title: 'Opplevelsesøkonomi',
      content: `Opplevelsesøkonomi handler om at forbrukere i økende grad verdsetter opplevelser fremfor materielle ting. I reiseliv og handel skaper dette etterspørsel etter unike, minneverdige opplevelser.`,
    },
    {
      id: 'salg-service-vg1-28-text-2',
      type: 'text',
      content: `**Forbruker- og samfunnstrender**

**1. Bærekraft**
- Forbrukere velger miljøvennlige produkter
- Lokal, økologisk, rettferdig handel
- Sirkulærøkonomi (gjenbruk, reparasjon)
- Klimanøytrale reiser

**2. Opplevelsesøkonomi**
- Folk vil oppleve, ikke bare eie
- Pop-up butikker og events
- Tematiserte hoteller
- Immersive opplevelser

**3. Personalisering**
- Skredders ydde tilbud basert på data
- "Kunden i sentrum"
- 1-til-1 markedsføring

**4. Bekvemmelighet**
- Rask levering (samme dag)
- Abonnementstjenester (mat, klær)
- Seamless omnichannel

**5. Helse og velvære**
- Wellness-turisme
- Sunne produkter
- Mental helse og mindfulness`,
    },
    {
      id: 'salg-service-vg1-28-text-3',
      type: 'text',
      content: `**Fremtidens jobber**

**Nye roller**:
- Data-analytikere
- Digital markedsfører
- Sustainability manager
- Customer Experience Manager
- Drone-leveranse koordinatorer

**Endrede roller**:
- Butikkmedarbeidere: Mer rådgiving, mindre kassa
- Reisekonsulenter: Spesialister, ikke generelle bookere
- Hotellesjonister: Teknologi-kunnskapsrike

**Ferdigheter som trengs**:
- Digital kompetanse
- Kreativitet
- Problemløsning
- Kulturforståelse
- Bærekraftskunnskap
- Tilpasningsevne

**Livslang læring**:
- Bransjen endrer seg raskt
- Videreutdanning og kurs viktig
- Vær nysgjerrig og lær hele tiden`,
    },
    {
      id: 'salg-service-vg1-28-tip-1',
      type: 'tip',
      title: 'Følg med på trender',
      content: `Les bransjepublikasjoner, følg influencere og ledere, delta på messer og konferanser. Det holder deg oppdatert og konkurransedyktig.`,
    },
    {
      id: 'salg-service-vg1-28-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-28-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre teknologitrender i handel og reiseliv.',
        solution: '1. Kunstig intelligens (AI), 2. Automatisering, 3. VR/AR. Andre riktige svar: IoT.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-28-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-28-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er opplevelsesøkonomi?',
        solution: 'At forbrukere verdsetter opplevelser fremfor materielle ting. Dette skaper etterspørsel etter unike, minneverdige opplevelser i reiseliv og handel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-28-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-28-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er bærekraft en viktig trend?',
        solution: 'Forbrukere velger i økende grad miljøvennlige produkter og tjenester. Bedrifter må tilpasse seg for å møte kravene og være konkurransedyktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-28-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-28-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre ferdigheter som vil være viktige i fremtidens handel og reiseliv.',
        solution: '1. Digital kompetanse, 2. Kreativitet, 3. Tilpasningsevne. Andre riktige svar: Kulturforståelse, bærekraftskunnskap, problemløsning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'salg-service-vg1-28-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-28-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan AI brukes i kundeservice?',
        solution: 'Chatbots for å svare på vanlige spørsmål, personaliserte produktanbefalinger, prediktiv analyse for å forutsi kundebehov, og automatisert oppfølging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};
