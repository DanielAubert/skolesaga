/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 1 VG2
 *
 * Seksjon 3: Erstatningsrett (Kapittel 3.1–3.6)
 * Denne filen inneholder kapittel 3.1–3.6 (komplett).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Hva er erstatningsrett?
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3_1: TextbookChapter = {
  id: 'rettslaere-1-3-1',
  courseId: 'rettslaere-1',
  chapterNumber: '3.1',
  title: 'Hva er erstatningsrett?',
  description: 'Erstatningsrettens formål, grunnprinsipper og historikk – hvorfor vi har regler om erstatning og hva de skal oppnå.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare erstatningsrettens formål'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-3-1-intro',
      type: 'text',
      content: `## Hva er erstatningsrett?

Tenk deg at du sykler til skolen og en bilist kjører på deg fordi hun ikke overholdt vikeplikten. Sykkelen din blir ødelagt, du brekker armen og går glipp av en deltidsjobb mens du er sykmeldt. Hvem skal dekke disse kostnadene? Skal du selv stå igjen med regningen, eller bør bilisten – som forårsaket ulykken – betale?

Erstatningsretten handler nettopp om dette: reglene som avgjør når en person som har påført en annen et tap, må **gjenopprette** dette tapet økonomisk. Disse reglene er blant de eldste vi kjenner i rettshistorien, og de spiller en helt sentral rolle i dagens rettssystem.`
    },

    // --- BLOKK 1: Erstatningsrettens formål ---
    {
      id: 'rett1-3-1-def-1',
      type: 'definition',
      title: 'Erstatning',
      content: `**Erstatning** er et økonomisk vederlag som den ansvarlige (skadevolder) må betale til den som er påført skade eller tap (skadelidte). Erstatning skal sette skadelidte i samme økonomiske stilling som om skaden ikke hadde skjedd.

Det sentrale i erstatningsretten er at det er **skadevolderen** – den som forårsaket skaden – som skal bære tapet, ikke skadelidte. Erstatningsretten hører til **privatretten** (obligasjonsretten), og saker avgjøres normalt av de alminnelige domstolene.`
    },
    {
      id: 'rett1-3-1-text-1',
      type: 'text',
      content: `### Erstatningsrettens tre hovedformål

Erstatningsretten har tre grunnleggende formål:

**1. Reparasjon (gjenoppretting)**
Det viktigste formålet er å **reparere** skadelidtes tap. Erstatningen skal gi skadelidte økonomisk kompensasjon slik at vedkommende stilles som om skaden aldri hadde skjedd. Har du fått en ødelagt sykkel til 8 000 kroner, skal du i utgangspunktet få 8 000 kroner i erstatning.

**2. Prevensjon (forebygging)**
Erstatningsreglene skal også virke **preventivt** – de skal motivere folk til å opptre forsvarlig. Når man vet at man kan bli erstatningsansvarlig for skade man forårsaker, er man mer tilbøyelig til å opptre aktsomt. Prevensjonen virker både **individualpreventivt** (den enkelte er forsiktig for å unngå ansvar) og **allmennpreventivt** (samfunnet som helhet handler mer forsvarlig).

**3. Pulverisering (fordeling av risiko)**
Gjennom forsikringsordninger og solidaransvar spres tapet på mange skuldre. Bilansvaret og yrkesskadeforsikringen er eksempler på at risikoen for tap pulveriseres – den fordeles mellom mange, i stedet for å ramme en enkelt person hardt.`
    },
    {
      id: 'rett1-3-1-def-2',
      type: 'definition',
      title: 'Reparasjonsprinsippet',
      content: `**Reparasjonsprinsippet** er det bærende prinsippet i norsk erstatningsrett. Det innebærer at erstatningen skal gjenopprette skadelidtes tap – verken mer eller mindre.

Skadelidte skal ikke **tjene** på skaden (ingen overkompensasjon), men skal heller ikke **tape** på den (full kompensasjon). Prinsippet er lovfestet i skadeserstatningsloven § 4-1 for personskade og følger av ulovfestede regler for tingskade.`
    },
    {
      id: 'rett1-3-1-example-1',
      type: 'example',
      title: 'Reparasjonsprinsippet i praksis',
      problem: 'Erik kolliderer med Sofies parkerte bil. Reparasjonen koster 45 000 kroner. Sofie krever i tillegg 10 000 kroner ekstra «for bryet». Har Sofie krav på 55 000 kroner i erstatning?',
      solution: `**Analyse:**

Erstatningsretten bygger på **reparasjonsprinsippet**: Sofie skal settes i samme økonomiske stilling som om skaden ikke hadde skjedd. Reparasjonskostnaden på 45 000 kroner er et direkte økonomisk tap som Erik må dekke.

De ekstra 10 000 kronene «for bryet» er imidlertid ikke et dokumentert økonomisk tap. Norsk erstatningsrett gir ikke kompensasjon for irritasjon eller ubehag ved tingsskade. Slik «oppreisning» (erstatning for ikke-økonomisk skade) er forbeholdt personskade og krever særskilt hjemmel i skadeserstatningsloven § 3-5.

**Konklusjon:** Sofie har krav på **45 000 kroner** i erstatning for reparasjonskostnaden. Hun kan i tillegg kreve dekket dokumenterte merkostnader, som leiebil mens bilen er på verksted. Kravet om 10 000 kroner ekstra avvises – reparasjonsprinsippet gir ikke rett til overkompensasjon.`
    },
    {
      id: 'rett1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste formålet med erstatningsretten?',
        options: [
          { id: 'a', text: 'Å straffe skadevolderen', isCorrect: false },
          { id: 'b', text: 'Å reparere skadelidtes økonomiske tap', isCorrect: true },
          { id: 'c', text: 'Å berike skadelidte', isCorrect: false },
          { id: 'd', text: 'Å gi staten inntekter gjennom erstatningsgebyr', isCorrect: false }
        ],
        solution: 'Erstatningsrettens viktigste formål er reparasjon – å gjenopprette skadelidtes tap slik at vedkommende stilles økonomisk som om skaden ikke hadde skjedd. Erstatning er ikke straff (det hører til strafferetten) og skal ikke gi skadelidte mer enn det faktiske tapet.'
      }
    },
    {
      id: 'rett1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med at erstatningsretten har en «preventiv» funksjon?',
        options: [
          { id: 'a', text: 'At erstatningsreglene gir politiet myndighet til å forhindre ulykker', isCorrect: false },
          { id: 'b', text: 'At erstatningsansvaret motiverer folk til å opptre aktsomt for å unngå å måtte betale erstatning', isCorrect: true },
          { id: 'c', text: 'At erstatning bare kan kreves dersom skaden kunne vært forebygget', isCorrect: false },
          { id: 'd', text: 'At staten forebygger skader ved å forby farlige aktiviteter', isCorrect: false }
        ],
        solution: 'Prevensjon betyr forebygging. I erstatningsrettslig sammenheng innebærer det at trusselen om erstatningsansvar motiverer folk til å opptre forsvarlig. Individualpreventivt (den enkelte passer seg) og allmennpreventivt (samfunnet som helhet handler mer aktsomt).'
      }
    },

    // --- BLOKK 2: Historikk og rettskilder ---
    {
      id: 'rett1-3-1-text-2',
      type: 'text',
      content: `### Erstatningsrettens historikk

Erstatningsretten har dype røtter i rettshistorien:

**Norrøn rett:** Allerede i de gamle norske landskapslovene (Gulatingsloven og Frostatingsloven) fantes regler om at den som skadet en annen, måtte betale bot. Opprinnelig var boten like mye straff som erstatning – skillet mellom straff og erstatning ble først klart senere.

**Christian Vs Norske Lov (1687):** Inneholdt spredte regler om erstatning for skade, men ingen samlet erstatningslov.

**Rettspraksis og juridisk teori:** Gjennom 1800- og 1900-tallet utviklet Høyesterett de grunnleggende prinsippene for erstatningsrett gjennom dommer. Den ulovfestede culparegelen – at den som handler uaktsomt og forårsaker skade, må betale erstatning – ble etablert gjennom rettspraksis.

**Skadeserstatningsloven (1969):** Lov om skadeserstatning av 13. juni 1969 nr. 26 samlet viktige erstatningsregler i én lov. Den regulerer blant annet arbeidsgiveransvaret (§ 2-1), barns ansvar (§ 1-1), erstatning for personskade (kapittel 3) og erstatningsutmåling (kapittel 4).`
    },
    {
      id: 'rett1-3-1-def-3',
      type: 'definition',
      title: 'De tre grunnvilkårene for erstatning',
      content: `For at noen skal ha krav på erstatning, må **tre vilkår** være oppfylt samtidig:

1. **Ansvarsgrunnlag** – det må foreligge et grunnlag for å holde noen ansvarlig (enten culpa/uaktsomhet eller objektivt ansvar)
2. **Årsakssammenheng** – det må være en årsakssammenheng mellom den ansvarsbetingende handlingen og skaden
3. **Økonomisk tap** – skadelidte må ha lidt et tap som kan måles i penger

Mangler ett av disse tre vilkårene, har skadelidte **ikke** krav på erstatning. Alle tre vilkårene gjennomgås i de neste kapitlene.`
    },
    {
      id: 'rett1-3-1-example-2',
      type: 'example',
      title: 'Alle tre vilkår må være oppfylt',
      problem: 'Kristian kjører uforsvarlig fort og kjører over Lises hagegjerdet. Gjerdet var allerede råttent og skulle rives neste uke uansett. Har Lise krav på erstatning?',
      solution: `**Analyse av de tre vilkårene:**

1. **Ansvarsgrunnlag:** Kristian kjørte uforsvarlig fort – det er uaktsomt (culpøst). Vilkåret er oppfylt.
2. **Årsakssammenheng:** Det var Kristians kjøring som knuste gjerdet. Vilkåret er oppfylt.
3. **Økonomisk tap:** Her oppstår spørsmålet. Gjerdet var råttent og skulle rives neste uke. Lise hadde allerede bestemt seg for å fjerne det. Dermed har hun strengt tatt **ikke lidt noe økonomisk tap** – tvert imot har Kristian spart henne for rivningskostnaden.

**Konklusjon:** Selv om Kristian handlet uaktsomt og forårsaket skaden, har Lise trolig **ikke** krav på erstatning for selve gjerdet, fordi hun ikke har lidt noe reelt økonomisk tap. Hun kan derimot kreve erstatning for eventuelle merkostnader, som opprydding av restene dersom det ble mer søppel enn planlagt.`
    },
    {
      id: 'rett1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva som menes med erstatningsrettens tre grunnvilkår: ansvarsgrunnlag, årsakssammenheng og økonomisk tap. Gi et kort eksempel der alle tre vilkårene er oppfylt.',
        hints: ['Tenk på en typisk trafikkulykke eller en skade på en annens eiendom.'],
        solution: `**De tre grunnvilkårene:**

1. **Ansvarsgrunnlag:** Det må foreligge en grunn til at skadevolder kan holdes ansvarlig. Det vanligste er culpa (uaktsomhet) – skadevolder har handlet uforsvarlig. Alternativt kan ansvaret være objektivt, altså ansvar uten skyld.

2. **Årsakssammenheng:** Det må være en faktisk forbindelse mellom den ansvarsbetingende handlingen og skaden som har oppstått. Skaden må skyldes handlingen.

3. **Økonomisk tap:** Skadelidte må ha lidt et tap som kan uttrykkes i penger – for eksempel reparasjonskostnader, tapt inntekt eller medisinske utgifter.

**Eksempel:** Per kjører over rødt lys (uaktsomhet = ansvarsgrunnlag) og kolliderer med Annes bil (Pers kjøring forårsaket kollisjonen = årsakssammenheng). Annes bil må repareres for 60 000 kroner (økonomisk tap). Alle tre vilkår er oppfylt, og Anne har krav på erstatning fra Per.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-3-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Hva er erstatningsrett?

- **Erstatning** er et økonomisk vederlag skadevolder betaler til skadelidte for å gjenopprette et tap.
- Erstatningsrettens tre hovedformål er **reparasjon** (gjenopprette tapet), **prevensjon** (forebygge skader) og **pulverisering** (fordele risiko gjennom forsikring).
- **Reparasjonsprinsippet** er det bærende prinsippet: skadelidte skal stilles som om skaden ikke hadde skjedd – verken bedre eller dårligere.
- For å ha krav på erstatning må **tre grunnvilkår** være oppfylt: ansvarsgrunnlag, årsakssammenheng og økonomisk tap.
- Den viktigste loven er **skadeserstatningsloven** (1969), men mye av erstatningsretten bygger fortsatt på ulovfestede regler utviklet gjennom rettspraksis.
- Erstatningsretten skiller seg fra strafferetten: erstatning er ikke straff, men kompensasjon.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom erstatningsrettens reparasjonsfunksjon og prevensjonsfunksjon. Gi et konkret eksempel på hvordan prevensjonshensynet kan påvirke folks atferd i hverdagen.',
        hints: ['Tenk på hvordan ansvarstrusselen påvirker folk i trafikken, på arbeidsplassen eller i næringsvirksomhet.'],
        solution: `**Reparasjon vs. prevensjon:**

**Reparasjonsfunksjonen** handler om å gjenopprette skadelidtes tap i etterkant av en skade. Fokus er på skadelidte – vedkommende skal få kompensasjon for det tapet som er påført.

**Prevensjonsfunksjonen** handler om å forhindre skader fra å oppstå i utgangspunktet. Fokus er på skadevolder og potensielle skadevoldere – vissheten om at man kan bli erstatningsansvarlig, motiverer til aktsomhet.

**Eksempel:** En bedrift vet at den kan bli erstatningsansvarlig dersom den slipper ut giftige stoffer som forurenser naboeiendommen. Denne trusselen om erstatningsansvar motiverer bedriften til å investere i renseutstyr og gode rutiner for avfallshåndtering. Her virker prevensjonshensynet allmenpreventivt – andre bedrifter lærer av eksempelet og tar sine egne forholdsregler.`
      }
    },
    {
      id: 'rett1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: «Erstatningsretten handler ikke om å straffe den som gjør noe galt, men om å gjenopprette tapet for den som er blitt rammet.» Gjør rede for hva som skiller erstatningsansvar fra straff, og forklar hvorfor denne forskjellen er viktig.',
        hints: ['Tenk på hvem som er i fokus: skadelidte eller skadevolder?', 'Hva er formålet med straff sammenlignet med formålet med erstatning?'],
        solution: `**Drøfting:**

**Erstatning og straff – to ulike spor:**
Selv om en handling kan utløse både straff og erstatning (for eksempel at en bilist kjører på en fotgjenger), er det to helt forskjellige reaksjonssystemer med ulike formål.

**Straff** hører til **offentlig rett** og har som hovedformål å gi samfunnets reaksjon på lovbrudd. Straffen ilegges av staten gjennom påtalemyndigheten og domstolene. Fokus er på **gjerningspersonen** – vedkommende skal avskrekkes, rehabiliteres og samfunnet beskyttes. Beviskravet er strengt: skyld «utover enhver rimelig tvil».

**Erstatning** hører til **privatretten** og har som hovedformål å gjenopprette **skadelidtes** tap. Erstatningssaken anlegges av skadelidte selv. Fokus er på skadelidte – vedkommende skal få sitt tap dekket. Beviskravet er mildere: sannsynlighetsovervekt.

**Hvorfor skillet er viktig:**
1. En skadevolder kan bli erstatningsansvarlig uten at det foreligger noe straffbart forhold (f.eks. objektivt ansvar).
2. En person kan bli straffet uten å måtte betale erstatning (f.eks. forsøk på lovbrudd som ikke forårsaker tap).
3. Erstatningens størrelse avhenger av **skadelidtes tap**, ikke av hvor klanderverdig skadevolderens opptreden var.

**Konklusjon:** Skillet mellom erstatning og straff er grunnleggende fordi de to systemene har ulike formål, ulike beviskrav og ulike fokus. Erstatningen ser fremover (gjenopprett tapet), mens straffen ser bakover (reager på lovbruddet).`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Culpa-ansvaret
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3_2: TextbookChapter = {
  id: 'rettslaere-1-3-2',
  courseId: 'rettslaere-1',
  chapterNumber: '3.2',
  title: 'Culpa-ansvaret',
  description: 'De tre vilkårene for erstatning etter culparegelen: ansvarsgrunnlag (uaktsomhet), årsakssammenheng og økonomisk tap.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere culpa-ansvar'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-3-2-intro',
      type: 'text',
      content: `## Culpa-ansvaret

I forrige kapittel lærte du at erstatningsansvar krever tre vilkår: ansvarsgrunnlag, årsakssammenheng og økonomisk tap. Nå går vi i dybden på det vanligste ansvarsgrunnlaget i norsk rett: **culpa-ansvaret**.

Culpa er latin og betyr «skyld». Culpa-ansvaret – også kalt skyldansvaret eller uaktsomhetsansvaret – innebærer at den som handler **uaktsomt** (uforsvarlig) og dermed påfører en annen skade, må betale erstatning. Dette er hovedregelen i norsk erstatningsrett, og den bygger på et enkelt, men kraftfullt prinsipp: den som handler klanderverdig, må bære konsekvensene.`
    },

    // --- BLOKK 1: Uaktsomhet og aktsomhetsnormen ---
    {
      id: 'rett1-3-2-def-1',
      type: 'definition',
      title: 'Culpa (uaktsomhet)',
      content: `**Culpa** (uaktsomhet) foreligger når skadevolder har handlet i strid med den aktsomhetsnormen som gjelder på det aktuelle livsområdet. Det betyr at vedkommende har handlet på en måte som en alminnelig fornuftig person **ikke** ville ha handlet i samme situasjon.

Spørsmålet er: **Burde skadevolder ha handlet annerledes?**

Uaktsomhet kan foreligge som:
- **Simpel uaktsomhet** (vanlig uaktsomhet) – skadevolder har opptrådt uforsvarlig
- **Grov uaktsomhet** – et markert avvik fra forsvarlig opptreden, som innebærer et vesentlig større klanderverdig forhold
- **Forsett** – skadevolder har handlet med vilje (kan også gi erstatningsansvar)`
    },
    {
      id: 'rett1-3-2-def-2',
      type: 'definition',
      title: 'Aktsomhetsnormen (bonus pater familias)',
      content: `**Aktsomhetsnormen** er den standarden for oppførsel som man måles mot når retten vurderer om noen har handlet uaktsomt. Normen kalles også «bonus pater familias»-standarden – den gode familiefar.

Vurderingen er **objektiv**: det avgjørende er ikke hva skadevolder selv mente var forsvarlig, men hva en alminnelig fornuftig person ville ha gjort i samme situasjon.

Momenter i aktsomhetsvurderingen:
- **Handlingens skadeevne:** Hvor stor er risikoen for skade?
- **Skadevolders handlingsalternativ:** Kunne skaden lett vært unngått?
- **Skadevolders rolle og kompetanse:** Strengere krav stilles til profesjonelle (leger, advokater, håndverkere)
- **Normer og regler:** Bryter handlingen med lov, forskrift eller bransjepraksis?`
    },
    {
      id: 'rett1-3-2-text-1',
      type: 'text',
      content: `### Aktsomhetsvurderingen i praksis

Når domstolene vurderer om noen har handlet uaktsomt, foretar de en konkret helhetsvurdering. La oss se på noen viktige momenter:

**Handlingens skadeevne og skaderisiko**
Jo større risiko for skade, desto strengere er aktsomhetskravet. Den som håndterer sprengstoff, må utvise langt større aktsomhet enn den som kaster en ball i hagen. Høyesterett har uttalt at aktsomhetskravet skjerpes når risikoen er stor og konsekvensene alvorlige.

**Handlingsalternativer**
Dersom skaden enkelt kunne vært unngått – for eksempel ved å bruke sikkerhetsutstyr eller ta en omvei – taler det for uaktsomhet. Retten spør: Hva ville det kostet skadevolder å handle forsvarlig?

**Rolleforventninger**
En lege som gjør en feil under operasjon, bedømmes strengere enn en tilfeldig forbipasserende som forsøker å gi førstehjelp. Profesjonsutøvere har en **skjerpet aktsomhetsnorm** fordi de har særlig kompetanse og andre stoler på deres fagkunnskap.

**Brudd på lover og forskrifter**
Dersom skadevolder har brutt en lov eller forskrift som er ment å forebygge den typen skade som oppstod, er det et tungt argument for uaktsomhet. For eksempel: å kjøre over fartsgrensen i en skolesone og kjøre på et barn.`
    },
    {
      id: 'rett1-3-2-example-1',
      type: 'example',
      title: 'Uaktsomhetsvurdering – glatt fortau',
      problem: 'Huseier Petter unnlater å strø fortauet utenfor huset sitt en iskald vintermorgen. Nabo-Mona sklir på isen, faller og brekker håndleddet. Mona krever erstatning fra Petter. Er Petter uaktsom?',
      solution: `**Analyse (culpavurdering):**

**1. Handlingens skadeevne:**
Et isglatt fortau medfører stor risiko for fall og personskade, spesielt for eldre og barn. Skaderisikoen er høy.

**2. Handlingsalternativ:**
Petter kunne enkelt ha strødd sand eller salt på fortauet. Kostnaden og innsatsen ved å strø er minimal sammenlignet med skaderisikoen.

**3. Normer og regler:**
Etter politivedtektene i de fleste kommuner har grunneier plikt til å holde fortauet rent og strødd vinterstid. Petters unnlatelse bryter med denne plikten.

**4. Bonus pater familias:**
En alminnelig fornuftig huseier ville ha strødd fortauet en iskald vintermorgen, særlig når dette følger av kommunale vedtekter.

**Konklusjon:** Petter har handlet **uaktsomt** (culpøst). Han burde ha strødd fortauet. Unnlatelse av å handle kan også utgjøre uaktsomhet – det kreves ikke en aktiv handling.`
    },
    {
      id: 'rett1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den sentrale vurderingen ved culpa-ansvaret?',
        options: [
          { id: 'a', text: 'Om skadevolder mente å gjøre skade', isCorrect: false },
          { id: 'b', text: 'Om skadevolder handlet i strid med det en alminnelig fornuftig person ville gjort', isCorrect: true },
          { id: 'c', text: 'Om skadelidte selv var uaktsom', isCorrect: false },
          { id: 'd', text: 'Om skaden var dekket av forsikring', isCorrect: false }
        ],
        solution: 'Culpavurderingen er objektiv: man spør om skadevolder handlet i strid med den aktsomhetsnormen som gjelder – altså om en alminnelig fornuftig person i samme situasjon ville handlet annerledes. Det avgjørende er ikke skadevolders hensikt, men om handlingen var uforsvarlig.'
      }
    },

    // --- BLOKK 2: Årsakssammenheng og økonomisk tap ---
    {
      id: 'rett1-3-2-text-2',
      type: 'text',
      content: `### Vilkår 2: Årsakssammenheng

Selv om skadevolder har handlet uaktsomt, er det ikke tilstrekkelig for erstatningsansvar. Det må også foreligge **årsakssammenheng** mellom uaktsomheten og skaden. Med andre ord: den uaktsomme handlingen må ha forårsaket skaden.

Grunnkravet er at skaden **ikke ville oppstått** dersom den uaktsomme handlingen tenkes bort. Dette kalles betingelseslæren og behandles grundigere i kapittel 3.4.

**Eksempel:** Per kjører for fort forbi et hus. Samtidig faller et tre over bilen til naboen på grunn av storm. Selv om Per var uaktsom (kjørte for fort), er det stormen – ikke Pers kjøring – som forårsaket skaden på naboens bil. Det er ingen årsakssammenheng mellom Pers uaktsomhet og skaden.`
    },
    {
      id: 'rett1-3-2-text-3',
      type: 'text',
      content: `### Vilkår 3: Økonomisk tap

Det tredje og siste vilkåret er at skadelidte må ha lidt et **økonomisk tap** som kan uttrykkes i penger. Norsk erstatningsrett gir som hovedregel ikke erstatning for «tort og svie» uten lovhjemmel.

**Typiske tapsposter ved tingsskade:**
- Reparasjonskostnader
- Gjenanskaffelsesverdi (dersom tingen ikke kan repareres)
- Tapt bruksverdi (f.eks. leiebil mens bilen er på verksted)

**Typiske tapsposter ved personskade (skadeserstatningsloven kap. 3):**
- Påførte og fremtidige merutgifter (legebehandling, medisiner, rehabilitering)
- Påført og fremtidig inntektstap
- Tapt hjemmearbeidsevne
- **Ménerstatning** (§ 3-2) – kompensasjon for varig medisinsk invaliditet (dette er et unntak fra kravet om rent økonomisk tap)
- **Oppreisning** (§ 3-5) – erstatning for ikke-økonomisk skade ved forsettlig eller grovt uaktsom personskade`
    },
    {
      id: 'rett1-3-2-example-2',
      type: 'example',
      title: 'Culpa-vurdering – alle tre vilkår',
      problem: 'Maler-firmaet «Raske Penselstrøk AS» sender en lærling alene for å male fasaden på Karines hus. Lærlingen bruker feil type maling (utendørsmaling beregnet på tre, men huset har pusset fasade), og etter to måneder flasser all malingen av. Karine må betale 85 000 kroner for å få jobben gjort på nytt av et annet firma. Kan hun kreve erstatning fra Raske Penselstrøk AS?',
      solution: `**Analyse av de tre vilkårene:**

**1. Ansvarsgrunnlag (culpa):**
En profesjonell malerbedrift har en **skjerpet aktsomhetsnorm**. Det forventes at firmaet bruker riktig type maling tilpasset underlaget. Å sende en uerfaren lærling alene uten tilstrekkelig opplæring og oppsyn er i seg selv uforsvarlig. Å bruke feil maling på pusset fasade er et klart brudd på faglig standard. **Vilkåret er oppfylt.**

**2. Årsakssammenheng:**
Malingen flasset av fordi feil type maling ble brukt. Hadde riktig maling blitt brukt, ville fasaden holdt seg. Skaden skyldes den uaktsomme handlingen. **Vilkåret er oppfylt.**

**3. Økonomisk tap:**
Karine har et dokumentert tap på 85 000 kroner for ny maling. I tillegg kan hun kreve eventuelle merkostnader som følge av forsinkelsen. **Vilkåret er oppfylt.**

**Konklusjon:** Alle tre vilkår for culpa-ansvar er oppfylt. Karine har krav på erstatning fra Raske Penselstrøk AS. Firmaet kan også holdes ansvarlig for lærlingens feil etter arbeidsgiveransvaret i skadeserstatningsloven § 2-1.`
    },
    {
      id: 'rett1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor stilles det strengere aktsomhetskrav til en profesjonell håndverker enn til en privatperson som gjør arbeid på egen hånd?',
        options: [
          { id: 'a', text: 'Fordi profesjonelle alltid har forsikring', isCorrect: false },
          { id: 'b', text: 'Fordi profesjonelle har særlig kompetanse og andre stoler på deres fagkunnskap', isCorrect: true },
          { id: 'c', text: 'Fordi profesjonelle tjener penger på arbeidet', isCorrect: false },
          { id: 'd', text: 'Fordi det står i håndverkerloven at de har strengere ansvar', isCorrect: false }
        ],
        solution: 'Profesjonsutøvere har en skjerpet aktsomhetsnorm fordi de besitter spesialkompetanse og kunder stoler på deres faglige dyktighet. En lege, advokat eller håndverker forventes å levere arbeid i tråd med faglig standard. Svikter de denne standarden, handler de uaktsomt.'
      }
    },
    {
      id: 'rett1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Henrik bygger en trampoline i hagen uten å feste den ordentlig. Under en storm blåser trampolinen inn i naboens drivhus og knuser glasset. Naboens drivhus er verdt 25 000 kroner. Vurder om Henrik er erstatningsansvarlig etter culparegelen – gå gjennom alle tre vilkår.',
        hints: ['Husk å drøfte ansvarsgrunnlag (culpa), årsakssammenheng og økonomisk tap separat.'],
        solution: `**1. Ansvarsgrunnlag (culpa):**
Henrik unnlot å feste trampolinen. En alminnelig fornuftig person ville sikret en trampoline mot vind, spesielt i Norge der storm er vanlig. Å ikke feste en trampoline som kan blåse avgårde og forårsake skade, er uforsvarlig. Henrik har handlet uaktsomt. Vilkåret er oppfylt.

**2. Årsakssammenheng:**
Dersom trampolinen hadde vært forsvarlig festet, ville den ikke blåst inn i drivhuset. Skaden skyldes Henriks manglende sikring. Vilkåret er oppfylt.

**3. Økonomisk tap:**
Naboen har lidt et tap på 25 000 kroner (verdien av drivhuset). Vilkåret er oppfylt.

**Konklusjon:** Henrik er erstatningsansvarlig etter culparegelen. Alle tre vilkår er oppfylt. Han må betale 25 000 kroner i erstatning til naboen.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-3-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Culpa-ansvaret

- **Culpa** (uaktsomhet) er hovedregelen for ansvarsgrunnlag i norsk erstatningsrett.
- En person handler **uaktsomt** dersom vedkommende handler i strid med hva en alminnelig fornuftig person ville gjort i samme situasjon (**bonus pater familias**-standarden).
- **Aktsomhetsvurderingen** er objektiv og tar hensyn til: skadeevne, handlingsalternativer, skadevolders rolle/kompetanse, og brudd på regler.
- **Profesjonsutøvere** (leger, advokater, håndverkere) har en skjerpet aktsomhetsnorm.
- For erstatningsansvar etter culparegelen kreves at alle **tre vilkår** er oppfylt: uaktsomhet (ansvarsgrunnlag), årsakssammenheng og økonomisk tap.
- Skadelidte kan kreve dekket **dokumenterte økonomiske tap**, og ved personskade også ménerstatning og oppreisning etter skadeserstatningsloven.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En helsefagarbeider glemmer å gi en pasient viktig medisin. Pasienten blir sykere og må ha tre ekstra dager på sykehuset. Vurder om det foreligger erstatningsansvar etter culparegelen. Hva betyr det at helsefagarbeideren har en skjerpet aktsomhetsnorm?',
        hints: ['En helsefagarbeider er en profesjonsutøver som forventes å følge faglige rutiner.', 'Tenk på hva en alminnelig kompetent helsefagarbeider ville gjort.'],
        solution: `**Analyse:**

**1. Ansvarsgrunnlag (culpa):**
Helsefagarbeideren har en **skjerpet aktsomhetsnorm** som profesjonsutøver. Det forventes at vedkommende følger legemiddelrutiner og gir pasienter riktig medisin til riktig tid. Å glemme å gi viktig medisin er et klart avvik fra forsvarlig faglig praksis. En alminnelig kompetent helsefagarbeider ville ikke gjort denne feilen. Vilkåret er oppfylt.

**2. Årsakssammenheng:**
Pasienten ble sykere fordi medisinen ikke ble gitt. Hadde medisinen blitt gitt som planlagt, ville pasienten ikke trengt tre ekstra dager på sykehuset. Vilkåret er oppfylt.

**3. Økonomisk tap:**
Tre ekstra dager på sykehus medfører kostnader. I tillegg kan pasienten ha tapt arbeidsinntekt. Vilkåret er oppfylt.

**Skjerpet aktsomhetsnorm:** At helsefagarbeideren har en skjerpet norm, betyr at vedkommende bedømmes etter hva en kompetent fagperson ville gjort – ikke hva en tilfeldig person ville gjort. Terskelen for uaktsomhet er lavere.

**Konklusjon:** Det foreligger erstatningsansvar. Arbeidsgiver (sykehuset/kommunen) kan også holdes ansvarlig etter arbeidsgiveransvaret i skadeserstatningsloven § 2-1.`
      }
    },
    {
      id: 'rett1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «Culpa-ansvaret er rettferdig fordi det bare rammer den som har opptrådt klanderverdig.» Er du enig? Diskuter både styrker og svakheter ved culpa-ansvaret som ansvarsgrunnlag, og nevn situasjoner der culpa-ansvaret eventuelt ikke gir skadelidte tilstrekkelig vern.',
        hints: ['Tenk på situasjoner der skade oppstår uten at noen har handlet uaktsomt.', 'Hva skjer dersom skadevolder har opptrådt forsvarlig, men skade likevel oppstår?'],
        solution: `**Drøfting:**

**Styrker ved culpa-ansvaret:**
Culpa-ansvaret er rettferdig i den forstand at det knytter ansvar til klanderverdighet. Den som handler uforsvarlig, må bære konsekvensene. Dette oppleves rimelig og motiverer folk til å opptre aktsomt (prevensjon). Ingen rammes av ansvar uten grunn.

**Svakheter ved culpa-ansvaret:**
1. **Bevisproblem:** Skadelidte har bevisbyrden for at skadevolder handlet uaktsomt. I mange tilfeller kan det være svært vanskelig å bevise dette – spesielt ved teknisk komplekse saker.

2. **Hull i vernet:** Dersom skadevolder har opptrådt forsvarlig (ingen uaktsomhet), men skade likevel oppstår, står skadelidte igjen uten erstatning. Eksempel: en fabrikk driver lovlig virksomhet med alle tillatelser, men en uforutsett eksplosjon skader naboen. Etter culparegelen alene ville naboen ikke fått erstatning.

3. **Ubalanse i styrkeforhold:** En privatperson som blir skadet av en bedrift, kan ha vanskeligheter med å bevise uaktsomhet mot en stor virksomhet med egne jurister.

**Derfor finnes objektivt ansvar:**
Nettopp fordi culpa-ansvaret ikke gir tilstrekkelig vern i alle situasjoner, har lovgiver innført objektivt ansvar på flere områder – ansvar uten skyld – som behandles i neste kapittel.

**Konklusjon:** Culpa-ansvaret er et godt utgangspunkt, men alene utilstrekkelig. Rettssystemet trenger også objektivt ansvar for å gi skadelidte tilstrekkelig vern i situasjoner der skade oppstår uten klanderverdig opptreden.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Objektivt ansvar
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3_3: TextbookChapter = {
  id: 'rettslaere-1-3-3',
  courseId: 'rettslaere-1',
  chapterNumber: '3.3',
  title: 'Objektivt ansvar',
  description: 'Ansvar uten skyld – arbeidsgiveransvaret, produktansvaret og bilansvaret.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for objektivt ansvar'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-3-3-intro',
      type: 'text',
      content: `## Objektivt ansvar

I forrige kapittel lærte du om culpa-ansvaret: den som handler uaktsomt, må betale erstatning. Men hva skjer dersom noen påfører en annen skade **uten** å ha handlet uaktsomt? Skal skadelidte da stå igjen med tapet?

Svaret er at norsk rett på flere områder har innført **objektivt ansvar** – ansvar uten krav om skyld. Ved objektivt ansvar kan skadevolder bli erstatningsansvarlig selv om vedkommende har opptrådt helt forsvarlig. Det avgjørende er ikke om skadevolder er å bebreide, men om skaden er knyttet til en bestemt risiko eller virksomhet.

I dette kapittelet ser vi på de viktigste formene for objektivt ansvar: arbeidsgiveransvaret, produktansvaret og bilansvaret.`
    },

    // --- BLOKK 1: Hva er objektivt ansvar? ---
    {
      id: 'rett1-3-3-def-1',
      type: 'definition',
      title: 'Objektivt ansvar',
      content: `**Objektivt ansvar** (også kalt risikoansvar eller ansvar uten skyld) er et erstatningsansvar der skadevolder kan holdes ansvarlig **uavhengig av om vedkommende har utvist skyld**. Det er tilstrekkelig at det foreligger en skade, årsakssammenheng og økonomisk tap.

Begrunnelsen for objektivt ansvar er at den som skaper en risiko eller tjener på en virksomhet, bør bære risikoen for de skader virksomheten medfører – selv om alt er gjort forsvarlig. Risikoen bør ligge hos den som er nærmest til å bære den, og som kan forsikre seg mot den.`
    },
    {
      id: 'rett1-3-3-text-1',
      type: 'text',
      content: `### Ulovfestet objektivt ansvar

Det ulovfestede objektive ansvaret er utviklet gjennom rettspraksis. Høyesterett har i en rekke dommer slått fast at den som driver en virksomhet med en **stadig, typisk og ekstraordinær risiko** for skade, kan holdes objektivt ansvarlig.

Tre vilkår har utkrystallisert seg:
1. **Stadig risiko** – risikoen må knytte seg til en vedvarende virksomhet, ikke et enkeltstående tilfelle
2. **Typisk risiko** – skaden må være av en type som er typisk (påregnelig) for virksomheten
3. **Ekstraordinær risiko** – risikoen må gå ut over det som er dagligdags og allment akseptert

**Eksempel:** Et sprengningsarbeid i en fjellside skaper en stadig, typisk og ekstraordinær risiko for steinsprut mot nærliggende bygninger. Selv om sprengningsarbeidet utføres helt forsvarlig, kan entreprenøren holdes objektivt ansvarlig dersom steinsprut skader en nabobygning.`
    },
    {
      id: 'rett1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom culpa-ansvar og objektivt ansvar?',
        options: [
          { id: 'a', text: 'Culpa-ansvar krever at skadevolder har handlet uaktsomt, mens objektivt ansvar ikke krever skyld', isCorrect: true },
          { id: 'b', text: 'Objektivt ansvar gir alltid høyere erstatning enn culpa-ansvar', isCorrect: false },
          { id: 'c', text: 'Culpa-ansvar gjelder bare for privatpersoner, objektivt ansvar gjelder bare for bedrifter', isCorrect: false },
          { id: 'd', text: 'Objektivt ansvar er nyere enn culpa-ansvaret og har erstattet det helt', isCorrect: false }
        ],
        solution: 'Den avgjørende forskjellen er kravet til skyld: culpa-ansvaret krever at skadevolder har handlet uaktsomt (klanderverdig), mens ved objektivt ansvar kan skadevolder holdes ansvarlig selv om vedkommende har opptrådt helt forsvarlig. De øvrige vilkårene (årsakssammenheng og økonomisk tap) gjelder ved begge ansvarsformer.'
      }
    },

    // --- BLOKK 2: Arbeidsgiveransvaret ---
    {
      id: 'rett1-3-3-def-2',
      type: 'definition',
      title: 'Arbeidsgiveransvaret (skadeserstatningsloven § 2-1)',
      content: `**Arbeidsgiveransvaret** innebærer at en arbeidsgiver er objektivt ansvarlig for skade som arbeidstaker volder **forsettlig eller uaktsomt** under utføring av arbeidet.

Hjemmel: **Skadeserstatningsloven § 2-1:**
*«Arbeidsgiver svarer for skade som voldes forsettlig eller uaktsomt under arbeidstakers utføring av arbeid eller verv for arbeidsgiveren, idet hensyn tas til om de krav skadelidte med rimelighet kan stille til virksomheten eller tjenesten, er tilsidesatt.»*

**Vilkår for arbeidsgiveransvaret:**
1. Det må foreligge et **arbeidsgiver-/arbeidstakerforhold**
2. Arbeidstaker må ha handlet **uaktsomt eller forsettlig** (culpa hos arbeidstaker)
3. Skaden må ha skjedd **under utføring av arbeidet** – ikke på fritiden`
    },
    {
      id: 'rett1-3-3-text-2',
      type: 'text',
      content: `### Hvorfor arbeidsgiveransvar?

Arbeidsgiveransvaret har flere begrunnelser:

**1. Pulverisering:** Arbeidsgiveren kan lettere bære tapet enn den enkelte arbeidstaker. Virksomheten kan forsikre seg mot erstatningskrav og fordele kostnadene gjennom sine priser.

**2. Prevensjon:** Ansvaret motiverer arbeidsgivere til å ansette kompetent personale, gi opplæring, og etablere gode rutiner for å forebygge skader.

**3. Sammenheng mellom risiko og gevinst:** Arbeidsgiveren tjener på arbeidstakerens innsats. Da er det rimelig at arbeidsgiveren også bærer risikoen for de skader arbeidstakeren forårsaker.

Arbeidsgiveransvaret er **svært praktisk** – det påberopes i et stort antall erstatningssaker. For skadelidte er det en fordel å kunne rette kravet mot arbeidsgiveren (som normalt har bedre betalingsevne og forsikring) i stedet for mot den enkelte arbeidstaker.`
    },
    {
      id: 'rett1-3-3-example-1',
      type: 'example',
      title: 'Arbeidsgiveransvaret i praksis',
      problem: 'Elektriker Lars er ansatt i firmaet ElektroService AS. Under installasjon av et elektrisk anlegg i Trines bolig gjør Lars en feil som fører til kortslutning og brann. Skadene på boligen utgjør 350 000 kroner. Kan Trine kreve erstatning fra ElektroService AS?',
      solution: `**Analyse etter skadeserstatningsloven § 2-1:**

**1. Arbeidsgiver-/arbeidstakerforhold:**
Lars er ansatt i ElektroService AS – det foreligger et arbeidsforhold. Vilkåret er oppfylt.

**2. Culpa hos arbeidstaker:**
Lars har gjort en faglig feil under installasjonen. En kompetent elektriker ville ikke gjort denne feilen. Lars har handlet uaktsomt (skjerpet profesjonsnorm). Vilkåret er oppfylt.

**3. Under utføring av arbeidet:**
Feilen skjedde under utføring av et oppdrag for ElektroService AS – ikke på Lars' fritid. Vilkåret er oppfylt.

**Årsakssammenheng:** Lars' feil forårsaket kortslutningen og brannen. Oppfylt.
**Økonomisk tap:** Skadene utgjør 350 000 kroner. Oppfylt.

**Konklusjon:** Trine kan kreve **350 000 kroner** i erstatning fra ElektroService AS etter arbeidsgiveransvaret i skadeserstatningsloven § 2-1. ElektroService AS er ansvarlig for Lars' uaktsomhet under arbeidet. Firmaet kan eventuelt søke regress mot Lars, men dette begrenses av skadeserstatningsloven § 2-3.`
    },
    {
      id: 'rett1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-2-ex-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Bussjåfør Ahmed er ansatt i Bybuss AS. På vei hjem fra jobb i privatbilen kolliderer Ahmed med en annen bil. Kan den skadelidte bilisten kreve erstatning fra Bybuss AS etter arbeidsgiveransvaret?',
        options: [
          { id: 'a', text: 'Ja, fordi Ahmed er ansatt i Bybuss AS', isCorrect: false },
          { id: 'b', text: 'Ja, fordi Ahmed er sjåfør av yrke', isCorrect: false },
          { id: 'c', text: 'Nei, fordi skaden skjedde utenfor arbeidstid og ikke under utføring av arbeid', isCorrect: true },
          { id: 'd', text: 'Nei, fordi arbeidsgiveransvaret bare gjelder ved personskade', isCorrect: false }
        ],
        solution: 'Arbeidsgiveransvaret krever at skaden er voldt «under arbeidstakers utføring av arbeid». Ahmed kjørte privatbilen sin på fritiden – han utførte ikke arbeid for Bybuss AS. Skaden faller derfor utenfor arbeidsgiveransvaret. Den skadelidte må rette kravet direkte mot Ahmed personlig (eller mot Ahmeds bilforsikring/bilansvar).'
      }
    },

    // --- BLOKK 3: Produktansvar og bilansvar ---
    {
      id: 'rett1-3-3-def-3',
      type: 'definition',
      title: 'Produktansvaret (produktansvarsloven)',
      content: `**Produktansvaret** innebærer at produsenten er objektivt ansvarlig for skade som et **defekt produkt** forårsaker på person eller ting.

Hjemmel: **Produktansvarsloven** (lov 23. desember 1988 nr. 104).

**Vilkår for produktansvar:**
1. Produktet må ha en **sikkerhetsmangel** (defekt) – det gir ikke den sikkerhet som brukeren med rimelighet kunne forvente
2. Det må foreligge **årsakssammenheng** mellom defekten og skaden
3. Det må foreligge et **tap** (personskade eller tingsskade)

Produsenten kan ikke fri seg fra ansvar ved å vise at han har opptrådt forsvarlig. Det er tilstrekkelig at produktet var defekt og at defekten forårsaket skaden.`
    },
    {
      id: 'rett1-3-3-text-3',
      type: 'text',
      content: `### Bilansvaret (bilansvarslova)

**Bilansvarslova** (lov 3. februar 1961 om ansvar for skade som motorvogner gjer) pålegger eieren/brukeren av et motorvogn objektivt ansvar for skade som motorvognen **gjør** (volder).

**Sentrale trekk ved bilansvaret:**
- Ansvaret er **objektivt** – det kreves ikke skyld hos fører eller eier
- Ansvaret gjelder skade som motorvognen «gjer» – altså skader som skyldes motorvognens egenskaper (fart, vekt, motor)
- **Trafikkforsikring er obligatorisk** – alle motorvogner skal ha ansvarsforsikring (bilansvarslova § 15). Forsikringsselskapet dekker erstatningskravet
- Skadelidte kan rette kravet direkte mot forsikringsselskapet (**direktekrav**, § 4)

**Eksempel:** En bil får motorstopp på motorveien. Bilen bak rekker ikke å stoppe og kjører inn i den stoppede bilen. Selv om føreren av den stoppede bilen ikke har gjort noe galt, kan eieren holdes ansvarlig etter bilansvarslova fordi skaden er knyttet til motorvognens egenskaper.`
    },
    {
      id: 'rett1-3-3-example-2',
      type: 'example',
      title: 'Produktansvar – eksploderende mobilbatteri',
      problem: 'Ida kjøper en ny mobiltelefon fra produsenten TechNord AS. Etter to uker eksploderer batteriet mens telefonen lader, og Ida får brannskader på hånden og sengetepper til 3 000 kroner ødelegges. Kan Ida kreve erstatning fra TechNord AS?',
      solution: `**Analyse etter produktansvarsloven:**

**1. Sikkerhetsmangel (defekt):**
En mobiltelefon som eksploderer under normal lading, gir ikke den sikkerheten forbrukeren med rimelighet kan forvente. Det foreligger en klar sikkerhetsmangel. Vilkåret er oppfylt.

**2. Årsakssammenheng:**
Det er defekten i batteriet som forårsaket eksplosjonen og skadene. Vilkåret er oppfylt.

**3. Tap:**
Ida har lidt personskade (brannskader) og tingsskade (ødelagte sengetepper til 3 000 kr). Vilkåret er oppfylt.

**Erstatningsutmåling:**
- Medisinske utgifter (legebesøk, behandling av brannskader)
- Eventuelt inntektstap i sykemeldingsperioden
- Tingsskade: 3 000 kroner for sengetepper
- Eventuelt ménerstatning dersom brannskadene medfører varig medisinsk invaliditet
- Eventuelt oppreisning dersom vilkårene i skadeserstatningsloven § 3-5 er oppfylt

**Konklusjon:** TechNord AS er objektivt ansvarlig etter produktansvarsloven. Det er uten betydning om produsenten har gjort alt riktig i produksjonen – ansvaret følger av at produktet var defekt.`
    },
    {
      id: 'rett1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hvorfor lovgiver har innført objektivt ansvar for bileiere (bilansvarslova). Hvilke hensyn ligger bak regelen om at alle motorvogner skal ha obligatorisk ansvarsforsikring?',
        hints: ['Tenk på de tre begrunnelsene for objektivt ansvar: pulverisering, prevensjon og sammenhengen mellom risiko og gevinst.'],
        solution: `**Begrunnelse for bilansvaret:**

1. **Høy risiko:** Bilkjøring medfører en betydelig risiko for alvorlige skader – både personskade og materielle skader. Trafikkulykker er en av de vanligste årsakene til erstatningskrav.

2. **Vanskelig å bevise skyld:** I trafikkulykker kan det være vanskelig for skadelidte å bevise at den andre bilisten var uaktsom. Objektivt ansvar fjerner denne bevisbyrden og styrker skadelidtes vern.

3. **Pulverisering gjennom forsikring:** Obligatorisk trafikkforsikring sikrer at skadelidte alltid har noen å kreve erstatning fra – selv om skadevolder ikke har betalingsevne. Kostnaden fordeles på alle bilister gjennom forsikringspremien.

4. **Rimelig risikofordeling:** Den som velger å bruke motorvogn og nyter godt av dette, bør også bære risikoen for de skader motorvognen kan forårsake. Forsikringspremien er prisen for denne risikoen.

5. **Direktekrav:** Skadelidte kan rette kravet direkte mot forsikringsselskapet (bilansvarslova § 4), noe som forenkler prosessen og sikrer rask utbetaling.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-3-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Objektivt ansvar

- **Objektivt ansvar** er erstatningsansvar uten krav om skyld – skadevolder kan holdes ansvarlig selv om vedkommende har opptrådt forsvarlig.
- Det **ulovfestede objektive ansvaret** gjelder ved stadig, typisk og ekstraordinær risiko, utviklet gjennom Høyesteretts praksis.
- **Arbeidsgiveransvaret** (skadeserstatningsloven § 2-1) gjør arbeidsgiveren ansvarlig for skade arbeidstaker volder uaktsomt under utføring av arbeidet.
- **Produktansvaret** (produktansvarsloven) gjør produsenten objektivt ansvarlig for skade som defekte produkter forårsaker.
- **Bilansvaret** (bilansvarslova) pålegger eier/bruker av motorvogn objektivt ansvar for skade motorvognen gjør. Trafikkforsikring er obligatorisk.
- Objektivt ansvar begrunnes med hensynet til **pulverisering**, **prevensjon** og **sammenhengen mellom risiko og gevinst**.
- Også ved objektivt ansvar kreves det **årsakssammenheng** og **økonomisk tap** – det er bare kravet til skyld som faller bort.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Snekker Ole er ansatt i Byggmester AS. Under arbeid på en byggeplass mister han en hammer som treffer en forbipasserende. Forbipasseren krever erstatning. Hvem kan kravet rettes mot?',
        options: [
          { id: 'a', text: 'Bare mot Ole personlig', isCorrect: false },
          { id: 'b', text: 'Bare mot Byggmester AS', isCorrect: false },
          { id: 'c', text: 'Mot både Ole og Byggmester AS – arbeidsgiver hefter etter skadeserstatningsloven § 2-1', isCorrect: true },
          { id: 'd', text: 'Mot kommunen, fordi de godkjente byggeplassen', isCorrect: false }
        ],
        solution: 'Etter arbeidsgiveransvaret i skadeserstatningsloven § 2-1 kan kravet rettes mot Byggmester AS som arbeidsgiver. Ole handlet uaktsomt under utføring av arbeidet. Skadelidte kan også velge å rette kravet direkte mot Ole (culpa-ansvar). I praksis rettes kravet oftest mot arbeidsgiver, som normalt har bedre økonomi og forsikring.'
      }
    },
    {
      id: 'rett1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign culpa-ansvaret og det objektive ansvaret. Lag en oversikt som viser:\n\na) Hva som kreves av ansvarsgrunnlag for hvert ansvar\nb) Fordeler for skadelidte ved objektivt ansvar sammenlignet med culpa-ansvar\nc) Et konkret eksempel der culpa-ansvar ikke ville gitt skadelidte erstatning, men objektivt ansvar gjør det',
        hints: ['Tenk på bevisbyrden for skadelidte – hva er lettere å bevise?', 'Bruk bilansvaret eller produktansvaret som eksempel.'],
        solution: `**a) Ansvarsgrunnlag:**
