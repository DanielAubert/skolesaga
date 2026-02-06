/**
 * Salg, service og reiseliv VG1 - Del 5: Reiseliv
 * Kapittel 5.1-5.7
 *
 * Dekker LK20 kompetansemål:
 * - beskrive reiselivsnæringen og gjøre rede for verdiskapingen i næringen
 * - gjøre rede for kjennetegn ved reiselivsprodukter og yrker i reiselivsnæringen
 * - utforske trender og bærekraft i reiselivsnæringen
 * - vurdere hvordan nasjonalt og internasjonalt reiseliv påvirker hverandre
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Reiselivsnæringen i Norge
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_1: TextbookChapter = {
  id: 'salg-service-vg1-5-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.1',
  title: 'Reiselivsnæringen i Norge',
  description: 'En introduksjon til reiselivsnæringen i Norge, dens betydning for norsk okonomi og de ulike delene som utgjor bransjen. Du larer om verdiskapingen og arbeidsplassene i naringen.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive reiselivsnæringen og gjøre rede for verdiskapingen i næringen'],
  content: [
    {
      id: 'salg-service-vg1-5-1-intro',
      type: 'text',
      content: `## Norges voksende reiselivsnæring

Norge er et attraktivt reisemal for turister fra hele verden. Fra nordlyset i nord til fjordene pa Vestlandet, fra vikingarven til moderne byer - Norge har mye a tilby. Reiselivsnæringen er en av Norges raskest voksende naringer og skaper verdier og arbeidsplasser over hele landet.

I dette kapittelet skal du lære:
- Hva reiselivsnæringen omfatter
- Reiselivets betydning for norsk okonomi
- De ulike delene av reiselivsnæringen
- Hvordan verdiskapingen fordeles`,
    },
    {
      id: 'salg-service-vg1-5-1-def-1',
      type: 'definition',
      title: 'Reiselivsnæringen',
      content: `**Reiselivsnæringen** omfatter alle virksomheter som tilbyr varer og tjenester til reisende. Dette inkluderer overnatting, servering, transport, opplevelser, attraksjoner og reisebyraer. Naringen kjennetegnes ved at produktene konsumeres pa stedet og ikke kan lagres.`,
    },
    {
      id: 'salg-service-vg1-5-1-text-1',
      type: 'text',
      content: `### Reiselivets betydning for Norge

**Okonomisk betydning:**
- Reiselivsnæringen omsettet for over 200 milliarder kroner arlig
- Eksportinntekter: Utenlandske turister bringer inn "fersk" valuta
- Skatteinntekter til stat og kommuner
- Ringvirkninger til andre naringer

**Arbeidsplasser:**
- Over 170 000 arbeidsplasser direkte i naringen
- Mange unge far sin forste jobb i reiseliv
- Arbeidsplasser i hele landet, ogsa utenfor storbyene
- Mangfoldig arbeidsstyrke med folk fra mange land

**Distriktsbetydning:**
- Turisme holder liv i mange lokalsamfunn
- Bevaring av kulturarv og tradisjoner
- Bidrar til infrastruktur som ogsa lokalbefolkningen bruker`,
    },
    {
      id: 'salg-service-vg1-5-1-text-2',
      type: 'text',
      content: `### Delene av reiselivsnæringen

**1. Overnatting**
- Hoteller (fra budsjett til luksus)
- Camping og hytter
- Vandrerhjem
- Airbnb og privat utleie

**2. Servering**
- Restauranter og kafeer
- Hurtigmat og gatekjokken
- Barer og puber
- Catering

**3. Transport**
- Fly og flyplasser
- Tog og buss
- Ferger og hurtigbater
- Leiebil og drosje

**4. Opplevelser og attraksjoner**
- Museer og gallerier
- Fornoyelsesparker
- Guidede turer
- Aktiviteter (ski, rafting, etc.)

**5. Reiseformidling**
- Reisebyraer
- Online-plattformer
- Turistinformasjon
- Destinasjonsselskaper`,
    },
    {
      id: 'salg-service-vg1-5-1-def-2',
      type: 'definition',
      title: 'Verdiskaping',
      content: `**Verdiskaping** er den okonomiske verdien som skapes gjennom produksjon av varer og tjenester. I reiselivet maler vi verdiskaping som forskjellen mellom omsetningen og kostnadene til innkjopte varer og tjenester. Verdiskapingen betaler for lonna til ansatte og gir avkastning til eierne.`,
    },
    {
      id: 'salg-service-vg1-5-1-text-3',
      type: 'text',
      content: `### Hvem reiser til Norge?

**Nordmenn pa ferie i eget land:**
- Utgjor storste andelen av reiselivsomsetningen
- Hytteferie, storbyhelger, sommerferier
- Okt interesse for "staycation"

**Turister fra utlandet:**
- Storst andel fra Tyskland, Sverige og USA
- Voksende markeder fra Asia (Kina, Japan)
- Cruiseturister langs kysten
- Forretningsreisende

**Hva trekker turistene?**
- Natur: Fjorder, nordlys, midnattssol
- Aktiviteter: Ski, fotturer, fiske
- Kultur: Vikinghistorie, Munch, arkitektur
- Trygghet og god infrastruktur`,
    },
    {
      id: 'salg-service-vg1-5-1-tip-1',
      type: 'tip',
      title: 'Sesongvariasjoner',
      content: `Reiselivsnæringen i Norge har store sesongvariasjoner. Sommersesongen (juni-august) er travlest for fjordturisme og storbyferie, mens vintersesongen (desember-mars) er høysesong for ski og nordlys. Dette skaper utfordringer med a beholde ansatte hele aret og ha jevn inntekt.`,
    },
    {
      id: 'salg-service-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Verdikjeden i reiselivet',
      problem: 'Hvordan skapes verdier nar en turist besøker Geirangerfjorden?',
      solution: `**En typisk turistreise:**

1. **Bookingen:** Turisten booker gjennom et reisebyra eller nettside (gebyr/provisjon)
2. **Flyturen:** Fly til Oslo, videre til Alesund (flyselskap, flyplassavgifter)
3. **Transport lokalt:** Buss eller leiebil til Geiranger (transportselskap)
4. **Overnatting:** Hotell i Geiranger (overnattingsbedrift)
5. **Mat:** Frokost pa hotellet, lunsj pa cafe, middag pa restaurant (serveringsbedrifter)
6. **Opplevelser:** Fjordcruise, guidet tur, besok pa fjordsenter (opplevelsesleverandorer)
7. **Suvenirer:** Troll, gensere, lokale produkter (butikker)

**Ringvirkninger:**
- Hotellet kjoper mat fra lokale leverandorer
- Guiden har fast jobb i sesongen
- Kommunen far skatteinntekter
- Lokale handverkere selger produkter

Hver del av verdikjeden skaper arbeidsplasser og okonomisk aktivitet.`,
    },
    {
      id: 'salg-service-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner reiselivsprodukter?',
        options: [
          { id: 'a', text: 'De kan lagres til senere salg', isCorrect: false },
          { id: 'b', text: 'De konsumeres pa stedet og kan ikke lagres', isCorrect: true },
          { id: 'c', text: 'De selges bare til utenlandske turister', isCorrect: false },
          { id: 'd', text: 'De er alltid dyrere enn andre produkter', isCorrect: false },
        ],
        solution: 'Reiselivsprodukter kjennetegnes ved at de konsumeres pa stedet og ikke kan lagres. Et tomt hotellrom i natt kan ikke selges i morgen - det er tapt for alltid.',
      },
    },
    {
      id: 'salg-service-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        task: 'Hvorfor er reiselivsnæringen spesielt viktig for distriktene?',
        hints: ['Tenk pa arbeidsplasser og lokale ringvirkninger'],
        solution: 'Reiselivsnæringen skaper arbeidsplasser i hele landet, ogsa utenfor storbyene. Turisme holder liv i lokalsamfunn, bevarer kulturarv og tradisjoner, og bidrar til infrastruktur (veier, flyplasser) som ogsa lokalbefolkningen nyter godt av. Mange distriktsdestinasjoner ville hatt langt færre innbyggere uten turismen.',
      },
    },
    {
      id: 'salg-service-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        task: 'Nevn de fem hoveddelene av reiselivsnæringen og gi et eksempel pa en virksomhet i hver del.',
        solution: '1) Overnatting - f.eks. Scandic Hotels. 2) Servering - f.eks. en lokal restaurant. 3) Transport - f.eks. Norwegian eller Hurtigruten. 4) Opplevelser og attraksjoner - f.eks. Holmenkollen Skisenter eller Vikingskipshuset. 5) Reiseformidling - f.eks. Ving eller Booking.com.',
      },
    },
    {
      id: 'salg-service-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'En familie fra Tyskland planlegger en ukes ferie i Norge. Beskriv minst fem ulike virksomheter i reiselivsnæringen som de vil bruke tjenester fra.',
        solution: '1) Flyselskap (SAS eller Lufthansa for a komme til Norge). 2) Leiebilselskap (Avis, Hertz for a kore rundt). 3) Hotell (overnatting underveis). 4) Restauranter og kafeer (mat). 5) Attraksjon/museum (f.eks. Vikingskipshuset). 6) Guidet tur eller opplevelsesselskap (fjordcruise, brevandring). 7) Turistinformasjon (informasjon og tips). 8) Suvenirbutikker (handkle, gaver).',
      },
    },
    {
      id: 'salg-service-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'Hva er utfordringene med sesongvariasjoner i reiselivet, og hvordan kan destinasjoner motvirke dette?',
        solution: 'Utfordringer: Vanskelig a beholde dyktige ansatte hele aret, ujevne inntekter, kapasitetsproblemer i høysesong og tomme fasiliteter i lavsesong. Losninger: Utvikle aktiviteter for alle arstider (sommerski, vinteropplevelser), konferansemarkedet i lavsesong, pakketilbud og kampanjer utenfor høysesong, samarbeid med reiseoperatorer om helarsturisme.',
      },
    },
    {
      id: 'salg-service-vg1-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Reiselivsnæringen** omfatter overnatting, servering, transport, opplevelser og reiseformidling
- **Økonomisk betydning** med over 200 milliarder i omsetning og 170 000 arbeidsplasser
- **Distriktsbetydning** gjennom arbeidsplasser og bevaring av lokalsamfunn
- **Verdiskaping** skjer i hele verdikjeden fra booking til suvenir

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Reiselivsnæringen | Alle virksomheter som tilbyr tjenester til reisende |
| Verdiskaping | Økonomisk verdi skapt gjennom produksjon |
| Sesongvariasjoner | Forskjeller i aktivitet mellom høy- og lavsesong |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Overnatting og servering
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_2: TextbookChapter = {
  id: 'salg-service-vg1-5-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.2',
  title: 'Overnatting og servering',
  description: 'En grundig gjennomgang av overnattings- og serveringsbransjen som utgjor kjernen i reiselivet. Du larer om ulike typer virksomheter, yrker og trender i disse bransjene.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for kjennetegn ved reiselivsprodukter og yrker i reiselivsnæringen'],
  content: [
    {
      id: 'salg-service-vg1-5-2-intro',
      type: 'text',
      content: `## Vertskap for reisende

Overnatting og servering er de mest synlige delene av reiselivsnæringen. Nar vi reiser, trenger vi et sted a sove og mat a spise. Disse bransjene har lange tradisjoner og er i konstant utvikling for a mote gjestenes forventninger.

I dette kapittelet skal du lære:
- Ulike typer overnattingsbedrifter
- Serveringsbransjens mangfold
- Yrker og karrieremuligheter
- Trender som pager bransjene`,
    },
    {
      id: 'salg-service-vg1-5-2-def-1',
      type: 'definition',
      title: 'Overnattingsbedrift',
      content: `En **overnattingsbedrift** er en virksomhet som tilbyr overnatting mot betaling. Dette kan være hoteller, moteller, pensjonater, vandrerhjem, campingplasser, hytteturlag eller private utleiere. Bedriftene klassifiseres ofte etter stjerner som indikerer standard og tjenesteniva.`,
    },
    {
      id: 'salg-service-vg1-5-2-text-1',
      type: 'text',
      content: `### Typer overnattingsbedrifter

**Hoteller:**
- Fullservice-hoteller (restaurant, bar, konferanse)
- Limited service (kun overnatting og frokost)
- Boutiquehoteller (unikt design, færre rom)
- Kjedehoteller (Scandic, Thon, Nordic Choice)

**Andre overnattingsformer:**
- Vandrerhjem/hostels (rimelig, sosial atmosfære)
- Bed & Breakfast (hjemlig, personlig)
- Campingplasser (hytter, bobil, telt)
- Airbnb og delingsøkonomi
- Glamping (glamorøs camping)

**Spesialiserte konsepter:**
- Spa-hoteller (velvære og behandling)
- Konferansehoteller (møter og arrangementer)
- Resorthoteller (alt-inkludert ferie)
- Ishotell, trehotell, glassiglooer (unike opplevelser)`,
    },
    {
      id: 'salg-service-vg1-5-2-text-2',
      type: 'text',
      content: `### Hotellorganisasjon

**Typiske avdelinger pa et hotell:**

**Resepsjon (Front Office):**
- Innsjekking og utsjekking
- Reservasjoner
- Gjesteservice og informasjon
- Nattevakt

**Housekeeping:**
- Romrengjøring
- Vask og stell av tekstiler
- Fellesomrader
- Minibar-pafylling

**Mat og drikke (F&B):**
- Restaurant
- Bar
- Roomservice
- Bankett/arrangementer

**Administrasjon:**
- Ledelse
- Økonomi
- Salg og markedsforing
- HR/personal`,
    },
    {
      id: 'salg-service-vg1-5-2-def-2',
      type: 'definition',
      title: 'Serveringsbedrift',
      content: `En **serveringsbedrift** er en virksomhet som selger mat og/eller drikke til fortæring pa stedet eller som takeaway. Dette omfatter restauranter, kafeer, barer, kantiner, gatekjøkken og cateringselskaper. Bedriftene ma ha serveringsbevilling fra kommunen.`,
    },
    {
      id: 'salg-service-vg1-5-2-text-3',
      type: 'text',
      content: `### Serveringsbransjens mangfold

**Restauranttyper:**
- Fine dining (høyt prisniva, gourmet)
- Casual dining (uformelt, middels pris)
- Fast casual (rask, men kvalitetsmat)
- Fast food (hurtigmat, standardisert)
- Etniske restauranter (italiensk, thai, etc.)

**Andre serveringskonsepter:**
- Kafeer og konditorier
- Barer og puber
- Gatekjøkken og foodtrucks
- Kantiner og catering
- Bakeri og deli

**Trender i servering:**
- Lokalmat og kortreist
- Vegetarisk og vegansk
- Matopplevelser og storytelling
- Teknologi (bestillingsapper, QR-menyer)
- Ghost kitchens (kun levering)`,
    },
    {
      id: 'salg-service-vg1-5-2-text-4',
      type: 'text',
      content: `### Yrker i overnatting og servering

**Pa hotell:**
| Stilling | Oppgaver |
|----------|----------|
| Resepsjonist | Innsjekking, service, reservasjoner |
| Stuepike/housekeeping | Romrengjøring, orden |
| Kokk | Tilberede mat til restaurant/frokost |
| Servitør | Servere gjester |
| Nattportier | Nattevakt, sikkerhet |
| Hotellsjef | Lede hele hotellet |

**Pa restaurant:**
| Stilling | Oppgaver |
|----------|----------|
| Servitør | Ta imot gjester, servere |
| Kokk | Tilberede maten |
| Kjøkkensjef | Lede kjøkkenet |
| Bartender | Lage drinker, vertskap i bar |
| Hovmester | Lede serveringspersonalet |
| Daglig leder | Drive restauranten |

**Karriereveier:**
- Lærling → fagarbeider → avdelingsleder → leder
- Videreutdanning innen hotelledelse
- Spesialisering (sommelier, barista, etc.)`,
    },
    {
      id: 'salg-service-vg1-5-2-tip-1',
      type: 'tip',
      title: 'Fagbrev i bransjen',
      content: `Det finnes flere fagbrev i overnatting og servering: servitør, kokk, resepsjonist og institusjonskokk. Med fagbrev har du dokumentert kompetanse som gir bedre lønn og karrieremuligheter. Mange starter som ufaglært og tar fagbrev mens de jobber.`,
    },
    {
      id: 'salg-service-vg1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: En dag pa et hotell',
      problem: 'Hvordan ser en typisk dag ut pa et byhotell?',
      solution: `**Morgen (06:00-10:00):**
- Housekeeping starter runden
- Frokostservering apner
- Nattevakten gir rapport til dagvakt
- Utsjekkinger i resepsjonen

**Formiddag (10:00-14:00):**
- Intense romrengjøring (checkout-rom)
- Reservasjonsarbeid
- Forberedelser til arrangementer
- Lunsj i restauranten

**Ettermiddag (14:00-18:00):**
- Innsjekkinger begynner (vanlig fra 15:00)
- Møter og konferanser
- Kveldsskift kommer pa jobb

**Kveld (18:00-23:00):**
- Mange innsjekkinger
- Restauranten har travelt
- Bar og underholdning
- Nattevakt overtar

**Natt (23:00-06:00):**
- Nattresepsjon
- Sikkerhet og service
- Forberedelser til neste dag
- Nattrevisjon (økonomisk oppsummering)`,
    },
    {
      id: 'salg-service-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hvilken avdeling pa et hotell har ansvar for romrengjøring?',
        options: [
          { id: 'a', text: 'Front Office', isCorrect: false },
          { id: 'b', text: 'Housekeeping', isCorrect: true },
          { id: 'c', text: 'F&B', isCorrect: false },
          { id: 'd', text: 'Administrasjon', isCorrect: false },
        ],
        solution: 'Housekeeping-avdelingen har ansvar for romrengjøring, vask av tekstiler og orden pa fellesomrader.',
      },
    },
    {
      id: 'salg-service-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom fine dining og casual dining?',
        hints: ['Tenk pa service, pris og atmosfære'],
        solution: 'Fine dining er eksklusive restauranter med høyt serviceniva, gourmetmat, elegant innredning og høye priser. Casual dining er mer uformelt med middels priser, avslappet atmosfære og enklere service. Eksempel: Maaemo (fine dining) vs. TGI Fridays (casual dining).',
      },
    },
    {
      id: 'salg-service-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        task: 'Beskriv tre ulike typer hoteller og hvem som er typisk malgruppr for hver.',
        solution: '1) Boutiquehotell: Designbevisste reisende som søker unike opplevelser, villige til a betale for særpreg. 2) Vandrerhjem/hostel: Budsjettbevisste reisende, backpackere, studenter som prioriterer pris og sosial atmosfære. 3) Konferansehotell: Bedrifter og organisasjoner som trenger møterom, teknikk og overnatting for deltakere.',
      },
    },
    {
      id: 'salg-service-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Du vil jobbe i hotellbransjen. Beskriv en mulig karrierevei fra start til lederstilling.',
        solution: 'Start som ufaglært i resepsjonen eller housekeeping. Ta fagbrev som resepsjonist gjennom lærlingordning. Fa erfaring som resepsjonist, deretter teamleder. Videreutdanning i hotelledelse (høyskole). Jobb som Front Office Manager (avdelingsleder). Etter flere ars erfaring og gode resultater: Hotellsjef/General Manager.',
      },
    },
    {
      id: 'salg-service-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Nevn fire trender i serveringsbransjen og forklar hvorfor de har oppstatt.',
        solution: '1) Lokalmat og kortreist: Økt miljøbevissthet og ønske om a støtte lokale produsenter. 2) Vegetarisk/vegansk: Klima- og helsehensyn, flere ønsker plantebasert. 3) Ghost kitchens: Økt hjemlevering (særlig etter pandemien), lavere kostnader enn vanlig restaurant. 4) Teknologi (QR-menyer, bestillingsapper): Effektivisering, reduserte kostnader, kundens ønske om enkelhet.',
      },
    },
    {
      id: 'salg-service-vg1-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Overnattingsbedrifter** spenner fra budsjetthotell til luksusresort
- **Hotellorganisasjon** med avdelinger som resepsjon, housekeeping og F&B
- **Serveringsbransjen** omfatter alt fra fine dining til fast food
- **Karrieremuligheter** fra ufaglært til lederstilling med fagbrev og utdanning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Housekeeping | Avdeling for renhold og orden |
| F&B | Food & Beverage - mat og drikke |
| Fine dining | Eksklusive restauranter med høyt serviceniva |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Transport og reiselivsopplevelser
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_3: TextbookChapter = {
  id: 'salg-service-vg1-5-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.3',
  title: 'Transport og reiselivsopplevelser',
  description: 'En oversikt over transportsektoren og opplevelsesnæringen som viktige deler av reiselivet. Du larer om ulike transportformer, attraksjoner og hva som gjor opplevelser minneverdige.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for kjennetegn ved reiselivsprodukter og yrker i reiselivsnæringen'],
  content: [
    {
      id: 'salg-service-vg1-5-3-intro',
      type: 'text',
      content: `## A komme seg dit - og oppleve noe

Transport og opplevelser er to sider av samme mynt i reiselivet. Transporten bringer oss til destinasjonen, mens opplevelsene er ofte selve grunnen til at vi reiser. I dette kapittelet ser vi nærmere pa begge disse viktige delene av næringen.

I dette kapittelet skal du lære:
- Ulike transportformer i reiselivet
- Hva som kjennetegner opplevelsesprodukter
- Attraksjoner og aktiviteter
- Yrker i transport og opplevelser`,
    },
    {
      id: 'salg-service-vg1-5-3-def-1',
      type: 'definition',
      title: 'Reiselivstransport',
      content: `**Reiselivstransport** omfatter alle transportmidler som frakter reisende til, fra og pa destinasjonen. Dette inkluderer fly, tog, buss, ferge, cruiseskip, leiebil og lokale transportmidler. Transporten kan være bade et praktisk behov og en opplevelse i seg selv.`,
    },
    {
      id: 'salg-service-vg1-5-3-text-1',
      type: 'text',
      content: `### Transportformer i reiselivet

**Luftfart:**
- Rutefly (SAS, Norwegian, Widerøe)
- Charterfly (pakkereiser)
- Helikopter (sightseeing, transport)
- Flyplasser som reiseknutepunkt

**Sjøtransport:**
- Ferger (Fjord Line, Color Line)
- Cruiseskip (fra Norge og til Norge)
- Hurtigbater og lokale ferger
- Hurtigruten (transport + opplevelse)

**Landtransport:**
- Tog (Vy, Flytoget, Flambanen)
- Langdistansebuss
- Turbuss og sightseeing
- Leiebil og drosje
- Sykkelutleie`,
    },
    {
      id: 'salg-service-vg1-5-3-text-2',
      type: 'text',
      content: `### Transport som opplevelse

Noen transportmidler er attraksjoner i seg selv:

**Hurtigruten:**
- "Verdens vakreste sjøreise"
- 34 havner langs norskekysten
- Kombinerer transport og cruise
- Populært blant turister fra hele verden

**Flambanen:**
- En av verdens bratteste jernbaner
- 20 km fra Myrdal til Flam
- 863 meters høydeforskjell
- Over 1 million passasjerer arlig

**Bergensbanen:**
- Oslo-Bergen gjennom fjellheimen
- Høyeste punkt: Finse (1222 moh)
- Spektakulære naturopplevelser
- Populær blant turister

**Trollstigen og turistveier:**
- 18 Nasjonale turistveier
- Kjøreturen som attraksjon
- Arkitektur og utsiktspunkter`,
    },
    {
      id: 'salg-service-vg1-5-3-def-2',
      type: 'definition',
      title: 'Opplevelsesprodukt',
      content: `Et **opplevelsesprodukt** er en tjeneste som gir kunden en minneverdig erfaring. Kjennetegn er at produktet er immaterielt (ikke fysisk), konsumeres i øyeblikket, involverer kundens aktive deltakelse, og skaper emosjonell verdi utover det praktiske.`,
    },
    {
      id: 'salg-service-vg1-5-3-text-3',
      type: 'text',
      content: `### Opplevelser og attraksjoner

**Natur- og friluftsopplevelser:**
- Fjordcruise og RIB-turer
- Brevandring og fjellklatring
- Ski og vinteraktiviteter
- Nordlyssafari
- Hval- og villmarkssafari

**Kulturelle opplevelser:**
- Museer og gallerier
- Vikingsentre og historiske steder
- Konserter og festivaler
- Lokalmat og matopplevelser
- Samisk kultur

**Aktivitetsbaserte opplevelser:**
- Rafting og kajakkpadling
- Hundekjøring
- Fiske og jakt
- Golf og sykling
- Fornøyelsesparker

**Velvære og rekreasjon:**
- Spa og behandlinger
- Yoga og meditasjon
- Helsetilbud`,
    },
    {
      id: 'salg-service-vg1-5-3-tip-1',
      type: 'tip',
      title: 'Pine og Gilmores opplevelsesøkonomi',
      content: `Forskerne Pine og Gilmore mener vi har gatt fra vareøkonomi via tjenesteøkonomi til opplevelsesøkonomi. Kunder vil ikke bare ha produkter og tjenester - de vil ha minneverdige opplevelser. De beste opplevelsene engasjerer alle sanser og skaper en følelsesmessig forbindelse.`,
    },
    {
      id: 'salg-service-vg1-5-3-text-4',
      type: 'text',
      content: `### Yrker i transport og opplevelser

**Luftfart:**
- Flyvert/flyvertinne (kabinpersonale)
- Pilot
- Bakkemannskap
- Billettselger/kundeservice

**Sjøfart og cruise:**
- Kaptein og offiserer
- Matros
- Cruisevert
- Underholdning og aktiviteter

**Guiding og opplevelser:**
- Reiseleser og guide
- Naturguide (bre, fjell, villmark)
- Aktivitetsleder (rafting, ski, etc.)
- Museumsvert

**Transport pa land:**
- Bussjafør
- Togfører
- Turistbussjafør (sjafør + guide)
- Bilutleieansatt`,
    },
    {
      id: 'salg-service-vg1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Opplevelsesdesign',
      problem: 'Hvordan kan et fjordcruise designes som en komplett opplevelse?',
      solution: `**Før turen:**
- Online booking med forventningsbygging
- Informasjon om hva man vil se
- Tips om pakleding og forberedelser

**Pa kaia:**
- Velkomst og innsjekking
- Sikkerhetsinformasjon
- Forventningsbygging ("I dag skal vi...")

**Under turen:**
- Guiding med historier og fakta
- Stopp ved severdigheter
- Mulighet for fotografering
- Mat og drikke om bord
- Interaksjon med kaptein/mannskap

**Høydepunkter:**
- Seilas helt inn til fossen
- Møte med sel eller ørn
- Musikalsk innslag
- Lokal mat (brunost, spekemat)

**Etter turen:**
- Takk for turen og invitasjon tilbake
- Fotolenke eller suvenir
- Oppfordring til a dele pa sosiale medier
- Mulighet for tilbakemelding`,
    },
    {
      id: 'salg-service-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et opplevelsesprodukt?',
        options: [
          { id: 'a', text: 'Det kan lagres og selges senere', isCorrect: false },
          { id: 'b', text: 'Det er immaterielt og skaper emosjonell verdi', isCorrect: true },
          { id: 'c', text: 'Det er alltid utendørs', isCorrect: false },
          { id: 'd', text: 'Det krever ingen aktiv deltakelse', isCorrect: false },
        ],
        solution: 'Opplevelsesprodukter er immaterielle, konsumeres i øyeblikket, involverer kundens aktive deltakelse, og skaper emosjonell verdi utover det praktiske.',
      },
    },
    {
      id: 'salg-service-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        task: 'Hvordan kan transport være en opplevelse i seg selv? Gi et eksempel.',
        hints: ['Tenk pa ikoniske norske transportmidler'],
        solution: 'Transport blir en opplevelse nar selve reisen gir verdi utover a komme fra A til B. Eksempel: Hurtigruten kombinerer transport langs kysten med spektakulær natur, havn-til-havn-opplevelser, god mat og kulturformidling. Flambanen gir passasjerene naturopplevelser gjennom bratt fjellterreng med fosser og utsiktspunkter.',
      },
    },
    {
      id: 'salg-service-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        task: 'Nevn tre naturopplevelser og tre kulturelle opplevelser man kan tilby turister i Norge.',
        solution: 'Naturopplevelser: 1) Brevandring pa Jostedalsbreen. 2) Nordlyssafari i Tromsø. 3) Fjordcruise i Geirangerfjorden. Kulturelle opplevelser: 1) Vikingskipshuset i Oslo. 2) Besøk i samisk reindriftsleir. 3) Matopplevelse med lokal sjømat og tradisjonell norsk mat.',
      },
    },
    {
      id: 'salg-service-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Du skal planlegge en dagstur for turister. Velg en aktivitet og beskriv hvordan du ville designet opplevelsen fra start til slutt.',
        solution: 'Eksempel: Kajakktur i fjorden. For: Booking med informasjon om hva man trenger, spenningsoppbygging. Oppstart: Møte pa kaia, introduksjon av guide, sikkerhetsbriefing, utstyr. Underveis: Padling med guiding om natur og historie, stopp for fotografering, pause med lokal mat pa en strand. Høydepunkt: Padle inn til en foss eller grotte. Avslutning: Tilbake til utgangspunktet, takk for turen, deling av bilder, tilbakemeldingsskjema.',
      },
    },
    {
      id: 'salg-service-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'Hvilke egenskaper bør en god reiseguide ha?',
        solution: 'En god reiseguide bør ha: 1) Kunnskap om omradet (historie, natur, kultur). 2) Kommunikasjonsevner (fortelle engasjerende, tilpasse til gruppen). 3) Sprakferdigheter (minst engelsk, gjerne flere). 4) Serviceinnstilling (fleksibel, hjelpsom). 5) Sikkerhetskompetanse (førstehjelp, risikovurdering). 6) Fysisk form (utendørsguiding). 7) Entusiasme og positiv energi.',
      },
    },
    {
      id: 'salg-service-vg1-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Transport i reiselivet** omfatter fly, tog, buss, bater og leiebil
- **Transport som opplevelse** gjennom Hurtigruten, Flambanen og turistveier
- **Opplevelsesprodukter** er immaterielle og skaper emosjonell verdi
- **Mange yrkesmuligheter** som guide, flyvert, turistbussjafør m.m.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Opplevelsesprodukt | Tjeneste som gir minneverdig erfaring |
| Opplevelsesøkonomi | Økonomisk fokus pa opplevelser over varer |
| Guide | Person som leder og informerer turister |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Bærekraftig reiseliv
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_4: TextbookChapter = {
  id: 'salg-service-vg1-5-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.4',
  title: 'Bærekraftig reiseliv',
  description: 'Hvordan reiselivsnæringen kan utvikles pa en bærekraftig mate som tar hensyn til miljø, lokalsamfunn og okonomi. Du larer om utfordringer og losninger for et mer ansvarlig reiseliv.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske trender og bærekraft i reiselivsnæringen'],
  content: [
    {
      id: 'salg-service-vg1-5-4-intro',
      type: 'text',
      content: `## Reiseliv for fremtiden

Turisme kan være bade en velsignelse og en forbannelse. Pa sitt beste skaper reiseliv arbeidsplasser, bevarer kultur og gir mennesker unike opplevelser. Pa sitt verste forurenser det miljøet, ødelegger lokalsamfunn og tømmer ressurser. Bærekraftig reiseliv handler om a finne balansen.

I dette kapittelet skal du lære:
- Hva bærekraftig reiseliv betyr
- Miljøutfordringer i reiselivsnæringen
- Sosiale og økonomiske hensyn
- Tiltak for et mer bærekraftig reiseliv`,
    },
    {
      id: 'salg-service-vg1-5-4-def-1',
      type: 'definition',
      title: 'Bærekraftig reiseliv',
      content: `**Bærekraftig reiseliv** er turisme som tar hensyn til dagens og fremtidens økonomiske, sosiale og miljømessige konsekvenser. Det handler om a møte behovene til turister, næring og lokalsamfunn uten a ødelegge mulighetene for fremtidige generasjoner.`,
    },
    {
      id: 'salg-service-vg1-5-4-text-1',
      type: 'text',
      content: `### De tre dimensjonene av bærekraft

**1. Miljømessig bærekraft:**
- Redusere klimagassutslipp
- Bevare natur og biologisk mangfold
- Minimere avfall og forurensning
- Bruke ressurser forsvarlig

**2. Sosial bærekraft:**
- Respektere lokal kultur og tradisjoner
- Fordele goder rettferdig
- Unnga overturisme
- Sikre gode arbeidsforhold

**3. Økonomisk bærekraft:**
- Skape langsiktig lønnsomhet
- La verdiene bli i lokalsamfunnet
- Helarsarbeidsplasser
- Investere i infrastruktur`,
    },
    {
      id: 'salg-service-vg1-5-4-text-2',
      type: 'text',
      content: `### Miljøutfordringer

**Klimagassutslipp:**
- Flyreiser star for en stor andel
- Cruiseskip forurenser mye
- Bilturisme oker utslipp
- Energibruk i hoteller

**Naturpavirkning:**
- Slitasje pa populære steder
- Forsøpling
- Forstyrrelse av dyreliv
- Ødeleggelse av sarte omrader

**Ressursforbruk:**
- Høyt vannforbruk pa hoteller
- Matsvinn i restauranter
- Engangsplast
- Energikrevende fasiliteter

**Overturisme:**
- For mange turister pa samme sted
- Køer og trangt om plassen
- Slitasje pa infrastruktur
- Negativ opplevelse for alle`,
    },
    {
      id: 'salg-service-vg1-5-4-warning-1',
      type: 'warning',
      title: 'Overturisme i Norge',
      content: `Steder som Trolltunga, Preikestolen og Geirangerfjorden opplever perioder med overturisme. Konsekvensene er slitasje pa naturen, redusert opplevelseskvalitet, fare for ulykker og frustrasjon i lokalsamfunnet. Regulering og spredning av turister er nødvendig.`,
    },
    {
      id: 'salg-service-vg1-5-4-text-3',
      type: 'text',
      content: `### Tiltak for bærekraftig reiseliv

**Pa destinasjonsniva:**
- Besøksforvaltning (begrense antall)
- Sesongutjevning
- Utvikling av alternative attraksjoner
- Miljøsertifisering

**Pa bedriftsniva:**
- Energieffektivisering
- Kildesortering og gjenbruk
- Lokal mat og leverandører
- Miljøsertifisering (Svanemerket, Green Key)

**For den reisende:**
- Velge miljøvennlig transport
- Bo pa miljøsertifiserte hoteller
- Respektere lokale regler
- Støtte lokal økonomi

**Sertifiseringsordninger:**
- Sustainable Destination (nasjonal merking)
- Green Key (hoteller)
- Eco-Lighthouse (virksomheter)
- Blue Flag (strender og marinaer)`,
    },
    {
      id: 'salg-service-vg1-5-4-def-2',
      type: 'definition',
      title: 'Overturisme',
      content: `**Overturisme** oppstar nar et omrade mottar flere turister enn det taler. Konsekvensene er negativ pavirkning pa miljø, infrastruktur, lokalbefolkning og selve turistopplevelsen. Eksempler er Venice, Barcelona og i Norge steder som Trolltunga i høysesong.`,
    },
    {
      id: 'salg-service-vg1-5-4-text-4',
      type: 'text',
      content: `### Norge som bærekraftig reisemal

**Norges strategi:**
- "Hele Norge - hele aret" (spre turisme)
- Bærekraftsmerking av destinasjoner
- Elektriske ferger og hurtigbater
- Nullutslipps fjorder (krav fra 2026)

**Gode eksempler:**
- Svalbard: Strenge regler for ferdsel
- Røros: Bærekraftig kulturturisme
- Lyngen: Ansvarlig skikjøring
- Lofoten: Sesongregulering pa fiske

**Utfordringer som gjenstår:**
- Redusere flyavhengighet
- Regulere cruisetrafikk
- Handtere sesongtopper
- Balansere vekst og vern`,
    },
    {
      id: 'salg-service-vg1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Bærekraftig hotell',
      problem: 'Hvordan kan et hotell bli mer bærekraftig?',
      solution: `**Energi:**
- LED-belysning
- Varmepumper
- Solceller pa taket
- Nøkkelbrikke som styrer strøm pa rommet

**Vann:**
- Vannbesparende dusjhoder
- Oppmuntre gjester til a gjenbruke handklær
- Regnvannsoppsamling til vanning

**Avfall:**
- Kildesortering for gjester og ansatte
- Donere overskuddsmat
- Fjerne engangsplast
- Gjenbrukbare dispensere for sape etc.

**Mat:**
- Lokale leverandører
- Sesongbaserte menyer
- Vegetariske alternativer
- Minimere matsvinn

**Sertifisering:**
- Svanemerket eller Green Key
- Dokumentere forbedringer
- Kommunisere til gjester

**Resultat:** Lavere kostnader, bedre omdømme, tilfredse gjester som bryr seg om miljø.`,
    },
    {
      id: 'salg-service-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hvilke tre dimensjoner omfatter bærekraftig reiseliv?',
        options: [
          { id: 'a', text: 'Transport, overnatting og servering', isCorrect: false },
          { id: 'b', text: 'Miljømessig, sosial og økonomisk', isCorrect: true },
          { id: 'c', text: 'Lokal, nasjonal og internasjonal', isCorrect: false },
          { id: 'd', text: 'Natur, kultur og opplevelser', isCorrect: false },
        ],
        solution: 'Bærekraftig reiseliv omfatter miljømessig bærekraft (natur og klima), sosial bærekraft (mennesker og samfunn) og økonomisk bærekraft (langsiktig lønnsomhet).',
      },
    },
    {
      id: 'salg-service-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        task: 'Hva er overturisme, og hva er konsekvensene?',
        hints: ['Tenk pa populære turiststeder'],
        solution: 'Overturisme oppstar nar et omrade mottar flere turister enn det taler. Konsekvensene er slitasje pa natur og bygninger, forverret opplevelse for turistene, stress for lokalbefolkningen, press pa infrastruktur (vann, avløp, veier), og økende priser som presser ut lokalbefolkning.',
      },
    },
    {
      id: 'salg-service-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        task: 'Nevn tre miljøutfordringer i reiselivsnæringen og foreslå tiltak for hver.',
        solution: '1) Flyutslipp - Tiltak: Støtte utviklingen av kortbanenettet med elfly, tilby togpakker, kompensere utslipp. 2) Overturisme - Tiltak: Tidsbegrensede billetter, spre turister til alternative steder, sesongpris. 3) Plastforurensning - Tiltak: Fjerne engangsplast, tilby vannflaskefylling, bruke nedbrytbare materialer.',
      },
    },
    {
      id: 'salg-service-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'Hvordan kan en turist selv bidra til mer bærekraftig reiseliv?',
        solution: '1) Velge tog eller buss fremfor fly nar mulig. 2) Bo pa miljøsertifiserte hoteller. 3) Spise lokal mat og støtte lokale bedrifter. 4) Respektere naturen (ikke forsøple, følge stier). 5) Reise i lavsesong for a unnga overturisme. 6) Lære om og respektere lokal kultur. 7) Bruke mindre engangsplast (gjenbrukbar vannflaske). 8) Velge ansvarlige turoperatører.',
      },
    },
    {
      id: 'salg-service-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Hva betyr det at Norge skal ha "nullutslipps fjorder" fra 2026?',
        solution: 'Fra 2026 vil verdensarvfjordene (Geirangerfjorden og Nærøyfjorden) kreve at skip bruker nullutslippsteknologi (elektrisk, hydrogen eller liknende). Cruiseskip og ferger ma oppgraderes eller bruke landstrøm. Malet er a beskytte den unike naturen mot forurensning fra skipstrafikk, bade luftutslipp og utslipp til sjø.',
      },
    },
    {
      id: 'salg-service-vg1-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraftig reiseliv** balanserer miljø, sosiale og økonomiske hensyn
- **Miljøutfordringer** inkluderer utslipp, slitasje og overturisme
- **Tiltak** pa destinasjons-, bedrifts- og individniva
- **Sertifiseringer** som Svanemerket og Green Key dokumenterer bærekraft

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bærekraftig reiseliv | Turisme som tar langsiktige hensyn |
| Overturisme | For mange turister pa ett sted |
| Miljøsertifisering | Dokumentasjon av miljøtiltak |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Internasjonalt reiseliv og trender
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_5: TextbookChapter = {
  id: 'salg-service-vg1-5-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.5',
  title: 'Internasjonalt reiseliv og trender',
  description: 'En oversikt over det globale reiselivet og hvordan internasjonale trender pager norsk reiseliv. Du larer om viktige reiselivstrender og hvordan Norge posisjonerer seg i det globale markedet.',
  estimatedMinutes: 40,
  competenceGoals: ['vurdere hvordan nasjonalt og internasjonalt reiseliv påvirker hverandre'],
  content: [
    {
      id: 'salg-service-vg1-5-5-intro',
      type: 'text',
      content: `## En verden i bevegelse

Turisme er en av verdens største næringer. Milliarder av mennesker reiser hvert ar, og reisemonstre og preferanser endrer seg stadig. For a lykkes i reiselivsnæringen ma man forstå globale trender og hvordan de pagerker lokale markeder.

I dette kapittelet skal du lære:
- Omfanget av internasjonalt reiseliv
- Viktige globale trender
- Hvordan internasjonale trender pagerker Norge
- Norges posisjon i det globale reiselivet`,
    },
    {
      id: 'salg-service-vg1-5-5-def-1',
      type: 'definition',
      title: 'Internasjonal turisme',
      content: `**Internasjonal turisme** omfatter reiser der personer krysser landegrenser for fritid, forretning eller andre formål. FNs verdensorganisasjon for turisme (UNWTO) rapporterer at det arlig er over 1,4 milliarder internasjonale turistankomster globalt (før pandemien).`,
    },
    {
      id: 'salg-service-vg1-5-5-text-1',
      type: 'text',
      content: `### Det globale reiselivet

**Størrelse og vekst:**
- Turisme utgjør ca. 10% av global BNP
- Skaper 1 av 10 arbeidsplasser globalt
- Raskere vekst enn verdensøkonomien
- Midlertidig nedgang under pandemien, men sterk gjeninnhenting

**Største reisemal (før pandemien):**
1. Frankrike (ca. 90 millioner turister)
2. Spania (ca. 84 millioner)
3. USA (ca. 79 millioner)
4. Kina (ca. 66 millioner)
5. Italia (ca. 65 millioner)

**Største avsenderland:**
1. Kina (flest reisende og høyest forbruk)
2. USA
3. Tyskland
4. Storbritannia
5. Frankrike

**Reiseformål globalt:**
- Ferie og fritid: ca. 55%
- Besøk hos venner/familie: ca. 27%
- Forretning: ca. 13%
- Annet: ca. 5%`,
    },
    {
      id: 'salg-service-vg1-5-5-text-2',
      type: 'text',
      content: `### Globale trender i reiselivet

**1. Opplevelsesturisme**
- Fra "sett" til "gjort"
- Autentiske, lokale opplevelser
- Aktiv deltakelse fremfor passiv observasjon

**2. Bærekraftig turisme**
- Økt miljøbevissthet blant reisende
- Etterspørsel etter ansvarlige reisemal
- Klimakompensasjon og grønn transport

**3. Digitalisering**
- Mobil-først booking
- AI-baserte anbefalinger
- Deling pa sosiale medier
- Virtuelle forhåndsvisninger

**4. Personalisering**
- Skreddersydde reiser
- Unike, "Instagram-verdige" opplevelser
- Nisjeturisme (mat, vin, eventyr)

**5. Bleisure**
- Kombinasjon av business og leisure
- Forlengede forretningsreiser
- Fleksibelt arbeid fra feriesteder`,
    },
    {
      id: 'salg-service-vg1-5-5-text-3',
      type: 'text',
      content: `### Norge i det internasjonale reiselivet

**Norges posisjon:**
- Nisjedestinasjon med høy verdi
- Kjent for natur, fjorder, nordlys
- Relativt dyrt sammenliknet med konkurrenter
- Høy kvalitet og sikkerhet

**Viktige markeder for Norge:**
| Land | Kjennetegn |
|------|------------|
| Tyskland | Største utenlandske marked, bobilturister |
| USA | Lang distanse, høy betalingsvilje |
| Storbritannia | Nærmarked, storbyturisme |
| Sverige | Naboland, grensehandel og hytte |
| Kina | Voksende marked, gruppeturisme |

**Trender som pagerker Norge:**
- Økt interesse for natur og villmark
- Nordlysturisme vokser kraftig
- Bærekraftige reisende velger Norge
- Cruiseturisme (muligheter og utfordringer)
- Fjernarbeid fra norske destinasjoner`,
    },
    {
      id: 'salg-service-vg1-5-5-tip-1',
      type: 'tip',
      title: 'Bucketlist-destinasjoner',
      content: `Norge har flere "bucketlist"-attraksjoner som tiltrekker turister fra hele verden: Nordlyset, Trolltunga, Preikestolen, Lofoten og fjordene. Disse ikoniske stedene driver mye av interessen for Norge, men skaper ogsa utfordringer med overturisme i høysesong.`,
    },
    {
      id: 'salg-service-vg1-5-5-text-4',
      type: 'text',
      content: `### Hvordan internasjonale trender pagerker Norge

**Opplevelsesturisme:**
- Norge kan tilby unike naturopplevelser
- Vekst i aktivitetsturisme (ski, kajkk, klatring)
- Kulinariske opplevelser med lokal mat

**Bærekraft:**
- Norge kan posisjonere seg som bærekraftig reisemal
- Elektriske transportmidler
- Strengere miljøkrav pa attraksjoner

**Digitalisering:**
- Norske bedrifter ma være synlige pa internett
- Booking og betaling ma fungere sømløst
- Sosiale medier er viktige for markedsføring

**Sesongutvidelse:**
- Vekst i vinterturisme (nordlys, ski)
- Skuldersesonger blir viktigere
- Behov for helarsarbeidsplasser

**Nye markeder:**
- Asia (Kina, Sør-Korea, Japan) vokser
- Tilpasning til kulturelle forskjeller
- Behov for spraktjenester`,
    },
    {
      id: 'salg-service-vg1-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Tilpasning til asiatiske turister',
      problem: 'Hvordan kan et norsk hotell tilpasse seg kinesiske gjester?',
      solution: `**Booking og betaling:**
- Være synlig pa kinesiske bookingplattformer (Ctrip, Fliggy)
- Akseptere kinesiske betalingsløsninger (Alipay, WeChat Pay)

**Kommunikasjon:**
- Informasjon pa forenklet kinesisk
- Kinesisktalende ansatte eller tolketjeneste
- Tilpasset velkomstinformasjon

**Mat og drikke:**
- Frokost med varme retter (nudler, ris, suppe)
- Kokt vann tilgjengelig
- Forstaelse for spisevaner

**Rom og fasiliteter:**
- Vannkoker pa rommet
- Gratis WiFi er essensielt
- Toalettartikler tilpasset

**Opplevelser:**
- Guidede turer med kinesisktalende guide
- Fotovennlige steder og øyeblikk
- Forstå betydningen av sosiale medier (WeChat, Weibo)

**Resultat:** Høyere gjestetilfredshet, bedre anmeldelser, flere gjester fra et voksende marked.`,
    },
    {
      id: 'salg-service-vg1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hvilket land sender flest turister ut i verden?',
        options: [
          { id: 'a', text: 'USA', isCorrect: false },
          { id: 'b', text: 'Tyskland', isCorrect: false },
          { id: 'c', text: 'Kina', isCorrect: true },
          { id: 'd', text: 'Storbritannia', isCorrect: false },
        ],
        solution: 'Kina er verdens største avsenderland av turister, bade i antall reisende og i pengeforbruk. Dette gjør det til et svært viktig marked for reiselivsdestinasjoner verden over.',
      },
    },
    {
      id: 'salg-service-vg1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        task: 'Hva menes med "opplevelsesturisme" som trend?',
        hints: ['Tenk pa hva turister vil gjøre vs. se'],
        solution: 'Opplevelsesturisme handler om at turister ønsker a aktivt delta og gjøre ting, ikke bare se pa severdigheter. De vil ha autentiske, lokale opplevelser som a lære a lage lokal mat, padle kajakk, ga pa bre eller møte lokalbefolkningen - opplevelser som er unike og minneverdige.',
      },
    },
    {
      id: 'salg-service-vg1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        task: 'Nevn tre globale reiselivstrender og forklar hvordan de pagerker norsk reiseliv.',
        solution: '1) Bærekraft: Norske destinasjoner kan posisjonere seg som miljøvennlige, men ma investere i grønn transport og sertifiseringer. 2) Digitalisering: Norske bedrifter ma være synlige online, ha gode bookingløsninger og utnytte sosiale medier. 3) Opplevelsesturisme: Norge kan tilby unike naturopplevelser som nordlys, brevandring og fjordpadling - ma utvikle produkter som møter etterspørselen.',
      },
    },
    {
      id: 'salg-service-vg1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'Hvorfor er asiatiske markeder (særlig Kina) viktige for norsk reiseliv?',
        solution: 'Kina er verdens største avsenderland av turister med høy betalingsvilje. Den voksende middelklassen i Asia har rad og ønsker a reise til unike destinasjoner. Norge har attraksjoner som tiltrekker (nordlys, fjorder, natur), og asiatiske turister er ofte villige til a betale for kvalitet. Selv om volumet er mindre enn europeiske markeder, er vekstpotensialet stort.',
      },
    },
    {
      id: 'salg-service-vg1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Hva er "bleisure" og hvordan kan norske hoteller utnytte denne trenden?',
        solution: 'Bleisure er kombinasjonen av business (forretning) og leisure (fritid) - reisende som forlenger forretningsreiser med ferie, eller jobber fra feriesteder. Norske hoteller kan: Tilby gode arbeidsforhold (WiFi, kontorplass), pakker som kombinerer konferanse og opplevelser, langtidsovernatting til gunstige priser, og fasiliteter for bade arbeid og avslapping.',
      },
    },
    {
      id: 'salg-service-vg1-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Internasjonal turisme** omfatter over 1,4 milliarder reiser arlig
- **Globale trender** inkluderer opplevelsesturisme, bærekraft og digitalisering
- **Norges posisjon** som nisjedestinasjon med natur og kvalitet
- **Nye markeder** fra Asia krever kulturell tilpasning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Opplevelsesturisme | Fokus pa aktiv deltakelse fremfor passiv observasjon |
| Bleisure | Kombinasjon av business og leisure |
| Avsenderland | Land som sender ut mange turister |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.6: Destinasjonsutvikling
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_6: TextbookChapter = {
  id: 'salg-service-vg1-5-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.6',
  title: 'Destinasjonsutvikling',
  description: 'Hvordan reiselivsdestinasjoner utvikles og forvaltes for å tiltrekke turister og skape verdier. Du lærer om destinasjonsselskaper, samarbeid og planlegging for bærekraftig vekst.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive reiselivsnæringen og gjøre rede for verdiskapingen i næringen'],
  content: [
    {
      id: 'salg-service-vg1-5-6-intro',
      type: 'text',
      content: `## A bygge et reisemal

En destinasjon blir ikke attraktiv av seg selv. Det krever strategisk planlegging, samarbeid mellom mange aktører og langsiktig utvikling. Destinasjonsutvikling handler om a skape et helhetlig og attraktivt tilbud for reisende.

I dette kapittelet skal du lære:
- Hva en destinasjon er
- Hvordan destinasjoner utvikles
- Rollen til destinasjonsselskaper
- Samarbeid og fellessatsinger`,
    },
    {
      id: 'salg-service-vg1-5-6-def-1',
      type: 'definition',
      title: 'Destinasjon',
      content: `En **destinasjon** er et geografisk omrade som turister reiser til og oppholder seg i. Det kan være en by, en region eller et land. En destinasjon omfatter alle elementene turisten opplever: attraksjoner, overnatting, transport, servering, aktiviteter og atmosfære.`,
    },
    {
      id: 'salg-service-vg1-5-6-text-1',
      type: 'text',
      content: `### Elementene i en destinasjon

**Primære attraksjoner:**
- Det som far folk til a reise dit
- Natur, kultur, severdigheter
- "Ankerpunktet" for destinasjonen

**Sekundære tilbud:**
- Overnatting og servering
- Aktiviteter og opplevelser
- Shopping og underholdning

**Infrastruktur:**
- Transport til og pa destinasjonen
- Skilting og informasjon
- Digital infrastruktur (nett, apper)

**Superstruktur:**
- Hoteller og restauranter
- Attraksjonsanlegg
- Konferansefasiliteter

**Vertskap:**
- De som møter turisten
- Servicekultur
- Lokalbefolkningens holdninger`,
    },
    {
      id: 'salg-service-vg1-5-6-def-2',
      type: 'definition',
      title: 'Destinasjonsselskap',
      content: `Et **destinasjonsselskap** er en organisasjon som arbeider for a utvikle og markedsføre en destinasjon. De koordinerer samarbeid mellom reiselivsaktører, markedsfører destinasjonen, utvikler produkter og jobber for a øke besøkstall og verdiskaping.`,
    },
    {
      id: 'salg-service-vg1-5-6-text-2',
      type: 'text',
      content: `### Destinasjonsselskapenes rolle

**Markedsføring:**
- Profilere destinasjonen
- Kampanjer mot utvalgte markeder
- Sosiale medier og digital markedsføring
- Presse og PR

**Produktutvikling:**
- Utvikle nye opplevelser
- Pakke sammen tilbud
- Kvalitetssikring
- Innovasjon og nyskaping

**Koordinering:**
- Samle aktørene
- Felles satsinger
- Informasjonsdeling
- Konflikthåndtering

**Vertskap:**
- Turistinformasjon
- Velkomstprogrammer
- Opplæring av ansatte
- Servicestandarder

**Eksempler pa destinasjonsselskaper:**
- Visit Oslo
- Fjord Norway
- Northern Norway
- Visit Bergen`,
    },
    {
      id: 'salg-service-vg1-5-6-text-3',
      type: 'text',
      content: `### Samarbeid i reiselivet

**Hvorfor samarbeid er viktig:**
- Turisten ser destinasjonen som helhet
- En dårlig opplevelse skader alle
- Felles markedsføring er mer effektivt
- Produktutvikling krever flere aktører

**Former for samarbeid:**

**Horisontalt samarbeid:**
- Mellom konkurrenter (f.eks. flere hoteller)
- Felles markedsføring
- Kapasitetsdeling
- Erfaringsutveksling

**Vertikalt samarbeid:**
- Mellom ledd i verdikjeden
- Hotell + aktivitet + restaurant
- Pakkeløsninger
- Felles booking

**Nettverk og klynger:**
- Innovasjon Norge-støttede klynger
- NCE Tourism (nasjonalt senter)
- Regionale reiselivsklynger`,
    },
    {
      id: 'salg-service-vg1-5-6-tip-1',
      type: 'tip',
      title: 'Coopetition',
      content: `Coopetition er en kombinasjon av cooperation (samarbeid) og competition (konkurranse). I reiselivet konkurrerer bedrifter om gjestene, men samarbeider om å gjøre destinasjonen attraktiv. Hoteller konkurrerer om gjesten, men samarbeider om markedsføring av byen. Alle tjener pa at destinasjonen er populær.`,
    },
    {
      id: 'salg-service-vg1-5-6-text-4',
      type: 'text',
      content: `### Destinasjonsutvikling i praksis

**Steg 1: Analyse**
- Hva har vi? (ressurser, attraksjoner)
- Hvem er gjestene? (målgrupper)
- Hva er styrker og svakheter?
- Hvem er konkurrentene?

**Steg 2: Strategi**
- Hvem ønsker vi a tiltrekke?
- Hvordan skiller vi oss ut?
- Hva er vart løfte til gjesten?
- Hvordan skal vi vokse bærekraftig?

**Steg 3: Tiltak**
- Produktutvikling
- Markedsføring
- Infrastrukturinvesteringer
- Kompetanseheving

**Steg 4: Måling**
- Besøkstall
- Gjestetilfredshet
- Økonomisk verdiskaping
- Bærekraftsindikatorer`,
    },
    {
      id: 'salg-service-vg1-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Lofoten som destinasjon',
      problem: 'Hvordan har Lofoten utviklet seg som reiselivsdestinasjon?',
      solution: `**Primære attraksjoner:**
- Spektakulær natur (fjell, hav, sandstrender)
- Fiskevær og tradisjoner
- Nordlys om vinteren
- Midnattssol om sommeren

**Utvikling over tid:**
- Tradisjonelt: Fiske og småturisme
- 2000-tallet: Økt markedsføring, bedre tilgjengelighet
- 2010-tallet: Eksplosiv vekst, sosiale medier
- Nå: Balanseringsfase, bærekraft i fokus

**Destinasjonsarbeid:**
- Destinasjon Lofoten (destinasjonsselskap)
- Felles profil og markedsføring
- Produktutvikling (opplevelsespakker)
- Arbeid med bærekraft og sesongspredning

**Utfordringer:**
- Overturisme i høysesong
- Press pa infrastruktur (parkering, toaletter)
- Balanse mellom vekst og bevaring
- Helarsarbeidsplasser

**Tiltak:**
- Besøksavgift til noen attraksjoner
- Utvikling av vinterturisme
- Strengere regulering
- Bærekraftsertifisering`,
    },
    {
      id: 'salg-service-vg1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-6-ex-1',
        number: '5.6.1',
        type: 'multiple-choice',
        task: 'Hva er hovedoppgaven til et destinasjonsselskap?',
        options: [
          { id: 'a', text: 'Drive hoteller og restauranter', isCorrect: false },
          { id: 'b', text: 'Utvikle og markedsføre destinasjonen', isCorrect: true },
          { id: 'c', text: 'Bestemme prisene pa overnatting', isCorrect: false },
          { id: 'd', text: 'Ansette alle i reiselivsnæringen', isCorrect: false },
        ],
        solution: 'Destinasjonsselskaper arbeider for a utvikle og markedsføre destinasjonen, koordinere samarbeid og øke verdiskapingen - de driver ikke selv hoteller eller setter priser.',
      },
    },
    {
      id: 'salg-service-vg1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-6-ex-2',
        number: '5.6.2',
        type: 'classic',
        task: 'Hva menes med "coopetition" i reiselivet?',
        hints: ['Kombinasjon av to engelske ord'],
        solution: 'Coopetition er kombinasjonen av cooperation (samarbeid) og competition (konkurranse). I reiselivet betyr det at bedrifter som konkurrerer om gjestene, samtidig samarbeider om a gjøre destinasjonen attraktiv. For eksempel kan hoteller i Oslo konkurrere om gjesten, men samarbeide om a markedsføre Oslo som reisemal.',
      },
    },
    {
      id: 'salg-service-vg1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-6-ex-3',
        number: '5.6.3',
        type: 'classic',
        task: 'Beskriv de fem elementene som utgjør en destinasjon.',
        solution: '1) Primære attraksjoner: Det som far folk til a reise dit (natur, severdigheter). 2) Sekundære tilbud: Overnatting, servering, aktiviteter. 3) Infrastruktur: Transport, skilting, digital infrastruktur. 4) Superstruktur: Bygninger som hoteller, attraksjoner, konferansesenter. 5) Vertskap: Menneskene som møter turisten og servicekulturen.',
      },
    },
    {
      id: 'salg-service-vg1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-6-ex-4',
        number: '5.6.4',
        type: 'classic',
        task: 'Velg en norsk destinasjon du kjenner og beskriv: Hva er den primære attraksjonen, og hvilke sekundære tilbud finnes?',
        solution: 'Eksempel: Bergen. Primær attraksjon: Bryggen (verdensarv), fjellene rundt, "Porten til fjordene". Sekundære tilbud: Fløibanen, Fisketorget, museer (Edvard Grieg, Kunsthall), restauranter med sjømat, hoteller fra budsjett til luksus, konsertscener, shopping i sentrum. Aktiviteter som fjordcruise, fjellvandring, byvandring.',
      },
    },
    {
      id: 'salg-service-vg1-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-6-ex-5',
        number: '5.6.5',
        type: 'classic',
        task: 'Hvorfor er samarbeid viktig i reiselivsnæringen?',
        solution: 'Samarbeid er viktig fordi: 1) Turisten opplever destinasjonen som en helhet - en dårlig opplevelse pagerker hele inntrykket. 2) Felles markedsføring er mer kostnadseffektivt enn at alle gjør det alene. 3) Produkter kan pakkes sammen (hotell + aktivitet + restaurant). 4) Informasjonsdeling gjør alle bedre. 5) Destinasjonen blir mer konkurransedyktig mot andre reisemal.',
      },
    },
    {
      id: 'salg-service-vg1-5-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Destinasjon** er et helhetlig reisemal med flere elementer
- **Destinasjonsselskaper** koordinerer og markedsfører
- **Samarbeid** (coopetition) gjør alle sterkere
- **Utviklingsprosessen** gar fra analyse til strategi til tiltak

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Destinasjon | Geografisk omrade turister besøker |
| Destinasjonsselskap | Organisasjon som utvikler og markedsfører |
| Coopetition | Samtidig samarbeid og konkurranse |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.7: Markedsføring av reiselivsprodukter
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_5_7: TextbookChapter = {
  id: 'salg-service-vg1-5-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '5.7',
  title: 'Markedsføring av reiselivsprodukter',
  description: 'En innføring i hvordan reiselivsprodukter og destinasjoner markedsføres. Du lærer om målgrupper, kanaler og spesielle utfordringer ved å markedsføre tjenester og opplevelser.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske trender og bærekraft i reiselivsnæringen'],
  content: [
    {
      id: 'salg-service-vg1-5-7-intro',
      type: 'text',
      content: `## A selge drømmer

Reiselivsmarkedsføring handler om a selge drømmer og opplevelser. Du kan ikke vise frem produktet pa forhand - kunden ma stole pa at det du lover, blir virkelighet. Dette gjør markedsføring av reiseliv spesielt utfordrende og spennende.

I dette kapittelet skal du lære:
- Særtrekk ved markedsføring av reiselivsprodukter
- Valg av målgrupper og segmentering
- Markedsføringskanaler i reiselivet
- Digital markedsføring og sosiale medier`,
    },
    {
      id: 'salg-service-vg1-5-7-def-1',
      type: 'definition',
      title: 'Reiselivsmarkedsføring',
      content: `**Reiselivsmarkedsføring** er alle aktiviteter som gjøres for a gjøre potensielle gjester oppmerksomme pa et reiselivsprodukt, skape interesse og ønske, og fa dem til a bestille. Det omfatter profilering, annonsering, PR, sosiale medier, salgskampanjer og kundeoppfølging.`,
    },
    {
      id: 'salg-service-vg1-5-7-text-1',
      type: 'text',
      content: `### Særtrekk ved reiselivsmarkedsføring

**Immaterielle produkter:**
- Kan ikke vises eller prøves pa forhand
- Ma bruke bilder, video og historier
- Anmeldelser og anbefalinger er viktige
- Risiko for kjøper (penger først, opplevelse etterpå)

**Produksjon og konsum pa samme sted:**
- Kunden ma komme til produktet
- Transport blir en del av opplevelsen
- Sted og atmosfære er viktige

**Kan ikke lagres:**
- Et tomt rom i natt er tapt for alltid
- Yield management (dynamisk prising)
- Behov for jevn etterspørsel

**Høy involvering:**
- Ferie er viktig for folk
- Mye research før beslutning
- Emosjonell kjøpsprosess`,
    },
    {
      id: 'salg-service-vg1-5-7-text-2',
      type: 'text',
      content: `### Målgrupper og segmentering

**Segmenteringskriterier:**

**Demografisk:**
- Alder (barnefamilier, pensjonister, unge voksne)
- Inntekt (budsjett, luksus)
- Familiesituasjon (par, familier, single)
- Nasjonalitet

**Psykografisk:**
- Verdier (miljøbevisste, opplevelsessøkende)
- Livsstil (aktive, kulturelle, avslappende)
- Interesser (mat, natur, historie)

**Atferdsbasert:**
- Reiseerfaring (førstegangsbesøkende, gjengangere)
- Bookingvaner (tidlig, sist liten)
- Kanaler (online, reisebyrå)

**Formål:**
- Ferie og fritid
- Forretning
- Konferanse og møter
- Besøk hos venner/familie`,
    },
    {
      id: 'salg-service-vg1-5-7-text-3',
      type: 'text',
      content: `### Markedsføringskanaler

**Digitale kanaler:**
- Egen nettside (viktigste kanalen)
- Sosiale medier (Instagram, Facebook, YouTube)
- Søkemotormarkedsføring (Google)
- Epost-markedsføring
- Online reisebyraer (OTAs: Booking.com, Expedia)

**Tradisjonelle kanaler:**
- Reisebyraer og turoperatorer
- Reisemagasiner og aviser
- TV og radio
- Messer og events
- Brosjyrer og kataloger

**PR og opinionspavirkere:**
- Presseturer for journalister
- Influencere og bloggere
- Anmeldelser og omtale
- Sosial bevisføring

**Personlig salg:**
- B2B-salg til bedrifter
- Reisebyrasalg
- Salgsbesøk og presentasjoner`,
    },
    {
      id: 'salg-service-vg1-5-7-def-2',
      type: 'definition',
      title: 'User Generated Content (UGC)',
      content: `**User Generated Content (UGC)** er innhold skapt av brukere selv, ikke av bedriften. I reiselivet betyr dette bilder, videoer, anmeldelser og innlegg som turister deler. UGC er svært verdifullt fordi potensielle gjester stoler mer på andre turisters opplevelser enn pa markedsføring.`,
    },
    {
      id: 'salg-service-vg1-5-7-text-4',
      type: 'text',
      content: `### Digital markedsføring og sosiale medier

**Nettsted:**
- Førsteinntrykket for mange
- Ma være mobilvennlig
- Inspirerende bilder og innhold
- Enkel booking

**Sosiale medier:**
| Plattform | Bruk i reiseliv |
|-----------|-----------------|
| Instagram | Bilder, stories, reels, inspirasjon |
| Facebook | Lengre innhold, events, kundeservice |
| YouTube | Videoer, destinasjonspresentasjoner |
| TikTok | Korte videoer, yngre malggruppe |
| Pinterest | Inspirasjon, reiseplanlegging |

**Søkemotoroptimalisering (SEO):**
- Være synlig nar folk søker
- Riktige nøkkelord
- Godt innhold
- Teknisk optimalisering

**Annonsering:**
- Google Ads (betalt søk)
- Facebook/Instagram Ads
- Programmatic (automatisert bannerannonsering)
- Retargeting (følge opp besøkende)`,
    },
    {
      id: 'salg-service-vg1-5-7-tip-1',
      type: 'tip',
      title: 'Bildet selger drømmen',
      content: `I reiselivsmarkedsføring er bilder og video helt essensielt. Et fantastisk bilde av midnattssolen over Lofoten eller nordlyset over Tromsø kan gjøre mer for salget enn tusen ord. Invester i profesjonelle bilder og oppmuntre gjester til a dele sine egne (med tillatelse).`,
    },
    {
      id: 'salg-service-vg1-5-7-example-1',
      type: 'example',
      title: 'Eksempel: Digital markedsføringskampanje',
      problem: 'Et lite hotell i Lofoten vil tiltrekke flere gjester utenfor høysesongen.',
      solution: `**Mål:**
- Øke belegget i mars-april (nordlys + start pa vintersesongen for vandring)
- Målgruppe: Par 35-55 ar, naturinteresserte, Tyskland og UK

**Strategi:**

**1. Innhold:**
- Blogginnlegg: "Nordlys og midnattssol - varen i Lofoten"
- Video: Gjesteopplevelser fra mars
- Bilder: Spesielle lysforhold, ro, fravær av folkemasser

**2. Kanaler:**
- Instagram: Daglige bilder og stories
- Facebook: Lengre artikler, events
- Google Ads: "Lofoten spring" + lignende søkeord
- Epost: Nyhetsbrev til tidligere gjester

**3. Tiltak:**
- "Early bird"-tilbud med 15% rabatt
- Pakke med overnatting + nordlyssafari
- Samarbeid med lokal matopplevelse

**4. Influencersamarbeid:**
- Invitere reiseblogger fra målmarkedet
- Innhold deles pa begges kanaler

**5. Oppfølging:**
- Måle bookinger fra kampanjen
- Samle gjesteanmeldelser
- Justere for neste sesong`,
    },
    {
      id: 'salg-service-vg1-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-7-ex-1',
        number: '5.7.1',
        type: 'multiple-choice',
        task: 'Hvorfor er anmeldelser og anbefalinger spesielt viktige i reiselivsmarkedsføring?',
        options: [
          { id: 'a', text: 'Fordi de er gratis', isCorrect: false },
          { id: 'b', text: 'Fordi produktet ikke kan prøves på forhånd', isCorrect: true },
          { id: 'c', text: 'Fordi andre kanaler ikke fungerer', isCorrect: false },
          { id: 'd', text: 'Fordi det er lovpålagt', isCorrect: false },
        ],
        solution: 'Fordi reiselivsprodukter er immaterielle og ikke kan prøves pa forhand, stoler potensielle gjester pa andres erfaringer. Anmeldelser og anbefalinger gir sosial bevisføring og reduserer opplevd risiko.',
      },
    },
    {
      id: 'salg-service-vg1-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-7-ex-2',
        number: '5.7.2',
        type: 'classic',
        task: 'Hva er User Generated Content (UGC) og hvorfor er det verdifullt?',
        hints: ['Tenk pa bilder og anmeldelser fra gjester'],
        solution: 'User Generated Content er innhold skapt av gjester selv, som bilder, videoer og anmeldelser. Det er verdifullt fordi potensielle gjester stoler mer pa andre turisters ærlige opplevelser enn pa bedriftens egen markedsføring. UGC er ogsa gratis og gir autentisk innhold.',
      },
    },
    {
      id: 'salg-service-vg1-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-7-ex-3',
        number: '5.7.3',
        type: 'classic',
        task: 'Velg et reiselivsprodukt (hotell, attraksjon, aktivitet) og beskriv tre målgrupper det kunne rette seg mot.',
        solution: 'Eksempel: Fjordcruise i Geirangerfjorden. Målgruppe 1: Eldre par fra USA - høy betalingsvilje, ønsker komfortabel opplevelse med god guiding. Målgruppe 2: Barnefamilier fra Norge - ønsker aktivitet alle kan delta pa, rimelig pris, familievennlig. Målgruppe 3: Fotografer/influencere - ønsker unike fotomuligheter, tidlig morgen eller sen kveld, villige til a betale for eksklusive opplevelser.',
      },
    },
    {
      id: 'salg-service-vg1-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-7-ex-4',
        number: '5.7.4',
        type: 'classic',
        task: 'Hvilke sosiale medier passer best til ulike formål i reiselivsmarkedsføring?',
        solution: 'Instagram: Best for visuell inspirasjon, vakre bilder, stories og reels - appelerer til yngre og middelaldrende. YouTube: Lengre videoer, destinasjonspresentasjoner, "en dag i"-formater. Facebook: Lengre tekster, events, kundeservice, eldre målgruppe. TikTok: Korte, engasjerende videoer, yngre målgruppe (under 30). Pinterest: Reiseplanlegging, inspirasjon, pakkelister - mye brukt av kvinner.',
      },
    },
    {
      id: 'salg-service-vg1-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-5-7-ex-5',
        number: '5.7.5',
        type: 'classic',
        task: 'Lag en enkel markedsføringsplan for et fiktivt opplevelsesprodukt (f.eks. nordlyssafari, kajakktur, matopplevelse).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv produktet kort',
            solution: 'Eksempel: "Nordlyssafari med samisk lavvobesøk" - 4 timers tur med nordlysjakt, historier og varm mat i lavvo.',
          },
          {
            label: 'b',
            task: 'Definer målgruppen',
            solution: 'Internasjonale turister 30-60 ar, høy betalingsvilje, interessert i natur og kultur, reiser til Nord-Norge om vinteren.',
          },
          {
            label: 'c',
            task: 'Velg tre markedsføringskanaler og begrunn',
            solution: '1) Instagram for visuelle opplevelser og UGC fra gjester. 2) TripAdvisor for anmeldelser og troverdighet. 3) Samarbeid med hoteller i omradet for pakkeløsninger.',
          },
        ],
        solution: 'En god markedsføringsplan starter med a forstå produktet og målgruppen, deretter velge kanaler som nar denne målgruppen effektivt.',
      },
    },
    {
      id: 'salg-service-vg1-5-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Reiselivsprodukter** er immaterielle og ma selges gjennom bilder og historier
- **Segmentering** hjelper a na rett målgruppe med rett budskap
- **Digitale kanaler** som nettside og sosiale medier er essensielle
- **UGC og anmeldelser** skaper troverdighet og sosial bevisføring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Segmentering | Dele markedet i målgrupper |
| UGC | Innhold skapt av brukere/gjester |
| SEO | Søkemotoroptimalisering |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL5_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_5_1,
  CHAPTER_SALG_SERVICE_VG1_5_2,
  CHAPTER_SALG_SERVICE_VG1_5_3,
  CHAPTER_SALG_SERVICE_VG1_5_4,
  CHAPTER_SALG_SERVICE_VG1_5_5,
  CHAPTER_SALG_SERVICE_VG1_5_6,
  CHAPTER_SALG_SERVICE_VG1_5_7,
];
