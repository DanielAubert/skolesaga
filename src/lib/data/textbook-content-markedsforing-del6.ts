/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Markedsføring og ledelse 1 (VG3) - Del 6: Markedskommunikasjon
 *
 * Følger LK20 læreplan for markedsføring og ledelse.
 * Delkapitler 6.1 - 6.5
 *
 * Kompetansemål:
 * - utforske ulike kommunikasjonsstrategier og vurdere hvordan virksomheter bruker markedskommunikasjon som konkurransemiddel
 * - planlegge mediemiks og utvikle innhold for ulike kanaler i markedskommunikasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Kommunikasjonsprosessen
// ============================================================================

export const CHAPTER_MARKEDSFORING_6_1: TextbookChapter = {
  id: 'markedsforing-6-1',
  courseId: 'markedsforing',
  chapterNumber: '6.1',
  title: 'Kommunikasjonsprosessen',
  description: 'Sender-budskap-mottaker-modellen, støy i kommunikasjon, AIDA-modellen og hvordan virksomheter setter kommunikasjonsmål for markedsføringen sin.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske ulike kommunikasjonsstrategier og vurdere hvordan virksomheter bruker markedskommunikasjon som konkurransemiddel',
  ],
  content: [
    {
      id: 'mfl-6-1-intro',
      type: 'text',
      content: `# Kommunikasjonsprosessen

Markedskommunikasjon handler om å formidle et budskap fra en virksomhet til en målgruppe. Men kommunikasjon er mer enn å sende ut en melding. Det er en prosess der budskapet må nå frem, bli forstått og føre til en ønsket reaksjon hos mottakeren.

Tenk på hvor mange reklamebudskap du møter i løpet av en dag. Forskere anslår at vi eksponeres for mellom 4 000 og 10 000 kommersielle budskap daglig - på mobilen, i sosiale medier, på bussen, i butikken og på TV. I denne støyen er det avgjørende at virksomheter forstår hvordan kommunikasjon fungerer, slik at akkurat deres budskap trenger gjennom.

**I dette kapittelet lærer du:**
- Hvordan kommunikasjonsprosessen fungerer steg for steg
- Hva som kan forstyrre kommunikasjonen (støy)
- Hvordan AIDA-modellen brukes for å strukturere budskap
- Hvordan virksomheter setter kommunikasjonsmål`,
    },
    {
      id: 'mfl-6-1-def-1',
      type: 'definition',
      title: 'Kommunikasjonsprosessen',
      content: `**Kommunikasjonsprosessen** beskriver hvordan et budskap overføres fra en sender til en mottaker. Modellen består av følgende elementer:

1. **Sender** – den som vil formidle budskapet (virksomheten)
2. **Koding** – budskapet utformes i ord, bilder, lyd eller video
3. **Budskap** – det konkrete innholdet som formidles
4. **Kanal** – mediet budskapet sendes gjennom (TV, Instagram, plakat osv.)
5. **Dekoding** – mottakeren tolker budskapet
6. **Mottaker** – den som mottar og prosesserer budskapet (målgruppen)
7. **Tilbakemelding** – mottakerens respons (kjøp, likerklikk, deling, ignorering)
8. **Støy** – alt som forstyrrer kommunikasjonen på veien

For at kommunikasjonen skal lykkes, må senderen kode budskapet slik at mottakeren dekoder det på den tiltenkte måten. Når det oppstår et gap mellom hva senderen mener og hva mottakeren forstår, har støy forstyrret prosessen.`,
    },
    {
      id: 'mfl-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Tine Melk – «Litago»',
      content: `**Sender:** Tine (Norges største meierikonsern)
**Koding:** Fargerike, lekne figurer og animasjoner som appellerer til barn og ungdom
**Budskap:** «Melk er gøy og passer for unge mennesker»
**Kanal:** TV-reklame, emballasje, sosiale medier, skolekampanjer
**Mottaker:** Barn og unge (og foreldrene som kjøper)
**Dekoding:** Barna oppfatter melk som noe positivt og underholdende, ikke kjedelig
**Tilbakemelding:** Økt salg av Litago-produkter, gjenkjennelse av merkevaren blant barn

**Potensiell støy:**
- Konkurrenter som Oatly med «post milk generation»-kampanjer som utfordrer melkedrikkingsvaner
- Foreldre som er skeptiske til sukkerinnhold i smaksatt melk
- Mediestøy der budskapet drukner blant tusenvis av andre reklamer

Tine lyktes fordi kodingen (lekne figurer) var nøye tilpasset mottakerens (barns) referanserammer. Hadde de brukt saklige ernæringsfakta, ville budskapet neppe nådd gjennom til målgruppen.`,
    },
    {
      id: 'mfl-6-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med «støy» i kommunikasjonsprosessen?',
        options: [
          { id: 'a', text: 'Lyden i en TV-reklame', isCorrect: false },
          { id: 'b', text: 'Alt som forstyrrer eller forvrenger budskapet mellom sender og mottaker', isCorrect: true },
          { id: 'c', text: 'Negative kommentarer i sosiale medier', isCorrect: false },
          { id: 'd', text: 'Feil i trykkeprosessen av en plakat', isCorrect: false },
        ],
        solution: 'Støy er et samlebegrep for alt som forstyrrer kommunikasjonsprosessen. Det kan være fysisk støy (dårlig nettforbindelse), psykologisk støy (mottakeren er ukonsentrert), semantisk støy (budskapet misforstås) eller konkurrerende budskap fra andre avsendere.',
      },
    },
    {
      id: 'mfl-6-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en reklame du nylig har sett (på TV, i sosiale medier eller annet sted). Analyser reklamen ved å identifisere sender, koding, budskap, kanal, mottaker og mulig støy.',
        hints: ['Tenk på hvem reklamen er rettet mot, og hva de ønsker at du skal gjøre etter å ha sett den.'],
        solution: 'Eksempel med DNBs «#huninvesterer»-kampanje: Sender: DNB. Koding: Korte videoer med unge kvinner som deler investeringshistorier, uformell og motiverende tone. Budskap: «Det er enkelt å komme i gang med investering, og kvinner bør ta kontroll over egen økonomi.» Kanal: Instagram, TikTok og YouTube. Mottaker: Kvinner 20–35 år som ikke har begynt å investere. Støy: Konkurrerende sparekampanjer fra andre banker, generell skepsis til aksjemarkedet, informasjonsoverbelastning i sosiale medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-1-def-2',
      type: 'definition',
      title: 'AIDA-modellen',
      content: `**AIDA-modellen** er en klassisk modell som beskriver de mentale stegene en kunde går gjennom fra første eksponering til handling:

- **A – Attention (oppmerksomhet):** Fang mottakerens oppmerksomhet. I en verden full av støy er dette det vanskeligste steget.
- **I – Interest (interesse):** Skap interesse ved å vise at produktet er relevant for mottakeren.
- **D – Desire (ønske):** Bygg et ønske om å eie eller bruke produktet, gjerne ved å appellere til følelser.
- **A – Action (handling):** Få mottakeren til å handle – kjøpe, bestille, klikke, ringe eller besøke butikken.

AIDA-modellen brukes til å strukturere alt fra reklameannonser og salgssamtaler til landingssider og e-postkampanjer. Den hjelper markedsførere med å sikre at budskapet har alle nødvendige elementer for å føre til handling.

**Utvidet AIDA (AIDAS):** Noen legger til et femte steg: **S – Satisfaction (tilfredshet)**, som handler om at kunden skal bli så fornøyd at de kommer tilbake og anbefaler produktet til andre.`,
    },
    {
      id: 'mfl-6-1-example-2',
      type: 'example',
      title: 'Eksempel: AIDA i en Finn.no-kampanje',
      content: `Finn.no lanserte kampanjen «Ting som ikke lenger gjør deg glad» for å få folk til å selge brukte gjenstander:

**Attention:** En humoristisk TV-reklame viste en tredemølle som bare ble brukt som kleshenger. De aller fleste kunne kjenne seg igjen.

**Interest:** «Visste du at nordmenn har brukte ting for over 43 milliarder kroner liggende hjemme?» Et overraskende tall som vekket nysgjerrighet.

**Desire:** «Tenk hva du kunne brukt pengene på i stedet. Noen andre vil gjerne ha det du ikke bruker.» Kampanjen appellerte til både lommeboken og samvittigheten (bærekraft).

**Action:** «Last ned Finn-appen og legg ut din første annonse i dag. Det tar under to minutter.» Konkret, enkelt og med lav terskel.

Kampanjen fungerte fordi hvert AIDA-steg bygget naturlig videre på det forrige, og handlingen var enkel å gjennomføre.`,
    },
    {
      id: 'mfl-6-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står «D» for i AIDA-modellen?',
        options: [
          { id: 'a', text: 'Distribution – distribusjon', isCorrect: false },
          { id: 'b', text: 'Desire – ønske', isCorrect: true },
          { id: 'c', text: 'Decision – beslutning', isCorrect: false },
          { id: 'd', text: 'Development – utvikling', isCorrect: false },
        ],
        solution: 'D i AIDA står for Desire (ønske). Etter at kunden har fått oppmerksomhet (Attention) og interesse (Interest), handler Desire om å bygge et sterkt ønske om å eie eller bruke produktet. Dette gjøres ofte ved å appellere til følelser, vise fordeler eller skape en følelse av at kunden «trenger» produktet.',
      },
    },
    {
      id: 'mfl-6-1-text-kommunikasjonsmal',
      type: 'text',
      content: `## Kommunikasjonsmål

Før en virksomhet utvikler markedskommunikasjon, må den sette klare mål. Uten mål er det umulig å vite om kommunikasjonen fungerer. Vi skiller mellom tre typer kommunikasjonsmål:

### Kognitive mål (kunnskap)
Målet er å informere og skape kjennskap. Eksempel: «Innen juni skal 70 % av målgruppen kjenne til vår nye produktlinje.» Kognitive mål er viktigst i introduksjonsfasen av produktets livssyklus.

### Affektive mål (holdninger og følelser)
Målet er å endre eller forsterke holdninger og preferanser. Eksempel: «Innen desember skal 50 % av målgruppen foretrekke vårt merke fremfor hovedkonkurrenten.» Affektive mål brukes når kunden allerede kjenner til produktet.

### Konative mål (atferd og handling)
Målet er å utløse en konkret handling. Eksempel: «Kampanjen skal generere 10 000 nye kundekontakter innen Q3.» Konative mål er mest konkrete og enklest å måle.

**Praktisk tips:** Gode kommunikasjonsmål er **SMART** – Spesifikke, Målbare, Aksepterte, Realistiske og Tidsbestemte. «Vi vil bli mer kjent» er for vagt. «Vi skal øke uhjulpet merkekjennskap fra 35 % til 50 % blant kvinner 25–40 år innen 31. desember» er et SMART-mål.`,
    },
    {
      id: 'mfl-6-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende er et affektivt kommunikasjonsmål?',
        options: [
          { id: 'a', text: '«50 % av målgruppen skal kjenne til produktet innen juni»', isCorrect: false },
          { id: 'b', text: '«Kampanjen skal generere 5 000 nye kundehenvendelser»', isCorrect: false },
          { id: 'c', text: '«60 % av målgruppen skal oppfatte merkevaren som bærekraftig»', isCorrect: true },
          { id: 'd', text: '«Salget skal øke med 20 % i løpet av kampanjeperioden»', isCorrect: false },
        ],
        solution: 'Affektive mål handler om holdninger og følelser – altså hva målgruppen synes og føler om merkevaren. «Oppfatte merkevaren som bærekraftig» er en holdningsendring. Kjennskap er kognitivt, kundehenvendelser og salg er konativt (atferd).',
      },
    },
    {
      id: 'mfl-6-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et AIDA-oppsett for en kampanje som skal promotere en ny norsk sjokolademerke rettet mot helsebevisste voksne. Beskriv hva du ville gjort i hvert steg.',
        hints: ['Tenk på hva som skiller dette produktet fra vanlig sjokolade, og hvilke følelser du vil vekke.'],
        solution: 'Attention: Instagram-reklame med overraskende bilde av sjokolade ved siden av frukt og nøtter, med teksten «Sjokolade uten dårlig samvittighet?». Interest: Kort video som forklarer at sjokoladen er laget med 85 % kakao, uten tilsatt sukker og med naturlige ingredienser. Fakta om antioksidanter i mørk sjokolade. Desire: Smakstester med positive tilbakemeldinger, bilder av produktet i stilige omgivelser, budskap som «Nyt uten kompromiss – for deg som vil ha det beste». Action: «Bestill smakspakke med fri frakt på vår nettside. Bruk koden SMAK20 for 20 % rabatt på første ordre.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-1-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Kommunikasjonsprosessen er grunnlaget for all markedskommunikasjon. Forståelsen av hvordan budskap kodes, sendes, dekodes og forstyrres av støy er avgjørende for å lykkes med markedsføring.

**Husk:**
- Kommunikasjon er en toveis prosess – tilbakemelding er like viktig som selve budskapet
- Støy er alltid til stede og kan være fysisk, psykologisk eller semantisk
- AIDA-modellen gir en praktisk struktur for å bygge opp budskap som fører til handling
- Kommunikasjonsmål bør være SMART og kan være kognitive, affektive eller konative
- Kodingen av budskapet må tilpasses mottakerens referanserammer for å unngå misforståelser`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mfl-6-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norwegian Air lanserte i sin tid kampanjen «Brad is single» med et bilde av Brad Pitt og billige flybilletter til Los Angeles rett etter at han ble skilt. Analyser kampanjen med utgangspunkt i kommunikasjonsprosessen og AIDA-modellen. Drøft også om kampanjen kunne ha negative sider.',
        hints: ['Tenk på at humor og aktualitet kan være effektivt, men at det også finnes risikoer.'],
        solution: 'Kommunikasjonsprosessen: Sender (Norwegian) kodet budskapet som humor knyttet til en aktuell hendelse. Kanalen var trykte annonser og sosiale medier. Mottakerne dekodet det som underholdende og kreativt, noe tilbakemeldingene (massiv deling) bekreftet. Støyen var minimal fordi humoren og aktualiteten skilte seg ut. AIDA: Attention oppnådd gjennom kjendiskobling og humor. Interest skapt av det uventede i at et flyselskap kommenterer en skilsmisse. Desire bygget med lave priser til LA. Action med enkel bestillingslenke. Negative sider: Noen mente det var respektløst å tjene penger på en skilsmisse, kampanjen kunne oppfattes som sexistisk, og bruken av Brad Pitts bilde uten samtykke reiser etiske og juridiske spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-1-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-1-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge i kommunikasjonsprosessen?',
        options: [
          { id: 'a', text: 'Budskap → Sender → Kanal → Mottaker', isCorrect: false },
          { id: 'b', text: 'Mottaker → Kanal → Sender → Budskap', isCorrect: false },
          { id: 'c', text: 'Sender → Koding → Budskap → Kanal → Dekoding → Mottaker', isCorrect: true },
          { id: 'd', text: 'Kanal → Budskap → Sender → Mottaker → Koding', isCorrect: false },
        ],
        solution: 'Kommunikasjonsprosessen starter med senderen som koder budskapet, sender det via en kanal, der mottakeren dekoder (tolker) det. Tilbakemelding går deretter tilbake til senderen. Støy kan forstyrre på alle trinn i prosessen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kommunikasjonsprosessen', definition: 'Modell som beskriver hvordan et budskap overføres fra sender til mottaker via koding, kanal og dekoding' },
    { term: 'Støy', definition: 'Alt som forstyrrer eller forvrenger budskapet mellom sender og mottaker' },
    { term: 'AIDA-modellen', definition: 'Modell som beskriver stegene Attention, Interest, Desire og Action i kundepåvirkning' },
    { term: 'Kognitive mål', definition: 'Kommunikasjonsmål rettet mot kunnskap og kjennskap' },
    { term: 'Affektive mål', definition: 'Kommunikasjonsmål rettet mot holdninger og følelser' },
    { term: 'Konative mål', definition: 'Kommunikasjonsmål rettet mot handling og atferd' },
  ],
};

// ============================================================================
// KAPITTEL 6.2: Reklame og PR
// ============================================================================

export const CHAPTER_MARKEDSFORING_6_2: TextbookChapter = {
  id: 'markedsforing-6-2',
  courseId: 'markedsforing',
  chapterNumber: '6.2',
  title: 'Reklame og PR',
  description: 'Ulike reklameformer, mediekanaler, public relations (PR), sponsing og salgsfremmende tiltak som virkemidler i markedskommunikasjonen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske ulike kommunikasjonsstrategier og vurdere hvordan virksomheter bruker markedskommunikasjon som konkurransemiddel',
  ],
  content: [
    {
      id: 'mfl-6-2-intro',
      type: 'text',
      content: `# Reklame og PR

Reklame er den mest synlige delen av markedskommunikasjonen. Det er betalt kommunikasjon der senderen har full kontroll over budskapet. PR (public relations) er derimot kommunikasjon som skjer gjennom redaksjonell dekning, medieomtale og omdømmebygging – der senderen har mindre kontroll, men ofte større troverdighet.

I tillegg til reklame og PR bruker virksomheter sponsing og salgsfremmende tiltak for å nå ut til målgruppen. Til sammen utgjør disse verktøyene det vi kaller **promosjonsmiksen** – altså blandingen av kommunikasjonsverktøy en virksomhet bruker.

**I dette kapittelet lærer du:**
- Forskjellen mellom ulike reklameformer
- Fordeler og ulemper ved tradisjonelle mediekanaler
- Hva PR er og hvorfor det er viktig for omdømmet
- Hvordan sponsing og salgsfremmende tiltak fungerer`,
    },
    {
      id: 'mfl-6-2-def-1',
      type: 'definition',
      title: 'Reklame',
      content: `**Reklame** er betalt, ikke-personlig kommunikasjon fra en identifisert avsender, formidlet gjennom massemedier for å informere, påvirke eller overtale en målgruppe.

**Kjennetegn ved reklame:**
- **Betalt:** Avsenderen betaler for plassen eller sendetiden
- **Ikke-personlig:** Budskapet er rettet mot en gruppe, ikke enkeltpersoner
- **Kontrollert:** Avsenderen bestemmer budskap, tidspunkt og plassering
- **Identifisert avsender:** Det skal være tydelig hvem som står bak

**Hovedtyper av reklame:**
- *Informerende reklame:* Presenterer fakta om produktet (pris, funksjoner, tilgjengelighet)
- *Overtalende reklame:* Forsøker å overbevise om at produktet er bedre enn alternativer
- *Påminnende reklame:* Holder merkevaren synlig for kunder som allerede kjenner den
- *Forsterkende reklame:* Bekrefter at kunden har gjort et godt valg etter kjøp`,
    },
    {
      id: 'mfl-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Reklametyper i praksis – Rema 1000',
      content: `**Informerende reklame:** REMA 1000 annonserer ukentlige tilbud med priser og produktbilder i aviser og apper. «Kyllingfilet 49,90 kr/kg denne uken.» Formålet er å opplyse om pris og tilgjengelighet.

**Overtalende reklame:** Kampanjen «Landets laveste matvarepriser» sammenligner REMA med konkurrentene og argumenterer for at REMA er rimeligst. Formålet er å overtale kunder til å velge REMA fremfor Kiwi eller Extra.

**Påminnende reklame:** Enkle plakater med REMA-logoen langs veiene, eller sponsing av lokale idrettsarrangementer. Kunder som allerede handler på REMA, blir minnet om merkevaren i hverdagen.

**Forsterkende reklame:** «Takk for at du valgte REMA» i appen etter et kjøp, kombinert med personlige tilbud basert på kjøpshistorikk. Kunden føler at valget var riktig.

Legg merke til at REMA bruker alle fire reklametyper som en del av en helhetlig strategi. Blandingen varierer avhengig av sesong, kampanjeperiode og konkurransesituasjonen.`,
    },
    {
      id: 'mfl-6-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom reklame og PR?',
        options: [
          { id: 'a', text: 'Reklame er alltid digital, PR er alltid trykt', isCorrect: false },
          { id: 'b', text: 'Reklame er betalt og kontrollert av avsender, PR er redaksjonell omtale med mindre kontroll', isCorrect: true },
          { id: 'c', text: 'PR er dyrere enn reklame', isCorrect: false },
          { id: 'd', text: 'Reklame er bare for store bedrifter, PR er for små', isCorrect: false },
        ],
        solution: 'Reklame er betalt kommunikasjon der virksomheten har full kontroll over budskap og plassering. PR handler om å oppnå redaksjonell omtale og positiv mediedekning, der virksomheten har mindre kontroll over hva som publiseres, men omtalen oppleves ofte som mer troverdig fordi den ikke er betalt.',
      },
    },
    {
      id: 'mfl-6-2-text-mediekanaler',
      type: 'text',
      content: `## Tradisjonelle mediekanaler

Selv om digital markedsføring vokser raskt, spiller tradisjonelle mediekanaler fortsatt en viktig rolle i mange virksomheters kommunikasjon.

### TV-reklame
TV-reklame når store grupper samtidig og er spesielt effektivt for merkevarebygging fordi det kombinerer lyd, bilde og bevegelse. Ulempen er høy pris – en 30-sekunders reklamespot på TV 2 i beste sendetid kan koste over 100 000 kr.

**Eksempel:** Kvikk Lunsjs «Tur»-kampanjer har gjennom tiår knyttet sjokoladen til norsk friluftsliv og ble en naturlig del av påsketradisjonen.

### Avisannonser og trykt reklame
Aviser og magasiner gir mulighet for detaljert informasjon og høy troverdighet. Ulempen er synkende opplag og eldre leserprofil.

### Radio
Radio er kostnadseffektivt og egner seg godt for lokal annonsering og høy repetisjonsfrekvens. Ulempen er fravær av visuelt innhold.

### Utendørsreklame (Out-of-Home)
Plakater, bussreklame, digitale skjermer på kjøpesentre og flyplasser. Gir bred eksponering, men begrenset mulighet for detaljert budskap. Effektivt for merkevarebygging og påminnelse.

**Eksempel:** Norsk Tipping bruker store plakater og digitale skjermer med budskapet «Alt overskudd går til norsk idrett og kultur», som forsterker merkevaren som samfunnsnyttig.`,
    },
    {
      id: 'mfl-6-2-def-2',
      type: 'definition',
      title: 'Public Relations (PR)',
      content: `**Public relations (PR)** er planlagt og vedvarende kommunikasjon som har som mål å bygge og vedlikeholde et godt omdømme og gode relasjoner mellom en virksomhet og dens omgivelser (kunder, medier, ansatte, myndigheter og samfunnet).

**PR-verktøy:**
- *Pressemeldinger:* Informasjon sendt til journalister for å generere redaksjonell omtale
- *Pressekonferanser:* Arrangementer der virksomheten presenterer nyheter for medier
- *Mediekontakt:* Bygge relasjoner med journalister for positiv dekning
- *Krisekommunikasjon:* Håndtere negativ medieomtale og kriser
- *Samfunnsansvar (CSR):* Initiativer som viser at virksomheten tar sosialt ansvar
- *Arrangementer:* Produktlanseringer, seminarer, åpne dager

**Fordeler med PR fremfor reklame:**
PR oppfattes som mer troverdig fordi budskapet formidles av en tredjepart (journalisten). En positiv anmeldelse i VG har større påvirkningskraft enn en annonse, fordi leseren oppfatter det som en uavhengig vurdering.`,
    },
    {
      id: 'mfl-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Sponsing – DNB og norsk idrett',
      content: `**Sponsing** er et virkemiddel der en virksomhet gir økonomisk eller annen støtte til en person, organisasjon eller et arrangement i bytte mot eksponering og assosiasjon.

**DNB og Norges Skiforbund:**
DNB har i mange år vært hovedsponsor for norsk langrenn. Samarbeidet gir DNB:

- **Eksponering:** Logo på klær, TV-sendinger og arenaer
- **Assosiasjon:** DNB kobles til verdier som utholdenhet, lagånd og norsk stolthet
- **Merkevarebygging:** Styrker posisjonen som «Norges bank»
- **Innholdsmarkedsføring:** Mulighet for å lage innhold med populære utøvere

**Salgsfremmende tiltak** er kortsiktige virkemidler som skal stimulere til umiddelbart kjøp:
- Kuponger og rabattkoder
- Smaksprøver og produktdemonstrasjoner
- Konkurranser og lojalitetsprogrammer
- «Kjøp 3, betal for 2»-tilbud
- Gratis prøveperioder

**Eksempel:** Trumf-kortet til NorgesGruppen er et salgsfremmende tiltak i form av et lojalitetsprogram. Kunden samler poeng på alle kjøp hos Kiwi, Meny og Joker, noe som gir rabatter og holder kunden lojal til kjeden.`,
    },
    {
      id: 'mfl-6-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken reklameform er mest egnet for et nytt produkt som nettopp er lansert i markedet?',
        options: [
          { id: 'a', text: 'Påminnende reklame', isCorrect: false },
          { id: 'b', text: 'Forsterkende reklame', isCorrect: false },
          { id: 'c', text: 'Informerende reklame', isCorrect: true },
          { id: 'd', text: 'Ingen reklame – man bør vente til produktet er etablert', isCorrect: false },
        ],
        solution: 'Ved lansering kjenner ikke målgruppen produktet ennå. Informerende reklame som forklarer hva produktet er, hva det gjør og hvor det finnes, er mest relevant. Påminnende og forsterkende reklame passer bedre for etablerte produkter som kunden allerede kjenner til.',
      },
    },
    {
      id: 'mfl-6-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom sponsing og reklame. Gi et eksempel på en norsk virksomhet som bruker sponsing som en del av sin markedskommunikasjon, og beskriv hva virksomheten oppnår med sponsingen.',
        hints: ['Tenk på hva sponsoren får igjen utover ren eksponering – hvilke verdier assosieres med det som sponses?'],
        solution: 'Reklame er betalt kommunikasjon med full kontroll over budskapet, mens sponsing handler om å støtte en person, organisasjon eller et arrangement i bytte mot eksponering og assosiasjon. Eksempel: Equinor sponser Bergensfest (musikkfestival). Equinor får logoeksponering og synlighet, men viktigere er assosiasjonen med kultur, kreativitet og lokalsamfunnet i Bergen. Det bidrar til å nyansere omdømmet til et energiselskap som ofte diskuteres i miljøsammenheng. Sponsing gir altså noe reklame ikke kan gi: en emosjonell kobling til verdier gjennom det som sponses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-2-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et eksempel på et salgsfremmende tiltak?',
        options: [
          { id: 'a', text: 'En TV-reklame i beste sendetid', isCorrect: false },
          { id: 'b', text: 'En pressemelding til journalister', isCorrect: false },
          { id: 'c', text: 'Et «kjøp 3, betal for 2»-tilbud i butikk', isCorrect: true },
          { id: 'd', text: 'En sponsoravtale med et fotballag', isCorrect: false },
        ],
        solution: 'Salgsfremmende tiltak er kortsiktige virkemidler som stimulerer til umiddelbart kjøp. «Kjøp 3, betal for 2» er et typisk eksempel. TV-reklame er reklame, pressemeldinger er PR og sponsoravtaler er sponsing – alle er deler av promosjonsmiksen, men med ulike funksjoner.',
      },
    },
    {
      id: 'mfl-6-2-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Promosjonsmiksen gir virksomheter et bredt spekter av verktøy for å nå sine kommunikasjonsmål.

**Husk:**
- Reklame gir full kontroll, men oppfattes som mindre troverdig enn PR
- PR bygger omdømme og troverdighet, men gir mindre kontroll over budskapet
- Sponsing knytter merkevaren til positive verdier og opplevelser
- Salgsfremmende tiltak er effektive for kortsiktig salg, men kan svekke merkevaren ved overbruk
- De fleste virksomheter bruker en kombinasjon av alle verktøyene, tilpasset mål, budsjett og målgruppe`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mfl-6-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En norsk klesbutikkjede opplevde negativ medieomtale etter at det ble avslørt at noen av leverandørene hadde dårlige arbeidsforhold i fabrikker i Asia. Lag en krisekommunikasjonsplan som dekker de første 48 timene. Hva bør virksomheten gjøre og kommunisere?',
        hints: ['Tenk på åpenhet, ansvarlighet og konkrete tiltak. Hvem skal uttale seg, og i hvilke kanaler?'],
        solution: 'Første 24 timer: 1) Administrerende direktør sender pressemelding der virksomheten erkjenner situasjonen og tar den på alvor. 2) Stopp all annen reklame midlertidig. 3) Oppdater sosiale medier med tydelig budskap om at virksomheten undersøker saken. 4) Sett opp intern informasjon til ansatte. Neste 24 timer: 5) Hold pressekonferanse der direktøren presenterer konkrete tiltak – uavhengig revisjon av leverandørkjeden, ny etisk policy og suspensjon av aktuelle leverandører. 6) Publiser informasjon på nettsidene om hva virksomheten gjør fremover. 7) Tilby intervjuer til nøkkelmedier for å vise åpenhet. Prinsipper: Vær ærlig, ta ansvar, vis at du handler. Ikke skyld på andre eller bagatelliser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-2-oppg-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor oppfattes PR ofte som mer troverdig enn reklame?',
        options: [
          { id: 'a', text: 'Fordi PR er dyrere å produsere', isCorrect: false },
          { id: 'b', text: 'Fordi PR-budskapet formidles av en uavhengig tredjepart og ikke er betalt av annonsøren', isCorrect: true },
          { id: 'c', text: 'Fordi PR bare brukes av seriøse bedrifter', isCorrect: false },
          { id: 'd', text: 'Fordi PR alltid inneholder fakta som er kvalitetssikret', isCorrect: false },
        ],
        solution: 'Når en journalist skriver positivt om et produkt, oppfatter leseren det som en uavhengig vurdering – ikke som betalt reklame. Denne tredjepartseffekten gir PR høyere troverdighet. Reklame er åpenbart avsenderstyrt, noe forbrukere er bevisste på og derfor mer skeptiske til.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Reklame', definition: 'Betalt, ikke-personlig kommunikasjon fra en identifisert avsender gjennom massemedier' },
    { term: 'PR (Public Relations)', definition: 'Planlagt kommunikasjon for å bygge omdømme og relasjoner med omgivelsene' },
    { term: 'Sponsing', definition: 'Økonomisk støtte til en person, organisasjon eller arrangement i bytte mot eksponering og assosiasjon' },
    { term: 'Salgsfremmende tiltak', definition: 'Kortsiktige virkemidler som stimulerer til umiddelbart kjøp' },
    { term: 'Promosjonsmiksen', definition: 'Blandingen av kommunikasjonsverktøy en virksomhet bruker' },
  ],
};