- **Culpa-ansvar:** Krever at skadevolder har handlet uaktsomt eller forsettlig. Skadelidte har bevisbyrden for uaktsomheten.
- **Objektivt ansvar:** Krever ikke skyld. Det er tilstrekkelig at skaden er knyttet til den risiko eller virksomhet som begrunner ansvaret.

**b) Fordeler for skadelidte ved objektivt ansvar:**
1. Skadelidte slipper å bevise at skadevolder var uaktsom – noe som kan være svært vanskelig.
2. Skadelidte får erstatning selv om skadevolder har handlet forsvarlig.
3. Ved lovfestet objektivt ansvar (bilansvar, produktansvar) finnes det ofte obligatorisk forsikring som sikrer at det er penger å hente.
4. Direktekrav mot forsikringsselskapet gjør prosessen enklere.

**c) Eksempel:**
En bil med nytt dekk som er produsert med en usynlig materialfeil får punktering på motorveien. Bilen spinner og treffer en annen bil. Føreren har kjørt helt forsvarlig – han har ikke handlet uaktsomt. Etter culpa-ansvaret ville skadelidte **ikke** fått erstatning, fordi det ikke foreligger uaktsomhet. Men etter **bilansvarslova** er bileieren objektivt ansvarlig for skade motorvognen gjør, og skadelidte kan kreve erstatning fra forsikringsselskapet.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Årsakssammenheng og adekvans
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3_4: TextbookChapter = {
  id: 'rettslaere-1-3-4',
  courseId: 'rettslaere-1',
  chapterNumber: '3.4',
  title: 'Årsakssammenheng og adekvans',
  description: 'Betingelseslæren, samvirkende årsaker og adekvanslæren – grensene for erstatningsansvar.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere årsakssammenheng og adekvans'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-3-4-intro',
      type: 'text',
      content: `## Årsakssammenheng og adekvans

Vi har nå sett på to typer ansvarsgrunnlag: culpa-ansvaret og det objektive ansvaret. Men uansett hvilket ansvarsgrunnlag som foreligger, må det alltid være **årsakssammenheng** mellom den ansvarsbetingende handlingen og skaden. Uten årsakssammenheng er det ingen grunn til å holde noen ansvarlig.

Men selv om det foreligger årsakssammenheng, kan skadevolders ansvar likevel begrenses dersom skadefølgen er **fjern og avledet** – altså uventet og upåregnelig. Dette kalles **adekvanskravet**.

I dette kapittelet ser vi på hvordan norsk rett vurderer årsakssammenheng og adekvans, og hvor grensene for erstatningsansvar går.`
    },

    // --- BLOKK 1: Betingelseslæren ---
    {
      id: 'rett1-3-4-def-1',
      type: 'definition',
      title: 'Betingelseslæren',
      content: `**Betingelseslæren** (conditio sine qua non) er det grunnleggende kriteriet for å vurdere om det foreligger årsakssammenheng. Spørsmålet er:

**Ville skaden ha oppstått dersom den ansvarsbetingende handlingen tenkes borte?**

- Dersom svaret er **nei** (skaden ville ikke oppstått uten handlingen), foreligger det årsakssammenheng.
- Dersom svaret er **ja** (skaden ville oppstått uansett), foreligger det **ikke** årsakssammenheng.

Den ansvarsbetingende handlingen må altså være en **nødvendig betingelse** (conditio sine qua non = betingelse uten hvilken ikke) for at skaden oppstod.`
    },
    {
      id: 'rett1-3-4-text-1',
      type: 'text',
      content: `### Betingelseslæren i praksis

Betingelseslæren er et tankeeksperiment: man tenker seg den skadevoldende handlingen bort og spør om skaden likevel ville ha oppstått.

**Positivt eksempel:** Anna kjører over rødt lys og kolliderer med Bjørns bil. Tenker vi bort Annas rødlyskjøring (hun stopper for rødt), ville kollisjonen ikke ha skjedd. Annas handling er en nødvendig betingelse for skaden. Årsakssammenheng foreligger.

**Negativt eksempel:** Per parkerer ulovlig i en gate. Samme natt treffer et lyn bilen og den brenner opp. Tenker vi bort den ulovlige parkeringen (Per hadde parkert lovlig et annet sted), ville lynet trolig ikke truffet bilen. Men: den ulovlige parkeringen er ikke en **relevant** årsak til skaden. Skaden skyldes lynnedslaget, ikke den ulovlige parkeringen. Her svikter årsakssammenhengen i rettslig forstand.

Betingelseslæren er et **nødvendig**, men ikke **tilstrekkelig** vilkår for årsakssammenheng. Den må suppleres med adekvanskravet.`
    },
    {
      id: 'rett1-3-4-example-1',
      type: 'example',
      title: 'Betingelseslæren – enkel vurdering',
      problem: 'Rørlegger Kari unnlater å teste vannrørene etter en reparasjon. Natten etter springer et rør og det blir vannskade i kjelleren til huseier Einar. Skadene utgjør 120 000 kroner. Foreligger årsakssammenheng?',
      solution: `**Analyse etter betingelseslæren:**

Spørsmålet er: Ville vannskaden ha oppstått dersom Kari hadde testet rørene?

Dersom Kari hadde testet rørene, ville hun sannsynligvis oppdaget svakheten og utbedret den. Røret ville da ikke ha sprukket. Vannskaden ville **ikke** ha oppstått.

Karis unnlatelse av å teste er altså en **nødvendig betingelse** for at skaden oppstod. Uten hennes unnlatelse hadde skaden vært unngått.

**Konklusjon:** Det foreligger årsakssammenheng mellom Karis manglende testing og vannskaden. Tenker vi bort den uaktsomme handlingen (unnlatt testing), forsvinner skaden.

Merk: Kari kan også holdes ansvarlig gjennom arbeidsgiveransvaret dersom hun er ansatt i et rørleggerfirma.`
    },
    {
      id: 'rett1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det sentrale spørsmålet i betingelseslæren (conditio sine qua non)?',
        options: [
          { id: 'a', text: 'Om skadevolder handlet med vilje', isCorrect: false },
          { id: 'b', text: 'Om skaden ville oppstått dersom den ansvarsbetingende handlingen tenkes borte', isCorrect: true },
          { id: 'c', text: 'Om skadelidte kunne ha unngått skaden', isCorrect: false },
          { id: 'd', text: 'Om det finnes vitner til hendelsen', isCorrect: false }
        ],
        solution: 'Betingelseslæren stiller spørsmålet: Ville skaden ha oppstått selv om vi tenker oss den skadevoldende handlingen borte? Dersom svaret er nei (skaden ville ikke skjedd uten handlingen), foreligger årsakssammenheng. Handlingen er da en nødvendig betingelse for at skaden oppstod.'
      }
    },
    {
      id: 'rett1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Snekker Terje glemmer å slå av en sirkelsag etter arbeidsdagens slutt. Om natten bryter det ut brann i bygget på grunn av en elektrisk feil i byggets hovedtavle. Brannen ødelegger alt utstyret i verkstedet. Foreligger det årsakssammenheng mellom Terjes glemsel og brannskadene?',
        options: [
          { id: 'a', text: 'Ja, fordi det var uaktsomt av Terje å la sagen stå på', isCorrect: false },
          { id: 'b', text: 'Ja, fordi sagen kunne ha bidratt til brannen', isCorrect: false },
          { id: 'c', text: 'Nei, fordi brannen skyldtes en feil i hovedtavlen og ville oppstått uavhengig av sagen', isCorrect: true },
          { id: 'd', text: 'Nei, fordi Terje ikke var til stede da brannen oppstod', isCorrect: false }
        ],
        solution: 'Etter betingelseslæren: Ville brannen oppstått dersom Terje hadde slått av sagen? Ja – brannen skyldtes en feil i byggets hovedtavle, ikke sirkelsagen. Tenker vi bort Terjes glemsel, ville brannen oppstått uansett. Terjes uaktsomhet er ikke en nødvendig betingelse for skaden. Det foreligger ikke årsakssammenheng.'
      }
    },

    // --- BLOKK 2: Samvirkende årsaker ---
    {
      id: 'rett1-3-4-text-2',
      type: 'text',
      content: `### Samvirkende årsaker

I praksis kan en skade ofte skyldes flere årsaker som virker sammen. Dette kalles **samvirkende årsaker** (konkurranseårsaker). Betingelseslæren kan da by på utfordringer.

**Hovedregel:** Dersom flere årsaker **samvirker** til å fremkalle skaden, og skaden ikke ville oppstått uten begge årsakene, er begge nødvendige betingelser. Begge skadevoldere kan holdes ansvarlige.

**Eksempel:** To fabrikker slipper ut avfall i en elv. Hver for seg ville utslippene ikke forårsaket skade, men sammen ødelegger de fiskebestanden. Begge fabrikkene er ansvarlige – begge utslippene er nødvendige betingelser for skaden.

**Spesielt problem – alternative årsaker:** Dersom to uavhengige årsaker hver for seg er tilstrekkelige til å forårsake skaden (A skyter B samtidig som C forgifter B), er ingen av dem nødvendige betingelser etter betingelseslæren. Norsk rett løser dette ved å modifisere betingelseslæren: begge holdes ansvarlige fordi begge har fremkalt skaden.

**Medvirkning fra skadelidte** er en egen problemstilling der skadelidte selv har bidratt til skaden (behandles i skadeserstatningsloven § 5-1).`
    },
    {
      id: 'rett1-3-4-def-2',
      type: 'definition',
      title: 'Hovedårsakslæren (P-pille-dommen)',
      content: `Ved samvirkende årsaker har Høyesterett anvendt **hovedårsakslæren**: den ansvarsbetingende årsaken må ha vært en **ikke uvesentlig medvirkende årsak** til skaden. Det kreves ikke at den var den eneste eller viktigste årsaken.

Denne formuleringen stammer fra Rt. 1992 s. 64 (**P-pille-dommen II**), der Høyesterett uttalte at det er tilstrekkelig at den påståtte skadeårsaken har vært en «nødvendig betingelse for skaden, og at den ikke utgjør en for fjern eller uvesentlig del av årsakskomplekset».

I praksis betyr dette at skadelidte **ikke** trenger å bevise at den ansvarsbetingende handlingen var den viktigste årsaken – det er nok at den var en vesentlig medvirkende årsak.`
    },
    {
      id: 'rett1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'To naboer, Geir og Hanna, setter begge opp bål i sine hager en tørr sommerdag. Ilden fra begge bålene sprer seg og setter fyr på Olgas garasje som ligger mellom de to hagene. Brannen fra Geirs bål ville alene ikke nådd garasjen, og det samme gjelder brannen fra Hannas bål. Men sammen forårsaket de brannen. Hvem er erstatningsansvarlig?',
        hints: ['Tenk på samvirkende årsaker – hva skjer når to årsaker som er utilstrekkelige alene, sammen forårsaker skaden?'],
        solution: `**Analyse:**

Her foreligger det **samvirkende årsaker**: verken Geirs bål eller Hannas bål ville alene forårsaket brannen, men **sammen** forårsaket de den.

Etter betingelseslæren er begge bålene nødvendige betingelser: tenker vi bort Geirs bål, ville brannen ikke oppstått (fordi Hannas bål alene var utilstrekkelig). Det samme gjelder omvendt.

Begge naboene har handlet uaktsomt ved å sette opp bål en tørr sommerdag uten tilstrekkelig sikring.

**Konklusjon:** Både Geir og Hanna er erstatningsansvarlige overfor Olga. De hefter solidarisk for tapet – Olga kan kreve full erstatning fra begge (eller fra én av dem, som deretter kan søke regress hos den andre for halvparten). Etter skadeserstatningsloven § 5-3 kan ansvaret fordeles mellom dem i det innbyrdes oppgjøret.`
      }
    },

    // --- BLOKK 3: Adekvanslæren ---
    {
      id: 'rett1-3-4-def-3',
      type: 'definition',
      title: 'Adekvanslæren',
      content: `**Adekvanslæren** (adekvansregelen) setter en ytre grense for erstatningsansvaret. Selv om det foreligger årsakssammenheng etter betingelseslæren, kan ansvaret avskjæres dersom skadefølgen er for **fjern, avledet og upåregnelig**.

Spørsmålet er: **Var skadefølgen en påregnelig (forutsigbar) konsekvens av den ansvarsbetingende handlingen?**

Et tap er **inadekvat** (og dermed ikke erstatningsberettiget) dersom:
1. Det er en **fjern og avledet** følge av handlingen
2. Skadefølgen var **upåregnelig** (overraskende og uforutsigbar) for skadevolder
3. Det ville vært **urimelig** å pålegge skadevolder ansvar for tapet

Adekvanskravet sikrer at skadevolder ikke holdes ansvarlig for en uendelig kjede av konsekvenser som springer ut av handlingen.`
    },
    {
      id: 'rett1-3-4-text-3',
      type: 'text',
      content: `### Adekvansvurderingen i praksis

Adekvansvurderingen er en skjønnsmessig helhetsvurdering der retten veier flere momenter:

**1. Påregnelighet (forutsigbarhet)**
Var det påregnelig for skadevolder at handlingen kunne føre til denne typen skade? En bilist som kjører på en fotgjenger, må forvente at fotgjengeren kan bli alvorlig skadet – det er en påregnelig følge. Men at fotgjengeren, som viser seg å være en berømt konsertpianist, mister evnen til å spille og taper millioner i fremtidige inntekter, kan være en upåregnelig følge.

**2. Nærhet i årsaksrekken**
Jo lengre kjeden er mellom handlingen og skadefølgen, desto mer fjern og avledet er følgen. En liten hendelse som utløser en dominorekke av konsekvenser, kan på et punkt bli for fjern.

**3. Skadens art og omfang**
Er det tale om en type skade som er typisk for den aktuelle handlingen? Og er skadens omfang i rimelig proporsjon til handlingens risiko?

**Sårbarhetsprinsippet (eggeskalle-regelen):**
En viktig modifikasjon: skadevolder må ta skadelidte som han er. Dersom skadelidte er spesielt sårbar (f.eks. har en skjult sykdom som forverres), kan skadevolder ikke påberope seg at skadefølgen var upåregnelig. Denne regelen ble fastslått i Rt. 2001 s. 320 (Nilsen-dommen).`
    },
    {
      id: 'rett1-3-4-example-2',
      type: 'example',
      title: 'Adekvans – fjern og avledet skadefølge',
      problem: 'Anders kolliderer med Beates bil på vei til en jobbintervju. Beate blir forsinket og møter ikke opp til jobbintervjuet. Hun får ikke jobben. Jobben ville gitt henne 600 000 kroner i årslønn. Beate krever erstatning fra Anders for den tapte årslønnen. Er kravet adekvat?',
      solution: `**Analyse:**

**Årsakssammenheng (betingelseslæren):**
Uten kollisjonen ville Beate kommet til jobbintervjuet. Kollisjonen er en nødvendig betingelse for forsinkelsen. Årsakssammenheng foreligger i faktisk forstand.

**Adekvansvurdering:**

1. **Påregnelighet:** For Anders var det ikke påregnelig at Beate var på vei til et jobbintervju som ville gi henne en bestemt jobb med en bestemt lønn. At en kollisjon fører til forsinkelse er påregnelig, men at forsinkelsen fører til tap av en spesifikk jobb er **upåregnelig**.

2. **Nærhet i årsaksrekken:** Kjeden er lang: kollisjon → forsinkelse → møter ikke til intervju → får ikke jobben → taper inntekt. Flere usikre ledd gjør følgen fjern og avledet. Det er dessuten usikkert om Beate ville fått jobben selv om hun hadde møtt opp.

3. **Skadens art:** Tapt arbeidsinntekt som følge av en ubesvart jobbsøknad er en helt annen type skade enn det man normalt forventer av en trafikkollisjon (personskade, materielle skader).

**Konklusjon:** Kravet om erstatning for den tapte årslønnen er **inadekvat** – det er en for fjern, avledet og upåregnelig følge av kollisjonen. Anders er ansvarlig for direkte skader (bilreparasjon, eventuell personskade), men ikke for det tapte jobbintervjuet.`
    },
    {
      id: 'rett1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer sårbarhetsprinsippet (eggeskalle-regelen)?',
        options: [
          { id: 'a', text: 'At skadelidte alltid må opplyse om sine helseproblemer på forhånd', isCorrect: false },
          { id: 'b', text: 'At skadevolder må ta skadelidte som vedkommende er, også med spesiell sårbarhet', isCorrect: true },
          { id: 'c', text: 'At erstatningen reduseres dersom skadelidte er spesielt sårbar', isCorrect: false },
          { id: 'd', text: 'At skadevolder bare er ansvarlig for skader på friske personer', isCorrect: false }
        ],
        solution: 'Sårbarhetsprinsippet (eggeskalle-regelen) innebærer at skadevolder må ta skadelidte som vedkommende er. Dersom skadelidte er spesielt sårbar – for eksempel har en skjult benskjørhet som gjør at et lett dytt forårsaker brudd – kan ikke skadevolder påberope seg at skadefølgen var upåregnelig. Prinsippet ble fastslått i Rt. 2001 s. 320.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-3-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Årsakssammenheng og adekvans

- **Betingelseslæren** (conditio sine qua non) er grunnkriteriet for årsakssammenheng: ville skaden oppstått dersom handlingen tenkes borte?
- Ved **samvirkende årsaker** holder norsk rett alle medvirkende skadevoldere ansvarlige, forutsatt at deres bidrag var en «ikke uvesentlig medvirkende årsak» (hovedårsakslæren).
- **Adekvanslæren** setter en ytre grense for ansvaret: skadefølger som er fjerne, avledede og upåregnelige er ikke erstatningsberettigede.
- I adekvansvurderingen legges det vekt på **påregnelighet**, **nærhet i årsaksrekken** og **skadens art og omfang**.
- **Sårbarhetsprinsippet** (eggeskalle-regelen) innebærer at skadevolder må ta skadelidte som vedkommende er – også med spesiell sårbarhet.
- Årsakssammenheng og adekvans er **kumulative vilkår**: begge må være oppfylt i tillegg til ansvarsgrunnlaget.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom betingelseslæren og adekvanslæren med egne ord. Hvorfor trenger erstatningsretten begge disse verktøyene?',
        hints: ['Betingelseslæren avgjør om handlingen var en årsak. Adekvanslæren avgjør om skadefølgen var rimelig å forvente.'],
        solution: `**Betingelseslæren** avgjør om det i det hele tatt foreligger faktisk årsakssammenheng: var handlingen en nødvendig betingelse for skaden? Dette er det første filteret – uten faktisk årsakssammenheng er det ingen grunn til å snakke om ansvar.

**Adekvanslæren** er det andre filteret: selv om årsakssammenheng foreligger, setter den grenser for hvor langt ansvaret strekker seg. Skadefølger som er fjerne, avledede og upåregnelige avskjæres.

**Hvorfor trenger vi begge?**
Betingelseslæren alene ville gjort skadevolder ansvarlig for en uendelig kjede av konsekvenser. Enhver handling har et utall følger, og uten adekvansregelen ville ansvaret bli urimelig vidt. Adekvanslæren sikrer at ansvaret begrenses til påregnelige og rimelige følger – noe som gir forutsigbarhet og rettferdighet.

**Eksempel:** Per kjører på Annas bil. Anna blir stresset og glemmer å låse døren hjemme. En tyv bryter seg inn. Etter betingelseslæren foreligger det årsakssammenheng (uten kollisjonen hadde Anna låst). Men etter adekvanslæren er innbruddet en for fjern og avledet følge – Per er ikke ansvarlig for innbruddet.`
      }
    },
    {
      id: 'rett1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Susanne dytter Olav lett i skulderen under en krangel. Olav har en ukjent beinskjørhet (osteoporose) og brekker kragebeinet av det lette dyttet. Vanligvis ville et slikt dytt ikke medført noe brudd.\n\na) Vurder om det foreligger \u00e5rsakssammenheng etter betingelseslæren.\nb) Drøft om skadefølgen er adekvat med tanke p\u00e5 sårbarhetsprinsippet.\nc) Konkluder: Er Susanne erstatningsansvarlig?',
        hints: ['Husk eggeskalle-regelen: skadevolder m\u00e5 ta skadelidte som vedkommende er.', 'Rt. 2001 s. 320 er sentral for sårbarhetsprinsippet.'],
        solution: `**a) Årsakssammenheng (betingelseslæren):**
Ville bruddet oppstått dersom Susanne ikke hadde dyttet? Nei – det var dyttet som utløste bruddet. Susannes handling er en nødvendig betingelse for skaden. Årsakssammenheng foreligger.

**b) Adekvans og sårbarhetsprinsippet:**
Normalt ville et lett dytt i skulderen ikke forårsake brudd. Skadefølgen (kragebeinsbrudd) er i utgangspunktet upåregnelig for en vanlig person som dytter noen lett.

Men: **sårbarhetsprinsippet** (eggeskalle-regelen) slår fast at skadevolder må ta skadelidte som vedkommende er. Olavs beinskjørhet er en spesiell sårbarhet som Susanne ikke kjente til, men det fritar henne ikke fra ansvar. Prinsippet ble fastslått i Rt. 2001 s. 320: skadevolder kan ikke påberope seg at skadelidtes spesielle sårbarhet var upåregnelig.

Skadefølgen er dermed **adekvat** til tross for at den i utgangspunktet virker upåregnelig, fordi sårbarhetsprinsippet modifiserer adekvansvurderingen.

**c) Konklusjon:**
Susanne er erstatningsansvarlig. Hun handlet uaktsomt (ansvarsgrunnlag – å dytte noen er uforsvarlig), det foreligger årsakssammenheng (uten dyttet hadde bruddet ikke skjedd), og skadefølgen er adekvat i kraft av sårbarhetsprinsippet. Susanne må betale erstatning for Olavs medisinske utgifter, eventuelt inntektstap og andre dokumenterte tap.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Erstatningsutmåling
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3_5: TextbookChapter = {
  id: 'rettslaere-1-3-5',
  courseId: 'rettslaere-1',
  chapterNumber: '3.5',
  title: 'Erstatningsutmåling',
  description: 'Økonomisk tap, ikke-økonomisk tap, oppreisning og ménerstatning – hvordan erstatningens størrelse beregnes.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beregne erstatningsomfang'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-3-5-intro',
      type: 'text',
      content: `## Erstatningsutmåling

I de foregående kapitlene har vi lært når erstatningsansvar oppstår: ansvarsgrunnlag, årsakssammenheng og adekvans. Men når ansvaret først er fastslått, gjenstår et helt avgjørende spørsmål: **Hvor mye skal skadelidte få i erstatning?**

Erstatningsutmåling handler om å beregne erstatningens størrelse. Utgangspunktet er reparasjonsprinsippet: skadelidte skal stilles økonomisk som om skaden ikke hadde skjedd. I praksis er dette ofte langt mer komplisert enn det høres ut, særlig ved personskader der tapet kan strekke seg over mange tiår.

I dette kapittelet ser vi på de ulike tapskategoriene: økonomisk tap, ménerstatning og oppreisning – og reglene for beregning av hver av dem.`
    },

    // --- BLOKK 1: Økonomisk tap ---
    {
      id: 'rett1-3-5-def-1',
      type: 'definition',
      title: 'Økonomisk tap',
      content: `**Økonomisk tap** er det tapet som kan måles i kroner og øre. Erstatning for økonomisk tap er hovedregelen i norsk erstatningsrett og følger direkte av reparasjonsprinsippet.

Ved **tingskade** (skade på ting eller gjenstander) fastsettes det økonomiske tapet normalt til reparasjonskostnad eller gjenanskaffelsesverdi, jf. ulovfestet rett.

Ved **personskade** reguleres det økonomiske tapet av skadeserstatningsloven § 3-1, som dekker følgende hovedposter:
- **Påførte utgifter** – merutgifter skadelidte allerede har hatt (medisinsk behandling, transport, tilpasning av bolig mv.)
- **Fremtidige utgifter** – merutgifter skadelidte vil få i fremtiden som følge av skaden
- **Lidt inntektstap** – inntekt skadelidte allerede har tapt (lønn, næringsinntekt)
- **Fremtidig inntektstap** – inntekt skadelidte vil tape i fremtiden fordi skaden reduserer arbeidsevnen`
    },
    {
      id: 'rett1-3-5-text-1',
      type: 'text',
      content: `### Beregning av økonomisk tap ved tingskade

Ved skade på gjenstander beregnes erstatningen slik:

**1. Reparasjonskostnad**
Kan gjenstanden repareres, er utgangspunktet at skadevolder dekker reparasjonskostnaden. Dersom reparasjonskostnaden overstiger gjenstandens verdi, er gjenstanden å anse som «totalskadet», og erstatningen beregnes ut fra gjenanskaffelsesverdi.

**2. Gjenanskaffelsesverdi**
Ved totaltap erstattes verdien av en tilsvarende gjenstand i tilsvarende stand. En ti år gammel sykkel erstattes ikke med en ny sykkel – det gjøres fradrag for alder, slitasje og bruk (elde-fradrag).

**3. Følgetap**
I tillegg til selve tingskaden kan skadelidte kreve dekket følgetap: utgifter til leiebil, tap av bruksmulighet eller annet dokumentert tap som er en adekvat følge av skaden.

**Viktig:** Skadelidte har en **tapsbegrensningsplikt** – vedkommende må gjøre det som med rimelighet kan forventes for å begrense tapet, jf. skadeserstatningsloven § 5-1 nr. 2. Forsømmer skadelidte denne plikten, kan erstatningen reduseres.`
    },
    {
      id: 'rett1-3-5-example-1',
      type: 'example',
      title: 'Erstatningsutmåling ved tingskade',
      problem: 'Kari rygger inn i Lises fem år gamle bil (opprinnelig kjøpt for 350 000 kr). Verkstedet gir et reparasjonsoverslag på 95 000 kr. Markedsverdien på bilen før ulykken var 180 000 kr. Lise trenger leiebil i to uker mens bilen repareres, til en kostnad på 8 000 kr. Beregn erstatningen.',
      solution: `**Analyse:**

**1. Reparasjon eller totaltap?**
Reparasjonskostnaden er 95 000 kr, mens bilens markedsverdi er 180 000 kr. Siden reparasjonskostnaden (95 000 kr) er lavere enn markedsverdien (180 000 kr), er bilen ikke totalskadet. Utgangspunktet er da at Kari dekker reparasjonskostnaden.

**2. Reparasjonskostnad:** 95 000 kr

**3. Følgetap (leiebil):**
Lise trenger transport mens bilen repareres. Utgiften til leiebil (8 000 kr) er et dokumentert og adekvat følgetap.

**4. Elde-fradrag?**
Det gjøres ikke fradrag for alder ved reparasjon. Fradrag for slitasje er først aktuelt dersom reparasjonen gir bilen en høyere verdi enn den hadde før skaden (f.eks. nye deler i en gammel bil). Vi forutsetter her at reparasjonen gjenoppretter status quo.

**Beregning:**
| Post | Beløp |
|------|-------|
| Reparasjonskostnad | 95 000 kr |
| Leiebil (2 uker) | 8 000 kr |
| **Totalt** | **103 000 kr** |

**Konklusjon:** Kari må betale 103 000 kr i erstatning til Lise.`
    },
    {
      id: 'rett1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer reparasjonsprinsippet ved erstatningsutmåling?',
        options: [
          { id: 'a', text: 'Skadelidte skal alltid få erstattet gjenstanden med en ny', isCorrect: false },
          { id: 'b', text: 'Skadelidte skal stilles økonomisk som om skaden ikke hadde skjedd', isCorrect: true },
          { id: 'c', text: 'Skadevolder skal straffes i tillegg til å betale erstatning', isCorrect: false },
          { id: 'd', text: 'Erstatningen skal alltid tilsvare gjenstandens nypris', isCorrect: false }
        ],
        solution: 'Reparasjonsprinsippet betyr at skadelidte skal settes i samme økonomiske stilling som om skaden ikke hadde skjedd. Det innebærer full kompensasjon, men ikke overkompensasjon. Ved tingskade betyr dette reparasjonskostnad eller gjenanskaffelsesverdi med fradrag for alder og slitasje.'
      }
    },

    // --- BLOKK 2: Personskadeerstatning ---
    {
      id: 'rett1-3-5-text-2',
      type: 'text',
      content: `### Beregning av økonomisk tap ved personskade

Personskadeerstatning er langt mer komplekst enn tingskadeerstatning. Skadeserstatningsloven § 3-1 gir hjemmel for erstatning av det **fulle økonomiske tapet** ved personskade, inkludert:

**Påført tap (fra skadetidspunktet til domstidspunktet):**
- Merutgifter til medisinsk behandling, medisiner, rehabilitering
- Utgifter til transport, tilpasning av bolig, hjelpemidler
- Tapt arbeidsinntekt i perioden

**Fremtidig tap (fra domstidspunktet og fremover):**
- Fremtidige merutgifter (varig medisinsk behandling, hjelpebehov)
- Fremtidig inntektstap (redusert arbeidsevne)

Ved beregning av fremtidig tap må retten gjøre antakelser om skadelidtes hypotetiske fremtid: hva ville inntekten ha vært uten skaden? Hvor lenge ville skadelidte ha arbeidet? Hvilke merutgifter vil påløpe? Disse antakelsene innebærer stor usikkerhet, og retten må bygge på «det mest sannsynlige hendelsesforløpet».

**Standardisert erstatning til barn:** Skadeserstatningsloven § 3-2a fastsetter standardisert erstatning for inntektstap til barn under 16 år. Bakgrunnen er at det er svært vanskelig å forutsi et lite barns fremtidige inntekt. Den standardiserte erstatningen beregnes ut fra folketrygdens grunnbeløp (G).`
    },
    {
      id: 'rett1-3-5-example-2',
      type: 'example',
      title: 'Personskadeerstatning – økonomisk tap',
      problem: 'Thomas (35 år) blir alvorlig skadet i en trafikkulykke. Han tjente 550 000 kr i året og vil på grunn av skaden bare kunne arbeide 50 % i fremtiden. Han har hatt medisinske utgifter på 120 000 kr og vil ha fremtidige behandlingsutgifter på 30 000 kr per år. Hvilke poster inngår i det økonomiske tapet?',
      solution: `**Analyse etter skadeserstatningsloven § 3-1:**

**1. Påførte merutgifter:**
- Medisinske utgifter: 120 000 kr
- Eventuelle transportutgifter, tilpasninger mv.

**2. Påført inntektstap:**
- Tapt inntekt fra skadetidspunktet til domstidspunktet (50 % av 550 000 kr per år i perioden)

**3. Fremtidige merutgifter:**
- 30 000 kr per år i behandlingsutgifter, neddiskontert til nåverdi over forventet levetid

**4. Fremtidig inntektstap:**
- Thomas taper 275 000 kr per år (50 % av 550 000 kr) fra domstidspunktet til pensjonsalder (67 år)
- Det er 32 år med 275 000 kr per år = 8 800 000 kr nominelt
- Beløpet neddiskonteres til nåverdi (kapitaliseringsrenten er normalt 4 %)

**5. Fradrag:**
- Trygdeytelser og andre offentlige ytelser som skadelidte mottar, går til fradrag i erstatningen (jf. § 3-1 tredje ledd)
- Skatteulempe tillegges (erstatningen er skattefri, men gir lavere pensjon)

**Konklusjon:** Det totale økonomiske tapet består av påførte utgifter, påført inntektstap, fremtidige utgifter og fremtidig inntektstap, med fradrag for trygdeytelser. Beløpet vil normalt ligge på flere millioner kroner.`
    },
    {
      id: 'rett1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Magnus (42 år, årslønn 600 000 kr) mister 100 % arbeidsevne i en arbeidsulykke. Hvilken post utgjør normalt den største delen av erstatningen?',
        options: [
          { id: 'a', text: 'Medisinske utgifter', isCorrect: false },
          { id: 'b', text: 'Fremtidig inntektstap', isCorrect: true },
          { id: 'c', text: 'Påført inntektstap', isCorrect: false },
          { id: 'd', text: 'Transportutgifter', isCorrect: false }
        ],
        solution: 'Fremtidig inntektstap er normalt den klart største erstatningsposten ved alvorlige personskader. Magnus taper 600 000 kr per år i 25 år (til pensjonsalder 67), noe som nominelt utgjør 15 millioner kroner. Selv etter neddiskontering og fradrag for trygdeytelser vil dette typisk utgjøre det største beløpet.'
      }
    },

    // --- BLOKK 3: Ménerstatning ---
    {
      id: 'rett1-3-5-def-2',
      type: 'definition',
      title: 'Ménerstatning',
      content: `**Ménerstatning** er erstatning for varig og betydelig skade av medisinsk art, jf. skadeserstatningsloven § 3-2. Ménerstatning er en erstatning for **ikke-økonomisk tap** – den kompenserer for redusert livskvalitet, smerter og ulemper som ikke kan måles i kroner og øre.

Vilkår for ménerstatning:
- Skaden må være **varig** (minst 10 år, i praksis livsvarig)
- Skaden må være **betydelig** (medisinsk invaliditet på minst 15 %)
- Begge vilkårene er kumulative

Ménerstatningens størrelse fastsettes etter en **medisinsk invaliditetstabell** utgitt av Arbeids- og inkluderingsdepartementet. Invaliditetsgraden bestemmer erstatningens størrelse, som beregnes ut fra folketrygdens grunnbeløp (G).`
    },
    {
      id: 'rett1-3-5-text-3',
      type: 'text',
      content: `### Ménerstatning i praksis

Ménerstatningen beregnes etter en fast tabell som knytter medisinsk invaliditetsgrad til erstatningsbeløp. Noen eksempler:

| Invaliditetsgrad | Typisk skade | Erstatningsbeløp (ca.) |
|---|---|---|
| 15–24 % | Moderate ryggplager | 0,75 G per år |
| 25–34 % | Tap av en arm | 1 G per år |
| 35–54 % | Alvorlig hodeskade | 1,5 G per år |
| 55–74 % | Lammelse i begge ben | 2 G per år |
| 75–100 % | Totalinvaliditet | 2,5–3 G per år |

**Grunnbeløpet (G)** fastsettes årlig av Stortinget og var per 1. mai 2024 på 124 028 kroner.

**Viktige poenger:**
- Ménerstatning ytes uavhengig av om skadelidte har økonomisk tap – det er den varige medisinske skaden i seg selv som kompenseres
- Ménerstatningen utbetales normalt som et engangsbeløp (kapitalisert)
- Skadelidtes alder på skadetidspunktet har betydning: jo yngre skadelidte er, desto flere leveår med ménene, og desto høyere totalerstatning
- Ménerstatning er skattefri`
    },
    {
      id: 'rett1-3-5-example-3',
      type: 'example',
      title: 'Ménerstatning',
      problem: 'Nora (25 år) påføres en varig nakkeskade etter en bilulykke. Medisinsk invaliditet fastsettes til 20 %. Har Nora krav på ménerstatning?',
      solution: `**Analyse etter skadeserstatningsloven § 3-2:**

**Vilkår 1 – Varig skade:**
Noras nakkeskade er varig – den forventes å vare livet ut. Vilkåret er oppfylt.

**Vilkår 2 – Betydelig skade:**
Medisinsk invaliditet er fastsatt til 20 %. Grensen for «betydelig» skade er normalt 15 %. Noras invaliditetsgrad på 20 % overstiger denne terskelen. Vilkåret er oppfylt.

**Utmåling:**
Med 20 % invaliditet havner Nora i gruppen 15–24 %, som gir om lag 0,75 G per år. Nora er 25 år, og beløpet kapitaliseres over forventet gjenstående levetid (ca. 60 år for en kvinne).

Ménerstatningen skal kompensere for de daglige plagene og den reduserte livskvaliteten Nora vil oppleve resten av livet – selv om hun ikke nødvendigvis har noe økonomisk tap.

**Konklusjon:** Nora har krav på ménerstatning fordi skaden er både varig og betydelig (20 % medisinsk invaliditet). Erstatningen beregnes etter invaliditetstabellen og kapitaliseres basert på hennes alder.`
    },
    {
      id: 'rett1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke to vilkår må være oppfylt for at skadelidte skal ha krav på ménerstatning etter skadeserstatningsloven § 3-2?',
        options: [
          { id: 'a', text: 'Skaden må være varig og skadevolder må ha utvist grov uaktsomhet', isCorrect: false },
          { id: 'b', text: 'Skaden må ha forårsaket økonomisk tap og skadevolder må ha utvist forsett', isCorrect: false },
          { id: 'c', text: 'Skaden må være varig og betydelig (minst 15 % medisinsk invaliditet)', isCorrect: true },
          { id: 'd', text: 'Skadelidte må ha vært under 30 år og skaden må være fysisk', isCorrect: false }
        ],
        solution: 'Ménerstatning etter skadeserstatningsloven § 3-2 krever at skaden er både varig (minst 10 år, normalt livsvarig) og betydelig (medisinsk invaliditet på minst 15 %). Det er ikke noe krav om økonomisk tap – ménerstatning kompenserer for redusert livskvalitet. Det stilles heller ikke krav om grov uaktsomhet eller forsett hos skadevolder.'
      }
    },

    // --- BLOKK 4: Oppreisning ---
    {
      id: 'rett1-3-5-def-3',
      type: 'definition',
      title: 'Oppreisning',
      content: `**Oppreisning** (oppreisningserstatning) er erstatning for **ikke-økonomisk skade** – typisk tort og smerte – jf. skadeserstatningsloven § 3-5. I motsetning til ménerstatning, som krever varig og betydelig skade, kan oppreisning tilkjennes for midlertidige skader og krenkelser.

Vilkår for oppreisning:
- Skadevolder må ha voldt skade på person eller krenket en annen
- Handlingen må ha vært **forsettlig** eller **grovt uaktsom**
- Oppreisning krever altså kvalifisert skyld – simpel uaktsomhet er ikke tilstrekkelig

Oppreisning fastsettes til det beløp retten finner **rimelig**, jf. § 3-5 første ledd. Retten har stor skjønnsfrihet, men det har utviklet seg normerte beløp for visse typer krenkelser (f.eks. voldtekt, drap).`
    },
    {
      id: 'rett1-3-5-text-4',
      type: 'text',
      content: `### Oppreisning i praksis

Oppreisning skiller seg fra vanlig erstatning og ménerstatning på flere viktige punkter:

**Kvalifisert skyldkrav:**
Mens vanlig erstatning kan tilkjennes ved simpel uaktsomhet (og ved objektivt ansvar helt uten skyld), krever oppreisning etter § 3-5 at skadevolder har handlet **forsettlig** eller **grovt uaktsomt**. Dette er et strengt krav.

**Normerte oppreisningsbeløp:**
Høyesterett har fastsatt normerte beløp for visse typer krenkelser:
- Voldtekt: ca. 150 000 kr (normert)
- Drap (oppreisning til etterlatte): ca. 200 000 kr (normert)
- Vold og trusler: varierer fra 10 000 til 100 000+ kr avhengig av alvorlighetsgrad

**Forskjellen fra ménerstatning:**
| | Oppreisning (§ 3-5) | Ménerstatning (§ 3-2) |
|---|---|---|
| Skyldkrav | Forsett eller grov uaktsomhet | Ikke skyldkrav |
| Skadens varighet | Også midlertidig skade | Varig skade (minst 10 år) |
| Skadens alvor | Også lettere skade/krenkelse | Betydelig (minst 15 % invaliditet) |
| Utmåling | Rimelighetsskjønn / normerte beløp | Invaliditetstabell |
| Formål | Kompensasjon for tort og smerte | Kompensasjon for varig mén |

Skadelidte kan i prinsippet tilkjennes **både** ménerstatning og oppreisning for samme hendelse, forutsatt at vilkårene for begge er oppfylt.`
    },
    {
      id: 'rett1-3-5-example-4',
      type: 'example',
      title: 'Oppreisning',
      problem: 'Henrik slår Petter i ansiktet med knyttneven under en krangel, og Petter får et kutt som krever fire sting. Kuttet leges uten varige mén. Har Petter krav på oppreisning?',
      solution: `**Analyse etter skadeserstatningsloven § 3-5:**

**Vilkår 1 – Skade på person eller krenkelse:**
Petter er påført en personskade (kutt som krever sting). Vilkåret er oppfylt.

**Vilkår 2 – Forsett eller grov uaktsomhet:**
Henrik slo Petter med vilje (forsett). Skyldkravet er oppfylt.

**Ménerstatning?**
Kuttet leges uten varige mén. Skaden er verken varig eller betydelig. Vilkårene for ménerstatning etter § 3-2 er ikke oppfylt.

**Oppreisningens størrelse:**
Oppreisning fastsettes til det beløp retten finner rimelig. Voldens alvorlighetsgrad (ett slag, begrenset skade) tilsier et moderat beløp. I rettspraksis tilkjennes typisk 10 000–30 000 kr for slik vold.

**Konklusjon:** Petter har krav på oppreisning fordi Henrik forsettlig har voldt personskade. Beløpet fastsettes etter rettens skjønn – trolig i størrelsesorden 15 000–25 000 kr. I tillegg kan Petter kreve erstatning for økonomisk tap (legebehandling, eventuelle ødelagte klær mv.).`
    },
    {
      id: 'rett1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom ménerstatning (§ 3-2) og oppreisning (§ 3-5). Hvorfor har vi behov for begge ordningene?',
        hints: ['Tenk på skyldkravet, skadens varighet og utmålingsmetoden.'],
        solution: `**Ménerstatning (§ 3-2)** kompenserer for varig og betydelig medisinsk skade. Den krever minst 15 % medisinsk invaliditet og beregnes etter en fast invaliditetstabell. Det stilles ikke krav om skyld – også ved objektivt ansvar kan ménerstatning tilkjennes.

**Oppreisning (§ 3-5)** kompenserer for tort og smerte ved personskade eller krenkelse. Den krever forsett eller grov uaktsomhet, men stiller ikke krav om varig eller betydelig skade. Beløpet fastsettes etter rimelighetsskjønn.

**Hvorfor trenger vi begge?**
De dekker ulike situasjoner:
- En person som påføres en varig skade i en trafikkulykke der sjåføren var simpelt uaktsom, kan få ménerstatning (§ 3-2), men ikke oppreisning (§ 3-5) – fordi skyldkravet for oppreisning ikke er oppfylt.
- En person som blir slått ned og får et kutt som leges uten varige mén, kan få oppreisning (§ 3-5), men ikke ménerstatning (§ 3-2) – fordi skaden ikke er varig og betydelig.
- En person som forsettlig påføres en varig skade, kan få **begge deler**.

Ordningene utfyller hverandre og sikrer at ulike typer ikke-økonomisk skade kompenseres på en rimelig måte.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-3-5-summary',
      type: 'text',
      content: `### Oppsummering

- **Erstatningsutmåling** handler om å beregne erstatningens størrelse etter at ansvar er fastslått.
- **Reparasjonsprinsippet** er utgangspunktet: skadelidte skal stilles økonomisk som om skaden ikke hadde skjedd.
- Ved **tingskade** erstattes reparasjonskostnad eller gjenanskaffelsesverdi (med elde-fradrag), pluss dokumenterte følgetap.
- Ved **personskade** erstattes det fulle økonomiske tapet etter skadeserstatningsloven § 3-1: påførte og fremtidige merutgifter, samt påført og fremtidig inntektstap.
- **Ménerstatning** (§ 3-2) kompenserer for varig og betydelig medisinsk skade (minst 15 % invaliditet). Den beregnes etter invaliditetstabellen og krever ikke skyld.
- **Oppreisning** (§ 3-5) kompenserer for tort og smerte ved personskade eller krenkelse. Den krever forsett eller grov uaktsomhet og fastsettes etter rettens skjønn.
- Skadelidte har en **tapsbegrensningsplikt** og må gjøre det som med rimelighet kan forventes for å begrense tapet.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Amina (30 år, sykepleier med årslønn 520 000 kr) blir påkjørt av en beruset sjåfør og påføres en varig ryggskade med 25 % medisinsk invaliditet. Hun kan bare arbeide 60 % i fremtiden. Hun har hatt medisinske utgifter på 85 000 kr.\n\na) Hvilke erstatningsposter kan Amina kreve?\nb) Forklar hvorfor Amina kan kreve både ménerstatning og oppreisning i denne saken.\nc) Har det noen betydning at sjåføren var beruset?',
        hints: ['Gå gjennom alle erstatningspostene systematisk: økonomisk tap, ménerstatning og oppreisning.', 'Beruset kjøring er normalt grovt uaktsomt.'],
        solution: `**a) Erstatningsposter Amina kan kreve:**

