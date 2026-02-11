/* eslint-disable */
// @ts-nocheck

/**
 * Sikkerhetsfag VG2/VG3 - Del 5: Brannsikkerhet
 * Kapittel 5.1-5.5
 *
 * Dekker LK20 kompetansemaal:
 * - gjere rede for brannteori og brannforlop
 * - planlegge og gjennomfore brannforebyggende tiltak
 * - velge og bruke riktig slokkemiddel
 * - planlegge romning og evakuering
 * - organisere brannvernarbeidet i en virksomhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Brannteori
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_5_1: TextbookChapter = {
  id: 'sikkerhetsfag-5-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '5.1',
  title: 'Brannteori',
  description: 'En innforing i brannteori der du laerer om branntrekanten, brannforlop og roykutvikling. Du forstaar hvordan brann oppstaar og utvikler seg, noe som er grunnleggende for alt brannvernarbeid.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-5-1-intro',
      type: 'text',
      content: `## Grunnleggende brannteori

For aa kunne forebygge og slokke branner maa vi forstaa hva brann egentlig er. Brann er en kjemisk reaksjon der et brennbart stoff reagerer med oksygen og avgir varme og lys. Denne reaksjonen kalles forbrenning.

I dette kapittelet skal du laere:
- Hva branntrekanten er og hvorfor den er viktig
- Hvordan et brannforlop utvikler seg
- Hva roykutvikling betyr for sikkerheten
- Hvordan brannteori pavirker praktisk brannvern`,
    },
    {
      id: 'sik-5-1-def-1',
      type: 'definition',
      title: 'Branntrekanten',
      content: `**Branntrekanten** er en modell som viser de tre forutsetningene som maa vaere til stede for at brann skal oppstaa: **brennbart stoff**, **oksygen** og **varme** (tennenergi). Hvis en av disse tre faktorene fjernes, vil brannen slokke. Branntrekanten er det viktigste verktoeyet for aa forstaa baade brannforebygging og brannslokking.`,
    },
    {
      id: 'sik-5-1-text-1',
      type: 'text',
      content: `### Branntrekantens tre sider

**1. Brennbart stoff**
- Faste stoffer: tre, papir, tekstiler, plast
- Vaesker: bensin, olje, loesemidler, maling
- Gasser: propan, naturgass, hydrogen, acetylen
- Stoffer har ulik antennelighet og brennbarhet

**2. Oksygen**
- Vanlig luft inneholder ca. 21 prosent oksygen
- Brann trenger minimum ca. 16 prosent oksygen for aa brenne
- Oekt oksygentilgang gir kraftigere forbrenning
- Medisinske oksygenkilder kan gi ekstrem brannfare

**3. Varme (tennenergi)**
- Aapen flamme: fyrstikker, lighter, sveising
- Elektrisk energi: kortslutning, overbelastning, lysbue
- Friksjon: gnister fra sliping, maskindeler
- Selvantennelse: oljefillete filler, komposthauger
- Straalevarme: sol gjennom glass, varmeovner`,
    },
    {
      id: 'sik-5-1-def-2',
      type: 'definition',
      title: 'Overtenning (flashover)',
      content: `**Overtenning** er det punktet i et brannforlop der alle brennbare overflater i et rom antennes samtidig. Temperaturen stiger bratt til 500-600 grader celsius paa svært kort tid. Etter overtenning er rommet ikke lenger mulig aa oppholde seg i, og brannen sprer seg raskt til tilstoetende rom. Overtenning er et kritisk vendepunkt i brannforloepet.`,
    },
    {
      id: 'sik-5-1-text-2',
      type: 'text',
      content: `### Brannforloepet

Et typisk brannforlop gaar gjennom flere faser:

**Fase 1: Antenning**
- Brannen starter i et begrenset omraade
- Lav temperatur, liten flamme
- Lett aa slokke med enkle midler
- Kan lukte royk foer flamme er synlig

**Fase 2: Vekstfase**
- Brannen vokser og sprer seg til naerliggende materiale
- Temperaturen stiger jevnt
- Roykproduksjonen oeker
- Fortsatt mulig aa slokke med handslokkeapparat

**Fase 3: Overtenning**
- Alle brennbare overflater antennes
- Temperaturen naar 500-600 grader paa sekunder
- Rommet er fullt av flammer
- Livstruende for alle i rommet

**Fase 4: Full brann**
- Brannen er fullt utviklet
- Temperaturer opp mot 1000-1200 grader
- Brannen begrenses av oksygentilgangen
- Brannvesenet maa haandtere slokkingen

**Fase 5: Avtakende brann**
- Brennbart materiale brukes opp
- Temperaturen synker gradvis
- Fare for sammenrasing av konstruksjoner`,
    },
    {
      id: 'sik-5-1-text-3',
      type: 'text',
      content: `### Roykutvikling

Roeyk er den stoerste drapsfaktoren ved brann. Flere mennesker doer av roeykinhalasjon enn av selve flammene.

**Hva inneholder roeyk?**
- Karbonmonoksid (CO) - giftig og luktfri gass
- Cyanid (HCN) - ekstremt giftig, dannes ved forbrenning av plast
- Partikler og sot - irriterer luftveiene
- Varme gasser - kan gi brannskader innvendig

**Roykens egenskaper:**
- Roeyk er varm og stiger oppover
- Et royklag dannes under taket og senker seg nedover
- I moeblerte rom kan roeyken fylle rommet paa 2-3 minutter
- Sikt i roykfylt rom kan vaere null
- Temperaturen i roeyklaget kan vaere flere hundre grader

**Derfor er roeyk saa farlig:**
- Karbonmonoksid er luktfri og gjoer deg bevisstloes raskt
- Du kan miste bevisstheten etter faa aandedrag
- Roeyk sprer seg raskere enn flammer gjennom bygningen
- Varm roeyk kan antenne materialer langt fra brannen`,
    },
    {
      id: 'sik-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Branntrekanten i praksis',
      problem: 'Hvordan kan vi bruke branntrekanten til aa forklare hvorfor et stearinlys slokker naar vi setter et glass over det?',
      solution: `Naar vi setter et glass over et brennende stearinlys, fjerner vi en av branntrekantens tre sider - **oksygen**.

**Forklaring:**
1. Stearinlyset brenner og bruker oksygen fra luften inne i glasset
2. Etter hvert synker oksygenkonsentrasjonen under 16 prosent
3. Forbrenningen kan ikke lenger opprettholdes
4. Flammen slokker

Vi har ikke fjernet det brennbare stoffet (stearinen) eller varmen (flammen). Vi fjernet kun tilgangen paa oksygen. Dette viser at det er nok aa fjerne en av branntrekantens tre sider for aa slokke en brann.

**Tilsvarende i praksis:**
- Brannteppe kveeler flammen (fjerner oksygen)
- Vannslokking kjoeler ned brannen (fjerner varme)
- Rydding av brennbart materiale (fjerner brennstoff)`,
    },
    {
      id: 'sik-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hvilke tre faktorer maa vaere til stede for at brann skal oppstaa?',
        options: [
          { id: 'a', text: 'Brennbart stoff, oksygen og varme', isCorrect: true },
          { id: 'b', text: 'Brennbart stoff, vann og varme', isCorrect: false },
          { id: 'c', text: 'Oksygen, nitrogen og varme', isCorrect: false },
          { id: 'd', text: 'Brennbart stoff, oksygen og trykk', isCorrect: false },
        ],
        solution: 'Branntrekanten bestaar av tre faktorer: brennbart stoff, oksygen og varme (tennenergi). Alle tre maa vaere til stede for at brann skal oppstaa. Fjernes en av dem, slokker brannen.',
      },
    },
    {
      id: 'sik-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        task: 'Hva skjer ved overtenning (flashover)?',
        options: [
          { id: 'a', text: 'Brannen slokker av seg selv paa grunn av oksygenmangel', isCorrect: false },
          { id: 'b', text: 'Alle brennbare overflater i rommet antennes samtidig', isCorrect: true },
          { id: 'c', text: 'Roeyken trekker ut gjennom vinduene', isCorrect: false },
          { id: 'd', text: 'Temperaturen i rommet synker bratt', isCorrect: false },
        ],
        solution: 'Ved overtenning antennes alle brennbare overflater i rommet samtidig. Temperaturen stiger bratt til 500-600 grader celsius. Etter overtenning er det umulig aa oppholde seg i rommet, og slokkeforsok med handslokkeapparat er nytteslost.',
      },
    },
    {
      id: 'sik-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        task: 'Forklar de fem fasene i et brannforlop med egne ord. Hvilken fase er mest kritisk for personsikkerheten?',
        hints: ['Tenk paa hvordan temperaturen og roeyken utvikler seg gjennom fasene'],
        solution: 'De fem fasene er: 1) Antenning - brannen starter smaat. 2) Vekstfase - brannen vokser og sprer seg. 3) Overtenning - alle overflater antennes, 500-600 grader. 4) Full brann - fullt utviklet, opp mot 1000-1200 grader. 5) Avtakende brann - materialet brukes opp. Overgangen til fase 3 (overtenning) er mest kritisk for personsikkerheten, fordi rommet gaar fra aa vaere mulig aa oppholde seg i til aa vaere drepende paa svært kort tid.',
      },
    },
    {
      id: 'sik-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Hvorfor er roeykinhalasjon en stoerre trussel enn selve flammene ved brann? Beskriv minst tre grunner.',
        solution: '1) Karbonmonoksid (CO) er luktfri og gjoer deg bevisstloes etter faa aandedrag, saa du merker det ikke foer det er for sent. 2) Roeyk sprer seg mye raskere enn flammer gjennom bygningen, saa den naar flere personer. 3) Roeyklaget kan ha temperaturer paa flere hundre grader og gi indre brannskader i luftveiene. 4) Sikten i roykfylt rom er null, noe som gjoer det umulig aa finne veien ut. 5) Giftige gasser som cyanid dannes ved forbrenning av plast og kan drepe svært raskt.',
      },
    },
    {
      id: 'sik-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'Gi tre eksempler paa vanlige tennkilder i et kontormiljoe, og forklar hvordan hver av dem kan foere til brann.',
        solution: '1) Elektrisk utstyr med overbelastning - for mange apparater koblet til samme kurs kan overopphete ledninger og foere til kortslutning. 2) Kaffetraktere og vannkokere som staar paa uten tilsyn - kan overopphetes og antenne omgivelsene. 3) Mobillader som ligger paa papirer - kan bli varm og antenne papir, spesielt ved defekt lader. Andre eksempler kan vaere uforsiktig bruk av varmeovner, sigaretter utenfor roeykeomraade, eller sveisearbeid uten tilstrekkelig sikring.',
      },
    },
    {
      id: 'sik-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        task: 'Bruk branntrekanten til aa forklare tre ulike maater aa slokke en brann paa. Gi et praktisk eksempel for hver metode.',
        solution: '1) Fjerne oksygen (kveeling) - legge et brannteppe over en panne som har tatt fyr, slik at oksygentilfoerselen stenges. 2) Fjerne varme (kjoeling) - sproeyte vann paa en brann i treverk, slik at temperaturen senkes under antennelsestemperaturen. 3) Fjerne brennbart stoff - lage branngater i skog ved aa fjerne traer og vegetasjon slik at brannen ikke har noe aa brenne i. Alle tre metodene bygger paa prinsippet om aa fjerne en av branntrekantens tre sider.',
      },
    },
    {
      id: 'sik-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Branntrekanten** bestaar av brennbart stoff, oksygen og varme
- **Brannforloepet** gaar gjennom fem faser fra antenning til avtakende brann
- **Overtenning** er det kritiske vendepunktet der hele rommet staar i flammer
- **Roeyk** er den stoerste drapsfaktoren ved brann

### Noekkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Branntrekanten | Modell som viser de tre forutsetningene for brann |
| Overtenning | Alle brennbare overflater antennes samtidig |
| Karbonmonoksid | Giftig, luktfri gass som dannes ved brann |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Brannforebygging
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_5_2: TextbookChapter = {
  id: 'sikkerhetsfag-5-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '5.2',
  title: 'Brannforebygging',
  description: 'Laer om brannklasser, materialvalg og brannsikker konstruksjon. Du forstaar hvordan bygninger og virksomheter kan utformes og driftes for aa redusere brannrisikoen.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-5-2-intro',
      type: 'text',
      content: `## Forebygging er foerste forsvarslinje

Det viktigste brannvernarbeidet skjer foer brannen oppstaar. Brannforebygging handler om aa fjerne eller redusere risikoen for at brann starter, og om aa begrense skadene dersom brann likevel oppstaar.

I dette kapittelet skal du laere:
- De ulike brannklassene og hva de betyr
- Hvordan materialvalg pavirker brannsikkerheten
- Prinsipper for brannsikker konstruksjon
- Forebyggende tiltak i virksomheter`,
    },
    {
      id: 'sik-5-2-def-1',
      type: 'definition',
      title: 'Brannklasser',
      content: `**Brannklasser** er en inndeling av branner basert paa hva som brenner. Det finnes fem hovedklasser: **Klasse A** (faste stoffer som tre og papir), **Klasse B** (brennbare vaesker som bensin og olje), **Klasse C** (brennbare gasser som propan), **Klasse D** (brennbare metaller som magnesium) og **Klasse F** (matolje og fett). Brannklassen bestemmer hvilket slokkemiddel som skal brukes.`,
    },
    {
      id: 'sik-5-2-text-1',
      type: 'text',
      content: `### Brannklassene i detalj

**Klasse A - Faste stoffer**
- Tre, papir, tekstiler, plast
- Kjennetegn: brenner med gloed og flamme
- Vanligste branntypen i boliger og kontorer
- Slokkes typisk med vann

**Klasse B - Brennbare vaesker**
- Bensin, diesel, olje, loesemidler, maling, alkohol
- Kjennetegn: brenner med flamme, ingen gloedbrann
- Vanlig i industri, verksteder og bensinstasjoner
- Slokkes med skum eller pulver, ALDRI med vann paa tung olje

**Klasse C - Brennbare gasser**
- Propan, butan, naturgass, hydrogen, acetylen
- Kjennetegn: brenner med flamme, eksplosjonsfare
- Viktig: steng gasstilfoerselen foerst
- Slokkes med pulver eller CO2

**Klasse D - Brennbare metaller**
- Magnesium, aluminium, natrium, kalium
- Kjennetegn: brenner med ekstremt hoey temperatur
- Sjelden, men farlig i industri
- Krever spesialpulver, vann kan gi eksplosjon

**Klasse F - Matolje og fett**
- Frityrfett, stekeolje, smult
- Kjennetegn: hoey antennelsestemperatur, vanskelig aa slokke
- Vanligste branntypen paa kjoekkenet
- Slokkes med brannteppe eller spesialslokker, ALDRI med vann`,
    },
    {
      id: 'sik-5-2-text-2',
      type: 'text',
      content: `### Materialvalg og brannsikkerhet

Valg av materialer i bygninger og innredning har stor betydning for brannsikkerheten.

**Materialers brannegenskaper:**
- **Ubrennbare materialer:** betong, staal, murstein, glass
- **Vanskelig antennelige:** gips, behandlet tre, brannhemmende tekstiler
- **Lett antennelige:** ubehandlet tre, papir, mange plasttyper, skumgummi

**Brannklassifisering av materialer:**
- Materialer testes og klassifiseres etter europeisk standard
- Klassene gaar fra A1 (ubrennbar) til F (ikke testet/svært brennbar)
- Krav til materialklasse avhenger av bygningstype og plassering
- Romningstveier har strengere krav enn andre omraader

**Brannhemmende behandling:**
- Tre kan behandles med brannhemmende middel
- Tekstiler kan impregnes for aa redusere brennbarhet
- Brannmaling sveller opp og beskytter underliggende materiale
- Brannisolasjon beskytter baerende konstruksjoner`,
    },
    {
      id: 'sik-5-2-def-2',
      type: 'definition',
      title: 'Branncelle',
      content: `En **branncelle** er et avgrenset omraade i en bygning som er konstruert for aa hindre at brann og roeyk sprer seg til tilstoetende omraader i en bestemt tidsperiode. Branncellene er adskilt med branncellebegrensende bygningsdeler (vegger, dekker, doerer) med angitt brannmotstand, for eksempel EI 30 (30 minutters brannmotstand) eller EI 60 (60 minutters brannmotstand).`,
    },
    {
      id: 'sik-5-2-text-3',
      type: 'text',
      content: `### Brannsikker konstruksjon

Bygninger prosjekteres med brannsikkerhet som et sentralt krav. De viktigste prinsippene er:

**Branncelleinndeling:**
- Bygningen deles inn i brannceller
- Hver branncelle skal taalefbrann i en viss tid
- Branncellevegger og branndoerer hindrer spredning
- Gjennomfoeringer i branncellevegger maa tettes

**Baerende konstruksjoners brannmotstand:**
- Baerende vegger og soyler maa taale brann i en angitt tid
- Krav varierer med bygningstype: fra 30 til 120 minutter
- Staalkontsruksjoner maa brannisoleres
- Betong har naturlig god brannmotstand

**Branntekniske installasjoner:**
- Brannalarmanlegg med roeykvarlsere og alarmsentraler
- Sprinkleranlegg som aktiveres automatisk
- Roeykventilasjonsanlegg som fjerner roeyk
- Noedlys som viser romningsveier ved stroembrudd

**Forebyggende tiltak i drift:**
- Hold romningsveier frie for hindringer
- Riktig lagring av brennbare vaesker og gasser
- Elektrisk anlegg maa vaere i forskriftsmessig stand
- Varme arbeider (sveising, sliping) krever spesielle tiltak`,
    },
    {
      id: 'sik-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Brannforebygging paa et hotell',
      problem: 'Hvilke brannforebyggende tiltak boer et hotell ha?',
      solution: `Et hotell har mange gjester som ikke kjenner bygningen, noe som stiller hoye krav til brannsikkerhet.

**Bygningstekniske tiltak:**
- Hvert hotellrom er en egen branncelle med selvlukkende doer
- Korridorer og trapperom er egne brannceller
- Sprinkleranlegg i alle rom og fellesomraader
- Brannalarmanlegg med roeykvarsler i hvert rom

**Organisatoriske tiltak:**
- Romningsplan paa innsiden av doeren i hvert rom
- Opplaering av alle ansatte i brannvern
- Regelmessige brannoeyvelser
- Daglig kontroll av romningsveier
- Nattevakt med brannvernopplaering

**Tekniske tiltak:**
- Noedlys i korridorer og trapperom
- Brannslanger og slokkeutstyr paa hver etasje
- Automatisk varsling til brannvesenet
- Taleanlegg for evakueringsvarsling

Hotellet er paalagt aa ha dette gjennom brannforskriftene.`,
    },
    {
      id: 'sik-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hvilken brannklasse gjelder for brennbare vaesker som bensin og olje?',
        options: [
          { id: 'a', text: 'Klasse A', isCorrect: false },
          { id: 'b', text: 'Klasse B', isCorrect: true },
          { id: 'c', text: 'Klasse C', isCorrect: false },
          { id: 'd', text: 'Klasse F', isCorrect: false },
        ],
        solution: 'Brannklasse B gjelder for brennbare vaesker som bensin, diesel, olje, loesemidler og maling. Klasse A er faste stoffer, klasse C er gasser og klasse F er matolje og fett.',
      },
    },
    {
      id: 'sik-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-5-2-ex-2',
        number: '5.2.2',
        type: 'multiple-choice',
        task: 'Hva er en branncelle?',
        options: [
          { id: 'a', text: 'Et rom der man oppbevarer slokkeutstyr', isCorrect: false },
          { id: 'b', text: 'Et avgrenset omraade konstruert for aa hindre brann- og roykspredning', isCorrect: true },
          { id: 'c', text: 'Et rom der brannvesenet har sitt utstyr', isCorrect: false },
          { id: 'd', text: 'Et spesialrom for lagring av brennbare materialer', isCorrect: false },
        ],
        solution: 'En branncelle er et avgrenset omraade i en bygning som er konstruert for aa hindre at brann og roeyk sprer seg til andre omraader. Branncellevegger, branndoerer og tetting av gjennomfoeringer er sentrale elementer.',
      },
    },
    {
      id: 'sik-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom brannklasse A, B og F. Hvorfor er det viktig aa vite hvilken brannklasse man har med aa gjoere?',
        hints: ['Tenk paa valg av slokkemiddel og konsekvensene av feil valg'],
        solution: 'Klasse A er faste stoffer (tre, papir), klasse B er brennbare vaesker (bensin, olje) og klasse F er matolje og fett. Det er viktig aa vite brannklassen fordi det bestemmer hvilket slokkemiddel man skal bruke. Feil slokkemiddel kan vaere virkningslost eller farlig - for eksempel kan vann paa en fettbrann (klasse F) foere til en voldsom oppblussing fordi vannet fordamper eksplosivt.',
      },
    },
    {
      id: 'sik-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Beskriv tre bygningstekniske tiltak som bidrar til brannsikkerhet i en kontorbygning.',
        solution: '1) Branncelleinndeling - bygningen deles inn i brannceller med branncellebegrensende vegger og selvlukkende branndoerer, slik at brann og roeyk ikke sprer seg fritt. 2) Sprinkleranlegg - automatisk slokkesystem som aktiveres ved hoey temperatur og kontrollerer eller slokker brannen foer den utvikler seg. 3) Brannalarmanlegg med roeykvarsler - gir tidlig varsling slik at evakuering kan starte foer brannen blir farlig. Andre aktuelle tiltak er noedlys, roeykventilasjonsanlegg og brannmotstand i baerende konstruksjoner.',
      },
    },
    {
      id: 'sik-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Hva menes med brannhemmende behandling av materialer? Gi to eksempler paa slik behandling.',
        solution: 'Brannhemmende behandling er prosesser som gjoer materialer vanskeligere aa antenne eller som reduserer brannspredningen. Eksempler: 1) Brannhemmende impregnering av tre - trevirket behandles med kjemikalier som gjoer det vanskelig aa antenne og reduserer flammespredning. 2) Brannmaling - en spesialmaling som sveller opp ved hoey temperatur og danner et isolerende lag som beskytter underliggende konstruksjon mot varme. Andre eksempler er brannhemmende impregnering av tekstiler og brannisolering av staalkontsruksjoner.',
      },
    },
    {
      id: 'sik-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        task: 'Du er sikkerhetsansvarlig i en bedrift. Lag en sjekkliste med minst fem forebyggende tiltak du ville kontrollert under en brannvernrunde.',
        solution: 'Sjekkliste for brannvernrunde: 1) Romningsveier er frie for hindringer og doerer kan aapnes. 2) Branndoerer er lukket og selvlukkere fungerer. 3) Slokkeutstyr er paa plass, synlig og har gyldig kontroll. 4) Roeykvarsler og brannalarmanlegg er i funksjon. 5) Brennbare materialer er lagret forskriftsmessig (ikke i romningsveier, ikke naer varmekiider). 6) Elektrisk anlegg er i orden, ingen provisoriske loesninger. 7) Avfall er fjernet og ikke samlet opp innendoers. 8) Merking av romningsveier og slokkeutstyr er synlig og intakt.',
      },
    },
    {
      id: 'sik-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Brannklassene** A til F beskriver hva som brenner og bestemmer slokkemiddel
- **Materialvalg** pavirker brannsikkerheten betydelig
- **Brannceller** er et sentralt prinsipp for aa hindre brannspredning
- **Forebyggende tiltak** i drift er like viktige som bygningstekniske loesninger

### Noekkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Brannklasse | Inndeling av branner etter hva som brenner |
| Branncelle | Avgrenset omraade som hindrer brannspredning |
| Brannmotstand | Hvor lenge en konstruksjon taaler brann |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Brannslokking
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_5_3: TextbookChapter = {
  id: 'sikkerhetsfag-5-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '5.3',
  title: 'Brannslokking',
  description: 'Laer om ulike slokkemidler, slokkeutstyr og riktig haandtering. Du forstaar hvilke slokkemidler som passer til ulike brannklasser og hvordan du bruker handslokkeapparat og brannslange.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-5-3-intro',
      type: 'text',
      content: `## Riktig slokking redder liv og verdier

Naar brann oppstaar, er rask og riktig slokking avgjorende. De foerste minuttene er kritiske - en liten brann kan slokkes med et handslokkeapparat, men etter bare noen minutter kan brannen vaere for stor til aa haandtere uten brannvesenet.

I dette kapittelet skal du laere:
- De ulike slokkemidlene og deres bruksomraader
- Hvordan handslokkeapparat og annet slokkeutstyr fungerer
- Praktisk haandtering av slokkeutstyr
- Viktige sikkerhetshensyn ved slokking`,
    },
    {
      id: 'sik-5-3-def-1',
      type: 'definition',
      title: 'Slokkemiddel',
      content: `Et **slokkemiddel** er et stoff som brukes til aa slokke brann. De vanligste slokkemidlene er **vann** (kjoeler brannen), **skum** (kveeler og kjoeler), **pulver** (bryter den kjemiske reaksjonen), **CO2** (kveeler ved aa fortrenge oksygen) og **brannteppe** (kveeler ved aa dekke til). Valg av riktig slokkemiddel avhenger av brannklassen.`,
    },
    {
      id: 'sik-5-3-text-1',
      type: 'text',
      content: `### Slokkemidler og brannklasser

**Vann**
- Brannklasse: A (faste stoffer)
- Virkemaate: kjoeler ned det brennende materialet
- Fordeler: billig, tilgjengelig, effektivt paa klasse A
- Ulemper: leder stroem, skal IKKE brukes paa olje/fett eller metaller
- Finnes som vannslokker, brannslange og sprinkler

**Skum**
- Brannklasse: A og B
- Virkemaate: legger et teppe over brannen som kveeler og kjoeler
- Fordeler: effektivt paa vaeskebranner
- Ulemper: noe dyrere, kan vaere miljoebelastende
- Finnes som skumslokker og i fast slokkeanlegg

**Pulver**
- Brannklasse: A, B og C (ABC-pulver)
- Virkemaate: bryter den kjemiske forbrenningsreaksjonen
- Fordeler: virker paa de fleste branntyper, rask effekt
- Ulemper: gir store oppryddingskostnader, redusert sikt, irriterer luftveier
- Finnes som pulverslokker

**CO2 (karbondioksid)**
- Brannklasse: B og elektriske branner
- Virkemaate: fortrenger oksygen rundt brannen
- Fordeler: ingen restsoepling, trygt paa elektrisk utstyr
- Ulemper: begrenset rekkevidde, risiko for kvelning i smaa rom
- Finnes som CO2-slokker

**Brannteppe**
- Brannklasse: A og F (smaa branner)
- Virkemaate: kveeler flammen ved aa dekke til
- Fordeler: enkelt aa bruke, trygt paa fettbranner
- Ulemper: kun for smaa branner
- Plasseres paa kjoekkenet og i verksteder`,
    },
    {
      id: 'sik-5-3-text-2',
      type: 'text',
      content: `### Slokkeutstyr i bygninger

**Handslokkeapparat**
- Roedt sylindrisk apparat montert paa vegg
- Skal vaere lett tilgjengelig og godt merket
- Maa kontrolleres aarlig av godkjent firma
- Finnes i stoerrelse fra 2 til 12 kg
- Rekkevidde typisk 3-6 meter
- Brukstid typisk 10-30 sekunder

**Brannslange (husbrannslange)**
- Fast montert paa vegg med tilkobling til vannforsyning
- Typisk 25-30 meter lang
- Kan brukes av alle uten spesiell opplaering
- Ubegrenset vannmengde saa lenge det er trykk
- Skal kontrolleres aarlig

**Sprinkleranlegg**
- Automatisk slokkesystem i taket
- Aktiveres ved hoey temperatur (typisk 68 grader)
- Kun sprinklerhoder naer brannen utloeses
- Svært effektivt for aa kontrollere brann tidlig
- Paabudt i mange bygningstyper

**Brannpumper og stigerledninger**
- For brannvesenets bruk
- Stigerledninger forer vann til oevrige etasjer
- Brannpumper sikrer tilstrekkelig trykk`,
    },
    {
      id: 'sik-5-3-def-2',
      type: 'definition',
      title: 'Foersteinnsats',
      content: `**Foersteinnsats** er den slokkingen og redningen som utfoeres av personer paa stedet foer brannvesenet ankommer. Foersteinnsatsen er ofte avgjorende for utfallet, da den skjer i de kritiske foerste minuttene. God opplaering og riktig plassert slokkeutstyr gjoer foersteinnsatsen effektiv. Husk: egen sikkerhet gaar alltid foerst.`,
    },
    {
      id: 'sik-5-3-text-3',
      type: 'text',
      content: `### Praktisk bruk av handslokkeapparat

**Huskeregelen B-A-S-S:**
1. **B**rytt forseglingen - trekk ut sikringssplinten
2. **A**rett munstykket - pek mot basen av flammen
3. **S**lem til - trykk inn haandtaket
4. **S**oep sideveis - soep munstykket fra side til side

**Viktige tips:**
- Hold god avstand (2-3 meter) og naerm deg forsiktig
- Rett straalene mot bunnen av flammen, ikke toppen
- Ha alltid fluktveien bak deg
- Bruk korte stoet med pulverslokker
- Vent og se om brannen blusser opp igjen
- Avbryt dersom brannen er for stor

**Feil som ofte gjoeres:**
- Retter straalene mot flammene i stedet for mot basen
- Staar for naer og risikerer brannskader
- Toemmer slokkeren for raskt
- Glemmer aa ha fluktveien bak seg
- Prover aa slokke en brann som er for stor`,
    },
    {
      id: 'sik-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Velge riktig slokkemiddel',
      problem: 'En papirkurv paa kontoret har tatt fyr. I naerheten staar det et pulverslokkeapparat og en CO2-slokker. Hvilken boer du velge?',
      solution: `**Analyse av situasjonen:**
- Papir er et fast stoff - dette er en klasse A-brann
- Brannen er liten og begrenset
- Vi er paa et kontor med datamaskiner og elektronikk

**Valg av slokkemiddel:**

Begge apparatene kan brukes paa klasse A-branner, men det beste valget er **CO2-slokkeren**:
- CO2 etterlater ingen rester som maa ryddes opp
- Trygt for elektronisk utstyr i naerheten
- Tilstrekkelig for en liten brann

Pulverslokkeren ville ogsa fungert, men:
- Pulveret sprer seg over hele kontoret
- Kan skade datamaskiner og annet utstyr
- Stor oppryddingsjobb etterpaa

**Husk:** Uansett valg, ring brannvesenet og varsle andre foerst dersom brannen ikke er helt ubetydelig. Slokkeforsoeyet er foersteinnsats mens du venter paa profesjonell hjelp.`,
    },
    {
      id: 'sik-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hvilken huskeregel brukes for handslokkeapparat?',
        options: [
          { id: 'a', text: 'R-E-D-D (Ring, Evakuer, Doemp, Doemp)', isCorrect: false },
          { id: 'b', text: 'B-A-S-S (Brytt, Arett, Slem, Soep)', isCorrect: true },
          { id: 'c', text: 'S-L-O-K-K (Sjekk, Loeft, Orienter, Klem, Kontroller)', isCorrect: false },
          { id: 'd', text: 'V-A-N-N (Varsle, Aapne, Naar maal, Nedkjoel)', isCorrect: false },
        ],
        solution: 'Huskeregelen for handslokkeapparat er B-A-S-S: Brytt forseglingen (trekk ut sikringssplinten), Arett munstykket (pek mot basen av flammen), Slem til (trykk inn haandtaket), og Soep sideveis (beveg munstykket fra side til side).',
      },
    },
    {
      id: 'sik-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-5-3-ex-2',
        number: '5.3.2',
        type: 'multiple-choice',
        task: 'Hvorfor skal du ALDRI bruke vann paa en fettbrann (klasse F)?',
        options: [
          { id: 'a', text: 'Fordi vannet fordamper og faar ingen effekt', isCorrect: false },
          { id: 'b', text: 'Fordi vannet fordamper eksplosivt og sprer brennende fett', isCorrect: true },
          { id: 'c', text: 'Fordi vannet er for kaldt for fettet', isCorrect: false },
          { id: 'd', text: 'Fordi vann oeker temperaturen i fettet', isCorrect: false },
        ],
        solution: 'Naar vann treffar varm olje eller fett (over 300 grader), fordamper vannet eksplosivt til damp. Volumet oeker ca. 1700 ganger, og det brennende fettet kastes ut av gryta som en ildkule. Dette kalles en fetteksplosjon og kan gi svært alvorlige brannskader og brannspredning.',
      },
    },
    {
      id: 'sik-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        task: 'Beskriv de fem vanligste slokkemidlene og hvilke brannklasser de egner seg for.',
        hints: ['Tenk paa vann, skum, pulver, CO2 og brannteppe'],
        solution: '1) Vann - egner seg for klasse A (faste stoffer), kjoeler ned det brennende materialet. 2) Skum - egner seg for klasse A og B, legger et kvelende teppe over brannen. 3) Pulver (ABC) - egner seg for klasse A, B og C, bryter den kjemiske forbrenningsreaksjonen. 4) CO2 - egner seg for klasse B og elektriske branner, fortrenger oksygen. 5) Brannteppe - egner seg for klasse A og F (smaa branner), kveeler flammen ved aa dekke til.',
      },
    },
    {
      id: 'sik-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Hva er forskjellen mellom et handslokkeapparat og en husbrannslange? Nevn fordeler og ulemper med hver.',
        solution: 'Handslokkeapparat: Fordeler - lett aa flytte, ulike slokkemidler for ulike branntyper, rask aa ta i bruk. Ulemper - begrenset mengde (10-30 sekunders brukstid), maa kontrolleres og etterfylles. Husbrannslange: Fordeler - ubegrenset vannmengde saa lenge det er trykk, lengre rekkevidde (25-30 meter), kan brukes over lengre tid. Ulemper - kun vann som slokkemiddel (passer ikke for alle brannklasser), fast montert saa den kan ikke flyttes, krever vanntrykk.',
      },
    },
    {
      id: 'sik-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'Beskriv huskeregelen B-A-S-S steg for steg. Hvorfor er det viktig aa rette slokkemiddelet mot basen av flammen og ikke mot toppen?',
        solution: 'B-A-S-S: 1) Brytt forseglingen - trekk ut sikringssplinten. 2) Arett munstykket - pek mot basen (bunnen) av flammen. 3) Slem til - trykk inn haandtaket for aa utloese slokkemiddelet. 4) Soep sideveis - beveg munstykket fra side til side over brannen. Det er viktig aa rette mot basen av flammen fordi det er der det brennbare materialet er. Flammene over er bare et resultat av forbrenningen. Sikter du mot toppen av flammen, gaar slokkemiddelet rett gjennom uten effekt. Ved aa treffe basen kjoeler du ned eller kveeler det materialet som brenner.',
      },
    },
    {
      id: 'sik-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        task: 'Det brenner i et serverrom med mye elektronisk utstyr. Hvilket slokkemiddel ville du valgt, og hvorfor? Nevn ogsa et slokkemiddel du IKKE ville brukt.',
        solution: 'Jeg ville valgt CO2-slokker. CO2 er ideell for branner naer elektronisk utstyr fordi: 1) CO2 leder ikke stroem, saa det er trygt ved elektriske branner. 2) CO2 etterlater ingen rester som kan skade datautstyr. 3) CO2 er effektivt paa smaa branner i lukkede rom. Jeg ville IKKE brukt pulverslokker fordi pulveret sprer seg over alt utstyret, trenger inn i datamaskiner og servere, og kan foere til store ekstra skader paa dyrt utstyr. Vann er heller ikke aktuelt paa grunn av fare for kortslutning og skade paa elektronikk.',
      },
    },
    {
      id: 'sik-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Slokkemidler** velges basert paa brannklasse - feil valg kan vaere farlig
- **Handslokkeapparat** brukes med huskeregelen B-A-S-S
- **Foersteinnsats** i de foerste minuttene er ofte avgjorende
- **Sikkerhet** gaar alltid foerst - avbryt slokkingen dersom brannen er for stor

### Noekkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Slokkemiddel | Stoff som brukes til aa slokke brann |
| B-A-S-S | Huskeregel for bruk av handslokkeapparat |
| Foersteinnsats | Slokking og redning foer brannvesenet ankommer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Romning og evakuering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_5_4: TextbookChapter = {
  id: 'sikkerhetsfag-5-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '5.4',
  title: 'Romning og evakuering',
  description: 'Laer om romningsveier, evakueringsplaner og samlingsplasser. Du forstaar hvordan bygninger utformes for trygg romning og hvordan evakuering planlegges og gjennomfoeres.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-5-4-intro',
      type: 'text',
      content: `## Trygg vei ut

Naar brannalarmen gaar, maa alle komme seg ut av bygningen raskt og trygt. God planlegging av romningsveier og evakueringsprosedyrer er livsviktig. Det er ikke nok at bygningen har romningsveier - alle som oppholder seg der maa vite hvor de er og hva de skal gjoere.

I dette kapittelet skal du laere:
- Krav til romningsveier i bygninger
- Hvordan evakueringsplaner utformes
- Organisering av evakuering og samlingsplass
- Spesielle hensyn for personer med nedsatt funksjonsevne`,
    },
    {
      id: 'sik-5-4-def-1',
      type: 'definition',
      title: 'Romningsvei',
      content: `En **romningsvei** er en vei fra et punkt i bygningen og ut til sikkert sted (terreng i det fri). Romningsveien skal vaere en sikker og markert utgangsvei som taalefbrann og roeyk i tilstrekkelig tid til at alle kan komme seg ut. Krav til romningsveier er regulert i byggteknisk forskrift (TEK17) og brannforskriften.`,
    },
    {
      id: 'sik-5-4-text-1',
      type: 'text',
      content: `### Krav til romningsveier

**Generelle krav:**
- Minst to uavhengige romningsveier fra hvert omraade
- Romningsveiene skal foere i ulike retninger
- Maks avstand til naermeste romningsvei er regulert (typisk 30 meter)
- Romningsveier skal vaere frie for hindringer til enhver tid
- Doerer i romningsveier skal slaa ut i romningsretningen

**Merking og belysning:**
- Groenne romningsskilt med hvit piktogram (loepende person)
- Skilt ved alle doerer og retningsendringer
- Noedlys som fungerer ved stroembrudd (minimum 60 minutter)
- Lysende eller etterlysende merking langs romningsveien
- Ledelys i gulv i enkelte bygningstyper

**Bygningstekniske krav:**
- Romningsveier er egne brannceller
- Vegger, tak og gulv har krav til brannmotstand
- Materialer i romningsveier maa ha lav brennbarhet
- Trapperom skal vaere roykfrie (roeykkontroll)
- Heiser skal IKKE brukes som romningsvei (med unntak av evakueringsheiser)`,
    },
    {
      id: 'sik-5-4-text-2',
      type: 'text',
      content: `### Evakueringsplan

En evakueringsplan er et dokument som beskriver hvordan bygningen skal evakueres ved brann eller annen nodsituasjon.

**Innhold i evakueringsplanen:**
- Plantegning med romningsveier inntegnet
- Plassering av slokkeutstyr og brannmeldere
- Samlingsplassens beliggenhet
- Ansvarsfordeling (hvem gjoer hva)
- Prosedyre for varsling og evakuering
- Spesielle hensyn (funksjonshemmede, besoekkende)

**Evakueringsinstruksen:**
1. Hold ro og foelg instrukser
2. Varsle alle i naerheten
3. Gaa til naermeste romningsvei
4. Lukk doerer og vinduer etter deg (ikke laas)
5. Bruk IKKE heisen
6. Gaa til samlingsplass og meld deg
7. Gaa ALDRI tilbake inn i bygningen

**Oppslag i bygningen:**
- Evakueringsplan skal vaere oppslaaett paa synlige steder
- Typisk ved heiser, i korridorer og fellesomraader
- Plantegningen skal vise "Du staar her"-markering
- Skal vaere oppdatert og lesbar`,
    },
    {
      id: 'sik-5-4-def-2',
      type: 'definition',
      title: 'Samlingsplass',
      content: `**Samlingsplassen** er et forhhaandsbestemt sted utenfor bygningen der alle skal moete etter evakuering. Samlingsplassen maa ligge i trygg avstand fra bygningen (minimum 25-50 meter), vaere stor nok for alle som oppholder seg i bygningen, og vaere lett tilgjengelig. Paa samlingsplassen gjennomfoeres telling for aa sikre at alle er kommet ut.`,
    },
    {
      id: 'sik-5-4-text-3',
      type: 'text',
      content: `### Organisering av evakuering

**Roller og ansvar:**
- **Brannvernleder:** Har overordnet ansvar for evakueringen
- **Etasjeansvarlige:** Kontrollerer at alle er ute fra sin etasje
- **Samlingsplassansvarlig:** Gjennomfoerer telling og rapporterer
- **Alle ansatte:** Kjenner romningsveier og foelger instrukser

**Evakuering steg for steg:**
1. Brannalarmen aktiveres (automatisk eller manuell)
2. Alle forlater bygningen via naermeste romningsvei
3. Etasjeansvarlige kontrollerer kontorer og fellesomraader
4. Alle moeetes paa samlingsplass
5. Telling gjennomfoeres
6. Resultat rapporteres til brannvernleder
7. Brannvernleder moeeter brannvesenet og orienterer

**Spesielle hensyn:**
- Rullestolbrukere og bevegelseshemmede: evakueringsplan med assistanse
- Hoerselshemmede: visuelle alarmer (blinkende lys)
- Synshemmede: taktil merking og ledelinjer
- Besoekkende: informasjon ved ankomst, vertsansvar
- Barnehager og skoler: faste rutiner med telling av barn`,
    },
    {
      id: 'sik-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Evakuering av en barneskole',
      problem: 'Hvordan boer evakueringen organiseres paa en barneskole med 300 elever?',
      solution: `**Organisering:**
- Rektor er brannvernleder
- Hver laerer er ansvarlig for sin klasse
- Vaktmester er teknisk ansvarlig (brannalarmen)
- Kontorpersonalet ringer brannvesenet

**Prosedyre:**
1. Brannalarmen gaar (automatisk eller manuell)
2. Laereren tar med seg klasselisten
3. Elevene stiller opp i rekke og foelger laereren
4. Klassen gaar rolig til samlingsplass via oevd rute
5. Laereren teller elevene og sjekker mot klasselisten
6. Laereren rapporterer til rektor: "Klasse 3B - alle til stede" eller "Klasse 3B - en elev mangler"
7. Rektor gir samlet oversikt til brannvesenet

**Spesielle hensyn:**
- SFO-barn: egen telling med SFO-ansatte
- Elever med funksjonsnedsettelser: navngitte hjelpere
- Gymsalen: laerere sjekker garderober
- Besoekkende foreldre: registreres ved ankomst

**Oevelse:**
- Minimum to evakueringsoeyvelser per skoleaar
- Foerste oevelse tidlig om hoeesten
- Evaluering etter hver oevelse
- Alle ansatte kjenner oppgaven sin`,
    },
    {
      id: 'sik-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hvor mange uavhengige romningsveier kreves normalt fra hvert omraade i en bygning?',
        options: [
          { id: 'a', text: 'Minst en', isCorrect: false },
          { id: 'b', text: 'Minst to', isCorrect: true },
          { id: 'c', text: 'Minst tre', isCorrect: false },
          { id: 'd', text: 'Det avhenger kun av antall personer', isCorrect: false },
        ],
        solution: 'Hovedregelen er at det skal vaere minst to uavhengige romningsveier fra hvert omraade i bygningen. De to romningsveiene skal foere i ulike retninger, slik at brann i en retning ikke sperrer begge veiene ut.',
      },
    },
    {
      id: 'sik-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-5-4-ex-2',
        number: '5.4.2',
        type: 'multiple-choice',
        task: 'Hvorfor skal du IKKE bruke heisen ved brann?',
        options: [
          { id: 'a', text: 'Fordi heisen gaar for sakte', isCorrect: false },
          { id: 'b', text: 'Fordi heisen kan stoppe paa grunn av stroembortfall og fylle seg med roeyk', isCorrect: true },
          { id: 'c', text: 'Fordi heisen har for liten kapasitet', isCorrect: false },
          { id: 'd', text: 'Fordi heisen er reservert for brannvesenet', isCorrect: false },
        ],
        solution: 'Heisen skal ikke brukes ved brann fordi: 1) Stroembortfall kan gjoere at heisen stopper mellom etasjene og du blir fanget. 2) Heissjakten kan fungere som en skorstein og fylles med giftig roeyk. 3) Heisen kan aapne doerene i den etasjen der det brenner. Unntaket er spesielle evakueringsheiser som er konstruert for brannforhold.',
      },
    },
    {
      id: 'sik-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        task: 'Beskriv hva en evakueringsplan boer inneholde. Nevn minst seks elementer.',
        hints: ['Tenk paa baade det som staar paa papiret og det som henges opp i bygningen'],
        solution: 'En evakueringsplan boer inneholde: 1) Plantegning med romningsveier inntegnet. 2) Plassering av slokkeutstyr (handslokkeapparat og brannslanger). 3) Plassering av brannmeldere og brannalarmsentralen. 4) Samlingsplassens beliggenhet. 5) Ansvarsfordeling - hvem er brannvernleder, etasjeansvarlige osv. 6) Prosedyre for varsling (intern varsling og ringing til 110). 7) Evakueringsinstruks steg for steg. 8) Spesielle hensyn for besoekkende og personer med nedsatt funksjonsevne.',
      },
    },
    {
      id: 'sik-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'Hva er formaalene med aa ha en samlingsplass etter evakuering? Beskriv ogsa kravene til en god samlingsplass.',
        solution: 'Formaalene med samlingsplass: 1) Telling for aa sikre at alle er kommet ut av bygningen. 2) Samlet oversikt til brannvesenet over eventuelle savnede. 3) Hindre at personer gaar tilbake inn i bygningen. Krav til god samlingsplass: Den maa ligge i trygg avstand fra bygningen (minimum 25-50 meter), vaere stor nok for alle som oppholder seg i bygningen, vaere lett tilgjengelig fra romningsveiene, ikke vaere i veien for brannvesenets oppmarsj, og vaere kjent for alle som bruker bygningen.',
      },
    },
    {
      id: 'sik-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Hvilke spesielle hensyn maa tas for personer med nedsatt funksjonsevne ved evakuering? Gi minst tre eksempler.',
        solution: '1) Rullestolbrukere og bevegelseshemmede: Trenger egen evakueringsplan med navngitte hjelpere, eventuelt evakueringsstol for trapperomning eller tilgang til evakueringsheis. 2) Hoerselshemmede: Trenger visuelle alarmer som blinkende lys i tillegg til lydsignal, og eventuelt vibreringsalarm. 3) Synshemmede: Trenger taktil merking av romningsveier, ledelinjer i gulvet og eventuelt personlig assistanse. Andre hensyn: Personer med kognitive utfordringer kan trenge forenklet informasjon og fast ledsager, og besoekkende med nedsatt funksjonsevne maa informeres om evakueringsrutiner ved ankomst.',
      },
    },
    {
      id: 'sik-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-5-4-ex-6',
        number: '5.4.6',
        type: 'classic',
        task: 'Du er ansvarlig for aa planlegge en evakueroevelse paa arbeidsplassen din (kontorbygg med 80 ansatte paa tre etasjer). Beskriv hvordan du ville planlagt og gjennomfoert oevelsen.',
        solution: 'Planlegging: 1) Informer ledelsen og faa godkjenning for tidspunkt. 2) Gjennomgaa evakueringsplanen og oppdater om noedvendig. 3) Bekreft roller - brannvernleder, etasjeansvarlige, samlingsplassansvarlig. 4) Varsle naboer og eventuelt brannvesenet om at det er en oevelse. Gjennomfoering: 5) Aktiver brannalarmen paa avtalt tidspunkt. 6) Observer evakueringen - tidsbruk, flyt, eventuelle problemer. 7) Etasjeansvarlige sjekker alle rom og melder fra. 8) Telling paa samlingsplass. 9) Signal om at oevelsen er over. Evaluering: 10) Maal total evakueringstid. 11) Samle tilbakemeldinger fra etasjeansvarlige. 12) Identifiser forbedringspunkter. 13) Skriv evalueringsrapport. 14) Oppdater evakueringsplanen basert paa funn.',
      },
    },
    {
      id: 'sik-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Romningsveier** maa vaere minst to, frie for hindringer og godt merket
- **Evakueringsplaner** beskriver veien ut, ansvar og prosedyrer
- **Samlingsplassen** er moetepunktet for telling og oversikt
- **Alle** maa inkluderes i evakueringsplanen, ogsa personer med nedsatt funksjonsevne

### Noekkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Romningsvei | Sikker, merket vei fra et punkt i bygningen til det fri |
| Evakueringsplan | Dokument som beskriver prosedyrer for evakuering |
| Samlingsplass | Forhhaandsbestemt moetepunkt utenfor bygningen |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Brannvernorganisering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_5_5: TextbookChapter = {
  id: 'sikkerhetsfag-5-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '5.5',
  title: 'Brannvernorganisering',
  description: 'Laer om brannvernlederens rolle, gjennomfoering av brannoeyvelser og internkontroll av brannsikkerhet. Du forstaar hvordan brannvernarbeidet organiseres i en virksomhet i henhold til lover og forskrifter.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-5-5-intro',
      type: 'text',
      content: `## Systematisk brannvernarbeid

Godt brannvern krever systematisk arbeid og klare ansvarsforhold. Alle virksomheter er paalagt aa ha en organisert brannverntjeneste med opplaering, oeyvelser og dokumentasjon. Brannvernarbeidet er en del av virksomhetens internkontrollsystem.

I dette kapittelet skal du laere:
- Brannvernlederens oppgaver og ansvar
- Planlegging og gjennomfoering av brannoeyvelser
- Internkontroll av brannsikkerhet
- Lover og forskrifter som regulerer brannvern`,
    },
    {
      id: 'sik-5-5-def-1',
      type: 'definition',
      title: 'Brannvernleder',
      content: `**Brannvernlederen** er den personen som eieren eller ledelsen av en virksomhet har utpekt til aa ivareta det daglige brannvernarbeidet. Brannvernlederen har ansvar for aa koordinere brannforebyggende tiltak, gjennomfoere brannoeyvelser, foelge opp slokkeutstyr og dokumentere brannvernarbeidet. Eieren har det overordnede ansvaret, men brannvernlederen utfoerer det praktiske arbeidet.`,
    },
    {
      id: 'sik-5-5-text-1',
      type: 'text',
      content: `### Brannvernlederens oppgaver

**Daglige oppgaver:**
- Paase at romningsveier holdes frie
- Foelge opp at branndoerer holdes lukket
- Reagere paa avvik og rapportere til ledelsen
- Vaere tilgjengelig som kontaktperson for brannvesenet

**Periodiske oppgaver:**
- Gjennomfoere brannvernrunder (kontroll av bygningen)
- Planlegge og gjennomfoere brannoeyvelser
- Oppdatere evakueringsplaner og branntegninger
- Kontrollere at slokkeutstyr er paa plass og godkjent
- Soerge for opplaering av nye ansatte
- Dokumentere alt brannvernarbeid

**Aarlige oppgaver:**
- Gjennomgaa og oppdatere brannverndokumentasjonen
- Evaluere aarets brannoeyvelser og tiltak
- Utarbeide handlingsplan for neste aar
- Soerge for aarlig kontroll av slokkeutstyr og brannalarmanlegg
- Rapportere status til ledelsen

**Kompetansekrav:**
- Grunnleggende opplaering i brannvern
- Kunnskap om bygningens branntekniske loesninger
- Kjennskap til lover, forskrifter og branndokumentasjon
- Evne til aa lede evakuering under press`,
    },
    {
      id: 'sik-5-5-text-2',
      type: 'text',
      content: `### Brannoeyvelser

Regelmessige brannoeyvelser er lovpaalagt og viktige for at alle skal vite hva de skal gjoere naar det virkelig gjelder.

**Typer brannoeyvelser:**
- **Varslede oeyvelser:** Alle vet at det blir oevelse - god for foerste oevelse
- **Uvarslede oeyvelser:** Mer realistisk, avdekker reelle svakheter
- **Deloeyvelser:** Oever bare en del av evakueringen (f.eks. varsling)
- **Tabletop-oevelse:** Gjennomgang av prosedyrer rundt bordet

**Krav til brannoeyvelser:**
- Minimum en oevelse per aar for de fleste virksomheter
- Skoler og barnehager: minimum to oeyvelser per aar
- Pleieinstitusjoner: minimum to oeyvelser per aar
- Hoteller: minimum to oeyvelser per aar
- Oevelsene skal dokumenteres og evalueres

**Gjennomfoering av en brannoeyvelse:**
1. Planlegg scenarioet (hva utloeser alarmen, tidspunkt)
2. Informer noekkelpersoner (men ikke alle ved uvarslet oevelse)
3. Plasser observatoerer ved romningsveier og samlingsplass
4. Aktiver alarmen
5. Observer og noter: tidsbruk, reaksjoner, problemer
6. Gjennomfoer telling paa samlingsplass
7. Avslutt oevelsen og samle alle
8. Evaluer umiddelbart med noekkelpersonell
9. Skriv evalueringsrapport med forbedringsforslag`,
    },
    {
      id: 'sik-5-5-def-2',
      type: 'definition',
      title: 'Internkontroll',
      content: `**Internkontroll** er systematiske tiltak som virksomheten iverksetter for aa sikre at aktivitetene planlegges, organiseres, utfoeres og vedlikeholdes i samsvar med krav i helse-, miljoe- og sikkerhetslovgivningen. For brannsikkerhet betyr dette at virksomheten maa dokumentere at den jobber systematisk med aa forebygge brann og ivareta brannsikkerheten for alle som oppholder seg i bygningen.`,
    },
    {
      id: 'sik-5-5-text-3',
      type: 'text',
      content: `### Internkontroll av brannsikkerhet

**Dokumentasjon som skal foreligge:**
- Brannverndokumentasjon (maal, organisering, ansvar)
- Evakueringsplan og branntegninger
- Oversikt over branntekniske installasjoner
- Kontrollrutiner og sjekklister
- Logg over brannoeyvelser med evaluering
- Logg over kontroll og vedlikehold av slokkeutstyr
- Opplaeringsplan og oversikt over gjennomfoert opplaering

**Brannvernrunder:**
- Systematisk gjennomgang av bygningen
- Sjekke romningsveier, branndoerer, slokkeutstyr
- Kontrollere merking og noedlys
- Dokumentere funn og avvik
- Foelge opp avvik med korrigerende tiltak
- Anbefalt frekvens: minst en gang per maaned

**Lover og forskrifter:**
- **Brann- og eksplosjonsvernloven:** Overordnet lov om brannvern
- **Forskrift om brannforebygging:** Krav til eiere og virksomheter
- **Byggteknisk forskrift (TEK17):** Krav til bygningers brannsikkerhet
- **Internkontrollforskriften:** Krav om systematisk HMS-arbeid
- **Arbeidsmiljoloven:** Krav til sikker arbeidsplass

**Tilsyn fra brannvesenet:**
- Brannvesenet gjennomfoerer tilsyn av saeerskilte brannobjekter
- Kontrollerer at virksomheten oppfyller lovkravene
- Kan gi paaalegg ved avvik
- Alvorlige avvik kan foere til stenging`,
    },
    {
      id: 'sik-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Brannverndokumentasjon i en bedrift',
      problem: 'Hva boer brannverndokumentasjonen til en mellomstor kontorbedrift (50 ansatte) inneholde?',
      solution: `**Brannverndokumentasjon for Eksempel AS:**

**1. Organisering:**
- Daglig leder: overordnet ansvarlig
- Brannvernleder: Ole Hansen (kontorsjef)
- Etasjeansvarlige: navngitte personer for hver etasje
- Samlingsplassansvarlig: Kari Nilsen (resepsjon)

**2. Brannteknisk beskrivelse:**
- Bygningens brannklasse og branncelleinndeling
- Oversikt over brannalarmanlegg og sprinkler
- Plassering av slokkeutstyr (tegning)
- Romningsveier (tegning)

**3. Rutiner:**
- Maanedlig brannvernrunde (sjekkliste)
- Aarlig kontroll av slokkeutstyr (firma)
- Aarlig kontroll av brannalarmanlegg (firma)
- Opplaering av nyansatte (sjekkliste)
- Aarlig brannoeyvelse (plan og evaluering)

**4. Dokumentasjon:**
- Logg over brannvernrunder
- Logg over oeyvelser med evaluering
- Servicerapporter for slokkeutstyr og alarmanlegg
- Oversikt over ansattes opplaering

Denne dokumentasjonen skal vaere tilgjengelig for brannvesenets tilsyn.`,
    },
    {
      id: 'sik-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hvem har det overordnede ansvaret for brannsikkerheten i en virksomhet?',
        options: [
          { id: 'a', text: 'Brannvernlederen', isCorrect: false },
          { id: 'b', text: 'Verneombudet', isCorrect: false },
          { id: 'c', text: 'Eieren eller ledelsen av virksomheten', isCorrect: true },
          { id: 'd', text: 'Det lokale brannvesenet', isCorrect: false },
        ],
        solution: 'Eieren eller ledelsen av virksomheten har det overordnede ansvaret for brannsikkerheten. Brannvernlederen er utpekt til aa utfoere det daglige brannvernarbeidet, men det juridiske ansvaret ligger hos eier/ledelse. Dette er fastslaatt i brann- og eksplosjonsvernloven.',
      },
    },
    {
      id: 'sik-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-5-5-ex-2',
        number: '5.5.2',
        type: 'multiple-choice',
        task: 'Hvor ofte maa skoler og barnehager gjennomfoere brannoeyvelser?',
        options: [
          { id: 'a', text: 'Minst en gang per aar', isCorrect: false },
          { id: 'b', text: 'Minst to ganger per aar', isCorrect: true },
          { id: 'c', text: 'Minst fire ganger per aar', isCorrect: false },
          { id: 'd', text: 'Det er ingen krav til antall oeyvelser', isCorrect: false },
        ],
        solution: 'Skoler og barnehager skal gjennomfoere minst to brannoeyvelser per aar. Den foerste oevelsen boer gjennomfoeres tidlig om hoeesten, slik at nye elever og ansatte blir kjent med rutinene. Oevelsene skal dokumenteres og evalueres.',
      },
    },
    {
      id: 'sik-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        task: 'Beskriv brannvernlederens viktigste oppgaver. Del svaret inn i daglige, periodiske og aarlige oppgaver.',
        hints: ['Tenk paa bade forebyggende arbeid og dokumentasjon'],
        solution: 'Daglige oppgaver: Paase at romningsveier er frie, foelge opp at branndoerer holdes lukket, reagere paa avvik. Periodiske oppgaver: Gjennomfoere brannvernrunder, planlegge og gjennomfoere brannoeyvelser, oppdatere evakueringsplaner, kontrollere slokkeutstyr, laere opp nyansatte. Aarlige oppgaver: Gjennomgaa og oppdatere brannverndokumentasjonen, evaluere aarets tiltak og oeyvelser, utarbeide handlingsplan for neste aar, soerge for aarlig kontroll av slokkeutstyr og alarmanlegg, rapportere status til ledelsen.',
      },
    },
    {
      id: 'sik-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom en varslet og en uvarslet brannoeyvelse. Hva er fordelene og ulempene med hver type?',
        solution: 'Varslet oevelse: Alle vet at det blir oevelse. Fordeler - trygt for alle, godt egnet som foerste oevelse, kan planlegges saa det passer driften. Ulemper - gir ikke realistisk bilde av reaksjoner, folk forbereder seg og presterer bedre enn i virkeligheten. Uvarslet oevelse: Ingen (eller bare noekkelpersoner) vet at det blir oevelse. Fordeler - avdekker reelle svakheter, gir realistisk bilde av tidsbruk og reaksjoner, tester om folk faktisk husker prosedyrene. Ulemper - kan skape uro og stress, bor ikke gjennomfoeres foer folk har oevd varslet foerst, krever mer planlegging og risikovurdering.',
      },
    },
    {
      id: 'sik-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Hva er internkontroll av brannsikkerhet, og hvilke dokumenter skal virksomheten ha paa plass?',
        solution: 'Internkontroll av brannsikkerhet er systematiske tiltak for aa sikre at virksomheten jobber planmessig med aa forebygge brann og ivareta sikkerheten. Dokumenter som skal foreligge: 1) Brannverndokumentasjon med maal, organisering og ansvar. 2) Evakueringsplan og branntegninger. 3) Oversikt over branntekniske installasjoner. 4) Kontrollrutiner og sjekklister for brannvernrunder. 5) Logg over brannoeyvelser med evaluering. 6) Logg over kontroll og vedlikehold av slokkeutstyr og alarmanlegg. 7) Opplaeringsplan og oversikt over gjennomfoert opplaering for ansatte.',
      },
    },
    {
      id: 'sik-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-5-5-ex-6',
        number: '5.5.6',
        type: 'classic',
        task: 'Nevn fire lover eller forskrifter som regulerer brannvern i Norge, og beskriv kort hva hver av dem handler om.',
        solution: '1) Brann- og eksplosjonsvernloven - den overordnede loven som regulerer forebygging av brann og eksplosjon, og organisering av brannvesenet. 2) Forskrift om brannforebygging - detaljerte krav til eiere og virksomheter om brannforebyggende tiltak, tilsyn og dokumentasjon. 3) Byggteknisk forskrift (TEK17) - krav til bygningers branntekniske utforming, brannceller, romningsveier og branntekniske installasjoner. 4) Internkontrollforskriften - krav om at virksomheter skal arbeide systematisk med helse, miljoe og sikkerhet, inkludert brannsikkerhet, gjennom dokumenterte rutiner og kontroller.',
      },
    },
    {
      id: 'sik-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Brannvernlederen** koordinerer det daglige brannvernarbeidet paa vegne av eieren
- **Brannoeyvelser** er lovpaalagt og maa dokumenteres og evalueres
- **Internkontroll** sikrer systematisk arbeid med brannsikkerhet
- **Lover og forskrifter** stiller klare krav til virksomhetens brannvern

### Noekkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Brannvernleder | Person utpekt til aa ivareta daglig brannvern |
| Internkontroll | Systematiske tiltak for aa oppfylle HMS-krav |
| Brannforebyggingsforskriften | Forskrift med krav til eiere og virksomheter |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SIKKERHETSFAG_DEL5_CHAPTERS = [
  CHAPTER_SIKKERHETSFAG_5_1,
  CHAPTER_SIKKERHETSFAG_5_2,
  CHAPTER_SIKKERHETSFAG_5_3,
  CHAPTER_SIKKERHETSFAG_5_4,
  CHAPTER_SIKKERHETSFAG_5_5,
];