// ============================================================================
// KAPITTEL 6.3: Digital markedskommunikasjon
// ============================================================================

export const CHAPTER_MARKEDSFORING_6_3: TextbookChapter = {
  id: 'markedsforing-6-3',
  courseId: 'markedsforing',
  chapterNumber: '6.3',
  title: 'Digital markedskommunikasjon',
  description: 'Søkemotoroptimalisering (SEO), søkemotormarkedsføring (SEM), Google Ads, e-postmarkedsføring og display-annonser som verktøy i digital kommunikasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge mediemiks og utvikle innhold for ulike kanaler i markedskommunikasjon',
    'utforske ulike kommunikasjonsstrategier og vurdere hvordan virksomheter bruker markedskommunikasjon som konkurransemiddel',
  ],
  content: [
    {
      id: 'mfl-6-3-intro',
      type: 'text',
      content: `# Digital markedskommunikasjon

Digital markedskommunikasjon har revolusjonert måten virksomheter kommuniserer med kundene sine. I motsetning til tradisjonelle medier gir digitale kanaler mulighet for presis målretting, sanntidsmåling og direkte interaksjon med målgruppen.

I Norge bruker 98 % av befolkningen internett daglig, og nordmenn er blant verdens mest digitalt aktive. Det betyr at virksomheter som ikke behersker digital markedskommunikasjon, går glipp av enorme muligheter.

**De viktigste digitale kanalene:**
- Søkemotorer (Google)
- Sosiale medier (dekkes i neste kapittel)
- E-post
- Display-annonser (bannerannonsering)
- Video (YouTube, streaming)
- Podkaster

**Hvorfor digital markedsføring?**
- Presis målretting basert på demografi, interesser og atferd
- Målbare resultater i sanntid
- Lavere inngangskostnad enn tradisjonelle medier
- Mulighet for personalisering
- Direkte respons og interaksjon`,
    },
    {
      id: 'mfl-6-3-def-1',
      type: 'definition',
      title: 'Søkemotoroptimalisering (SEO)',
      content: `**SEO (Search Engine Optimization)** er prosessen med å optimalisere en nettside slik at den rangerer høyere i de organiske (ikke-betalte) søkeresultatene i søkemotorer som Google.

**Hvorfor SEO er viktig:**
Over 90 % av nettbrukere klikker aldri forbi første side i Google-søket. Å havne på side 2 er nesten som å ikke eksistere. SEO handler om å sørge for at din nettside dukker opp når potensielle kunder søker etter relevante produkter eller tjenester.

**Tre hovedpilarer i SEO:**
1. **Teknisk SEO:** Nettsiden lastes raskt, er mobiloptimalisert, har tydelig struktur og er tilgjengelig for Googles søkeroboter
2. **On-page SEO:** Innholdet er relevant og godt skrevet, bruker riktige nøkkelord, har gode overskrifter og meta-beskrivelser
3. **Off-page SEO:** Andre nettsider lenker til din side (tilbakekoblinger), noe som signaliserer kvalitet og autoritet

**Eksempel:** Når du søker «beste joggesko 2026» i Google, viser de øverste organiske resultatene nettsider som har gjort god SEO – de har skrevet grundige artikler om emnet, brukt relevante nøkkelord og fått andre sider til å lenke til dem.`,
    },
    {
      id: 'mfl-6-3-example-1',
      type: 'example',
      title: 'Eksempel: SEO hos Kolonial.no (nå Oda)',
      content: `Da Kolonial.no (nå Oda) lanserte nettbasert dagligvarehandel, brukte de SEO aktivt for å tiltrekke kunder:

**Nøkkelordsstrategi:** De identifiserte hva folk søkte etter – «dagligvarer på nett», «handle mat hjemlevering», «billigste matbutikk på nett» – og laget innhold rundt disse søkefrasene.

**Innholdsstrategi:** De publiserte oppskrifter, matinspirasjon og artikler om sunt kosthold. Når noen søkte «enkel middagsoppskrift med kylling», fant de en oppskrift på Oda.no med direkte lenke til å legge ingrediensene i handlekurven.

**Teknisk optimalisering:** Rask nettside, god mobilopplevelse og tydelig sidestruktur som gjorde det enkelt for Google å forstå og indeksere innholdet.

**Resultatet:** Oda rangerer høyt for tusenvis av matrelaterte søkeord, noe som gir gratis, vedvarende trafikk uten å betale for annonser.

Denne tilnærmingen illustrerer et sentralt poeng: God SEO handler ikke bare om tekniske triks, men om å lage innhold som er genuint nyttig for målgruppen.`,
    },
    {
      id: 'mfl-6-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom SEO og SEM?',
        options: [
          { id: 'a', text: 'SEO handler om organiske resultater, SEM handler om betalte annonser i søkemotorer', isCorrect: true },
          { id: 'b', text: 'SEO er for store bedrifter, SEM er for små bedrifter', isCorrect: false },
          { id: 'c', text: 'SEO gir umiddelbare resultater, SEM tar lang tid', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'SEO (Search Engine Optimization) handler om å optimalisere nettsiden for å rangere høyt i de organiske (gratis) søkeresultatene. SEM (Search Engine Marketing) handler om å kjøpe annonser som vises øverst i søkeresultatene (f.eks. Google Ads). SEO tar lang tid men gir vedvarende resultater, mens SEM gir umiddelbar synlighet men koster penger for hvert klikk.',
      },
    },
    {
      id: 'mfl-6-3-def-2',
      type: 'definition',
      title: 'SEM og Google Ads',
      content: `**SEM (Search Engine Marketing)** er betalt annonsering i søkemotorer. Den vanligste plattformen er **Google Ads**, der virksomheter byr på nøkkelord for å vise annonser øverst i søkeresultatene.

**Slik fungerer Google Ads:**
1. Virksomheten velger nøkkelord den vil vises for (f.eks. «tannlege Oslo»)
2. Den setter et maksbeløp per klikk (CPC – Cost Per Click)
3. Google gjennomfører en auksjon hver gang noen søker på nøkkelordet
4. Annonsen som vinner, vises øverst i søkeresultatene (merket som «Annonse»)
5. Virksomheten betaler bare når noen klikker på annonsen

**Viktige begreper:**
- **CPC (Cost Per Click):** Pris per klikk på annonsen
- **CTR (Click-Through Rate):** Andel som klikker på annonsen av dem som ser den
- **Kvalitetspoeng:** Google vurderer annonsens relevans og landingssiden – høy kvalitet gir lavere CPC
- **Konvertering:** Når brukeren gjør det du ønsker (kjøper, fyller ut skjema, ringer)
- **ROAS (Return On Ad Spend):** Avkastning på annonsekroner – inntekt delt på annonsekostnad`,
    },
    {
      id: 'mfl-6-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En nettbutikk bruker 5 000 kr på Google Ads og får 250 klikk. 10 av klikkene fører til kjøp med en gjennomsnittlig ordreverdi på 800 kr. Hva er ROAS (Return On Ad Spend)?',
        options: [
          { id: 'a', text: '0,5', isCorrect: false },
          { id: 'b', text: '1,6', isCorrect: true },
          { id: 'c', text: '4,0', isCorrect: false },
          { id: 'd', text: '8,0', isCorrect: false },
        ],
        solution: 'ROAS = Inntekt / Annonsekostnad. Inntekt = 10 kjøp × 800 kr = 8 000 kr. ROAS = 8 000 / 5 000 = 1,6. Det betyr at for hver krone brukt på annonser, fikk nettbutikken 1,60 kr i inntekt. En ROAS over 1,0 betyr at annonsene genererer mer enn de koster, men man må også ta hensyn til varekostnad og andre utgifter for å vurdere om det er lønnsomt.',
      },
    },
    {
      id: 'mfl-6-3-text-epost',
      type: 'text',
      content: `## E-postmarkedsføring

E-postmarkedsføring er en av de mest kostnadseffektive digitale kanalene. Til tross for at mange spår at e-post er «dødt», viser studier at e-post fortsatt gir den høyeste avkastningen per investert krone av alle digitale kanaler.

**Typer e-postmarkedsføring:**

### Nyhetsbrev
Regelmessige utsendelser med innhold, nyheter og tilbud. Eksempel: Vinmonopolet sender ut nyhetsbrev med nye produkter, matoppskrifter og smakstips.

### Automatiserte e-poster (marketing automation)
Utløses av spesifikke handlinger eller hendelser:
- *Velkomst-e-post:* Sendes automatisk når noen registrerer seg
- *Forlatt handlekurv:* Påminnelse når noen legger varer i kurven uten å kjøpe
- *Fødselsdags-e-post:* Gratulasjon og spesialtilbud på kundens bursdag
- *Reaktivering:* Sendes til kunder som ikke har handlet på lenge

### Kampanje-e-poster
Engangsutsendelser knyttet til spesifikke kampanjer, salg eller lanseringer.

**Lovgivning:** Markedsføringsloven krever at mottakeren aktivt har samtykket til å motta reklame via e-post (opt-in). Det må også være enkelt å melde seg av (opt-out). Brudd kan føre til bøter fra Datatilsynet.

**Nøkkeltall for e-post:**
- *Åpningsrate:* Andel som åpner e-posten (typisk 20–30 % for norske bedrifter)
- *Klikkrate:* Andel som klikker på lenker i e-posten (typisk 2–5 %)
- *Konverteringsrate:* Andel som gjennomfører ønsket handling etter klikk`,
    },
    {
      id: 'mfl-6-3-def-3',
      type: 'definition',
      title: 'Display-annonsering',
      content: `**Display-annonsering** er visuelle annonser (bannere, bilder, animasjoner, video) som vises på nettsider, apper og i sosiale medier. I motsetning til søkeannonsering, som treffer brukere som aktivt leter etter noe, vises display-annonser til brukere mens de gjør andre ting.

**Vanlige formater:**
- Bannere (toppbanner, sidebanner, rektangulær)
- Rich media (interaktive annonser med animasjon)
- Video-annonser (pre-roll før YouTube-videoer)
- Native advertising (annonser som ligner redaksjonelt innhold)

**Målrettingsmetoder:**
- *Kontekstuell:* Annonsen vises på relevante nettsider (sportsutstyrsannonse på VG Sport)
- *Atferdsbasert:* Basert på brukerens netthistorikk og interesser
- *Retargeting:* Viser annonser til folk som allerede har besøkt din nettside
- *Demografisk:* Basert på alder, kjønn, geografi

**Eksempel på retargeting:** Du besøker Zalando.no og ser på et par sko. Etterpå ser du annonser for de samme skoene på andre nettsider du besøker. Dette er retargeting – Zalando «følger» deg med annonser for å minne deg på produktet.`,
    },
    {
      id: 'mfl-6-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva retargeting er, og diskuter fordeler og ulemper fra både virksomhetens og forbrukerens perspektiv.',
        hints: ['Tenk på personvern og brukeropplevelse i tillegg til effektivitet.'],
        solution: 'Retargeting er en digital annonseringsteknikk der annonser vises til personer som allerede har besøkt virksomhetens nettside eller utført en spesifikk handling. Fordeler for virksomheten: Høyere konverteringsrate fordi man treffer folk som allerede har vist interesse, mer kostnadseffektivt enn å nå helt nye personer, og minner kunden på produktet i kjøpsbeslutningsprosessen. Ulemper for virksomheten: Kan virke påtrengende og skade merkevaren, krever teknisk kompetanse og investeringer i annonseplattformer. Fordeler for forbrukeren: Kan minnes på produkter de faktisk var interessert i, og kan oppdage gode tilbud. Ulemper for forbrukeren: Oppleves som overvåkning og invasjon av privatliv, kan føle seg «forfulgt» av annonser, reiser spørsmål om personvern og databruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «marketing automation» i e-postmarkedsføring?',
        options: [
          { id: 'a', text: 'Når en robot skriver all e-post for virksomheten', isCorrect: false },
          { id: 'b', text: 'Automatiserte e-poster som sendes basert på spesifikke handlinger eller hendelser', isCorrect: true },
          { id: 'c', text: 'Når e-poster sendes ut automatisk til alle i Norge', isCorrect: false },
          { id: 'd', text: 'En metode for å unngå spam-filteret', isCorrect: false },
        ],
        solution: 'Marketing automation handler om å sette opp automatiserte e-poster som utløses av spesifikke handlinger (triggers). Eksempler: En velkomst-e-post sendes automatisk når noen registrerer seg, en påminnelse sendes når noen forlater handlekurven, eller en fødselsdags-e-post med tilbud sendes på kundens bursdag. Det gjør kommunikasjonen mer relevant og tidsriktig uten manuelt arbeid.',
      },
    },
    {
      id: 'mfl-6-3-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Digital markedskommunikasjon gir virksomheter kraftige verktøy for å nå riktig målgruppe med riktig budskap til riktig tid.

**Husk:**
- SEO gir gratis, vedvarende trafikk, men tar tid å bygge opp
- SEM (Google Ads) gir umiddelbar synlighet, men koster penger for hvert klikk
- E-postmarkedsføring er kostnadseffektivt og gir høy avkastning når det gjøres riktig
- Display-annonser er effektive for merkevarebygging og retargeting
- Alle digitale kanaler kan måles nøyaktig – bruk data til å optimalisere fortløpende
- Personvern og samtykke er lovpålagt – følg markedsføringsloven og GDPR`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mfl-6-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En liten norsk bedrift som selger håndlagde stearinlys, har et markedsføringsbudsjett på 10 000 kr per måned. De vurderer å bruke hele budsjettet på enten SEO, Google Ads eller e-postmarkedsføring. Drøft fordeler og ulemper med hver kanal for denne bedriften, og gi en anbefaling om hvordan de bør fordele budsjettet.',
        hints: ['Tenk på bedriftens størrelse, tidsperspektiv og hva som gir best avkastning på kort og lang sikt.'],
        solution: 'SEO: Fordeler – gratis trafikk over tid, bygger autoritet, potensielt mange relevante søkeord (f.eks. «håndlagde stearinlys», «julegaver lys»). Ulemper – tar 3–6 måneder før resultatene vises, krever kompetanse eller innkjøp av tjenester. Google Ads: Fordeler – umiddelbar synlighet, kan treffe folk som aktivt søker. Ulemper – 10 000 kr rekker ikke langt med konkurransepriser, trafikken stopper når budsjettet er brukt opp. E-post: Fordeler – svært kostnadseffektivt, bygger kunderelasjoner, god for gjenkjøp. Ulemper – krever en e-postliste å sende til, best for eksisterende kunder. Anbefaling: Fordel budsjettet: 5 000 kr på SEO (skriv blogginnlegg om stearinlys, interiørtips og gaveinspirasjon), 3 000 kr på Google Ads for å fange kunder som søker aktivt, og 2 000 kr på e-postmarkedsføring for å holde kontakten med eksisterende kunder og drive gjenkjøp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva krever markedsføringsloven når det gjelder e-postreklame?',
        options: [
          { id: 'a', text: 'At e-posten sendes fra en norsk server', isCorrect: false },
          { id: 'b', text: 'At mottakeren aktivt har samtykket til å motta reklame (opt-in)', isCorrect: true },
          { id: 'c', text: 'At e-posten inneholder minst tre bilder', isCorrect: false },
          { id: 'd', text: 'At e-posten sendes mellom kl. 08 og kl. 20', isCorrect: false },
        ],
        solution: 'Markedsføringsloven krever aktivt samtykke (opt-in) før en virksomhet kan sende reklame via e-post. Mottakeren må ha krysset av eller på annen måte aktivt akseptert å motta slike meldinger. Det må også være enkelt å melde seg av (opt-out). Denne regelen beskytter forbrukere mot uønsket reklame (spam).',
      },
    },
    {
      id: 'mfl-6-3-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en plan for en automatisert e-postserie (3–4 e-poster) for en nettbutikk som selger treningstøy. Beskriv hva som utløser serien, innholdet i hver e-post og målet med serien.',
        hints: ['Tenk på hva som skjer etter at en kunde registrerer seg for første gang.'],
        solution: 'Trigger: Ny kunde registrerer konto på nettbutikken. E-post 1 (umiddelbart): Velkomst-e-post med «Velkommen! Her er 15 % rabatt på din første ordre» + presentasjon av bestselgere. Mål: Første kjøp. E-post 2 (3 dager senere): «Slik velger du riktig treningstøy» – nyttig innhold om materialer, passform og treningstyper. Mål: Bygge tillit og interesse. E-post 3 (7 dager etter registrering): «Andre kunder kjøpte også...» – personaliserte anbefalinger basert på hva kunden har sett på. Mål: Konvertering. E-post 4 (14 dager etter registrering, kun til de som ikke har kjøpt): «Rabattkoden din utløper snart!» – påminnelse om rabatten med tidsbegrensning. Mål: Siste sjanse for konvertering. Serien er designet for gradvis å bygge kunnskap, tillit og urgency.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'SEO', definition: 'Search Engine Optimization – optimalisering av nettsider for høyere rangering i organiske søkeresultater' },
    { term: 'SEM', definition: 'Search Engine Marketing – betalt annonsering i søkemotorer, som Google Ads' },
    { term: 'CPC', definition: 'Cost Per Click – pris per klikk på en annonse' },
    { term: 'ROAS', definition: 'Return On Ad Spend – avkastning på annonsekroner' },
    { term: 'Retargeting', definition: 'Annonseringsteknikk der annonser vises til folk som allerede har besøkt nettsiden' },
    { term: 'Marketing automation', definition: 'Automatiserte e-poster og kommunikasjon utløst av spesifikke handlinger' },
    { term: 'Display-annonsering', definition: 'Visuelle annonser som vises på nettsider, apper og i sosiale medier' },
  ],
};

// ============================================================================
// KAPITTEL 6.4: Sosiale medier og innholdsmarkedsføring
// ============================================================================

export const CHAPTER_MARKEDSFORING_6_4: TextbookChapter = {
  id: 'markedsforing-6-4',
  courseId: 'markedsforing',
  chapterNumber: '6.4',
  title: 'Sosiale medier og innholdsmarkedsføring',
  description: 'Bruk av Instagram, TikTok, Facebook, YouTube og andre sosiale medier i markedsføring, samt innholdsstrategi og -produksjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge mediemiks og utvikle innhold for ulike kanaler i markedskommunikasjon',
  ],
  content: [
    {
      id: 'mfl-6-4-intro',
      type: 'text',
      content: `# Sosiale medier og innholdsmarkedsføring

Sosiale medier har endret markedskommunikasjonen fundamentalt. For første gang i historien kan virksomheter kommunisere direkte med millioner av mennesker uten å gå gjennom tradisjonelle medier. Men sosiale medier handler om mer enn å sende ut reklamebudskap – det handler om samtale, engasjement og relasjonsbygging.

**Nordmenn og sosiale medier (2025-tall):**
- 87 % av befolkningen bruker sosiale medier
- Facebook: ca. 3,5 millioner norske brukere
- Instagram: ca. 2,8 millioner norske brukere
- Snapchat: ca. 2,5 millioner norske brukere
- TikTok: ca. 1,8 millioner norske brukere
- LinkedIn: ca. 2 millioner norske brukere

**I dette kapittelet lærer du:**
- Kjennetegn ved de viktigste plattformene
- Hvordan virksomheter bruker sosiale medier strategisk
- Hva innholdsmarkedsføring er og hvorfor det fungerer
- Hvordan man utvikler en innholdsstrategi`,
    },
    {
      id: 'mfl-6-4-def-1',
      type: 'definition',
      title: 'Sosiale medier i markedsføring',
      content: `**Sosiale medier** er digitale plattformer der brukere kan opprette, dele og engasjere seg med innhold og med hverandre. For virksomheter fungerer sosiale medier som en kanal for å:

- **Bygge merkevare:** Dele innhold som forsterker merkevareidentiteten
- **Engasjere målgruppen:** Skape dialog gjennom kommentarer, deling og diskusjon
- **Drive trafikk:** Lede brukere til nettside, nettbutikk eller fysisk butikk
- **Kundeservice:** Svare på spørsmål og håndtere klager
- **Innsikt:** Få direkte tilbakemelding fra kunder

**Organisk vs. betalt innhold:**
- *Organisk:* Innhold du publiserer gratis, som vises til følgerne dine basert på plattformens algoritme
- *Betalt:* Annonser du betaler for å vise til en definert målgruppe – gir større rekkevidde og presis målretting

**Utfordringen med organisk rekkevidde:**
Algoritmene på de fleste plattformer prioriterer innhold fra venner og familie fremfor virksomheter. Organisk rekkevidde for bedriftssider på Facebook er ofte under 5 %, noe som betyr at de fleste virksomheter må bruke betalte annonser for å nå målgruppen.`,
    },
    {
      id: 'mfl-6-4-text-plattformer',
      type: 'text',
      content: `## De viktigste plattformene

### Instagram
**Målgruppe:** 18–45 år, visuelt orientert
**Styrke:** Bilder og korte videoer, Stories, Reels
**Best for:** Merkevarebygging, livsstilsprodukter, B2C
**Eksempel:** Helly Hansen bruker Instagram til å dele bilder av natur, eventyr og produkter i bruk, noe som knytter merkevaren til en aktiv, utendørs livsstil.

### TikTok
**Målgruppe:** 15–35 år, underholdningsorientert
**Styrke:** Korte videoer, viral spredning, autentisitet
**Best for:** Merkekjennskap, unge målgrupper, kreativt innhold
**Eksempel:** XXL bruker TikTok med humoristiske videoer og treningsutfordringer som engasjerer unge brukere og skaper delbar underholdning.

### Facebook
**Målgruppe:** 25–65 år, bredt
**Styrke:** Bred rekkevidde, detaljert annonsemålretting, grupper
**Best for:** Lokale virksomheter, arrangementer, bredere målgrupper
**Eksempel:** Lokale håndverkere og restauranter bruker Facebook-grupper og arrangementer for å nå kunder i sitt nærområde.

### YouTube
**Målgruppe:** Alle aldersgrupper
**Styrke:** Langt videoinnhold, søkbar, høy troverdighet
**Best for:** Produktdemonstrasjoner, opplæring, merkevarebygging
**Eksempel:** Elkjøp publiserer produkttester, unboxing-videoer og opplæringsvideoer som hjelper kunder med å velge riktig produkt.

### LinkedIn
**Målgruppe:** Yrkesaktive, beslutningstakere
**Styrke:** Profesjonelt nettverk, B2B, employer branding
**Best for:** B2B-markedsføring, rekruttering, faglig innhold
**Eksempel:** DNB deler artikler om bærekraftig finans og ledelse for å bygge posisjon som en kompetent og ansvarlig bank.`,
    },
    {
      id: 'mfl-6-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sosial medie-plattform er best egnet for B2B-markedsføring rettet mot beslutningstakere i næringslivet?',
        options: [
          { id: 'a', text: 'TikTok', isCorrect: false },
          { id: 'b', text: 'Snapchat', isCorrect: false },
          { id: 'c', text: 'LinkedIn', isCorrect: true },
          { id: 'd', text: 'Pinterest', isCorrect: false },
        ],
        solution: 'LinkedIn er den klart best egnede plattformen for B2B-markedsføring fordi den samler yrkesaktive og beslutningstakere. Her kan virksomheter dele faglig innhold, bygge profesjonelt nettverk og nå spesifikke bransjer og stillingsnivåer med annonser. TikTok og Snapchat har yngre og mer underholdningsorienterte brukere.',
      },
    },
    {
      id: 'mfl-6-4-def-2',
      type: 'definition',
      title: 'Innholdsmarkedsføring (Content Marketing)',
      content: `**Innholdsmarkedsføring** er en strategisk tilnærming der virksomheten lager og distribuerer verdifullt, relevant og konsistent innhold for å tiltrekke og beholde en definert målgruppe – og til syvende og sist drive lønnsomme kundehandlinger.

**Kjerneprinsippet:** I stedet for å avbryte folk med reklame, tiltrekker du dem med innhold de faktisk ønsker å konsumere.

**Former for innholdsmarkedsføring:**
- Blogginnlegg og artikler
- Video og podcast
- Infografikk og visuelt innhold
- E-bøker og guider
- Case-studier og kundehistorier
- Oppskrifter, tips og veiledninger

**Eksempel: Tine**
Tine.no er ikke bare en produktside – det er Norges mest besøkte oppskriftsside. Ved å tilby tusenvis av gratis oppskrifter tiltrekker Tine millioner av besøkende som naturlig eksponeres for Tines produkter. Oppskriftene er verdifullt innhold som løser et reelt behov (hva skal vi ha til middag?), samtidig som de bygger merkevaren og driver salg.`,
    },
    {
      id: 'mfl-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Innholdsstrategi for en reiselivsbedrift',
      content: `**Visit Norway** bruker innholdsmarkedsføring for å tiltrekke turister til Norge:

**Innholdstyper:**
- *YouTube-videoer:* Spektakulære naturvideoer som viser nordlys, fjorder og midnattssol
- *Instagram:* Brukergenerert innhold (UGC) der turister deler sine egne bilder med hashtagen #VisitNorway
- *Blogg:* Reiseguider, tips og inspirasjon for ulike sesonger og regioner
- *Podkast:* Historier om norsk kultur, tradisjon og natur

**Innholdsstrategien følger tre nivåer:**
1. **Inspirere:** Spektakulært innhold som vekker ønsket om å besøke Norge (topp av trakten)
2. **Informere:** Praktiske guider om ruter, overnatting og aktiviteter (midten)
3. **Konvertere:** Spesifikke tilbud og bestillingsmuligheter (bunnen)

**Resultatet:** Millioner av følgere på sosiale medier, hundretusenvis av brukergenererte innlegg og en merkevare som posisjonerer Norge som et av verdens mest attraktive reisemål.

**Lærdommen:** Det beste innholdet gir verdi til mottakeren. Visit Norway selger ikke «Kjøp en tur til Norge!» – de inspirerer med innhold folk vil se, dele og bli begeistret av.`,
    },
    {
      id: 'mfl-6-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-4-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en virksomhet du følger på sosiale medier. Analyser innholdsstrategien deres: Hvilke plattformer bruker de? Hva slags innhold publiserer de? Hva tror du er målet med innholdet? Er det organisk, betalt, eller en blanding?',
        hints: ['Se på de siste 10–15 innleggene og legg merke til mønstre i innholdstype, tone og frekvens.'],
        solution: 'Eksempel med IKEA Norge på Instagram: Plattformer: Instagram (hovedkanal), Facebook, Pinterest og YouTube. Innhold: Flotte interiørbilder, sesonginspirasjoner, korte videoer med innredningstips, og produktnyheter. Mål: Bygge merkevare som inspirasjonskilde for interiør, drive trafikk til nettbutikk og fysiske varehus. Blanding: Organisk innhold (innredningstips, behind-the-scenes) kombinert med betalte annonser for kampanjer og sesongsalg. Mønster: De publiserer 3–5 ganger i uken, varierer mellom produktbilder, rom-inspirasjon og praktiske tips. Tonen er varm, inkluderende og inspirerende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «brukergenerert innhold» (UGC)?',
        options: [
          { id: 'a', text: 'Innhold laget av et reklamebyrå', isCorrect: false },
          { id: 'b', text: 'Innhold som kundene selv lager og deler, for eksempel bilder og anmeldelser', isCorrect: true },
          { id: 'c', text: 'Automatisk generert innhold av kunstig intelligens', isCorrect: false },
          { id: 'd', text: 'Innhold som kun brukes internt i virksomheten', isCorrect: false },
        ],
        solution: 'Brukergenerert innhold (User Generated Content / UGC) er innhold som lages og deles av kundene selv – bilder, videoer, anmeldelser eller innlegg. Det er verdifullt for virksomheter fordi det er autentisk og troverdig. Når en kunde deler et bilde av produktet ditt, oppfattes det som en personlig anbefaling, ikke reklame. Visit Norway bruker for eksempel hashtagen #VisitNorway for å samle og dele turistenes egne bilder.',
      },
    },
    {
      id: 'mfl-6-4-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Sosiale medier og innholdsmarkedsføring har gitt virksomheter helt nye muligheter for å nå og engasjere målgruppen.

**Husk:**
- Velg plattformer basert på hvor målgruppen din er – ikke vær på alle plattformer «for sikkerhets skyld»
- Innholdsmarkedsføring handler om å gi verdi, ikke om å rope høyest
- Organisk rekkevidde er begrenset – de fleste trenger en kombinasjon av organisk og betalt innhold
- Brukergenerert innhold er en av de mest troverdige formene for markedskommunikasjon
- Sosiale medier krever kontinuerlig arbeid – det er ikke nok å publisere innimellom
- Tilpass innhold og tone til hver plattform – det som fungerer på TikTok, fungerer sjelden på LinkedIn`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mfl-6-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal lage en innholdsstrategi for en nystartet norsk bedrift som selger bærekraftige klær. Bedriften har 15 000 kr i månedlig budsjett for sosiale medier. Velg 2–3 plattformer, begrunn valgene, og beskriv innholdsplanen for den første måneden (type innhold, frekvens og mål).',
        hints: ['Tenk på hvem målgruppen er, hvor de er, og hva slags innhold som passer for bærekraft-budskapet.'],
        solution: 'Plattformer: Instagram (visuell merkevarebygging, målgruppe 20–40 år), TikTok (nå unge bevisste forbrukere med autentisk innhold) og eventuelt Facebook (bredere rekkevidde for kampanjer). Begrunnelse: Bærekraftige klær appellerer til unge, bevisste forbrukere som er aktive på Instagram og TikTok. Visuelt innhold passer godt for mote. Innholdsplan måned 1: Instagram (4 poster/uke): Mandag – produktbilder med historien bak materialet. Onsdag – behind-the-scenes fra produksjon. Fredag – stylingtips/outfitinspirasjon. Søndag – kundebilder (UGC) eller bærekraftstips. Stories daglig. TikTok (3 videoer/uke): «Visste du at...»-videoer om moteindustrien, transformasjonsvideoer (outfit-bytte), humoristiske videoer om bærekraftig mote. Budsjettfordeling: 5 000 kr på Instagram-annonser (mest lønnsomme innlegg), 5 000 kr på TikTok-annonser, 5 000 kr på innholdsproduksjon. Mål: 500 følgere, 50 nettsidebesøk, 10 første salg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-4-oppg-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kjerneprinsippet i innholdsmarkedsføring?',
        options: [
          { id: 'a', text: 'Å sende ut så mange reklamebudskap som mulig', isCorrect: false },
          { id: 'b', text: 'Å tiltrekke målgruppen med verdifullt og relevant innhold de faktisk ønsker å konsumere', isCorrect: true },
          { id: 'c', text: 'Å kopiere konkurrentenes innhold og publisere det selv', isCorrect: false },
          { id: 'd', text: 'Å bare bruke betalte annonser på sosiale medier', isCorrect: false },
        ],
        solution: 'Innholdsmarkedsføring handler om å tiltrekke målgruppen ved å lage innhold som gir dem verdi – informasjon, inspirasjon, underholdning eller hjelp. I stedet for å avbryte med tradisjonell reklame, skaper man innhold folk aktivt søker opp og deler videre. Tine.no med oppskrifter er et godt eksempel.',
      },
    },
    {
      id: 'mfl-6-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Influencer-markedsføring er blitt en stor del av sosiale medier. Diskuter fordeler og ulemper med å bruke influencere i markedskommunikasjon. Bruk gjerne et norsk eksempel.',
        hints: ['Tenk på troverdighet, kontroll over budskapet og markedsføringslovens krav om merking.'],
        solution: 'Fordeler: Influencere har lojale følgere som stoler på anbefalingene deres, innholdet oppleves som personlig og autentisk, det når nisjegrupper effektivt, og det kan gi høy engasjement. Ulemper: Virksomheten har begrenset kontroll over budskapet, influenceren kan havne i kontroverser som skader merkevaren, det kan være dyrt, og effekten er vanskelig å måle nøyaktig. Lovgivning: Markedsføringsloven krever at influencere tydelig merker betalt innhold med «annonse» eller «reklame». Forbrukertilsynet har slått ned på brudd. Eksempel: Birgit Skarstein samarbeider med Telenor. Fordel: Birgit assosieres med utholdenhet, positiv energi og norske verdier, noe som passer Telenors merkevare. Ulempe: Dersom Birgit skulle havne i en kontrovers, vil det også påvirke Telenors omdømme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Organisk rekkevidde', definition: 'Antall som ser innholdet ditt uten betalt promotering' },
    { term: 'Innholdsmarkedsføring', definition: 'Strategisk tilnærming der virksomheten lager verdifullt innhold for å tiltrekke og beholde kunder' },
    { term: 'UGC (brukergenerert innhold)', definition: 'Innhold som lages og deles av kundene selv' },
    { term: 'Influencer-markedsføring', definition: 'Bruk av personer med stor følgerskare for å promotere produkter' },
    { term: 'Algoritme', definition: 'Plattformens regler for hvilke innlegg som vises til hvem og når' },
  ],
};