1. **Økonomisk tap (§ 3-1):**
   - Påførte merutgifter: 85 000 kr i medisinske utgifter
   - Påført inntektstap: tapt lønn fra skade til dom
   - Fremtidige merutgifter: fortsatt medisinsk behandling
   - Fremtidig inntektstap: 40 % av 520 000 kr = 208 000 kr per år i ca. 37 år (til pensjonsalder 67), neddiskontert til nåverdi

2. **Ménerstatning (§ 3-2):**
   - Varig skade: ryggskaden er livsvarig – oppfylt
   - Betydelig skade: 25 % invaliditet > 15 % – oppfylt
   - Beregnes etter invaliditetstabellen: ca. 1 G per år, kapitalisert over forventet levetid

3. **Oppreisning (§ 3-5):**
   - Personskade: oppfylt
   - Kvalifisert skyld: se punkt b)

**b) Hvorfor både ménerstatning og oppreisning?**
Ménerstatning (§ 3-2) krever varig og betydelig skade – dette er oppfylt (25 % invaliditet). Det kreves ikke kvalifisert skyld.

Oppreisning (§ 3-5) krever forsett eller grov uaktsomhet. Beruset kjøring er i rettspraksis konsekvent ansett som **grovt uaktsomt** (og normalt også forsettlig med hensyn til selve kjøringen). Skyldkravet er dermed oppfylt.

