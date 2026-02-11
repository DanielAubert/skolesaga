/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2) - Del 7: Kommunikasjon i grupper
 *
 * Kapittel 7.1–7.5
 *
 * LK20-kompetansemål:
 * - analysere gruppeprosesser og samarbeidsdynamikk
 * - bruke ulike konfliktløsningsstrategier
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Gruppedynamikk
// ============================================================================

export const CHAPTER_KOMKULT_1_7_1: TextbookChapter = {
  id: 'komkult-1-7-1',
  courseId: 'komkult-1',
  chapterNumber: '7.1',
  title: 'Gruppedynamikk',
  description: 'En innføring i hva en gruppe er, hvordan gruppeprosesser fungerer, og Tuckmans fasemodell for gruppeutvikling. Du lærer å gjenkjenne hvilken fase en gruppe befinner seg i og hvordan kommunikasjonen endrer seg gjennom fasene.',
  estimatedMinutes: 22,
  competenceGoals: ['analysere gruppeprosesser og samarbeidsdynamikk'],
  keyTerms: [],
  content: [
    {
      id: 'kk-7-1-intro',
      type: 'text',
      content: `## Hva er en gruppe?

Vi er alle medlemmer av ulike grupper: familien, venneflokken, klassen, arbeidslaget. Men hva er det som gjør en samling mennesker til en gruppe? Og hvorfor fungerer noen grupper godt, mens andre sliter med samarbeidet?

I dette kapittelet skal du lære:
- Hva som skiller en gruppe fra en tilfeldig samling mennesker
- Hvordan gruppeprosesser påvirker kommunikasjon og samarbeid
- Tuckmans fasemodell for gruppeutvikling
- Hvordan du kan bruke denne kunnskapen i praksis`,
    },
    {
      id: 'kk-7-1-def-1',
      type: 'definition',
      title: 'Gruppe',
      content: `**Gruppe** er to eller flere personer som samhandler, har felles mål og opplever en gjensidig avhengighet. Medlemmene identifiserer seg med gruppen og påvirker hverandre gjennom kommunikasjon. En tilfeldig samling mennesker på en bussholdeplass er ikke en gruppe, men passasjerene som samarbeider for å skyve en bil vekk fra veien kan bli det.`,
    },
    {
      id: 'kk-7-1-text-1',
      type: 'text',
      content: `### Typer grupper

**Primærgrupper:**
- Nære, langvarige relasjoner (familie, nære venner)
- Sterke emosjonelle bånd
- Påvirker identitet og verdier

**Sekundærgrupper:**
- Mer formelle og oppgaveorienterte (arbeidsgrupper, komiteer)
- Tydeligere roller og regler
- Mindre personlige bånd

**Formelle grupper:**
- Dannet av en organisasjon med et bestemt formål
- Klare mål, roller og tidsrammer
- Eksempler: prosjektgrupper, styrer, arbeidsutvalg

**Uformelle grupper:**
- Oppstår spontant basert på felles interesser eller behov
- Mer fleksibel struktur
- Eksempler: lunsjgruppen, treningskamerater`,
    },
    {
      id: 'kk-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra samling til gruppe',
      problem: 'Fem elever blir satt sammen i en prosjektgruppe i kommunikasjon og kultur. Når blir de egentlig en gruppe?',
      solution: `**Utgangspunkt:** Fem individer som tilfeldigvis sitter i samme rom.

**De blir en gruppe når:**
1. De får et felles mål (levere prosjektoppgave)
2. De begynner å samhandle (diskuterer oppgaven)
3. De fordeler ansvar (hvem gjør hva)
4. De utvikler felles normer (vi møtes tirsdager, vi svarer på meldinger innen kvelden)
5. De opplever gjensidig avhengighet (alle må bidra for at prosjektet skal lykkes)

Først når disse elementene er på plass, fungerer samlingen som en reell gruppe.`,
    },
    {
      id: 'kk-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva skiller en gruppe fra en tilfeldig samling mennesker?',
        options: [
          { id: 'a', text: 'Antall personer', isCorrect: false },
          { id: 'b', text: 'At de befinner seg på samme sted', isCorrect: false },
          { id: 'c', text: 'Felles mål, samhandling og gjensidig avhengighet', isCorrect: true },
          { id: 'd', text: 'At de kjenner hverandre fra før', isCorrect: false },
        ],
        solution: 'En gruppe kjennetegnes av felles mål, samhandling og gjensidig avhengighet. Det er ikke nok å bare være på samme sted eller kjenne hverandre.',
      },
    },
    {
      id: 'kk-7-1-def-2',
      type: 'definition',
      title: 'Tuckmans fasemodell',
      content: `**Tuckmans fasemodell** (1965) beskriver fire faser som grupper typisk gjennomgår: forming (dannelse), storming (konflikt), norming (normering) og performing (ytelse). Senere ble en femte fase lagt til: adjourning (avslutning). Modellen viser at konflikter er en naturlig del av gruppeutviklingen.`,
    },
    {
      id: 'kk-7-1-text-2',
      type: 'text',
      content: `### Tuckmans fem faser

**1. Forming (dannelsesfasen)**
- Gruppemedlemmene er høflige og forsiktige
- Alle prøver å finne sin plass
- Kommunikasjonen er overflatisk og utprøvende
- Gruppen er avhengig av en leder for retning

**2. Storming (konfliktfasen)**
- Uenigheter og konflikter oppstår
- Maktkamper om roller og arbeidsmetoder
- Frustrasjon over ulike arbeidsstiler
- Kritisk fase: mange grupper går i oppløsning her

**3. Norming (normeringsfasen)**
- Gruppen finner felles spilleregler
- Roller og ansvarsfordeling avklares
- Samhørighet og tillit utvikles
- Kommunikasjonen blir åpnere og mer konstruktiv

**4. Performing (ytelsesfasen)**
- Gruppen fungerer effektivt
- Medlemmene utfyller hverandre
- Fokus på oppgaveløsning
- Høy grad av selvstendighet og fleksibilitet

**5. Adjourning (avslutningsfasen)**
- Oppgaven er fullført og gruppen oppløses
- Evaluering av arbeidet
- Kan utløse sorg eller lettelse
- Feiring av resultater`,
    },
    {
      id: 'kk-7-1-example-2',
      type: 'example',
      title: 'Eksempel: Prosjektgruppen gjennom fasene',
      problem: 'En gruppe på fire studenter skal lage en presentasjon om interkulturell kommunikasjon. Hvordan kan Tuckmans faser se ut i praksis?',
      solution: `**Forming:** Gruppen møtes for første gang. Alle er hyggelige. «Hva liker dere å jobbe med?» Ingen tør å ta styringen.

**Storming:** Ola vil lage en PowerPoint, men Sara mener video er bedre. Kari har ikke svart på meldinger på to dager. Lars synes Ola bestemmer for mye. Stemningen er anspent.

**Norming:** Gruppen setter seg ned og lager en plan. De enes om å kombinere PowerPoint og video. Kari forklarer at hun har hatt mye å gjøre og lover å bidra mer. De avtaler faste møtetider.

**Performing:** Alle leverer sine deler til avtalt tid. De gir hverandre tilbakemeldinger og forbedrer presentasjonen. Samarbeidet flyter godt.

**Adjourning:** Presentasjonen er holdt og fikk gode tilbakemeldinger. Gruppen reflekterer over hva de lærte av prosessen.`,
    },
    {
      id: 'kk-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'I hvilken fase av Tuckmans modell oppstår typisk konflikter og uenigheter?',
        options: [
          { id: 'a', text: 'Forming', isCorrect: false },
          { id: 'b', text: 'Storming', isCorrect: true },
          { id: 'c', text: 'Norming', isCorrect: false },
          { id: 'd', text: 'Performing', isCorrect: false },
        ],
        solution: 'Storming-fasen (konfliktfasen) er der uenigheter og maktkamper typisk oppstår. Dette er en naturlig del av gruppeutviklingen, og grupper som håndterer denne fasen godt, kommer styrket ut.',
      },
    },
    {
      id: 'kk-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Beskriv de fem fasene i Tuckmans fasemodell med egne ord. Gi et eksempel på hva som kjennetegner kommunikasjonen i hver fase.',
        hints: ['Tenk på hvordan tonen og åpenheten endrer seg fra fase til fase'],
        solution: 'Forming: Høflig og forsiktig kommunikasjon, alle er litt usikre. Storming: Direkte og kanskje litt krass kommunikasjon, uenigheter luftes. Norming: Mer åpen og konstruktiv dialog, man lytter bedre til hverandre. Performing: Effektiv og tillitsfull kommunikasjon, lite misforståelser. Adjourning: Reflekterende kommunikasjon, man oppsummerer og evaluerer.',
      },
    },
    {
      id: 'kk-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Tenk på en gruppe du har vært med i (for eksempel en prosjektgruppe på skolen). Hvilken fase befinner gruppen seg i nå, og hvordan merker du det?',
        hints: ['Bruk kjennetegnene fra Tuckmans modell til å identifisere fasen'],
        solution: 'Her skal eleven reflektere over egen erfaring og bruke Tuckmans fasemodell som analyseverktøy. Et godt svar identifiserer konkrete eksempler på kommunikasjon og atferd som passer med en bestemt fase, og begrunner hvorfor.',
      },
    },
    {
      id: 'kk-7-1-tip-1',
      type: 'tip',
      title: 'Husk',
      content: `Tuckmans modell er en forenkling. I virkeligheten kan grupper hoppe mellom faser, gå tilbake til tidligere faser (for eksempel ved nye medlemmer), eller bli stående i en fase lenge. Modellen er et verktøy for å forstå, ikke en oppskrift.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        task: 'Diskuter: Hvorfor er storming-fasen viktig for en gruppes utvikling? Hva kan skje hvis gruppen unngår konflikter?',
        hints: ['Tenk på hva som skjer med uløste spenninger og uavklarte roller'],
        solution: 'Storming-fasen er viktig fordi den avdekker uenigheter som må løses for at gruppen skal fungere. Gjennom konflikter avklares roller, forventninger og arbeidsmetoder. Hvis gruppen unngår konflikter, kan frustrasjon hope seg opp, roller forblir uavklarte, og samarbeidet blir overflatisk. Gruppen kommer aldri til performing-fasen og leverer dårligere resultater.',
      },
    },
    {
      id: 'kk-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-7-1-ex-6',
        number: '7.1.6',
        type: 'multiple-choice',
        task: 'Hvilken påstand om grupper er korrekt?',
        options: [
          { id: 'a', text: 'Alle samlinger av mennesker er grupper', isCorrect: false },
          { id: 'b', text: 'En gruppe krever minimum ti personer', isCorrect: false },
          { id: 'c', text: 'Primærgrupper er formelle og oppgaveorienterte', isCorrect: false },
          { id: 'd', text: 'Grupper kjennetegnes av felles mål og gjensidig avhengighet', isCorrect: true },
        ],
        solution: 'En gruppe kjennetegnes av felles mål, samhandling og gjensidig avhengighet. Primærgrupper er nære og uformelle (som familie), mens sekundærgrupper er mer formelle og oppgaveorienterte.',
      },
    },
    {
      id: 'kk-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **En gruppe** har felles mål, samhandling og gjensidig avhengighet
- Vi skiller mellom **primær-** og **sekundærgrupper**, samt **formelle** og **uformelle** grupper
- **Tuckmans fasemodell** beskriver fem faser: forming, storming, norming, performing og adjourning
- **Konflikter** er en naturlig del av gruppeutviklingen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Gruppe | Samling personer med felles mål og gjensidig avhengighet |
| Tuckmans fasemodell | Modell med fem faser for gruppeutvikling |
| Storming | Konfliktfasen der uenigheter kommer til overflaten |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Roller i grupper
// ============================================================================

export const CHAPTER_KOMKULT_1_7_2: TextbookChapter = {
  id: 'komkult-1-7-2',
  courseId: 'komkult-1',
  chapterNumber: '7.2',
  title: 'Roller i grupper',
  description: 'Du lærer om formelle og uformelle roller i grupper, og hvordan Belbins teamrollemodell kan brukes til å forstå og forbedre samarbeid. Kapittelet viser hvordan rollene påvirker kommunikasjon og gruppedynamikk.',
  estimatedMinutes: 22,
  competenceGoals: ['analysere gruppeprosesser og samarbeidsdynamikk'],
  keyTerms: [],
  content: [
    {
      id: 'kk-7-2-intro',
      type: 'text',
      content: `## Roller former samspillet

I enhver gruppe inntar medlemmene ulike roller. Noen roller er tildelt formelt (som gruppeleder), mens andre vokser frem uformelt (som den som alltid forteller vitser). Rollene vi inntar påvirker hvordan vi kommuniserer, og hvordan gruppen fungerer.

I dette kapittelet skal du lære:
- Forskjellen mellom formelle og uformelle roller
- Belbins ni teamroller og hva de bidrar med
- Hvordan rollebevissthet kan styrke samarbeidet
- Utfordringer knyttet til roller i grupper`,
    },
    {
      id: 'kk-7-2-def-1',
      type: 'definition',
      title: 'Rolle',
      content: `**Rolle** er det settet av forventninger som er knyttet til en bestemt posisjon i en gruppe. Rollen bestemmer hva som forventes av deg i form av atferd, bidrag og kommunikasjon. Rollene kan være formelt tildelt eller uformelt utviklet gjennom gruppens samhandling.`,
    },
    {
      id: 'kk-7-2-text-1',
      type: 'text',
      content: `### Formelle og uformelle roller

**Formelle roller** er tildelt av gruppen eller organisasjonen:
- Gruppeleder / prosjektleder
- Sekretær / referent
- Ordstyrer i møter
- Kontaktperson mot andre grupper

**Uformelle roller** vokser frem gjennom samhandling:
- **Initiativtakeren** - foreslår ideer og setter i gang aktiviteter
- **Harmonisøkeren** - demper konflikter og skaper god stemning
- **Djevelens advokat** - utfordrer gruppens antakelser
- **Gratispassasjeren** - lar andre gjøre jobben
- **Klovnen** - bruker humor, men kan avlede oppmerksomheten
- **Syndebukken** - den som får skylden når noe går galt

Uformelle roller er ikke nødvendigvis gode eller dårlige - det avhenger av konteksten og hvordan de påvirker gruppens arbeid.`,
    },
    {
      id: 'kk-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Uformelle roller i praksis',
      problem: 'En prosjektgruppe på fire elever jobber med en presentasjon. Hvordan kan uformelle roller påvirke samarbeidet?',
      solution: `**Situasjon:**
- **Emma** (initiativtaker): Kommer alltid med nye forslag og driver arbeidet fremover. Resten av gruppen er glade for at noen tar styringen.
- **Jonas** (harmonisøker): Mekler når Emma og Lise er uenige, passer på at alle blir hørt.
- **Lise** (djevelens advokat): Stiller kritiske spørsmål til forslagene. «Er vi sikre på at dette stemmer?»
- **Tobias** (gratispassasjer): Nikker og sier «ja, bra» men leverer aldri sine deler til avtalt tid.

**Konsekvenser:** Emma blir sliten av å drive alt, Jonas bruker mye energi på å mekle, Lise blir oppfattet som negativ selv om innspillene er verdifulle, og Tobias skaper frustrasjon. Gruppen trenger å snakke åpent om rollene og forventningene.`,
    },
    {
      id: 'kk-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er en uformell rolle?',
        options: [
          { id: 'a', text: 'En rolle som er tildelt av organisasjonen', isCorrect: false },
          { id: 'b', text: 'En rolle som vokser frem gjennom gruppens samhandling', isCorrect: true },
          { id: 'c', text: 'En rolle som kun finnes i formelle grupper', isCorrect: false },
          { id: 'd', text: 'En rolle som er beskrevet i en stillingsinstruks', isCorrect: false },
        ],
        solution: 'En uformell rolle er ikke tildelt av noen, men vokser frem naturlig gjennom samhandling i gruppen. Eksempler er initiativtakeren, harmonisøkeren eller gratispassasjeren.',
      },
    },
    {
      id: 'kk-7-2-def-2',
      type: 'definition',
      title: 'Belbins teamroller',
      content: `**Belbins teamroller** er en modell utviklet av Meredith Belbin som identifiserer ni ulike roller som trengs for at et team skal fungere optimalt. Rollene deles i tre kategorier: handlingsorienterte, personorienterte og tankeorienterte. De fleste mennesker har to til tre foretrukne roller.`,
    },
    {
      id: 'kk-7-2-text-2',
      type: 'text',
      content: `### Belbins ni teamroller

**Handlingsorienterte roller:**
- **Iverksetter** - omsetter ideer til praktiske handlingsplaner, systematisk og disiplinert
- **Pådriver** - utfordrer, presser på for resultater, overvinner hindringer
- **Ferdigstiller** - sørger for kvalitet og at ting blir fullført i tide, detaljorientert

**Personorienterte roller:**
- **Koordinator** - klargjør mål, delegerer effektivt, inkluderer alle
- **Teamarbeider** - lytter, støtter, bygger relasjoner, demper konflikter
- **Ressursutnytter** - nettverker, finner muligheter, entusiastisk og utadvendt

**Tankeorienterte roller:**
- **Ideskaper** - kreativ, løser vanskelige problemer på utradisjonelle måter
- **Analytiker** - vurderer alternativer grundig, strategisk og kritisk
- **Spesialist** - har dybdekunnskap på sitt felt, dedikert og selvgående`,
    },
    {
      id: 'kk-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Bruk av Belbins roller',
      problem: 'Et markedsføringsteam skal lansere en kampanje. Hvordan bidrar ulike Belbin-roller?',
      solution: `**Ideskaperen** foreslår et kreativt konsept for kampanjen.
**Analytikeren** vurderer markedsdata og sjekker om konseptet vil fungere.
**Ressursutnytteren** kontakter samarbeidspartnere og finner gode avtaler.
**Koordinatoren** fordeler oppgaver og setter opp tidsplan.
**Iverksetteren** lager konkrete planer og sjekklister.
**Pådriveren** sørger for at teamet holder tidsfristen.
**Teamarbeideren** passer på at alle trives og at stemningen er god.
**Ferdigstilleren** kvalitetssjekker alt materiell før lansering.
**Spesialisten** bidrar med dybdekunnskap om digital markedsføring.

Alle rollene er nødvendige for et godt resultat. Mangler en rolle, kan det skape problemer.`,
    },
    {
      id: 'kk-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Hvilken av Belbins roller kjennetegnes av kreativitet og evne til å løse vanskelige problemer på nye måter?',
        options: [
          { id: 'a', text: 'Iverksetter', isCorrect: false },
          { id: 'b', text: 'Koordinator', isCorrect: false },
          { id: 'c', text: 'Ideskaper', isCorrect: true },
          { id: 'd', text: 'Analytiker', isCorrect: false },
        ],
        solution: 'Ideskaperen er den kreative rollen som løser vanskelige problemer på utradisjonelle måter. Iverksetteren omsetter ideene til handling, koordinatoren fordeler oppgaver, og analytikeren vurderer alternativene kritisk.',
      },
    },
    {
      id: 'kk-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Gjør en vurdering av deg selv basert på Belbins teamroller. Hvilke to-tre roller passer best til deg? Begrunn svaret med eksempler fra gruppearbeid du har deltatt i.',
        hints: ['Tenk på hva du vanligvis gjør i grupper: leder du, kommer med ideer, støtter andre, eller holder orden?'],
        solution: 'Et godt svar identifiserer to-tre Belbin-roller og knytter dem til konkrete erfaringer. For eksempel: «Jeg er ofte koordinator fordi jeg liker å fordele oppgaver og holde oversikt. Samtidig er jeg teamarbeider fordi jeg legger merke til hvordan folk har det og prøver å inkludere alle.»',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom formelle og uformelle roller, og gi minst to eksempler på hver type. Diskuter hvorfor uformelle roller kan være like viktige som formelle.',
        hints: ['Tenk på roller som er tildelt versus roller som oppstår naturlig'],
        solution: 'Formelle roller er tildelt av gruppen eller organisasjonen (f.eks. prosjektleder, sekretær), mens uformelle roller vokser frem gjennom samhandling (f.eks. initiativtaker, harmonisøker). Uformelle roller kan være like viktige fordi de dekker behov som formelle roller ikke fanger opp - for eksempel behovet for noen som demper konflikter eller utfordrer gruppens tenkning.',
      },
    },
    {
      id: 'kk-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'Et team mangler handlingsorienterte roller (iverksetter, pådriver, ferdigstiller). Hva kan konsekvensene være for teamets arbeid?',
        hints: ['Tenk på hva som skjer med gode ideer som aldri blir satt ut i livet'],
        solution: 'Uten handlingsorienterte roller vil teamet ha mange ideer og gode diskusjoner, men slite med å omsette dem til konkrete handlinger. Prosjekter kan bli forsinket fordi ingen presser på for resultater (manglende pådriver), planer forblir vage og upraktiske (manglende iverksetter), og kvaliteten kan svekkes fordi detaljer overses (manglende ferdigstiller).',
      },
    },
    {
      id: 'kk-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-7-2-ex-6',
        number: '7.2.6',
        type: 'multiple-choice',
        task: 'Hvilken kategori hører teamarbeider-rollen til i Belbins modell?',
        options: [
          { id: 'a', text: 'Handlingsorientert', isCorrect: false },
          { id: 'b', text: 'Personorientert', isCorrect: true },
          { id: 'c', text: 'Tankeorientert', isCorrect: false },
          { id: 'd', text: 'Lederorientert', isCorrect: false },
        ],
        solution: 'Teamarbeideren er en personorientert rolle som fokuserer på relasjoner, lytting og støtte. De personorienterte rollene (koordinator, teamarbeider, ressursutnytter) handler om mennesker og samspill.',
      },
    },
    {
      id: 'kk-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Formelle roller** er tildelt, **uformelle roller** vokser frem gjennom samhandling
- Uformelle roller som initiativtaker, harmonisøker og gratispassasjer påvirker gruppedynamikken
- **Belbins teamrollemodell** identifiserer ni roller i tre kategorier
- Et godt team trenger en balanse av **handlings-**, **person-** og **tankeorienterte** roller

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Formell rolle | Rolle tildelt av organisasjonen |
| Uformell rolle | Rolle som oppstår naturlig i gruppen |
| Belbins teamroller | Modell med ni roller for effektive team |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Samarbeid og beslutningstaking
// ============================================================================

export const CHAPTER_KOMKULT_1_7_3: TextbookChapter = {
  id: 'komkult-1-7-3',
  courseId: 'komkult-1',
  chapterNumber: '7.3',
  title: 'Samarbeid og beslutningstaking',
  description: 'Du lærer om ulike samarbeidsteknikker, hvordan grupper tar beslutninger, og hva gruppetenkning er. Kapittelet gir deg verktøy for å bidra til bedre beslutningsprosesser i grupper.',
  estimatedMinutes: 24,
  competenceGoals: ['analysere gruppeprosesser og samarbeidsdynamikk'],
  keyTerms: [],
  content: [
    {
      id: 'kk-7-3-intro',
      type: 'text',
      content: `## Å jobbe sammen og ta gode avgjørelser

Godt samarbeid oppstår ikke av seg selv - det krever bevisste teknikker og strukturer. Og noen av de viktigste øyeblikkene i et samarbeid er når gruppen må ta beslutninger. Hvordan gruppen tar beslutninger, påvirker både kvaliteten på resultatet og medlemmenes motivasjon.

I dette kapittelet skal du lære:
- Teknikker for godt samarbeid
- Ulike beslutningsmetoder og når de passer
- Hva konsensusbeslutninger er og hvordan de fungerer
- Faren ved gruppetenkning og hvordan motvirke den`,
    },
    {
      id: 'kk-7-3-def-1',
      type: 'definition',
      title: 'Samarbeid',
      content: `**Samarbeid** er en prosess der to eller flere personer arbeider mot et felles mål gjennom koordinering av aktiviteter, deling av kunnskap og gjensidig tilpasning. Godt samarbeid forutsetter tillit, åpen kommunikasjon og vilje til å sette gruppens mål foran egne preferanser.`,
    },
    {
      id: 'kk-7-3-text-1',
      type: 'text',
      content: `### Samarbeidsteknikker

**Felles mål og forventninger:**
- Start med å avklare hva gruppen skal oppnå
- Diskuter kvalitetsnivå og ambisjonsnivå
- Enighet om mål gir retning og motivasjon

**Tydelig ansvarsfordeling:**
- Hvem gjør hva, og innen når?
- Bruk gjerne en enkel oppgaveliste alle har tilgang til
- Fordel etter styrker og interesser, ikke bare tilfeldig

**Regelmessig kommunikasjon:**
- Avtal faste møtetider eller oppdateringspunkter
- Bruk digitale verktøy for å holde alle oppdatert
- Korte statusmøter er bedre enn lange, sjeldne møter

**Konstruktiv tilbakemelding:**
- Gi tilbakemelding på arbeid, ikke person
- Bruk «jeg-budskap»: «Jeg synes vi bør...» i stedet for «Du burde...»
- Balansere ros og forbedringspunkter`,
    },
    {
      id: 'kk-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Strukturert samarbeid',
      problem: 'En prosjektgruppe har problemer med at oppgaver faller mellom stoler og frister ikke overholdes. Hvordan kan de forbedre samarbeidet?',
      solution: `**Tiltak gruppen gjennomfører:**

1. **Kickoff-møte:** Gruppen setter seg sammen og avklarer felles mål, fordeler oppgaver og setter frister for hver deloppgave.
2. **Delt oppgaveliste:** De oppretter et felles dokument der alle oppgaver, ansvarlige og frister er synlige for alle.
3. **Ukentlig statusmøte (15 min):** Hver mandag oppdaterer alle kort om fremdrift og eventuelle utfordringer.
4. **Tilbakemeldingsrunde:** Før innlevering leser alle gjennom hele oppgaven og gir konkret tilbakemelding.

**Resultat:** Ingen oppgaver faller mellom stoler, alle vet hva de andre jobber med, og gruppen kan fange opp problemer tidlig.`,
    },
    {
      id: 'kk-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forutsetningen for godt samarbeid?',
        options: [
          { id: 'a', text: 'At alle medlemmene er like', isCorrect: false },
          { id: 'b', text: 'At én person bestemmer alt', isCorrect: false },
          { id: 'c', text: 'Tillit, åpen kommunikasjon og felles mål', isCorrect: true },
          { id: 'd', text: 'At gruppen unngår alle konflikter', isCorrect: false },
        ],
        solution: 'Godt samarbeid krever tillit mellom medlemmene, åpen kommunikasjon der alle tør å si hva de mener, og felles mål som gir retning. Å unngå konflikter er faktisk skadelig - konstruktive uenigheter kan forbedre resultatet.',
      },
    },
    {
      id: 'kk-7-3-def-2',
      type: 'definition',
      title: 'Konsensus',
      content: `**Konsensus** er en beslutningsmetode der gruppen arbeider seg frem til en løsning alle kan akseptere og støtte. Det betyr ikke at alle er 100 % enige, men at alle har blitt hørt og kan leve med beslutningen. Konsensusbeslutninger tar lengre tid, men gir sterkere forpliktelse.`,
    },
    {
      id: 'kk-7-3-text-2',
      type: 'text',
      content: `### Beslutningsmetoder i grupper

**Lederavgjørelse:**
- Én person tar beslutningen
- Raskt og effektivt
- Risiko: andre føler seg oversett, lav forpliktelse

**Flertallsavgjørelse (avstemning):**
- Gruppen stemmer, flertallet vinner
- Demokratisk og relativt raskt
- Risiko: mindretallet kan føle seg overkjørt

**Konsensusbeslutning:**
- Gruppen diskuterer til alle kan støtte løsningen
- Høy forpliktelse og eierskap
- Risiko: tidkrevende, kan bli utvannede kompromisser

**Konsultativ beslutning:**
- Én person tar avgjørelsen etter å ha hørt gruppens innspill
- Kombinerer effektivitet med medvirkning
- Risiko: avhenger av lederens evne til å lytte

### Når passer hva?
- **Hastetilfeller:** Lederavgjørelse
- **Rutinebeslutninger:** Flertallsavgjørelse
- **Viktige strategiske valg:** Konsensus eller konsultativ
- **Faglige spørsmål:** Spesialistens anbefaling`,
    },
    {
      id: 'kk-7-3-example-2',
      type: 'example',
      title: 'Eksempel: Konsensusbeslutning i praksis',
      problem: 'En gruppe skal velge tema for en presentasjon. Tre medlemmer vil ha «sosiale medier», mens to vil ha «interkulturell kommunikasjon». Hvordan kan de oppnå konsensus?',
      solution: `**Prosessen:**

1. Alle legger frem sine argumenter for hvorfor de foretrekker sitt tema.
2. Gruppen identifiserer hva som er viktig for alle: interessant, relevant, nok tilgjengelige kilder.
3. De diskuterer om det finnes en løsning som ivaretar alles ønsker.
4. Forslag: «Sosiale medier i interkulturell kommunikasjon» - kombinerer begge temaene.
5. Alle vurderer forslaget: Kan alle leve med dette? Ja.

**Resultat:** Gruppen fant et tema som kombinerte interessene og som alle kunne støtte. Prosessen tok 20 minutter ekstra, men alle er motiverte for arbeidet.`,
    },
    {
      id: 'kk-7-3-def-3',
      type: 'definition',
      title: 'Gruppetenkning',
      content: `**Gruppetenkning** (groupthink) er et fenomen der ønsket om harmoni og enighet i gruppen fører til at kritisk tenkning undertrykkes. Medlemmene sensurerer seg selv, overser advarsler og overvurderer gruppens dyktighet. Begrepet ble introdusert av Irving Janis i 1972.`,
    },
    {
      id: 'kk-7-3-text-3',
      type: 'text',
      content: `### Kjennetegn på gruppetenkning

**Symptomer:**
- Illusjon om usårbarhet - «dette kan ikke gå galt»
- Kollektiv rasjonalisering - bortforklarer advarsler
- Selvsensur - medlemmer holder tilbake tvil
- Illusjon om enstemmighet - taushet tolkes som enighet
- Press på avvikere - de som er uenige, presses til å gi seg

**Når oppstår gruppetenkning?**
- Sterk gruppetilhørighet og samhold
- Isolert gruppe uten kontakt med utenforstående
- Dominerende leder som signaliserer sin mening tidlig
- Tidspress og stress

**Hvordan motvirke gruppetenkning:**
- Oppnevn en «djevelens advokat» som skal utfordre
- Be alle skrive ned sine meninger uavhengig før diskusjon
- Inviter utenforstående til å gi innspill
- Lederen bør vente med å si sin mening
- Oppmuntre til konstruktiv uenighet`,
    },
    {
      id: 'kk-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner gruppetenkning?',
        options: [
          { id: 'a', text: 'At gruppen bruker mye tid på å diskutere uenigheter', isCorrect: false },
          { id: 'b', text: 'At kritisk tenkning undertrykkes til fordel for harmoni', isCorrect: true },
          { id: 'c', text: 'At gruppen tar raske og effektive beslutninger', isCorrect: false },
          { id: 'd', text: 'At medlemmene er uenige om det meste', isCorrect: false },
        ],
        solution: 'Gruppetenkning oppstår når ønsket om harmoni og enighet fører til at kritisk tenkning undertrykkes. Medlemmene sensurerer seg selv og gruppens beslutninger blir dårligere fordi ingen tør å komme med innvendinger.',
      },
    },
    {
      id: 'kk-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Sammenlign de fire beslutningsmetodene (lederavgjørelse, flertallsavgjørelse, konsensus og konsultativ). Hvilke fordeler og ulemper har hver metode?',
        hints: ['Vurder tid, kvalitet, forpliktelse og risiko for hver metode'],
        solution: 'Lederavgjørelse: rask, men lav forpliktelse fra gruppen. Flertallsavgjørelse: demokratisk, men mindretallet kan føle seg overkjørt. Konsensus: gir sterk forpliktelse, men er tidkrevende og kan gi utvannede kompromisser. Konsultativ: kombinerer effektivitet med medvirkning, men avhenger av lederens evne til å lytte og vekte innspill.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Gi et eksempel på en situasjon der gruppetenkning kan oppstå (fra skolen, arbeidslivet eller samfunnet). Forklar hvilke tiltak som kunne ha motvirket fenomenet.',
        hints: ['Tenk på grupper med sterkt samhold der ingen tør å si imot'],
        solution: 'Et godt svar beskriver en konkret situasjon, for eksempel en vennegjeng som bestemmer seg for å gjøre noe risikabelt fordi ingen tør å si at det er en dårlig idé. Tiltakene kan inkludere: at én person bevisst tar rollen som djevelens advokat, at alle skriver ned sin mening anonymt først, eller at de spør noen utenfor gruppen om råd.',
      },
    },
    {
      id: 'kk-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-5',
        number: '7.3.5',
        type: 'multiple-choice',
        task: 'Hvilken beslutningsmetode gir typisk sterkest forpliktelse fra alle gruppemedlemmer?',
        options: [
          { id: 'a', text: 'Lederavgjørelse', isCorrect: false },
          { id: 'b', text: 'Flertallsavgjørelse', isCorrect: false },
          { id: 'c', text: 'Konsensusbeslutning', isCorrect: true },
          { id: 'd', text: 'Tilfeldig utvelgelse', isCorrect: false },
        ],
        solution: 'Konsensusbeslutninger gir sterkest forpliktelse fordi alle har vært med på å forme løsningen og alle kan akseptere den. Metoden tar lengre tid, men resultatet har bred støtte i gruppen.',
      },
    },
    {
      id: 'kk-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Du er med i en gruppe der lederen alltid sier sin mening først, og resten av gruppen bare nikker. Hva kan du gjøre for å sikre at alle stemmer blir hørt?',
        hints: ['Tenk på konkrete teknikker fra kapittelet for å motvirke gruppetenkning'],
        solution: 'Man kan foreslå at alle skriver ned sine tanker uavhengig før diskusjonen starter. Man kan be lederen vente med å si sin mening til alle andre har fått uttale seg. Man kan innføre en runde der alle må bidra med minst ett innspill. Man kan foreslå rollen som djevelens advokat for å sikre at alternative synspunkter blir luftet.',
      },
    },
    {
      id: 'kk-7-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-7-3-ex-7',
        number: '7.3.7',
        type: 'classic',
        task: 'Lag en liste med fem konkrete samarbeidsregler du mener bør gjelde i en prosjektgruppe. Begrunn hver regel.',
        hints: ['Tenk på kommunikasjon, frister, møter og tilbakemelding'],
        solution: 'Eksempel: 1) Vi svarer på gruppemeldinger innen 24 timer (sikrer informasjonsflyt). 2) Vi overholder frister eller varsler minst to dager i forveien (respekt for andres tid). 3) Vi gir tilbakemelding på innhold, ikke person (konstruktivt samarbeid). 4) Vi har et statusmøte hver uke (fanger opp problemer tidlig). 5) Vi fordeler arbeid etter styrker og interesser (utnytter gruppens ressurser).',
      },
    },
    {
      id: 'kk-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Godt samarbeid** krever felles mål, tydelig ansvarsfordeling og åpen kommunikasjon
- Det finnes fire hovedtyper **beslutningsmetoder**: lederavgjørelse, flertall, konsensus og konsultativ
- **Konsensusbeslutninger** gir høy forpliktelse, men krever tid
- **Gruppetenkning** oppstår når harmoni prioriteres over kritisk tenkning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Konsensus | Beslutning alle kan akseptere og støtte |
| Gruppetenkning | Kritisk tenkning undertrykkes til fordel for enighet |
| Djevelens advokat | Person som bevisst utfordrer gruppens antakelser |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Konflikthåndtering
// ============================================================================

export const CHAPTER_KOMKULT_1_7_4: TextbookChapter = {
  id: 'komkult-1-7-4',
  courseId: 'komkult-1',
  chapterNumber: '7.4',
  title: 'Konflikthåndtering',
  description: 'Du lærer om ulike typer konflikter, Thomas-Kilmanns fem konfliktstiler og teknikker for konstruktiv konflikthåndtering. Kapittelet gir deg redskaper til å håndtere uenigheter på en måte som styrker samarbeidet.',
  estimatedMinutes: 24,
  competenceGoals: ['bruke ulike konfliktløsningsstrategier'],
  keyTerms: [],
  content: [
    {
      id: 'kk-7-4-intro',
      type: 'text',
      content: `## Konflikter er uunngåelige - men ikke farlige

Konflikter oppstår i alle grupper. Det er ikke et tegn på at noe er galt - tvert imot kan konflikter være nødvendige for at gruppen skal utvikle seg. Det avgjørende er ikke om konflikter oppstår, men hvordan de håndteres.

I dette kapittelet skal du lære:
- Hva en konflikt er og hvilke typer som finnes
- Thomas-Kilmanns fem konfliktstiler
- Når de ulike stilene er hensiktsmessige
- Teknikker for konstruktiv konflikthåndtering`,
    },
    {
      id: 'kk-7-4-def-1',
      type: 'definition',
      title: 'Konflikt',
      content: `**Konflikt** er en situasjon der to eller flere parter opplever at deres interesser, behov, verdier eller mål er uforenlige. Konflikter kan være åpne eller skjulte, og de kan dreie seg om sak (hva vi skal gjøre) eller relasjon (hvordan vi har det med hverandre).`,
    },
    {
      id: 'kk-7-4-text-1',
      type: 'text',
      content: `### Typer konflikter

**Sakskonflikt:**
- Uenighet om oppgaver, mål eller metoder
- Eksempel: «Skal vi bruke PowerPoint eller video?»
- Ofte konstruktive - kan føre til bedre løsninger
- Løses gjennom argumentasjon og kompromiss

**Interessekonflikt:**
- Partene konkurrerer om begrensede ressurser
- Eksempel: «Hvem skal presentere hovedresultatene?»
- Krever forhandling og rettferdig fordeling
- Kan eskalere hvis de oppfattes som urettferdige

**Relasjonskonflikt:**
- Handler om personlige motsetninger og følelser
- Eksempel: «Jeg orker ikke å jobbe med ham - han er alltid nedlatende»
- Ofte destruktive for gruppen
- Krever emosjonell intelligens å løse

**Verdikonflikt:**
- Uenighet om grunnleggende verdier eller prinsipper
- Eksempel: «Er det greit å bruke kunstig intelligens til å skrive oppgaven?»
- Vanskeligst å løse fordi de berører identitet
- Krever gjensidig respekt og vilje til å forstå den andres perspektiv`,
    },
    {
      id: 'kk-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra sakskonflikt til relasjonskonflikt',
      problem: 'En sakskonflikt i en prosjektgruppe eskalerer til en personkonflikt. Hva gikk galt?',
      solution: `**Situasjon:**
Mia og Henrik er uenige om hvilken metode de skal bruke i prosjektet (sakskonflikt).

**Eskalering:**
1. Mia sier: «PowerPoint er det eneste som fungerer.» Henrik føler seg avvist.
2. Henrik svarer: «Du bestemmer alltid alt.» Nå handler det om person, ikke sak.
3. Mia: «Kanskje fordi du aldri kommer med gode forslag.» Personangrep.
4. Henrik trekker seg tilbake og slutter å bidra.

**Hva gikk galt:**
- Saksuenigheten ble personliggjort
- Begge brukte «du-budskap» i stedet for «jeg-budskap»
- Ingen forsøkte å forstå den andres perspektiv
- Gruppen manglet regler for hvordan uenigheter håndteres

**Bedre løsning:** «Jeg liker PowerPoint fordi... Hva tenker du er fordelene med video? Kanskje vi kan kombinere?»`,
    },
    {
      id: 'kk-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hvilken type konflikt handler om personlige motsetninger og følelser?',
        options: [
          { id: 'a', text: 'Sakskonflikt', isCorrect: false },
          { id: 'b', text: 'Interessekonflikt', isCorrect: false },
          { id: 'c', text: 'Relasjonskonflikt', isCorrect: true },
          { id: 'd', text: 'Verdikonflikt', isCorrect: false },
        ],
        solution: 'Relasjonskonflikter handler om personlige motsetninger og følelser mellom mennesker. De er ofte destruktive for gruppen og krever emosjonell intelligens å løse, i motsetning til sakskonflikter som kan være konstruktive.',
      },
    },
    {
      id: 'kk-7-4-def-2',
      type: 'definition',
      title: 'Thomas-Kilmanns konfliktstilmodell',
      content: `**Thomas-Kilmanns konfliktstilmodell** (1974) beskriver fem måter å håndtere konflikter på, basert på to dimensjoner: grad av selvhevdelse (fokus på egne behov) og grad av samarbeidsvilje (fokus på den andres behov). De fem stilene er: konkurrere, samarbeide, kompromiss, unngå og tilpasse.`,
    },
    {
      id: 'kk-7-4-text-2',
      type: 'text',
      content: `### De fem konfliktstilene

**Konkurrere** (høy selvhevdelse, lav samarbeidsvilje):
- Kjemper for å vinne, den andre taper
- Passer i nødsituasjoner eller når du vet du har rett
- Risiko: skader relasjoner, andre føler seg overkjørt

**Samarbeide** (høy selvhevdelse, høy samarbeidsvilje):
- Søker løsninger som tilfredsstiller begge parter
- Passer når det er viktig å ivareta både sak og relasjon
- Risiko: tidkrevende, krever tillit og åpenhet

**Kompromiss** (middels selvhevdelse, middels samarbeidsvilje):
- Begge gir litt og får litt
- Passer når partene er like sterke og tiden er begrenset
- Risiko: ingen blir helt fornøyde, «halvgode» løsninger

**Unngå** (lav selvhevdelse, lav samarbeidsvilje):
- Trekker seg unna konflikten
- Passer for trivielle saker eller når man trenger tid
- Risiko: problemet forsvinner ikke, kan eskalere

**Tilpasse** (lav selvhevdelse, høy samarbeidsvilje):
- Gir etter for den andres ønsker
- Passer når saken betyr lite for deg eller relasjonen er viktigst
- Risiko: egne behov blir aldri ivaretatt, kan føre til bitterhet`,
    },
    {
      id: 'kk-7-4-example-2',
      type: 'example',
      title: 'Eksempel: Valg av konfliktstil',
      problem: 'I en prosjektgruppe vil flertallet møtes fysisk, men ett medlem bor langt unna og ønsker digitale møter. Hvordan kan ulike konfliktstiler brukes?',
      solution: `**Konkurrere:** «Vi er flest, vi møtes fysisk. Punkt.»
**Unngå:** Ingen tar opp problemet, og det fjerne medlemmet møter bare halvparten av gangene.
**Tilpasse:** Alle møtes digitalt for å tilpasse seg det ene medlemmet.
**Kompromiss:** Annenhver gang fysisk, annenhver gang digitalt.
**Samarbeide:** Gruppen diskuterer behov - noen trenger å jobbe sammen fysisk, det fjerne medlemmet trenger tilgang. Løsning: fysiske møter med digital oppkobling for det fjerne medlemmet, pluss delte dokumenter som alle kan jobbe i mellom møtene.

Den samarbeidende stilen gir den beste løsningen her fordi den ivaretar alles behov uten at noen taper.`,
    },
    {
      id: 'kk-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Hvilken konfliktstil kjennetegnes av høy selvhevdelse og høy samarbeidsvilje?',
        options: [
          { id: 'a', text: 'Konkurrere', isCorrect: false },
          { id: 'b', text: 'Samarbeide', isCorrect: true },
          { id: 'c', text: 'Kompromiss', isCorrect: false },
          { id: 'd', text: 'Tilpasse', isCorrect: false },
        ],
        solution: 'Samarbeidsstilen kombinerer høy selvhevdelse (du kjemper for egne behov) med høy samarbeidsvilje (du bryr deg om den andres behov). Målet er en vinn-vinn-løsning som tilfredsstiller begge parter.',
      },
    },
    {
      id: 'kk-7-4-text-3',
      type: 'text',
      content: `### Konstruktiv konflikthåndtering

**Grunnprinsipper:**
- Skill sak og person: Angrip problemet, ikke personen
- Bruk jeg-budskap: «Jeg opplever at...» i stedet for «Du gjør alltid...»
- Lytt aktivt: Prøv å forstå den andres perspektiv
- Fokuser på behov, ikke posisjoner: «Hva trenger du?» i stedet for «Hva vil du?»
- Søk felles interesser: Finn det dere er enige om

**Trinn for trinn:**
1. Beskriv situasjonen objektivt (hva har skjedd?)
2. Uttrykk dine følelser og behov (hvordan påvirker det deg?)
3. Lytt til den andres opplevelse (aktiv lytting)
4. Identifiser felles mål (hva vil dere begge?)
5. Finn løsninger sammen (brainstorming)
6. Bli enige om en konkret handlingsplan`,
    },
    {
      id: 'kk-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Gjør om disse du-budskapene til jeg-budskap:\na) «Du er alltid sen med leveringene dine!»\nb) «Du hører aldri på hva jeg sier.»\nc) «Du tar alltid alle de gode oppgavene selv.»',
        hints: ['Start med «Jeg opplever at...» eller «Jeg føler...» og beskriv konsekvensen'],
        solution: 'a) «Jeg opplever at leveringene ofte kommer sent, og det stresser meg fordi det forsinker resten av arbeidet.» b) «Jeg føler meg ikke hørt når forslagene mine ikke blir fulgt opp. Det gjør at jeg mister motivasjonen.» c) «Jeg ønsker å få prøve meg på mer varierte oppgaver. Kan vi diskutere fordelingen?»',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Beskriv Thomas-Kilmanns fem konfliktstiler og gi et eksempel på en situasjon der hver stil kan være hensiktsmessig.',
        hints: ['Tenk på ulike situasjoner: nødstilfeller, trivielle saker, viktige relasjoner'],
        solution: 'Konkurrere: nødsituasjon der rask handling trengs. Samarbeide: viktig prosjekt der alle må bidra. Kompromiss: to like sterke parter med begrenset tid. Unngå: triviell sak som ikke er verdt energien. Tilpasse: saken betyr lite for deg, men mye for den andre. Nøkkelen er at ingen stil er alltid riktig - det handler om å velge stil basert på situasjonen.',
      },
    },
    {
      id: 'kk-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        task: 'To gruppemedlemmer har en eskalerende konflikt som påvirker hele gruppens arbeid. Som gruppeleder: Lag en plan for hvordan du vil håndtere situasjonen.',
        hints: ['Bruk trinnene for konstruktiv konflikthåndtering: snakk med partene, identifiser behov, finn løsning'],
        solution: 'En god plan inkluderer: 1) Snakke med partene individuelt for å forstå begges perspektiv. 2) Arrangere et møte der begge får legge frem sin opplevelse uten avbrytelser. 3) Hjelpe dem å identifisere felles mål (begge vil at prosjektet skal lykkes). 4) La dem sammen foreslå løsninger. 5) Avtale konkrete handlinger og oppfølging. 6) Sjekke inn etter en uke for å se om det fungerer.',
      },
    },
    {
      id: 'kk-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-6',
        number: '7.4.6',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en sakskonflikt og en relasjonskonflikt?',
        options: [
          { id: 'a', text: 'En sakskonflikt handler om følelser, en relasjonskonflikt om oppgaver', isCorrect: false },
          { id: 'b', text: 'En sakskonflikt handler om oppgaver og metoder, en relasjonskonflikt om personlige motsetninger', isCorrect: true },
          { id: 'c', text: 'De betyr det samme', isCorrect: false },
          { id: 'd', text: 'En relasjonskonflikt er alltid konstruktiv', isCorrect: false },
        ],
        solution: 'En sakskonflikt dreier seg om oppgaver, mål eller metoder og kan være konstruktiv. En relasjonskonflikt handler om personlige motsetninger og følelser mellom mennesker og er ofte destruktiv. Det er viktig å holde sakskonflikter fra å eskalere til relasjonskonflikter.',
      },
    },
    {
      id: 'kk-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-7-4-ex-7',
        number: '7.4.7',
        type: 'classic',
        task: 'Reflekter over din egen konfliktstil. Hvilken av Thomas-Kilmanns fem stiler bruker du oftest? Er dette alltid den mest hensiktsmessige stilen? Begrunn svaret.',
        hints: ['Tenk på konkrete situasjoner der du har vært i konflikt'],
        solution: 'Et godt svar viser selvrefleksjon og evne til å identifisere egen atferd i konfliktsituasjoner. Eleven bør kunne vurdere om stilen passer til ulike situasjoner og foreslå alternativer. For eksempel: «Jeg unngår ofte konflikter, noe som fungerer for småting, men som kan bli et problem når viktige ting må avklares.»',
      },
    },
    {
      id: 'kk-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Konflikter** kan handle om sak, interesser, relasjoner eller verdier
- **Thomas-Kilmanns modell** beskriver fem konfliktstiler: konkurrere, samarbeide, kompromiss, unngå og tilpasse
- Ingen stil er alltid riktig - **valget avhenger av situasjonen**
- **Konstruktiv konflikthåndtering** bruker jeg-budskap, aktiv lytting og fokus på behov

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sakskonflikt | Uenighet om oppgaver og metoder |
| Relasjonskonflikt | Personlige motsetninger og følelser |
| Thomas-Kilmann | Modell med fem konfliktstiler |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Møteledelse og presentasjon
// ============================================================================

export const CHAPTER_KOMKULT_1_7_5: TextbookChapter = {
  id: 'komkult-1-7-5',
  courseId: 'komkult-1',
  chapterNumber: '7.5',
  title: 'Møteledelse og presentasjon',
  description: 'Du lærer å planlegge og lede effektive møter, skrive saksliste og referat, og holde gode presentasjoner. Kapittelet gir deg praktiske ferdigheter for muntlig og skriftlig kommunikasjon i grupper.',
  estimatedMinutes: 22,
  competenceGoals: ['analysere gruppeprosesser og samarbeidsdynamikk'],
  keyTerms: [],
  content: [
    {
      id: 'kk-7-5-intro',
      type: 'text',
      content: `## Fra kaotiske møter til effektiv kommunikasjon

Vi bruker mye tid i møter - noen er nyttige, andre er ren tidssløsing. Forskjellen handler ofte om planlegging, ledelse og oppfølging. Samtidig er evnen til å presentere for en gruppe en nøkkelkompetanse i skole og arbeidsliv.

I dette kapittelet skal du lære:
- Hvordan planlegge og gjennomføre effektive møter
- Å skrive saksliste og referat
- Rollen som møteleder og ordstyrer
- Grunnleggende presentasjonsteknikk`,
    },
    {
      id: 'kk-7-5-def-1',
      type: 'definition',
      title: 'Møteledelse',
      content: `**Møteledelse** er prosessen med å planlegge, gjennomføre og følge opp møter slik at de blir effektive og målrettede. God møteledelse sørger for at alle blir hørt, at beslutninger tas, og at tiden brukes fornuftig. Møtelederen (ordstyreren) har ansvar for å holde møtet på sporet.`,
    },
    {
      id: 'kk-7-5-text-1',
      type: 'text',
      content: `### Kjennetegn på effektive møter

**Før møtet:**
- Klar hensikt: Hvorfor har vi dette møtet?
- Saksliste sendt ut på forhånd
- Riktige deltakere er invitert
- Tid og sted er avtalt
- Nødvendig materiale er distribuert

**Under møtet:**
- Start og slutt til avtalt tid
- Sakslisten følges
- Alle får mulighet til å bidra
- Diskusjoner holdes på sporet
- Beslutninger tas og dokumenteres

**Etter møtet:**
- Referat sendes ut raskt
- Oppgaver og ansvarlige er tydelige
- Frister er satt
- Oppfølging planlagt

**Når trengs egentlig et møte?**
Et møte er nødvendig når gruppen trenger å diskutere, ta beslutninger sammen eller koordinere komplekst arbeid. Ren informasjon kan ofte sendes skriftlig.`,
    },
    {
      id: 'kk-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Saksliste',
      content: `**Saksliste for prosjektgruppemøte**
**Dato:** Tirsdag 15. mars kl. 12:00–12:45
**Sted:** Grupperom 3
**Deltakere:** Emma, Jonas, Lise, Tobias

| Nr. | Sak | Type | Ansvarlig | Tid |
|-----|-----|------|-----------|-----|
| 1 | Godkjenning av referat fra forrige møte | Vedtak | Emma | 5 min |
| 2 | Status på deloppgaver | Orientering | Alle | 10 min |
| 3 | Valg av presentasjonsformat | Diskusjon/vedtak | Jonas | 15 min |
| 4 | Fordeling av resterende arbeid | Vedtak | Emma | 10 min |
| 5 | Eventuelt | | Alle | 5 min |

Sakslisten viser klart hva som skal diskuteres, hvem som er ansvarlig, og hvor lang tid hver sak bør ta. «Type» angir om saken er til orientering, diskusjon eller vedtak.`,
    },
    {
      id: 'kk-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med en saksliste?',
        options: [
          { id: 'a', text: 'Å dokumentere hva som ble besluttet', isCorrect: false },
          { id: 'b', text: 'Å gi deltakerne oversikt over hva som skal diskuteres og gi møtet struktur', isCorrect: true },
          { id: 'c', text: 'Å bestemme hvem som skal delta på møtet', isCorrect: false },
          { id: 'd', text: 'Å erstatte selve møtet', isCorrect: false },
        ],
        solution: 'Sakslisten gir deltakerne mulighet til å forberede seg og gir møtet struktur slik at tiden brukes effektivt. Referatet dokumenterer hva som ble besluttet - det er noe annet.',
      },
    },
    {
      id: 'kk-7-5-def-2',
      type: 'definition',
      title: 'Referat',
      content: `**Referat** er et skriftlig sammendrag av hva som ble diskutert og besluttet i et møte. Et godt referat inneholder dato, deltakere, sakene som ble behandlet, vedtak som ble fattet, og hvem som er ansvarlig for oppfølgingsoppgaver med frister.`,
    },
    {
      id: 'kk-7-5-text-2',
      type: 'text',
      content: `### Referatskriving

**Hva referatet skal inneholde:**
- Møtedato, -tid og -sted
- Hvem var til stede (og hvem hadde forfall)
- Sakene som ble behandlet
- Kort sammendrag av diskusjonen
- Vedtak som ble fattet
- Oppfølgingsoppgaver med ansvarlig og frist
- Dato for neste møte

**Tips for god referatskriving:**
- Skriv objektivt - ikke legg inn egne meninger
- Vær konsis - referater trenger ikke all detalj
- Bruk tydelige formuleringer for vedtak: «Vedtak: Gruppen besluttet å...»
- Send ut referatet innen 24 timer etter møtet
- La møtelederen godkjenne referatet før utsending

**Vanlige feil:**
- For detaljert (alt som ble sagt, ord for ord)
- For vagt (ingen vet hva som ble bestemt)
- Mangler ansvarsfordeling (hvem gjør hva?)
- Sendes ut for sent (folk har glemt konteksten)`,
    },
    {
      id: 'kk-7-5-example-2',
      type: 'example',
      title: 'Eksempel: Utdrag fra referat',
      content: `**Referat fra prosjektgruppemøte**
**Dato:** Tirsdag 15. mars kl. 12:00–12:40
**Til stede:** Emma (møteleder), Jonas (referent), Lise, Tobias
**Forfall:** Ingen

**Sak 3: Valg av presentasjonsformat**
Jonas la frem fordeler og ulemper med PowerPoint versus video. Lise argumenterte for video fordi det skiller seg ut. Tobias støttet PowerPoint for tidsbesparelse. Emma foreslo kombinasjon.

**Vedtak:** Gruppen besluttet å lage en PowerPoint-presentasjon med korte videoinnslag (maks 2 minutter totalt). Jonas har ansvar for videoredigering, Lise lager PowerPoint-malen.

**Sak 4: Fordeling av resterende arbeid**
| Oppgave | Ansvarlig | Frist |
|---------|-----------|-------|
| Skrive introduksjon | Emma | 20. mars |
| Lage videoinnslag | Jonas | 22. mars |
| Designe lysbilder | Lise | 22. mars |
| Sammenstille og øve | Alle | 24. mars |

**Neste møte:** Torsdag 24. mars kl. 12:00`,
    },
    {
      id: 'kk-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        task: 'Skriv en saksliste for et møte i en prosjektgruppe som skal diskutere følgende: fordeling av oppgaver, tidsfrist for første utkast, og valg av verktøy for samarbeid. Bruk riktig format med saksnummer, type og tidsanslag.',
        hints: ['Se eksempelet i kapittelet for format. Husk å ta med tid, sted og deltakere i tillegg til sakene'],
        solution: 'Et godt svar inneholder overskrift, dato/tid/sted, deltakere, og tre nummererte saker med type (vedtak/diskusjon/orientering), ansvarlig og tidsanslag. For eksempel: Sak 1 - Fordeling av oppgaver (vedtak, 15 min), Sak 2 - Tidsfrist for første utkast (diskusjon/vedtak, 10 min), Sak 3 - Valg av samarbeidsverktøy (diskusjon/vedtak, 10 min), pluss eventuelt.',
      },
    },
    {
      id: 'kk-7-5-text-3',
      type: 'text',
      content: `### Presentasjonsteknikk

**Planlegging:**
- Kjenn publikummet ditt: Hva vet de? Hva trenger de å vite?
- Ha en tydelig struktur: innledning, hoveddel, avslutning
- Begrens innholdet - det er bedre å gå i dybden på noen få punkter
- Forbered deg på spørsmål

**Visuell støtte:**
- Bruk lysbilder som støtte, ikke manuskript
- Lite tekst, store skrifttyper, tydelige bilder
- Maks 6–8 punkter per lysbilde
- Unngå å lese opp fra lysbildene

**Fremføring:**
- Øyekontakt med publikum
- Tydelig og rolig stemmebruk, varier tempo
- Bruk pauser for effekt
- Stå stødig, unngå nervøs vandring
- Vis entusiasme for temaet

**Håndtering av nervøsitet:**
- Øv mye - kjenn materialet godt
- Pust dypt før du starter
- Fokuser på budskapet, ikke deg selv
- Husk: litt nervøsitet er normalt og skjerper konsentrasjonen`,
    },
    {
      id: 'kk-7-5-tip-1',
      type: 'tip',
      title: 'Huskeregelen 10-20-30',
      content: `Guy Kawasakis 10-20-30-regel for presentasjoner: Maks **10 lysbilder**, maks **20 minutters** presentasjon, minste skriftstørrelse **30 punkt**. Regelen sikrer at du holder det enkelt og fokusert. Selv om den opprinnelig var laget for forretningspresentasjoner, er prinsippet nyttig for alle presentasjoner.`,
    },
    {
      id: 'kk-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-3',
        number: '7.5.3',
        type: 'multiple-choice',
        task: 'Hva er den viktigste oppgaven til en møteleder?',
        options: [
          { id: 'a', text: 'Å ta alle beslutninger selv', isCorrect: false },
          { id: 'b', text: 'Å skrive referat', isCorrect: false },
          { id: 'c', text: 'Å sørge for at møtet er strukturert, at alle blir hørt og at beslutninger tas', isCorrect: true },
          { id: 'd', text: 'Å snakke mest mulig selv', isCorrect: false },
        ],
        solution: 'Møtelederens viktigste oppgave er å fasilitere møtet: holde struktur, gi alle mulighet til å bidra, holde diskusjonen på sporet og sørge for at beslutninger faktisk tas. Referatskriving er vanligvis en annen persons oppgave.',
      },
    },
    {
      id: 'kk-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Hva er forskjellen mellom en saksliste og et referat? Forklar begge med egne ord og beskriv når i møteprosessen hvert dokument brukes.',
        hints: ['Tenk på tidslinjen: før, under og etter møtet'],
        solution: 'Sakslisten lages og sendes ut FØR møtet. Den viser hva som skal diskuteres, slik at deltakerne kan forberede seg. Referatet skrives UNDER og ETTER møtet. Det dokumenterer hva som faktisk ble diskutert og besluttet, hvem som fikk ansvar for hva, og med hvilke frister.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Du skal holde en 5-minutters presentasjon om gruppearbeid for klassen. Lag en plan som inkluderer: struktur (innledning, hoveddel, avslutning), hovedpoeng du vil fremheve, og tre tips du vil gi til publikum.',
        hints: ['Bruk rådene fra kapittelet om presentasjonsteknikk'],
        solution: 'Et godt svar har en klar tredeling: Innledning (fange oppmerksomhet, si hva du skal snakke om), hoveddel (2-3 hovedpoeng med eksempler, f.eks. viktigheten av klare roller, god kommunikasjon og håndtering av konflikter), avslutning (oppsummering og tre konkrete tips). Eleven viser at de kan planlegge en strukturert presentasjon.',
      },
    },
    {
      id: 'kk-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-6',
        number: '7.5.6',
        type: 'multiple-choice',
        task: 'Hva bør du IKKE gjøre under en presentasjon?',
        options: [
          { id: 'a', text: 'Ha øyekontakt med publikum', isCorrect: false },
          { id: 'b', text: 'Lese opp teksten fra lysbildene', isCorrect: true },
          { id: 'c', text: 'Bruke pauser for effekt', isCorrect: false },
          { id: 'd', text: 'Vise entusiasme for temaet', isCorrect: false },
        ],
        solution: 'Å lese opp teksten fra lysbildene er en av de vanligste feilene i presentasjoner. Publikum kan lese selv - din jobb er å forklare, utdype og engasjere. Lysbilder skal være visuell støtte, ikke et manuskript.',
      },
    },
    {
      id: 'kk-7-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-7-5-ex-7',
        number: '7.5.7',
        type: 'classic',
        task: 'Diskuter: Hva kan gå galt i et møte uten saksliste og møteleder? Gi minst fire konkrete problemer som kan oppstå.',
        hints: ['Tenk på tid, struktur, deltakelse og beslutninger'],
        solution: 'Problemer: 1) Møtet mangler retning og diskusjonen hopper mellom temaer. 2) Noen dominerer mens andre ikke slipper til. 3) Det brukes mye tid uten at beslutninger tas. 4) Ingen vet hva som ble bestemt eller hvem som er ansvarlig. 5) Irrelevante temaer tar opp tiden. 6) Møtet trekker ut i tid fordi ingen holder strukturen.',
      },
    },
    {
      id: 'kk-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Effektive møter** krever planlegging med saksliste, strukturert gjennomføring og oppfølging med referat
- **Møtelederen** sørger for struktur, deltakelse og beslutninger
- **Sakslisten** sendes ut før møtet, **referatet** dokumenterer det som ble besluttet
- **God presentasjonsteknikk** handler om struktur, visuell støtte og engasjert fremføring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Saksliste | Oversikt over saker som skal behandles i møtet |
| Referat | Skriftlig sammendrag av diskusjoner og vedtak |
| Møteledelse | Å planlegge, lede og følge opp møter effektivt |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT_1_DEL7_CHAPTERS = [
  CHAPTER_KOMKULT_1_7_1,
  CHAPTER_KOMKULT_1_7_2,
  CHAPTER_KOMKULT_1_7_3,
  CHAPTER_KOMKULT_1_7_4,
  CHAPTER_KOMKULT_1_7_5,
];
