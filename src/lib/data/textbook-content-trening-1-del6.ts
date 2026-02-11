/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 1 (VG2) - Seksjon 6: Bevegelighet og mobilitet
 *
 * Utvider Kapittel 6 til 5 delkapitler (6.1-6.5)
 * Dekker LK20-kompetansemål for treningslære 1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Hva er bevegelighet?
// ============================================================================

export const CHAPTER_TRENING_1_6_1: TextbookChapter = {
  id: 'trening-1-6-1',
  courseId: 'trening-1',
  chapterNumber: '6.1',
  title: 'Hva er bevegelighet?',
  description: 'Definisjon av bevegelighet, forskjellen mellom aktiv og passiv bevegelighet, og faktorer som påvirker bevegeligheten.',
  estimatedMinutes: 20,
  competenceGoals: [
    'definere bevegelighet og forklare dens betydning for helse og prestasjon',
    'skille mellom aktiv og passiv bevegelighet',
    'gjøre rede for faktorer som påvirker bevegelighet',
  ],
  content: [
    {
      id: 'tr-6-1-intro',
      type: 'text',
      content: `# Hva er bevegelighet?

Bevegelighet er en av de grunnleggende fysiske egenskapene ved siden av styrke, utholdenhet og hurtighet. God bevegelighet er avgjørende for å kunne utføre bevegelser med riktig teknikk, forebygge skader og opprettholde god funksjon i hverdagen. Likevel er bevegelighet ofte den mest neglisjerte egenskapen i treningsprogrammer.

I dette kapittelet skal vi se nærmere på hva bevegelighet egentlig er, ulike former for bevegelighet, og hvilke faktorer som bestemmer hvor bevegelig du er.`,
    },
    {
      id: 'tr-6-1-def-bevegelighet',
      type: 'definition',
      title: 'Bevegelighet',
      content: 'Bevegelighet (fleksibilitet) er evnen til å bevege et ledd eller en serie av ledd gjennom hele det tilgjengelige bevegelsesutslaget (ROM - Range of Motion). Bevegelighet er leddspesifikk, noe som betyr at god bevegelighet i ett ledd ikke nødvendigvis betyr god bevegelighet i andre ledd.',
    },
    {
      id: 'tr-6-1-text-aktiv-passiv',
      type: 'text',
      title: 'Aktiv og passiv bevegelighet',
      content: `Det er viktig å skille mellom to hovedtyper bevegelighet:

**Aktiv bevegelighet**

Aktiv bevegelighet er det bevegelsesutslaget du kan oppnå ved hjelp av egen muskelkraft, uten ytre hjelp. Når du løfter beinet fremover så høyt du kan uten å bruke hendene, demonstrerer du aktiv bevegelighet i hofteleddet.

- Krever muskelstyrke i tillegg til fleksibilitet
- Er mest relevant for idrettsprestasjoner
- Lavere enn passiv bevegelighet
- Viktigst for funksjonell bevegelse

**Passiv bevegelighet**

Passiv bevegelighet er det bevegelsesutslaget du kan oppnå med hjelp av ytre krefter, som en treningspartner, tyngdekraften eller egne hender. Når noen dytter beinet ditt oppover i en tøyningsstilling, tester de din passive bevegelighet.

- Krever ingen egen muskelkraft
- Er alltid større enn aktiv bevegelighet
- Brukes ofte i tøynings- og behandlingssituasjoner
- Gir et mål på det maksimale potensialet for bevegelsesutslag`,
    },
    {
      id: 'tr-6-1-def-rom',
      type: 'definition',
      title: 'ROM (Range of Motion)',
      content: 'ROM (Range of Motion) er det fullstendige bevegelsesutslaget i et ledd, målt i grader. ROM avhenger av leddets anatomiske struktur, leddkapselen, leddbånd, muskler, sener og bløtvev rundt leddet. ROM kan måles med et goniometer.',
    },
    {
      id: 'tr-6-1-text-differanse',
      type: 'text',
      title: 'Bevegelighetsreserven',
      content: `Forskjellen mellom passiv og aktiv bevegelighet kalles **bevegelighetsreserven** (eller fleksibilitetsdefisittet). En stor bevegelighetsreserve betyr at du har et stort bevegelsesutslag passivt, men mangler styrke til å utnytte det aktivt.

**Eksempel:**
- Passiv hoftefleksjon: 140 grader
- Aktiv hoftefleksjon: 100 grader
- Bevegelighetsreserve: 40 grader

En stor bevegelighetsreserve kan indikere:
- Svakhet i muskulaturen som kontrollerer bevegelsen
- Behov for styrketrening i ytterposisjonene
- Potensial for økt skaderisiko i sonen mellom aktiv og passiv ROM

Målet med trening bør være å redusere gapet mellom aktiv og passiv bevegelighet, slik at du har kontroll gjennom hele bevegelsesutslaget.`,
    },
    {
      id: 'tr-6-1-note-funksjonell',
      type: 'note',
      title: 'Funksjonell bevegelighet',
      content: 'I treningslære snakker vi også om funksjonell bevegelighet, som handler om bevegeligheten som trengs for å utføre bestemte bevegelser eller idrettsøvelser korrekt. En vektløfter trenger for eksempel god bevegelighet i ankler, hofter og skuldre for å utføre en dyp knebøy med god teknikk.',
    },
    {
      id: 'tr-6-1-text-faktorer',
      type: 'text',
      title: 'Faktorer som påvirker bevegelighet',
      content: `Bevegeligheten i et ledd påvirkes av mange faktorer, både medfødte og påvirkbare:

**Anatomiske faktorer (vanskelig å endre)**
- **Leddtype og leddstruktur:** Kuleledd (skulder, hofte) har større bevegelsesutslag enn hengselledd (kne, albue)
- **Beinstruktur:** Formen på leddflater og beinfremspring begrenser bevegelsen
- **Leddkapselen:** En stram leddkapsel reduserer bevegeligheten

**Bløtvevsfaktorer (kan trenes)**
- **Muskler og sener:** Stramme muskler er den vanligste årsaken til redusert bevegelighet
- **Fascia (bindevevshinner):** Fascia omgir muskler og kan bli stiv ved inaktivitet
- **Leddbånd:** Stabiliserer leddene, men kan begrense bevegelse

**Nevrale faktorer**
- **Strekkrefleksen:** Muskelens automatiske beskyttelsesmekanisme mot overtøyning
- **Smertegrense:** Hjernen begrenser bevegelighet for å beskytte mot skade
- **Muskelspenning:** Stress og nervøsitet øker muskelspenningen

**Andre faktorer**
- **Alder:** Bevegeligheten avtar naturlig med alderen
- **Kjønn:** Kvinner har generelt bedre bevegelighet enn menn
- **Kroppstemperatur:** Varm muskulatur er mer tøyelig
- **Aktivitetsnivå:** Regelmessig bevegelse opprettholder bevegeligheten
- **Tidspunkt på døgnet:** Bevegeligheten er vanligvis best om ettermiddagen`,
    },
    {
      id: 'tr-6-1-warning-hypermobilitet',
      type: 'warning',
      title: 'Hypermobilitet',
      content: 'Noen personer har unormalt stor bevegelighet, kalt hypermobilitet. Dette skyldes ofte slappe leddbånd og leddkapsler. Selv om hypermobilitet kan virke som en fordel, medfører det økt risiko for leddskader og instabilitet. Hypermobile personer trenger ofte mer styrketrening og stabilisering rundt leddene, fremfor mer tøyning.',
    },
    {
      id: 'tr-6-1-example-1',
      type: 'example',
      title: 'Bevegelighetstest: Sit-and-reach',
      problem: 'Hvordan kan du enkelt teste bevegeligheten i bakside lår og korsrygg?',
      solution: `**Sit-and-reach-testen:**

1. Sitt på gulvet med strake bein og føttene mot en vegg eller boks
2. Strekk armene fremover mot tærne så langt du kan
3. Hold posisjonen i 2 sekunder

**Tolkning:**
- Når forbi tærne: God bevegelighet
- Når til tærne: Gjennomsnittlig bevegelighet
- Når ikke tærne: Begrenset bevegelighet

**Viktig:** Testen måler en kombinasjon av bevegelighet i hofteleddet, korsryggen og bakside lår. Resultatet påvirkes også av armenes og beinets lengde i forhold til overkroppen.`,
    },
    {
      id: 'tr-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom aktiv og passiv bevegelighet?',
        options: [
          { id: 'a', text: 'Aktiv bevegelighet oppnås med egen muskelkraft, passiv med ytre hjelp', isCorrect: true },
          { id: 'b', text: 'Aktiv bevegelighet er alltid større enn passiv bevegelighet', isCorrect: false },
          { id: 'c', text: 'Passiv bevegelighet handler om styrke, aktiv om tøyning', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom aktiv og passiv bevegelighet', isCorrect: false },
        ],
        solution: 'Aktiv bevegelighet er det bevegelsesutslaget du oppnår med egen muskelkraft, mens passiv bevegelighet oppnås med hjelp av ytre krefter. Passiv bevegelighet er alltid større enn aktiv bevegelighet.',
      },
    },
    {
      id: 'tr-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-6-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken faktor har størst påvirkning på bevegeligheten og er samtidig enklest å trene?',
        options: [
          { id: 'a', text: 'Beinstrukturen i leddet', isCorrect: false },
          { id: 'b', text: 'Muskler og sener rundt leddet', isCorrect: true },
          { id: 'c', text: 'Leddtypen (kuleledd vs. hengselledd)', isCorrect: false },
          { id: 'd', text: 'Personens alder', isCorrect: false },
        ],
        solution: 'Muskler og sener er den viktigste påvirkbare faktoren for bevegelighet. Stramme muskler er den vanligste årsaken til redusert bevegelighet, og kan forbedres gjennom regelmessig tøyning og mobilitetstrening.',
      },
    },
    {
      id: 'tr-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva bevegelighetsreserven er, og hvorfor det er viktig å redusere gapet mellom aktiv og passiv bevegelighet.',
        solution: 'Bevegelighetsreserven er forskjellen mellom passiv og aktiv bevegelighet. Et stort gap betyr at man har bevegelsesutslag passivt, men mangler styrke til å kontrollere det aktivt. Dette er ugunstig fordi sonen mellom aktiv og passiv ROM er en sone med lav muskulær kontroll, noe som øker skaderisikoen. Ved å styrke muskulaturen i ytterposisjonene reduserer man gapet og oppnår bedre kontroll gjennom hele bevegelsesutslaget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-6-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er ROM (Range of Motion)?',
        options: [
          { id: 'a', text: 'En type styrketreningsøvelse', isCorrect: false },
          { id: 'b', text: 'Det fullstendige bevegelsesutslaget i et ledd, målt i grader', isCorrect: true },
          { id: 'c', text: 'En bevegelighetstest for ryggen', isCorrect: false },
          { id: 'd', text: 'Forskjellen mellom aktiv og passiv bevegelighet', isCorrect: false },
        ],
        solution: 'ROM (Range of Motion) er det fullstendige bevegelsesutslaget i et ledd, målt i grader. Det avhenger av leddets anatomiske struktur, leddkapselen, leddbånd, muskler, sener og bløtvev.',
      },
    },
    {
      id: 'tr-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Samleoppgave: Gjør rede for de ulike faktorene som påvirker bevegeligheten. Del dem inn i kategorier, og forklar hvilke faktorer som kan trenes og hvilke som er vanskelige å endre.',
        solution: 'Faktorene kan deles i fire kategorier: 1) Anatomiske faktorer som er vanskelige å endre: leddtype, beinstruktur og leddkapsel. 2) Bløtvevsfaktorer som kan trenes: muskler, sener, fascia og leddbånd. Stramme muskler er den vanligste årsaken til redusert bevegelighet. 3) Nevrale faktorer: strekkrefleksen, smertegrensen og muskelspenning. Disse kan påvirkes gjennom trening og avspenning. 4) Andre faktorer: alder, kjønn, kroppstemperatur, aktivitetsnivå og tidspunkt på døgnet. Av disse er bløtvevsfaktorene og de nevrale faktorene mest påvirkbare gjennom regelmessig tøyning, mobilitetstrening og styrketrening i ytterposisjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: En klassekamerat sier at hun er «veldig tøyelig» og kan gjøre spagaten med letthet. Drøft om dette nødvendigvis er positivt, og forklar hva hypermobilitet innebærer og hvilke treningsråd du ville gitt.',
        solution: 'Å være veldig tøyelig er ikke nødvendigvis bare positivt. Dersom bevegeligheten skyldes hypermobilitet, altså unormalt slappe leddbånd og leddkapsler, medfører det økt risiko for leddskader og instabilitet. Hypermobile personer bør fokusere på styrketrening og stabilisering rundt leddene fremfor mer tøyning. Det er viktig å skille mellom sunn bevegelighet med god muskulær kontroll, og overdreven bevegelighet uten kontroll. Treningsråd til en hypermobil person: prioriter styrketrening i ytterposisjonene, tren stabilitet og kontroll, unngå å presse ledd forbi naturlige stoppunkter, og fokus på aktiv bevegelighet fremfor passiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.2: Tøyningsmetoder
// ============================================================================

export const CHAPTER_TRENING_1_6_2: TextbookChapter = {
  id: 'trening-1-6-2',
  courseId: 'trening-1',
  chapterNumber: '6.2',
  title: 'Tøyningsmetoder',
  description: 'Oversikt over ulike tøyningsmetoder: statisk, dynamisk, PNF og ballistisk tøyning, med fordeler og ulemper.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive og demonstrere ulike tøyningsmetoder',
    'forklare fysiologiske mekanismer bak tøyning',
    'velge riktig tøyningsmetode for ulike situasjoner',
  ],
  content: [
    {
      id: 'tr-6-2-intro',
      type: 'text',
      content: `# Tøyningsmetoder

Det finnes flere ulike metoder for å forbedre bevegeligheten gjennom tøyning. Hver metode har sine fordeler og ulemper, og egner seg for ulike situasjoner. I dette kapittelet ser vi på de fire hovedtypene tøyning og når de bør brukes.

Valg av tøyningsmetode avhenger av målet med tøyningen, utøverens erfaring, tidspunktet i treningsøkten og eventuelle skader eller begrensninger.`,
    },
    {
      id: 'tr-6-2-def-statisk',
      type: 'definition',
      title: 'Statisk tøyning',
      content: 'Statisk tøyning innebærer å holde en tøyningsstilling i en bestemt tid, vanligvis 15-60 sekunder. Muskelen strekkes sakte til en posisjon der du kjenner et moderat strekk, og holdes der uten bevegelse. Dette er den vanligste og tryggeste formen for tøyning.',
    },
    {
      id: 'tr-6-2-text-statisk',
      type: 'text',
      title: 'Statisk tøyning',
      content: `Statisk tøyning er den mest brukte og best dokumenterte formen for tøyning. Den kan utføres som aktiv eller passiv tøyning.

**Aktiv statisk tøyning:**
- Du bruker egne muskler til å holde tøyningsposisjonen
- Eksempel: Holde beinet løftet fremover med egen kraft
- Bygger styrke samtidig som den forbedrer bevegelighet

**Passiv statisk tøyning:**
- Du bruker ytre hjelp (tyngdekraft, partner, vegg) til å holde posisjonen
- Eksempel: Legge beinet på en benk og lene deg fremover
- Gir større bevegelsesutslag enn aktiv tøyning

**Retningslinjer for statisk tøyning:**
- Hold posisjonen i 15-60 sekunder
- 2-4 repetisjoner per muskelgruppe
- Tøy til du kjenner et moderat strekk, ikke smerte
- Pust rolig og dypt gjennom hele tøyningen
- Best egnet etter trening eller som egen treningsøkt`,
    },
    {
      id: 'tr-6-2-def-dynamisk',
      type: 'definition',
      title: 'Dynamisk tøyning',
      content: 'Dynamisk tøyning innebærer kontrollerte bevegelser gjennom hele bevegelsesutslaget, uten å holde i en bestemt posisjon. Bevegelsene utføres gradvis med økende rekkevidde og hastighet, og etterligner ofte bevegelsesmønstrene i den kommende aktiviteten.',
    },
    {
      id: 'tr-6-2-text-dynamisk',
      type: 'text',
      title: 'Dynamisk tøyning',
      content: `Dynamisk tøyning har blitt stadig mer populært, særlig som del av oppvarmingen. Til forskjell fra statisk tøyning holder du aldri en posisjon, men beveger deg kontrollert gjennom bevegelsesutslaget.

**Eksempler på dynamisk tøyning:**
- Beinsving fremover og bakover (hamstrings og hoftefleksorer)
- Armrotasjoner (skulderbevegelighet)
- Lunges med vridning (hofter og brystrygg)
- Høye kneløft (hoftefleksjon)
- Hælspark (knefleksjon)

**Fordeler med dynamisk tøyning:**
- Øker kroppstemperaturen
- Aktiverer muskulaturen som skal brukes
- Forbedrer nervesystemets aktivering
- Egner seg godt som del av oppvarmingen
- Reduserer ikke muskelstyrke (til forskjell fra langvarig statisk tøyning)

**Viktig:** Bevegelsene skal være kontrollerte og ikke forveksles med ballistisk tøyning. Øk bevegelsesutslaget gradvis gjennom 10-15 repetisjoner per bevegelse.`,
    },
    {
      id: 'tr-6-2-def-pnf',
      type: 'definition',
      title: 'PNF-tøyning',
      content: 'PNF (Proprioceptiv Nevromuskulær Fasilitering) er en avansert tøyningsmetode som kombinerer tøyning med muskelkontraksjon. Metoden utnytter nevromuskulære reflekser for å oppnå økt bevegelsesutslag. PNF anses som den mest effektive metoden for å øke bevegeligheten på kort sikt.',
    },
    {
      id: 'tr-6-2-text-pnf',
      type: 'text',
      title: 'PNF-tøyning i detalj',
      content: `PNF-tøyning utnytter to viktige nevromuskulære mekanismer:

**1. Autogen inhibisjon:**
Når en muskel kontraheres hardt, sender Golgi-seneorganene signaler til ryggmargen som fører til at muskelen slapper av. Denne avslapningen gjør muskelen mer mottakelig for tøyning.

**2. Resiprok inhibisjon:**
Når en muskel kontraheres, hemmes den motstående muskelen (antagonisten) automatisk. Dette kan utnyttes ved å kontrahere agonisten for å oppnå bedre tøyning av antagonisten.

**Vanligste PNF-teknikk (hold-slapp):**
1. Tøy muskelen passivt til ytterstilling (10 sekunder)
2. Kontrahér muskelen isometrisk mot motstand (6-10 sekunder)
3. Slapp av i 2-3 sekunder
4. Tøy muskelen videre til ny ytterstilling (15-30 sekunder)
5. Gjenta 2-4 ganger

**Viktig om PNF:**
- Krever vanligvis en treningspartner
- Mest effektiv for å øke bevegeligheten
- Bør utføres av personer med erfaring
- Ikke anbefalt for nybegynnere uten veiledning`,
    },
    {
      id: 'tr-6-2-text-ballistisk',
      type: 'text',
      title: 'Ballistisk tøyning',
      content: `**Ballistisk tøyning** innebærer raske, fjedrende bevegelser i ytterstilling av et bevegelsesutslag. Muskelen strekkes gjennom rask momentum.

**Eksempel:** Fjedrende fremoverbendbøyninger for å nå tærne.

**Bruksområder:**
- Kan brukes av erfarne utøvere i idretter som krever eksplosiv bevegelighet
- Har tradisjonelt blitt brukt i kampsport, dans og turn

**Ulemper og risiko:**
- Utløser strekkrefleksen, som kan føre til muskelkontraksjon i stedet for avslapning
- Større risiko for muskelskader sammenlignet med andre metoder
- Gir dårligere langsiktig forbedring enn statisk eller PNF-tøyning
- **Anbefales generelt ikke** for de fleste utøvere

Ballistisk tøyning bør kun brukes av erfarne utøvere under kyndig veiledning, og aldri på kalde muskler.`,
    },
    {
      id: 'tr-6-2-warning-statisk-for',
      type: 'warning',
      title: 'Statisk tøyning før trening',
      content: 'Forskning viser at langvarig statisk tøyning (over 60 sekunder per muskelgruppe) rett før trening kan redusere muskelstyrke og eksplosivitet midlertidig. Derfor anbefales det å bruke dynamisk tøyning som del av oppvarmingen, og heller spare statisk tøyning til etter trening eller som egen treningsøkt.',
    },
    {
      id: 'tr-6-2-tip-valg',
      type: 'tip',
      title: 'Velg riktig metode',
      content: 'Før trening: Bruk dynamisk tøyning. Etter trening: Bruk statisk tøyning. For maksimal bevegelighetsutvikling: Bruk PNF-tøyning. Unngå ballistisk tøyning med mindre du er erfaren og veiledes av en trener.',
    },
    {
      id: 'tr-6-2-example-1',
      type: 'example',
      title: 'Sammenligning av tøyningsmetoder',
      problem: 'En fotballspiller skal forbedre bevegeligheten i hamstrings (bakside lår). Hvilke tøyningsmetoder kan brukes, og når?',
      solution: `**Før trening (oppvarming):**
Dynamisk tøyning - beinsving fremover og bakover med gradvis økende utslag, 10-15 repetisjoner per bein. Dette varmer opp muskulaturen og forbereder nervesystemet.

**Etter trening (nedkjøling):**
Statisk tøyning - stående fremoverbendbøyning med strake bein, hold i 30 sekunder, 3 repetisjoner. Dette bidrar til å vedlikeholde og forbedre bevegeligheten.

**Egne bevegelighetstimer:**
PNF-tøyning med partner - liggende hamstringstøy med hold-slapp-teknikk, 3-4 repetisjoner. Gir størst bevegelighetsøkning per økt.

**Unngå:** Ballistisk tøyning (fjedrende fremoverbendbøyninger) da dette gir økt skaderisiko uten bedre effekt.`,
    },
    {
      id: 'tr-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken tøyningsmetode anbefales som del av oppvarmingen før trening?',
        options: [
          { id: 'a', text: 'Statisk tøyning i 60 sekunder per muskelgruppe', isCorrect: false },
          { id: 'b', text: 'Dynamisk tøyning med kontrollerte bevegelser', isCorrect: true },
          { id: 'c', text: 'Ballistisk tøyning med raske fjærbevegelser', isCorrect: false },
          { id: 'd', text: 'PNF-tøyning med treningspartner', isCorrect: false },
        ],
        solution: 'Dynamisk tøyning anbefales som del av oppvarmingen fordi den øker kroppstemperaturen, aktiverer muskulaturen og forbedrer nervesystemets aktivering uten å redusere muskelstyrken midlertidig, slik langvarig statisk tøyning kan gjøre.',
      },
    },
    {
      id: 'tr-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste prinsippet bak PNF-tøyning?',
        options: [
          { id: 'a', text: 'Raske, fjedrende bevegelser i ytterstilling', isCorrect: false },
          { id: 'b', text: 'Langvarig statisk hold i over 2 minutter', isCorrect: false },
          { id: 'c', text: 'Kombinasjon av muskelkontraksjon og tøyning for å utnytte nevromuskulære reflekser', isCorrect: true },
          { id: 'd', text: 'Bruk av tyngdekraften alene for å oppnå strekk', isCorrect: false },
        ],
        solution: 'PNF-tøyning utnytter nevromuskulære reflekser som autogen inhibisjon og resiprok inhibisjon. Ved å kombinere isometrisk kontraksjon med påfølgende tøyning, oppnår man økt avslapning i muskelen og dermed større bevegelsesutslag.',
      },
    },
    {
      id: 'tr-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom dynamisk og ballistisk tøyning. Hvorfor anbefales dynamisk tøyning, men ikke ballistisk?',
        solution: 'Dynamisk tøyning innebærer kontrollerte bevegelser gjennom bevegelsesutslaget med gradvis økende rekkevidde, mens ballistisk tøyning bruker raske, fjedrende bevegelser i ytterstilling. Dynamisk tøyning anbefales fordi bevegelsene er kontrollerte og ikke utløser strekkrefleksen, som gjør at muskelen spenner seg. Ballistisk tøyning utløser strekkrefleksen på grunn av den raske strekkingen, noe som kan føre til muskelkontraksjon i stedet for avslapning, og dermed økt skaderisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv steg for steg hvordan du utfører PNF-tøyning (hold-slapp-teknikken) for hamstrings.',
        solution: 'Steg 1: Ligg på ryggen mens en partner løfter beinet ditt opp med strakt kne til du kjenner et moderat strekk i bakside lår. Hold i 10 sekunder. Steg 2: Kontrahér hamstrings isometrisk ved å dytte beinet ned mot partneren (partneren holder imot) i 6-10 sekunder. Steg 3: Slapp helt av i 2-3 sekunder. Steg 4: Partneren løfter beinet forsiktig videre til en ny ytterstilling, og du holder den nye posisjonen i 15-30 sekunder. Steg 5: Gjenta syklusen 2-4 ganger. For hvert sett bør bevegelsesutslaget øke noe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Samleoppgave: Lag et tøyningsprogram for en håndballspiller som ønsker å forbedre bevegeligheten i skuldre og hofter. Forklar hvilke metoder du velger, når de skal utføres, og gi begrunnelse for valgene dine.',
        solution: 'Et tøyningsprogram for en håndballspiller bør inneholde tre komponenter: 1) Før trening (oppvarming): Dynamisk tøyning i 8-10 minutter med armrotasjoner, beinsving i alle retninger, høye kneløft og lunges med vridning. Begrunnelse: Dynamisk tøyning varmer opp muskulaturen og forbereder bevegelsesmønstrene som brukes i håndball, uten å redusere styrke og eksplosivitet. 2) Etter trening (nedkjøling): Statisk tøyning i 10-15 minutter med fokus på skuldertøyning (brysttøyning, bakside skulder, triceps) og hoftetøyning (hoftefleksorer, hamstrings, adduktorer). Hold 30 sekunder, 3 repetisjoner per øvelse. Begrunnelse: Statisk tøyning etter trening vedlikeholder bevegeligheten og kan bidra til raskere restitusjon. 3) Egne bevegelighetsøkter (2 ganger per uke): PNF-tøyning med partner for skulder og hofte, 3-4 sett per muskelgruppe. Begrunnelse: PNF er mest effektivt for å øke bevegeligheten over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Forklar de nevromuskulære mekanismene autogen inhibisjon og resiprok inhibisjon, og hvordan PNF-tøyning utnytter disse for å øke bevegeligheten.',
        solution: 'Autogen inhibisjon: Når en muskel kontraheres kraftig, registrerer Golgi-seneorganene i overgangen mellom muskel og sene den høye spenningen. De sender signaler via sensoriske nerver til ryggmargen, som svarer med å hemme (inhibere) den samme muskelen. Resultatet er at muskelen slapper av, noe som gjør den mer mottakelig for tøyning rett etterpå. Resiprok inhibisjon: Når en muskel (agonisten) kontraheres, sender nervesystemet automatisk signaler som hemmer den motstående muskelen (antagonisten). For eksempel: Når du kontraherer quadriceps, hemmes hamstrings automatisk. PNF-tøyning utnytter disse mekanismene ved å la utøveren kontraheres isometrisk i tøyningsstillingen (utløser autogen inhibisjon), etterfulgt av avslapning og videre tøyning. Enkelte PNF-varianter ber også utøveren om å kontrahere antagonisten (utløser resiprok inhibisjon). Kombinasjonen av disse mekanismene gir større avslapning og dermed økt bevegelsesutslag sammenlignet med vanlig statisk tøyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.3: Oppvarming og nedkjøling
// ============================================================================

export const CHAPTER_TRENING_1_6_3: TextbookChapter = {
  id: 'trening-1-6-3',
  courseId: 'trening-1',
  chapterNumber: '6.3',
  title: 'Oppvarming og nedkjøling',
  description: 'Generell og spesifikk oppvarming, fysiologiske effekter av oppvarming, og betydningen av nedkjøling etter trening.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forklare fysiologiske effekter av oppvarming',
    'skille mellom generell og spesifikk oppvarming',
    'planlegge og gjennomføre en hensiktsmessig oppvarming og nedkjøling',
  ],
  content: [
    {
      id: 'tr-6-3-intro',
      type: 'text',
      content: `# Oppvarming og nedkjøling

Oppvarming og nedkjøling er to viktige komponenter i enhver treningsøkt som ofte undervurderes. En god oppvarming forbereder kroppen fysisk og mentalt på den kommende aktiviteten, mens en strukturert nedkjøling hjelper kroppen med overgangen tilbake til hvile.

Forskning viser at korrekt oppvarming kan forbedre prestasjonen og redusere skaderisikoen, mens nedkjøling bidrar til raskere restitusjon.`,
    },
    {
      id: 'tr-6-3-def-oppvarming',
      type: 'definition',
      title: 'Oppvarming',
      content: 'Oppvarming er planlagt fysisk aktivitet som gjennomføres før hoveddelen av treningen. Formålet er å øke kroppstemperaturen, øke blodsirkulasjonen til muskulaturen, forberede nervesystemet og mentalt innstille seg på den kommende aktiviteten.',
    },
    {
      id: 'tr-6-3-text-fysiologiske',
      type: 'text',
      title: 'Fysiologiske effekter av oppvarming',
      content: `Når du varmer opp, skjer det en rekke viktige endringer i kroppen:

**Muskulatur og bindevev:**
- Økt muskeltemperatur gjør musklene mer elastiske og kraftfulle
- Redusert indre friksjon i muskelvevet
- Bedre tøyelighet i sener, leddbånd og fascia
- Raskere og kraftigere muskelkontraksjoner

**Hjerte-kar-systemet:**
- Økt hjertefrekvens og slagvolum
- Økt blodsirkulasjon til arbeidende muskulatur
- Utvidelse av blodkar (vasodilatasjon) i aktive muskler
- Bedre oksygentransport til muskelcellene

**Nervesystemet:**
- Raskere nerveledningshastighet
- Bedre koordinasjon og reaksjonsevne
- Økt proprioseptiv bevissthet (leddstillingssans)
- Skjerpet mental fokus

**Energisystemene:**
- Gradvis aktivering av aerob energifrigjøring
- Økt enzymaktivitet for energiproduksjon
- Bedre utnyttelse av fettsyrer som energikilde
- Redusert oksygengjeld i starten av hovedaktiviteten`,
    },
    {
      id: 'tr-6-3-text-generell',
      type: 'text',
      title: 'Generell oppvarming',
      content: `Den generelle oppvarmingen har som mål å øke kroppstemperaturen og den generelle blodsirkulasjonen. Den er ikke spesifikk for aktiviteten som følger.

**Kjennetegn:**
- Lavintensitetsaktivitet (50-60% av makspuls)
- Varighet: 5-15 minutter
- Involverer store muskelgrupper
- Gradvis økning i intensitet

**Eksempler på generell oppvarming:**
- Lett jogging
- Sykling på ergometersykkel
- Roing på romaskin
- Hopping på stedet
- Rask gange med armsvingninger

**Tegn på at du er tilstrekkelig oppvarmet:**
- Du er litt andpusten
- Du kjenner at kroppen er varm
- Du har fått litt svette
- Bevegelsene føles lettere og mer flytende`,
    },
    {
      id: 'tr-6-3-text-spesifikk',
      type: 'text',
      title: 'Spesifikk oppvarming',
      content: `Den spesifikke oppvarmingen kommer etter den generelle oppvarmingen og forbereder kroppen på de konkrete bevegelsene i hoveddelen av treningen.

**Kjennetegn:**
- Etterligner bevegelsesmønstrene i hovedaktiviteten
- Aktiverer de spesifikke muskelgruppene som skal brukes
- Gradvis økende intensitet mot treningsnivå
- Inkluderer dynamisk tøyning og aktiveringsøvelser

**Eksempler:**

*For styrketrening:*
- Lett sett med lavere vekt av øvelsene du skal gjøre
- Gradvis økning mot arbeidsvekt over 2-3 oppvarmingssett
- Aktiveringsøvelser for stabilisatorer

*For fotball:*
- Pasningsøvelser med gradvis økende intensitet
- Retningsendringer og vendinger
- Korte sprinter med økende fart

*For svømming:*
- Lett svømming med fokus på teknikk
- Beinarbeid og armarbeid isolert
- Gradvis økning av tempo

**FIFA 11+** er et eksempel på et vitenskapelig utviklet oppvarmingsprogram for fotball som har vist seg å redusere skadeforekomsten med opptil 30-50%.`,
    },
    {
      id: 'tr-6-3-note-mental',
      type: 'note',
      title: 'Mental oppvarming',
      content: 'Oppvarming handler ikke bare om det fysiske. Mental forberedelse er også viktig. Under oppvarmingen kan du visualisere gode prestasjoner, gå gjennom taktiske planer og sette deg inn i riktig fokus for treningen. Mange toppidrettsutøvere bruker bevisst mental oppvarming som en del av forberedelsesrutinen.',
    },
    {
      id: 'tr-6-3-def-nedkjoling',
      type: 'definition',
      title: 'Nedkjøling (cool-down)',
      content: 'Nedkjøling er en gradvis overgang fra høy til lav aktivitet etter trening. Formålet er å hjelpe kroppen med å returnere til hviletilstand, fremme restitusjonen, fjerne avfallsstoffer fra muskulaturen og redusere risikoen for stivhet og ømhet.',
    },
    {
      id: 'tr-6-3-text-nedkjoling',
      type: 'text',
      title: 'Nedkjøling i praksis',
      content: `En god nedkjøling bør gjennomføres etter enhver treningsøkt og inneholder vanligvis to deler:

**Del 1: Aktiv nedkjøling (5-10 minutter)**
- Gradvis reduksjon av intensiteten
- Lett jogging som overgang til gange
- Rolig sykling eller svømming
- Formål: Opprettholde blodsirkulasjonen for å fjerne laktat og andre avfallsstoffer

**Del 2: Tøyning og avspenning (5-10 minutter)**
- Statisk tøyning av de muskelgruppene som har vært aktive
- Hold 20-30 sekunder per strekk
- Fokus på rolig pusting og avspenning
- Eventuelt lett skumrulle for myofasciell utløsning

**Fysiologiske effekter av nedkjøling:**
- Forhindrer blodansamling i bena (venepumpeeffekten)
- Raskere fjerning av laktat og metabolitter
- Gradvis senking av hjertefrekvens og blodtrykk
- Kan bidra til redusert muskelstivhet påfølgende dag
- Mental avslutning av treningsøkten`,
    },
    {
      id: 'tr-6-3-warning-plutselig',
      type: 'warning',
      title: 'Ikke stopp brått',
      content: 'Å stoppe brått etter hard trening kan føre til svimmelhet, kvalme eller besvimelse. Dette skyldes at blodet samles i bena (blodansamling) når muskelpumpen plutselig stopper. Den aktive nedkjølingen sørger for at muskelpumpen fortsetter å drive blodet tilbake til hjertet.',
    },
    {
      id: 'tr-6-3-example-1',
      type: 'example',
      title: 'Komplett oppvarmingsplan for styrketrening',
      problem: 'Lag en oppvarmingsplan for en elev som skal trene knebøy, benkpress og markløft.',
      solution: `**Generell oppvarming (8 minutter):**
- 5 min lett jogging eller roing
- 3 min dynamisk tøyning: armrotasjoner, beinsving, hofteåpnere, trunk-rotasjoner

**Spesifikk oppvarming for knebøy:**
- 10 repetisjoner med kun stanga (20 kg)
- 8 repetisjoner med 40% av arbeidsvekt
- 5 repetisjoner med 60% av arbeidsvekt
- 3 repetisjoner med 80% av arbeidsvekt
- Deretter arbeidssett

**Spesifikk oppvarming for benkpress:**
- Samme prinsipp: gradvis økning fra tom stang til arbeidsvekt
- Inkluder skulderaktivering med minibånd

**Spesifikk oppvarming for markløft:**
- Hoftehengsler uten vekt
- Gradvis økning til arbeidsvekt

**Total oppvarmingstid:** ca. 15-20 minutter`,
    },
    {
      id: 'tr-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste fysiologiske effekten av oppvarming for muskulaturen?',
        options: [
          { id: 'a', text: 'Musklene blir permanent sterkere', isCorrect: false },
          { id: 'b', text: 'Økt muskeltemperatur gir mer elastiske og kraftfulle muskler', isCorrect: true },
          { id: 'c', text: 'Musklene bruker mindre oksygen', isCorrect: false },
          { id: 'd', text: 'Muskelfibrene øker i antall', isCorrect: false },
        ],
        solution: 'Økt muskeltemperatur er den viktigste effekten av oppvarming. Varmere muskler er mer elastiske, kontraherer raskere og kraftigere, og har lavere indre friksjon. Dette forbedrer prestasjonen og reduserer skaderisikoen.',
      },
    },
    {
      id: 'tr-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom generell og spesifikk oppvarming?',
        options: [
          { id: 'a', text: 'Generell oppvarming er for nybegynnere, spesifikk er for viderekomne', isCorrect: false },
          { id: 'b', text: 'Generell oppvarming øker kroppstemperaturen, spesifikk forbereder de konkrete bevegelsene for aktiviteten', isCorrect: true },
          { id: 'c', text: 'Det er ingen forskjell, begge handler om å løpe', isCorrect: false },
          { id: 'd', text: 'Spesifikk oppvarming gjøres først, deretter generell', isCorrect: false },
        ],
        solution: 'Generell oppvarming har som mål å øke kroppstemperaturen og blodsirkulasjonen gjennom lavintensitetsaktivitet. Spesifikk oppvarming kommer etterpå og forbereder de konkrete muskelgruppene og bevegelsesmønstrene som skal brukes i hoveddelen av treningen.',
      },
    },
    {
      id: 'tr-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig med aktiv nedkjøling etter hard trening, og hva som kan skje hvis man stopper brått.',
        solution: 'Aktiv nedkjøling er viktig fordi den opprettholder muskelpumpen, som hjelper med å pumpe blodet tilbake til hjertet. Under hard trening er blodkarene i arbeidende muskler utvidet, og mye blod befinner seg i bena. Hvis man stopper brått, slutter muskelpumpen å fungere, og blodet samles i bena (blodansamling). Dette kan føre til svimmelhet, kvalme eller besvimelse fordi hjernen får for lite blod. I tillegg bidrar aktiv nedkjøling til raskere fjerning av laktat og andre avfallsstoffer, og kan redusere muskelstivhet påfølgende dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-6-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et tegn på at du er tilstrekkelig oppvarmet?',
        options: [
          { id: 'a', text: 'Du er helt utslitt og andpusten', isCorrect: false },
          { id: 'b', text: 'Du er litt andpusten, varm og har fått litt svette', isCorrect: true },
          { id: 'c', text: 'Du føler deg fortsatt kald og stiv', isCorrect: false },
          { id: 'd', text: 'Pulsen er over 90% av makspuls', isCorrect: false },
        ],
        solution: 'En tilstrekkelig oppvarming kjennetegnes av at du er litt andpusten, kroppen føles varm, du har fått litt svette, og bevegelsene føles lettere og mer flytende. Du skal ikke være utmattet - målet er å forberede kroppen, ikke å bruke opp energien før hoveddelen.',
      },
    },
    {
      id: 'tr-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Samleoppgave: Gjør rede for alle de fysiologiske effektene av oppvarming, og forklar hvordan de bidrar til bedre prestasjon og lavere skaderisiko.',
        solution: 'Oppvarming påvirker fire hovdsystemer: 1) Muskulatur og bindevev: Økt temperatur gir mer elastiske muskler, redusert indre friksjon, bedre tøyelighet i sener og leddbånd, og raskere muskelkontraksjoner. Dette betyr at musklene kan produsere mer kraft og er mer motstandsdyktige mot skader. 2) Hjerte-kar-systemet: Økt hjertefrekvens og slagvolum, vasodilatasjon og bedre oksygentransport sørger for at musklene får nok oksygen og næringsstoffer under aktivitet. 3) Nervesystemet: Raskere nerveledningshastighet, bedre koordinasjon og reaksjonsevne, økt proprioseptiv bevissthet og skjerpet mentalt fokus gjør at utøveren kan reagere raskere og utføre bevegelser mer presist. 4) Energisystemene: Gradvis aktivering av aerob energifrigjøring og økt enzymaktivitet reduserer oksygengjelden og forbedrer energiproduksjonen. Samlet gir dette forbedret prestasjon gjennom kraftigere og raskere bevegelser, bedre koordinasjon og energiutnyttelse, samt lavere skaderisiko gjennom mer elastisk vev og bedre nevromuskulær kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg en komplett oppvarming og nedkjøling for en basketballtrening. Begrunn valgene dine med fysiologiske prinsipper.',
        solution: 'Oppvarming (15-18 minutter): Generell del (6 min): Lett jogging i forskjellige retninger og tempo, gradvis økning i intensitet. Begrunnelse: Øker kroppstemperatur og blodsirkulasjon. Dynamisk tøyning (4 min): Beinsving, hofteåpnere, armrotasjoner, sidesteg, lunges med vridning. Begrunnelse: Forbereder ledd og muskulatur gjennom hele bevegelsesutslaget uten å redusere styrke. Spesifikk del (6-8 min): Dribling i ulike tempoer, pasningsøvelser, lette sprinter med retningsendringer, skuddøvelser med økende intensitet. Begrunnelse: Aktiverer de spesifikke bevegelsesmønstrene og muskelgruppene som brukes i basketball, og skjerper nervesystemets koordinasjon. Nedkjøling (10-12 minutter): Aktiv del (5 min): Gradvis overgang fra lett jogging til gange, eventuelt med ball. Begrunnelse: Opprettholder muskelpumpen for å forhindre blodansamling og fremme fjerning av avfallsstoffer. Tøyning og avspenning (5-7 min): Statisk tøyning av legger, quadriceps, hamstrings, hoftefleksorer, skuldre og ryggen. Hold 25-30 sekunder. Begrunnelse: Bidrar til å vedlikeholde bevegeligheten og gir mental avslutning på treningsøkten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.4: Mobilitetstrening
// ============================================================================

export const CHAPTER_TRENING_1_6_4: TextbookChapter = {
  id: 'trening-1-6-4',
  courseId: 'trening-1',
  chapterNumber: '6.4',
  title: 'Mobilitetstrening',
  description: 'Leddmobilitet, myofasciell utløsning med skumrulle, og praktiske mobilitetsøvelser for ulike kroppsregioner.',
  estimatedMinutes: 23,
  competenceGoals: [
    'forklare forskjellen mellom bevegelighet og mobilitet',
    'beskrive prinsipper for myofasciell utløsning og bruk av skumrulle',
    'gjennomføre mobilitetstrening for ulike ledd og bevegelseskjeder',
  ],
  content: [
    {
      id: 'tr-6-4-intro',
      type: 'text',
      content: `# Mobilitetstrening

Mobilitetstrening har de siste årene fått en stadig viktigere plass i treningsverdenen. Mens bevegelighet handler om hvor langt du kan strekke en muskel, handler mobilitet om evnen til å bevege et ledd aktivt gjennom hele bevegelsesutslaget med kontroll og styrke.

God mobilitet er avgjørende for å kunne utføre treningsøvelser med riktig teknikk, forebygge kompensasjonsmønstre og redusere skaderisikoen. I dette kapittelet lærer du om leddmobilitet, myofasciell utløsning og praktiske øvelser.`,
    },
    {
      id: 'tr-6-4-def-mobilitet',
      type: 'definition',
      title: 'Mobilitet',
      content: 'Mobilitet er evnen til å bevege et ledd aktivt gjennom det fulle bevegelsesutslaget med kontroll, styrke og stabilitet. Til forskjell fra bevegelighet (som kun handler om passivt bevegelsesutslag) krever mobilitet at du har nevromuskulær kontroll i hele bevegelseskjeden. Mobilitet = bevegelighet + styrke + kontroll.',
    },
    {
      id: 'tr-6-4-text-forskjell',
      type: 'text',
      title: 'Mobilitet vs. bevegelighet',
      content: `Det er viktig å forstå forskjellen mellom mobilitet og bevegelighet:

**Bevegelighet (fleksibilitet):**
- Passivt bevegelsesutslag i et ledd
- Kan oppnås med ytre hjelp
- Fokus på muskelens lengde
- Måles med tøyningstester

**Mobilitet:**
- Aktivt bevegelsesutslag med kontroll
- Krever egen muskelkraft og stabilitet
- Fokus på hele bevegelseskjeden: ledd, muskler, fascia og nervesystem
- Måles gjennom funksjonelle bevegelsestester

**Eksempel:** Du kan kanskje løfte beinet passivt til 140 grader (god bevegelighet), men hvis du bare kan løfte det til 90 grader med egen kontroll (begrenset mobilitet), er det mobilitetstrening du trenger - ikke mer passiv tøyning.

God mobilitet innebærer at du har:
- Tilstrekkelig bevegelighet i muskulaturen
- Styrke til å kontrollere bevegelsen
- Stabilitet i de omkringliggende leddene
- God nevromuskulær koordinasjon`,
    },
    {
      id: 'tr-6-4-def-fascia',
      type: 'definition',
      title: 'Fascia (bindevevshinner)',
      content: 'Fascia er et sammenhengende nettverk av bindevev som omgir og forbinder muskler, organer, nerver og blodkar i hele kroppen. Fascia kan bli stiv, dehydrert eller utvikle sammenvoksinger (adhesjoner) ved inaktivitet, skader eller overbelastning, noe som begrenser bevegelsesutslaget og kan forårsake smerte.',
    },
    {
      id: 'tr-6-4-text-leddmobilitet',
      type: 'text',
      title: 'Leddmobilitet',
      content: `Leddmobilitet handler om å forbedre bevegelsesutslaget i spesifikke ledd gjennom aktive øvelser. Hvert ledd har sine egne mobilitetsbehov:

**Ankelmobilitet:**
- Viktig for knebøy, løping og hopp
- Begrenset dorsalfleksjon er en vanlig mobilitetsbegrensning
- Øvelser: knestående ankelmobilisering mot vegg, ankelsirkler

**Hoftemobilitet:**
- Avgjørende for knebøy, markløft og løping
- Hoften er et kuleledd med potensial for stort bevegelsesutslag
- Øvelser: 90/90-stilling, hofteåpnere, kontrollert benløft i alle retninger

**Brystyggmobilitet (thorakal mobilitet):**
- Viktig for rotasjonsbevegelser, overhead-øvelser og holdning
- Stillesittende livsstil fører ofte til stiv brystrygg
- Øvelser: brystrygg-rotasjon i firfotsstilling, katt/ku-øvelsen, foamroller-ekstensjon

**Skuldermobilitet:**
- Nødvendig for overhead-press, svømming og kastbevegelser
- Skulderen er kroppens mest bevegelige ledd, men også mest ustabile
- Øvelser: veggengel, passthroughs med stav, kontrollerte armrotasjoner`,
    },
    {
      id: 'tr-6-4-text-myofasciell',
      type: 'text',
      title: 'Myofasciell utløsning',
      content: `**Myofasciell utløsning** (self-myofascial release) er en teknikk for å løse opp spenninger og adhesjoner i muskulatur og fascia. Den vanligste metoden er bruk av skumrulle (foam roller), men lacrosseballer og massasjepistoler brukes også.

**Hvordan virker det?**
- Trykk mot stramme områder stimulerer Golgi-seneorganene
- Dette fører til reflektorisk avslapning av muskulaturen
- Bedrer blodsirkulasjonen lokalt
- Kan bryte opp adhesjoner mellom fascia og muskulatur
- Øker vevets hydrering og fleksibilitet

**Triggerpunkter:**
Et triggerpunkt er et hypersensitivt, stramt område i en muskel som kan gi smerter lokalt eller i andre deler av kroppen (referert smerte). Myofasciell utløsning kan hjelpe med å redusere triggerpunkter.`,
    },
    {
      id: 'tr-6-4-text-skumrulle',
      type: 'text',
      title: 'Bruk av skumrulle',
      content: `**Retningslinjer for skumrulling:**

**Teknikk:**
1. Plasser den aktuelle muskelgruppen på skumrullen
2. Bruk kroppsvekten for å skape trykk
3. Rull sakte (2-3 cm per sekund) over muskelgruppen
4. Når du finner et ømt punkt, stopp og hold trykket i 20-30 sekunder
5. Beveg videre når smerten avtar

**Vanlige muskelgrupper å rulle:**
- Quadriceps (framsiden av låret)
- IT-båndet (utsiden av låret)
- Hamstrings (baksiden av låret)
- Legger (gastrocnemius og soleus)
- Øvre rygg (thorakal region)
- Gluteale muskler (setemuskulaturen)

**Dos:**
- Rull før og/eller etter trening
- Bruk 1-2 minutter per muskelgruppe
- Pust rolig og dyp
- Kombiner med mobilitetstrening etterpå

**Don'ts:**
- Rull aldri direkte over ledd eller bein
- Unngå å rulle over korsryggen
- Ikke rull over akutte skader eller betennelser
- Ikke hold pusten - det øker muskelspenningen`,
    },
    {
      id: 'tr-6-4-tip-daglig',
      type: 'tip',
      title: 'Daglig mobilitet',
      content: 'Du trenger ikke sette av lang tid til mobilitetstrening. 5-10 minutter daglig mobilitet kan gjøre stor forskjell over tid. Velg 3-4 øvelser som adresserer dine svakeste punkter og gjør dem konsekvent. Mange utøvere gjør mobilitetsøvelser som en del av morgenrutinen eller som pauser i arbeidsdagen.',
    },
    {
      id: 'tr-6-4-example-1',
      type: 'example',
      title: 'Mobilitetsrutine for knebøy',
      problem: 'En elev sliter med å komme dypt nok i knebøy. Hvilke mobilitetsbegrensninger kan være årsaken, og hvordan kan de adresseres?',
      solution: `**Vanlige mobilitetsbegrensninger i knebøy:**

1. **Begrenset ankelmobilitet** (dorsalfleksjon)
   - Test: Knestående ankeltest mot vegg (bør klare 10-12 cm avstand)
   - Øvelse: Knestående ankelmobilisering, 2 min per side

2. **Stramme hoftefleksorer**
   - Test: Thomas-testen (liggende på benk)
   - Øvelse: Halvkneløft med hoftefleksorstøyning, 60 sek per side

3. **Stiv brystrygg**
   - Test: Veggtest for thorakal mobilitet
   - Øvelse: Skumrullekstensjon over brystrygg, 2 min

4. **Stramme adduktorer**
   - Test: Bred knebøy med kontroll
   - Øvelse: Kosakkknebøy, 10 rep per side

**Mobilitetsprogram (10 min før knebøy):**
- Skumrulle quadriceps og adduktorer (2 min)
- Ankelmobilisering mot vegg (2 min)
- 90/90 hofterotasjon (2 min)
- Goblet squat hold (30 sek x 3)`,
    },
    {
      id: 'tr-6-4-warning-smerte',
      type: 'warning',
      title: 'Smerte vs. ubehag',
      content: 'Det er viktig å skille mellom ubehag og smerte under mobilitetstrening og skumrulling. Et moderat ubehag (som en \"god ømhet\") er normalt og akseptabelt. Skarp, stikkende eller intens smerte er et varselsignal og betyr at du bør stoppe eller redusere trykket. Mobilitetstrening skal aldri gjøre vondt.',
    },
    {
      id: 'tr-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom mobilitet og bevegelighet?',
        options: [
          { id: 'a', text: 'Mobilitet handler om passivt bevegelsesutslag, bevegelighet om aktivt', isCorrect: false },
          { id: 'b', text: 'Mobilitet krever aktivt bevegelsesutslag med kontroll og styrke, bevegelighet er passivt utslag', isCorrect: true },
          { id: 'c', text: 'Mobilitet og bevegelighet betyr det samme', isCorrect: false },
          { id: 'd', text: 'Mobilitet handler kun om styrke, bevegelighet kun om tøyning', isCorrect: false },
        ],
        solution: 'Mobilitet er evnen til å bevege et ledd aktivt gjennom hele bevegelsesutslaget med kontroll, styrke og stabilitet. Bevegelighet handler kun om passivt bevegelsesutslag. Mobilitet = bevegelighet + styrke + kontroll.',
      },
    },
    {
      id: 'tr-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en viktig regel å følge når du bruker skumrulle?',
        options: [
          { id: 'a', text: 'Rull så raskt som mulig for best effekt', isCorrect: false },
          { id: 'b', text: 'Rull alltid direkte over ledd for å løse dem opp', isCorrect: false },
          { id: 'c', text: 'Stopp på ømme punkter og hold trykket i 20-30 sekunder', isCorrect: true },
          { id: 'd', text: 'Hold pusten for å øke trykket', isCorrect: false },
        ],
        solution: 'Når du finner et ømt punkt (triggerpunkt) under skumrulling, bør du stoppe og holde trykket i 20-30 sekunder. Dette stimulerer Golgi-seneorganene og fører til reflektorisk avslapning. Man skal aldri rulle over ledd eller bein, og man bør puste rolig gjennom hele prosessen.',
      },
    },
    {
      id: 'tr-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva fascia er, og hvordan myofasciell utløsning kan forbedre mobiliteten.',
        solution: 'Fascia er et sammenhengende nettverk av bindevev som omgir og forbinder muskler, organer, nerver og blodkar i hele kroppen. Fascia kan bli stiv, dehydrert eller utvikle sammenvoksinger (adhesjoner) ved inaktivitet, skader eller overbelastning. Myofasciell utløsning virker ved at trykk mot stramme områder stimulerer Golgi-seneorganene, som fører til reflektorisk avslapning av muskulaturen. I tillegg bedres blodsirkulasjonen lokalt, adhesjoner mellom fascia og muskulatur kan brytes opp, og vevets hydrering og fleksibilitet øker. Resultatet er bedre bevegelsesutslag og redusert smerte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg ett ledd (ankel, hofte, brystrygg eller skulder) og beskriv hvorfor god mobilitet i dette leddet er viktig for trening. Gi eksempler på øvelser som kan forbedre mobiliteten.',
        solution: 'Eksempel med hoftemobilitet: God hoftemobilitet er avgjørende for mange treningsøvelser som knebøy, markløft, utfall og løping. Hoften er et kuleledd med potensial for stort bevegelsesutslag i alle retninger (fleksjon, ekstensjon, abduksjon, adduksjon, innadrotasjon og utadrotasjon). Begrenset hoftemobilitet kan føre til kompensasjonsmønstre som overdreven korsryggbevegelse (lumbal kompensasjon), knekollaps (valgus) eller begrenset bevegelsesdybde. Øvelser for hoftemobilitet: 90/90-stilling med veksling mellom innad- og utadrotasjon, halvkneløft med hoftefleksorstøyning, kosakkknebøy for adduktormobilitet, kontrollert benløft i alle retninger for aktiv mobilitet, og hofteåpnere med kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Samleoppgave: En person som jobber på kontor hele dagen opplever stivhet i skuldre og rygg. Lag et mobilitets- og skumrulleprogram på 10-15 minutter som kan gjennomføres daglig. Begrunn valgene dine.',
        solution: 'Daglig mobilitetsprogram for kontorarbeider (12 minutter): Del 1 - Skumrulling (4 min): Øvre rygg (thorakal region) med rulling opp og ned, fokus på ømme punkter, 1,5 min. Begrunnelse: Stillesitting fører til stiv brystrygg og fremoverlent holdning. Brystmuskulatur med skumrulle eller ball mot vegg, 1 min per side. Begrunnelse: Stram brystmuskulatur trekker skuldrene fremover. Nakke og skulderbladmuskulatur med lacrosseball mot vegg, 1,5 min. Begrunnelse: Løser opp spenning fra statisk holdning. Del 2 - Mobilitetstrening (8 min): Brystrygg-rotasjon i sideliggende stilling, 10 rep per side (2 min). Begrunnelse: Gjenoppretter rotasjonsmobilitet som går tapt ved stillesitting. Katt/ku-øvelse i firfotsstilling, 10 repetisjoner (1,5 min). Begrunnelse: Mobiliserer hele ryggsøylen gjennom fleksjon og ekstensjon. Veggengel (wall angels), 10 repetisjoner (2 min). Begrunnelse: Trener skuldermobilitet med aktiv kontroll og styrker holdningsmuskulaturen. Halvkneløft med hoftefleksorstøyning og armer over hodet, 30 sek per side (1,5 min). Begrunnelse: Tøyer stramme hoftefleksorer fra sitting og kombinerer med overhead-mobilitet. Nakkerotasjon og sidebøy, 5 rep hver retning (1 min). Begrunnelse: Vedlikeholder nakkemobilitet. Programmet adresserer de vanligste problemene ved kontorarbeid: stiv brystrygg, stramme brystmuskler, svak holdningsmuskulatur, stramme hoftefleksorer og spent nakke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Diskuter forholdet mellom mobilitet, styrke og skadeforebygging. Hvorfor er det ikke nok å bare være tøyelig for å unngå skader?',
        solution: 'Det er ikke nok å bare være tøyelig for å unngå skader fordi bevegelighet uten kontroll kan være farligere enn begrenset bevegelighet. Mobilitet innebærer at du har styrke og nevromuskulær kontroll gjennom hele bevegelsesutslaget, ikke bare passiv lengde i muskulaturen. En person med god bevegelighet men dårlig styrke i ytterposisjonene har en stor \"bevegelighetsreserve\" - en sone der de mangler muskulær beskyttelse. Det er i denne sonen de fleste skader oppstår, for eksempel strekkskader, luksasjoner eller leddbåndskader. Styrke i ytterposisjonene fungerer som en \"airbag\" for leddene. Derfor er mobilitetstrening, som kombinerer bevegelighet med styrke og kontroll, mer effektivt for skadeforebygging enn ren tøyning. Et godt eksempel er skulderen: hypermobile utøvere som mangler styrke i skuldrens stabilisatorer, har høyere risiko for skulderskader enn utøvere med moderat bevegelighet men god styrke og kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 6.5: Skadeforberedelse
// ============================================================================

export const CHAPTER_TRENING_1_6_5: TextbookChapter = {
  id: 'trening-1-6-5',
  courseId: 'trening-1',
  chapterNumber: '6.5',
  title: 'Skadeforberedelse',
  description: 'Vanlige idrettsskader, forebygging, akuttbehandling med RICE/PRICE-prinsippet, og grunnleggende rehabilitering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for vanlige idrettsskader og årsaker til disse',
    'beskrive prinsipper for skadeforebygging',
    'forklare RICE/PRICE-prinsippet for akuttbehandling',
    'forstå grunnleggende rehabiliteringsprinsipper etter skade',
  ],
  content: [
    {
      id: 'tr-6-5-intro',
      type: 'text',
      content: `# Skadeforberedelse

Idrettsskader er en uunngåelig del av fysisk aktivitet, men gjennom riktig kunnskap og forebygging kan risikoen reduseres betraktelig. I dette kapittelet ser vi på de vanligste idrettsskadene, hva som forårsaker dem, hvordan de kan forebygges, og hva du gjør når skaden først har oppstått.

Å forstå skademekanismer og forebyggende tiltak er viktig kunnskap for alle som driver med trening og idrett, enten du er utøver, trener eller lærer.`,
    },
    {
      id: 'tr-6-5-def-akutt',
      type: 'definition',
      title: 'Akutt skade',
      content: 'En akutt skade oppstår plutselig som følge av en enkelt hendelse, for eksempel et fall, en vridning eller et slag. Eksempler inkluderer forstuet ankel, korsbåndskade og muskelstrekk. Akutte skader kjennetegnes av plutselig smerte, hevelse og eventuelt blåmerker.',
    },
    {
      id: 'tr-6-5-def-belastning',
      type: 'definition',
      title: 'Belastningsskade (overbruksskade)',
      content: 'En belastningsskade utvikler seg gradvis over tid som følge av gjentatt belastning uten tilstrekkelig restitusjon. Eksempler inkluderer senebetennelse, stressfraktur og løperkne. Belastningsskader kjennetegnes av gradvis økende smerte under aktivitet.',
    },
    {
      id: 'tr-6-5-text-vanlige',
      type: 'text',
      title: 'Vanlige idrettsskader',
      content: `**Muskelskader:**
- **Muskelstrekk:** Delvis ruptur av muskelfibre, graderes I-III
  - Grad I: Få fibre skadet, mild smerte, liten funksjonstap
  - Grad II: Betydelig antall fibre skadet, moderat smerte og hevelse
  - Grad III: Fullstendig ruptur, sterk smerte, fullstendig funksjonstap
- **Muskelkrampe:** Ufrivillig, smertefullt muskelsammentrekning
- **Stølhet (DOMS):** Forsinket muskelømhet 24-72 timer etter uvant belastning

**Seneskader:**
- **Senebetennelse (tendinitt):** Betennelse i senen, ofte ved overbelastning
- **Senedegenerasjon (tendinose):** Kronisk nedbrytning av senevev
- **Seneruptur:** Fullstendig avrivning av senen (f.eks. akillesruptur)

**Leddskader:**
- **Forstuelse (distorsjon):** Tøyning eller ruptur av leddbånd
- **Luksasjon:** Leddflaten glir ut av sin normale posisjon
- **Meniskskade:** Skade på bruskskivene i kneet
- **Korsbåndskade:** Ruptur av fremre eller bakre korsbånd i kneet

**Beinskader:**
- **Brudd (fraktur):** Brudd på knokkel, fra stressfraktur til komplett brudd
- **Periostbetennelse (benhinnebetennelse):** Betennelse i beinhinnen, vanlig i leggen`,
    },
    {
      id: 'tr-6-5-text-aarsaker',
      type: 'text',
      title: 'Årsaker til idrettsskader',
      content: `Idrettsskader oppstår når belastningen overstiger vevets tåleevne. Årsakene kan deles i indre og ytre faktorer:

**Indre (personlige) risikofaktorer:**
- Utilstrekkelig oppvarming
- Dårlig teknikk og bevegelsesmønstre
- Muskulær ubalanse mellom agonist og antagonist
- Redusert bevegelighet eller mobilitet
- Tidligere skader som ikke er fullstendig rehabilitert
- Generell dårlig fysisk form
- Alder, kjønn og anatomiske forhold
- Overtrening og utilstrekkelig restitusjon

**Ytre risikofaktorer:**
- Uegnet underlag (glatt, hardt, ujevnt)
- Feil eller slitt utstyr (sko, beskyttelse)
- Dårlige treningsforhold (vær, temperatur)
- For rask økning i treningsmengde
- Manglende veiledning
- Kontakt med andre spillere (i lagidrett)`,
    },
    {
      id: 'tr-6-5-text-forebygging',
      type: 'text',
      title: 'Skadeforebygging',
      content: `Effektiv skadeforebygging krever en helhetlig tilnærming:

**1. Riktig oppvarming**
- Alltid generell og spesifikk oppvarming før trening
- Dynamisk tøyning som del av oppvarmingen
- Gradvis økning av intensitet

**2. Progresjon og periodisering**
- Følg 10%-regelen: Øk treningsmengden med maks 10% per uke
- Varier treningen for å unngå ensidig belastning
- Planlegg restitusjonsperioder

**3. Styrke og stabilitet**
- Tren styrke i stabiliserende muskulatur
- Balanser styrkeforholdet mellom agonist og antagonist
- Fokus på core-stabilitet og leddstabilitet

**4. Mobilitet og bevegelighet**
- Vedlikehold god mobilitet i alle ledd
- Tøyning etter trening
- Regelmessig mobilitetstrening

**5. Riktig teknikk**
- Lær riktig teknikk fra starten
- Ikke øk belastningen før teknikken er god
- Søk veiledning ved usikkerhet

**6. Utstyr og ytre forhold**
- Bruk riktig fottøy for aktiviteten
- Bruk beskyttelsesutstyr der det er påkrevd
- Tilpass treningen til forholdene`,
    },
    {
      id: 'tr-6-5-note-10prosent',
      type: 'note',
      title: '10%-regelen',
      content: 'En viktig tommelfingerregel for å unngå belastningsskader er å ikke øke total treningsmengde (distanse, volum, eller tid) med mer enn 10% fra uke til uke. For raske økninger er den vanligste årsaken til belastningsskader hos mosjonister og utøvere som trapper opp treningen.',
    },
    {
      id: 'tr-6-5-def-price',
      type: 'definition',
      title: 'PRICE-prinsippet',
      content: 'PRICE er et akronym for akuttbehandling av bløtdelsskader: Protection (beskyttelse), Rest (hvile), Ice (is/kulde), Compression (kompresjon/trykk) og Elevation (elevasjon/heve skadet kroppsdel). PRICE er en utvidelse av det eldre RICE-prinsippet, der Protection er lagt til.',
    },
    {
      id: 'tr-6-5-text-price',
      type: 'text',
      title: 'PRICE-prinsippet i detalj',
      content: `Når en akutt bløtdelsskade oppstår (forstuelse, muskelstrekk, kontusjon), bør PRICE-prinsippet iverksettes så raskt som mulig:

**P - Protection (Beskyttelse)**
- Beskytt det skadde området mot ytterligere skade
- Stopp aktiviteten umiddelbart
- Bruk krykker, fatle eller annen støtte om nødvendig

**R - Rest (Hvile)**
- Hvil det skadde området de første 24-72 timene
- Unngå aktiviteter som provoserer smerte
- Relativ hvile: beveg deg innen smertegrensen

**I - Ice (Is/kulde)**
- Legg is eller kuldepakning på det skadde området
- 15-20 minutter om gangen, med minst 1 time mellom hver behandling
- Bruk alltid et klede mellom is og hud for å unngå frostskader
- Kulde reduserer hevelse, blødning og smerte

**C - Compression (Kompresjon)**
- Legg elastisk bandasje rundt det skadde området
- Kompresjon reduserer hevelse og blødning
- Bandasjen skal være fast, men ikke stram nok til å hindre blodsirkulasjon
- Sjekk at fingre/tær har normal farge og følelse

**E - Elevation (Elevasjon)**
- Hev det skadde området over hjertehøyde
- Reduserer hevelse ved hjelp av tyngdekraften
- Kombiner med hvile og is for best effekt

**Tidsramme:** PRICE bør følges de første 48-72 timene etter skaden. Deretter kan forsiktig bevegelse innenfor smertegrensen starte.`,
    },
    {
      id: 'tr-6-5-warning-legevurdering',
      type: 'warning',
      title: 'Oppsøk lege ved alvorlige skader',
      content: 'PRICE-prinsippet er førstehjelp for bløtdelsskader. Ved mistanke om brudd, luksasjon, alvorlige leddbåndskader, hodeskade eller dersom smerte og hevelse ikke avtar etter 48-72 timer, bør lege eller annen helsepersonell kontaktes. Ikke forsøk å behandle alvorlige skader selv.',
    },
    {
      id: 'tr-6-5-text-rehabilitering',
      type: 'text',
      title: 'Rehabilitering etter skade',
      content: `Rehabilitering er prosessen med å gjenvinne full funksjon etter en skade. God rehabilitering er avgjørende for å komme tilbake til aktivitet og forebygge ny skade.

**Fasene i rehabilitering:**

**Fase 1: Akuttfasen (0-72 timer)**
- PRICE-behandling
- Beskytte skadet vev
- Redusere betennelse og hevelse
- Opprettholde funksjon i resten av kroppen

**Fase 2: Mobiliseringsfasen (3 dager - 3 uker)**
- Forsiktig bevegelse innenfor smertegrensen
- Gradvis økning av bevegelsesutslag
- Lett styrketrening for omkringliggende muskulatur
- Isometriske øvelser i skadet muskelgruppe

**Fase 3: Oppbyggingsfasen (3-12 uker)**
- Progressiv styrketrening
- Gjenopprette full bevegelighet og mobilitet
- Proprioseptiv trening (balansetrening)
- Gradvis tilbakevending til idrettsspesifikk trening

**Fase 4: Tilbake til aktivitet**
- Idrettsspesifikk trening med full intensitet
- Psykologisk beredskap for å returnere til konkurranse
- Forebyggende program for å unngå re-skade
- Oppfølging og vedlikehold

**Viktig prinsipp:** Rehabiliteringen bør følge prinsippet om gradvis progresjon - aldri hopp over faser eller forhastet tilbakevending.`,
    },
    {
      id: 'tr-6-5-tip-forebygging',
      type: 'tip',
      title: 'Den beste behandlingen er forebygging',
      content: 'De fleste idrettsskader kan forebygges gjennom riktig oppvarming, god teknikk, tilstrekkelig restitusjon, progressiv treningsøkning og styrke- og mobilitetstrening. Å investere tid i forebygging er mye bedre enn å bruke måneder på rehabilitering etter en skade.',
    },
    {
      id: 'tr-6-5-example-1',
      type: 'example',
      title: 'Håndtering av forstuet ankel',
      problem: 'En medelev vrir ankelen under en fotballkamp. Forklar trinn for trinn hva du gjør.',
      solution: `**Akuttbehandling (PRICE):**

1. **Protection:** Hjelp eleven av banen. Unngå å belaste ankelen.
2. **Rest:** Sett eleven ned. Fjern skoene forsiktig mens det ennå er mulig (før hevelsen tiltar).
3. **Ice:** Legg ispose eller kuldepakke rundt ankelen med et klede imellom. 15-20 minutter.
4. **Compression:** Legg elastisk bandasje rundt ankelen med moderat trykk. Start fra tærne og jobb oppover.
5. **Elevation:** Legg ankelen høyere enn hjertet - for eksempel med foten på en benk mens eleven ligger ned.

**Vurdering av alvorlighetsgrad:**
- Kan eleven belaste foten i det hele tatt? (Hvis nei: mulig alvorlig skade)
- Er det feilstilling? (Hvis ja: mulig brudd, ring 113)
- Er hevelsen stor og umiddelbar? (Kan tyde på alvorlig båndskade)

**Videre oppfølging:**
- Fortsett PRICE i 48-72 timer
- Hvis smerte og hevelse ikke avtar: oppsøk lege
- Når smerten tillater det: forsiktig bevegelse og belastning`,
    },
    {
      id: 'tr-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en akutt skade og en belastningsskade?',
        options: [
          { id: 'a', text: 'Akutte skader er alvorligere enn belastningsskader', isCorrect: false },
          { id: 'b', text: 'Akutte skader oppstår plutselig, belastningsskader utvikler seg gradvis over tid', isCorrect: true },
          { id: 'c', text: 'Belastningsskader oppstår kun i bein, akutte kun i muskler', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, begge skyldes overbelastning', isCorrect: false },
        ],
        solution: 'En akutt skade oppstår plutselig som følge av en enkelt hendelse (f.eks. fall eller vridning), mens en belastningsskade (overbruksskade) utvikler seg gradvis over tid som følge av gjentatt belastning uten tilstrekkelig restitusjon. Begge kan være alvorlige, men de har ulike årsaker og krever ulik tilnærming.',
      },
    },
    {
      id: 'tr-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva står bokstavene i PRICE for?',
        options: [
          { id: 'a', text: 'Power, Resistance, Intensity, Control, Endurance', isCorrect: false },
          { id: 'b', text: 'Protection, Rest, Ice, Compression, Elevation', isCorrect: true },
          { id: 'c', text: 'Prevention, Recovery, Improvement, Care, Exercise', isCorrect: false },
          { id: 'd', text: 'Pain, Rest, Ice, Cold, Exercise', isCorrect: false },
        ],
        solution: 'PRICE står for Protection (beskyttelse), Rest (hvile), Ice (is/kulde), Compression (kompresjon/trykk) og Elevation (elevasjon/heve skadet kroppsdel). Dette er den anbefalte akuttbehandlingen for bløtdelsskader de første 48-72 timene.',
      },
    },
    {
      id: 'tr-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva 10%-regelen er, og hvorfor den er viktig for å forebygge belastningsskader.',
        solution: '10%-regelen sier at total treningsmengde (distanse, volum eller tid) ikke bør økes med mer enn 10% fra uke til uke. Regelen er viktig fordi kroppens vev (muskler, sener, leddbånd, bein) trenger tid til å tilpasse seg økt belastning. Hvis belastningen øker for raskt, rekker ikke vevet å tilpasse seg, og risikoen for belastningsskader øker betydelig. For raske økninger i treningsmengde er den vanligste årsaken til belastningsskader hos både mosjonister og aktive utøvere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv de fire fasene i rehabilitering etter en idrettsskade, og forklar hva som kjennetegner hver fase.',
        solution: 'Fase 1 - Akuttfasen (0-72 timer): Kjennetegnes av PRICE-behandling, beskyttelse av skadet vev, reduksjon av betennelse og hevelse. Man opprettholder funksjon i resten av kroppen. Fase 2 - Mobiliseringsfasen (3 dager til 3 uker): Forsiktig bevegelse innenfor smertegrensen, gradvis økning av bevegelsesutslag, lett styrketrening for omkringliggende muskulatur, og isometriske øvelser i den skadde muskelgruppen. Fase 3 - Oppbyggingsfasen (3-12 uker): Progressiv styrketrening, gjenopprettelse av full bevegelighet og mobilitet, proprioseptiv trening (balansetrening) og gradvis tilbakevending til idrettsspesifikk trening. Fase 4 - Tilbake til aktivitet: Idrettsspesifikk trening med full intensitet, psykologisk beredskap for konkurranseretur, forebyggende program for å unngå re-skade, og oppfølging. Det viktigste prinsippet er gradvis progresjon uten å hoppe over faser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Samleoppgave: Lag et skadeforebyggende program for et håndballag. Inkluder tiltak for oppvarming, styrke, mobilitet og restitusjon, og begrunn hvert tiltak.',
        solution: 'Skadeforebyggende program for håndballag: 1) Oppvarming (15 min før hver trening): Generell oppvarming med lett jogging og sidebevegelser (5 min) for å øke kroppstemperatur og blodsirkulasjon. Dynamisk tøyning med beinsving, armrotasjoner og lunges (5 min) for å forberede bevegelsesmønstrene. Spesifikk oppvarming med pasningsøvelser og skudd med gradvis intensitet (5 min). Begrunnelse: Riktig oppvarming er det viktigste enkelttiltaket for å redusere skaderisiko. 2) Styrke- og stabilitetstrening (2-3 ganger per uke): Core-trening med planke-variasjoner og rotasjonsøvelser. Knestabilisering med ettbeins knebøy og nordisk hamstringcurl. Skulderstabilisering med rotator cuff-øvelser med strikk. Begrunnelse: Styrke i stabiliserende muskulatur beskytter ledd mot skader. 3) Mobilitetstrening (daglig, 10 min): Ankelmobilisering for å forebygge ankelskader. Hoftemobilitet for å forebygge lyskeskader. Brystryggrotasjon for kast- og vridningsbevegelser. Begrunnelse: God mobilitet reduserer kompensasjonsmønstre og sikrer riktig teknikk. 4) Restitusjon: Strukturert nedkjøling med tøyning etter trening. Minimum 48 timer mellom harde treningsøkter. Tilstrekkelig søvn (8-9 timer for ungdom) og riktig ernæring. Begrunnelse: Restitusjon er nødvendig for at kroppen skal tilpasse seg og reparere mikroskader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: En elev i klassen har fått diagnosen løperkne (iliotibial bånd-syndrom) etter å ha økt løpemengden raskt de siste ukene. Drøft hva som sannsynligvis forårsaket skaden, forklar akuttbehandling, og skisser en rehabiliteringsplan.',
        solution: 'Årsak: Løperkne (IT-bånd syndrom) er en typisk belastningsskade som skyldes gjentatt friksjon mellom iliotibial båndet og utsiden av kneet. Den sannsynlige årsaken er for rask økning i løpemengde (brudd på 10%-regelen), mulig kombinert med svak hoftemuskulatur (spesielt gluteus medius), stram IT-bånd/fascia, dårlig løpeteknikk eller uegnet fottøy. Akuttbehandling: PRICE-prinsippet de første 48-72 timene. Spesielt viktig med is (15-20 min, flere ganger daglig) på utsiden av kneet. Reduser all belastning som provoserer smerte. Rehabiliteringsplan: Fase 1 (uke 1-2): Hvile fra løping. Is og eventuelt antiinflammatorisk medisin. Skumrulling av IT-bånd og quadriceps (forsiktig). Opprettholde kondisjon med smertefrie alternativer (svømming, sykling). Fase 2 (uke 2-4): Styrketrening for hoftemuskulatur: sidegang med strikk, ettbeins knebøy, clamshells, hofteabduksjon. Mobilitetstrening for hofte og ankel. Gradvis økning av belastning med gange og lett jogging. Fase 3 (uke 4-8): Progressiv økning av løpemengde (følg 10%-regelen). Fortsett styrketrening for hofter. Vurder løpeteknikk og eventuelt nye sko. Fase 4: Full treningsaktivitet med vedlikehold av styrke- og mobilitetsprogram. Forebygging av re-skade gjennom konsekvent oppvarming, progresjon i treningsmengde og vedlikehold av hoftemuskulatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'tr-6-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvor lenge skal is/kulde typisk ligge på en akutt bløtdelsskade om gangen?',
        options: [
          { id: 'a', text: '5 minutter', isCorrect: false },
          { id: 'b', text: '15-20 minutter', isCorrect: true },
          { id: 'c', text: '45-60 minutter', isCorrect: false },
          { id: 'd', text: 'Kontinuerlig i 24 timer', isCorrect: false },
        ],
        solution: 'Is eller kuldepakning bør ligge på i 15-20 minutter om gangen, med minst 1 time mellom hver behandling. For kort tid gir liten effekt, mens for lang tid kan føre til frostskader på huden og faktisk øke blødning gjennom reaktiv vasodilatasjon. Bruk alltid et klede mellom is og hud.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const TRENING_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_6_1,
  CHAPTER_TRENING_1_6_2,
  CHAPTER_TRENING_1_6_3,
  CHAPTER_TRENING_1_6_4,
  CHAPTER_TRENING_1_6_5,
];

export function getTrening1Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return TRENING_1_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
