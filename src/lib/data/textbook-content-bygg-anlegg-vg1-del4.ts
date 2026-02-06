/* eslint-disable */
// @ts-nocheck
/**
 * Bygg- og anleggsteknikk VG1 - Del 4 (Kapittel 26-30)
 * Dekker LK20 kompetansemål
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 26: Kulturminner og byggevern
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_26: TextbookChapter = {
  id: 'bygg-anlegg-vg1-26',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '26',
  title: 'Kulturminner og byggevern',
  description: 'Vern av kulturminner, tradisjonelt håndverk og norsk byggeskikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og presentere kjennetegn ved kulturarv og byggeskikk',
  ],
  sections: [
    {
      title: 'Kulturminner og vern',
      content: `## Kulturminner og vern

Kulturminner er fysiske spor etter menneskers liv og virke. Bygninger kan være viktige kulturminner.

**Hva er et kulturminne?**
Alle spor etter menneskelig virksomhet i vårt fysiske miljø, inkludert:
- Bygninger og anlegg
- Kulturlandskap
- Arkeologiske funn
- Tekniske og industrielle anlegg

**Vernekategorier:**

**Fredning**
Sterkeste form for vern. Vedtatt etter kulturminneloven. Alle endringer krever tillatelse fra Riksantikvaren.

**Vern etter plan- og bygningsloven**
Kommunen kan vedta vern i reguleringsplan. Gir føringer for hva som kan gjøres.

**Listeføring**
Bygning er registrert i SEFRAK eller annen database. Ikke formelt vernet, men signal om verneverdi.

**Verneverdi vurderes etter:**
- Alder
- Autentisitet (grad av opprinnelighet)
- Representativitet (typisk for sin tid/sted)
- Arkitektonisk kvalitet
- Historisk betydning
- Miljøverdi (sammenheng med omgivelser)

**Håndverkernes ansvar:**
Som håndverker må du:
- Kjenne til om bygget har vernestatus
- Følge retningslinjer for antikvarisk arbeid
- Bruke riktige materialer og metoder
- Dokumentere arbeidet
- Varsle ved funn av ukjente kulturminner`,
    },
    {
      title: 'Norsk byggeskikk',
      content: `## Norsk byggeskikk

Norge har en rik byggeskikk formet av klima, materialer og tradisjon.

**Trebygging:**

**Laft**
Den eldste norske byggemetoden. Tømmerstokker som legges horisontalt og laftes (hakkes) sammen i hjørnene.

Typer lafteverk:
- Findalslaft: Enklest, tømmer stikker ut
- Kinningslaft: Profilert, estetisk
- Sinknov: Skjult, ingen utstikkende ender

**Stavbygg**
Vertikale stolper som bærer, horisontale sviller og stavlegjer. Stavkirkene er verdensberømte eksempler.

**Grindverk**
Byggesystem med bærende bukker (grinder) som bærer tak. Vanlig i vestnorske våningshus.

**Bindingsverk**
Rammeverk av stolper og bjelker, fylt med tegl, stein eller leirvegger. Vanlig i byer på 1700-1800-tallet.

**Regionale særtrekk:**

**Vestlandet:**
- Hvitmalte trehus
- Høye, smale vinduer
- Grindbygg i tunet

**Østlandet:**
- Laftede gårder
- Rødmalte uthus
- Symmetriske hovedbygg

**Nord-Norge:**
- Nordlandshus med torv på tak
- Rorbuer langs kysten
- Tilpasning til ekstreme forhold

**Trøndelag:**
- Store laftegårder
- Trønderlån (lang bygning)
- Svalganger`,
    },
    {
      title: 'Antikvarisk arbeid',
      content: `## Antikvarisk arbeid

Arbeid på vernede og bevaringsverdige bygninger krever spesiell kompetanse.

**Prinsipper for antikvarisk arbeid:**

**Minste inngrep**
Gjør bare det som er nødvendig. Bevar mest mulig originalt materiale.

**Reversibilitet**
Tiltak bør kunne tilbakeføres. Unngå irreversible endringer.

**Autentisitet**
Bevar bygningens opprinnelige karakter. Nye deler skal kunne identifiseres som nye.

**Dokumentasjon**
Dokumenter tilstand før, under og etter arbeidet.

**Materialvalg:**
Bruk materialer som:
- Er like de originale
- Er kompatible med eksisterende materialer
- Ikke skader originale deler
- Er reversible om mulig

**Eksempler:**
- Kalkmaling på kalkpuss (ikke plastmaling)
- Linolje på treverk (ikke alkydmaling)
- Smidd beslag (ikke støpt)
- Håndstrøket tegl (ikke maskinstein)

**Tradisjonelle metoder:**
- Bruk av håndverktøy
- Tradisjonelle teknikker (lafting, smiing)
- Originale festemidler
- Håndverkskunnskap fra eldre tider

**Samarbeid:**
Ved arbeid på vernede bygg, samarbeid med:
- Riksantikvaren
- Fylkeskonservator
- Byantikvaren
- Museum med bygningsvern`,
    },
    {
      title: 'Tradisjonelt håndverk',
      content: `## Tradisjonelt håndverk

Tradisjonelle håndverksteknikker er viktige for bevaring av kulturminner.

**Tømmermannsarbeid:**

**Lafting:**
- Øksearbeid for forming
- Meding (merking) av stokker
- Novhugging (hjørner)
- Tilpasning med bile

**Verktøy:**
- Bredbile (flathogge)
- Skottbile (finarbeid)
- Økser og tverrøks
- Tømmermannspassere
- Snorslag

**Murerarbeid:**

**Tradisjonell mørtel:**
- Kalkmørtel (kalk, sand, vann)
- Langsom herding
- Fleksibel, "puster"
- Må ikke blandes med sement

**Fugemetoder:**
- Fuktet fuge
- Forsenket fuge
- Skrå fuge
- Profilfuge

**Malerarbeid:**

**Tradisjonelle malinger:**
- Linolje (utvendig tre)
- Kalkmaling (mur)
- Limfarge (innvendig)
- Komposisjonsmaling (staffasje)

**Overflatebehandling:**
- Grundig rengjøring
- Skraping av løs maling
- Grunning med tynnere olje
- Flere tynne strøk

**Blikkenslagerarbeid:**
- Falsing og lodding
- Kobber og sink
- Håndformede beslag
- Renner og nedløp`,
    },
    {
      title: 'Eksempel: Vedlikehold av laftet bygning',
      content: `## Eksempel: Vedlikehold av laftet bygning

**Situasjon:**
Et laftet stabbur fra 1800-tallet trenger vedlikehold. Bygningen er SEFRAK-registrert.

**Tilstandsvurdering:**

**Funn:**
- Råte i svill (bunnstokk) på nordsiden
- Løs kalkmaling på kjellermur
- Trebeslag på dør slitt
- Torvtak trenger etterfylling

**Planlegging:**

**Steg 1: Kontakt myndigheter**
- Sjekk vernestatus hos kommunen
- Informer om planlagt arbeid
- Eventuell søknad om tillatelse

**Steg 2: Dokumentasjon**
- Fotografer hele bygningen
- Detaljbilder av skader
- Mål opp viktige detaljer

**Utførelse:**

**Svillereparasjon:**
- Jekk opp bygningen forsiktig
- Skjær ut råtten del av svillen
- Tilpass ny svilldel av samme treslag
- Novhugg likt originalen
- Impregner endeved
- Senk bygningen på plass

**Kalkmaling:**
- Skrap løs maling forsiktig
- Fukt muren
- Påfør ny kalkmaling i tynne strøk
- Etterarbeid ved behov

**Trebeslag:**
- Demonter forsiktig
- Rengjør og rust-behandle
- Eventuelt la smed lage kopi
- Monter tilbake med originale hull

**Torvtak:**
- Etterfyll med ny torv
- Kontroller underlag/never
- Sørg for god drenering

**Dokumentasjon etterpå:**
- Foto av ferdig arbeid
- Beskrivelse av utført arbeid
- Materialer brukt
- Arkiver for fremtiden`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-26-ex-1',
      task: 'Forklar forskjellen mellom fredning og vern etter plan- og bygningsloven.',
      solution: 'Fredning er den sterkeste formen for vern, vedtatt etter kulturminneloven. Alle endringer på fredede bygninger krever tillatelse fra Riksantikvaren. Vern etter plan- og bygningsloven vedtas av kommunen i reguleringsplan og gir føringer for hva som kan gjøres, men er ikke like strengt som fredning.',
    },
    {
      id: 'bygg-anlegg-vg1-26-ex-2',
      task: 'Hva er laft, og nevn tre typer lafteverk.',
      solution: 'Laft er den eldste norske byggemetoden der tømmerstokker legges horisontalt og hakkes sammen i hjørnene (nov). Tre typer: 1) Findalslaft - enklest, tømmeret stikker ut i hjørnene. 2) Kinningslaft - profilert og estetisk utformet hjørne. 3) Sinknov - skjult hjørne der ingen ender stikker ut.',
    },
    {
      id: 'bygg-anlegg-vg1-26-ex-3',
      task: 'Nevn de fire grunnprinsippene for antikvarisk arbeid.',
      solution: '1) Minste inngrep - gjør bare det nødvendige, bevar originalt materiale. 2) Reversibilitet - tiltak bør kunne tilbakeføres. 3) Autentisitet - bevar opprinnelig karakter, nye deler skal identifiseres som nye. 4) Dokumentasjon - dokumenter før, under og etter arbeidet.',
    },
    {
      id: 'bygg-anlegg-vg1-26-ex-4',
      task: 'Hvorfor skal man bruke kalkmørtel og ikke sementmørtel ved reparasjon av gamle murverk?',
      solution: 'Kalkmørtel er myk og fleksibel, den "puster" og lar fukt passere gjennom. Sementmørtel er hard og tett, noe som gjør at fukt blir sperret inne i murverket og kan skade de gamle steinene. Sement og kalk er ikke kompatible - sement vil ødelegge originalt murverk over tid.',
    },
    {
      id: 'bygg-anlegg-vg1-26-ex-5',
      task: 'Hva kjennetegner tradisjonell linolje som overflatebehandling for tre?',
      solution: 'Linolje trekker inn i treet og beskytter innenfra, den puster slik at fukt kan transporteres ut, den er naturlig og miljøvennlig, den gir dybdevirkning i treet, og den kan vedlikeholdes uten avflassing. Påføres i flere tynne strøk, helst med fortynnet olje først.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-26-ex-6',
      task: 'Du skal utføre vedlikehold på et verneverdig trehus fra 1890. Beskriv hvordan du ville planlagt og dokumentert arbeidet i henhold til antikvariske prinsipper.',
      solution: 'PLANLEGGING: 1) Undersøk vernestatus hos kommune/fylke. 2) Kontakt antikvariske myndigheter om nødvendig tillatelse. 3) Gjør grundig tilstandsvurdering. 4) Velg materialer som matcher originale (linolje, ikke moderne maling). 5) Planlegg minste mulige inngrep. DOKUMENTASJON FØR: Fotografer hele bygningen fra alle sider, ta detaljbilder av skader og detaljer, mål viktige elementer, beskriv tilstand skriftlig. UNDER ARBEIDET: Ta foto av hvert trinn, dokumenter hva som fjernes og hva som beholdes, noter materialer og metoder brukt. ETTER: Foto av ferdig resultat, komplett rapport med beskrivelse av arbeidet, liste over materialer brukt, arkiver for fremtidig vedlikehold.',
    },
    {
      id: 'bygg-anlegg-vg1-26-ex-7',
      task: 'Sammenlign byggeskikken på Vestlandet og Østlandet. Nevn minst tre forskjeller og forklar hvorfor forskjellene oppsto.',
      solution: 'VESTLANDET: 1) Hvitmalte hus - lysere farge reflekterer det fuktige klimaet og gir lys. 2) Grindbygg - tilpasset bratt terreng og lette materialer. 3) Høye, smale vinduer - maksimerer dagslys i et område med mye skyer. ØSTLANDET: 1) Laftede gårder - tilgang på godt laftetømmer og tradisjon fra innlandet. 2) Rødmalte uthus - rødfarge fra kobberholdig malm var rimelig og beskyttet godt. 3) Symmetriske hovedbygg - påvirkning fra europeisk arkitektur, statusbygging. ÅRSAKER: Forskjellene skyldes klima (våtere på Vestlandet), tilgjengelige materialer (mer tømmer i innlandet), terreng (brattere på Vestlandet), og kulturelle påvirkninger (Europa via Østlandet).',
    },
  ],
  keyTerms: [
    { term: 'Kulturminne', definition: 'Fysiske spor etter menneskers liv og virke.' },
    { term: 'Fredning', definition: 'Sterkeste form for vern, vedtatt etter kulturminneloven.' },
    { term: 'Laft', definition: 'Tradisjonell byggemetode med horisontale tømmerstokker hakket sammen.' },
    { term: 'Antikvarisk arbeid', definition: 'Arbeid på vernede bygninger etter bevaringsprinsipper.' },
    { term: 'Autentisitet', definition: 'Grad av opprinnelighet i en bygning.' },
    { term: 'SEFRAK', definition: 'Register over eldre bygninger, signaliserer verneverdi.' },
  ],
};

// ============================================================================
// Kapittel 27: Dokumentasjon og kvalitetskontroll
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_27: TextbookChapter = {
  id: 'bygg-anlegg-vg1-27',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '27',
  title: 'Dokumentasjon og kvalitetskontroll',
  description: 'Kvalitetssikring, kontrollplaner og dokumentasjon i byggeprosjekter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive hvilke krav og forventninger samfunnet stiller til en profesjonell yrkesutøver',
    'forstå og arbeide etter tegninger og beskrivelser',
  ],
  sections: [
    {
      title: 'Kvalitetssikring i bygg',
      content: `## Kvalitetssikring i bygg

Kvalitetssikring (KS) er systematisk arbeid for å sikre at byggverket oppfyller kravene.

**Hva er kvalitet i bygg?**
At bygget oppfyller:
- Krav i lover og forskrifter (TEK, byggherreforskriften)
- Krav i kontrakt og beskrivelse
- Forventninger til funksjon og holdbarhet
- Bransjestandarder og god praksis

**Hvorfor kvalitetssikring?**
- Unngå byggfeil og reklamasjoner
- Oppfylle lovkrav
- Dokumentere at arbeidet er riktig utført
- Sikre trygghet for brukerne
- Beskytte virksomhetens omdømme

**Aktører i kvalitetssikring:**

**Byggherre**
Ansvarlig for at prosjektet følger regler. Skal ha uavhengig kontroll for viktige områder.

**Prosjekterende (arkitekt/ingeniør)**
Ansvarlig for at prosjekteringen oppfyller krav. Skal dokumentere løsninger.

**Utførende (entreprenør/håndverker)**
Ansvarlig for at utførelsen er i tråd med tegninger og beskrivelser.

**Kontrollerende**
Uavhengig kontroll av prosjektering og/eller utførelse for kritiske områder.

**Kommunen**
Gir tillatelser og fører tilsyn med at reglene følges.

**Sentralt godkjente foretak:**
Foretak med dokumentert kompetanse innen sitt område. Gir tillit til at arbeidet utføres forsvarlig.`,
    },
    {
      title: 'Kontrollplaner og sjekklister',
      content: `## Kontrollplaner og sjekklister

Kontrollplaner er verktøy for å sikre at alt blir kontrollert og dokumentert.

**Hva er en kontrollplan?**
En plan som viser:
- Hva som skal kontrolleres
- Når kontrollen skal utføres
- Hvem som utfører kontrollen
- Hvordan kontrollen dokumenteres

**Innhold i kontrollplan:**
- Kontrollpunkter for hvert arbeidstrinn
- Akseptkriterier (hva er godkjent?)
- Referanse til tegning/beskrivelse
- Signatur og dato

**Sjekklister:**
Praktiske lister for daglig bruk på byggeplassen.

**Eksempel sjekkliste for betongstøping:**
- [ ] Forskaling kontrollert (mål, tetthet, avstivning)
- [ ] Armering kontrollert (plassering, dimensjon, overdekning)
- [ ] Betongbestilling riktig (kvalitet, mengde)
- [ ] Utstyr klart (vibrator, avrettingsutstyr)
- [ ] Værforhold OK (temperatur, nedbør)
- [ ] Etterbehandling planlagt (herdetiltak)

**Kontrollnivåer:**

**Egenkontroll**
Utførende kontrollerer eget arbeid. Grunnleggende kvalitetssikring.

**Intern systemkontroll**
Bedriftens kvalitetssystem sikrer at prosedyrer følges.

**Uavhengig kontroll**
Tredjepartskontroll av kritiske områder (brann, konstruksjon, etc.)

**Tilsyn**
Kommunens kontroll av at reglene følges.`,
    },
    {
      title: 'FDV-dokumentasjon',
      content: `## FDV-dokumentasjon

FDV står for Forvaltning, Drift og Vedlikehold. Dokumentasjon som følger bygget.

**Hva er FDV-dokumentasjon?**
Samling av all informasjon som er nødvendig for å drifte og vedlikeholde bygget.

**Lovkrav:**
TEK17 krever at det utarbeides FDV-dokumentasjon for alle byggverk.

**Innhold i FDV:**

**Som bygget-tegninger**
Tegninger som viser hvordan bygget faktisk ble bygget (ikke bare prosjektert).

**Produktdokumentasjon**
- Datablader for materialer
- Monteringsanvisninger
- Vedlikeholdsinstrukser
- Garantibevis

**Tekniske anlegg**
- VVS-anlegg
- Elektriske anlegg
- Brannalarmanlegg
- Heiser og løfteinnretninger

**Kontroll og godkjenninger**
- Kontrollrapporter
- Samsvarserklæringer
- Godkjenninger fra myndigheter
- Branndokumentasjon

**Drift og vedlikehold**
- Vedlikeholdsplaner
- Rengjøringsinstrukser
- Intervaller for service

**Hvem lager FDV?**
- Entreprenører leverer for sine arbeider
- Prosjekterende samordner
- Byggherre oppbevarer

**Overlevering:**
FDV-dokumentasjonen skal være komplett ved ferdigstillelse og overleveres byggherre.`,
    },
    {
      title: 'Avvik og reklamasjon',
      content: `## Avvik og reklamasjon

Når noe ikke er i henhold til krav, kalles det et avvik.

**Hva er et avvik?**
Mangel på oppfyllelse av et krav. Kan være:
- Feil utførelse
- Avvik fra tegning
- Ikke oppfylt kvalitetskrav
- Mangelfull dokumentasjon

**Avvikshåndtering:**

**1. Identifiser avviket**
Beskriv hva som er feil og hvor alvorlig det er.

**2. Registrer avviket**
Skriv avviksmelding med beskrivelse, dato, sted.

**3. Vurder konsekvens**
Er avviket akseptabelt? Må det utbedres? Haster det?

**4. Beslutt tiltak**
Utbedring, aksept med dokumentasjon, eller omprosjektering.

**5. Utfør tiltak**
Rett opp feilen eller gjennomfør besluttet tiltak.

**6. Verifiser**
Kontroller at tiltaket har løst avviket.

**7. Lukk avviket**
Dokumenter og arkiver.

**Reklamasjon:**
Når byggherre/kunde oppdager feil etter overlevering.

**Reklamasjonsfrist:**
- Forbruker: 5 år
- Næring: Varierer, ofte 3-5 år

**Håndtering av reklamasjon:**
1. Motta og registrer reklamasjonen
2. Besiktig og vurder
3. Avgjør om det er reklamasjonsberettiget
4. Utfør eventuell utbedring
5. Dokumenter`,
    },
    {
      title: 'Eksempel: Kvalitetssikring av våtrom',
      content: `## Eksempel: Kvalitetssikring av våtrom

**Situasjon:**
Bygge nytt bad i enebolig. Skal kvalitetssikres gjennom hele prosessen.

**Kontrollplan for våtrom:**

**Fase 1: Før membranarbeid**
- [ ] Underlag jevnt (maks 2 mm/m) - Signatur: ___
- [ ] Fall mot sluk korrekt (min 1:50) - Signatur: ___
- [ ] Sluk riktig montert og i høyde - Signatur: ___
- [ ] Rørgjennomføringer ferdig - Signatur: ___
- Foto: Underlag før membran

**Fase 2: Membranarbeid**
- [ ] Primer påført og tørket - Signatur: ___
- [ ] Slukmansjett montert - Signatur: ___
- [ ] Rørmansjetter montert - Signatur: ___
- [ ] Armeringsremse i hjørner - Signatur: ___
- [ ] Første strøk membran påført - Signatur: ___
- [ ] Andre strøk membran påført - Signatur: ___
- [ ] Membrantykkelse kontrollert - Signatur: ___
- Foto: Ferdig membran alle flater

**Fase 3: Flislegging**
- [ ] Membran tørr og hel - Signatur: ___
- [ ] Riktig flislim for våtrom - Signatur: ___
- [ ] Fall mot sluk opprettholdt - Signatur: ___
- [ ] Slukrist monteres riktig - Signatur: ___

**Fase 4: Avslutning**
- [ ] Fuger tette og fulle - Signatur: ___
- [ ] Silikon i overgang til sanitær - Signatur: ___
- [ ] Funksjonstest utført (vann renner til sluk) - Signatur: ___

**FDV-dokumentasjon våtrom:**
- Produktdatablader: Membran, lim, fugemasse
- Monteringsanvisninger
- Kontrollskjema med signaturer
- Fotografier av alle faser
- Sertifikat fra våtromsbedrift (om aktuelt)
- Vedlikeholdsanvisning`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-27-ex-1',
      task: 'Hva menes med kvalitetssikring i byggebransjen, og hvorfor er det viktig?',
      solution: 'Kvalitetssikring er systematisk arbeid for å sikre at byggverket oppfyller kravene i lover, kontrakt og bransjestandarder. Det er viktig for å: unngå byggfeil og reklamasjoner, oppfylle lovkrav, dokumentere at arbeidet er riktig utført, sikre trygghet for brukerne, og beskytte bedriftens omdømme.',
    },
    {
      id: 'bygg-anlegg-vg1-27-ex-2',
      task: 'Hva skal en kontrollplan inneholde?',
      solution: 'En kontrollplan skal inneholde: 1) Kontrollpunkter for hvert arbeidstrinn, 2) Akseptkriterier som definerer hva som er godkjent, 3) Referanse til relevant tegning eller beskrivelse, 4) Felt for signatur og dato, 5) Hvem som utfører kontrollen, 6) Når kontrollen skal utføres.',
    },
    {
      id: 'bygg-anlegg-vg1-27-ex-3',
      task: 'Hva er FDV-dokumentasjon, og hva skal den inneholde?',
      solution: 'FDV står for Forvaltning, Drift og Vedlikehold. Det er dokumentasjon som følger bygget og inneholder: som bygget-tegninger, produktdokumentasjon med datablader og monteringsanvisninger, dokumentasjon av tekniske anlegg (VVS, elektro, brannalarm), kontrollrapporter og godkjenninger, vedlikeholdsplaner og rengjøringsinstrukser.',
    },
    {
      id: 'bygg-anlegg-vg1-27-ex-4',
      task: 'Beskriv de sju trinnene i avvikshåndtering.',
      solution: '1) Identifiser avviket - beskriv feilen og alvorlighetsgrad. 2) Registrer avviket - skriv avviksmelding. 3) Vurder konsekvens - er det akseptabelt eller må det utbedres? 4) Beslutt tiltak - utbedring, aksept eller omprosjektering. 5) Utfør tiltak - rett opp feilen. 6) Verifiser - kontroller at tiltaket fungerte. 7) Lukk avviket - dokumenter og arkiver.',
    },
    {
      id: 'bygg-anlegg-vg1-27-ex-5',
      task: 'Hva er forskjellen på egenkontroll og uavhengig kontroll?',
      solution: 'Egenkontroll er når utførende kontrollerer eget arbeid - grunnleggende kvalitetssikring som gjøres kontinuerlig. Uavhengig kontroll er tredjepartskontroll utført av en annen aktør enn den som har prosjektert eller utført arbeidet, brukes for kritiske områder som brann og konstruksjonssikkerhet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-27-ex-6',
      task: 'Lag en enkel sjekkliste for egenkontroll ved montering av gipsplater på en innervegg. Ta med minst 6 kontrollpunkter.',
      solution: 'SJEKKLISTE GIPSMONTERING: 1) [ ] Stendere står i lodd og med riktig avstand (c/c 60 cm) - Signatur: ___. 2) [ ] Gipsplatene er hel og uskadet - Signatur: ___. 3) [ ] Skrueavstand korrekt (15-20 cm langs kant, 25-30 cm i felt) - Signatur: ___. 4) [ ] Skruer går litt under overflaten uten å bryte papiret - Signatur: ___. 5) [ ] Plateskjøter er forskjøvet mellom rader - Signatur: ___. 6) [ ] Fuge mot gulv ca. 10 mm - Signatur: ___. 7) [ ] Isolasjon lagt mellom stendere før kledning av andre side - Signatur: ___. 8) [ ] Ingen synlige hull eller skader - Signatur: ___.',
    },
    {
      id: 'bygg-anlegg-vg1-27-ex-7',
      task: 'Du oppdager under egenkontroll at armeringen i en betongvegg har for liten overdekning (2 cm i stedet for minimum 4 cm). Beskriv hvordan du ville håndtert dette avviket.',
      solution: '1) IDENTIFISER: For liten overdekning på armering, 2 cm mot krav 4 cm. Alvorlig avvik - kan føre til korrosjon og svekkelse. 2) REGISTRER: Skriv avviksmelding med sted (vegg X), dato, beskrivelse, foto. Stopp støpearbeidet. 3) VURDER: Ikke akseptabelt - må utbedres før støping. 4) BESLUTT: Justere armeringen til riktig posisjon med distanseholdere. 5) UTFØR: Monter nye distanseholdere, løft armeringen til riktig posisjon. 6) VERIFISER: Kontroller ny overdekning med måling, ta foto. 7) LUKK: Dokumenter utbedringen, signer kontrollpunkt på nytt, arkiver avviksmelding med løsning.',
    },
  ],
  keyTerms: [
    { term: 'Kvalitetssikring', definition: 'Systematisk arbeid for å sikre at byggverket oppfyller kravene.' },
    { term: 'Kontrollplan', definition: 'Plan som viser hva, når og av hvem kontroller skal utføres.' },
    { term: 'FDV-dokumentasjon', definition: 'Dokumentasjon for forvaltning, drift og vedlikehold av bygget.' },
    { term: 'Avvik', definition: 'Mangel på oppfyllelse av et krav.' },
    { term: 'Uavhengig kontroll', definition: 'Tredjepartskontroll av kritiske områder i byggeprosjekt.' },
    { term: 'Samsvarserklæring', definition: 'Erklæring om at arbeid er utført i samsvar med regler og tegninger.' },
  ],
};

// ============================================================================
// Kapittel 28: Kommunikasjon og samarbeid
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_28: TextbookChapter = {
  id: 'bygg-anlegg-vg1-28',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '28',
  title: 'Kommunikasjon og samarbeid',
  description: 'Samarbeid på byggeplass, kommunikasjon og profesjonell opptreden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hvilke krav og forventninger samfunnet stiller til en profesjonell yrkesutøver',
  ],
  sections: [
    {
      title: 'Samarbeid på byggeplass',
      content: `## Samarbeid på byggeplass

En byggeplass er en arbeidsplass der mange fag og firmaer jobber sammen.

**Aktører på byggeplass:**
- Byggherre (oppdragsgiver)
- Hovedentreprenør (koordinerer)
- Underentreprenører (spesialfag)
- Håndverkere (utfører arbeid)
- Prosjektledelse
- Byggeleder (byggherres representant)
- HMS-koordinator

**Fag som må samarbeide:**
- Grunnentreprenør
- Betongentreprenør
- Tømrer
- Murer
- Rørlegger
- Elektriker
- Ventilasjonsarbeider
- Maler
- Flislegger

**Hvorfor samarbeid er viktig:**
- Unngå kollisjoner mellom fag
- Effektiv fremdrift
- Sikkerhet for alle
- God kvalitet
- Positivt arbeidsmiljø

**Samarbeidsmøter:**
Regelmessige møter der alle fag koordineres:
- Ukentlige byggemøter
- Daglige riggmøter
- Koordineringsmøter ved behov

**Respekt og samarbeid:**
- Respekter andres arbeid
- Kommuniser tidlig ved problemer
- Hjelp hverandre
- Hold avtaler
- Rydd etter deg`,
    },
    {
      title: 'Profesjonell kommunikasjon',
      content: `## Profesjonell kommunikasjon

God kommunikasjon er grunnleggende for et vellykket byggeprosjekt.

**Muntlig kommunikasjon:**
- Vær tydelig og konkret
- Lytt aktivt
- Still spørsmål ved uklarheter
- Bekreft at du har forstått
- Bruk et respektfullt språk

**Skriftlig kommunikasjon:**
- E-post til formelle henvendelser
- SMS for rask, uformell beskjed
- Byggportaler og prosjekthotell
- Avviksrapporter skriftlig

**Møter:**
- Kom forberedt
- Vær punktlig
- Følg agenda
- Dokumenter beslutninger
- Følg opp aksjonspunkter

**Tegninger og dokumenter:**
- Les og forstå tegninger før arbeid
- Spør hvis noe er uklart
- Meld fra om feil i tegninger
- Bruk nyeste revisjon

**Rapportering:**
- Daglige arbeidsrapporter
- Ukentlige fremdriftsrapporter
- Avviksmeldinger ved feil
- Endringsmeldinger ved avvik fra kontrakt

**Digital kommunikasjon:**
Mange byggeprosjekter bruker digitale verktøy:
- BIM-modeller for koordinering
- Prosjekthotell for dokumenter
- Apper for rapportering
- Digitale sjekklister`,
    },
    {
      title: 'Konflikthåndtering',
      content: `## Konflikthåndtering

Konflikter kan oppstå på byggeplass. Det er viktig å håndtere dem profesjonelt.

**Vanlige konfliktårsaker:**
- Uklare ansvarsforhold
- Tidspress og stress
- Kommunikasjonssvikt
- Uenighet om løsninger
- Rot og uorden
- Sikkerhetsproblemer

**Forebygging:**
- Klar kommunikasjon
- Tydelige avtaler
- Regelmessige møter
- Respekt for hverandre
- Orden og renhold

**Når konflikt oppstår:**

**1. Hold deg rolig**
Ikke reager i sinne. Ta en pause om nødvendig.

**2. Lytt**
Forstå den andre partens perspektiv.

**3. Fokuser på sak, ikke person**
Kritiser handlingen, ikke mennesket.

**4. Finn felles interesser**
Hva ønsker begge parter å oppnå?

**5. Søk løsning**
Kom med forslag. Vær villig til å kompromisse.

**6. Involver leder om nødvendig**
Hvis dere ikke blir enige, ta det videre.

**Eskalering:**
Ved alvorlige konflikter:
- Informer nærmeste leder
- Dokumenter hendelser
- Følg bedriftens rutiner
- Ved fare: Sikkerhet først`,
    },
    {
      title: 'Profesjonell opptreden',
      content: `## Profesjonell opptreden

Som håndverker representerer du både deg selv og din arbeidsgiver.

**Profesjonalitet betyr:**
- Punktlighet
- Pålitelighet
- Kvalitetsbevissthet
- Respekt for andre
- Ordenssans
- Ansvarsfølelse

**Møte kunder og publikum:**
- Vær høflig og serviceinnstilt
- Svar på spørsmål eller henvis videre
- Hold arbeidsområdet ryddig
- Informer om fremdrift ved behov
- Håndter klager profesjonelt

**Fremtreden:**
- Arbeidstøy rent og helt
- Bruk verneutstyr synlig
- ID-kort/adgangskort
- Personlig hygiene

**Arbeidstid og pauser:**
- Start til avtalt tid
- Ta pauser på riktig tidspunkt
- Ikke forlat arbeidsplassen uten grunn
- Avslutt dagen på riktig måte

**Sosiale medier:**
- Vær forsiktig med bilder fra byggeplass
- Ikke kritiser kunder eller kolleger offentlig
- Sjekk bedriftens retningslinjer

**Etikk og integritet:**
- Ikke ta snarveier som går utover sikkerhet eller kvalitet
- Meld fra om feil - egne og andres
- Vær ærlig om tidsbruk og materialer
- Respekter taushetsplikt`,
    },
    {
      title: 'Eksempel: En dag på byggeplass',
      content: `## Eksempel: En dag på byggeplass

**Situasjon:**
Tømrerlærling første dag på ny byggeplass.

**06:45 - Ankomst**
- Kommer 15 min før arbeidstid
- Finner rigg og garderobe
- Kler på arbeidstøy og verneutstyr

**07:00 - Riggmøte**
- Samles med hele laget
- Bas gjennomgår dagens oppgaver
- HMS-informasjon og sikkerhetsfokus
- Spørsmål og avklaringer

**07:15 - Oppstart**
- Henter tegninger for dagens arbeid
- Leser gjennom og forstår oppgaven
- Spør kollega om uklart punkt
- Henter verktøy og materialer

**09:00 - Pause**
- Rydder verktøy før pause
- Tar pause i rigg
- Tilbake på jobb presis etter pause

**09:15 - Arbeid fortsetter**
- Oppdager at en dimensjon på tegning ikke stemmer
- Tar kontakt med bas
- Dokumenterer avviket
- Får avklaring og fortsetter

**11:30 - Lunsj**
- 30 min lunsjpause
- Sosialt samvær med kolleger

**12:00 - Ettermiddag**
- Koordinerer med elektriker om utsparinger
- Kommuniserer tydelig hva som trengs
- Tilpasser arbeidet slik at begge kan jobbe

**15:00 - Avslutning**
- Rydder verktøy og arbeidsplass
- Sorterer avfall
- Rapporterer dagens arbeid til bas
- Sjekker oppgaver for morgendagen

**15:30 - Hjemreise**
- God avslutning av arbeidsdagen`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-28-ex-1',
      task: 'Nevn minst fem ulike faggrupper som må samarbeide på en byggeplass.',
      solution: 'Faggrupper som må samarbeide: 1) Tømrer, 2) Rørlegger, 3) Elektriker, 4) Murer, 5) Maler. Andre: Ventilasjonsarbeider, flislegger, grunnentreprenør, betongarbeider, blikkenslager, snekker, isolatør.',
    },
    {
      id: 'bygg-anlegg-vg1-28-ex-2',
      task: 'Hva menes med profesjonell opptreden på byggeplass?',
      solution: 'Profesjonell opptreden betyr: Punktlighet - komme til avtalt tid. Pålitelighet - gjøre det man sier. Kvalitetsbevissthet - levere godt arbeid. Respekt for andre. Ordenssans - holde ryddig. Ansvarsfølelse - ta ansvar for egne oppgaver og feil.',
    },
    {
      id: 'bygg-anlegg-vg1-28-ex-3',
      task: 'Beskriv hvordan du ville håndtert en situasjon der du oppdager en feil i tegningen du jobber etter.',
      solution: '1) Stopp arbeidet for å unngå feil utførelse. 2) Dokumenter hva du har oppdaget (beskriv feilen, ta gjerne bilde). 3) Kontakt nærmeste leder (bas, arbeidsleder). 4) Forklar problemet tydelig og vis på tegningen. 5) Vent på avklaring før du fortsetter. 6) Når avklaring kommer, fortsett arbeidet og dokumenter beslutningen.',
    },
    {
      id: 'bygg-anlegg-vg1-28-ex-4',
      task: 'Nevn tre vanlige årsaker til konflikter på byggeplass og foreslå tiltak for å forebygge dem.',
      solution: '1) Uklare ansvarsforhold - Forebygge med klare avtaler og tydelig kommunikasjon om hvem som gjør hva. 2) Tidspress og stress - Forebygge med realistisk planlegging og god kommunikasjon om fremdrift. 3) Rot og uorden - Forebygge med daglig rydding, faste rutiner og krav til at alle rydder etter seg.',
    },
    {
      id: 'bygg-anlegg-vg1-28-ex-5',
      task: 'Hvorfor er det viktig med regelmessige byggemøter, og hva bør diskuteres på slike møter?',
      solution: 'Byggemøter er viktige for å koordinere alle fag, løse problemer før de blir store, og sikre effektiv fremdrift. Møtene bør ta opp: Fremdriftsstatus for hvert fag, koordineringsbehov mellom fagene, HMS-forhold og sikkerhet, avvik og endringer, utfordringer og løsninger, planlegging av kommende uke.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-28-ex-6',
      task: 'Du er tømrer og må koordinere med elektriker om utsparinger i bindingsverket for el-bokser og kabelgjennomføringer. Beskriv hvordan du ville kommunisert og samarbeidet for å løse dette.',
      solution: '1) PLANLEGGING: Ta kontakt med elektriker tidlig, helst på byggemøte eller riggmøte. 2) TEGNINGER: Gå gjennom både tømrer- og el-tegninger sammen, identifiser hvor bokser og gjennomføringer skal være. 3) AVTALE: Bli enige om hvem som gjør hva - skal tømrer lage utsparinger eller venter elektriker til veggen er åpen? 4) MARKERING: Elektriker markerer nøyaktig plassering på stender/plate, eller gir mål. 5) TIMING: Avtale tidspunkt - må kanskje stoppe isolering/kledning til elektriker har trukket kabler. 6) KONTROLL: Sjekk at alt stemmer før kledning, ta gjerne bilde for dokumentasjon.',
    },
    {
      id: 'bygg-anlegg-vg1-28-ex-7',
      task: 'En kollega kritiserer arbeidet ditt høylytt foran andre på byggeplassen. Du mener kritikken er uberettiget. Beskriv hvordan du ville håndtert situasjonen profesjonelt.',
      solution: '1) BEHOLD ROEN: Ikke svar med sinne eller heve stemmen. Ta noen dype pust. 2) LYTT: La kollegaen snakke ferdig, vis at du lytter. 3) FLYTT SAMTALEN: "Kan vi snakke om dette på tomannshånd?" - unngå å krangle foran andre. 4) FORKLAR ROLIG: Når dere er alene, forklar din side av saken saklig. 5) FOKUSER PÅ LØSNING: "Hvordan kan vi løse dette?" i stedet for å krangle om hvem som har rett. 6) INVOLVER LEDER OM NØDVENDIG: Hvis dere ikke blir enige, be bas eller arbeidsleder om å hjelpe til. 7) ETTERARBEID: Ikke la situasjonen ødelegge samarbeidet videre - vær profesjonell.',
    },
  ],
  keyTerms: [
    { term: 'Riggmøte', definition: 'Daglig møte ved arbeidsstart for koordinering og HMS-informasjon.' },
    { term: 'Byggemøte', definition: 'Regelmessig møte for koordinering mellom alle aktører i prosjektet.' },
    { term: 'Byggeleder', definition: 'Byggherrens representant som følger opp arbeidet på byggeplassen.' },
    { term: 'Prosjekthotell', definition: 'Digital plattform for deling av dokumenter i byggeprosjekt.' },
    { term: 'Aksjonspunkt', definition: 'Oppgave som skal utføres, avtalt på møte med ansvarlig og frist.' },
    { term: 'Koordinering', definition: 'Samordning av arbeidsoppgaver mellom ulike fag og aktører.' },
  ],
};

// ============================================================================
// Kapittel 29: Fagbrev og karrierevei
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_29: TextbookChapter = {
  id: 'bygg-anlegg-vg1-29',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '29',
  title: 'Fagbrev og karrierevei',
  description: 'Utdanningsveien til fagbrev og videre karrieremuligheter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hvilke krav og forventninger samfunnet stiller til en profesjonell yrkesutøver',
  ],
  sections: [
    {
      title: 'Veien til fagbrev',
      content: `## Veien til fagbrev

Fagbrev er beviset på at du er utdannet håndverker i ditt fag.

**Hovedmodellen (2+2):**
- 2 år i skole (VG1 + VG2)
- 2 år som lærling i bedrift
- Fagprøve

**VG1 Bygg- og anleggsteknikk:**
Gir grunnlag for alle byggfag. Generell innføring i:
- Materialer og konstruksjoner
- HMS og sikkerhet
- Tegning og dokumentasjon
- Verktøy og maskiner

**VG2 - velg retning:**
- Tømrer
- Murer
- Betongfaget
- Anleggsteknikk
- Fjell og bergverksfaget
- Stillasbygger
- Rørlegger (eget løp)

**Læretiden:**
- 2 år i godkjent lærebedrift
- Opplæring i alle deler av faget
- Lønnet arbeid
- Veiledning fra faglig leder
- Dokumentasjon i opplæringsbok

**Fagprøven:**
- Praktisk prøve (2-4 dager)
- Planlegging, gjennomføring, dokumentasjon
- Vurderes av prøvenemnd
- Bestått/ikke bestått

**Fagbrevets verdi:**
- Dokumentert kompetanse
- Høyere lønn
- Mulighet for videre karriere
- Grunnlag for mesterbrev`,
    },
    {
      title: 'Lærlingens rettigheter og plikter',
      content: `## Lærlingens rettigheter og plikter

Som lærling har du både rettigheter og plikter.

**Rettigheter:**

**Opplæring**
- Allsidig opplæring i henhold til læreplan
- Veiledning fra faglig leder
- Teoriundervisning
- Avsatt tid til opplæring

**Arbeidsforhold**
- Skriftlig lærekontrakt
- Lønn etter tariff
- Verneombud og tillitsvalgt
- Samme rettigheter som andre ansatte

**Oppfølging**
- Halvårlige samtaler med bedrift
- Kontakt med opplæringskontor
- Hjelp ved problemer

**Plikter:**

**Innsats**
- Møte til avtalt tid
- Gjøre ditt beste
- Følge instrukser
- Ta ansvar for egen læring

**Oppførsel**
- Følge bedriftens regler
- Respektere kolleger
- Opptre profesjonelt
- Overholde taushetsplikt

**Dokumentasjon**
- Føre opplæringsbok
- Dokumentere arbeid
- Forberede halvårsvurderinger

**Hvis noe er galt:**
- Snakk med faglig leder først
- Kontakt opplæringskontor
- Ta opp med tillitsvalgt
- Fylkeskommunen kan hjelpe ved konflikter`,
    },
    {
      title: 'Karrieremuligheter',
      content: `## Karrieremuligheter

Med fagbrev har du mange muligheter for videre karriere.

**I faget:**

**Fagarbeider**
Jobbe som utførende håndverker. Spesialisering mulig.

**Bas/Formann**
Lede en arbeidsgruppe. Ansvar for daglig drift.

**Mester**
Mesterbrev kvalifiserer til å starte egen bedrift. Krever fagbrev + 2 år praksis + mesterutdanning.

**Arbeidsleder/Prosjektleder**
Lede større prosjekter. Ansvar for økonomi og fremdrift.

**Videre utdanning:**

**Fagskole (2 år)**
Gir tittel "Fagskoleingeniør" eller "Byggmester". Teknisk lederutdanning.

**Høgskole/universitet**
- Ingeniør (3 år)
- Sivilingeniør (5 år)
- Arkitekt (5 år)

Krever generell studiekompetanse eller Y-vei (spesialtilpasset løp for fagarbeidere).

**Sertifiseringer:**
- Maskinførerbevis
- Stillassertifikat
- Sveisesertifikat
- Sprengningsbevis
- Kranførerbevis

**Egen bedrift:**
Med mesterbrev kan du starte egen virksomhet. Kurs i bedriftsledelse anbefales.

**Internasjonalt:**
Norsk fagbrev gir muligheter i andre land. Nordisk arbeidsmarked er åpent.`,
    },
    {
      title: 'Lønn og arbeidsvilkår',
      content: `## Lønn og arbeidsvilkår

Byggebransjen har regulerte lønns- og arbeidsvilkår.

**Lønn:**

**Lærling:**
Lønnen øker for hvert halvår:
- 1. halvår: ca. 30% av fagarbeiderlønn
- 2. halvår: ca. 40%
- 3. halvår: ca. 50%
- 4. halvår: ca. 80%

**Fagarbeider:**
- Minstelønn etter tariff (ca. 200-230 kr/t)
- Akkordarbeid kan gi høyere lønn
- Tillegg for ubekvem arbeidstid
- Høyere lønn med erfaring

**Bas/formann:**
- Tillegg for lederansvar
- Fast månedslønn vanligere

**Arbeidstid:**
- Normal: 37,5 timer per uke
- Fleksitid vanlig i bransjen
- Overtid kompenseres

**Goder:**
- Pensjon
- Forsikring
- Verktøy og arbeidstøy
- Eventuelt bil

**Tariffavtale:**
Fellesforbundet og arbeidsgiverorganisasjon (BNL) forhandler tariff. Viktige punkter:
- Minstelønnsatser
- Arbeidstid
- Overtidstillegg
- Permitteringsregler
- HMS-bestemmelser

**Organisering:**
Det anbefales å organisere seg i fagforening (Fellesforbundet) for:
- Rettigheter og støtte
- Juridisk hjelp ved behov
- Innflytelse på arbeidsforhold`,
    },
    {
      title: 'Eksempel: Fra lærling til bas',
      content: `## Eksempel: Fra lærling til bas

**Pers karrierevei:**

**År 1-2: VG1 og VG2**
- VG1 Bygg- og anleggsteknikk
- VG2 Tømrer
- God innsats, gode karakterer

**År 3-4: Lærling**
- Lærling i mellomstort tømrerfirma
- Allsidig opplæring
- Jobbet på flere typer prosjekter
- Dokumenterte arbeidet i opplæringsbok
- Halvårlige samtaler med faglig leder

**År 5: Fagprøve**
- Forberedte seg grundig
- Besto fagprøven
- Fikk fast jobb i samme bedrift

**År 5-7: Fagarbeider**
- Jobbet med ulike oppgaver
- Utviklet spesialkompetanse
- Tok ansvar, viste initiativ
- Veiledet nye lærlinger

**År 8: Bas**
- Fikk tilbud om basrolle
- Leder nå team på 4-5 mann
- Ansvar for daglig koordinering
- Rapporterer til prosjektleder

**Neste steg for Per:**
- Vurderer mesterutdanning
- Eller fagskole for å bli arbeidsleder
- Mulig å starte egen bedrift senere

**Tips fra Per:**
"Vis at du er pålitelig og tar ansvar. Ikke vær redd for å spørre. Dokumenter det du gjør. Vær positiv og samarbeid godt. Karrieren kommer av seg selv når du gjør en god jobb."`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-29-ex-1',
      task: 'Beskriv hovedmodellen (2+2) for å ta fagbrev.',
      solution: 'Hovedmodellen består av: 2 år i skole (VG1 Bygg- og anleggsteknikk + VG2 i valgt retning), deretter 2 år som lærling i godkjent lærebedrift med opplæring og lønnet arbeid, og til slutt en praktisk fagprøve som vurderes av prøvenemnd.',
    },
    {
      id: 'bygg-anlegg-vg1-29-ex-2',
      task: 'Nevn tre rettigheter og tre plikter du har som lærling.',
      solution: 'Rettigheter: 1) Allsidig opplæring i henhold til læreplan, 2) Veiledning fra faglig leder, 3) Lønn etter tariff. Plikter: 1) Møte til avtalt tid, 2) Følge bedriftens regler og instrukser, 3) Føre opplæringsbok og dokumentere arbeid.',
    },
    {
      id: 'bygg-anlegg-vg1-29-ex-3',
      task: 'Hvilke karrieremuligheter finnes for en fagarbeider som ønsker å avansere i byggebransjen?',
      solution: 'Karrieremuligheter: Bas/formann (lede arbeidsgruppe), Mester (krever mesterutdanning, kan starte egen bedrift), Arbeidsleder/prosjektleder, Fagskole (blir fagskoleingeniør/byggmester), Høgskole/universitet (ingeniør, sivilingeniør, arkitekt), Diverse sertifiseringer (maskinfører, stillas, sveising, sprengning).',
    },
    {
      id: 'bygg-anlegg-vg1-29-ex-4',
      task: 'Hva kreves for å ta mesterbrev?',
      solution: 'For mesterbrev kreves: 1) Fagbrev i relevant fag, 2) Minst 2 år praksis som fagarbeider etter fagbrev, 3) Gjennomført mesterutdanning (teori og praksis). Mesterbrev gir rett til å starte og drive egen håndverksbedrift.',
    },
    {
      id: 'bygg-anlegg-vg1-29-ex-5',
      task: 'Hvordan utvikler lærlinglønnen seg gjennom læretiden?',
      solution: 'Lærlinglønnen øker for hvert halvår: 1. halvår ca. 30% av fagarbeiderlønn, 2. halvår ca. 40%, 3. halvår ca. 50%, 4. halvår ca. 80%. Dette sikrer at lønnen øker etter hvert som lærlingen blir mer produktiv og selvstendig.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-29-ex-6',
      task: 'Du er lærling og mistrives i lærebedriften. Du får ikke variert opplæring og føler at du mest blir brukt som billig arbeidskraft. Beskriv hvordan du ville håndtert situasjonen.',
      solution: '1) FØRST: Snakk med faglig leder i bedriften, forklar konkret hva du savner i opplæringen, vis til læreplanen. 2) DOKUMENTER: Før logg over hva du gjør, sammenlign med læreplanens krav. 3) OPPLÆRINGSKONTOR: Kontakt opplæringskontoret og forklar situasjonen, de kan mekle mellom deg og bedriften. 4) HALVÅRSSAMTALE: Ta det opp formelt i halvårssamtalen, få skriftlig plan for bedre opplæring. 5) HVIS IKKE BEDRING: Opplæringskontoret kan hjelpe med å finne ny lærebedrift. 6) SISTE UTVEI: Fylkeskommunen har ansvar for å løse konflikter. Viktig: Ikke bare slutte - du har rettigheter som skal ivaretas.',
    },
    {
      id: 'bygg-anlegg-vg1-29-ex-7',
      task: 'Lag en plan for din egen karriere de neste 10 årene fra du starter på VG1. Inkluder utdanning, fagbrev, og mulige karrierevalg.',
      solution: 'EKSEMPEL KARRIEREPLAN: ÅR 1-2: VG1 Bygg- og anleggsteknikk og VG2 Tømrer med gode resultater. ÅR 3-4: Læretid i solid bedrift, variert erfaring, føre opplæringsbok, ta ansvar. ÅR 5: Fagprøve, sikre fast jobb. ÅR 5-7: Jobbe som fagarbeider, utvikle spesialkompetanse, ta kurs (stillas, lift). ÅR 7-8: Bli bas, lede team, vise lederegenskaper. ÅR 8-10: Videreutdanning - enten mesterutdanning for å starte egen bedrift, eller fagskole for å bli arbeidsleder. LANGSIKTIG MÅL: Bli prosjektleder eller starte egen tømrerbedrift. ALTERNATIV VEI: Hvis interesse for mer utdanning, ta generell studiekompetanse og ingeniørutdanning.',
    },
  ],
  keyTerms: [
    { term: 'Fagbrev', definition: 'Bevis på fullført yrkesutdanning som håndverker.' },
    { term: 'Hovedmodellen', definition: '2 år skole + 2 år læretid = fagbrev.' },
    { term: 'Lærekontrakt', definition: 'Avtale mellom lærling, bedrift og fylkeskommune.' },
    { term: 'Opplæringsbok', definition: 'Dokumentasjon av opplæring gjennom læretiden.' },
    { term: 'Fagprøve', definition: 'Praktisk prøve som avslutter læretiden.' },
    { term: 'Mesterbrev', definition: 'Høyere kvalifikasjon som gir rett til å drive egen bedrift.' },
  ],
};

// ============================================================================
// Kapittel 30: Grønn byggepraksis
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_30: TextbookChapter = {
  id: 'bygg-anlegg-vg1-30',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '30',
  title: 'Grønn byggepraksis',
  description: 'Bærekraft, miljøvennlige materialer og sirkulær økonomi i byggebransjen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'velge og bruke materialer med hensyn til bærekraft',
    'oppbevare, beregne og behandle materialer på en miljøvennlig, faglig og økonomisk måte',
  ],
  sections: [
    {
      title: 'Bærekraft i byggebransjen',
      content: `## Bærekraft i byggebransjen

Byggebransjen står for en stor del av verdens ressursbruk og utslipp. Bærekraftig bygging er derfor viktig.

**Byggebransjens miljøpåvirkning:**
- 40% av energiforbruket globalt
- 30% av klimagassutslippene
- 40% av avfallet i Norge
- Store mengder råvarer og transport

**Bærekraft i tre dimensjoner:**

**Miljømessig**
- Redusere utslipp og energiforbruk
- Bruke fornybare materialer
- Minimere avfall
- Bevare naturmangfold

**Økonomisk**
- Levedyktige prosjekter
- Lave driftskostnader
- Verdiskaping lokalt
- Langsiktig lønnsomhet

**Sosial**
- Trygge arbeidsforhold
- Godt inneklima
- Tilgjengelige bygg
- Gode bomiljøer

**FNs bærekraftsmål:**
Flere av FNs 17 bærekraftsmål er relevante for bygg:
- Mål 7: Ren energi
- Mål 11: Bærekraftige byer
- Mål 12: Ansvarlig forbruk
- Mål 13: Stoppe klimaendringene

**TEK17 og bærekraft:**
Byggereglene stiller krav til:
- Energieffektivitet
- Avfallshåndtering
- Universell utforming
- Inneklima`,
    },
    {
      title: 'Miljøvennlige materialer',
      content: `## Miljøvennlige materialer

Valg av materialer har stor betydning for byggets miljøavtrykk.

**Livssyklusanalyse (LCA):**
Vurderer miljøpåvirkning gjennom hele livsløpet:
- Råvareuttak
- Produksjon
- Transport
- Bruk
- Avfallshåndtering/gjenbruk

**Miljøvennlige alternativer:**

**Tre**
- Fornybart, binder CO2
- Lavt energiforbruk i produksjon
- Kan gjenbrukes/resirkuleres
- Norsk skog er bærekraftig forvaltet

**Massivtre (CLT)**
- Erstatter betong og stål i høyhus
- Meget lavt CO2-avtrykk
- Rask montering

**Resirkulert betong**
- Knust betong som tilslag
- Reduserer behovet for ny pukk
- Utvikles stadig

**Lavkarbonbetong**
- Redusert sementinnhold
- Alternativ bindemidler
- Kan halvere CO2-utslipp

**Resirkulert stål**
- Stål kan resirkuleres 100%
- Lavere energibehov enn nytt stål
- Samme kvalitet

**Isolasjonsmaterialer:**
- Trefiber
- Cellulose (resirkulert papir)
- Ull og hamp
- Alternativ til mineralull og EPS

**Miljødeklarasjoner (EPD):**
Dokumenterer produkters miljøpåvirkning. Se etter EPD ved materialvalg.`,
    },
    {
      title: 'Sirkulær økonomi',
      content: `## Sirkulær økonomi

Sirkulær økonomi handler om å bruke ressurser om igjen i stedet for å kaste.

**Lineær vs. sirkulær:**

**Lineær:** Ta ut → Produser → Bruk → Kast
**Sirkulær:** Materialer brukes igjen og igjen

**Avfallshierarkiet:**
1. Forebygging (bruk mindre)
2. Ombruk (bruk om igjen)
3. Materialgjenvinning (resirkulering)
4. Energigjenvinning (forbrenning)
5. Deponering (siste utvei)

**Ombruk i bygg:**
- Brukte byggevarer (teglstein, trevirke, vinduer)
- Ombruk av hele bygninger (transformasjon)
- Materialbank og ombruksmarked

**Gjenvinning:**
- Betong → Knust betong til fyllmasse
- Metall → Smeltes om
- Gips → Ny gipsproduksjon
- Tre → Sponplater eller energi

**Design for gjenbruk:**
Nye bygg kan designes for fremtidig demontering:
- Mekaniske forbindelser (skruer, bolter)
- Unngå liming og støping
- Dokumenter materialene
- Fleksible planløsninger

**Avfallshåndtering på byggeplass:**
- Kildesortering (min. 60% sorteringsgrad)
- Avfallsplan ved byggestart
- Riktige containere
- Levering til godkjent mottak
- Farlig avfall separat`,
    },
    {
      title: 'Energieffektive bygg',
      content: `## Energieffektive bygg

Redusert energibruk er sentralt i bærekraftig bygging.

**Passivhus:**
- Minimalt oppvarmingsbehov (<15 kWh/m²/år)
- Svært god isolasjon
- Lufttett bygningskropp
- Balansert ventilasjon med varmegjenvinning
- Orientert mot solen

**Nullenergibygg:**
- Produserer like mye energi som det bruker
- Solceller på tak/fasade
- Solvarme
- Varmepumpe

**Plusshus:**
- Produserer mer energi enn det bruker
- Selger overskudd til strømnettet

**BREEAM-NOR:**
Norges mest brukte miljøsertifisering for bygg.
- Vurderer mange miljøaspekter
- Gir poeng og klassifisering
- Outstanding, Excellent, Very Good, Good, Pass

**Sentrale tiltak:**
- Effektiv isolasjon (lave U-verdier)
- Lufttetting (lave lekkasjetall)
- Energieffektive vinduer
- Varmegjenvinning i ventilasjon
- LED-belysning og styring
- Effektive varmesystemer

**Byggeplassens energibruk:**
- Brakkerigger med god isolasjon
- Energieffektiv oppvarming
- Slå av lys og maskiner
- Minimere tomgangskjøring`,
    },
    {
      title: 'Eksempel: Bærekraftig byggeplass',
      content: `## Eksempel: Bærekraftig byggeplass

**Prosjekt:**
Bygging av leilighetsbygg i massivtre med BREEAM-sertifisering.

**Miljøtiltak i prosjektet:**

**Materialer:**
- Massivtre i stedet for betong (80% lavere CO2)
- Lokal leverandør reduserer transport
- Lavkarbonbetong i fundament
- EPD-dokumenterte produkter

**Avfallshåndtering:**
- Mål: 80% sorteringsgrad
- 8 fraksjoner: tre, metall, gips, plast, papp, glass, farlig, rest
- Avfallsplan fra oppstart
- Registrering av alle leveranser
- Ombruk av emballasje der mulig

**Energi på byggeplass:**
- Brakker med 10 cm isolasjon
- LED-belysning overalt
- Automatisk slukking av lys
- Minimalt med dieselaggregater
- El-maskiner der mulig

**Transport:**
- Samlastning av leveranser
- Planlagt logistikk
- Færre men større leveranser
- El-biler til småkjøring

**Dokumentasjon:**
- Klimaregnskap for bygget
- Loggføring av avfall
- EPD-er samlet i database
- BREEAM-dokumentasjon

**Resultat:**
- 30% lavere CO2 enn referansebygg
- 82% avfall sortert
- BREEAM Very Good
- God erfaring for neste prosjekt`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-30-ex-1',
      task: 'Nevn tre måter byggebransjen påvirker miljøet, og forklar hvorfor bærekraft er viktig i bransjen.',
      solution: 'Byggebransjen påvirker miljøet gjennom: 1) Høyt energiforbruk (40% globalt). 2) Store klimagassutslipp (30% globalt). 3) Mye avfall (40% av norsk avfall). Bærekraft er viktig fordi bransjen har så stor påvirkning - små forbedringer gir store resultater for klima og miljø.',
    },
    {
      id: 'bygg-anlegg-vg1-30-ex-2',
      task: 'Hva er livssyklusanalyse (LCA), og hvorfor er det relevant ved valg av byggematerialer?',
      solution: 'Livssyklusanalyse vurderer et produkts miljøpåvirkning gjennom hele livsløpet: råvareuttak, produksjon, transport, bruk og avfallshåndtering/gjenbruk. Det er relevant fordi et materiale kan se miljøvennlig ut i én fase men ha stor påvirkning i andre faser. LCA gir et helhetlig bilde for gode materialvalg.',
    },
    {
      id: 'bygg-anlegg-vg1-30-ex-3',
      task: 'Forklar avfallshierarkiet og hva det betyr for håndtering av byggavfall.',
      solution: 'Avfallshierarkiet prioriterer: 1) Forebygging - bruk mindre materialer. 2) Ombruk - bruk materialer på nytt. 3) Materialgjenvinning - resirkuler til nye produkter. 4) Energigjenvinning - brenn for energi. 5) Deponering - siste utvei. For byggavfall betyr dette: Planlegg for lite svinn, vurder ombruk av materialer, sorter grundig for gjenvinning, kun deponering når ingen andre muligheter.',
    },
    {
      id: 'bygg-anlegg-vg1-30-ex-4',
      task: 'Hva kjennetegner et passivhus, og nevn tre viktige tiltak for å oppnå passivhusstandard.',
      solution: 'Passivhus har minimalt oppvarmingsbehov (under 15 kWh/m²/år). Viktige tiltak: 1) Svært god isolasjon med lave U-verdier. 2) Lufttett bygningskropp med dokumentert lave lekkasjetall. 3) Balansert ventilasjon med varmegjenvinning (80-90%). Andre tiltak: Orientering mot solen, gode vinduer, kuldebrufrie detaljer.',
    },
    {
      id: 'bygg-anlegg-vg1-30-ex-5',
      task: 'Hvordan kan bygg designes for fremtidig ombruk av materialer?',
      solution: 'Design for ombruk: 1) Bruk mekaniske forbindelser (skruer, bolter) i stedet for lim og støp. 2) Unngå sammensatte materialer som er vanskelige å skille. 3) Dokumenter alle materialer med plassering og mengde. 4) Velg fleksible planløsninger som kan endres. 5) Bruk standardiserte dimensjoner. 6) Lag demonteringsplan allerede ved prosjektering.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-30-ex-6',
      task: 'Du skal planlegge avfallshåndtering for en byggeplass. Lag en plan som inkluderer sorteringsfraksjoner, praktiske tiltak og mål for sorteringsgrad.',
      solution: 'AVFALLSPLAN: MÅL: 70% sorteringsgrad. FRAKSJONER (min 7): 1) Trevirke (ikke behandlet), 2) Trevirke behandlet/malt, 3) Metall, 4) Gips, 5) Plast, 6) Papp/papir, 7) Farlig avfall, 8) Restavfall. PRAKTISKE TILTAK: Merkede containere med bilder, plassert sentralt og lett tilgjengelig. Oppstartsmøte om sortering for alle. Ukentlig kontroll av containere. Ansvarlig utpekt. Registrering av alle hentinger med vekt. OPPFØLGING: Månedlig rapport på sorteringsgrad. Avvik tas opp på byggemøter. Belønning ved god måloppnåelse.',
    },
    {
      id: 'bygg-anlegg-vg1-30-ex-7',
      task: 'Sammenlign miljøpåvirkningen fra et bygg i massivtre med et tilsvarende bygg i betong. Vurder minst tre ulike miljøaspekter.',
      solution: 'SAMMENLIGNING: 1) CO2-UTSLIPP: Massivtre binder CO2 under vekst og har lav produksjonsenergi - gir negativt eller lavt CO2-avtrykk. Betong har høye utslipp fra sementproduksjon (8% av globale utslipp). Massivtre kan gi 50-80% lavere CO2. 2) ENERGI I PRODUKSJON: Tre krever lite energi (tørking, saging). Betong krever høy temperatur for sementproduksjon. Fordel tre. 3) AVFALL OG GJENVINNING: Tre kan ombrukes, bli sponplater eller energi. Betong kan knuses til fyllmasse, men har lavere gjenvinningsverdi. Fordel tre. 4) TRANSPORT: Tre er lettere = mindre transport. Betong er tungt. Fordel tre. KONKLUSJON: Massivtre er klart mer miljøvennlig på de fleste områder.',
    },
  ],
  keyTerms: [
    { term: 'Bærekraft', definition: 'Utvikling som dekker nåtidens behov uten å ødelegge for fremtiden.' },
    { term: 'LCA (livssyklusanalyse)', definition: 'Vurdering av miljøpåvirkning gjennom hele produktets livsløp.' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk system der ressurser brukes om igjen.' },
    { term: 'EPD', definition: 'Environmental Product Declaration - miljødeklarasjon for produkter.' },
    { term: 'Passivhus', definition: 'Bygg med svært lavt energibehov til oppvarming.' },
    { term: 'BREEAM', definition: 'Miljøsertifiseringsordning for bygg.' },
  ],
};

// ============================================================================
// Eksporter kapitler 26-30
// ============================================================================

export const CHAPTERS_BYGG_ANLEGG_VG1_PART4 = [
  CHAPTER_BYGG_ANLEGG_VG1_26,
  CHAPTER_BYGG_ANLEGG_VG1_27,
  CHAPTER_BYGG_ANLEGG_VG1_28,
  CHAPTER_BYGG_ANLEGG_VG1_29,
  CHAPTER_BYGG_ANLEGG_VG1_30,
];