// ============================================================================
// KAPITTEL 6.5: Mediemiks og kanalvalg
// ============================================================================

export const CHAPTER_MARKEDSFORING_6_5: TextbookChapter = {
  id: 'markedsforing-6-5',
  courseId: 'markedsforing',
  chapterNumber: '6.5',
  title: 'Mediemiks og kanalvalg',
  description: 'Mediestrategi, budsjettfordeling mellom kanaler, integrert markedskommunikasjon og måling av kommunikasjonseffekt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge mediemiks og utvikle innhold for ulike kanaler i markedskommunikasjon',
    'utforske ulike kommunikasjonsstrategier og vurdere hvordan virksomheter bruker markedskommunikasjon som konkurransemiddel',
  ],
  content: [
    {
      id: 'mfl-6-5-intro',
      type: 'text',
      content: `# Mediemiks og kanalvalg

Ingen enkelt kommunikasjonskanal er tilstrekkelig alene. De fleste virksomheter bruker en kombinasjon av kanaler – en **mediemiks** – for å nå sine kommunikasjonsmål. Utfordringen er å finne den rette blandingen av kanaler og fordele budsjettet slik at man får mest mulig effekt.

I forrige kapitler har vi sett på ulike kommunikasjonsverktøy: reklame, PR, sosiale medier, søkemotormarkedsføring og e-post. Nå er spørsmålet: Hvordan kombinerer vi dem?

**Sentrale spørsmål ved kanalvalg:**
- Hvem er målgruppen, og hvilke kanaler bruker de?
- Hva er kommunikasjonsmålet (kjennskap, holdning eller handling)?
- Hva er budsjettet, og hvordan bør det fordeles?
- Hva er produktets art og kompleksitet?
- Hvor befinner produktet seg i livssyklusen?
- Hva gjør konkurrentene?

**I dette kapittelet lærer du:**
- Hva mediestrategi er og hvordan den utvikles
- Prinsipper for budsjettfordeling mellom kanaler
- Hva integrert markedskommunikasjon (IMK) betyr
- Hvordan man måler kommunikasjonseffekt`,
    },
    {
      id: 'mfl-6-5-def-1',
      type: 'definition',
      title: 'Mediemiks og mediestrategi',
      content: `**Mediemiksen** er kombinasjonen av kommunikasjonskanaler en virksomhet bruker for å nå sin målgruppe.

**Mediestrategien** er planen for hvilke kanaler som skal brukes, når de skal brukes, med hvilken intensitet og til hvilket budsjett.

**Sentrale begreper i mediestrategi:**
- **Rekkevidde:** Hvor mange i målgruppen som eksponeres for budskapet (minst én gang)
- **Frekvens:** Hvor mange ganger den gjennomsnittlige personen eksponeres
- **GRP (Gross Rating Points):** Rekkevidde × Frekvens – et mål på total eksponering
- **CPM (Cost Per Mille):** Kostnad per tusen visninger – brukes for å sammenligne kanalers kostnadseffektivitet
- **Share of Voice (SOV):** Virksomhetens andel av total reklameeksponering i kategorien

**Tommelregel for frekvens:**
Forskning viser at forbrukere typisk trenger å se et budskap 3–7 ganger før det registreres og huskes. Derfor er det ofte bedre å nå færre med høy frekvens enn å nå mange bare én gang.`,
    },
    {
      id: 'mfl-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Mediemiks for lansering av ny Grandiosa-pizza',
      content: `Orkla Foods (Grandiosa) lanserer en ny pizzavariant og planlegger mediemiksen:

**Mål:** 70 % kjennskap i målgruppen 18–45 år innen 3 måneder, og 15 % prøvekjøp.

**Fase 1 – Teaser (uke 1–2):**
- TikTok og Instagram Reels: Mystiske korte videoer som hinter om noe nytt fra Grandiosa
- Formål: Skape nysgjerrighet (buzz)

**Fase 2 – Lansering (uke 3–4):**
- TV-reklame i beste sendetid: Bred rekkevidde, bygge kjennskap
- YouTube pre-roll: Video som viser produktet i bruk
- Instagram og Facebook: Betalte annonser med produktbilder og smaksbeskrivelse
- Dagspresse: Helsides annonser i VG og Dagbladet

**Fase 3 – Salgsaktivering (uke 5–8):**
- Butikkeksponering: Smaksprøver og spesialdisplay i REMA, Kiwi og Meny
- Kuponger i dagligvareapper: 10 kr rabatt ved første kjøp
- Google Ads: Fange folk som søker «ny pizza» eller «Grandiosa»
- E-post: Nyhetsbrev til eksisterende kunder med tilbudskode

**Fase 4 – Vedlikehold (uke 9–12):**
- Sosiale medier: Organisk innhold, brukergenererte bilder
- Retargeting: Display-annonser til de som har vist interesse

**Budsjettfordeling:**
TV 40 %, digital (SoMe + Google + display) 35 %, butikkaktivering 15 %, trykt 10 %

Legg merke til at hver fase har ulike kanaler og ulikt fokus. Tidlig brukes kanaler med bred rekkevidde for kjennskap. Senere brukes kanaler som driver direkte handling (salg).`,
    },
    {
      id: 'mfl-6-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver begrepet GRP (Gross Rating Points)?',
        options: [
          { id: 'a', text: 'Kostnaden per klikk på en annonse', isCorrect: false },
          { id: 'b', text: 'Rekkevidde multiplisert med frekvens – et mål på total eksponering', isCorrect: true },
          { id: 'c', text: 'Antall følgere på sosiale medier', isCorrect: false },
          { id: 'd', text: 'Prosentandelen som kjøper produktet etter å ha sett reklamen', isCorrect: false },
        ],
        solution: 'GRP (Gross Rating Points) er rekkevidde × frekvens. Hvis en kampanje når 60 % av målgruppen (rekkevidde) og gjennomsnittspersonen ser budskapet 4 ganger (frekvens), er GRP = 60 × 4 = 240. GRP brukes for å sammenligne kampanjers totale eksponering og er et standardmål i mediebransjen.',
      },
    },
    {
      id: 'mfl-6-5-def-2',
      type: 'definition',
      title: 'Integrert markedskommunikasjon (IMK)',
      content: `**Integrert markedskommunikasjon (IMK)** er en strategisk tilnærming der alle kommunikasjonskanaler og -verktøy koordineres for å levere et konsistent og enhetlig budskap til målgruppen.

**Prinsippet:** Uavhengig av om kunden ser en TV-reklame, en Instagram-annonse, en e-post eller besøker butikken, skal opplevelsen og budskapet være gjenkjennelig og sammenhengende.

**Kjennetegn på god IMK:**
- **Konsistent budskap:** Kjernebudskapet er det samme i alle kanaler
- **Tilpasset format:** Innholdet tilpasses kanalens format og brukeropplevelse
- **Synergieffekt:** Kanalene forsterker hverandre – TV skaper kjennskap, SoMe bygger engasjement, e-post driver salg
- **Samlet kundereise:** Kommunikasjonen følger kunden gjennom alle kontaktpunkter

**Hvorfor IMK er viktig:**
Forbrukere skiller ikke mellom kanaler. De ser én merkevare, ikke én TV-kampanje og én Instagram-konto. Hvis budskapet er inkonsistent – for eksempel eksklusivt i annonser men billig-følelse i butikk – mister merkevaren troverdighet.

**Eksempel:** Apple kommuniserer det samme «enkelt, elegant, premium»-budskapet i alt de gjør: produktdesign, emballasje, nettside, butikkopplevelse, reklamefilmer og kundeservice. Det er IMK i praksis.`,
    },
    {
      id: 'mfl-6-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste fordelen med integrert markedskommunikasjon (IMK)?',
        options: [
          { id: 'a', text: 'Det er billigere enn å bruke bare én kanal', isCorrect: false },
          { id: 'b', text: 'Man trenger bare å lage ett innholdselement som brukes overalt', isCorrect: false },
          { id: 'c', text: 'Kanalene forsterker hverandre og leverer et konsistent budskap som bygger sterkere merkevare', isCorrect: true },
          { id: 'd', text: 'Det eliminerer behovet for tradisjonelle medier', isCorrect: false },
        ],
        solution: 'IMK handler om at alle kanaler jobber sammen og forsterker hverandre gjennom et konsistent budskap. Det betyr IKKE at man bruker identisk innhold i alle kanaler – innholdet tilpasses, men kjernebudskapet og merkevareopplevelsen er den samme. Synergieffekten gjør at 1+1 blir mer enn 2.',
      },
    },
    {
      id: 'mfl-6-5-text-budsjett',
      type: 'text',
      content: `## Budsjettfordeling og kanalvalg

Hvordan bør markedsbudsjettet fordeles mellom kanaler? Det finnes ingen universell formel, men flere faktorer spiller inn:

### Målgruppens medievaner
Hvis målgruppen er 18–25 år, er det lite hensiktsmessig å bruke 50 % av budsjettet på trykte aviser. Kanalvalget må følge målgruppen.

### Kommunikasjonsmålet
- **Kjennskap (kognitivt):** Kanaler med bred rekkevidde – TV, YouTube, utendørs
- **Holdning (affektivt):** Kanaler med høy engasjement – sosiale medier, innholdsmarkedsføring, PR
- **Handling (konativt):** Kanaler med direkte respons – Google Ads, e-post, salgsfremmende tiltak

### Produktets art
Komplekse produkter (forsikring, boliglån) trenger kanaler som tillater detaljert informasjon. Impulsprodukter (snacks, drikkevarer) trenger bred synlighet og påminnelse.

### Typiske budsjettfordelinger i Norge (2025):
Norske annonsører fordeler budsjettet omtrent slik:
- Digitale kanaler (totalt): ca. 60 %
  - Sosiale medier: 25 %
  - Søkemotorer: 15 %
  - Display og video: 15 %
  - Øvrig digital: 5 %
- TV: ca. 18 %
- Trykte medier: ca. 8 %
- Radio: ca. 5 %
- Utendørs: ca. 5 %
- Øvrig: ca. 4 %

Trenden er tydelig: Digitale kanaler tar stadig større andel, mens trykte medier og til dels TV taper terreng.`,
    },
    {
      id: 'mfl-6-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor det er viktig å velge kommunikasjonskanaler basert på kommunikasjonsmålet. Gi et eksempel der du knytter kognitivt, affektivt og konativt mål til ulike kanaler.',
        hints: ['Tenk på kundereisen: først må kunden vite om produktet, deretter like det, og til slutt kjøpe det.'],
        solution: 'Ulike kommunikasjonsmål krever ulike kanaler fordi kanalene har ulike styrker. Eksempel for en ny norsk saftprodusent: Kognitivt mål (kjennskap) – TV-reklame og YouTube-annonser for å nå bredt og fortelle at produktet finnes. Bred rekkevidde er viktigst. Affektivt mål (holdning) – Instagram og innholdsmarkedsføring med historien bak saften (lokale bær, familieoppskrift, bærekraftig produksjon). Her handler det om å bygge positive assosiasjoner og preferanse. Konativt mål (handling) – Google Ads for folk som søker «norsk saft», kuponger i dagligvareapper og smaksprøver i butikk. Direkte respons og lav terskel for kjøp er viktigst. Poenget er at kanalen må matche målet – TV er dårlig for direkte respons, og kuponger er dårlig for merkevarebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-5-text-effektmaling',
      type: 'text',
      content: `## Effektmåling

Det berømte sitatet tillagt reklamepioneren John Wanamaker lyder: *«Halvparten av pengene jeg bruker på reklame er bortkastet. Problemet er at jeg ikke vet hvilken halvpart.»* I dag har vi langt bedre verktøy for å måle effekt, spesielt i digitale kanaler.

### Måling i digitale kanaler
- **Visninger (impressions):** Hvor mange ganger annonsen ble vist
- **Klikk og klikkrate (CTR):** Hvor mange som klikket på annonsen
- **Konverteringer:** Hvor mange som utførte ønsket handling (kjøp, registrering)
- **Konverteringsrate:** Andelen som konverterte av dem som klikket
- **Kostnad per konvertering (CPA):** Hva hver konvertering kostet
- **ROAS:** Avkastning per annonsekrone

### Måling av merkevareeffekt
- **Merkekjennskap:** Måles gjennom spørreundersøkelser (uhjulpet og hjulpet kjennskap)
- **Merkepreferanse:** Måles gjennom spørreundersøkelser (hvilken merkevare foretrekker du?)
- **Net Promoter Score (NPS):** «Hvor sannsynlig er det at du anbefaler oss?» (skala 0–10)
- **Share of Voice:** Virksomhetens andel av total reklameeksponering

### Attribusjonsmodeller
En av de store utfordringene er å vite hvilken kanal som «forårsaket» et kjøp. En kunde kan ha sett en TV-reklame, søkt på Google, klikket på en Instagram-annonse og til slutt kjøpt via e-post. Hvilken kanal får æren?

- **Siste-klikk-attribusjon:** Æren går til siste kanal før kjøp (mest brukt, men ufullstendig)
- **Første-klikk-attribusjon:** Æren går til første kontaktpunkt
- **Lineær attribusjon:** Alle kontaktpunkter får lik andel
- **Datadrevet attribusjon:** Algoritmer beregner hver kanals bidrag basert på data`,
    },
    {
      id: 'mfl-6-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En virksomhet måler effekten av sin kampanje ved å se på «siste-klikk-attribusjon». Hva er den viktigste svakheten ved denne metoden?',
        options: [
          { id: 'a', text: 'Den er for dyr å implementere', isCorrect: false },
          { id: 'b', text: 'Den gir all ære til siste kontaktpunkt og ignorerer at tidligere kanaler bidro til beslutningen', isCorrect: true },
          { id: 'c', text: 'Den fungerer bare for digitale kanaler', isCorrect: false },
          { id: 'd', text: 'Den krever minst 1 million visninger for å være nøyaktig', isCorrect: false },
        ],
        solution: 'Siste-klikk-attribusjon gir all ære for et kjøp til den siste kanalen kunden brukte. Men i virkeligheten har kunden ofte vært eksponert for budskapet i flere kanaler underveis. TV-reklamen skapte kjennskap, Instagram-annonsen bygde interesse, og e-posten utløste kjøpet. Siste-klikk ignorerer bidraget fra de tidlige kanalene, noe som kan føre til feilprioritering av markedsbudsjettet.',
      },
    },
    {
      id: 'mfl-6-5-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

Mediemiks og kanalvalg handler om å sette sammen en helhetlig kommunikasjonsplan der alle kanaler jobber sammen mot felles mål.

**Husk:**
- Mediemiksen bør baseres på målgruppe, kommunikasjonsmål, budsjett og produktets art
- Integrert markedskommunikasjon sikrer at budskapet er konsistent på tvers av kanaler
- Rekkevidde og frekvens er sentrale begreper – bedre å nå færre ofte enn mange sjelden
- Digitale kanaler gir presise målingsmuligheter, men merkevareeffekt krever supplerende undersøkelser
- Attribusjonsmodeller er viktige for å forstå hvilke kanaler som faktisk bidrar til resultater
- Budsjettfordelingen bør evalueres og justeres løpende basert på målt effekt`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mfl-6-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En norsk sportskjede med 30 butikker og nettbutikk skal gjennomføre en stor høstkampanje med et budsjett på 2 millioner kroner. Lag en mediestrategi som inkluderer minst 4 kanaler. Begrunn kanalvalg, fordel budsjettet prosentvis og forklar hvordan kanalene forsterker hverandre (integrert kommunikasjon).',
        hints: ['Tenk på ulike faser av kampanjen og kundereisen fra kjennskap til kjøp.'],
        solution: 'Mediestrategi for høstkampanje – sportskjede: Fase 1 (uke 1–2, kjennskap): TV-reklame (30 %) – 600 000 kr på TV 2 og Discovery for bred rekkevidde. YouTube pre-roll (10 %) – 200 000 kr for å nå de som ikke ser lineær-TV. Fase 2 (uke 2–4, interesse og engasjement): Instagram og Facebook (20 %) – 400 000 kr på betalte annonser med produktvideoer, treningsinspirasjon og kampanjeinnhold. Influencer-samarbeid med kjente norske idrettsutøvere. Fase 3 (uke 3–6, handling): Google Ads (15 %) – 300 000 kr på søkeord som «løpesko høst», «skibukse tilbud». E-post (5 %) – 100 000 kr på kampanje-e-poster til kundedatabasen med personaliserte tilbud. Butikkeksponering (10 %) – 200 000 kr på vindusdekor, display og butikkmateriell. Fase 4 (hele perioden): Retargeting (10 %) – 200 000 kr på display-annonser til besøkende. Hvordan kanalene forsterker hverandre: TV skaper bred kjennskap, SoMe bygger engasjement og delbarhet, Google fanger de som aktivt søker, e-post og retargeting konverterer interesserte til kjøpere, og butikk gir den fysiske opplevelsen. Samlet dekker dette hele kundereisen fra kjennskap til kjøp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-6-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr CPM (Cost Per Mille) i medieplanning?',
        options: [
          { id: 'a', text: 'Kostnad per million kroner investert', isCorrect: false },
          { id: 'b', text: 'Kostnad per tusen visninger av annonsen', isCorrect: true },
          { id: 'c', text: 'Kostnad per minutt reklametid', isCorrect: false },
          { id: 'd', text: 'Totalkostnad for hele kampanjen', isCorrect: false },
        ],
        solution: 'CPM (Cost Per Mille) betyr kostnad per tusen visninger. «Mille» er latin for tusen. Hvis en annonse har en CPM på 50 kr, koster det 50 kr for at annonsen vises 1 000 ganger. CPM brukes for å sammenligne kostnadseffektiviteten mellom ulike kanaler og annonseplasseringer.',
      },
    },
    {
      id: 'mfl-6-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'mfl-6-5-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft påstanden: «Små bedrifter trenger ikke integrert markedskommunikasjon – det er bare for store selskaper med millionbudsjetter.»',
        hints: ['Tenk på om konsistens i budskapet er viktig uansett størrelse på bedriften.'],
        solution: 'Påstanden er feil. Integrert markedskommunikasjon handler om konsistens, ikke om størrelse. En liten bedrift med nettside, Instagram-konto og fysisk butikk trenger også at budskapet er gjenkjennelig og sammenhengende på tvers av disse kontaktpunktene. Faktisk er IMK kanskje enda viktigere for små bedrifter: De har mindre budsjett, så hver krone må brukes effektivt. Når kanalene forsterker hverandre, får man mer ut av et lite budsjett. Eksempel: En lokal bakeri som bruker Instagram for å vise dagens baker, Google My Business for å dukke opp i lokale søk, og butikkskilt med samme visuelle profil – dette er IMK i praksis, og det koster nesten ingenting. Poenget er at IMK handler om strategi og tankegang, ikke om pengebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mediemiks', definition: 'Kombinasjonen av kommunikasjonskanaler en virksomhet bruker' },
    { term: 'Mediestrategi', definition: 'Plan for kanalvalg, timing, intensitet og budsjettfordeling' },
    { term: 'GRP', definition: 'Gross Rating Points – rekkevidde × frekvens, mål på total eksponering' },
    { term: 'CPM', definition: 'Cost Per Mille – kostnad per tusen visninger' },
    { term: 'Integrert markedskommunikasjon (IMK)', definition: 'Koordinert kommunikasjon der alle kanaler leverer et konsistent budskap' },
    { term: 'Attribusjon', definition: 'Tilordning av salgseffekt til de ulike kanalene i kundereisen' },
    { term: 'Share of Voice', definition: 'Virksomhetens andel av total reklameeksponering i kategorien' },
  ],
};

// ============================================================================
// Eksport: Alle kapitler i Del 6
// ============================================================================

export const MARKEDSFORING_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MARKEDSFORING_6_1,
  CHAPTER_MARKEDSFORING_6_2,
  CHAPTER_MARKEDSFORING_6_3,
  CHAPTER_MARKEDSFORING_6_4,
  CHAPTER_MARKEDSFORING_6_5,
];
