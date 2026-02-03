/**
 * Kroppsøving VG1 - Del 4: Kapittel 7.1-8.8
 * Friluftsliv og naturopplevelser, Helse, livsstil og samfunn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Ferdsel i skog og fjell
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_1: TextbookChapter = {
  id: 'kroppsoving-vg1-7-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.1',
  title: 'Ferdsel i skog og fjell',
  description: 'Lær om trygg ferdsel i naturen, turplanlegging og bekledning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-1-intro',
      type: 'text',
      content: `## Ferdsel i skog og fjell

Norge har en rik friluftstradisjon med allemannsretten som grunnlag. For å ferdes trygt i naturen trenger du kunnskap om planlegging, bekledning og sikkerhet.

**Allemannsretten gir deg rett til å:**
- Ferdes fritt i utmark
- Raste og overnatte i utmark
- Høste bær, sopp og ville blomster
- Fiske fritt i saltvann`,
    },
    {
      id: 'kroppsoving-vg1-7-1-def-1',
      type: 'definition',
      title: 'Turplanlegging',
      content: `God turplanlegging innebærer:
- **Rute:** Velg en rute tilpasset deltakernes erfaring og kondisjon
- **Værmelding:** Sjekk yr.no og varsom.no
- **Tidspunkt:** Beregn tidsbruk med god margin
- **Utstyr:** Pakk riktig for vær og terreng
- **Informer andre:** Gi beskjed om hvor du går og når du kommer tilbake`,
    },
    {
      id: 'kroppsoving-vg1-7-1-def-2',
      type: 'definition',
      title: 'Lagprinsippet (bekledning)',
      content: `Bekledning i lag gjør at du kan tilpasse deg temperatur og aktivitetsnivå:

**Lag 1 - Innerlag:** Transporterer fukt bort fra kroppen (ull eller syntetisk)
**Lag 2 - Mellomlag:** Isolerer og holder på varmen (fleece, ull, dun)
**Lag 3 - Ytterlag:** Beskytter mot vind og nedbør (vindtett, vanntett)

Husk: Bomull holder på fuktighet og bør unngås som innerlag!`,
    },
    {
      id: 'kroppsoving-vg1-7-1-def-3',
      type: 'definition',
      title: 'Fjellvettreglene',
      content: `1. Planlegg turen og meld fra hvor du går
2. Tilpass turen etter evne og forhold
3. Ta hensyn til vær- og skredvarsel
4. Vær forberedt på uvær og kulde, selv på korte turer
5. Bring nødvendig utstyr for å kunne hjelpe deg selv og andre
6. Ta trygge veivalg. Gjenkjenn skredfarlig terreng og usikker is
7. Bruk kart og kompass. Vit alltid hvor du er
8. Vend i tide - det er ingen skam å snu
9. Spar på kreftene og søk ly om nødvendig`,
    },
    {
      id: 'kroppsoving-vg1-7-1-text-1',
      type: 'text',
      content: `## Utstyr for turer

**Obligatorisk utstyr (dagstur):**
- Sekk med regntrekk
- Ekstra klær (varm og tørr)
- Mat og drikke
- Kart og kompass
- Førstehjelputstyr
- Lommelykt/hodelykt
- Mobiltelefon (ladet)

**I fjellet tillegg:**
- Vindtett og vanntett ytterlag
- Sitteunderlag
- Solbriller og solkrem
- Nødproviant`,
    },
    {
      id: 'kroppsoving-vg1-7-1-tip-1',
      type: 'tip',
      title: 'Nisting',
      content: `God mat på tur gir energi og trivsel! Pakk mat som tåler å ligge i sekken:
- Grovt brød med godt pålegg
- Frukt og grønnsaker
- Nøtter og tørket frukt
- Sjokolade eller annen kvikklunsj
- Varm drikke i termos (kaldt vær)`,
    },
    {
      id: 'kroppsoving-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Turplanlegging til Gaustatoppen',
      problem: `Du skal planlegge en dagstur til Gaustatoppen (1883 moh) med en gruppe på 4 personer. To av deltakerne har lite fjellerfaring. Det er midten av august og værmeldingen lover sol, men det kan komme skyer på ettermiddagen.

**Oppgave:** Lag en komplett plan for turen som inkluderer rute, utstyr, tidspunkt og sikkerhetstiltak.`,
      solution: `**Turplan Gaustatoppen:**

**Rute:** Vi velger den vanligste ruten fra Stavsro (parkering) som er ca 4 timer opp og 3 timer ned. Total tur ca 8 timer inkl pauser. Dette er en godt merket sti som passer for nybegynnere.

**Tidspunkt:**
- Start: 08:00 (tidlig start gir gode marginer)
- På toppen: 12:00 (4 timer opp)
- Ned igjen: 16:00 (inkl lunsjpause)
- Dette gir margin hvis været blir dårligere på ettermiddagen

**Utstyr per person:**
- Sekk med regntrekk
- Ekstra klær: innerlag, fleece/dunjakke, vindtett og vanntett ytterlag, lue og hansker
- Mat: Niste til 2 måltider + snacks
- Drikke: 1,5-2 liter per person
- Kart og kompass + offline kart på mobil
- Førstehjelpsutstyr, hodelykt, solbriller, solkrem, sitteunderlag
- Ladet mobiltelefon

**Sikkerhet:**
- Informer noen hjemme om ruten og forventet returtid
- Sjekk yr.no morgen vi drar
- Svakeste person setter farten
- Bestem vendepunkt-tid (f.eks 13:00)
- Alltid gå samlet

**Backup-plan:** Ved dårlig vær vend i tide (regel 8!). Ved skade ring 113 og gi koordinater.`,
    },
    {
      id: 'kroppsoving-vg1-7-1-example-2',
      type: 'example',
      title: 'Eksempel: Valg av bekledning',
      problem: `Du skal på fottur i lavlandet en septemberdag. Værmeldingen sier 12-15°C, delvis skyet med spredte regnbyger. Det er planlagt en 4-timers tur med variert terreng.

**Oppgave:** Hva skal du ha på deg ved start, og hva tar du med i sekken?`,
      solution: `**På kroppen ved start:**
- Lag 1: Ull- eller syntetisk t-skjorte med lange ermer, turbukse, ullsokker
- Lag 2: Tynn fleece-jakke (eller uten hvis du blir varm lett)
- Lag 3 (ytterlag): IKKE på ved start, men ha tilgjengelig øverst i sekken

**I sekken (tilgjengelig):**
- Vindtett og vanntett skalljakke
- Varmere fleece eller dunjakke
- Ekstra skift med innerlag
- Regntøy (bukse)
- Lue og hansker
- Ekstra sokker

**Hvorfor?** Du vil bli varm når du går - start med lite klær. Ha alltid ekstra varm og tørr klær i sekken. Lagprinsippet lar deg justere underveis. Ved pause: Ta raskt på et ekstra lag før du blir kald.`,
    },
    {
      id: 'kroppsoving-vg1-7-1-def-4',
      type: 'definition',
      title: 'Turledelse og gruppedynamikk',
      content: `Når dere er flere på tur er det smart å ha klare roller:

**Turleder:**
- Har ansvar for planlegging og sikkerheten
- Tar beslutninger ved tvil
- Sjekker at alle har nødvendig utstyr

**Siste mann:**
- Går bakerst og holder oversikt
- Sørger for at ingen blir hengende etter

**Viktig:** Svakeste person setter farten! Det er ingen kappgang.`,
    },
    {
      id: 'kroppsoving-vg1-7-1-tip-2',
      type: 'tip',
      title: 'Blærer på foten',
      content: `Blærer er et vanlig problem på lange turer. Forebygg ved å bruke godt innarbeidede sko, skift til tørre sokker hvis føttene blir våte, og si fra TIDLIG hvis du merker at det gnisser! Ved blære: Dekk med kompeed. Stikk ALDRI hull under tur (infeksjonsfare).`,
    },

    {
      id: 'kroppsoving-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er lagprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Å kle seg i flere lag som kan justeres etter behov',
            multipleChoiceOptions: [
              'Å kle seg i flere lag som kan justeres etter behov',
              'Å ha med ekstra klær i sekken',
              'Å gå i lag med andre',
              'Å pakke sekken i lag',
            ],
          },
        ],
        solution: 'Lagprinsippet innebærer innerlag (fukttransport), mellomlag (isolasjon) og ytterlag (vær-beskyttelse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor skal man unngå bomull som innerlag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Bomull holder på fuktighet og gjør deg kald',
            multipleChoiceOptions: [
              'Bomull holder på fuktighet og gjør deg kald',
              'Bomull er for dyrt',
              'Bomull er for tungt',
              'Bomull lukter',
            ],
          },
        ],
        solution: 'Bomull absorberer svette og holder på fuktigheten nær kroppen, noe som gir rask nedkjøling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fem ting du bør ha med på dagstur.',
        solution: 'Ekstra klær, mat og drikke, kart/kompass, førstehjelp, lommelykt, mobiltelefon, regntøy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Planlegg en dagstur i ditt nærområde. Beskriv rute, utstyr og tidspunkt.',
        solution: 'Svaret bør inneholde: Valgt rute med begrunnelse, pakkeliste tilpasset vær og terreng, beregnet tidsbruk med margin, og plan for å informere noen om turen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Planlegg og gjennomfør en dagstur med en venn eller familie. Bruk fjellvettreglene og lagprinsippet. Ta bilder underveis og skriv en kort rapport om turen.',
        solution: 'Rapporten bør inneholde: Hvor dere gikk, værforhold, hva dere pakket, hvordan lagprinsippet fungerte, utfordringer underveis, og refleksjon over planlegging vs virkelighet. Bilder dokumenterer turen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Kart, kompass og digital navigasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_2: TextbookChapter = {
  id: 'kroppsoving-vg1-7-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.2',
  title: 'Kart, kompass og digital navigasjon',
  description: 'Lær å lese kart, bruke kompass og navigere trygt i naturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke kart og digitale verktøy på en måte som sikrer trygg ferdsel',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-2-intro',
      type: 'text',
      content: `## Kart, kompass og digital navigasjon

Evnen til å navigere er grunnleggende for trygg ferdsel i naturen. Selv om GPS og mobilapper er nyttige, bør du alltid kunne bruke kart og kompass som backup.`,
    },
    {
      id: 'kroppsoving-vg1-7-2-def-1',
      type: 'definition',
      title: 'Kartlesing',
      content: `**Viktige kartelementer:**
- **Målestokk:** Forholdet mellom kart og virkelighet (f.eks. 1:50 000)
- **Høydekurver:** Viser terrengformer. Tette kurver = bratt, spredte = slakt
- **Kartsymboler:** Standardiserte tegn for sti, vei, hytte, vann osv.
- **Rutenett:** UTM-koordinater for presis stedfesting
- **Nordpil:** Viser kartets orientering`,
    },
    {
      id: 'kroppsoving-vg1-7-2-def-2',
      type: 'definition',
      title: 'Kompassbruk',
      content: `**Kompassets deler:**
- Kompasshus med gradskive (0-360°)
- Magnetisk nål (rød ende peker mot nord)
- Retningslinjer i bunnen
- Siktespeil eller sikte

**Grunnleggende bruk:**
1. Legg kartet flatt
2. Legg kompasset på kartet med kanten langs ønsket reiseretning
3. Drei kompasshuset til nord-sør-linjene er parallelle med kartets rutenett
4. Løft kompasset og drei deg selv til nålen peker på N
5. Gå i siktets retning`,
    },
    {
      id: 'kroppsoving-vg1-7-2-def-3',
      type: 'definition',
      title: 'GPS og digitale verktøy',
      content: `**Fordeler med GPS/mobil:**
- Viser nøyaktig posisjon
- Kan lagre ruter og waypoints
- Gir avstand og høydemeter

**Ulemper:**
- Avhengig av batteri
- Kan miste signal
- Kan gi falsk trygghet

**Nyttige apper:** Norgeskart, UT.no, Peakbook, Strava`,
    },
    {
      id: 'kroppsoving-vg1-7-2-text-1',
      type: 'text',
      content: `## Praktisk navigasjon

**Orientering av kartet:**
1. Finn et landemerke du kan se
2. Finn det samme på kartet
3. Drei kartet så det stemmer med terrenget

**Stedfesting:**
1. Finn to-tre synlige landemerker
2. Ta peiling til hvert med kompasset
3. Tegn linjene på kartet - du er der de krysser

**Følge en retning:**
1. Ta ut retning på kartet
2. Sikt mot et landemerke i riktig retning
3. Gå til landemerket, gjenta`,
    },
    {
      id: 'kroppsoving-vg1-7-2-tip-1',
      type: 'tip',
      title: 'Misvisning',
      content: `Magnetisk nord og geografisk nord er ikke det samme. I Norge er forskjellen liten, men i noen områder må du korrigere for misvisning. Sjekk kartets tegnforklaring!`,
    },
    {
      id: 'kroppsoving-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Bruk av kompass',
      problem: `Du står ved en hytte og skal gå til en topp som ligger nordvest for deg. Hvordan bruker du kompasset for å finne riktig retning?

**Oppgave:** Beskriv steg-for-steg hvordan du tar ut en kompassretning.`,
      solution: `**Fremgangsmåte:**

**Steg 1: Legg kartet flatt**
- Finn din posisjon (hytta) på kartet
- Finn målet (toppen) på kartet

**Steg 2: Legg kompasset på kartet**
- Legg kompassets kant langs linjen fra der du er til der du skal
- Pilen på kompasset skal peke i den retningen du skal gå

**Steg 3: Drei kompasshuset**
- Drei det roterende huset til nord-sør-linjene i bunnen er parallelle med kartets rutenett
- Kontroller at N på kompasset peker mot nord på kartet

**Steg 4: Les av grader**
- Les av grader ved siktepunktet (eksempel: nordvest = ca 315°)

**Steg 5: Bruk kompasset i terrenget**
- Løft kompasset fra kartet, hold det vannrett
- Drei deg selv til magnetnålen peker på N i kompasshuset
- Sikt langs retningslinjen - dette er din reiseretning
- Velg et landemerke (tre, stein, fjelltopp) i denne retningen
- Gå til landemerket, gjenta prosessen

**Viktig:** Husk å holde kompasset unna metallgjenstander (kniver, mobiltelefon) da dette kan påvirke magnetnålen.`,
    },
    {
      id: 'kroppsoving-vg1-7-2-text-2',
      type: 'text',
      content: `## Digital navigasjon og apper

Moderne teknologi har gjort navigasjon enklere, men det er viktig å forstå både mulighetene og begrensningene.

**Nyttige navigasjonsapper:**
- **Norgeskart:** Gratis topografiske kart fra Kartverket, fungerer offline
- **UT.no:** DNTs turapp med merkede ruter og hytter
- **Peakbook:** Fjelltopper og planlegging av turer
- **Strava:** Sporingsapp for aktivitet
- **Yr.no:** Værmelding med timesvarsel

**Fordeler med GPS/mobilapps:**
- Nøyaktig posisjon (vanligvis innen 5-10 meter)
- Kan lagre ruter og waypoints for senere bruk
- Viser høyde, avstand og beregnet tid
- Kan dele posisjon med andre
- Søk- og redningsfunksjon (112-appen)

**Ulemper og risikoer:**
- Avhengig av batteri (kan gå tomt)
- Kan miste GPS-signal i trange daler eller tett skog
- Telefonen kan bli våt eller skadet
- Kan gi falsk trygghet og redusert oppmerksomhet på omgivelsene
- Noen områder har ikke mobildekning

**Praktiske tips:**
- Last ned offline kart FØR turen
- Ha alltid powerbank med
- Bruk flymodus for å spare batteri
- Ta skjermbilde av viktige kartutsnitt
- Bruk vann- og støttett mobilpose
- Lær grunnleggende kart og kompass uansett!`,
    },
    {
      id: 'kroppsoving-vg1-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Stedfesting med trekantpeiing',
      problem: `Du er på tur i fjellet og har gått deg litt bort. Du kan se tre kjente landemerker: et fjell i nord, en hytte i nordøst, og en toppstolpe i øst. Hvordan finner du nøyaktig hvor du er?

**Oppgave:** Beskriv hvordan du bruker trekantpeiing for å finne din posisjon.`,
      solution: `**Trekantpeiing - slik gjør du:**

**Steg 1: Identifiser landemerkene**
- Du ser: Fjell (nord), hytte (nordøst), toppstolpe (øst)
- Finn samme landemerker på kartet

**Steg 2: Ta peiling til første landemerke (fjellet)**
- Sikt mot fjellet med kompasset
- Les av grader (eksempel: 10°)
- Legg kompasset på kartet med kanten mot fjellet
- Drei hele kompasset til nord-sør-linjene er parallelle
- Tegn en linje fra fjellet mot deg

**Steg 3: Ta peiling til andre landemerke (hytta)**
- Sikt mot hytta
- Les av grader (eksempel: 45°)
- Gjør samme prosess: Legg kompasset på kartet, drei, tegn linje

**Steg 4: Ta peiling til tredje landemerke (toppstolpen)**
- Sikt mot stolpen
- Les av grader (eksempel: 90°)
- Tegn tredje linje

**Steg 5: Finn krysningspunktet**
- Der de tre linjene krysser hverandre, er du!
- Det kan bli en liten trekant - du er et sted i denne trekanten

**Nøyaktighet:**
- Jo mer spredt landemerkene er (ikke alle i samme retning), jo mer nøyaktig blir stedfestingen
- To peilinger kan være nok, men tre gir bedre nøyaktighet

**Når er dette nyttig?**
- Hvis du har gått deg bort
- Når du vil vite nøyaktig hvor du er på et langt strekk uten tydelige landemerker
- For å kontrollere GPS-posisjon`,
    },
    {
      id: 'kroppsoving-vg1-7-2-def-4',
      type: 'definition',
      title: 'Høydekurver og terrengforståelse',
      content: `Å lese høydekurver er essensielt for å forstå terrenget:

**Grunnregler:**
- **Tette kurver** = bratt terreng (vanskelig å gå)
- **Spredte kurver** = slakt terreng (lett å gå)
- **V-form oppover** = dal eller bekk
- **V-form nedover** = ås eller rygg
- **Sirkelform** = topp eller høyde
- **Kurveavstand:** Vanligvis 20m mellom hver kurve på turkart

**Praktisk bruk:**
- Planlegg rute langs lette partier hvis gruppen er uerfaren
- Unngå bratte nedoverbakker med tunge sekker
- Finn naturlige passeringspunkter (lavpunkt mellom topper)
- Identifiser områder med risiko for steinsprang (bratte fjellsider)

**Tips:** Når du står i terrenget, drei kartet slik at høydekurvene på kartet matcher terrenget du ser. Dette gjør det enklere å forstå hvor du er.`,
    },
    {
      id: 'kroppsoving-vg1-7-2-tip-2',
      type: 'tip',
      title: 'Navigasjon i tåke',
      content: `Når sikten er dårlig blir navigasjon ekstra viktig:
- Ta ut nøyaktig kompassretning og følg den strengt
- Tell skritt på lange strekk (100 dobbeltskritt = ca 150m)
- Bruk GPS som backup for å sjekke posisjon
- Gå langsommere og ha tett kontakt i gruppen
- Vurder alltid å snu hvis dere er usikre - det er ingen skam!`,
    },
    {
      id: 'kroppsoving-vg1-7-2-text-3',
      type: 'text',
      content: `## Praktisk navigasjonsøving

Den beste måten å lære navigasjon er å øve! Her er noen gode øvelser:

**Øvelse 1: Orienteringsløp for nybegynnere**
- Start i kjent område (skog eller park)
- Sett ut 5-7 poster med unike koder
- Marker postene på kart
- Gå fra post til post med kart og kompass
- Skriv ned kodene for å bevise at du har funnet alle

**Øvelse 2: Kompassvandring**
- Velg en retning (f.eks 90°)
- Gå 100 meter i denne retningen
- Skift retning (f.eks 180°)
- Gå 100 meter
- Fortsett med 270° og tilslutt 0° (nord)
- Du skal ende opp nær startpunktet!

**Øvelse 3: Trekantpeiing**
- Gå til et sted du ikke kjenner nøyaktig posisjonen til
- Finn tre landemerker du kan se
- Bruk trekantpeiing for å finne din posisjon på kartet
- Bruk GPS for å sjekke hvor nøyaktig du var

**Øvelse 4: Nattnavigasjon**
- Samme som dagsøvelser, men i mørket med hodelykt
- Navigasjon er vanskeligere når du ikke ser landemerker
- God øving på ren kompassnavigering!

**Konkurranseorientering:**
Vurder å bli med i en orienteringsklubb - en fantastisk måte å lære navigasjon på samtidig som du får mosjon!`,
    },
    {
      id: 'kroppsoving-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr målestokk 1:50 000?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: '1 cm på kartet = 500 meter i virkeligheten',
            multipleChoiceOptions: [
              '1 cm på kartet = 500 meter i virkeligheten',
              '1 cm på kartet = 50 meter i virkeligheten',
              '1 cm på kartet = 5 km i virkeligheten',
              '1 cm på kartet = 50 km i virkeligheten',
            ],
          },
        ],
        solution: '1:50 000 betyr at 1 cm på kartet tilsvarer 50 000 cm (500 m) i terrenget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva viser høydekurvene på et kart?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Terrengformer og høyde over havet',
            multipleChoiceOptions: [
              'Terrengformer og høyde over havet',
              'Stier og veier',
              'Vannløp',
              'Vegetasjon',
            ],
          },
        ],
        solution: 'Høydekurver viser terrengformer. Tette kurver = bratt terreng, spredte kurver = slakt terreng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør du kunne bruke kart og kompass selv om du har GPS?',
        solution: 'GPS kan gå tom for batteri, miste signal i daler eller tett skog, eller bli skadet. Kart og kompass fungerer alltid og gir også bedre forståelse av terrenget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Øv på å ta ut en kompassretning fra kartet og følge den i terrenget.',
        solution: 'Praktisk øvelse: Legg kompasset på kartet, still inn retning, orienter deg, og gå mot et landemerke i riktig retning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Bruk kart og kompass (eller GPS som backup) for å navigere til et punkt minst 2 km unna. Dokumenter: Startposisjon, målpunkt, kompassretning, faktisk rute, og hvordan navigasjonen fungerte. Ta bilde ved målpunktet.',
        solution: 'Svaret bør inneholde: Kart med inntegnet rute, kompassretning i grader, beskrivelse av navigeringsprosessen, utfordringer underveis, bilde som bevis, refleksjon over nøyaktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Friluftsliv vinter
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_3: TextbookChapter = {
  id: 'kroppsoving-vg1-7-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.3',
  title: 'Friluftsliv vinter',
  description: 'Lær om vinteraktiviteter, sikkerhet og kulde.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-3-intro',
      type: 'text',
      content: `## Friluftsliv vinter

Vinteren byr på fantastiske muligheter for friluftsliv i Norge. Med riktig utstyr og kunnskap kan du nyte snø, is og kulde trygt.

**Vinteraktiviteter:**
- Langrenn (klassisk og skøyting)
- Alpint og telemark
- Truger og snøsko
- Isklatring og aking
- Vintertur med overnatting`,
    },
    {
      id: 'kroppsoving-vg1-7-3-def-1',
      type: 'definition',
      title: 'Kulde og hypotermi',
      content: `**Hypotermi** er når kroppstemperaturen synker under 35°C.

**Symptomer:**
- Skjelving (tidlig stadium)
- Forvirring og dårlig koordinasjon
- Trøtthet og sløvhet
- Ved alvorlig: Skjelvingen stopper, bevisstløshet

**Forebygging:**
- Riktig bekledning (lagprinsippet)
- Hold deg tørr
- Spis og drikk regelmessig
- Hold deg i bevegelse`,
    },
    {
      id: 'kroppsoving-vg1-7-3-def-2',
      type: 'definition',
      title: 'Frostskader',
      content: `Frostskader oppstår når vev fryser, oftest i fingre, tær, nese og ører.

**Grader:**
- **Grad 1 (frostnip):** Hvit, nummen hud. Reversibel.
- **Grad 2:** Blemmer, hevelse
- **Grad 3-4:** Dyp vevsskade

**Behandling:**
- Oppvarm gradvis i lunkent vann (37-39°C)
- IKKE gni eller massér
- Oppsøk lege ved alvorlige frostskader`,
    },
    {
      id: 'kroppsoving-vg1-7-3-def-3',
      type: 'definition',
      title: 'Skredfare',
      content: `Snøskred er en av de største farene i vinterfjellet.

**Skredfarlige forhold:**
- Bratt terreng (30-45 grader)
- Nysnø eller vindtransportert snø
- Temperaturendringer
- Svake lag i snødekket

**Sjekk alltid varsom.no før fjellturer!**`,
    },
    {
      id: 'kroppsoving-vg1-7-3-text-1',
      type: 'text',
      content: `## Skiutstyr og teknikk

**Klassisk langrenn:**
- Ski med feste under foten
- Diagonalgang: Naturlig arm/bein-koordinasjon
- Staking: Framdrift fra stavene
- Fiskebein i motbakker

**Skøyting (fristil):**
- Ski uten feste
- Sideveis fraspark
- Krever bredere, preparerte løyper
- Mer krevende teknikk`,
    },
    {
      id: 'kroppsoving-vg1-7-3-tip-1',
      type: 'tip',
      title: 'Smøring',
      content: `Klassiske ski trenger festesmurning for grep og glidesmurning for gli. Bruk smøretips på ski.no eller spør i sportsbutikken. Felleski er et enkelt alternativ som ikke krever smøring.`,
    },
    {
      id: 'kroppsoving-vg1-7-3-warning-1',
      type: 'warning',
      title: 'Isvarsling',
      content: `Gå aldri ut på usikker is! Sjekk istykkelse (minimum 10 cm for gange), unngå områder med strøm eller utløp, og ha med ispigger og kasteline.`,
    },
    {
      id: 'kroppsoving-vg1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Forebygging av hypotermi',
      problem: `Du er på en dagstur i fjellet i mars. En i gruppa begynner å skjelve mye, virker trøtt og svarer litt uklart på spørsmål. Personen har våte klær etter å ha svettet mye i en bratt bakke.

**Oppgave:** Hva gjør du? Hvilke tiltak må du sette inn raskt?`,
      solution: `**Situasjon:** Dette er tidlige tegn på hypotermi (nedkjøling). Rask handling er kritisk!

**Umiddelbare tiltak:**

**1. STOPP turen umiddelbart**
- Ikke gå lenger - tilstanden vil bare bli verre
- Finn ly hvis mulig (bak stor stein, i lavvo, eller bygg snøhule hvis nødvendig)

**2. Bytt til tørre, varme klær**
- Fjern ALLE våte klær
- Kle på tørt innerlag (ull eller syntetisk)
- Legg på ekstra varmeisolerende lag (fleece, dun)
- Sett på lue, hansker og ekstra sokker
- Bruk vindtett ytterlag

**3. Isoler fra bakken**
- Bruk sitteunderlag eller sekk
- Legg ikke rett på snø eller kald stein

**4. Gi energi**
- Varm, søt drikke (te, kakao, saft)
- Sjokolade, nøtter, eller annen energirik mat
- Kroppen trenger energi for å produsere varme

**5. Ekstra varme**
- Få personen til å bevege seg lett (armer, bein) hvis mulig
- Bruk kroppskontakt: Sitt/ligg tett inntil personen
- Bruk varmeteppe (redningsfolie) hvis du har

**6. Overvåk tilstand**
- Snakk med personen hele tiden
- Hvis tilstanden blir verre (slutter å skjelve, blir mer forvirret): Ring 113 UMIDDELBART
- Gi nøyaktig posisjon

**7. Vurder videre ferd**
- Hvis personen blir bedre: Gå sakte ned, hold pauser, hold varmen
- Hvis ikke bedring: Bli på stedet og vent på hjelp
- IKKE la personen sove

**Forebygging:**
- Jevnlige pauser for mat og drikke
- Bytt våte klær før du blir kald
- Si fra tidlig hvis du fryser
- Ha alltid ekstra varmeklær i sekken`,
    },
    {
      id: 'kroppsoving-vg1-7-3-text-2',
      type: 'text',
      content: `## Vinterbekledning og utstyr

Riktig bekledning og utstyr er avgjørende for god opplevelse og sikkerhet om vinteren.

**Bekledning for langrenn:**
- **Aktiv trening/konkurranse:** Tynn, tettsittende dress, tynn hodelykt/pannebånd, tynne hansker
- **Langtur:** Lag-på-lag, vindtett ytterlag i sekken, varmere hansker/luer

**Bekledning for vintertur i fjellet:**
- **Innerlag:** Ull eller syntetisk (ALDRI bomull)
- **Mellomlag:** Kraftig fleece eller tynn dunjakke
- **Ytterlag:** Vindtett og vannavvisende jakke og bukse
- **Ekstra:** Dunjakke til pauser, ekstra lue, skjerf, ekstra hansker/votter

**Særlig viktig om vinteren:**
- **Hode:** Du taper mye varme gjennom hodet - ha alltid lue med!
- **Hender:** Ha både tynne hansker (aktiv) og varme votter (pause)
- **Føtter:** Gode, varme støvler eller skisko, ullsokker (gjerne to lag)
- **Ansikt:** Buff eller skjerf for å beskytte mot vind og kulde

**Utstyr for skitur:**
- Ski (klassisk eller skøyting)
- Staver (riktig lengde: klassisk = armhulehøyde, skøyting = nesehøyde)
- Skismøring eller feller
- Sekk med ryggventilering
- Drikkeflaske (termos om det er veldig kaldt)
- Smørebod (feste, glider, skrape)
- Hodelykt (kort vinterdager!)

**Sikkerhetsutstyr vinter:**
- Ekstra varmeklær
- Redningsfolie/varmeteppe
- Graveske (kan bygge snøhule i nødsfall)
- Termos med varm drikke
- Ekstra mat (kroppen bruker mer energi i kulda)`,
    },
    {
      id: 'kroppsoving-vg1-7-3-example-2',
      type: 'example',
      title: 'Eksempel: Planlegging av skitur i fjellet',
      problem: `Du skal på en heldagstur på ski i påsken. Turen går fra Finse til Finsehytta (ca 8 km). Værmeldingen lover sol og -5°C, men vind kan gi følt temperatur på -15°C.

**Oppgave:** Hva må du tenke på ved planlegging og gjennomføring?`,
      solution: `**Planlegging av skituren:**

**Før turen - hjemme:**
1. **Værmelding:** Sjekk yr.no og varsom.no (skredvarsel)
2. **Rute:** Last ned offline kart på mobil, studer ruten på kart
3. **Informer:** Gi beskjed til noen om hvor du går og når du er tilbake
4. **Utstyr:** Pakk sekken kvelden før

**Pakkeliste:**
- Ski, staver, skismøring/feller
- Sekk (25-30L)
- Bekledning:
  * På kroppen: Tynn ull-innerlag, tynn fleece, softshell-bukse
  * I sekken: Vindjakke, dunjakke, ekstra lue, varme votter, buff
- Mat: Niste til 2 måltider + reserve, energibarer, sjokolade
- Drikke: 1-1,5L i termos (varm saft/te) + vandflaske
- Navigasjon: Kart, kompass, GPS/mobil med offline kart
- Sikkerhet: Førstehjelpsutstyr, redningsfolie, graveske, visselpipe
- Annet: Solbriller, solkrem, sitteunderlag, toalettpapir, skibriller (ved snøfokk)

**Dag for avreise - morgen:**
- Sjekk siste værmelding
- Spis god frokost (kroppen trenger energi!)
- Test skiene (har de grep?)
- Gjennomgang av utstyr

**Under turen:**
- Start rolig, finn rytme
- Ta pauser hver time: Drikk, spis litt, sjekk alle i gruppa
- Bytt klær hvis du blir varm (unngå svetting)
- Følg merket løype/skiløp hvis tilgjengelig
- Ved sterk vind: Vurder å snu eller søke le

**Husk:**
- Fjellet krever respekt selv på fine dager
- Været kan endre seg raskt
- Vend i tide hvis forholdene blir vanskelige

**Ekstratips:**
- Smør skiene kvelden før
- Pakk regntøy selv om værmeldingen er god
- Ha alltid 112-appen installert`,
    },
    {
      id: 'kroppsoving-vg1-7-3-def-4',
      type: 'definition',
      title: 'Snøhulebygging',
      content: `I nødsituasjoner kan en snøhule redde liv:

**Når bygge snøhule?**
- Ved akutt dårlig vær (snøstorm)
- Hvis noen blir syk/skadet og dere må vente på hjelp
- Ved planlagt vinterovernatting

**Slik bygger du:**
1. Finn en stor snøfonn (minst 2 meter dyp)
2. Grav inngang lav i fonnen
3. Grav deg oppover og utover (varmen stiger opp)
4. Lag skap høyere enn inngangen
5. Lag luftehull i taket (bruk skistav)
6. Bygg inngang med sekker/snøblokker

**Viktig:**
- Snøen isolerer godt - det blir overraskende varmt!
- Ha alltid ventilasjon (lufthull)
- Bruk sitteunderlag/sekk som isolasjon mot snøen
- Tenn ALDRI bål inne (kullosforgiftning!)

**Alternativ:** Grøft i snøen dekket med ski, staver og sekk kan også gi ly.`,
    },
    {
      id: 'kroppsoving-vg1-7-3-tip-2',
      type: 'tip',
      title: 'Spisestrategi på vintertur',
      content: `Kroppen din bruker MYE energi for å holde varmen om vinteren. Spis og drikk oftere enn om sommeren:
- Spis minst hver time (energibarer, sjokolade, nøtter)
- Drikk varmt og søtt (kroppen trenger væske og sukker)
- Ha alltid reserve-mat
- Stopp ALDRI for lenge uten å spise - blodsukker faller raskt i kulda
- Fet mat (nøtter, salami, ost) gir langvarig energi`,
    },
    {
      id: 'kroppsoving-vg1-7-3-text-3',
      type: 'text',
      content: `## Andre vinteraktiviteter

Vinteren byr på mange andre spennende aktiviteter utover langrenn:

**Truger og snøsko:**
- Flott alternativ når det er mye løs snø
- Går dit skiløypene ikke går
- Mindre teknisk krevende enn ski
- God trening!

**Akebrett og slalåm:**
- Morsomt på preparerte baner
- Husk hjelm og riktig sikkerhetsutstyr
- Ta hensyn til andre på bakken
- Lær riktig teknikk og fall

**Isklatring:**
- Klatring på frosne fosser
- Krever spesialutstyr og opplæring
- Aldri forsøk uten erfaren guide!
- Fantastisk opplevelse for eventyrlystne

**Skøyter:**
- På innsjøer eller kunstisbaner
- Sjekk istykkelsen (minst 10 cm for gange/skøyter)
- Unngå områder med strøm eller utløp
- Ha med ispigger

**Vinterovernatting:**
- Lavvo, telt eller snøhule
- Krever god forberedelse
- Fantastisk naturopplevelse
- Start med organisert tur før du drar alene!

**Hundekjøring:**
- Tradisjonell samisk og nordnorsk transport
- Nå også populær turistaktivitet
- Lærer deg om hundenes behov og velferd
- Flott måte å oppleve vinternaturen på`,
    },
    {
      id: 'kroppsoving-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er tidlige symptomer på hypotermi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Skjelving, nummenhet og forvirring',
            multipleChoiceOptions: [
              'Skjelving, nummenhet og forvirring',
              'Svetting og rødhet',
              'Hodepine',
              'Kvalme',
            ],
          },
        ],
        solution: 'Tidlige tegn på hypotermi er skjelving, kald og blek hud, nummenhet og begynnende forvirring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan behandler du frostskader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig behandling.',
            solution: 'Oppvarm gradvis i lunkent vann (37-39°C)',
            multipleChoiceOptions: [
              'Oppvarm gradvis i lunkent vann (37-39°C)',
              'Gni og massér området',
              'Legg på varmt vann',
              'La det tine av seg selv',
            ],
          },
        ],
        solution: 'Frostskader skal oppvarmes gradvis i lunkent vann. ALDRI gni eller massér, da dette kan skade vevet mer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør du sjekke før en fjelltur om vinteren?',
        solution: 'Værmelding (yr.no), skredvarsel (varsom.no), føreforhold, dagslys, og informer noen om turen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen på klassisk og skøyting i langrenn.',
        solution: 'Klassisk: Ski i spor, diagonalgang med feste under foten. Skøyting: Sideveis fraspark som på skøyter, ski uten feste, krever preparert bane.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Gjennomfør en vinteraktivitet (langrenn, skøyting, truger, akebrett, eller vintertur). Før aktiviteten: Sjekk vær og skredvarsel (hvis relevant). Under: Bruk riktig bekledning (lagprinsippet). Etter: Reflekter over opplevelsen.',
        solution: 'Rapporten bør inneholde: Beskrivelse av aktivitet og sted, værforhold, bekledning brukt, hvordan kroppen reagerte på kulde/varme, sikkerhetsvurderinger, og personlig refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Friluftsliv vår og sommer
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_4: TextbookChapter = {
  id: 'kroppsoving-vg1-7-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.4',
  title: 'Friluftsliv vår og sommer',
  description: 'Lær om sommeraktiviteter, vannsikkerhet og ferdsel.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-4-intro',
      type: 'text',
      content: `## Friluftsliv vår og sommer

Vår og sommer åpner for et mangfold av friluftsaktiviteter. Fra fjellturer til padling og bading - mulighetene er mange!

**Aktiviteter:**
- Vandring og fjelltur
- Padling (kajakk, kano, SUP)
- Sykling (sti, landevei, terreng)
- Bading og svømming
- Klatring og via ferrata`,
    },
    {
      id: 'kroppsoving-vg1-7-4-def-1',
      type: 'definition',
      title: 'Vannsikkerhet',
      content: `**Badevettreglene:**
1. Lær å svømme
2. Gå aldri alene ut i vannet
3. Gå ikke ut i vannet etter alkohol
4. Avkjøl deg før du bader
5. Ikke hopp på ukjent sted
6. Bruk alltid flytevest i båt

**Kuldsjokk:** Kaldt vann kan gi sjokkreaksjon med hyperventilering og panikk. Gå gradvis ut i vannet.`,
    },
    {
      id: 'kroppsoving-vg1-7-4-def-2',
      type: 'definition',
      title: 'Padling',
      content: `**Grunnleggende padleteknikk (kajakk):**
- Sitt oppreist med god støtte
- Hold padleåren med riktig grep
- Roter overkroppen, ikke bare armene
- Bruk magmusklene for kraft

**Sikkerhet:**
- Alltid flytevest
- Våtdrakt i kaldt vann
- Kjenn egne grenser
- Padlingsvettreglene`,
    },
    {
      id: 'kroppsoving-vg1-7-4-text-1',
      type: 'text',
      content: `## Sykling i naturen

**Stisykling:**
- Respekter naturen og andre brukere
- Hold deg til merkede stier
- Bruk hjelm
- Tilpass farten til terrenget

**Utstyr:**
- God sykkel tilpasset terrenget
- Hjelm (obligatorisk!)
- Hansker, briller
- Reparasjonsutstyr`,
    },
    {
      id: 'kroppsoving-vg1-7-4-tip-1',
      type: 'tip',
      title: 'Solbeskyttelse',
      content: `Om sommeren er solbeskyttelse viktig:
- Solkrem med høy faktor (minst 30)
- Solbriller og hatt/caps
- Unngå sterk sol midt på dagen
- Drikk nok væske`,
    },
    {
      id: 'kroppsoving-vg1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Planlegging av padletur',
      problem: `Du skal på en padletur i kajakk langs kysten en junidag. Turen er på ca 10 km og tar anslagsvis 3-4 timer. Værmeldingen lover 18°C og lett bris, men det kan komme regnbyger.

**Oppgave:** Hva må du planlegge og pakke med?`,
      solution: `**Planlegging av padletur:**

**Før turen:**
1. **Sjekk vær og vind:** Yr.no og nautisk værvarsel
2. **Sjekk tidevann:** Viktig langs kysten!
3. **Planlegg rute:** Studer sjøkart, marker mulige nødlandinger
4. **Informer:** Si fra til noen om rute og forventet retur
5. **Ferdigheter:** Vurder egne og gruppens ferdigheter ærlig

**Obligatorisk sikkerhetsutstyr:**
- **Flytevest:** MÅ brukes hele tiden!
- **Våtdrakt eller tørdrakt:** Selv om lufta er 18°C, er sjøen kanskje bare 12°C
- **Skjørt (spraydeck):** Holder vannet ute av kajakken
- **Padleåre + reservepadleåre**
- **Lenseutstyr:** Svamp og øsekar

**Annet utstyr:**
- Vanntette beholdere/sekk for mat, klær, mobil
- Ekstra klær i vanntett pose
- Mat og drikke (minst 1,5L vann)
- Førstehjelpsutstyr i vanntett beholder
- Mobiltelefon i vanntett pose
- Fløyte (på flytevesten)
- Sjøkart og kompass
- Kaste ein (redningsleine)

**Bekledning:**
- Våtdrakt (om vanntemperaturen er lav)
- Evt langermet tørrskjorte over
- Padlehansker (for å unngå blemmer)
- Solbriller med snor
- Solkrem og hatt/caps

**Under turen:**
- Hold deg nær land
- Vurder vind og bølger kontinuerlig
- Ta pauser på land
- Hold gruppa samlet
- Snu hvis forholdene blir dårligere

**Hvis du velter:**
1. IKKE PANIKK - flytevesten holder deg flytende
2. Hold deg til kajakken
3. Forsøk eskimorulle hvis du kan
4. Hvis ikke: Bruk nassistanse fra andre, eller svøm til land om det er nært
5. Kom deg raskt på land og bytt til tørre klær

**Viktig:**
- Øv på grunnleggende redning FØR du drar på tur
- Aldri gå alene på padletur
- Kaldt vann = livstruende selv om været er fint!`,
    },
    {
      id: 'kroppsoving-vg1-7-4-text-2',
      type: 'text',
      content: `## Vannsikkerhet og drukning

Vann er flott å ferdes i og på, men krever respekt og kunnskap om sikkerhet.

**Badevettreglene (alle bør kunne disse!):**
1. Lær å svømme
2. Gå aldri alene ut i vannet
3. Gå ikke ut i vannet etter alkohol eller rus
4. Avkjøl deg før du bader
5. Ikke hopp på ukjent sted
6. Bruk alltid flytevest i båt
7. Respekter flagg og skilt ved badeplasser

**Kuldsjokk - en skjult fare:**
Kaldt vann (under 15°C) kan gi kuldsjokk selv for gode svømmere.

**Hva skjer:**
- Brå eksponering for kaldt vann gir refleks-hyperventilering
- Du kan ikke kontrollere pusten i 30-60 sekunder
- Risiko for innånding av vann = drukning
- Panikk kan forsterke reaksjonen

**Forebygging:**
- Gå GRADVIS ut i vannet (ikke hopp)
- Vann deg til temperaturen
- Bruk våtdrakt hvis vannet er kaldt
- Aldri svøm langt ut i kaldt vann

**Hvis noen er i vann-nød:**
1. Varsle 113 umiddelbart
2. IKKE hopp etter (du kan også drukne)
3. Kast en redningsbøye, tau, eller flytende gjenstand
4. Strekk ut en stang, padleåre eller gren fra land
5. Hvis du MÅ svømme ut: Ha flytevest, ta med noe som flyter

**Etter redning fra kaldt vann:**
- Få personen på land
- Fjern våte klær
- Varm opp gradvis med tørre klær og tepper
- Gi varm drikke hvis ved bevissthet
- Ring 113 - selv om personen virker ok kan det oppstå komplikasjoner`,
    },
    {
      id: 'kroppsoving-vg1-7-4-example-2',
      type: 'example',
      title: 'Eksempel: Trygg bading i ferskvann',
      problem: `Du er på tur til et fjellvann en julihdag. Vannet ser innbydende ut, men du vet ikke hvor dypt det er eller om det er strøm. Noen i gruppa vil hoppe fra en stor stein ut i vannet.

**Oppgave:** Hvordan sikrer dere trygg bading?`,
      solution: `**Trygg bading i ukjent ferskvann:**

**Før bading - sjekk dette:**

**1. Undersøk området**
- Gå langs bredden og se ned i vannet
- Sjekk dybde nær land (bruk stein eller stav)
- Se etter store steiner eller stumper under vannet
- Merk deg om det er strøm eller utløp

**2. Test vannet først**
- En person går LANGSOMT ut (ikke hopper!)
- Følg bunnen nedover med føttene
- Er det trygt? Ok dyp? Ikke steiner?
- Først når én har testet kan andre følge etter

**3. Vurder hopping**
- **ALDRI hopp på ukjent sted** - dette er årsak til mange alvorlige skader
- For å hoppe trygt må du:
  * Kjenne vannet godt
  * Vite at det er dypt nok (minst 3 meter)
  * Vite at det ikke er stein eller stumper
  * Hoppe rett ut (ikke stupe)
- Hvis du ikke oppfyller ALT dette: IKKE HOPP!

**Under bading:**
- Hold sammen, pass på hverandre
- Svøm ikke for langt ut
- Vær obs på at du kan bli kald selv i ferskvann
- Unngå områder med strøm eller utløp (innsjø/elv)

**I dette tilfellet:**
Siden vannet er ukjent, bør gruppen:
1. IKKE hoppe fra steinen
2. En person går forsiktig ut fra stranda
3. Tester dybde og bunn
4. Hvis trygt: Bad nær land
5. Hvis usikkert: La være!

**Husk:** Mange drukningsulykker og nakkeskader skjer ved hopping på ukjente steder. Det er ikke verdt risikoen - uansett hvor tøft det ser ut!

**Alternativ:**
- Finn et kjent badested med merking
- Spør lokalkjente om gode badeplasser
- Bruk offisielle badeplasser når mulig`,
    },
    {
      id: 'kroppsoving-vg1-7-4-def-3',
      type: 'definition',
      title: 'Stand Up Paddleboard (SUP)',
      content: `SUP er en populær sommeraktivitet som kombinerer padling og balanse:

**Utstyr:**
- Brett (oppblåsbart eller hardboard)
- Padle (justerbar lengde)
- Flytevest (obligatorisk!)
- Leash (line som fester deg til brettet)

**Grunnleggende teknikk:**
1. Start på knærne
2. Reis deg sakte opp, en fot av gangen
3. Føttene i skulderbredde, midt på brettet
4. Bøy knærne lett
5. Padle skiftevis på hver side
6. Se frem (ikke ned!)

**Sikkerhet:**
- Alltid flytevest
- Bruk leash (ellers kan brettet drive fra deg)
- Start på rolig vann (innsjø)
- Sjekk vær og vind
- Øv på å komme opp på brettet etter fall

**Når du faller (og det gjør du!):**
- Fall til siden (ikke fremover/bakover)
- Bruk leash til å dra brettet til deg
- Klatre opp fra siden (ikke fra bak/foran)

SUP er lett å lære og morsomt for hele familien!`,
    },
    {
      id: 'kroppsoving-vg1-7-4-tip-2',
      type: 'tip',
      title: 'Vanntemperatur og eksponeringstid',
      content: `Husk at VANNTEMPERATUR, ikke lufttemperatur, avgjør hvor lenge du trygt kan være i vannet:
- Under 10°C: Kun minutter (alvorlig kuldsjokk-risiko)
- 10-15°C: 30-60 minutter før hypotermi
- 15-20°C: 1-2 timer (bruk våtdrakt ved lang eksponering)
- Over 20°C: Flere timer, men drikkepause og solkrem!

Sjekk alltid vanntemperatur før lengre svømmeturer eller padleturer.`,
    },
    {
      id: 'kroppsoving-vg1-7-4-text-3',
      type: 'text',
      content: `## Fjellvandring og klatring

Sommer er perfekt for fjellturer, men krever respekt for været og terrenget.

**Fjellvandring:**
- Bruk fjellvettreglene (gjelder hele året!)
- Pakk for ALLE værtyper (sol, regn, vind, kulde)
- Solbeskyttelse viktig: Solkrem, solbriller, hatt
- Drikk mye (lett å bli dehydrert i sola)
- Start tidlig (unngå varmeste timer midt på dagen)
- Vær obs på tordenvær (farlig i åpent fjellterreng!)

**Via Ferrata:**
- Klatrerute med fast sikring (wire og stigetrinn)
- Krever sikringsutstyr: Sele, hjelm, karabiner
- Perfekt for deg som vil prøve klatring
- Ta alltid guide eller kurs første gangen!
- Populære steder: Loen, Rjukan, Romsdalseggen

**Toppturer:**
- Populært å gå på kjente topper (Galdhøpiggen, Preikestolen, etc)
- Sjekk turrapporter på ut.no eller andre turguider
- Studer kart nøye
- Vurder snø og is (kan ligge sent på sommeren)
- Vend i tide hvis været skifter

**Telting i fjellet:**
- Allemannsretten gir rett til å telte i utmark (min 150m fra hytte)
- Velg plass med le for vind
- Ikke telt i renner (flomfare ved regn)
- Respekter naturen: Ikke grav, ikke plukk planter
- Ta med all søppel ut

**Fjellvett om sommeren:**
Selv om det er sommer kan været skifte raskt i fjellet:
- Ha alltid regntøy og varmeklær med
- Tordenvær kan komme plutselig
- Tåke kan gjøre navigasjon vanskelig
- Temperaturen faller raskt på kvelden

**Myggen:**
- Bruk myggmiddel (høy DEET-konsentrasjon)
- Myggstoff på hatt/caps fungerer godt
- Tynn langermet jakke beskytter
- Vind er din venn - myggen liker ikke vind!
- Unngå stillestående vann ved leir`,
    },
    {
      id: 'kroppsoving-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kuldsjokk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Kroppens sjokkreaksjon på kaldt vann med hyperventilering',
            multipleChoiceOptions: [
              'Kroppens sjokkreaksjon på kaldt vann med hyperventilering',
              'Å fryse om vinteren',
              'Å bli solbrent',
              'Å bli dehydrert',
            ],
          },
        ],
        solution: 'Kuldsjokk oppstår når kroppen eksponeres for kaldt vann brått, noe som kan føre til hyperventilering, panikk og i verste fall drukning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre viktige badevettregler.',
        solution: 'Lær å svømme, aldri bad alene, avkjøl deg først, unngå alkohol, ikke hopp på ukjent sted, bruk flytevest i båt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er viktig sikkerhetsutstyr ved padling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste.',
            solution: 'Flytevest',
            multipleChoiceOptions: [
              'Flytevest',
              'Solbriller',
              'Mobiltelefon',
              'Kart',
            ],
          },
        ],
        solution: 'Flytevest er det viktigste sikkerhetsutstyret ved all padling. Den skal alltid brukes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Gjennomfør en vannsport- eller badeaktivitet med fokus på sikkerhet. Dette kan være: svømming, kajakk, kano, SUP, eller annen vannsport. Følg badevettreglene og bruk riktig sikkerhetsutstyr. Skriv en rapport om aktiviteten.',
        solution: 'Rapporten bør beskrive: Hvilken aktivitet, hvor, værforhold, sikkerhetstiltak (flytevest, makker osv), hva du lærte, og hvordan badevettreglene ble fulgt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5: Friluftsliv høst
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_5: TextbookChapter = {
  id: 'kroppsoving-vg1-7-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.5',
  title: 'Friluftsliv høst',
  description: 'Lær om høstaktiviteter som sopp, bær og fiske.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-5-intro',
      type: 'text',
      content: `## Friluftsliv høst

Høsten er en fantastisk tid for friluftsliv med vakre farger, sanking av naturens gaver og rolige turer i skogen.

**Høstaktiviteter:**
- Sopp- og bærplukking
- Fiske
- Fugletitting
- Fottur i høstskogen
- Jakt (med opplæring)`,
    },
    {
      id: 'kroppsoving-vg1-7-5-def-1',
      type: 'definition',
      title: 'Soppsanking',
      content: `**Trygge matsopper (nybegynnere):**
- Kantarell (gul, traktformet)
- Steinsopp (brun hatt, hvit stilk)
- Traktkantarell (brungrå, traktformet)

**Viktig:**
- Lær av erfarne
- Bruk soppbok eller app
- Ved tvil: Kast den!
- Noen giftige sopper er dødelige`,
    },
    {
      id: 'kroppsoving-vg1-7-5-def-2',
      type: 'definition',
      title: 'Bærplukking',
      content: `**Vanlige skogsbær:**
- Blåbær: Juli-september
- Tyttebær: August-september
- Multer: August (fjell og myr)
- Bringebær: Juli-august

Allemannsretten gir deg rett til å plukke bær i utmark.`,
    },
    {
      id: 'kroppsoving-vg1-7-5-text-1',
      type: 'text',
      content: `## Fiske

**Fiskeregler:**
- Fritt fiske i saltvann
- Fiskekort kreves ofte i ferskvann
- Respekter fredningstider og minstemål
- Desinfiser utstyr mellom vassdrag (gyrodactylus)

**Vanlige fiskemetoder:**
- Stangfiske med sluk eller mark
- Fluefiske
- Isfiske (vinter)
- Garnfiske (krever tillatelse)`,
    },
    {
      id: 'kroppsoving-vg1-7-5-warning-1',
      type: 'warning',
      title: 'Giftige sopper',
      content: `Noen sopper er dødelig giftige! Hvit fluesopp og grønn fluesopp kan forveksles med matsopper. Spis ALDRI sopp du ikke er 100% sikker på.`,
    },
    {
      id: 'kroppsoving-vg1-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan identifisere kantarell',
      problem: `Du er på sopptur i skogen og finner en gul, traktformet sopp. Hvordan kan du være sikker på at det er kantarell og ikke en giftig fluesopp?`,
      solution: `**Sjekkliste for kantarell:**

1. **Farge:** Egg-gul til oransje-gul (ikke knallgul eller gul med hvite flekker)
2. **Form:** Traktformet med buet kant
3. **Lameller:** Kantarell har IKKE lameller, men årer/folder som går langt ned på stilken
4. **Lukt:** Fruktig, ofte sammenlignet med aprikos
5. **Vokster:** I skog, ofte under gran og bjørk
6. **Kjøtt:** Lyst, fast, ikke hult

**Forvekslingsmuligheter:**
- Falsk kantarell har ekte lameller (tynne blader) i stedet for årer
- Gul fluesopp har lameller og hvite rester på hatten

**Konklusjon:** Hvis soppen har årer (ikke lameller), er egg-gul, lukter fruktig og har fast kjøtt, er det sannsynligvis kantarell. Men ved tvil - kast den!`,
    },
    {
      id: 'kroppsoving-vg1-7-5-example-2',
      type: 'example',
      title: 'Eksempel: Planlegging av fisketur',
      problem: `Du vil dra på fisketur i en lokal innsjø. Hva må du sjekke og planlegge på forhånd?`,
      solution: `**Planlegging av fisketur:**

**1. Sjekk regelverket:**
- Trenger du fiskekort? (Sjekk inatur.no eller kommunens nettsider)
- Er det fredningstid for noen arter?
- Hva er minstemål for fisk?
- Kvoter/regler for antall fisk

**2. Utstyr:**
- Fiskestang og hjul
- Agn (mark, sluk, flue)
- Kniv og fil for fjerning av krok
- Målestokk for å sjekke minstemål
- Pose/bøtte for fangst
- Evt. vadestøvler eller båt

**3. Sikkerhet:**
- Flytevest hvis du skal i båt
- Mobiltelefon (fulladet)
- Si fra hvor du skal være
- Sjekk værmeldingen

**4. Miljø:**
- Desinfiser alt utstyr før og etter (forebygging av parasitter)
- Ta med all søppel hjem
- Sett ut fisk under minstemål forsiktig tilbake

**Konklusjon:** God planlegging gir både bedre fangst og tryggere tur!`,
    },
    {
      id: 'kroppsoving-vg1-7-5-text-2',
      type: 'text',
      content: `## Fugletitting om høsten

Høsten er en fantastisk tid for fugletitting når trekkfugler samler seg før reisen sørover.

**Trekkfugler å se etter:**
- Gjess og ender som raster ved kysten
- Rovfugler på sørover-trekk (vepsevåk, musvåk)
- Småfugler som løvsanger og svaler
- Tranene trekker i V-formasjon

**Utstyr for fugletitting:**
- Kikkert (8x42 eller 10x42 er populære størrelser)
- Fugleguide eller app (BirdID, Artsobservasjoner)
- Notatbok for observasjoner
- Kamera med teleobjektiv (valgfritt)

**Tips:**
- Tidlig morgen og sen ettermiddag er best
- Vær stille og beveg deg sakte
- Bruk klær i duse farger
- Lær deg vanlige fugler først

Du kan registrere observasjoner i appen Artsobservasjoner og bidra til forskning!`,
    },
    {
      id: 'kroppsoving-vg1-7-5-text-3',
      type: 'text',
      content: `## Ansvarlig høsting i naturen

Når vi sanker og høster i naturen, har vi ansvar for å gjøre det bærekraftig.

**Regler for bærsanking:**
- Ta bare det du trenger og vil bruke
- La noe igjen til dyrelivet (bær er viktig mat for fugler og dyr)
- Unngå å tråkke ned plantelivet rundt
- Ikke plukk sjeldne eller truede planter

**Sopp:**
- Skjær av soppen ved bakken med kniv (ikke rykk opp)
- Dette skåner "soppen" (mycel) som lever i bakken
- Bær soppen i kurv eller nettpose slik at sporer spres

**Urter og planter:**
- Ikke ta hele planten hvis du bare trenger blader
- Plukk maks 1/3 av planter på et sted
- Vær sikker på arten før du plukker

**Fiske:**
- Respekter minstemål og kvoter
- Sett ut unødvendig fangst forsiktig
- Ikke fisk i gyteområder under gytesesong
- Bruk grunne kroker når mulig (lettere å sette fri)

Ved å høste ansvarlig sikrer vi at naturen kan brukes også i fremtiden!`,
    },
    {
      id: 'kroppsoving-vg1-7-5-tip-1',
      type: 'tip',
      title: 'Start med trygg sopp',
      content: `Som nybegynner bør du fokusere på de 3-5 tryggeste matsoppene: kantarell, steinsopp, traktkantarell og rørsopp (som buttrørsopp). Gå gjerne på organisert sopptur med erfarne sankere først. Mange lokallag av Norsk Sopp- og Nyttevekstforbund arrangerer soppkurs og turer om høsten.`,
    },
    {
      id: 'kroppsoving-vg1-7-5-tip-2',
      type: 'tip',
      title: 'Bruk apper til artskunnskap',
      content: `Moderne apper som "Sopptips", "Artsdatabanken" og "Picture This" kan hjelpe deg med identifisering. Men stol ALDRI blindt på app-identifikasjon av sopp - bruk den som støtte sammen med gode kunnskaper og erfarne sankere. For bær og planter er appene mer pålitelige.`,
    },
    {
      id: 'kroppsoving-vg1-7-5-tip-3',
      type: 'tip',
      title: 'Beste tid for høstaktiviteter',
      content: `September er ofte den beste måneden for kombinert bær- og soppsanking. Tyttebær modnes i august-september, mens de fleste matsopper dukker opp fra slutten av august når det kommer mer regn. Fiske er bra gjennom hele høsten, men husk at noen arter (som ørret i elver) har gytefred fra september/oktober.`,
    },
    {
          id: 'kroppsoving-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre trygge matsopper for nybegynnere.',
        solution: 'Kantarell, steinsopp og traktkantarell er gode valg for nybegynnere fordi de er lette å kjenne igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er den viktigste regelen ved soppsanking?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ved tvil, kast den - spis aldri sopp du er usikker på',
            multipleChoiceOptions: [
              'Ved tvil, kast den - spis aldri sopp du er usikker på',
              'Plukk mest mulig',
              'All sopp er spiselig hvis du koker den',
              'Smak på soppen for å sjekke',
            ],
          },
        ],
        solution: 'Den viktigste regelen er å aldri spise sopp du ikke er 100% sikker på. Noen giftige sopper kan være dødelige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når trenger du fiskekort?',
        solution: 'I ferskvann (innsjøer og elver) kreves ofte fiskekort. I saltvann er det fritt fiske for alle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Gjennomfør en høstaktivitet som bærplukking, soppsanking (med erfaren veileder!), fiske, eller høsttur. Dokumenter aktiviteten med bilder og skriv om opplevelsen og hva du lærte om årstiden.',
        solution: 'Rapporten bør inneholde: Beskrivelse av aktivitet, sted og dato, hva som ble funnet/opplevd, kunnskap om arten/naturen, respekt for allemannsretten, og refleksjon over naturens gaver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.6: Bål, matlaging og overnatting ute
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_6: TextbookChapter = {
  id: 'kroppsoving-vg1-7-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.6',
  title: 'Bål, matlaging og overnatting ute',
  description: 'Lær om bålbrenning, turmat og overnatting i naturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-6-intro',
      type: 'text',
      content: `## Bål, matlaging og overnatting ute

Å lage bål og overnatte ute er grunnleggende friluftsferdigheter som gir uforglemmelige opplevelser.`,
    },
    {
      id: 'kroppsoving-vg1-7-6-def-1',
      type: 'definition',
      title: 'Bålregler',
      content: `**Generelt bålforbud 15. april - 15. september** i eller nær skog og utmark.

**Unntak:**
- Der det åpenbart ikke kan starte brann (snø, regn, ved vann)
- Etablerte bålplasser
- Med grunneiers tillatelse

**Bålvett:**
- Velg trygt underlag
- Ha vann eller sand tilgjengelig
- Aldri forlat et bål uten å slukke helt
- Rydd opp etter deg`,
    },
    {
      id: 'kroppsoving-vg1-7-6-def-2',
      type: 'definition',
      title: 'Båltyper',
      content: `**Pyramidebål:** Klassisk bål, god varme, synlig flamme
**Pagodebål:** Stabilt, brenner lenge
**Stjernebål:** Økonomisk med ved, lett å regulere
**Kokebål:** Lavt, stabilt, godt for matlaging
**Varmebål:** Langved som reflekterer varme`,
    },
    {
      id: 'kroppsoving-vg1-7-6-text-1',
      type: 'text',
      content: `## Matlaging ute

**Utstyr:**
- Stormkjøkken eller primus
- Kokekar (titanium eller aluminium)
- Kniv, skje, kopp
- Lighter/fyrstikker i vanntett boks

**Enkel turmat:**
- Tørket mat (lettvint, lang holdbarhet)
- Grøt, nudler, supper
- Pølser, pinnbrød
- Te, kakao, kaffe`,
    },
    {
      id: 'kroppsoving-vg1-7-6-text-2',
      type: 'text',
      content: `## Overnatting

**Alternativger:**
- Telt (husk fotavtrykk)
- Hammock med tarp
- Lavvo
- Gapahuk
- Under åpen himmel (bivy/lakenpose)

**Sovesystem:**
- Liggeunderlag (isolasjon fra bakken)
- Sovepose (temperaturgrad)
- Pute (oppblåsbar eller klær i pose)`,
    },
    {
      id: 'kroppsoving-vg1-7-6-def-3',
      type: 'definition',
      title: 'Opptenningsmateriell',
      content: `**Naturlige opptenningsmaterieller:**
- **Never (bjørkenever):** Brenner godt selv når fuktig pga. olje
- **Kvae:** Harpiks fra bartrær, brenner intenst
- **Tyrived:** Gammel, harpiksrik vedkjerne fra furustubber
- **Tørr småkvist:** "Hekseskjegg" under grantrær
- **Kongler:** Åpne, tørre kongler

**Medbringes:**
- Tennbriketter eller tennkuber
- Fyrstikker/lighter i vanntett boks
- Reservetennkilde (magnesium/flintstein)`,
    },
    {
      id: 'kroppsoving-vg1-7-6-def-4',
      type: 'definition',
      title: 'Telttyper og overnatting',
      content: `**Kuppeltelt:**
- Frittstående, lett å sette opp
- God vindstabilitet
- Vanlig for fjellbruk

**Tunneltelt:**
- Godt med plass
- Krever plugging
- Lett og romslig

**Lavvo/pyramidetelt:**
- Tradisjonelt, god plass
- Mulighet for bål/ovn inne
- Godt for vinter

**Tarp:**
- Minimalt, lett
- Krever kunnskap om opprigging
- Kan kombineres med hammock

**Bivy/lakenpose:**
- Ultralett nødovernatting
- Kun for stabile forhold`,
    },
    {
      id: 'kroppsoving-vg1-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Emilies første overnattingstur',
      content: `**Situasjon:** Emilie (16) skal på sin første overnattingstur med klassen til en gapahuk.

**Planlegging:**
- Sjekket værvarselet: Klart, noen minusgrader om natten
- Pakket: Sovepose (komfort -5°C), liggeunderlag, ekstra ullklær
- Matplan: Turgryte til middag, grøt til frokost, niste

**Gjennomføring:**
Gruppen ankom gapahuken kl. 15. Emilie hjalp til med vedhugging mens andre hentet vann. De lagde bål i den etablerte bålplassen og kokte turgryte på stormkjøkken.

**Utfordring:** Det ble kaldere enn ventet om natten.
**Løsning:** Emilie la ytterjakken over soveposens fotende og tok på lua.

**Læring:**
- Ta alltid med mer isolasjon enn du tror du trenger
- Et godt liggeunderlag er like viktig som sovepose
- Matlagingen tar lengre tid ute enn hjemme`,
    },
    {
      id: 'kroppsoving-vg1-7-6-example-2',
      type: 'example',
      title: 'Eksempel: Båltenning med våt ved',
      content: `**Situasjon:** Klassen er på tur og det har regnet. All ved virker våt.

**Løsning - steg for steg:**

1. **Finn tørt materiell:**
   - Sjekk under store trær (ofte tørt)
   - Kvist på stående døde trær (tørrere enn bakkeved)
   - Kløyv tykkere ved - innsiden er ofte tørr

2. **Lag god base:**
   - Legg ned tørre kvister eller bark som underlag
   - Sørg for lufttilgang under bålet

3. **Start smått:**
   - Bruk rikelig med never og tynnkvist
   - Bygg opp gradvis - la hver "etasje" ta fyr før du legger på mer

4. **Vær tålmodig:**
   - Våt ved trenger lengre tid
   - Ikke kvél flammen med for mye ved

**Resultat:** Etter 15 minutter hadde de et godt bål. De brukte flammen til å tørke annen ved som de la rundt bålet.

**Tips:** På lengre turer, samle alltid ved og legg det til tørk mens det er pent vær.`,
    },
    {
      id: 'kroppsoving-vg1-7-6-tip-1',
      type: 'tip',
      title: 'Opptenning',
      content: `Start med tørr never, småkvist og kvae. Bygg gradvis opp med større ved. Ha nok ved klar før du tenner. Tørr ved brenner best!`,
    },
    {
      id: 'kroppsoving-vg1-7-6-tip-2',
      type: 'tip',
      title: 'Matlaging på bål vs. stormkjøkken',
      content: `**Bål:**
- Stemningsfullt og tradisjonelt
- Gratis brensel, men krever tid å lage
- Vanskelig å regulere varme
- Maten får røyksmak

**Stormkjøkken/primus:**
- Rask og effektiv
- Lett å regulere varme
- Uavhengig av værforhold
- Krever brensel du må bære

**Anbefaling:** Ta med stormkjøkken som "backup" selv om planen er bålmatlaging.`,
    },
    {
      id: 'kroppsoving-vg1-7-6-tip-3',
      type: 'tip',
      title: 'Sovesystem for nybegynnere',
      content: `**Liggeunderlag:** Velg R-verdi etter årstid (sommer R2+, vinter R5+). Isolasjon fra bakken er kritisk!

**Sovepose:** Komfortgrad skal være minst 5°C lavere enn forventet temperatur. Syntetisk tåler fukt bedre, dun er lettere og varmere.

**Pute:** Oppblåsbar turist-pute, eller bruk klær i posen til sekken.

**Tips:** Test utstyret hjemme først - sov i hagen eller på terrassen!`,
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Når gjelder det generelle bålforbudet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig periode.',
            solution: '15. april - 15. september',
            multipleChoiceOptions: [
              '15. april - 15. september',
              'Hele året',
              'Bare i juli',
              '1. mai - 1. august',
            ],
          },
        ],
        solution: 'Det generelle bålforbudet gjelder fra 15. april til 15. september i eller nær skog og utmark.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva trenger du for å tenne bål?',
        solution: 'Opptenningsmateriell (never, kvae, tørr småkvist), fyrstikker/lighter, tørr ved i ulike størrelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Planlegg en enkel meny for en overnattingstur.',
        solution: 'Eksempel: Middag: Turgryte med kjøttdeig og pasta. Kveldsmat: Pinnbrød og kakao. Frokost: Grøt med rosiner. Niste: Brød, frukt, sjokolade.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Lag bål og kok mat ute (med tillatelse og utenfor bålforbud-perioden). Øv på å tenne bål, vedlikeholde det, og lage enkel mat. Slukk bålet helt før dere forlater stedet. Dokumenter med bilder.',
        solution: 'Rapporten bør inneholde: Hvor og når (sjekk bålforbud), hvordan bålet ble tent, hva som ble laget, utfordringer, og hvordan bålet ble slukket. Bilder av prosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken båltype er best til matlaging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kokebål - lavt og stabilt',
            multipleChoiceOptions: [
              'Kokebål - lavt og stabilt',
              'Pyramidebål - høy flamme',
              'Varmebål - reflekterer varme',
              'Stjernebål - store flammer',
            ],
          },
        ],
        solution: 'Kokebålet er lavt og stabilt, perfekt for å sette kokekar på. Flammen er jevn og du har god kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign fordeler og ulemper med telt, hammock og gapahuk som overnattingsalternativer.',
        solution: 'Telt: Beskytter mot vær og insekter, krever plass å sette opp. Hammock: Lett, kommer unna bakken, trenger trær og tåler kulde dårligere. Gapahuk: Ferdig konstruksjon, åpen foran, ofte ved populære turområder, kan være fullt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-6-ex-7',
        number: '7',
        type: 'classic',
        task: 'GRUPPEOPPGAVE: Planlegg menyen for en overnattingstur for 4 personer. Inkluder middag, kveldsmat, frokost og lunsj neste dag. Tenk på: vekt, holdbarhet, næringsverdi, og hvor enkelt det er å lage.',
        solution: 'Eksempel: Middag - Pasta med kjøttsaus (tørket). Kveldsmat - Pinnbrød og kakao. Frokost - Havregrøt med rosiner. Lunsj - Knekkebrød med leverpostei, frukt. Menyvalg bør begrunnes med vekt/holdbarhet/næring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.7: Naturvern og bærekraftig friluftsliv
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_7: TextbookChapter = {
  id: 'kroppsoving-vg1-7-7',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.7',
  title: 'Naturvern og bærekraftig friluftsliv',
  description: 'Lær om sporløs ferdsel og naturvern.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-7-intro',
      type: 'text',
      content: `## Naturvern og bærekraftig friluftsliv

Med økt friluftslivsaktivitet blir det viktigere å ferdes sporløst og ta vare på naturen for kommende generasjoner.`,
    },
    {
      id: 'kroppsoving-vg1-7-7-def-1',
      type: 'definition',
      title: 'Sporløs ferdsel',
      content: `**Leave No Trace - 7 prinsipper:**
1. Planlegg og forbered
2. Ferdes på holdbart underlag
3. Kvitt deg med avfall på riktig måte
4. La det du finner ligge
5. Minimer bålbruk
6. Respekter dyrelivet
7. Vis hensyn til andre besøkende`,
    },
    {
      id: 'kroppsoving-vg1-7-7-def-2',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten gir alle rett til å ferdes i utmark, men med ansvar:

**Rettigheter:**
- Ferdsel til fots
- Rasting og overnatting (ikke nærmere enn 150m fra bebodde hus)
- Plukking av bær, sopp og blomster

**Plikter:**
- Vis hensyn til natur, grunneier og andre
- Rydd opp etter deg
- Respekter bålforbudet
- Lukk grinder, unngå å skade`,
    },
    {
      id: 'kroppsoving-vg1-7-7-def-3',
      type: 'definition',
      title: 'Verneområder i Norge',
      content: `**Nasjonalparker (47 stk):**
- Strengest vern, naturverdier av nasjonal betydning
- Ingen inngrep tillatt, men tradisjonell ferdsel OK
- Eksempler: Jotunheimen, Hardangervidda, Rondane

**Naturreservater:**
- Beskytter spesielle naturtyper eller arter
- Ofte strengere ferdselsregler

**Landskapsvernområder:**
- Bevarer kulturlandskap
- Mindre strenge regler

**Friluftslivsområder:**
- Sikret for allmennhetens bruk
- Ofte nær byer og tettsteder

**Sjekk alltid regler** for området du besøker på miljødirektoratets nettsider.`,
    },
    {
      id: 'kroppsoving-vg1-7-7-text-1',
      type: 'text',
      content: `## Praktisk naturvern

**Avfallshåndtering:**
- Ta med alt søppel hjem
- Matavfall kan graves ned eller tas med
- Gjør toalettbesøk minst 60m fra vann
- Bruk etablerte stier

**Dyreliv:**
- Ikke forstyrr hekkende fugl
- Hold avstand til ville dyr
- Båndtvang for hund i perioder`,
    },
    {
      id: 'kroppsoving-vg1-7-7-text-2',
      type: 'text',
      content: `## Miljøvennlig friluftsliv

**Transport:**
- Velg kollektivtransport når mulig
- Samkjør til turstart
- Utforsk nærområdet - korte reiser gir mindre utslipp

**Utstyr:**
- Kjøp kvalitet som varer
- Bruk brukt utstyr, lån eller lei
- Reparer i stedet for å kaste
- Velg miljøvennlige materialer

**Mat:**
- Velg lokale og sesongbaserte råvarer
- Unngå unødvendig emballasje
- Ta med matboks og drikkeflaske

**Bærekraftig høsting:**
- Ta bare det du trenger
- La nok igjen til naturen og andre
- Respekter minstemål for fisk
- Følg sankeperioder`,
    },
    {
      id: 'kroppsoving-vg1-7-7-example-1',
      type: 'example',
      title: 'Eksempel: Skoleklassens miljøvennlige fjelltur',
      content: `**Situasjon:** Klasse 1C planlegger en dagstur til fjellet og vil gjøre den så miljøvennlig som mulig.

**Tiltak de gjennomførte:**

1. **Transport:** Bestilte felles buss i stedet for at foreldre kjørte hver for seg. Sparte ca. 80% av CO2-utslippene.

2. **Søppel:** Alle fikk utdelt "turpose" for eget søppel. Ved rasteplassen plukket de også opp søppel andre hadde etterlatt.

3. **Sti:** Gikk i etablert sti selv om det fristet å ta snarvei over sårbar vegetasjon.

4. **Dyreliv:** Holdt avstand da de så reinsdyr i området.

**Resultat:** Klassen etterlot området i bedre stand enn de fant det. De opplevde stolthet over å bidra positivt.

**Refleksjon fra elev:** "Det var enkelt å gjøre - bare å tenke litt før vi handlet. Og det føltes bra å vite at vi ikke ødela for naturen eller andre."`,
    },
    {
      id: 'kroppsoving-vg1-7-7-example-2',
      type: 'example',
      title: 'Eksempel: Slitasje på populære turmål',
      content: `**Problem:** Preikestolen i Rogaland får over 300 000 besøkende årlig. Dette skaper utfordringer:

- Stier slites ned og utvides
- Vegetasjon ødelegges utenfor stiene
- Søppel etterlates
- Toalettbehov uten fasiliteter
- Støy forstyrrer dyreliv

**Tiltak som er gjort:**
- Steinlagte stier som tåler trafikken
- Besøksforvaltning med informasjonstavler
- Oppfordring om å unngå toppsesongen
- Toalettfasiliteter ved startpunktet
- Søppelplukking av frivillige

**Hva du kan gjøre:**
- Velg alternative turmål i høysesong
- Gå tidlig eller sent for å unngå "rush"
- Hold deg på stien, selv når det er kø
- Vær en rollemodell for andre turister

**Læring:** Selv om allemannsretten gir oss fri ferdsel, har vi et felles ansvar for å ta vare på naturen slik at den tåler bruken.`,
    },
    {
      id: 'kroppsoving-vg1-7-7-tip-1',
      type: 'tip',
      title: 'De 7 prinsippene i praksis',
      content: `**1. Planlegg:** Sjekk værvarsel, ta med nok mat/vann, fortell noen hvor du går.
**2. Holdbart underlag:** Gå på sti, stein eller snø - unngå våtmark og sårbar vegetasjon.
**3. Avfall:** "Pack it in, pack it out" - ta med ALT hjem.
**4. La ting ligge:** Ikke plukk blomster, ta steiner, eller bygge varder.
**5. Minimer bål:** Bruk etablerte bålplasser, eller kokeapparat.
**6. Dyreliv:** Observer på avstand, ikke mat ville dyr.
**7. Vis hensyn:** Gi plass, hold støynivå nede, vær vennlig.`,
    },
    {
      id: 'kroppsoving-vg1-7-7-tip-2',
      type: 'tip',
      title: 'Toalettbesøk i naturen',
      content: `Ingen fasiliteter? Slik gjør du det riktig:

1. Gå minst **60 meter fra vann, stier og leirplasser**
2. Grav et hull **15-20 cm dypt**
3. Dekk til med jord/stein etterpå
4. **Tørk papir** bør tas med hjem (brenn eller pakk i pose)
5. Vask hender med antibac eller biologisk såpe

I verneområder og over tregrensen kan reglene være strengere - sjekk på forhånd!`,
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr sporløs ferdsel?',
        solution: 'Å ferdes i naturen uten å etterlate synlige spor - ta med søppel, bruk etablerte stier, respekter naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva gir allemannsretten deg lov til?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ferdes i utmark, raste, plukke bær og sopp',
            multipleChoiceOptions: [
              'Ferdes i utmark, raste, plukke bær og sopp',
              'Gjøre hva du vil i naturen',
              'Telte rett ved hytter',
              'Hugge trær',
            ],
          },
        ],
        solution: 'Allemannsretten gir rett til ferdsel, rasting og overnatting i utmark, samt plukking av bær, sopp og blomster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Gjennomfør en tur hvor du aktivt praktiserer sporløs ferdsel. Planlegg på forhånd hvordan du skal unngå å etterlate spor. Dokumenter med bilder "før og etter" (rasteplass før dere kom, og etter dere har ryddet).',
        solution: 'Rapporten bør vise: Planlegging (hva tok dere med for å unngå søppel), dokumentasjon av sporløs praksis, refleksjon over hvor vanskelig/lett det var, og forslag til forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke av disse er tillatt ifølge allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg alle som gjelder.',
            solution: 'Telte mer enn 150m fra hus, plukke bær og sopp',
            multipleChoiceOptions: [
              'Telte mer enn 150m fra hus, plukke bær og sopp',
              'Hogge ned trær til brensel',
              'Telte i noens hage',
              'Kjøre ATV i utmark',
            ],
          },
        ],
        solution: 'Allemannsretten gir rett til ferdsel til fots, overnatting (minst 150m fra bebodde hus, maks 2 netter på samme sted uten tillatelse), og plukking av ville bær, sopp og blomster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor slitasje på populære turmål er et problem, og gi tre konkrete forslag til hvordan problemet kan reduseres.',
        solution: 'Slitasje ødelegger vegetasjon, forstyrrer dyreliv, og reduserer naturopplevelsen. Tiltak: 1) Velge mindre populære alternativer, 2) Gå utenfor høysesong, 3) Holde seg på merkede stier, 4) Bygge robuste stier som tåler trafikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'GRUPPEOPPGAVE: Finn ut om det er verneområder (nasjonalpark, naturreservat eller landskapsvernområde) i din kommune eller region. Hva er de spesielle reglene der? Lag en kort presentasjon.',
        solution: 'Svar varierer med lokasjon. Presentasjonen bør inneholde: Navn og type verneområde, hva som er vernet (natur/kulturverdier), spesielle regler for ferdsel, og hvorfor vernet er viktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-7-ex-7',
        number: '7',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Organiser en "plogging"-tur (plukke søppel + jogging/gåing). Gå en rute i nærområdet og samle søppel dere finner. Dokumenter hva dere fant og hvor.',
        solution: 'Rapporten bør inneholde: Rute (kart/beskrivelse), hva slags søppel som ble funnet, mengde (antall poser/kg), refleksjon over hvor søppelet kom fra og hvordan problemet kan reduseres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.8: Lokale friluftslivstradisjoner
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7_8: TextbookChapter = {
  id: 'kroppsoving-vg1-7-8',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7.8',
  title: 'Lokale friluftslivstradisjoner',
  description: 'Utforsk lokale tradisjoner for ferdsel i naturen fra alle deler av Norge.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke lokale tradisjoner for ferdsel i naturen under vekslende årstider',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-8-intro',
      type: 'text',
      content: `## Lokale friluftslivstradisjoner

Norge har rike og varierte friluftslivstradisjoner som varierer fra kyst til fjell, fra sør til nord. Disse tradisjonene er formet av lokale forhold, klima og ressurser, og representerer verdifull kunnskap om bærekraftig bruk av naturen.

Å forstå og praktisere lokale tradisjoner gir:
- Dypere forståelse av naturen i ditt område
- Kunnskap om årstidenes rytmer og muligheter
- Tilhørighet og kulturell identitet
- Respekt for tidligere generasjoners erfaringer
- Bærekraftige måter å bruke naturressursene på`,
    },
    {
      id: 'kroppsoving-vg1-7-8-def-1',
      type: 'definition',
      title: 'Tradisjonell økologisk kunnskap',
      content: `Tradisjonell økologisk kunnskap (TEK) er erfaringsbasert kunnskap om naturen som har blitt overført gjennom generasjoner:

- **Værforståelse:** Lokale tegn på værskifte, vindretninger, skydannelser
- **Årstidsvariasjoner:** Når ulike aktiviteter og høstingsperioder inntreffer
- **Dyreliv:** Trekk, yngleområder, atferd
- **Planteliv:** Spiselige planter, medisinplanter, sesongvariasjoner
- **Terreng:** Trygge ferdselsruter, fareområder
- **Ressursforvaltning:** Bærekraftig høsting, hviletider

Denne kunnskapen er ofte stedsbasert og tilpasset lokale forhold.`,
    },
    {
      id: 'kroppsoving-vg1-7-8-def-2',
      type: 'definition',
      title: 'Kulturlandskap',
      content: `Kulturlandskap er landskap som er formet av menneskers bruk over tid:

- **Seterlandskap:** Sommerbeite i fjellet, stølshus, gjødsling gir artsrikt beite
- **Kystlandskap:** Sjøboder, naust, rorbuer, ryddet for tang
- **Slåttemark:** Tradisjonell høyslått gir blomsterrike enger
- **Tømmerrenne:** Gamle anlegg for transport av tømmer

Mange kulturlandskap er truet når tradisjonelle aktiviteter opphører. De har ofte stor biologisk verdi.`,
    },
    {
      id: 'kroppsoving-vg1-7-8-def-3',
      type: 'definition',
      title: 'Samiske tradisjoner',
      content: `Den samiske kulturen har tusenårige tradisjoner for ferdsel i naturen, særlig i Nordnorge, Trøndelag og deler av Hedmark:

**Reindrift:**
- Nomadisk livsform tilpasset reinens beitevandringar
- Flytting mellom vinter- og sommerbeite
- Dyp kunnskap om reinens behov og atferd
- Merking og gjeting

**Lavvo:**
- Tradisjonell samisk bolig laget av stenger og reinskinn
- Bålplass i midten, røyk ut gjennom toppen
- Lett å sette opp og transportere

**Duodji (samisk håndverk):**
- Bruk av naturmaterialer: skinn, horn, tre, bjørk
- Funksjonelt og dekorert håndverk
- Koser (reinskinnsko), komager, kniver

**Natur- og værforståelse:**
- Lesing av snøforhold og terreng
- Tradisjonelle navn på vind, vær og steder
- Joik som formidling av opplevelser og kunnskap`,
    },
    {
      id: 'kroppsoving-vg1-7-8-text-1',
      type: 'text',
      content: `## Regionale tradisjoner - Nordnorge og kystkultur

**Kystkultur langs hele norskekysten:**
Kysten har formet en unik friluftskultur basert på havet som ressurs:

- **Fiske og sjømat:**
  - Tradisjonelt fiske fra båt og land
  - Høsting av tang, tare, skjell og krabber
  - Tørrfisk, klippfisk, rakfisk
  - Kunnskap om strømforhold, værforståelse og fiskeplasser

- **Båttradisjonert:**
  - Trebåtbygging (nordlandsbåt, færing, åfjordsbåt)
  - Roing som ferdselsform og idrett
  - Navigasjon etter landemerker og sjømerker
  - Sjøvett og redningstradisjoner

- **Sjøsamisk kultur:**
  - Kombinasjon av fiske, jakt og mindre reindrift
  - Sel- og hvalfangst
  - Kystlavvo og gamme (tørvhus)

- **Værforståelse:**
  - Lokale vindretninger og værvarsel
  - "Nordlysvarsel" og andre naturfenomener
  - Tidsskifte og månefaser betydning for fiske`,
    },
    {
      id: 'kroppsoving-vg1-7-8-text-2',
      type: 'text',
      content: `## Fjelltradisjoner og seterkultur

**Fjellbygdene i Østlandet, Trøndelag og Vestlandet:**
I områder med tilgang til fjellbeite utviklet det seg en rik seterkultur:

- **Seterbruk og stølsliv:**
  - Flytting av dyr til fjellbeite om sommeren
  - Produksjon av ost, smør og andre meieriprodukter
  - Gjesteliv og utveksling av nyheter
  - Stølsmat og tradisjonskost
  - I dag ofte brukt som feriested og kulturminne

- **Jakt og fangst:**
  - Storviltjakt (elg, hjort, rådyr)
  - Småviltjakt (rype, hare, orrfugl)
  - Revepatent og fangst
  - Kunnskap om dyrs trekk og tilholdssteder
  - Respekt for bærekraftig uttag

- **Ski som transportmiddel:**
  - Lange ski for dype snøforhold (ikke moderne turski)
  - Støtt og stakking som teknikk
  - "Gammelskiing" som tradisjon enkelte steder
  - Kunnskap om snøforhold og skredfare`,
    },
    {
      id: 'kroppsoving-vg1-7-8-text-3',
      type: 'text',
      content: `## Skog- og innlandskultur

**Østlandet og innlandet:**
Skogressursene ga grunnlag for egne tradisjoner:

- **Skogsbruk og tømmer:**
  - Hogst og tømmerdrift
  - Tømmerfløting i elver og vassdrag
  - Kølbruk (samle ved i store bunker)
  - Kullbrenning (trekull til smelting av metall)
  - "Mjømenn" - menn som fløttet tømmer

- **Bærplukking og sanking:**
  - Blåbær, tyttebær, multe som inntektskilde
  - Kunnskap om bærår og tidspunkt
  - Sanking som familieaktivitet
  - Tradisjonell konservering

- **Inlandsfiske:**
  - Garnfiske i innsjøer
  - Ørretfiske i bekker og elver
  - Isfiske om vinteren
  - Lokal kunnskap om fiskeplasser

**Vestlandet:**
Kombinasjon av fjord, fjell og fruktdyrking:

- **Fjordkultur:**
  - Bruk av fjorden som ferdselsåre
  - Laksfiske i elvene
  - Fruktdyrking i lune fjordstrøk

- **Fjellturer:**
  - Tradsjon for søndagstur til "sitt" fjell
  - Kjente toppturi tradisjoner
  - Turistforeningas løypenett og hytter`,
    },
    {
      id: 'kroppsoving-vg1-7-8-text-4',
      type: 'text',
      content: `## Bytradisjoner og nærfriluftsliv

**Osloområdet og større byer:**
Selv urbane områder har rike friluftslivstradisjoner:

- **Marka-kulturen:**
  - Søndagstur i Nordmarka, Østmarka, Bymarka
  - Skiløyper og skispor om vinteren
  - "Ut på tur, aldri sur" som mantra
  - Turhytter og serveringssteder

- **Bading og sjøliv:**
  - Badestrender og bryggeanlegg
  - Morgenbad-tradisjoner
  - Isbading som ny/gammel tradisjon
  - Fritidsbåtliv

- **Kolonihager og parseller:**
  - Dyrking som friluftsliv
  - Fellesskap og tradisjoner
  - Bærekraftig matproduksjon

- **Moderne urbant friluftsliv:**
  - Klatring (innendørs og ute)
  - Terrengsykling
  - Padling i fjord og elv
  - Bynært skøyting`,
    },
    {
      id: 'kroppsoving-vg1-7-8-example-1',
      type: 'example',
      title: 'Eksempel: Seterbesøk i Valdres',
      content: `**Situasjon:** Klasse 1B besøker en aktiv seter i Valdres for å lære om tradisjonelt stølsliv.

**Opplevelser:**

**Morgen:** Klassen deltok i morgenstellet - fôring av geitene og melking. Budeien viste hvordan melkemaskinen fungerer, men forklarte også hvordan det ble gjort for hånd før.

**Formiddag:** Elevene fikk prøve å yste brunost etter gammel oppskrift. De lærte om hvordan seteren fungerte som sommerbolig, og hvorfor dyrene ble flyttet til fjellet.

**Ettermiddag:** Tur til gammel beitemark. Budeien fortalte om plantearter som bare finnes der det har vært beitet lenge, og hvordan landskapet endres når seterbruket opphører.

**Refleksjon fra elev:** "Jeg visste ikke at brunost kom fra seteren! Det var kult å se hvordan folk levde før, og hvor hardt de jobbet. Landskapet er så fint fordi det har blitt brukt i hundrevis av år."

**Læring:** Tradisjonelt seterbruk har skapt verdifulle kulturlandskap som trues når aktiviteten opphører.`,
    },
    {
      id: 'kroppsoving-vg1-7-8-example-2',
      type: 'example',
      title: 'Eksempel: Fiske med tradisjonelle metoder',
      content: `**Situasjon:** En gruppe elever i Finnmark lærer om tradisjonelt laksefiske i Tana-elva.

**Bakgrunn:**
Tana er en av Europas beste lakseelver. Både norske og samiske fiskere har høstet laks her i tusenvis av år. Tradisjonelt brukte man:
- Stengsel (gjerder i elva som ledet laksen mot fangstredskap)
- Drivgarn fra båt
- Kastenot

**Aktivitet:**
Elevene fikk prøve fluefiske med guide. De lærte om:
- Lesing av elva - hvor står laksen?
- Valg av flue etter årstid og vannstand
- Tradisjonelle regler for fordeling av fangstplasser
- Kvoteregulering og bærekraftig høsting

**Kulturell kontekst:**
Guiden fortalte om samiske tradisjoner for laksefiske og hvordan dette har vært en viktig del av livberging i generasjoner. Dagens reguleringer bygger på tradisjonell kunnskap om bærekraftig høsting.

**Refleksjon:** "Det er ikke bare å kaste ut snøret. Det ligger masse kunnskap bak - om elva, fisken, og hvordan man fisker uten å tømme bestanden."`,
    },
    {
      id: 'kroppsoving-vg1-7-8-example-3',
      type: 'example',
      title: 'Eksempel: Dokumentasjon av lokale tradisjoner',
      content: `**Prosjekt:** Elever ved en skole i Lofoten dokumenterte lokale friluftslivstradisjoner.

**Metode:**
1. Intervjuet eldre i lokalsamfunnet
2. Besøkte lokalhistorisk museum
3. Deltok i praktiske aktiviteter

**Funn - tradisjoner i Lofoten:**

**Fiske:**
- Skreifisket (torskefiske) om vinteren - grunnlag for tørrfisk
- Kunnskap om værforhold og fiskeplasser
- Båtbygging og vedlikehold

**Sanking:**
- Eggplukking på fuglefjell (strengt regulert i dag)
- Tang og tare til gjødsel og mat
- Bærplukking i fjellet

**Ferdsel:**
- Robåt som transportmiddel
- Sti over fjellet mellom bygdene
- Kunnskap om farlig farvann

**Resultat:** Elevene laget en utstilling på skolen med intervjuutskrifter, bilder og gjenstander. De oppdaget at mange tradisjoner holdt på å bli glemt.

**Læring:** Dokumentasjon er viktig for å bevare kunnskap før den forsvinner.`,
    },
    {
      id: 'kroppsoving-vg1-7-8-tip-1',
      type: 'tip',
      title: 'Intervju eldre i ditt område',
      content: `Eldre mennesker har ofte verdifull kunnskap om lokale tradisjoner som ikke er skrevet ned. Spør besteforeldre, naboer eller medlemmer av historielag om friluftslivsaktiviteter fra deres barndom og ungdom.`,
    },
    {
      id: 'kroppsoving-vg1-7-8-tip-2',
      type: 'tip',
      title: 'Finn lokale ressurser',
      content: `**Kilder til lokal kunnskap:**
- Kommunens kulturavdeling
- Lokalhistoriske lag og foreninger
- Bygdemuseer og friluftsmuseer
- Turistforening (DNT) lokalt
- Jeger- og fiskerforeninger
- Bondelag og landbrukskontor
- Sametinget (samisk kultur)
- Biblioteket (lokalhistorisk samling)

Mange steder har også digitale arkiver med bilder og dokumenter fra tidligere tider.`,
    },
    {
      id: 'kroppsoving-vg1-7-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke tradisjoner hører til i din del av landet?',
        subTasks: [
          {
            label: 'a',
            task: 'Er du fra kystområdet, fjellbygd, innland eller by? Nevn en tradisjon derfra.',
            solution: 'Svar varierer etter lokasjon. Eksempler: Kyst=fiske/roing, Fjell=seter/jakt, Innland=skog/fløting, By=nærtur til marka.',
          },
        ],
        solution: 'Svaret vil variere med elevens hjemsted. Viktig å identifisere lokale tradisjoner og forstå deres opprinnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er tradisjonell økologisk kunnskap (TEK)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Erfaringsbasert kunnskap om naturen overført gjennom generasjoner',
            multipleChoiceOptions: [
              'Erfaringsbasert kunnskap om naturen overført gjennom generasjoner',
              'Teknologi for å måle natur',
              'Moderne naturvitenskap',
              'Kunnskap fra bøker',
            ],
          },
        ],
        solution: 'TEK er tradisjonell kunnskap om natur, vær, dyr og planter som er bygget opp over lange tidsrom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig å ta vare på lokale friluftslivstradisjoner?',
        solution: 'De representerer kulturarv og kunnskap, gir identitet og tilhørighet, inneholder verdifull kunnskap om bærekraftig bruk av naturen, og gir meningsfull kobling til tidligere generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Intervju en eldre person i lokalmiljøet om friluftslivstradisjoner fra deres barndom. Spør om: Hvilke aktiviteter gjorde dere? Hvor dro dere? Hvilke tradisjoner fulgte dere? Hva har endret seg?',
        solution: 'Svaret bør inneholde: Navn på intervjuobjekt, konkrete aktiviteter beskrevet, endringer over tid, refleksjon over hva som er tapt/bevart. Oppgaven gir innsikt i lokal historie og endring i friluftslivskultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Undersøk hvilke tradisjonelle friluftslivsaktiviteter som finnes i din kommune. Bruk nettsider (kommunens kulturside, historielag, museer), eller besøk biblioteket/lokalt museum.',
        solution: 'Svaret bør liste opp minst 3-5 tradisjoner med beskrivelse, og angi kilder. Eksempel: "Vår kommune har tradisjon for...", kilder: kommunens nettside, samtale med historielag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'PRAKTISK OPPGAVE: Gjennomfør en aktivitet basert på lokale tradisjoner (for eksempel: fiske fra land, plukke bær, gå på ski i gammelt skiløype, ro i tradisjonsbåt, besøke en seter/støl). Skriv en refleksjon: Hva opplevde du? Hva lærte du? Hvordan var det å gjøre noe "på den gamle måten"?',
        solution: 'Svaret bør beskrive: Hvilken aktivitet ble gjennomført, hvor og når, hva eleven lærte/opplevde, refleksjon over forskjell mellom tradisjonell og moderne måte, og vurdering av om tradisjonen bør bevares.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.1: Fysisk aktivitet og helse
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_1: TextbookChapter = {
  id: 'kroppsoving-vg1-8-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.1',
  title: 'Fysisk aktivitet og helse',
  description: 'Lær om sammenhengen mellom fysisk aktivitet og god helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-1-intro',
      type: 'text',
      content: `## Fysisk aktivitet og helse

Regelmessig fysisk aktivitet er en av de viktigste faktorene for god helse. Det påvirker både kropp og sinn positivt.`,
    },
    {
      id: 'kroppsoving-vg1-8-1-def-1',
      type: 'definition',
      title: 'Helsegevinster av fysisk aktivitet',
      content: `**Fysiske gevinster:**
- Sterkere hjerte og lunger
- Bedre blodsukkerkontroll
- Sterkere muskler og skjelett
- Bedre immunforsvar
- Lavere risiko for livsstilssykdommer

**Mentale gevinster:**
- Bedre humør og selvfølelse
- Mindre stress og angst
- Bedre søvn
- Økt konsentrasjon`,
    },
    {
      id: 'kroppsoving-vg1-8-1-def-2',
      type: 'definition',
      title: 'Anbefalinger for fysisk aktivitet',
      content: `**Ungdom (13-17 år):**
- Minst 60 minutter daglig med moderat til høy intensitet
- Styrkeøvelser minst 3 ganger per uke
- Reduser stillesitting

**Voksne:**
- Minst 150 min moderat ELLER 75 min høy intensitet per uke
- Styrketrening 2+ ganger per uke`,
    },
    {
      id: 'kroppsoving-vg1-8-1-text-1',
      type: 'text',
      content: `## Inaktivitetens konsekvenser

**Risikofaktorer ved inaktivitet:**
- Overvekt og fedme
- Type 2-diabetes
- Hjerte- og karsykdommer
- Visse kreftformer
- Depresjon og angst
- Osteoporose

**Stillesitting** er en egen risikofaktor, selv for de som trener regelmessig. Ta pauser fra sitting!`,
    },
    {
      id: 'kroppsoving-vg1-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Oles treningsplan',
      content: `Ole er 16 år og vil bli mer aktiv. Han lager en realistisk plan:

**Mandag:** 30 min jogging etter skolen
**Tirsdag:** Styrketrening hjemme (push-ups, sit-ups, squats) - 20 min
**Onsdag:** Fotballtrening med laget - 90 min
**Torsdag:** Hviledag eller lett tur med hunden
**Fredag:** 40 min svømming
**Lørdag:** Fotballkamp - 90 min
**Søndag:** Sykkelturen med familien - 60 min

**Totalt:** Over 5 timer aktivitet, godt over anbefalingene! Ole inkluderer også styrketrening 2-3 ganger per uke.`,
    },
    {
      id: 'kroppsoving-vg1-8-1-def-3',
      type: 'definition',
      title: 'Intensitetsnivåer',
      content: `**Lav intensitet:**
- Kan snakke normalt under aktiviteten
- Rolig gåing, yoga, lett sykling
- Eksempel: Tur i skogen

**Moderat intensitet:**
- Kan snakke, men ikke synge
- Raskere puls og pustning
- Eksempel: Rask gange, dans, sykling

**Høy intensitet:**
- Vanskelig å snakke i hele setninger
- Svett og andpusten
- Eksempel: Løping, intervalltrening, intens lagidrett`,
    },
    {
      id: 'kroppsoving-vg1-8-1-tip-1',
      type: 'tip',
      title: 'Tips for å komme i gang',
      content: `- Start gradvis - ikke gjør for mye på en gang
- Finn aktiviteter du liker, ikke bare det du "bør" gjøre
- Tren med venner for motivasjon
- Sett realistiske mål
- Feir små fremskritt
- Bruk apper eller treningsdagbok for å følge fremgang
- Ta pauser fra skjerm og stillesitting hver time`,
    },
    {
      id: 'kroppsoving-vg1-8-1-text-2',
      type: 'text',
      content: `## Fysisk form og kapasitet

**Kondisjon (aerob kapasitet):**
Hjertets og lungenes evne til å forsyne musklene med oksygen. God kondisjon betyr:
- Mindre sliten i hverdagen
- Lavere hvilepuls
- Raskere restitusjon
- Bedre helse generelt

**Styrke:**
Musklenes evne til å utøve kraft. Viktig for:
- Hverdagslige gjøremål
- Skadeforebygging
- Benstyrke og holdning
- Metabolisme og energiforbruk

**Bevegelighet:**
Leddenes bevegelseområde. God bevegelighet gir:
- Mindre muskel- og leddsmerter
- Bedre holdning
- Redusert skaderisiko
- Bedre prestasjonsevne`,
    },
    {
      id: 'kroppsoving-vg1-8-1-def-4',
      type: 'definition',
      title: 'VO2max',
      content: `VO2max er et mål på maksimalt oksygenopptak - den beste indikatoren på kondisjonen din.

**Måles i:** ml/kg/min (milliliter oksygen per kilo kroppsvekt per minutt)

**Typiske verdier:**
- Utrente menn: 35-40
- Utrente kvinner: 30-35
- Godt trente: 50-60
- Eliteutøvere: 70-85+

**Hvordan forbedre:** Intervalltrening, langvarig trening med moderat til høy intensitet, variert trening.`,
    },
    {
      id: 'kroppsoving-vg1-8-1-warning-1',
      type: 'warning',
      title: 'Overtrening',
      content: `**Tegn på overtrening:**
- Konstant tretthet og utmattelse
- Nedsatt prestasjonsevne
- Økt skaderisiko
- Søvnproblemer
- Irritabilitet og dårlig humør
- Hyppige infeksjoner

**Forebygging:**
- Planlegg hvile og restitusjon
- Vari treningsintensitet
- Få nok søvn (8-10 timer)
- Spis nok og variert
- Lytt til kroppen din`,
    },
    {
      id: 'kroppsoving-vg1-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Fra sofa til 5 km',
      content: `Emma har ikke trent på lenge og vil starte med løping. Hun bruker en gradvis 8-ukers plan:

**Uke 1-2:** Veksle mellom 1 min jogging og 2 min gange, totalt 20 min, 3 ganger per uke
**Uke 3-4:** Veksle mellom 2 min jogging og 1 min gange, totalt 25 min
**Uke 5-6:** Veksle mellom 5 min jogging og 1 min gange, totalt 30 min
**Uke 7-8:** Jog kontinuerlig i 25-30 minutter

Etter 8 uker kan Emma løpe 5 km uten stopp! Hun startet gradvis og lyttet til kroppen.`,
    },
    {
      id: 'kroppsoving-vg1-8-1-text-3',
      type: 'text',
      content: `## Hverdagsaktivitet teller også

Du trenger ikke alltid organisert trening - hverdagsaktivitet bidrar også:

**Eksempler på hverdagsaktivitet:**
- Gå eller sykle til skolen i stedet for å kjøre
- Ta trappene i stedet for heisen
- Gå korte ærender til fots
- Hjelp til med hagearbeid eller snømåking
- Lek og aktivitet med søsken eller venner
- Gå en tur i friminuttet
- Stå i stedet for å sitte når du ser på TV

**10 000 skritt om dagen** er et godt mål - bruk mobil eller klokke for å telle!`,
    },
    {
      id: 'kroppsoving-vg1-8-1-tip-2',
      type: 'tip',
      title: 'Motivasjon og glede',
      content: `**Hvordan holde motivasjonen:**
- Sett kortsiktige og langsiktige mål
- Belønne deg selv for milepæler
- Vari aktivitetene - ikke kjør deg lei
- Fokuser på følelsen etterpå, ikke motstanden før
- Finn treningspartner for sosial støtte
- Prøv nye aktiviteter og idretter
- Husk: Noe aktivitet er alltid bedre enn ingen!`,
    },
    {
      id: 'kroppsoving-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mye fysisk aktivitet anbefales for ungdom daglig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling.',
            solution: 'Minst 60 minutter med moderat til høy intensitet',
            multipleChoiceOptions: [
              'Minst 60 minutter med moderat til høy intensitet',
              '30 minutter',
              '2 timer',
              '15 minutter',
            ],
          },
        ],
        solution: 'Ungdom anbefales minst 60 minutter daglig fysisk aktivitet med moderat til høy intensitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre helsegevinster av regelmessig fysisk aktivitet.',
        solution: 'Sterkere hjerte, bedre humør, lavere sykdomsrisiko, bedre søvn, sterkere muskler, mindre stress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-1-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom moderat og høy intensitet ved fysisk aktivitet.',
        solution: 'Moderat intensitet: Kan snakke under aktiviteten, raskere puls. Eksempel: rask gange. Høy intensitet: Vanskelig å snakke, andpusten og svett. Eksempel: løping, intervalltrening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-1-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en personlig treningsplan for én uke som oppfyller anbefalingene for ungdom.',
        solution: 'Planen bør inkludere minst 60 minutter aktivitet daglig med variert intensitet, styrketrening 2-3 ganger, og variasjon i aktiviteter. Eksempel: mandag løping, tirsdag styrke, onsdag lagidrett osv.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-1-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er VO2max og hvorfor er det viktig for helsen?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer VO2max.',
            solution: 'VO2max er maksimalt oksygenopptak - et mål på kroppens evne til å ta opp og bruke oksygen under trening.',
          },
          {
            label: 'b',
            task: 'Hvorfor er høy VO2max bra for helsen?',
            solution: 'Høy VO2max indikerer god kondisjonsform, som gir bedre utholdenhet, lavere risiko for hjertesykdom og bedre generell helse.',
          },
        ],
        solution: 'VO2max måler maksimalt oksygenopptak og er den beste indikatoren på kondisjonsform. Høy VO2max gir bedre helse og lavere sykdomsrisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-1-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan du redusere stillesitting i hverdagen? Gi minst fem konkrete eksempler.',
        solution: 'Eksempler: Gå/sykle til skolen, ta trappene, stå i stedet for å sitte, gå i friminutt, pause fra skjerm hver time, lek og aktivitet, gå korte ærender til fots.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Livsstilssykdommer og forebygging
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_2: TextbookChapter = {
  id: 'kroppsoving-vg1-8-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.2',
  title: 'Livsstilssykdommer og forebygging',
  description: 'Lær om livsstilssykdommer og hvordan fysisk aktivitet forebygger dem.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-2-intro',
      type: 'text',
      content: `## Livsstilssykdommer og forebygging

Livsstilssykdommer er sykdommer som i stor grad skyldes livsstilsvalg som kosthold, aktivitetsnivå og røyking.`,
    },
    {
      id: 'kroppsoving-vg1-8-2-def-1',
      type: 'definition',
      title: 'Vanlige livsstilssykdommer',
      content: `**Hjerte- og karsykdommer:**
- Hjerteinfarkt, hjerneslag, høyt blodtrykk
- Forebygging: Fysisk aktivitet, sunt kosthold, ikke røyking

**Type 2-diabetes:**
- Kroppen håndterer ikke blodsukker effektivt
- Forebygging: Normalvekt, fysisk aktivitet, kosthold

**Overvekt og fedme:**
- Energiinntak > energiforbruk over tid
- Øker risiko for andre sykdommer`,
    },
    {
      id: 'kroppsoving-vg1-8-2-text-1',
      type: 'text',
      content: `## Forebygging gjennom livsstil

**De fire søylene:**
1. **Fysisk aktivitet:** Daglig bevegelse, mindre sitting
2. **Kosthold:** Variert, plantebasert, lite bearbeidet mat
3. **Søvn:** 8-10 timer for ungdom
4. **Stressmestring:** Balanse i hverdagen

Små endringer kan gi store helsegevinster over tid!`,
    },
    {
      id: 'kroppsoving-vg1-8-2-def-2',
      type: 'definition',
      title: 'Metabolsk syndrom',
      content: `Metabolsk syndrom er en tilstand der flere risikofaktorer opptrer samtidig:

**Diagnosekriterier (3 av 5):**
- Stor mageomkrets (abdominal fedme)
- Høyt blodtrykk (≥130/85 mmHg)
- Høye triglyserider (≥1,7 mmol/L)
- Lavt HDL-kolesterol ("godt" kolesterol)
- Høyt fastende blodsukker (≥5,6 mmol/L)

**Risiko:** Betydelig økt risiko for hjertesykdom, hjerneslag og type 2-diabetes.

**Forebygging:** Fysisk aktivitet, sunt kosthold og normalvekt.`,
    },
    {
      id: 'kroppsoving-vg1-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Lisas livsstilsendring',
      content: `Lisa (17) får beskjed fra legen om at hun har begynnende høyt blodtrykk og er i risikosonen for type 2-diabetes.

**Lisas situasjon før:**
- Spiser mye hurtigmat og godteri
- Inaktiv - sitter mye foran skjerm
- Sover 5-6 timer per natt
- Stresset og bekymret

**Lisas endringer:**
1. Starter med 30 min gåtur hver dag
2. Spiser mer grønnsaker, frukt og grove kornprodukter
3. Begrenser brus og godteri til helgene
4. Legger seg 22:00 for å få 8 timers søvn
5. Begynner med yoga for stressmestring

**Resultat etter 6 måneder:**
- Blodtrykket har normalisert seg
- Bedre blodsukkerregulering
- Tapt 8 kg
- Føler seg mye bedre både fysisk og psykisk`,
    },
    {
      id: 'kroppsoving-vg1-8-2-def-3',
      type: 'definition',
      title: 'BMI - Body Mass Index',
      content: `BMI beregnes ved: **Vekt (kg) / Høyde (m)²**

**Kategorier:**
- Undervekt: <18,5
- Normalvekt: 18,5-24,9
- Overvekt: 25-29,9
- Fedme: ≥30

**Begrensninger:**
- Tar ikke hensyn til muskel vs. fett
- Idrettsutøvere med muskelmasse kan få høy BMI
- Bedre å måle mageomkrets og kondisjonsform
- For ungdom brukes vekstkurver tilpasset alder`,
    },
    {
      id: 'kroppsoving-vg1-8-2-text-2',
      type: 'text',
      content: `## Kreft og livsstil

**Livsstilsfaktorer som påvirker kreftrisiko:**

**Øker risiko:**
- Røyking (lunge-, blære-, bukspyttkjertelkreft)
- Alkohol (bryst-, lever-, tarmkreft)
- Inaktivitet (tykktarms-, brystkreft)
- Usunn mat (høyt kjøtt- og fettinntak)
- Overvekt (flere krefttyper)
- For mye sol (hudkreft)

**Reduserer risiko:**
- Regelmessig fysisk aktivitet
- Sunt kosthold (mye frukt, grønt, fiber)
- Normalvekt
- Ikke røyke
- Begrenset alkohol
- Solbeskyttelse

**Faktum:** 30-50% av krefttilfeller kunne vært forebygget med sunnere livsstil!`,
    },
    {
      id: 'kroppsoving-vg1-8-2-warning-1',
      type: 'warning',
      title: 'Varselsignaler',
      content: `**Søk lege hvis du opplever:**

**Type 2-diabetes:**
- Veldig tørst hele tiden
- Mye vannlating (spesielt om natten)
- Uforklarlig vekttap
- Tretthet og utmattelse
- Sløret syn

**Hjertesykdom:**
- Brystsmerter ved aktivitet
- Pustevansker
- Uregelmessig hjerterytme
- Hovne ben

**Tidlig oppdagelse og behandling er viktig!**`,
    },
    {
      id: 'kroppsoving-vg1-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Familie i endring',
      content: `Familien Johansen (mor, far, to tenåringer) bestemmer seg for å leve sunnere etter at far fikk type 2-diabetes.

**Deres endringer:**
- Mandags og onsdags kjøttfri middag
- Helkornsprodukter i stedet for hvitt brød
- Begrenser brus og juice til helg
- Familiesykkelturer hver søndag
- Mor og far går turgruppe 2 ganger per uke
- Barna aktive i idrettslag

**Positive effekter:**
- Fars blodsukkerverdier bedre - kan redusere medisin
- Mor tapt 5 kg, føler seg lettere
- Mer familietid sammen
- Alle føler seg sunnere og gladere
- Lavere matbudsjett (mindre ferdigmat)`,
    },
    {
      id: 'kroppsoving-vg1-8-2-tip-1',
      type: 'tip',
      title: 'Små endringer, stor effekt',
      content: `**Enkle grep for sunnere livsstil:**

**Kosthold:**
- Bytt hvitt brød med grovt
- Drikk vann i stedet for brus
- Spis grønnsaker til middag hver dag
- Velg frukt som snacks i stedet for godteri

**Aktivitet:**
- Gå eller sykle til skolen
- Ta trappene i stedet for heisen
- Reis deg og strekk på deg hver time
- Aktiv fritid - ikke bare skjermtid

**Søvn og stress:**
- Fast leggetid i hverdagen
- Unngå skjerm siste time før søvn
- Avslappingsteknikker (pusteøvelser, meditasjon)
- Snakk med noen hvis du er stresset`,
    },
    {
      id: 'kroppsoving-vg1-8-2-text-3',
      type: 'text',
      content: `## Samfunnsperspektiv på livsstilssykdommer

**Økonomiske konsekvenser:**
Livsstilssykdommer koster det norske samfunnet milliarder årlig:
- Behandlingskostnader i helsetjenesten
- Sykefravær og uføretrygd
- Tapt arbeidsproduktivitet

**Forebygging lønner seg:**
- 1 krone investert i forebygging sparer 5-10 kroner i behandling
- Friskere befolkning = mindre press på helsevesenet
- Bedre livskvalitet for enkeltpersoner

**Samfunnstiltak:**
- Skolens rolle: Kroppsøvingsfag, sunn mat i kantiner
- Arbeidsplasser: Tilrettelegging for fysisk aktivitet
- Byplanlegging: Gang- og sykkelveier, grøntområder
- Avgifter på usunn mat, støtte til sunn mat`,
    },
    {
      id: 'kroppsoving-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en livsstilssykdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Sykdom som i stor grad skyldes livsstilsvalg som kosthold og aktivitet',
            multipleChoiceOptions: [
              'Sykdom som i stor grad skyldes livsstilsvalg som kosthold og aktivitet',
              'En smittsom sykdom',
              'En arvelig sykdom',
              'En sykdom man får av trening',
            ],
          },
        ],
        solution: 'Livsstilssykdommer er sykdommer som i stor grad kan forebygges eller påvirkes av livsstilsvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan kan du forebygge hjerte- og karsykdommer?',
        solution: 'Regelmessig fysisk aktivitet, sunt kosthold, unngå røyking, normalvekt, stressmestring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-2-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er metabolsk syndrom og hvorfor er det farlig?',
        solution: 'Metabolsk syndrom er når flere risikofaktorer opptrer samtidig (høyt blodtrykk, høyt blodsukker, stor mageomkrets, ugunstige kolesterolverdier). Det gir betydelig økt risiko for hjertesykdom, hjerneslag og diabetes.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-2-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beregn din egen BMI og forklar hva tallet betyr.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn BMI: Vekt (kg) / Høyde (m)²',
            solution: 'Eksempel: 70 kg / (1,75 m)² = 70 / 3,06 = 22,9',
          },
          {
            label: 'b',
            task: 'Hva betyr resultatet?',
            solution: 'BMI 22,9 er normalvekt (18,5-24,9). Husk at BMI har begrensninger - kondisjonsform og mageomkrets er også viktige mål.',
          },
        ],
        solution: 'BMI = Vekt/Høyde². For ungdom brukes vekstkurver. BMI alene forteller ikke hele historien - muskel veier mer enn fett.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-2-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn fire livsstilsfaktorer som øker risikoen for kreft, og forklar hvordan man kan redusere denne risikoen.',
        solution: 'Røyking, alkohol, inaktivitet og overvekt øker kreftrisiko. Redusere risiko ved: Ikke røyke, begrense alkohol, være fysisk aktiv, holde normalvekt, spise sunt (mye frukt, grønt, fiber).',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-2-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en plan for hvordan din familie kan redusere risikoen for livsstilssykdommer. Inkluder kosthold, aktivitet og andre faktorer.',
        solution: 'Eksempel: Felles familieaktiviteter (sykkelturer, turgåing), sunnere måltider (mer grønnsaker, grove kornprodukter), redusere brus/godteri, fast søvnrutine, mindre skjermtid, gå/sykle mer i hverdagen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Psykisk helse og bevegelsesglede
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_3: TextbookChapter = {
  id: 'kroppsoving-vg1-8-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.3',
  title: 'Psykisk helse og bevegelsesglede',
  description: 'Lær om sammenhengen mellom fysisk aktivitet og psykisk helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-3-intro',
      type: 'text',
      content: `## Psykisk helse og bevegelsesglede

Fysisk aktivitet har dokumentert positiv effekt på psykisk helse. Bevegelse kan forebygge og lindre psykiske plager.`,
    },
    {
      id: 'kroppsoving-vg1-8-3-def-1',
      type: 'definition',
      title: 'Endorfiner',
      content: `Endorfiner er kroppens naturlige "lykkehormoner" som frigjøres ved fysisk aktivitet. De gir:
- Følelse av velvære
- Mindre smerte
- Redusert stress
- Bedre humør

"Runner's high" skyldes delvis endorfinfrigjøring.`,
    },
    {
      id: 'kroppsoving-vg1-8-3-def-2',
      type: 'definition',
      title: 'Flyt (flow)',
      content: `Flyt er en mental tilstand der du er fullstendig oppslukt i aktiviteten:
- Tid og sted "forsvinner"
- Full konsentrasjon
- Aktiviteten føles meningsfull
- Balanse mellom utfordring og ferdighet

Flyt oppstår ofte i sport, dans, lek og kreative aktiviteter.`,
    },
    {
      id: 'kroppsoving-vg1-8-3-text-1',
      type: 'text',
      content: `## Bevegelse mot stress og angst

**Hvordan hjelper bevegelse:**
- Reduserer stresshormoner (kortisol)
- Øker endorfiner og serotonin
- Gir avbrekk fra bekymringer
- Bedrer søvnkvalitet
- Styrker selvfølelse

**Tips:**
- Finn aktiviteter du liker
- Tren med andre for sosial støtte
- Vær ute i naturen
- Ikke fokuser bare på prestasjon`,
    },
    {
      id: 'kroppsoving-vg1-8-3-def-3',
      type: 'definition',
      title: 'Serotonin og dopamin',
      content: `**Serotonin - "Lykkemolekylet":**
- Regulerer humør, søvn og appetitt
- Økes ved fysisk aktivitet, sollys og sunt kosthold
- Lav serotonin kan gi depresjon og angst

**Dopamin - "Belønningshormonet":**
- Gir følelse av glede og motivasjon
- Frigjøres når vi når mål eller mestrer noe
- Øker ved trening, spesielt ved nye utfordringer
- Viktig for konsentrasjon og læring

**Fysisk aktivitet øker produksjonen av begge!**`,
    },
    {
      id: 'kroppsoving-vg1-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Marias kamp mot angst',
      content: `Maria (16) har slitt med angst og mye bekymringer. Hun våkner ofte om natten og gruer seg til skolen.

**Marias psykolog anbefaler:**
- Daglig fysisk aktivitet i 30 minutter
- Helst ute i naturen
- Aktiviteter hun liker, ikke prestasjonskrav

**Maria prøver:**
- Morgenjogg 3 ganger i uken
- Yoga med nettvideoer
- Fotballag med venninner
- Turer i marka i helgene

**Effekt etter 2 måneder:**
- Sover bedre - våkner sjeldnere
- Mindre gruing og bekymringer
- Føler mestring og økt selvtillit
- Mer sosial - fotballaget ga nye venner
- Bruker fremdeles psykolog, men trenger mindre medisiner

**Maria:** "Jeg trudde aldri at bare å bevege meg kunne gjøre så mye. Det er ikke magi, men det hjelper virkelig!"`,
    },
    {
      id: 'kroppsoving-vg1-8-3-text-2',
      type: 'text',
      content: `## Selvbilde og mestring

**Fysisk aktivitet styrker selvbildet:**

**Mestringsopplevelser:**
- Når du når mål (løpe lenger, bli sterkere)
- Lærer nye ferdigheter
- Overvinner utfordringer
- Ser egen fremgang

**Kroppsbilde:**
- Fokus på hva kroppen kan, ikke bare utseende
- Stolthet over egen styrke og utholdenhet
- Aksept for din egen kropp
- Motgift mot kroppspress i sosiale medier

**Sosial tilhørighet:**
- Lagfølelse og vennskap
- Være del av noe større
- Støtte og oppmuntring fra andre
- Trygg arena for utfoldelse`,
    },
    {
      id: 'kroppsoving-vg1-8-3-warning-1',
      type: 'warning',
      title: 'Når trening blir usunt',
      content: `**Tvangstrening - varselsignaler:**
- Må trene selv når du er skadet eller syk
- Ekstrem dårlig samvittighet hvis du hopper over trening
- Trener for å "straffe" deg etter mat
- Isolerer deg sosialt for å trene
- Nedstemt hvis du ikke kan trene
- Trener flere timer daglig

**Søk hjelp hvis:**
- Trening styrer livet ditt
- Du trener til tross for skader
- Kombinert med ekstrem diett eller spiseforstyrrelser
- Angst ved tanken på å ikke trene

**Sunn trening = glede og energi. Usunn trening = tvang og utmattelse.**`,
    },
    {
      id: 'kroppsoving-vg1-8-3-tip-1',
      type: 'tip',
      title: 'Aktivitet for psykisk helse',
      content: `**Hva virker best:**
- Kombinasjon av kondisjon og styrke
- Utendørs aktivitet (natur og sollys)
- Sosiale aktiviteter (lagidrett, treningsgrupper)
- Rytmisk bevegelse (løping, sykling, dans)
- Rolige aktiviteter (yoga, tai chi, turgåing)

**Hvor mye:**
- 30 minutter daglig gir målbar effekt
- Høy intensitet gir sterkest effekt
- Men lav intensitet virker også - viktigst å gjøre noe!

**Når:**
- Morgentrening kan gi energi hele dagen
- Ettermiddagstrening reduserer stress
- Kveldstrening (ikke for sent) forbedrer søvn`,
    },
    {
      id: 'kroppsoving-vg1-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Klasseromsforsøk',
      content: `En VG1-klasse testet effekten av aktivitet på konsentrasjon:

**Uke 1 - Normal uke:**
- Vanlig skoledag
- Målt konsentrasjon i siste time

**Uke 2 - Aktivitetsuke:**
- 15 min. hurtigvandring før skolen
- Aktive pauser mellom timer (strekk, små øvelser)
- 10 min. ute i lunsjen
- Målt konsentrasjon i siste time

**Resultater:**
- 78% opplevde bedre konsentrasjon siste time
- 85% følte seg mer våken gjennom dagen
- 92% sov bedre om natten
- Karakterer på prøve uke 2: gjennomsnitt 0,5 høyere!

**Konklusjon:** Små aktivitetsøkter gir stor effekt på læring og velvære.`,
    },
    {
      id: 'kroppsoving-vg1-8-3-text-3',
      type: 'text',
      content: `## Bevegelsesglede - nøkkelen til langvarig aktivitet

**Hva er bevegelsesglede:**
- Glede og moro i selve aktiviteten
- Lyst til å bevege seg - ikke plikt
- Nysgjerrighet og lekeglede
- Fokus på opplevelsen, ikke bare resultat

**Hvordan finne bevegelsesglede:**
- Prøv mange forskjellige aktiviteter
- Finn noe som passer din personlighet
- Introverter: yoga, løping, svømming
- Ekstroverter: lagidrett, gruppetrening, dans
- Vari aktiviteter - unngå kjedsomhet
- Tren med venner eller familie
- Sett morsomme mål (ikke bare prestasjonsmål)

**Gleden over bevegelse er den sterkeste motivatoren for et aktivt liv!**`,
    },
    {
      id: 'kroppsoving-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er endorfiner?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Kroppens naturlige lykkehormoner som frigjøres ved aktivitet',
            multipleChoiceOptions: [
              'Kroppens naturlige lykkehormoner som frigjøres ved aktivitet',
              'Et kosttilskudd',
              'Stresshormoner',
              'Muskelvev',
            ],
          },
        ],
        solution: 'Endorfiner er hormoner som frigjøres ved fysisk aktivitet og gir følelse av velvære.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv flyt-tilstanden og når du har opplevd den.',
        solution: 'Flyt er å være fullstendig oppslukt i en aktivitet, med full konsentrasjon og balanse mellom utfordring og ferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-3-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan fysisk aktivitet kan hjelpe mot stress og angst.',
        solution: 'Fysisk aktivitet reduserer stresshormoner (kortisol), øker lykkehormoner (endorfiner, serotonin), gir pause fra bekymringer, forbedrer søvn og styrker selvfølelse.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-3-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom serotonin og dopamin, og hvordan påvirker fysisk aktivitet disse hormonene?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv serotonin og dets funksjon.',
            solution: 'Serotonin regulerer humør, søvn og appetitt. Lav serotonin kan gi depresjon. Økes ved aktivitet.',
          },
          {
            label: 'b',
            task: 'Beskriv dopamin og dets funksjon.',
            solution: 'Dopamin er "belønningshormonet" som gir glede og motivasjon. Frigjøres når vi mestrer noe eller når mål.',
          },
        ],
        solution: 'Begge er "lykkehormoner" som økes ved fysisk aktivitet. Serotonin regulerer humør og søvn, mens dopamin gir følelse av glede og motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-3-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er bevegelsesglede, og hvordan kan du finne det?',
        solution: 'Bevegelsesglede er glede i selve aktiviteten, ikke bare resultatet. Finne det ved å prøve mange aktiviteter, velge det du liker, trene med andre, variere, fokusere på opplevelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-3-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva er varselsignaler på at trening har blitt usunt (tvangstrening)?',
        solution: 'Må trene selv når skadet/syk, ekstrem dårlig samvittighet ved pause, trener for å straffe seg, isolerer seg sosialt, nedstemt uten trening, kombinert med ekstrem diett.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Fair play og idrettskultur
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_4: TextbookChapter = {
  id: 'kroppsoving-vg1-8-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.4',
  title: 'Fair play og idrettskultur',
  description: 'Lær om fair play, sportsånd og etikk i idrett.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-4-intro',
      type: 'text',
      content: `## Fair play og idrettskultur

Fair play handler om mer enn å følge reglene - det handler om respekt, ærlighet og sportsånd.`,
    },
    {
      id: 'kroppsoving-vg1-8-4-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play innebærer:
- Respekt for regler og motstandere
- Ærlig spill uten juks
- Aksept av dommeravgjørelser
- Hjelpe skadet motstander
- Gratulere vinner, trøste taper
- Ingen mobbing eller trakassering`,
    },
    {
      id: 'kroppsoving-vg1-8-4-text-1',
      type: 'text',
      content: `## Idrettsglede for alle

**Inkluderende idrettsmiljø:**
- Alle skal føle seg velkomne
- Fokus på utvikling, ikke bare resultater
- Positiv tilbakemelding
- Feire innsats, ikke bare seier
- Nulltoleranse for mobbing

**Utøverens ansvar:**
- Være en god lagkamerat
- Støtte andre
- Ta avstand fra usportslig oppførsel`,
    },
    {
      id: 'kroppsoving-vg1-8-4-def-2',
      type: 'definition',
      title: 'Olympisk charter - idealene',
      content: `Det olympiske charteret fremhever verdier som går utover konkurranse:

**Olympiske verdier:**
- **Excellence (fortreffelighet):** Gjøre ditt beste
- **Friendship (vennskap):** Bygge broer mellom folk og kulturer
- **Respect (respekt):** For seg selv, andre, regler og miljø

**Pierre de Coubertins motto:**
"Det viktigste i de olympiske leker er ikke å vinne, men å delta. Det viktigste i livet er ikke seieren, men kampen."

**Fair play er kjernen i olympisk ånd.**`,
    },
    {
      id: 'kroppsoving-vg1-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Fair play på fotballbanen',
      content: `**Situasjon 1:**
Under en fotballkamp skader en motstander seg etter en duell. Ballen er ute, men dommeren har ikke sett det.

**Hva gjør du?**
- Spiller videre og scorer (Nei!)
- Sparker ballen ut så motstanderen får behandling (Ja!)

**Situasjon 2:**
Du blir felt i boksen, men det var ikke straffe - du snublet selv.

**Hva gjør du?**
- Lar dommeren tro det var straffe (Nei!)
- Reiser deg raskt og signaliserer at det ikke var straffe (Ja!)

**Dette er fair play i praksis!**`,
    },
    {
      id: 'kroppsoving-vg1-8-4-text-2',
      type: 'text',
      content: `## Etiske dilemmaer i idretten

**Gråsoner og vanskelige valg:**

**Taktisk filing:**
- Er det greit å ta gult kort med vilje for å stoppe et farlig angrep?
- Hvor går grensen mellom smart taktikk og usportslig oppførsel?

**Psykologisk spill:**
- Er "trash talk" (nedsettende kommentarer) greit?
- Når blir det fra motivasjon til mobbing?

**Laglojalitet vs. rettferdighet:**
- Skal du dekke over lagkameratens regelbrudd?
- Hva gjør du hvis treneren ber deg jukse?

**Prestasjonspress:**
- Hvor mye press er "sunt" fra foreldre og trenere?
- Når blir ambisjoner til urimelig krav?

**Diskusjon om disse dilemmaene utvikler din etiske kompass i idretten.**`,
    },
    {
      id: 'kroppsoving-vg1-8-4-def-3',
      type: 'definition',
      title: 'Idrettens verdigrunnlag (NIFs verdier)',
      content: `Norges idrettsforbund (NIF) har definert verdier for idretten:

**Glede:** Idrett skal være morsomt - positiv opplevelse for alle

**Fellesskap:** Sosial arena - inkluderende miljø - vennskap på tvers

**Helse:** Fremme folkehelse - forebygge skader - balansert aktivitet

**Ærlighet:** Rent spill - ingen doping eller juks - respekt for regler

**Frivillighet:** Bygget på frivillig innsats - medbestemmelse - demokrati`,
    },
    {
      id: 'kroppsoving-vg1-8-4-warning-1',
      type: 'warning',
      title: 'Negativ idrettskultur',
      content: `**Varselsignaler på usunt idrettsmiljø:**

**For utøvere:**
- Mobbing, utestenging eller trakassering
- Kroppspress og fokus på utseende
- Overtrening og prestasjonsangst
- Skader ignoreres - må trene skadet
- Ingen glede, bare plikt og frykt

**Hva gjøre:**
- Snakk med tillitspersoner (lagleder, lærer)
- Kontakt idrettens varslingskanal
- Ta avstand fra usportslig oppførsel
- Vær en positiv rollemodell selv`,
    },
    {
      id: 'kroppsoving-vg1-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Ekte sportsånd',
      content: `**OL 2018 - Langrenn:**
Den amerikanske utøveren Jessie Diggins stoppet og ga sin stav til den svenske Charlotte Kalla da hennes stav knakk. Begge tapte plasseringer, men viste hva idrett virkelig handler om.

**OL 2016 - 5000m:**
To løpere, Abbey D'Agostino (USA) og Nikki Hamblin (New Zealand), kolliderte og falt. D'Agostino hjalp Hamblin opp, men falt igjen selv med skadet kne. Hamblin ventet og hjalp henne. Begge fullførte løpet sammen.

**Lærdom:** Dette er essensen av fair play - å sette menneskelige verdier over egen vinning.`,
    },
    {
      id: 'kroppsoving-vg1-8-4-tip-1',
      type: 'tip',
      title: 'Hvordan være en god idrettsutøver',
      content: `**På trening:**
- Møt presis og forberedt
- Gi alt du har
- Hjelp og oppmuntre lagkamerater

**I kamp/konkurranse:**
- Respekter motstandere, dommere og regler
- Gratulere vinner, trøste taper
- Aksepter nederlag med verdighet

**Som lagkamerat:**
- Feire andres suksess
- Støtte i nedturer
- Inkludere alle
- Nulltoleranse for mobbing`,
    },
    {
      id: 'kroppsoving-vg1-8-4-text-3',
      type: 'text',
      content: `## Inkludering i idretten

**Idrett for alle - uansett:**

**Funksjonsnedsettelse:**
- Parasport - like viktig som ordinær idrett
- Tilrettelegging og tilpasninger
- Fokus på mestring, ikke begrensninger
- Eksempler: Rullestolbasket, Sittevolleyball, Special Olympics

**Økonomi:**
- Idrett skal ikke være forbeholdt de rike
- Støtteordninger og lavterskeltilbud

**Kjønn:**
- Like muligheter for jenter og gutter
- Utfordre stereotype kjønnsroller

**Kulturell bakgrunn:**
- Idrett som integreringsarena
- Respekt for ulike tradisjoner
- Mangfold beriker idretten

**En inkluderende idrett er en bedre idrett for alle!**`,
    },
    {
      id: 'kroppsoving-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fair play?',
        solution: 'Fair play er å vise respekt for regler, motstandere og dommere, spille ærlig og vise god sportsånd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på god sportsånd fra idretten.',
        solution: 'Eksempler: Hjelpe skadet motstander, innrømme at ballen var ute selv om dommer ikke så det, gratulere vinneren etter tap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-4-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar de olympiske verdiene: excellence, friendship og respect.',
        solution: 'Excellence = gjøre ditt beste, Friendship = bygge broer mellom folk og kulturer, Respect = respekt for seg selv, andre, regler og miljø. Pierre de Coubertin sa at det viktigste er å delta, ikke å vinne.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-4-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv et etisk dilemma du har opplevd eller kan tenke deg i idretten. Hva ville du gjort?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv dilemmaet.',
            solution: 'Eksempel: Lagkamerat juks, men dommer ser det ikke. Skal jeg si fra?',
          },
          {
            label: 'b',
            task: 'Hva ville du gjort og hvorfor?',
            solution: 'Jeg ville si fra fordi fair play er viktigere enn å vinne. Ærlighet og respekt for motstandere kommer først.',
          },
        ],
        solution: 'Etiske dilemmaer krever at vi veier verdier mot hverandre. Fair play, ærlighet og respekt bør være veiledende.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-4-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er NIFs verdier for idretten? Velg én verdi og forklar hva den betyr i praksis.',
        solution: 'NIFs verdier: Glede, Fellesskap, Helse, Ærlighet, Frivillighet. Eksempel på Glede: Idrett skal være morsomt, ikke bare prestasjonspress. Alle skal føle bevegelsesglede og lyst til å delta.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-8-4-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan idretten bli mer inkluderende? Nevn tiltak for ulike grupper (funksjonsnedsettelse, økonomi, kjønn, kultur).',
        solution: 'Funksjonsnedsettelse: Parasport og tilrettelegging. Økonomi: Støtteordninger og lavterskeltilbud. Kjønn: Like muligheter, utfordre stereotypier. Kultur: Idrett som integreringsarena, respekt for mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Doping og rusmidler i idrett
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_5: TextbookChapter = {
  id: 'kroppsoving-vg1-8-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.5',
  title: 'Doping og rusmidler i idrett',
  description: 'Lær om doping, helserisiko og etiske aspekter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forebygge skader ved bevegelsesaktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-5-intro',
      type: 'text',
      content: `## Doping og rusmidler i idrett

Doping er bruk av forbudte stoffer eller metoder for å forbedre prestasjoner. Det er juks, helsefarlig og ulovlig.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-def-1',
      type: 'definition',
      title: 'Dopingmidler',
      content: `**Vanlige dopinggrupper:**
- **Anabole steroider:** Øker muskelmasse, alvorlige bivirkninger
- **Stimulerende midler:** Øker våkenhet og aggresjon
- **EPO:** Øker oksygenopptak, risiko for blodpropp
- **Veksthormoner:** Vekst og regenerasjon

WADA (World Anti-Doping Agency) publiserer årlig oppdatert dopingliste.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-def-2',
      type: 'definition',
      title: 'Helserisiko ved doping',
      content: `**Anabole steroider kan gi:**
- Leverskader
- Hjerte- og karsykdommer
- Psykiske problemer (aggresjon, depresjon)
- Hormonforstyrrelser
- Akne og hårtap
- Sterilitet

Bivirkningene kan være varige eller dødelige.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-warning-1',
      type: 'warning',
      title: 'Kosttilskudd og doping',
      content: `Noen kosttilskudd kan være forurenset med dopingmidler. Bruk kun produkter fra sikre kilder og sjekk Antidoping Norges database før bruk.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-text-1',
      type: 'text',
      content: `## Idrettsetniske perspektiver

**Hvorfor er doping galt?**

Doping bryter med idrettens grunnleggende verdier:
- **Rettferdighet:** Fair play betyr at alle konkurrerer på like vilkår
- **Ærlighet:** Idrett handler om ekte prestasjoner, ikke kunstig forbedring
- **Respekt:** For motstandere, regler og egen helse
- **Integritet:** Å være seg selv og gjøre sitt beste

**Samfunnsperspektivet:**
Når toppidrettsutøvere doper seg, sender det farlige signaler til unge:
- At mål helliggjør middel
- At kroppen er et redskap man kan manipulere
- At snarveier er akseptabelt
- At du ikke er god nok som du er

Idrettsutøvere har et forbilledansvar, spesielt overfor barn og unge som ser opp til dem.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-def-3',
      type: 'definition',
      title: 'WADA og dopingkontroll',
      content: `**World Anti-Doping Agency (WADA):**
- Internasjonal organisasjon som koordinerer kampen mot doping
- Publiserer årlig oppdatert dopingliste
- Utvikler standarder for dopingkontroll
- Akkrediterer dopinglaboratorier

**Dopingkontroll:**
- Urin- og blodprøver
- Kan tas både under og utenfor konkurranser
- Utøvere må alltid oppgi hvor de befinner seg (whereabouts)
- Brudd på regelverket gir utestengelse, ofte 2-4 år

**Terapeutisk dispensasjon (TUE):**
Utøvere med dokumentert medisinsk behov kan søke om å bruke ellers forbudte medisiner.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-example-1',
      type: 'example',
      title: 'Historiske dopingsaker',
      content: `**Lance Armstrong (1999-2005):**
- Syv Tour de France-seire
- Systematisk doping med EPO, blodtransfusjoner og steroider
- Fratatt alle titler i 2012
- Livstid utestengelse

**Viktige lærdommer:**
- Doping ødelegger omdømme og karriere
- Tilliten tar lang tid å bygge opp igjen
- Sannheten kommer ofte fram til slutt
- De sportslige prestasjonene mister all verdi

**Ben Johnson (1988):**
- Vant 100m i OL på verdensrekord
- Testet positivt for stanozolol (anabol steroid)
- Mister gullmedalje og verdensrekord
- Symbolet på dopingens mørke side`,
    },
    {
      id: 'kroppsoving-vg1-8-5-text-2',
      type: 'text',
      content: `## Rusmidler og prestasjoner

**Alkohol:**
- Reduserer koordinasjon, balanse og reaksjonsevne
- Forstyrrer søvn og restitusjon
- Dehydrerer kroppen
- Øker skaderisiko
- Hemmer muskeloppbygging

**Tobakk og snus:**
- Reduserer oksygenopptak
- Øker puls og blodtrykk
- Forringer kondisjon
- Forsinker sårheling
- Avhengighetsskapende

**Narkotika:**
- Alvorlig helsefare
- Ulovlig
- Øker ulykkesrisiko
- Kan gi varige hjerneskader
- Sosialt og økonomisk ødeleggende

**Kombinasjonseffekter:**
Kombinasjon av rusmidler og dopingmidler er spesielt farlig og kan være dødelig.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-warning-2',
      type: 'warning',
      title: 'Dopingfeller for unge',
      content: `**Pass opp for:**

**Treningssenter-pushere:**
- Selger ulovlige dopingmidler til unge som vil bygge muskler
- Lover raske resultater uten risiko
- Downplayer farene
- Produktene kan være farlige og ukontrollerte

**Internett-bestilling:**
- Mange nettsider selger "legal doping" eller "kosttilskudd"
- Produktene kan inneholde forbudte stoffer
- Kvaliteten er ukontrollert
- Du vet ikke hva du får i deg

**Press fra miljøet:**
- "Alle gjør det"
- "Du kommer ikke langt uten"
- "Det er ikke farlig hvis du doserer riktig"

**SI NEI!** Det finnes ingen snarveier til ekte resultater. Fokuser på riktig trening, kosthold og hvile.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-tip-1',
      type: 'tip',
      title: 'Ressurser for informasjon',
      content: `**Antidoping Norge:**
- Nettside: antidoping.no
- Database over tillatte og forbudte stoffer
- Informasjonsmateriell for unge utøvere
- Varslingssystem (ren-idrett.no)

**Dopinglinja:**
Telefon 23 30 05 60 for anonyme spørsmål om doping og kosttilskudd.

**Lege og helsepersonell:**
Snakk alltid med lege før du bruker kosttilskudd eller medisiner ved trening.`,
    },
    {
      id: 'kroppsoving-vg1-8-5-example-2',
      type: 'example',
      title: 'Naturlig talentutvikling',
      content: `**Suksesshistorier uten doping:**

**Jakob Ingebrigtsen:**
- Verdensmester på 5000m i 2023
- Systematisk trening fra ung alder
- Fokus på teknikk, utholdenhetsøvelser og tålmodighet
- Bevis på at talent + hardt arbeid + tid = suksess

**Karsten Warholm:**
- Olympisk mester og verdensrekordholder 400m hekk
- Gjennomtenkt treningsopplegg
- Kombinasjon av styrke, teknikk og utholdighet
- Inspirasjon for unge utøvere

**Nøkkelfaktorer:**
- Langsiktig planlegging
- Progressiv belastning
- Riktig teknikk
- Nok restitusjon
- Mentalt arbeid
- Støtteapparat (trener, fysioterapeut)`,
    },
    {
      id: 'kroppsoving-vg1-8-5-text-3',
      type: 'text',
      content: `## Prestasjonsfremmende kontra prestasjonshemmende

**Lovlige og effektive metoder:**
- Strukturert treningsprogram
- Periodisering (variasjon i belastning)
- Tilstrekkelig søvn (8-10 timer for unge)
- Balansert kosthold med nok energi og protein
- Hydrering (drikke nok vann)
- Mental trening og visualisering
- Høydetrening (naturlig økning av røde blodceller)
- Kryoterapi og andre restitusjonsteknikker

**Hva hindrer prestasjoner:**
- For lite hvile og søvn
- Dårlig kosthold
- Stress og overtrening
- Rusmidler
- Dårlig teknikk
- Manglende motivasjon

**Prestasjonsfremmende kosttilskudd (lovlige):**
- Protein-pulver (praktisk proteinkilder)
- Kreatin (øker styrke ved høyintensivt arbeid)
- Koffein (øker våkenhet og utholdenhetskapasitet)
- Vitamin D (hvis mangel)
- Jern (hvis mangel, spesielt hos jenter)

**OBS:** Alltid sjekk at produkter er testet og godkjent!`,
    },
    {
      id: 'kroppsoving-vg1-8-5-def-4',
      type: 'definition',
      title: 'Sosiale konsekvenser av doping',
      content: `**For utøveren:**
- Mister tillit fra familie, venner og fans
- Skam og dårlig samvittighet
- Økonomiske tap (sponsorer trekker seg)
- Juridiske konsekvenser (doping er ulovlig i Norge)
- Utestengelse fra idretten

**For idretten:**
- Taper troverdighet
- Publikum mister interessen
- Sponsorer trekker seg
- Unge mister forbilder
- Hele idretten stemples som uren

**For samfunnet:**
- Normalisering av juks
- Signaliserer at mål helliggjør middel
- Farlig helsepåvirkning på unge
- Tap av idrettens pedagogiske verdi`,
    },
    {
      id: 'kroppsoving-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor er doping forbudt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de viktigste grunnene.',
            solution: 'Det er helsefarlig, urettferdig og strider mot idrettens verdier',
            multipleChoiceOptions: [
              'Det er helsefarlig, urettferdig og strider mot idrettens verdier',
              'Det er bare ulovlig',
              'Det virker ikke',
              'Det er for dyrt',
            ],
          },
        ],
        solution: 'Doping er forbudt fordi det er helsefarlig, gir urettferdig fordel og undergraver idrettens kjerneverdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre helserisikoer ved bruk av anabole steroider.',
        solution: 'Leverskader, hjerte- og karsykdommer, psykiske problemer, hormonforstyrrelser, sterilitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva WADA er og hvilken rolle organisasjonen har.',
        solution: 'WADA (World Anti-Doping Agency) er en internasjonal organisasjon som koordinerer kampen mot doping, publiserer dopingliste og utvikler standarder for dopingkontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvorfor idrettsutøvere har et forbilledansvar når det gjelder doping.',
        solution: 'Idrettsutøvere er forbilder for unge. Når de doper seg, sender det signal om at mål helliggjør middel, at snarveier er akseptabelt, og at kroppen kan manipuleres. Dette påvirker unges holdninger og kan føre til farlig atferd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en oversikt over lovlige metoder for å forbedre idrettsprestasjoner.',
        solution: 'Lovlige metoder inkluderer: strukturert treningsprogram, god søvn, balansert kosthold, hydrering, mental trening, periodisering, høydetrening, og godkjente kosttilskudd som protein, kreatin og koffein.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.6: Inkludering og mangfold i kroppsøving
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_6: TextbookChapter = {
  id: 'kroppsoving-vg1-8-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.6',
  title: 'Inkludering og mangfold i kroppsøving',
  description: 'Lær om inkludering, tilpasning og mangfold.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-6-intro',
      type: 'text',
      content: `## Inkludering og mangfold i kroppsøving

Alle skal ha mulighet til å delta og oppleve mestring i kroppsøving, uavhengig av forutsetninger.`,
    },
    {
      id: 'kroppsoving-vg1-8-6-def-1',
      type: 'definition',
      title: 'Inkludering',
      content: `Inkludering betyr at alle:
- Føler seg velkomne og verdsatt
- Kan delta på egne premisser
- Opplever mestring
- Blir sett og hørt
- Er en del av fellesskapet

Det handler om tilpasning, ikke om at alle gjør det samme.`,
    },
    {
      id: 'kroppsoving-vg1-8-6-text-1',
      type: 'text',
      content: `## Tilrettelegging

**Eksempler på tilpasning:**
- Ulike nivåer i samme aktivitet
- Alternative øvelser
- Tilpasset utstyr
- Valgfrihet i aktiviteter
- Samarbeid framfor konkurranse

**Din rolle:**
- Bidra til et trygt miljø
- Inkluder alle i aktiviteter
- Unngå nedsettende kommentarer
- Anerkjenn andres innsats`,
    },
    {
      id: 'kroppsoving-vg1-8-6-def-2',
      type: 'definition',
      title: 'Universell utforming',
      content: `Universell utforming betyr å tilrettelegge aktiviteter slik at alle kan delta:
- Varierte øvelser med ulike vanskelighetsgrader
- Fleksible regler som kan tilpasses
- Utstyr som fungerer for alle
- Kommunikasjon på flere måter (visuelt, auditivt, taktilt)
- Fysisk tilgjengelige lokaler

Målet er å fjerne barrierer, ikke å skape spesialløsninger.`,
    },
    {
      id: 'kroppsoving-vg1-8-6-example-1',
      type: 'example',
      title: 'Inkluderende fotballaktivitet',
      content: `**Situasjon:** En elev i klassen bruker rullestol.

**Tilpasninger:**
- Spillere får poeng for pasninger, ikke bare mål
- Alle må berøre ballen før laget kan score
- Rullestoelbruker kan bruke hendene
- Mindre bane med færre spillere
- Myke baller som er lettere å kontrollere

**Resultat:** Alle deltar aktivt, og det sosiale aspektet styrkes. Fokus flyttes fra prestasjon til samarbeid og mestring.`,
    },
    {
      id: 'kroppsoving-vg1-8-6-text-2',
      type: 'text',
      content: `## Mangfold i kroppsøving

**Kulturelt mangfold:**
- Ulike kulturer har forskjellige bevegelsesformer
- Respekt for religiøse og kulturelle behov
- Bruker forskjellige aktiviteter (dans, kampsport, folkeleker)
- Klær og påkledning kan variere

**Funksjonsmangfold:**
- Elever med nedsatt funksjonsevne
- Kroniske sykdommer (diabetes, astma, allergi)
- Psykiske utfordringer
- Lærevansker

**Trygghet for alle:**
- Respektfullt miljø i garderober og aktiviteter
- Mulighet for tilpasning ved behov
- Varierte aktiviteter som passer ulike interesser
- Åpen dialog med lærer om eventuelle utfordringer`,
    },
    {
      id: 'kroppsoving-vg1-8-6-tip-1',
      type: 'tip',
      title: 'Hvordan du kan bidra',
      content: `**Som medelev:**
- Inkluder alle i leken og aktiviteter
- Hjelp til med tilpasninger når nødvendig
- Unngå nedsettende kommentarer
- Anerkjenn andres innsats og framgang
- Vær en god lagspiller
- Snakk positivt om alle

**Hvis du ser ekskludering:**
- Ta initiativ til å inkludere den som står utenfor
- Si fra til lærer hvis noen blir mobbet
- Vær en god forbilde for andre`,
    },
    {
      id: 'kroppsoving-vg1-8-6-example-2',
      type: 'example',
      title: 'Tilpasset svømming',
      content: `**Utfordring:** Elever med ulike forutsetninger i svømmeundervisning.

**Løsning:**
- Nivådelt opplegg: nybegynnere, middels og avanserte
- Ulike mål for hver gruppe
- Hjelpemidler: flytevest, svømmebrett, flippers
- Fokus på egen utvikling, ikke sammenligning
- Alternativ aktivitet for de som ikke kan/vil svømme
- Vanngymnastikk for variasjon

**Prinsipp:** Alle skal kjenne mestring og utvikling på sitt nivå.`,
    },
    {
      id: 'kroppsoving-vg1-8-6-warning-1',
      type: 'warning',
      title: 'Ekskludering skader',
      content: `Ekskludering i kroppsøving kan føre til:
- Dårlig selvbilde og selvtillit
- Angst for kroppsøvingstimer
- Inaktivitet og helseplager
- Sosial isolasjon
- Fravær fra skolen

Hvis du opplever ekskludering, snakk med læreren, helsesykepleier eller en voksen du stoler på.`,
    },
    {
      id: 'kroppsoving-vg1-8-6-def-3',
      type: 'definition',
      title: 'Mestringsklima',
      content: `Mestringsklima er en atmosfære der:
- Fokus er på egen utvikling, ikke sammenligning
- Innsats verdsettes mer enn resultat
- Feil er en naturlig del av læringen
- Alle oppfordres og støttes
- Samarbeid prioriteres fremfor konkurranse
- Forskjellighet ses som en ressurs

**Prestasjonsklima** (motsetning):
- Fokus på å være best
- Sammenligning med andre
- Feil er tabu
- Bare de beste får anerkjennelse`,
    },
    {
      id: 'kroppsoving-vg1-8-6-text-3',
      type: 'text',
      content: `## Tilrettelegging i praksis

**Eksempler på tilpasninger:**

**Volleyball:**
- Lavere nett
- Flere berøringer per lag
- Mindre bane
- Myke/lette baller
- Poeng for gode pasninger

**Orientering:**
- Enklere kart for nybegynnere
- Kortere distanser
- Par-orientering
- GPS-enheter som hjelpemiddel
- Visuelt merkede poster

**Dans:**
- Undervisning på flere måter (visuelt, verbalt, taktilt)
- Enklere bevegelser for noen
- Sakte musikk først
- Kreativ frihet til å tilpasse

**Styrketrening:**
- Maskiner, frivekter eller kroppsvekt
- Individuelt tilpasset belastning
- Fokus på teknikk, ikke vekt
- Øvelser som alle kan gjøre`,
    },
    {
      id: 'kroppsoving-vg1-8-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr inkludering i kroppsøving?',
        solution: 'At alle kan delta, føle seg velkomne og oppleve mestring, uavhengig av forutsetninger og ferdighetsnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på hvordan du kan bidra til inkludering i kroppsøving.',
        solution: 'Oppmuntre alle, tilpasse aktiviteter så alle kan delta, unngå å velge lag som ekskluderer noen, gi positive tilbakemeldinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på mestringsklima og prestasjonsklima?',
        solution: 'Mestringsklima fokuserer på egen utvikling, innsats og samarbeid. Prestasjonsklima fokuserer på å være best, sammenligning med andre, og resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi konkrete eksempler på hvordan man kan tilpasse volleyball for å inkludere alle.',
        solution: 'Lavere nett, flere berøringer per lag, mindre bane, myke/lette baller, poeng for gode pasninger, ikke bare serve og mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter: Hvorfor er mangfold en ressurs i kroppsøving?',
        solution: 'Mangfold bringer ulike perspektiver, bevegelsesformer og kulturelle aktiviteter. Det gir mulighet for læring, respekt og forståelse. Når alle inkluderes, skapes et rikere læringsmiljø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.7: Aktiv livsstil og livslang bevegelsesglede
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_7: TextbookChapter = {
  id: 'kroppsoving-vg1-8-7',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.7',
  title: 'Aktiv livsstil og livslang bevegelsesglede',
  description: 'Lær om motivasjon for en aktiv livsstil gjennom hele livet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-7-intro',
      type: 'text',
      content: `## Aktiv livsstil og livslang bevegelsesglede

Målet med kroppsøving er ikke bare å bli god i idrett, men å finne glede i bevegelse som varer livet ut.`,
    },
    {
      id: 'kroppsoving-vg1-8-7-def-1',
      type: 'definition',
      title: 'Indre motivasjon',
      content: `Indre motivasjon kommer fra gleden ved selve aktiviteten:
- Du gjør det fordi du liker det
- Aktiviteten gir mening i seg selv
- Du føler mestring og utvikling
- Du bestemmer selv

Indre motivasjon gir mer varig aktivitetsglede enn ytre belønning.`,
    },
    {
      id: 'kroppsoving-vg1-8-7-text-1',
      type: 'text',
      content: `## Finne din aktivitet

**Tips for livslang bevegelsesglede:**
- Prøv mange aktiviteter
- Finn noe du liker, ikke bare det som "gir resultater"
- Varier mellom organisert og egenorganisert aktivitet
- Tren med venner
- Ikke gi opp - finn alternativer
- Hverdagsaktivitet teller også!

**Hverdagsbevegelse:**
- Gå eller sykle til skolen
- Ta trappene
- Stå i stedet for å sitte
- Aktive lekepauser`,
    },
    {
      id: 'kroppsoving-vg1-8-7-def-2',
      type: 'definition',
      title: 'Ytre motivasjon',
      content: `Ytre motivasjon kommer fra faktorer utenfor aktiviteten:
- Belønninger (premier, medaljer, penger)
- Unngå straff
- Andres forventninger
- Sosial anerkjennelse
- Plikt og tvang

Ytre motivasjon kan gi kortsiktig effekt, men gir sjelden varig glede og aktivitet.`,
    },
    {
      id: 'kroppsoving-vg1-8-7-example-1',
      type: 'example',
      title: 'Veien til livslang aktivitet',
      content: `**Emmas historie:**
Emma sluttet med håndball etter videregående fordi hun følte press og hadde lite tid. Hun trodde hun ikke var "idrettstype" lenger.

**Vendepunktet:**
Hun begynte å gå turer med venner, prøvde yoga, danset hjemme til musikk, og syklet til skolen.

**Innsikt:**
- Aktivitet trenger ikke å være organisert idrett
- Glede og sosialt samvær motiverer
- Hverdagsaktivitet teller like mye
- Man kan være aktiv på sin egen måte

**Konklusjon:** Emma fant sin form for bevegelsesglede ved å eksperimentere og finne aktiviteter som passet henne.`,
    },
    {
      id: 'kroppsoving-vg1-8-7-text-2',
      type: 'text',
      content: `## Barrierer og løsninger

**Vanlige barrierer:**
- Tidspress og mye lekser
- Manglende motivasjon
- Mangel på kompetanse ("Jeg kan ikke dette")
- Økonomi (dyrt treningssenter, utstyr)
- Sosial utrygghet
- Dårlige erfaringer fra tidligere

**Løsninger:**
- Planlegg aktivitet som en del av hverdagen
- Finn noe du LIKER, ikke bare "bør gjøre"
- Start enkelt, bygg gradvis opp
- Bruk gratis tilbud (friluftsliv, hjemmetrening, skoleaktiviteter)
- Tren med venner eller familie
- Fokuser på hvordan du føler deg ETTER trening`,
    },
    {
      id: 'kroppsoving-vg1-8-7-tip-1',
      type: 'tip',
      title: 'Slik finner du DIN aktivitet',
      content: `**Spør deg selv:**
- Hva likte jeg å gjøre som barn?
- Vil jeg trene alene eller med andre?
- Liker jeg natur eller innendørs?
- Foretrekker jeg struktur eller frihet?
- Vil jeg konkurrere eller bare ha det gøy?

**Prøv forskjellige ting:**
- Meld deg på prøvetimer
- Bruk skolens aktivitetstilbud
- Utforsk gratis YouTube-treningsvideoer
- Test nye idretter i ferier
- Følg med på sosiale medier for inspirasjon (vær kritisk!)`,
    },
    {
      id: 'kroppsoving-vg1-8-7-example-2',
      type: 'example',
      title: 'Aktivitetshjulet',
      content: `**Konseptet:**
Tenk på ulike aktiviteter som eiker i et hjul. Jo flere eiker, jo sterkere hjul.

**Eksempel på et variert aktivitetshjul:**
- Mandag: Gå/sykle til skolen
- Tirsdag: Fotballtrening
- Onsdag: Styrketrening hjemme (20 min)
- Torsdag: Dans med venner
- Fredag: Friluftsliv/tur
- Lørdag: Organisert idrett eller fri lek
- Søndag: Hvile eller lett aktivitet (yoga, rolig gåtur)

**Fordeler:**
- Variasjon forebygger skader
- Mindre kjedelig
- Dekker ulike aspekter (styrke, utholdenhet, koordinasjon, sosial)
- Fleksibilitet hvis én aktivitet faller bort`,
    },
    {
      id: 'kroppsoving-vg1-8-7-warning-1',
      type: 'warning',
      title: 'Overtrening og utbrenthet',
      content: `**Tegn på overtrening:**
- Konstant tretthet
- Dårligere prestasjoner
- Økt skadefrekvens
- Søvnproblemer
- Irritabilitet og dårlig humør
- Mister glede i aktiviteten

**Hvis du kjenner deg igjen:**
- Ta hvileperioder
- Reduser intensitet og omfang
- Variere mellom aktiviteter
- Snakk med trener/lærer
- Husk: Hvile er en del av treningen!`,
    },
    {
      id: 'kroppsoving-vg1-8-7-text-3',
      type: 'text',
      content: `## Aktivitet gjennom livet

**Ungdom (15-25 år):**
- Bygg grunnlag for vaner
- Utforsk mange aktiviteter
- Sosialt fokus viktig
- Høy intensitet ofte ønskelig

**Voksen (25-65 år):**
- Oppretthold aktivitetsnivå
- Balanse mellom jobb, familie og aktivitet
- Funksjonell trening (styrke, mobilitet)
- Forebygge livsstilssykdommer

**Eldre (65+ år):**
- Oppretthold funksjon og selvstendighet
- Balanse og fallforebygging
- Sosial aktivitet
- Tilpasset intensitet

**Nøkkelen:** Tilpass aktivitet til livsfase, men behold bevegelsesglede!`,
    },
    {
      id: 'kroppsoving-vg1-8-7-def-3',
      type: 'definition',
      title: 'Helsedirektoratets anbefalinger',
      content: `**For ungdom (13-18 år):**
- Minst 60 minutter fysisk aktivitet daglig
- Variert intensitet (moderat og høy)
- Styrketrening 3 ganger per uke
- Reduser stillesitting

**For voksne:**
- Minst 150 minutter moderat aktivitet per uke
- ELLER 75 minutter høy intensitet
- Styrketrening 2 ganger per uke

**Viktig:** ENHVER aktivitet er bedre enn ingen aktivitet!`,
    },
    {
      id: 'kroppsoving-vg1-8-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er indre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Motivasjon som kommer fra gleden ved selve aktiviteten',
            multipleChoiceOptions: [
              'Motivasjon som kommer fra gleden ved selve aktiviteten',
              'Motivasjon fra premier og belønninger',
              'Motivasjon fra andre',
              'Motivasjon fra press',
            ],
          },
        ],
        solution: 'Indre motivasjon er å gjøre noe fordi du liker det, ikke for ytre belønning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en plan for hvordan du kan være mer fysisk aktiv i hverdagen.',
        solution: 'Planen bør inneholde konkrete tiltak som å gå/sykle til skolen, ta trapper, ha aktive pauser, og finne aktiviteter du liker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på indre og ytre motivasjon? Gi eksempler.',
        solution: 'Indre motivasjon: Du gjør det fordi du liker det (eks: løpe fordi det er gøy). Ytre motivasjon: Du gjør det for ytre belønning (eks: løpe for å få medalje eller unngå kritikk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre barrierer for fysisk aktivitet og foreslå løsninger.',
        solution: 'Tidspress (løsning: planlegg aktivitet i hverdagen), mangel på motivasjon (løsning: finn noe du liker), økonomi (løsning: gratis alternativer som friluftsliv).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er Helsedirektoratets anbefalinger for fysisk aktivitet for ungdom?',
        solution: 'Minst 60 minutter fysisk aktivitet daglig med variert intensitet, styrketrening 3 ganger per uke, og redusert stillesitting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.8: Kropp, identitet og samfunn
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8_8: TextbookChapter = {
  id: 'kroppsoving-vg1-8-8',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8.8',
  title: 'Kropp, identitet og samfunn',
  description: 'Lær om kroppspress, mediekritikk og selvaksept.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre metoder for øving og trening for å oppnå individuelle mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-8-intro',
      type: 'text',
      content: `## Kropp, identitet og samfunn

I dagens samfunn bombarderes vi med bilder og idealer om hvordan kroppen "bør" se ut. Det er viktig å være kritisk til disse idealene.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-def-1',
      type: 'definition',
      title: 'Kroppspress',
      content: `Kroppspress er press om å se ut på en bestemt måte:
- Urealistiske skjønnhetsidealer
- Redigerte bilder på sosiale medier
- Reklame som spiller på usikkerhet
- Kommentarer om utseende

Kroppspress kan føre til dårlig selvbilde, spiseforstyrrelser og uhelse.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-def-2',
      type: 'definition',
      title: 'Mediekritikk',
      content: `Være mediekritisk betyr å:
- Vite at bilder ofte er redigert
- Forstå at sosiale medier viser et utvalg
- Ikke sammenligne seg med urealistiske idealer
- Spørre: Hvem tjener på at jeg føler meg utilstrekkelig?`,
    },
    {
      id: 'kroppsoving-vg1-8-8-text-1',
      type: 'text',
      content: `## Sunn selvaksept

**Fokuser på hva kroppen kan gjøre:**
- Bevege seg og ha det gøy
- Bli sterkere og mer utholdende
- Gi deg opplevelser i naturen
- La deg føle velvære

**Husk:**
- Alle kropper er forskjellige
- Helse handler ikke bare om utseende
- Din verdi er ikke knyttet til hvordan du ser ut
- Vær snill mot deg selv`,
    },
    {
      id: 'kroppsoving-vg1-8-8-tip-1',
      type: 'tip',
      title: 'Digital detox',
      content: `Ta pauser fra sosiale medier hvis du merker at det påvirker deg negativt. Følg kontoer som gir deg gode følelser, ikke de som skaper usikkerhet.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-def-3',
      type: 'definition',
      title: 'Kroppsidealer gjennom tid',
      content: `Kroppsidealer endrer seg med tid og kultur:

**1950-tallet:**
- Kvinner: Kurver, feminin kropp
- Menn: Naturlig muskuløs

**1990-tallet:**
- Kvinner: Ekstremt tynn ("heroin chic")
- Menn: Muskuløs, lav fettprosent

**2020-tallet:**
- Kvinner: Kurver + muskulær ("fit", ikke bare tynn)
- Menn: Ekstremt muskuløs + lav fettprosent
- Økende kroppspress for begge kjønn

**Lærdommen:** Idealer er konstruerte og endres. Din kropp trenger ikke å passe inn i noe ideal.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-example-1',
      type: 'example',
      title: 'Sosiale medier og kroppspress',
      content: `**Fakta:**
- 70% av jenter og 50% av gutter er misfornøyde med kroppen sin
- Sosiale medier forsterker sammenligninger
- Influencere bruker filtre, belysning og redigering
- Det du ser er et "highlight reel", ikke virkeligheten

**Eksempel på redigering:**
- Filter endrer hudtone, fjerner uren hud, endrer ansiktsform
- Poser og vinkler skaper illusjoner
- Bilder tas mange ganger til "perfekte" er funnet
- Photoshop endrer kroppsproportioner

**Hugs:** Det perfekte bildet tok kanskje 100 forsøk og 2 timers redigering.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-text-2',
      type: 'text',
      content: `## Kroppspress og helse

**Negative konsekvenser:**
- Spiseforstyrrelser (anoreksi, bulimi, overspisingslidelse)
- Overdreven trening
- Angst og depresjon
- Dårlig selvbilde
- Sosialisolasjon
- Bruk av dopingmidler eller farlige kosttilskudd

**Hvem kan være sårbare:**
- Jenter (press om utseende og kroppsfasong)
- Gutter (press om muskler og maskulinitet)
- Idrettsutøvere (prestasjonskrav)
- Alle som føler seg annerledes eller utenfor

**Tegn på spiseforstyrrelser:**
- Stor opptatthet av mat, vekt og kropp
- Streng kontroll av matinntak
- Overdreven trening
- Sosial tilbaketrekning
- Hyppig veining
- Negative tanker om egen kropp`,
    },
    {
      id: 'kroppsoving-vg1-8-8-warning-1',
      type: 'warning',
      title: 'Når skal du søke hjelp?',
      content: `**Søk hjelp hvis du:**
- Tenker konstant på mat, vekt og utseende
- Begrenser mat eller kaster opp etter måltider
- Trener til tross for skader eller utmattelse
- Isolerer deg sosialt på grunn av kroppsfokus
- Har selvmordstanker

**Hvor får du hjelp:**
- Helsesykepleier på skolen
- Fastlege
- Helsestasjon for ungdom
- Mental Helse: 116 123 (gratis og anonym)
- Spiseforstyrrelsesforeningen (spiseforstyrrelser.no)`,
    },
    {
      id: 'kroppsoving-vg1-8-8-example-2',
      type: 'example',
      title: 'Body positivity-bevegelsen',
      content: `**Hva er body positivity?**
Et sosialt budskap om at alle kropper er verdifulle, uavhengig av form, størrelse, hudfarge eller funksjon.

**Kjerneverdier:**
- Alle kropper fortjener respekt
- Helse kommer i mange størrelser
- Mangfold er normalt og vakkert
- Verdi er ikke knyttet til utseende

**Kritikk:**
Noen mener bevegelsen kan normalisere usunne vaner.

**Body neutrality (alternativ):**
Fokuser på hva kroppen kan gjøre, ikke hvordan den ser ut. Kroppen er et redskap for å leve livet, ikke et objekt for andres blikk.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-text-3',
      type: 'text',
      content: `## Respekt og trivsel i kroppsøving

**Alle elever skal føle seg trygge:**
Kroppsøving innebærer situasjoner som kan oppleves sårbare - garderober, fysisk aktivitet, og fokus på kroppen. Derfor er det viktig med:

- Respekt for alle medelever
- Et trygt og inkluderende miljø
- Mulighet for tilpasning ved behov
- Åpen dialog med lærer om eventuelle utfordringer

**Praktiske hensyn:**
- Noen elever kan ha behov for alternative garderobeløsninger
- Aktiviteter bør være varierte slik at alle kan finne noe de mestrer
- Fokus på innsats og utvikling, ikke sammenligning

**Ved ubehag eller utfordringer:**
Snakk med lærer, helsesykepleier eller en annen voksen du stoler på. Det finnes løsninger for de fleste situasjoner.`,
    },
    {
      id: 'kroppsoving-vg1-8-8-tip-2',
      type: 'tip',
      title: 'Bygg et sunt kroppsforhold',
      content: `**Praktiske tips:**
- Unfollow kontoer som får deg til å føle deg dårlig
- Følg kontoer som viser mangfold og realisme
- Begrens tid på sosiale medier
- Fokuser på hva kroppen kan, ikke utseende
- Snakk positivt om egen og andres kropper
- Utfordre negative tanker
- Omgi deg med støttende mennesker

**Mindfulness-øvelse:**
Når du tenker negativt om kroppen, spør deg:
- Er dette en tanke eller et faktum?
- Ville jeg sagt dette til en venn?
- Hva kan kroppen min gjøre i dag?`,
    },
    {
      id: 'kroppsoving-vg1-8-8-def-4',
      type: 'definition',
      title: 'Kommersialisering av kroppen',
      content: `**Hvordan industrien tjener på usikkerhet:**
- Skjønnhetsindustri: Kremer, makeup, behandlinger
- Fitnessindustri: Treningssentre, kosttilskudd, utstyr
- Moteindustri: Klær, sko, accessories
- Kirurgi: Plastisk kirurgi, fillers, botox

**Reklameteknikker:**
- Skaper problemer som ikke fantes ("cellulitter", "armfett")
- Bruker før/etter-bilder (ofte manipulerte)
- Bruker "vitenskapelige" begreper
- Selger drømmen om perfeksjon
- Targeter usikkerhet hos unge

**Kritisk tenkning:** Spør deg alltid: Hvem tjener på at jeg føler meg utilstrekkelig?`,
    },
    {
      id: 'kroppsoving-vg1-8-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kroppspress?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Press om å se ut på en bestemt måte basert på urealistiske idealer',
            multipleChoiceOptions: [
              'Press om å se ut på en bestemt måte basert på urealistiske idealer',
              'Å trene hardt',
              'Å spise sunt',
              'Å være i form',
            ],
          },
        ],
        solution: 'Kroppspress er press om å oppfylle urealistiske kroppsidealer, ofte formidlet gjennom media og sosiale medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er det viktig å være mediekritisk?',
        solution: 'Fordi bilder ofte er redigert, sosiale medier viser et utvalg, og urealistiske idealer kan skade selvbildet og helsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter: Hvordan kan vi skape et miljø med mindre kroppspress?',
        solution: 'Ved å fokusere på hva kroppen kan gjøre fremfor utseende, unngå kommentarer om andres kropp, være kritiske til mediebilder, og støtte hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan sosiale medier kan påvirke kroppsbildet negativt.',
        solution: 'Sosiale medier viser ofte redigerte og filtrerte bilder, skaper urealistiske idealer, fører til sammenligninger, og forsterker kroppspress. Man ser kun "highlight reel", ikke virkeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er body positivity, og hva er kritikken mot bevegelsen?',
        solution: 'Body positivity er et budskap om at alle kropper er verdifulle. Kritikk: Kan normalisere usunne vaner. Alternativ: Body neutrality (fokus på hva kroppen kan gjøre).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter: Hvordan kan du bidra til mindre kroppspress i ditt miljø?',
        solution: 'Unngå kommentarer om andres kropp, snakk positivt, vær kritisk til mediebilder, fokuser på hva kroppen kan gjøre, støtt venner, og utfordre negative normer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler fra Del 4
// ============================================================================

export const KROPPSOVING_VG1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG1_7_1,
  CHAPTER_KROPPSOVING_VG1_7_2,
  CHAPTER_KROPPSOVING_VG1_7_3,
  CHAPTER_KROPPSOVING_VG1_7_4,
  CHAPTER_KROPPSOVING_VG1_7_5,
  CHAPTER_KROPPSOVING_VG1_7_6,
  CHAPTER_KROPPSOVING_VG1_7_7,
  CHAPTER_KROPPSOVING_VG1_7_8,
  CHAPTER_KROPPSOVING_VG1_8_1,
  CHAPTER_KROPPSOVING_VG1_8_2,
  CHAPTER_KROPPSOVING_VG1_8_3,
  CHAPTER_KROPPSOVING_VG1_8_4,
  CHAPTER_KROPPSOVING_VG1_8_5,
  CHAPTER_KROPPSOVING_VG1_8_6,
  CHAPTER_KROPPSOVING_VG1_8_7,
  CHAPTER_KROPPSOVING_VG1_8_8,
];