Amina kan derfor kreve begge deler – de kompenserer for ulike ting (varig mén vs. tort og smerte).

**c) Betydningen av at sjåføren var beruset:**
At sjåføren var beruset, er avgjørende for oppreisningskravet: uten grov uaktsomhet eller forsett ville Amina ikke hatt krav på oppreisning. I tillegg kan beruselsen ha betydning for oppreisningens størrelse, da graden av klanderverdighet hos skadevolder er et moment i utmålingen.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6: Medvirkning og lemping
// ============================================================================

export const CHAPTER_RETTSLAERE_1_3_6: TextbookChapter = {
  id: 'rettslaere-1-3-6',
  courseId: 'rettslaere-1',
  chapterNumber: '3.6',
  title: 'Medvirkning og lemping',
  description: 'Skadelidtes medvirkning, lemping av erstatningsansvar og forsikring – når erstatningen kan reduseres eller justeres.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere medvirkning og lemping'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-3-6-intro',
      type: 'text',
      content: `## Medvirkning og lemping

Så langt i erstatningsretten har vi fokusert på **skadevolder**: Når er skadevolder ansvarlig, og hvor mye skal vedkommende betale? Men hva om skadelidte selv har bidratt til at skaden oppstod? Og hva om erstatningsbeløpet er så stort at det ville ruinere skadevolder?

Norsk erstatningsrett har to viktige sikkerhetsventiler som kan justere erstatningens størrelse: **medvirkningsregelen** og **lempingsregelen**. I tillegg spiller **forsikring** en sentral rolle i hvordan erstatningsansvar håndteres i praksis.

I dette kapittelet ser vi på hvordan skadelidtes egen opptreden kan redusere erstatningen, når erstatningsansvaret kan lempes, og hvordan forsikringsordninger virker sammen med erstatningsretten.`
    },

    // --- BLOKK 1: Skadelidtes medvirkning ---
    {
      id: 'rett1-3-6-def-1',
      type: 'definition',
      title: 'Medvirkning (skadeserstatningsloven § 5-1)',
      content: `**Medvirkning** innebærer at skadelidte selv har bidratt til skaden ved egen skyld (uaktsomhet). Etter skadeserstatningsloven § 5-1 nr. 1 kan erstatningen **reduseres eller falle helt bort** dersom skadelidte har medvirket til skaden ved egen uaktsomhet.

Vilkår for medvirkningsavkorting:
- Skadelidte må ha utvist **skyld** (uaktsomhet) – ren uheldighet er ikke medvirkning
- Skadelidtes opptreden må ha vært en **medvirkende årsak** til skaden eller skadens omfang
- Avkortingen fastsettes etter en **helhetsvurdering** der det legges vekt på skadelidtes skyld og forholdene ellers

Medvirkning gir normalt en **prosentvis avkorting** i erstatningen, for eksempel 25 %, 50 % eller i sjeldne tilfeller 100 % (bortfall).`
    },
    {
      id: 'rett1-3-6-text-1',
      type: 'text',
      content: `### Medvirkning i praksis

Medvirkningsregelen i § 5-1 skiller mellom to former for medvirkning:

**1. Medvirkning til selve skaden (§ 5-1 nr. 1)**
Skadelidte har ved egen uaktsomhet bidratt til at skaden oppstod. Eksempler:
- En fotgjenger krysser veien på rødt lys og blir påkjørt
- En arbeidstaker unnlater å bruke påbudt verneutstyr
- En syklist sykler uten lys i mørket

**2. Unnlatt skadebegrensning (§ 5-1 nr. 2)**
Skadelidte har forsømt å begrense skadens omfang etter at skaden har oppstått. Eksempler:
- Skadelidte unnlater å oppsøke lege, og skaden forverres
- Skadelidte unnlater å begrense vannskaden etter en lekkasje
- Skadelidte sier opp jobben uten saklig grunn mens vedkommende er delvis arbeidsfør

**Momenter i helhetsvurderingen:**
Avkortingens størrelse fastsettes etter en bred helhetsvurdering:
- **Graden av skyld** hos skadelidte – jo mer uaktsom, desto større avkorting
- **Skadevolders skyld** – forholdet mellom partenes klanderverdighet
- **Skadens art og omfang** – det skal mer til for å avkorte ved alvorlige personskader
- **Forsikringsforhold** – at skadevolder er forsikret kan tilsi en mildere avkorting (jf. bilansvarslova § 7)

**Spesialregler:**
Bilansvarslova § 7 har en egen medvirkningsregel for trafikkulykker: avkorting kan bare skje dersom skadelidte kan legges «noe til last». Terskelen er lavere enn «uaktsomhet» – også lettere klanderverdig opptreden kan gi avkorting ved bilulykker.`
    },
    {
      id: 'rett1-3-6-example-1',
      type: 'example',
      title: 'Medvirkning ved trafikkulykke',
      problem: 'Sara sykler uten hjelm på en mørk vei. En bilist kjører på henne fordi han overser henne i mørket. Sara får en alvorlig hodeskade. Legen fastslår at skadene ville vært vesentlig mildere dersom Sara hadde brukt sykkelhjelm. Det økonomiske tapet er beregnet til 800 000 kr. Vurder om erstatningen kan avkortes på grunn av medvirkning.',
      solution: `**Analyse etter skadeserstatningsloven § 5-1:**

**Foreligger medvirkning?**
Sara syklet uten hjelm i mørket. Bruk av sykkelhjelm er ikke lovpålagt for voksne i Norge, men det er en alminnelig forsiktighetsregel som de fleste vil anse som fornuftig. Sykling uten lys i mørket er derimot lovstridig (vegtrafikklovens krav til lys på sykkel).

Sara har utvist uaktsomhet ved å sykle uten lys (og muligens også uten hjelm, selv om dette ikke er lovpålagt). Hennes uaktsomhet har medvirket til **skadens omfang**: hodeskaden ville vært mildere med hjelm.

**Avkortingens størrelse:**
I helhetsvurderingen vektlegges:
- Sara har utvist noe uaktsomhet (syklet uten lys og hjelm)
- Bilisten har også utvist uaktsomhet (overså syklisten)
- Skaden er alvorlig (hodeskade) – det skal mye til for full avkorting ved alvorlig personskade
- Saras medvirkning gjelder primært skadens **omfang** (hjelm), ikke selve kollisjonen (mangel på lys kan ha bidratt til kollisjonen)

**Konklusjon:** Erstatningen vil trolig avkortes med ca. 20–30 %. Med en avkorting på 25 % reduseres erstatningen fra 800 000 kr til **600 000 kr**. Bilisten (eller bilistens forsikringsselskap) dekker 600 000 kr, mens Sara selv bærer 200 000 kr av tapet.`
    },
    {
      id: 'rett1-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer medvirkning etter skadeserstatningsloven § 5-1?',
        options: [
          { id: 'a', text: 'At skadevolder har fått hjelp av andre til å forårsake skaden', isCorrect: false },
          { id: 'b', text: 'At skadelidte ved egen uaktsomhet har bidratt til skaden, slik at erstatningen kan reduseres', isCorrect: true },
          { id: 'c', text: 'At politiet etterforsker saken sammen med forsikringsselskapet', isCorrect: false },
          { id: 'd', text: 'At skadelidte må betale erstatning til skadevolder', isCorrect: false }
        ],
        solution: 'Medvirkning etter § 5-1 innebærer at skadelidte selv har bidratt til skaden ved egen uaktsomhet. Konsekvensen er at erstatningen kan reduseres (avkortes) eller i sjeldne tilfeller falle helt bort. Avkortingen fastsettes etter en helhetsvurdering der skadelidtes skyld og forholdene ellers vektlegges.'
      }
    },

    // --- BLOKK 2: Lemping ---
    {
      id: 'rett1-3-6-def-2',
      type: 'definition',
      title: 'Lemping (skadeserstatningsloven § 5-2)',
      content: `**Lemping** innebærer at erstatningsansvaret settes ned (reduseres) dersom det ville virke **urimelig tyngende** for skadevolder, jf. skadeserstatningsloven § 5-2.

Lempingsregelen er en **sikkerhetsventil** som skal hindre at erstatningsansvaret får urimelige konsekvenser for skadevolder. Selv om alle vilkårene for erstatning er oppfylt, kan retten bestemme at erstatningen skal settes ned.

Momenter i lempingsvurderingen:
- **Skadens størrelse** – jo større erstatningsbeløp, desto mer aktuelt er lemping
- **Den ansvarliges økonomiske bæreevne** – svak økonomi taler for lemping
- **Forsikringsmuligheter** – kunne skadevolder ha forsikret seg?
- **Skadelidtes medvirkning** – har skadelidte bidratt til skaden?
- **Forholdet mellom partene** – f.eks. om skadevolder er et barn eller en privatperson
- **Skyldgraden** – det skal mer til for å lempe ved forsettlig skadevoldelse`
    },
    {
      id: 'rett1-3-6-text-2',
      type: 'text',
      content: `### Lemping i praksis

Lempingsregelen i § 5-2 anvendes med forsiktighet – den er ment som en **unntaksregel** for tilfeller der fullt erstatningsansvar ville gi et klart urimelig resultat.

**Typiske tilfeller der lemping kan være aktuelt:**

**1. Barn og unge:**
Barn kan bli erstatningsansvarlige (det kreves ikke strafferettslig tilregnelighetsalder for erstatningsansvar). Et barn som har tent på en bygning, kan i prinsippet bli pålagt millionerstatning. Lemping er da aktuelt for å hindre at barnet starter voksenlivet med uoverkommelig gjeld.

**2. Privatpersoner med svak økonomi:**
En privatperson som ved uaktsomhet forårsaker en stor brann eller skade, kan få et erstatningskrav som langt overstiger vedkommendes økonomiske evne. Dersom skadevolder ikke har ansvarsforsikring, kan lemping være aktuelt.

**3. Tilfeller der forsikring dekker tapet:**
Dersom skadelidte har egen forsikring som dekker tapet, kan det tale for lemping – skadelidte lider da ikke noe reelt tap ved at erstatningen reduseres.

**Lemping og forsikring:**
Lempingsregelen har fått mindre praktisk betydning i takt med at forsikringsordninger har blitt mer utbredt. De fleste potensielle skadevoldere har ansvarsforsikring (gjennom innboforsikring, bilforsikring mv.), og forsikringsselskapet overtar da ansvaret. Lemping er primært aktuelt der skadevolder **mangler** forsikring.

**Viktig:** Lemping kan **ikke** brukes til å sette ned erstatningen til null – et visst ansvar vil alltid bestå.`
    },
    {
      id: 'rett1-3-6-example-2',
      type: 'example',
      title: 'Lemping av erstatningsansvar',
      problem: 'Emil (14 år) leker med en lighter og setter ved et uhell fyr på en garasje. Garasjen brenner ned, og eieren krever 650 000 kr i erstatning. Emils familie har begrenset økonomi og ingen ansvarsforsikring. Kan erstatningsansvaret lempes?',
      solution: `**Analyse etter skadeserstatningsloven § 5-2:**

**Er vilkårene for erstatningsansvar oppfylt?**
Ja – Emil har utvist uaktsomhet (lekte med lighter, som er uforsvarlig). Det foreligger årsakssammenheng og økonomisk tap.

**Er lemping aktuelt?**
Momentene i § 5-2 vurderes:

1. **Skadens størrelse:** 650 000 kr er et betydelig beløp for en 14-åring.
2. **Skadevolders bæreevne:** Emil er 14 år, uten inntekt og formue. Familien har begrenset økonomi.
3. **Forsikringsmuligheter:** Familien har ingen ansvarsforsikring. Emil kunne ikke selv tegne forsikring.
4. **Skyldgrad:** Simpel uaktsomhet – Emil handlet uforsvarlig, men uten forsett. Han er 14 år og har begrenset evne til å vurdere konsekvenser.
5. **Forholdet mellom partene:** Skadevolder er et barn; skadelidte er en voksen huseier (som normalt har husforsikring).

**Har skadelidte forsikring?**
Dersom huseieren har husforsikring som dekker brannskaden, taler dette sterkt for lemping – huseieren lider da ikke noe reelt tap.

**Konklusjon:** Erstatningen bør lempes betydelig, sannsynligvis til 20–30 % av fullt ansvar. Et erstatningsansvar på 650 000 kr ville være urimelig tyngende for en 14-åring uten inntekt. Med lemping kan ansvaret settes til ca. 130 000–195 000 kr, med mulighet for nedbetalingsordning.`
    },
    {
      id: 'rett1-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når kan erstatningsansvaret lempes etter skadeserstatningsloven § 5-2?',
        options: [
          { id: 'a', text: 'Når skadevolder mener erstatningen er for høy', isCorrect: false },
          { id: 'b', text: 'Når ansvaret ville virke urimelig tyngende for skadevolder sett hen til skadens størrelse, økonomisk bæreevne og forholdene ellers', isCorrect: true },
          { id: 'c', text: 'Bare når skadevolder er under 18 år', isCorrect: false },
          { id: 'd', text: 'Bare når skadelidte har forsikring som dekker tapet', isCorrect: false }
        ],
        solution: 'Lemping etter § 5-2 kan skje når ansvaret ville virke urimelig tyngende for skadevolder. Retten foretar en helhetsvurdering der skadens størrelse, skadevolders økonomiske bæreevne, forsikringsmuligheter, skyldgrad og forholdet mellom partene er sentrale momenter. Lemping er ikke begrenset til mindreårige, men alder er et viktig moment.'
      }
    },

    // --- BLOKK 3: Forsikring og erstatningsrett ---
    {
      id: 'rett1-3-6-text-3',
      type: 'text',
      content: `### Forsikringens rolle i erstatningsretten

Forsikring spiller en helt sentral rolle i moderne erstatningsrett. De fleste erstatningskrav i Norge håndteres i praksis av forsikringsselskaper, ikke av skadevolder personlig.

**Ansvarsforsikring:**
Ansvarsforsikring dekker det erstatningsansvaret forsikringstakeren pådrar seg overfor andre. De vanligste formene:
- **Bilforsikring** (ansvarsdelen er lovpålagt etter bilansvarslova § 15)
- **Innboforsikring** (inneholder normalt ansvarsforsikring for privatpersoner)
- **Yrkesskadeforsikring** (lovpålagt for arbeidsgivere etter yrkesskadeforsikringsloven)
- **Bedriftsansvarsforsikring** (for næringsdrivende)

**Tvungen forsikring:**
På noen områder har lovgiver bestemt at forsikring er **obligatorisk**:
- Alle motorvogner skal ha ansvarsforsikring (bilansvarslova § 15)
- Alle arbeidsgivere skal ha yrkesskadeforsikring (yrkesskadeforsikringsloven § 3)
- Advokater, leger og andre profesjonsutøvere har profesjonsansvarsforsikring

**Trafikkforsikringsforeningen:**
Dersom en uforsikret bil forårsaker skade, dekker Trafikkforsikringsforeningen (TFF) skadelidtes krav, jf. bilansvarslova § 10. TFF krever deretter regress (tilbakebetaling) fra den uforsikrede bileieren.

**Forsikring og pulverisering:**
Forsikring realiserer erstatningsrettens tredje formål: **pulverisering**. Tapet fordeles på alle forsikringstakerne gjennom premien, i stedet for å ramme en enkelt skadevolder. Dette gir bedre trygghet for både skadelidte (som er sikret dekning) og skadevolder (som slipper personlig ruin).`
    },
    {
      id: 'rett1-3-6-example-3',
      type: 'example',
      title: 'Forsikring i praksis',
      problem: 'Jonas kolliderer med Marias bil. Skaden på Marias bil er 120 000 kr. Jonas har lovpålagt bilforsikring. Hvordan håndteres erstatningskravet i praksis?',
      solution: `**Analyse:**

**1. Ansvarsgrunnlag:**
Jonas er erstatningsansvarlig – enten etter culpa (uaktsom kjøring) eller etter bilansvarslova (objektivt ansvar for motorvogn).

**2. Forsikringsdekning:**
Jonas har bilforsikring med lovpålagt ansvarsdel (bilansvarslova § 15). Ansvarsforsikringen dekker det erstatningskravet Jonas pådrar seg overfor andre.

**3. Praktisk håndtering:**
- Maria melder skaden til sitt eget forsikringsselskap (kaskoselskapet) **eller** direkte til Jonas' forsikringsselskap (ansvarsselskapet)
- Jonas' forsikringsselskap behandler kravet og utbetaler erstatningen til Maria
- Jonas betaler ikke erstatningen selv, men kan miste bonusrabatt på forsikringen

**4. Regress:**
- Dersom Maria melder til sitt eget kaskoselskap, utbetaler de erstatningen og krever deretter **regress** mot Jonas' ansvarsselskap
- Jonas' ansvarsselskap dekker kravet
- Jonas personlig berøres bare gjennom økt forsikringspremie (bonustap)

**Konklusjon:** I praksis håndteres erstatningskravet mellom forsikringsselskapene. Maria får full erstatning (120 000 kr) uavhengig av Jonas' personlige økonomi. Jonas betaler ikke erstatningen direkte, men taper bonus. Forsikringssystemet sikrer at skadelidte får dekning og at tapet pulveriseres.`
    },
    {
      id: 'rett1-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor lovgiver har gjort bilforsikring obligatorisk (tvungen forsikring). Hvilke hensyn ligger bak denne regelen?',
        hints: ['Tenk på erstatningsrettens tre formål: reparasjon, prevensjon og pulverisering.'],
        solution: `Lovgiver har gjort bilforsikring obligatorisk av flere grunner:

**1. Vern av skadelidte (reparasjonshensynet):**
Motorvogner utgjør en betydelig skaderisiko. Uten tvungen forsikring ville mange skadelidte stå uten dekning fordi skadevolder ikke har midler til å betale erstatningen. Lovpålagt forsikring sikrer at skadelidte alltid har et solvent forsikringsselskap å rette kravet mot.

**2. Pulverisering:**
Bilansvaret er et objektivt ansvar – bileieren kan bli ansvarlig for store beløp uten å ha gjort noe galt. Forsikring fordeler denne risikoen på alle bilistene gjennom premien, i stedet for at en enkelt uheldig bileier rammes av økonomisk ruin.

**3. Prevensjon:**
Forsikringssystemet virker preventivt gjennom bonusordningen: den som kjører skadefritt, betaler lavere premie. Den som forårsaker skade, mister bonus og betaler mer.

**4. Sikkerhetsnettet (TFF):**
Dersom en bil likevel er uforsikret, trer Trafikkforsikringsforeningen inn og dekker skadelidtes krav. Dette sikrer at skadelidte aldri står uten dekning ved trafikkulykker.

**Samlet:** Tvungen bilforsikring er et uttrykk for at motorvogner representerer en så stor risiko at samfunnet ikke kan overlate det til den enkeltes valg om vedkommende vil forsikre seg.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-3-6-summary',
      type: 'text',
      content: `### Oppsummering

- **Medvirkning** (skadeserstatningsloven § 5-1) kan føre til at erstatningen **reduseres** dersom skadelidte ved egen uaktsomhet har bidratt til skaden eller forsømt å begrense skadens omfang.
- Avkortingens størrelse fastsettes etter en **helhetsvurdering** der skadelidtes skyld, skadevolders skyld, skadens art og forsikringsforhold vektlegges.
- **Lemping** (§ 5-2) er en sikkerhetsventil som kan redusere erstatningen dersom fullt ansvar ville virke **urimelig tyngende** for skadevolder. Momenter: skadens størrelse, bæreevne, forsikringsmuligheter og skyldgrad.
- **Forsikring** spiller en sentral rolle i erstatningsretten og realiserer pulveriseringsformålet. De fleste erstatningskrav håndteres av forsikringsselskaper.
- **Tvungen forsikring** (bilforsikring, yrkesskadeforsikring) sikrer at skadelidte alltid har et solvent selskap å rette kravet mot.
- Medvirkning og lemping er viktige **sikkerhetsventiler** som sikrer rettferdige resultater i konkrete saker.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Anders (16 år) stjeler en motorsykkel og kjører i beruset tilstand. Han kolliderer med en fotgjenger, Berit, som påføres skader for 400 000 kr. Berit gikk på rødt lys da hun krysset veien.\n\na) Vurder om Berits erstatning kan avkortes på grunn av medvirkning.\nb) Kan Anders kreve at erstatningsansvaret lempes?\nc) Drøft hvilken rolle forsikring spiller i denne saken.',
        hints: ['Husk at bilansvarslova § 7 har en lavere terskel for medvirkning enn § 5-1.', 'Anders har ikke forsikring fordi motorsykkelen er stjålet. Hvem dekker da skaden?'],
        solution: `**a) Medvirkning:**
Berit gikk på rødt lys – dette er uaktsomt og utgjør medvirkning etter bilansvarslova § 7. Etter § 7 kan erstatningen avkortes dersom skadelidte kan legges «noe til last». Å gå på rødt lys oppfyller dette kravet.

Avkortingens størrelse vurderes i lys av begge parters opptreden. Anders' kjøring (stjålet motorsykkel, beruset) er langt mer klanderverdig enn Berits uaktsomhet. Avkortingen vil derfor bli moderat – trolig 15–25 %.

**b) Lemping:**
Anders er 16 år, uten inntekt og formue. Et erstatningsansvar på 400 000 kr (eventuelt redusert etter medvirkningsavkorting) er betydelig for en 16-åring. I utgangspunktet taler alder og økonomisk situasjon for lemping.

Men: Anders har utvist **grov skyld** – han stjal motorsykkelen og kjørte beruset. Grov skyld taler **mot** lemping. Rettspraksis viser at lemping sjelden innvilges ved forsettlig eller grovt uaktsom skadevoldelse.

Konklusjonen er usikker, men det er sannsynlig at lempingen vil bli begrenset. Ansvaret kan lempes noe, men Anders vil måtte bære en vesentlig del av ansvaret på grunn av sin grove skyld.

**c) Forsikringens rolle:**
Motorsykkelen er stjålet, og Anders har ingen gyldig forsikring. Motorsykkelens eier har forsikring, men forsikringen dekker normalt ikke skade forårsaket av en tyv.

**Trafikkforsikringsforeningen (TFF)** trer inn etter bilansvarslova § 10: fordi motorsykkelen i praksis er «uforsikret» i relasjon til Anders' bruk, dekker TFF Berits krav. TFF vil deretter kreve **regress** mot Anders for hele beløpet.

Forsikringssystemet sikrer altså at Berit får erstatning uansett, men Anders vil personlig stå ansvarlig overfor TFF – med mulighet for lemping av regresskravet.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 3 (kapittel 3.1–3.6)
// ============================================================================

export const RETTSLAERE_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_1_3_1,
  CHAPTER_RETTSLAERE_1_3_2,
  CHAPTER_RETTSLAERE_1_3_3,
  CHAPTER_RETTSLAERE_1_3_4,
  CHAPTER_RETTSLAERE_1_3_5,
  CHAPTER_RETTSLAERE_1_3_6,
];
