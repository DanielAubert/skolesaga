/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 2 (VG3) - Del 5: Testing og evaluering
 *
 * Dekker LK20-kompetansemål for treningslære 2
 * Kapittel 5.1-5.5: Testteori, styrketester, utholdenhetstester,
 * spenst/hurtighet/bevegelighet og evaluering/treningsdagbok
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Testteori
// ============================================================================

export const CHAPTER_TRENING_2_5_1: TextbookChapter = {
  id: 'trening-2-5-1',
  courseId: 'trening-2',
  chapterNumber: '5.1',
  title: 'Testteori',
  description: 'Validitet, reliabilitet, objektivitet og standardisering av fysiske tester i idrett.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for grunnleggende testteori og kvalitetskrav til fysiske tester',
    'forklare begrepene validitet, reliabilitet og objektivitet',
    'forstå betydningen av standardisering ved testing',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-5-1-intro',
      type: 'text',
      content: `# Testteori

Testing er en sentral del av treningsarbeidet. Gjennom systematisk testing kan vi kartlegge en utøvers utgangsnivå, følge utviklingen over tid og justere treningsopplegget. For at testresultater skal ha verdi, må testene oppfylle bestemte kvalitetskrav. I dette kapittelet ser vi nærmere på de viktigste begrepene innen testteori: validitet, reliabilitet, objektivitet og standardisering.

En test er en systematisk prosedyre for å måle en egenskap eller ferdighet. I treningssammenheng bruker vi tester for å kvantifisere fysiske egenskaper som styrke, utholdenhet, spenst og bevegelighet. Resultatene gir oss tallverdier som kan sammenlignes med tidligere målinger, normverdier eller andre utøvere.`,
    },
    {
      id: 'tr2-5-1-def-validitet',
      type: 'definition',
      title: 'Validitet',
      content: `Validitet handler om hvorvidt en test faktisk måler det den er ment å måle. En test med høy validitet gir resultater som gjenspeiler den egenskapen man ønsker å undersøke. For eksempel har en direkte VO2max-test på tredemølle høy validitet for å måle maksimalt oksygenopptak, mens en sit-and-reach-test har lav validitet for å måle total bevegelighet fordi den bare måler fleksibilitet i hamstrings og nedre rygg.`,
    },
    {
      id: 'tr2-5-1-text-validitetstyper',
      type: 'text',
      title: 'Typer validitet',
      content: `Det finnes flere former for validitet som er relevante innen idrettstesting:

**Innholdsvaliditet** (face validity):
Testen ser ut til å måle det den skal. Eksperter vurderer om testoppgavene er relevante for egenskapen som måles. En beep-test har god innholdsvaliditet for utholdenhet fordi den tydelig krever aerob kapasitet.

**Kriterievaliditet**:
Testresultatene sammenlignes med en gullstandard. Kriterievaliditet deles i to:
- *Samtidig validitet*: Testresultater sammenlignes med en gullstandard målt samtidig (f.eks. Cooper-test mot direkte VO2max-måling)
- *Prediktiv validitet*: Testresultater brukes til å forutsi fremtidig prestasjon

**Konstruktvaliditet**:
Testen måler det teoretiske begrepet den er konstruert for å måle. For eksempel skal en test for eksplosiv styrke faktisk fange opp evnen til rask kraftutvikling, ikke bare maksimal styrke.

En test kan ha ulik grad av validitet avhengig av hvilken populasjon den brukes på. En test som er valid for voksne utøvere, er ikke nødvendigvis valid for barn eller eldre.`,
    },
    {
      id: 'tr2-5-1-def-reliabilitet',
      type: 'definition',
      title: 'Reliabilitet',
      content: `Reliabilitet handler om testens pålitelighet og reproduserbarhet. En test med høy reliabilitet gir tilnærmet like resultater når den gjentas under samme betingelser. Lav reliabilitet betyr at resultatene varierer mye fra gang til gang, noe som gjør det vanskelig å avgjøre om endringer skyldes reell fremgang eller tilfeldig målevariasjon.`,
    },
    {
      id: 'tr2-5-1-text-reliabilitet',
      type: 'text',
      title: 'Faktorer som påvirker reliabilitet',
      content: `Reliabilitet påvirkes av flere faktorer:

**Biologisk variasjon**: Utøverens dagsform, søvn, ernæring, motivasjon og stressnivå kan påvirke prestasjonen fra test til test. Selv under optimale forhold vil det være noe naturlig variasjon.

**Testleder**: Ulik instruksjon, oppmuntring og tolkning av prosedyren mellom testledere kan påvirke resultatet. En testleder som gir sterkere verbal oppmuntring, kan få høyere resultater.

**Måleutstyr**: Kalibrering av utstyr, type utstyr og teknisk presisjon spiller inn. En kraftplate gir mer reliable målinger enn et målebånd for spenst.

**Testprosedyre**: Oppvarming, rekkefølge på tester, hviletid mellom forsøk og tidspunkt på dagen påvirker resultatene.

**Test-retest-reliabilitet** uttrykkes ofte som en korrelasjonskoeffisient (ICC) mellom 0 og 1. En ICC over 0,90 regnes som høy reliabilitet, mellom 0,70 og 0,90 som akseptabel, og under 0,70 som lav.`,
    },
    {
      id: 'tr2-5-1-def-objektivitet',
      type: 'definition',
      title: 'Objektivitet',
      content: `Objektivitet (inter-rater reliabilitet) handler om i hvilken grad ulike testledere får samme resultat når de tester samme person med samme test. En test med høy objektivitet gir konsistente resultater uavhengig av hvem som gjennomfører testen. Elektroniske målinger (f.eks. kraftplate, løpebånd) har vanligvis høyere objektivitet enn manuelle målinger som krever subjektiv vurdering.`,
    },
    {
      id: 'tr2-5-1-text-standardisering',
      type: 'text',
      title: 'Standardisering av tester',
      content: `Standardisering betyr at testen gjennomføres på nøyaktig samme måte hver gang. Dette er avgjørende for at resultatene skal kunne sammenlignes over tid og mellom utøvere.

**Elementer i en standardisert testprotokoll:**
1. **Forberedelser**: Krav til søvn, ernæring og aktivitet dagene før testen
2. **Oppvarming**: Standardisert oppvarmingsprotokoll med fastsatt varighet og intensitet
3. **Instruksjon**: Skriftlig, standardisert instruksjon som leses opp likt hver gang
4. **Gjennomføring**: Detaljert beskrivelse av bevegelsesutførelse, antall forsøk og hviletid
5. **Registrering**: Fastsatte kriterier for godkjent forsøk og nøyaktig måling
6. **Tidspunkt**: Samme tidspunkt på døgnet for gjentatte målinger
7. **Miljø**: Temperatur, underlag og utstyr bør være likt

**Eksempel på standardiseringskrav for en 1RM benkpress-test:**
- Utøveren skal ha spist et lett måltid 2-3 timer før testen
- Ingen tung trening siste 48 timer
- Standardisert oppvarming: 5 min på ergometersykkel + 2 sett med lett vekt
- Stangen skal berøre brystet og armene strekkes helt ut
- 3-5 minutter pause mellom forsøk
- Maksimalt 5 forsøk for å nå 1RM`,
    },
    {
      id: 'tr2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Vurdering av en tests kvalitet',
      problem: `En trener ønsker å bruke beep-testen (20 m shuttle run) for å vurdere utholdenheten til et fotballag. Vurder testens validitet, reliabilitet og objektivitet for dette formålet.`,
      solution: `**Validitet**: Moderat til god. Beep-testen måler aerob utholdenhet gjennom progressivt økende løpshastighet. Den korrelerer godt med direkte VO2max-målinger (r = 0,80-0,92). For fotballspillere er den idrettsspesifikk fordi den innebærer løp med vendinger, noe som ligner bevegelsesmønsteret i fotball.

**Reliabilitet**: God (ICC typisk 0,89-0,95). Testen gir relativt like resultater ved gjentatt testing, forutsatt at betingelsene er standardiserte. Motivasjon kan være en feilkilde fordi testen krever at utøveren presser seg til utmattelse.

**Objektivitet**: Høy. Testen styres av et lydopptak med fastsatte intervaller, og resultatet er antall gjennomførte nivåer/lengder. Det er lite rom for subjektiv vurdering fra testlederens side, selv om det kreves skjønn for å avgjøre om utøveren rekker linjen i tide.

**Konklusjon**: Beep-testen er et godt valg for å teste utholdenheten i et fotballag, med akseptabel validitet og høy reliabilitet og objektivitet.`,
    },
    {
      id: 'tr2-5-1-tip-1',
      type: 'tip',
      title: 'Minste meningsfulle endring',
      content: `Når du tolker testresultater over tid, er det viktig å kjenne testens typiske målevariasjon (CV - variasjonskoeffisient). Endringer må være større enn den typiske målefeilen for å regnes som reelle. Dersom en test har en CV på 3 %, må en endring på minst 5-6 % (ca. 2 ganger CV) anses som meningsfull. Ellers kan endringen like gjerne skyldes tilfeldig variasjon.`,
    },
    {
      id: 'tr2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med validitet i testsammenheng?',
        options: [
          { id: 'a', text: 'At testen måler det den er ment å måle', isCorrect: true },
          { id: 'b', text: 'At testen gir like resultater ved gjentatte målinger', isCorrect: false },
          { id: 'c', text: 'At ulike testledere får samme resultat', isCorrect: false },
          { id: 'd', text: 'At testen gjennomføres på standardisert måte', isCorrect: false },
        ],
        solution: 'Validitet betyr at testen faktisk måler det den er ment å måle. For eksempel er en direkte VO2max-test valid for å måle maksimalt oksygenopptak, mens en gripestyrketest ikke er valid for å vurdere utholdenhet.',
      },
    },
    {
      id: 'tr2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at en test har høy reliabilitet?',
        options: [
          { id: 'a', text: 'At testen gir tilnærmet like resultater ved gjentatte målinger under samme betingelser', isCorrect: true },
          { id: 'b', text: 'At testen er enkel å gjennomføre', isCorrect: false },
          { id: 'c', text: 'At testen måler mange ulike egenskaper samtidig', isCorrect: false },
          { id: 'd', text: 'At testen er godkjent av idrettsforbundet', isCorrect: false },
        ],
        solution: 'Reliabilitet handler om testens pålitelighet og reproduserbarhet. Høy reliabilitet betyr at man får tilnærmet like resultater når testen gjentas under de samme betingelsene, slik at man kan stole på at endringer i resultater gjenspeiler reelle endringer hos utøveren.',
      },
    },
    {
      id: 'tr2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom validitet og reliabilitet. Kan en test være reliabel uten å være valid? Gi et eksempel.',
        solution: 'Validitet handler om testen måler det den skal, mens reliabilitet handler om at resultatene er stabile og reproduserbare. Ja, en test kan være reliabel uten å være valid. Eksempel: Hvis du bruker en vekt som alltid viser 2 kg for mye, gir den svært reliable målinger (alltid likt resultat for samme person), men resultatene er ikke valide fordi de ikke viser riktig vekt. I treningssammenheng: En armhevingstest kan gi svært reliable resultater for muskulær utholdenhet i overkroppen, men den er ikke valid for å måle beinstyrke. Derimot kan en test ikke være valid uten å være reliabel, fordi ustabile resultater aldri kan gjenspeile den sanne verdien konsistent.',
        hints: ['Tenk på en baderomssvekt som alltid viser feil vekt, men alltid den samme feilen'],
      },
    },
    {
      id: 'tr2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sjekkliste med minst seks punkter for standardisering av en fysisk test. Begrunn hvorfor hvert punkt er viktig.',
        solution: '1) Tidspunkt: Testen bør gjennomføres på samme tid av døgnet fordi prestasjonsevnen varierer gjennom dagen (døgnrytme). 2) Ernæring: Utøveren bør ha spist et standardisert måltid 2-3 timer før, fordi ernæringsstatus påvirker energitilgjengelighet. 3) Hvile: Ingen tung trening siste 48 timer, fordi utmattelse fra tidligere trening påvirker prestasjonen. 4) Oppvarming: Standardisert oppvarmingsprotokoll med fastsatt varighet og intensitet, fordi oppvarming påvirker muskeltemperatur og prestasjon. 5) Instruksjon: Skriftlig instruksjon som leses opp likt hver gang, fordi ulik instruksjon kan påvirke motivasjon og utførelse. 6) Utstyr: Samme utstyr som er kalibrert, fordi ulike instrumenter kan gi ulike resultater. 7) Miljø: Kontrollert temperatur og underlag, fordi ytre forhold påvirker prestasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En utøver oppnår 48 ml/kg/min på en Cooper-test (estimert VO2max) og 52 ml/kg/min på en direkte VO2max-test på tredemølle. Diskuter hva denne forskjellen kan skyldes, og vurder hvilke konsekvenser dette har for bruken av indirekte tester.',
        solution: 'Forskjellen på 4 ml/kg/min mellom Cooper-test og direkte måling skyldes at Cooper-testen er en indirekte test som estimerer VO2max basert på en formel utviklet fra gruppegjennomsnitt. Mulige forklaringer: 1) Løpsøkonomi: Utøvere med god/dårlig løpsteknikk kan henholdsvis overestimeres/underestimeres. 2) Motivasjon: Cooper-testen krever selvregulering av tempo, mens tredemølletesten styres av protokollen. 3) Anaerob kapasitet: Utøvere med høy anaerob kapasitet kan løpe lenger på Cooper-testen enn VO2max tilsier. 4) Formelen er basert på gjennomsnittsverdier og passer ikke alle individer like godt. Konsekvenser: Indirekte tester bør brukes med forbehold, og man bør kjenne testens standard estimatfeil (SEE). Cooper-testen har en SEE på ca. 5 ml/kg/min, noe som betyr at avviket i eksempelet er innenfor normalvariasjonen. For individuelle utøvere bør man bruke endringer over tid fremfor absoluttverdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal planlegge en testdag for et idrettslag med 20 utøvere. Du har tilgang til utstyr for spenst-, styrke- og utholdenhetstesting. Forklar hvordan du vil organisere testdagen med tanke på rekkefølge, standardisering og praktisk gjennomføring.',
        solution: 'Testdagen bør organiseres slik: 1) Rekkefølge: Start med tester som krever hvile og presisjon (spenst, sprint), deretter styrketester, og avslutt med utholdenhetstester (som gir størst utmattelse). Begrunnelse: Utmattelse fra utholdenhetstester vil påvirke spenst- og styrkeresultater negativt. 2) Stasjonsrotasjon: Del laget i grupper på 4-5 som roterer mellom stasjoner, slik at alle får tilstrekkelig hvile mellom tester. 3) Standardisering: Alle møter til fastsatt tid, har fulgt samme ernærings- og hvileprotokoll. Skriftlig instruksjon ved hver stasjon. Samme testleder ved hver stasjon hele dagen. 4) Oppvarming: Felles standardisert oppvarming (15 min) med lett jogg, dynamisk tøyning og aktiveringsøvelser. 5) Dokumentasjon: Bruk standardiserte skjemaer med utøvernes navn, testtidspunkt og resultater. 6) Tidsplan eksempel: 09:00 oppvarming, 09:15 stasjon 1 (CMJ), 09:45 stasjon 2 (sprint), 10:15 pause, 10:30 stasjon 3 (1RM benkpress), 11:15 stasjon 4 (beep-test).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Styrketester
// ============================================================================

export const CHAPTER_TRENING_2_5_2: TextbookChapter = {
  id: 'trening-2-5-2',
  courseId: 'trening-2',
  chapterNumber: '5.2',
  title: 'Styrketester',
  description: '1RM-testing, isometrisk og isokinetisk testing, kraft-hastighetsprofiler og praktisk gjennomføring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike metoder for styrketesting',
    'forklare prinsippene bak 1RM-testing og submaksimale estimeringsmetoder',
    'forstå forskjellen mellom isometrisk, isokinetisk og isotonisk testing',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-5-2-intro',
      type: 'text',
      content: `# Styrketester

Styrketesting er viktig for å kartlegge utøverens styrkegenskaper, planlegge treningsbelastning og evaluere fremgang. Det finnes mange ulike styrketester, fra enkle feltbaserte tester til avanserte laboratoriemålinger. Valg av test avhenger av hva man ønsker å måle, tilgjengelig utstyr og utøverens treningsnivå.

I dette kapittelet ser vi på de vanligste metodene for styrketesting: 1RM-testing, submaksimale estimeringsmetoder, isometrisk testing, isokinetisk testing og kraft-hastighets­profilering.`,
    },
    {
      id: 'tr2-5-2-def-1rm',
      type: 'definition',
      title: '1RM (one repetition maximum)',
      content: `1RM er den tyngste vekten en person kan løfte gjennom fullt bevegelsesutslag i en gitt øvelse med korrekt teknikk. 1RM regnes som gullstandarden for å måle maksimal dynamisk styrke og brukes som grunnlag for å beregne treningsbelastning (f.eks. trene på 70 % av 1RM).`,
    },
    {
      id: 'tr2-5-2-text-1rm-protokoll',
      type: 'text',
      title: 'Gjennomføring av 1RM-test',
      content: `En standardisert 1RM-test følger en trinnvis protokoll:

**Steg 1 — Oppvarming**
- 5-10 minutter generell oppvarming (sykling eller lett jogging)
- 1 sett med 8-10 repetisjoner på ca. 50 % av antatt 1RM
- 1 sett med 3-5 repetisjoner på ca. 70 % av antatt 1RM
- 1 sett med 1-2 repetisjoner på ca. 85 % av antatt 1RM

**Steg 2 — Forsøk**
- Øk vekten med 2,5-10 kg avhengig av øvelse og nivå
- Gjennomfør ett forsøk med korrekt teknikk
- Hvil 3-5 minutter mellom forsøk
- Fortsett til utøveren ikke klarer å løfte vekten
- 1RM er den siste vekten som ble løftet med godkjent teknikk
- Maksimalt 5 forsøk etter siste oppvarmingssett

**Sikkerhet**: Bruk alltid spottere ved tunge løft. Sørg for at utøveren behersker øvelsen godt med lettere vekter før 1RM-testing.`,
    },
    {
      id: 'tr2-5-2-text-submaksimal',
      type: 'text',
      title: 'Submaksimal estimering av 1RM',
      content: `Dersom det ikke er hensiktsmessig å gjennomføre en direkte 1RM-test (f.eks. for nybegynnere eller etter skade), kan man estimere 1RM ut fra submaksimale løft.

**Brzoycki-formelen**:
1RM = vekt / (1,0278 - 0,0278 × repetisjoner)

**Epley-formelen**:
1RM = vekt × (1 + 0,0333 × repetisjoner)

Eksempel: En utøver løfter 80 kg i 6 repetisjoner i benkpress.
- Brzoycki: 80 / (1,0278 - 0,0278 × 6) = 80 / 0,861 = 92,9 kg
- Epley: 80 × (1 + 0,0333 × 6) = 80 × 1,20 = 96,0 kg

**Begrensninger**: Formlene er mest nøyaktige med 2-10 repetisjoner. Over 10 repetisjoner gir økende unøyaktighet. Formlene er også utviklet for erfarne løftere og kan avvike for nybegynnere.`,
    },
    {
      id: 'tr2-5-2-def-isometrisk',
      type: 'definition',
      title: 'Isometrisk testing',
      content: `Isometrisk testing måler den maksimale kraften en utøver kan utvikle mot en fast motstand uten bevegelse i leddet. Kraften registreres med en kraftcelle eller kraftplate. Typiske isometriske tester inkluderer isometrisk midtlårstrekk (IMTP), isometrisk knebøy og gripestyrke med hånd-dynamometer. Fordelen med isometrisk testing er høy reliabilitet og lav skaderisiko.`,
    },
    {
      id: 'tr2-5-2-text-isokinetisk',
      type: 'text',
      title: 'Isokinetisk testing',
      content: `Isokinetisk testing bruker et spesielt dynamometer som holder bevegelseshastigheten konstant gjennom hele bevegelsesutslaget. Uansett hvor mye kraft utøveren produserer, vil hastigheten forbli den samme. Dette gir mulighet til å måle dreiemomentet (torque) gjennom hele bevegelsesbanen.

**Bruksområder for isokinetisk testing:**
- Kartlegge styrkeforskjeller mellom høyre og venstre side (bilateral asymmetri)
- Vurdere forholdet mellom agonist og antagonist (f.eks. quadriceps/hamstrings-ratio)
- Følge rehabilitering etter skade
- Kartlegge styrke ved ulike bevegelseshastigheter

**Typiske referanseverdier for quadriceps/hamstrings-ratio:**
- Konvensjonell ratio (konsentrisk hamstrings / konsentrisk quadriceps): 0,50-0,65
- Funksjonell ratio (eksentrisk hamstrings / konsentrisk quadriceps): 0,80-1,00

En lav funksjonell ratio kan tyde på økt risiko for hamstringsskade.`,
    },
    {
      id: 'tr2-5-2-text-kraft-hastighet',
      type: 'text',
      title: 'Kraft-hastighetsprofil',
      content: `En kraft-hastighetsprofil beskriver sammenhengen mellom kraften en utøver produserer og bevegelseshastigheten. Når belastningen øker, synker hastigheten, og omvendt.

**Kraft-hastighetskurven** kan kartlegges ved å måle hastighet og kraft ved ulike belastninger, for eksempel i knebøy med vektbelte-encoder (lineær posisjonstransduser).

Profileringen gir informasjon om:
- **F0 (teoretisk maksimalkraft)**: Den maksimale kraften utøveren kan produsere ved null hastighet
- **V0 (teoretisk maksimalhastighet)**: Den maksimale hastigheten utøveren kan oppnå uten ytre belastning
- **Pmax (maksimal effekt)**: Det høyeste produktet av kraft og hastighet
- **Profilen** viser om utøveren er kraftdominant (høy F0, lav V0), hastighetsdominant (lav F0, høy V0) eller balansert

Trenere kan bruke profilen til å tilpasse treningen: En kraftdominant utøver bør trene mer eksplosivt med lettere vekter, mens en hastighetsdominant utøver kan ha nytte av tyngre styrketrening.`,
    },
    {
      id: 'tr2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Submaksimal estimering av 1RM',
      problem: `En utøver klarer 100 kg i 4 repetisjoner i knebøy. Estimer 1RM med Epley-formelen, og beregn hva 75 % av 1RM tilsvarer.`,
      solution: `**Estimert 1RM (Epley-formelen):**
1RM = vekt × (1 + 0,0333 × repetisjoner)
1RM = 100 × (1 + 0,0333 × 4)
1RM = 100 × (1 + 0,1332)
1RM = 100 × 1,1332
1RM = **113,3 kg**

**75 % av 1RM:**
0,75 × 113,3 = **85,0 kg**

Utøveren bør trene med ca. 85 kg dersom treningsprogrammet foreskriver 75 % av 1RM.`,
    },
    {
      id: 'tr2-5-2-note-1',
      type: 'note',
      title: 'Relative styrkeverdier',
      content: `For å sammenligne styrke mellom utøvere med ulik kroppsvekt brukes ofte relativ styrke: 1RM delt på kroppsvekt. En utøver på 80 kg som løfter 120 kg i knebøy har en relativ styrke på 1,50. Generelt regnes relativ styrke over 2,0 i knebøy som svært sterkt for menn, og over 1,5 for kvinner.`,
    },
    {
      id: 'tr2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er 1RM?',
        options: [
          { id: 'a', text: 'Den tyngste vekten en person kan løfte med korrekt teknikk i en repetisjon', isCorrect: true },
          { id: 'b', text: 'Vekten en person kan løfte 10 ganger uten pause', isCorrect: false },
          { id: 'c', text: 'Gjennomsnittlig vekt løftet i tre sett', isCorrect: false },
          { id: 'd', text: 'Den letteste vekten som gir muskelutmattelse', isCorrect: false },
        ],
        solution: '1RM (one repetition maximum) er den tyngste vekten en person kan løfte gjennom fullt bevegelsesutslag i en gitt øvelse med korrekt teknikk. Det brukes som mål på maksimal dynamisk styrke og som grunnlag for å beregne treningsbelastning.',
      },
    },
    {
      id: 'tr2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner isometrisk testing?',
        options: [
          { id: 'a', text: 'Maksimal kraftutvikling mot en fast motstand uten bevegelse i leddet', isCorrect: true },
          { id: 'b', text: 'Bevegelse med konstant hastighet gjennom hele bevegelsesbanen', isCorrect: false },
          { id: 'c', text: 'Testing av styrke under eksplosive hopp', isCorrect: false },
          { id: 'd', text: 'Gjentatte repetisjoner med synkende vekt', isCorrect: false },
        ],
        solution: 'Isometrisk testing innebærer at utøveren utvikler maksimal kraft mot en fast, ubevegelig motstand. Det skjer ingen bevegelse i leddet. Fordelen er høy reliabilitet og lav skaderisiko, og kraften måles typisk med en kraftcelle eller kraftplate.',
      },
    },
    {
      id: 'tr2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En utøver løfter 70 kg i 8 repetisjoner i benkpress. Estimer 1RM med både Brzoycki- og Epley-formelen. Beregn deretter 80 % av gjennomsnittlig estimert 1RM.',
        solution: 'Brzoycki: 1RM = 70 / (1,0278 - 0,0278 × 8) = 70 / (1,0278 - 0,2224) = 70 / 0,8054 = 86,9 kg. Epley: 1RM = 70 × (1 + 0,0333 × 8) = 70 × 1,2664 = 88,6 kg. Gjennomsnitt: (86,9 + 88,6) / 2 = 87,8 kg. 80 % av 87,8 = 70,2 kg. Utøveren bør trene med ca. 70 kg dersom programmet foreskriver 80 % av 1RM.',
        hints: ['Brzoycki: 1RM = vekt / (1,0278 - 0,0278 × rep). Epley: 1RM = vekt × (1 + 0,0333 × rep)'],
      },
    },
    {
      id: 'tr2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en kraft-hastighetsprofil er, og drøft hvordan den kan brukes til å individualisere styrketrening.',
        solution: 'En kraft-hastighetsprofil viser sammenhengen mellom kraft og bevegelseshastighet hos en utøver. Den kartlegges ved å måle hastighet og kraft ved ulike belastninger. Profilen gir tre sentrale verdier: F0 (teoretisk maksimalkraft), V0 (teoretisk maksimalhastighet) og Pmax (maksimal effekt). Profilen viser om utøveren er kraftdominant (høy F0, lav V0) eller hastighetsdominant (lav F0, høy V0). Treneren kan bruke profilen til å individualisere: En kraftdominant utøver bør trene mer eksplosivt med lettere belastninger (30-60 % av 1RM) og ballistiske øvelser for å utvikle hastighetsegenskapene. En hastighetsdominant utøver bør trene med tyngre belastninger (80-95 % av 1RM) for å utvikle maksimalstyrken. Slik tilpasning gir mer effektiv trening enn et standardisert program.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved 1RM-testing, submaksimal estimering og isometrisk testing for å vurdere styrke. Hvilken metode egner seg best for en nybegynner, og hvilken for en erfaren utøver?',
        solution: '1RM-testing: Fordeler: gullstandard, direkte måling, høy validitet. Ulemper: krever god teknikk, skaderisiko ved tunge løft, tidkrevende med oppvarming og progresjon. Submaksimal estimering: Fordeler: lavere skaderisiko, raskere gjennomføring, egnet for nybegynnere. Ulemper: estimat med feilmargin (spesielt over 10 repetisjoner), avhenger av teknikk og utmattelsestoleranse. Isometrisk testing: Fordeler: høy reliabilitet, lav skaderisiko, rask gjennomføring. Ulemper: måler kun kraft i en bestemt vinkel, krever spesialutstyr, lav økologisk validitet for dynamiske idretter. For nybegynnere: Submaksimal estimering er best fordi den har lavere skaderisiko og ikke krever maksimal belastning. For erfarne utøvere: 1RM-testing gir mest presise resultater, og utøveren har tilstrekkelig teknikk og erfaring til å gjennomføre trygt. Kraft-hastighetsprofil kan supplere for å gi et mer komplett bilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En isokinetisk test viser at en fotballspiller har en funksjonell hamstrings/quadriceps-ratio på 0,55 på høyre bein og 0,92 på venstre bein. Forklar hva disse tallene betyr, og drøft hvilke konsekvenser denne asymmetrien kan ha for skaderisiko og trening.',
        solution: 'Funksjonell ratio er eksentrisk hamstrings-kraft delt på konsentrisk quadriceps-kraft. Normalverdien er 0,80-1,00. Høyre bein (0,55): Hamstrings er relativt svak i forhold til quadriceps. Under løp og vendinger må hamstrings bremse kneekstensjon eksentrisk, og en lav ratio betyr at hamstrings kan bli overbelastet. Dette gir betydelig økt risiko for hamstringsskade på høyre side. Venstre bein (0,92): Innenfor normalområdet, godt balansert. Asymmetrien mellom beinene (forskjell på 0,37) er bekymringsfull. Konsekvenser: 1) Økt hamstringsskaderisiko på høyre side, spesielt under sprint og vendinger. 2) Mulig kompensatorisk overbelastning av andre strukturer. 3) Nedsatt prestasjonsevne i akselerasjon og retningsendring. Treningsanbefalinger: Fokusert eksentrisk hamstringstrening for høyre bein (nordisk hamstringscurl, rumensk markløft). Unilateral trening for å utjevne asymmetrien. Regelmessig retesting for å følge utviklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Utholdenhetstester
// ============================================================================

export const CHAPTER_TRENING_2_5_3: TextbookChapter = {
  id: 'trening-2-5-3',
  courseId: 'trening-2',
  chapterNumber: '5.3',
  title: 'Utholdenhetstester',
  description: 'VO2max-test, laktatprofil, Cooper-test, beep-test og praktisk gjennomføring av utholdenhetstesting.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike metoder for å teste utholdenhet',
    'forstå forskjellen mellom direkte og indirekte utholdenhetstester',
    'forklare hva en laktatprofil er og hvordan den brukes til å styre trening',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-5-3-intro',
      type: 'text',
      content: `# Utholdenhetstester

Utholdenhetstesting gir viktig informasjon om utøverens aerobe og anaerobe kapasitet. Vi skiller mellom direkte tester som måler VO2max i laboratoriet, og indirekte felttester som estimerer utholdenhetskapasiteten basert på prestasjoner i standardiserte tester. Begge tilnærmingene har sine fordeler og begrensninger.

Valg av test avhenger av formål, tilgjengelig utstyr, utøverens nivå og den aktuelle idretten. En langdistanseløper kan ha nytte av en direkte VO2max-test med laktatmåling, mens et fotballag får mer ut av en beep-test som kan gjennomføres raskt for hele gruppen.`,
    },
    {
      id: 'tr2-5-3-def-vo2max-test',
      type: 'definition',
      title: 'Direkte VO2max-test',
      content: `En direkte VO2max-test måler det maksimale oksygenopptaket ved hjelp av oksygenanalysator (metabolsk analysesystem). Utøveren bruker en maske som samler opp utåndingsluft, og en datamaskin beregner oksygenforbruk og karbondioksidproduksjon. Testen gjennomføres typisk på tredemølle eller ergometersykkel med gradvis økende belastning til utmattelse. VO2max er nådd når oksygenopptaket ikke øker ytterligere til tross for økt belastning.`,
    },
    {
      id: 'tr2-5-3-text-protokoller',
      type: 'text',
      title: 'Vanlige testprotokoller for VO2max',
      content: `**Tredemølleprotokoll (modifisert Balke):**
- Start: 6 km/t, 0 % stigning
- Økning: 1 km/t hvert 2. minutt til 12 km/t, deretter 1 % stigning per minutt
- Varighet: Typisk 8-15 minutter til utmattelse
- Kriterier for oppnådd VO2max: VO2-platå, RER over 1,10, maksimal hjertefrekvens nær aldersjustert maksimum

**Sykkelergometerprotokoll:**
- Start: 50-100 W (avhengig av kjønn og nivå)
- Økning: 25-50 W hvert minutt
- Fordel: Lavere skaderisiko, enklere å ta blodprøver underveis
- Ulempe: Gir 5-10 % lavere VO2max enn tredemølle fordi mindre muskelmasse er involvert

**Ramp-protokoll:**
- Kontinuerlig, jevn økning i belastning (f.eks. 25 W/min)
- Gir presise terskelbestemmelser
- Kortest mulig tid til utmattelse (8-12 min er optimalt)`,
    },
    {
      id: 'tr2-5-3-text-laktatprofil',
      type: 'text',
      title: 'Laktatprofiltesting',
      content: `En laktatprofil kartlegger sammenhengen mellom treningsintensitet og laktatnivå i blodet. Testen gir informasjon om aerob og anaerob terskel, som brukes til å styre treningsintensitet.

**Gjennomføring:**
1. Start på lav belastning (f.eks. 8 km/t på tredemølle)
2. Øk belastningen med faste trinn (f.eks. 1 km/t hvert 4-5. minutt)
3. Ta kapillær blodprøve (fra fingertupp eller øreflipp) i slutten av hvert trinn
4. Mål blodlaktat med bærbar laktatmåler
5. Registrer hjertefrekvens ved hvert trinn
6. Fortsett til utmattelse eller til laktatverdien overstiger 8-10 mmol/L

**Tolkning av laktatprofilen:**
- **Aerob terskel (LT1)**: Intensiteten der laktat begynner å stige over hvileverdien (ca. 2 mmol/L). Trening under denne terskelen er lett aerob trening.
- **Anaerob terskel (LT2/OBLA)**: Intensiteten der laktat stiger bratt og passerer ca. 4 mmol/L (onset of blood lactate accumulation). Over denne intensiteten kan utøveren ikke opprettholde tempoet lenge.
- **Mellom LT1 og LT2**: Treningssonen der laktatproduksjon og fjerning er i balanse. Terskeltrening foregår her.

En godt trent utøver har terskelverdi ved høyere hastighet og/eller lavere hjertefrekvens enn en dårligere trent utøver.`,
    },
    {
      id: 'tr2-5-3-text-cooper',
      type: 'text',
      title: 'Cooper-testen',
      content: `Cooper-testen er en klassisk felttest for aerob utholdenhet utviklet av Kenneth Cooper i 1968. Testen er enkel å gjennomføre og krever minimalt med utstyr.

**Gjennomføring:**
- Løp så langt som mulig på 12 minutter
- Flat, oppmerket løpebane (fortrinnsvis 400 m bane)
- Resultatet er distansen i meter

**Estimering av VO2max:**
VO2max (ml/kg/min) = (distanse i meter - 504,9) / 44,73

**Referanseverdier for 16-19 år:**

| Nivå | Gutter (m) | Jenter (m) |
|------|-----------|-----------|
| Svært bra | Over 2800 | Over 2300 |
| Bra | 2500-2800 | 2100-2300 |
| Middels | 2200-2500 | 1800-2100 |
| Under middels | Under 2200 | Under 1800 |

**Styrker**: Enkel, billig, kan teste mange samtidig, godt validert.
**Svakheter**: Avhenger av motivasjon og selvregulering av tempo. Påvirkes av vind, underlag og temperatur. Estimering av VO2max har relativt stor feilmargin (SEE ca. 5 ml/kg/min).`,
    },
    {
      id: 'tr2-5-3-text-beeptest',
      type: 'text',
      title: 'Beep-testen (20 m shuttle run)',
      content: `Beep-testen er en progressiv felttest der utøveren løper mellom to linjer med 20 meters mellomrom. Tempoet styres av lydsignaler som gradvis øker i frekvens.

**Gjennomføring:**
- To linjer med 20 meters avstand
- Lydsignal markerer når utøveren skal nå linjen
- Starter på nivå 1 (ca. 8,5 km/t) og øker med 0,5 km/t per nivå
- Testen avsluttes når utøveren ikke rekker linjen to ganger etter hverandre

**Resultater oppgis som nivå og lengde** (f.eks. 11.4 betyr nivå 11, lengde 4).

**Fordeler**: Enkel å gjennomføre for grupper, standardisert tempo (eliminerer pacing-problemer), god reliabilitet og validitet for aerob utholdenhet.

**Ulemper**: Krever evne til retningsendring (ikke ren løpstest), utmattelse kan skyldes lokal muskulær tretthet i beinene fremfor kardiovaskulær utmattelse hos noen utøvere.

Beep-testen er spesielt populær i lagidrett fordi den kan gjennomføres innendørs med hele laget samtidig.`,
    },
    {
      id: 'tr2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Tolkning av Cooper-test-resultat',
      problem: `En 17 år gammel gutt løper 2650 meter på Cooper-testen. Estimer VO2max og vurder prestasjonsnivået.`,
      solution: `**Estimert VO2max:**
VO2max = (distanse - 504,9) / 44,73
VO2max = (2650 - 504,9) / 44,73
VO2max = 2145,1 / 44,73
VO2max = **48,0 ml/kg/min**

**Vurdering av prestasjonsnivå:**
2650 meter plasserer eleven i kategorien "bra" for gutter 16-19 år (2500-2800 m). En VO2max på 48 ml/kg/min indikerer et godt utholdenhets­nivå, noe over gjennomsnittet for aldersgruppen. For å nå kategorien "svært bra" (over 2800 m) bør eleven fokusere på en kombinasjon av langkjøring i sone 2 og terskeltrening i sone 4.`,
    },
    {
      id: 'tr2-5-3-note-1',
      type: 'note',
      title: 'Valg av utholdenhetstest',
      content: `Ved valg av utholdenhetstest bør du vurdere: 1) Formålet med testen (screening, treningsstyring, forskning). 2) Antall utøvere som skal testes. 3) Tilgjengelig utstyr og fasiliteter. 4) Utøverens nivå og idrett. 5) Tidsrammen for testing. Cooper-test og beep-test egner seg godt for grupper og screening, mens direkte VO2max-test og laktatprofil gir mer detaljert informasjon for individuell treningsstyring.`,
    },
    {
      id: 'tr2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er gullstandarden for å måle maksimalt oksygenopptak (VO2max)?',
        options: [
          { id: 'a', text: 'Direkte VO2max-test med oksygenanalysator på tredemølle', isCorrect: true },
          { id: 'b', text: 'Cooper-testen (12 minutters løp)', isCorrect: false },
          { id: 'c', text: 'Beep-testen (20 m shuttle run)', isCorrect: false },
          { id: 'd', text: 'Laktatprofil med blodprøver', isCorrect: false },
        ],
        solution: 'Direkte VO2max-test med oksygenanalysator (metabolsk analysesystem) regnes som gullstandarden for å måle VO2max. Utøveren bærer en maske som samler utåndingsluft, og en datamaskin beregner nøyaktig oksygenforbruk under progressivt økende belastning til utmattelse.',
      },
    },
    {
      id: 'tr2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den anaerobe terskelen (LT2/OBLA)?',
        options: [
          { id: 'a', text: 'Intensiteten der blodlaktat stiger bratt og passerer ca. 4 mmol/L', isCorrect: true },
          { id: 'b', text: 'Intensiteten der utøveren når maksimal hjertefrekvens', isCorrect: false },
          { id: 'c', text: 'Intensiteten der fettforbrenningen er høyest', isCorrect: false },
          { id: 'd', text: 'Intensiteten der utøveren begynner å svette', isCorrect: false },
        ],
        solution: 'Den anaerobe terskelen (LT2/OBLA) er intensiteten der blodlaktat stiger bratt og passerer ca. 4 mmol/L. Over denne terskelen hoper laktat seg opp raskere enn kroppen klarer å fjerne det, og utøveren kan ikke opprettholde intensiteten over lang tid.',
      },
    },
    {
      id: 'tr2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En 18 år gammel jente løper 2250 meter på Cooper-testen. Beregn estimert VO2max og vurder resultatet mot referanseverdiene.',
        solution: 'VO2max = (2250 - 504,9) / 44,73 = 1745,1 / 44,73 = 39,0 ml/kg/min. Resultatet plasserer eleven i kategorien "bra" for jenter 16-19 år (2100-2300 m). En VO2max på 39 ml/kg/min er over gjennomsnittet for jenter i denne aldersgruppen. For å forbedre seg ytterligere bør eleven vurdere systematisk utholdenhets­trening med vekt på terskeltrening og langkjøring.',
        hints: ['VO2max = (distanse i meter - 504,9) / 44,73'],
      },
    },
    {
      id: 'tr2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en laktatprofil er, og hvordan den kan brukes til å sette treningssoner for en utøver.',
        solution: 'En laktatprofil er en test der utøveren trener med gradvis økende intensitet mens det tas blodprøver for å måle laktatnivå ved hvert belastningstrinn. Profilens kurve viser sammenhengen mellom intensitet og laktatnivå. Fra profilen kan man identifisere to nøkkelterskler: 1) Aerob terskel (LT1, ca. 2 mmol/L): Under denne er treningen lett aerob. 2) Anaerob terskel (LT2, ca. 4 mmol/L): Over denne hoper laktat seg opp raskt. Treningssoner settes basert på hjertefrekvens og hastighet ved disse tersklene: Sone 1-2 er under LT1 (lett trening). Sone 3 er mellom LT1 og LT2 (moderat trening). Sone 4 er rundt LT2 (terskeltrening). Sone 5 er over LT2 (høyintensiv). Fordelen med laktatbaserte soner er at de er individuelle og tar hensyn til utøverens faktiske fysiologiske respons, i motsetning til formler basert på alder og hjertefrekvens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Cooper-testen og beep-testen som verktøy for å vurdere utholdenhet i et fotballag. Drøft validitet, reliabilitet, praktisk gjennomførbarhet og idrettsspesifisitet.',
        solution: 'Cooper-testen: Validitet: Moderat for fotball. Måler jevn løpsprestasjon over 12 min, men fotball krever gjentatte sprinter, ikke jevnt tempo. Korrelerer godt med VO2max (r = 0,89). Reliabilitet: Moderat (avhenger av pacing og motivasjon). Praktisk: Krever oppmerket bane og stoppeklokke, enkelt oppsett. Idrettsspesifisitet: Lav, fordi fotball involverer retningsendringer, ikke jevnt løp. Beep-testen: Validitet: God for fotball. Krever vendinger og akselerasjon/deselerasjon, som ligner bevegelsesmønsteret i fotball. Korrelerer godt med VO2max (r = 0,80-0,92). Reliabilitet: God (ICC 0,89-0,95), fordi tempoet styres eksternt. Praktisk: Krever 20 m flate, lydopptak og høyttalere, kan gjøres innendørs. Hele laget kan testes samtidig. Idrettsspesifisitet: Høyere enn Cooper, fordi vendinger og tempoendring likner fotball. Konklusjon: Beep-testen er et bedre valg for fotball grunnet høyere idrettsspesifisitet, bedre reliabilitet (eksternt styrt tempo) og enklere gruppegjennomføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En utøver har gjennomført laktatprofil i august og desember. I august var anaerob terskel (4 mmol/L) ved 14 km/t og puls 172. I desember var anaerob terskel ved 15 km/t og puls 168. Tolk resultatene og drøft hva endringene forteller om utøverens utvikling.',
        solution: 'Resultatene viser en klar positiv utvikling fra august til desember. 1) Hastighet ved anaerob terskel økte fra 14 til 15 km/t: Utøveren kan nå løpe 1 km/t raskere før laktat hoper seg opp. Dette er den viktigste indikatoren på forbedret utholdenhets­kapasitet. 2) Hjertefrekvens ved terskel sank fra 172 til 168 slag/min: Utøveren har fått et sterkere hjerte med større slagvolum, slik at det trengs færre slag per minutt for å pumpe like mye blod ved samme intensitet. 3) Kombinasjonen av høyere hastighet og lavere puls betyr at det kardiovaskulære systemet har blitt mer effektivt. Sannsynlige tilpasninger: Økt slagvolum, bedre kapillærtetthet, økt mitokondrievolum, forbedret arbeidsøkonomi og bedre evne til å fjerne laktat. Praktisk konsekvens: Treningssonene bør justeres oppover basert på de nye terskelverdiene, slik at utøveren trener i riktig intensitetssone. De gamle terskelsonene vil nå være for lette til å gi optimal treningseffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Spenst, hurtighet og bevegelighet
// ============================================================================

export const CHAPTER_TRENING_2_5_4: TextbookChapter = {
  id: 'trening-2-5-4',
  courseId: 'trening-2',
  chapterNumber: '5.4',
  title: 'Spenst, hurtighet og bevegelighet',
  description: 'CMJ, sprinttester, sit-and-reach og andre tester for spenst, hurtighet og bevegelighet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike metoder for testing av spenst og hurtighet',
    'forklare prinsippene bak bevegelighetstesting',
    'forstå sammenhengen mellom testresultater og idrettsspesifikke krav',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-5-4-intro',
      type: 'text',
      content: `# Spenst, hurtighet og bevegelighet

Spenst, hurtighet og bevegelighet er viktige fysiske egenskaper i mange idretter. Systematisk testing av disse egenskapene gir trenere og utøvere verdifull informasjon for å tilpasse treningen og følge utvikling over tid.

I dette kapittelet ser vi på de mest brukte testene for spenst (vertikale og horisontale hopp), hurtighet (sprinttester) og bevegelighet (sit-and-reach og andre bevegelighetstester). Vi vurderer også testenes kvalitet og relevans for ulike idretter.`,
    },
    {
      id: 'tr2-5-4-def-cmj',
      type: 'definition',
      title: 'CMJ (Counter Movement Jump)',
      content: `CMJ (svikthopp) er en standardisert vertikal hopptest der utøveren starter i oppreist stilling, gjør en rask nedadgående bevegelse (svikt) og hopper deretter så høyt som mulig. Armene holdes vanligvis i siden (akimbo) for å isolere beinstyrken. Hopphøyden måles med kraftplate, kontaktmatte eller infrarød sensor. CMJ er en av de mest brukte testene for eksplosiv beinstyrke og spenst i idretten.`,
    },
    {
      id: 'tr2-5-4-text-hopptester',
      type: 'text',
      title: 'Ulike hopptester',
      content: `Det finnes flere standardiserte hopptester som måler ulike aspekter ved spenst:

**CMJ (Counter Movement Jump)**
- Svikthopp med armene i siden
- Måler: Eksplosiv styrke med strekk-forkortningssyklus
- God reliabilitet (ICC 0,93-0,98)
- Referanseverdier gutter 16-19 år: 35-50 cm

**SJ (Squat Jump)**
- Hopp fra statisk posisjon (90 graders knevinkel, ingen svikt)
- Måler: Ren konsentrisk kraftutvikling uten strekk-forkortningssyklus
- Forskjellen mellom CMJ og SJ kalles RSI-indeks og sier noe om utøverens evne til å utnytte strekk-forkortningssyklusen

**DJ (Drop Jump)**
- Hopp ned fra en boks (20-60 cm) med umiddelbart opphopp
- Måler: Reaktiv styrke og evne til rask overgang fra eksentrisk til konsentrisk fase
- Brukes til å beregne Reactive Strength Index (RSI = hopphøyde / kontakttid)

**Standing Long Jump (lengdehopp uten tilløp)**
- Horisontalt hopp fra stillestående posisjon
- Måler: Horisontal eksplosivitet
- Enkel felttest uten spesialutstyr
- Referanseverdier gutter 16-19 år: 200-250 cm`,
    },
    {
      id: 'tr2-5-4-text-sprint',
      type: 'text',
      title: 'Sprinttester',
      content: `Sprinttester måler hurtighet og akselerasjonsevne. Tidtaking skjer med elektroniske fotoceller for høy presisjon.

**Lineær sprint:**
- Vanlige distanser: 10 m, 20 m, 30 m og 40 m
- Mellomtider registreres for å analysere akselerasjonsprofil
- 10 m: Primært akselerasjonsevne (startfase)
- 30-40 m: Maksimal hastighet nås typisk etter 30-50 m
- 3-5 forsøk med full restitusjon (2-3 minutter mellom forsøk)

**Referanseverdier for 10 m sprint (stående start):**
- Gutter 16-19 år: 1,70-1,85 s
- Jenter 16-19 år: 1,85-2,05 s

**Referanseverdier for 40 m sprint:**
- Gutter 16-19 år: 5,0-5,5 s
- Jenter 16-19 år: 5,5-6,2 s

**Agility-tester (smidighetstester):**
Agility-tester måler evnen til raske retningsendringer kombinert med akselerasjon og deselerasjon. Vanlige tester inkluderer:
- **T-test**: Løp i T-formasjon med sidesteg og baklengs løp
- **Illinois agility test**: Slalomløp rundt kjegler
- **5-0-5 agility test**: Akselerasjon, vending og akselerasjon tilbake

Agility-tester er spesielt relevante for lagidrett der retningsendring er sentralt.`,
    },
    {
      id: 'tr2-5-4-text-bevegelighet',
      type: 'text',
      title: 'Bevegelighetstester',
      content: `Bevegelighet refererer til leddenes bevegelsesutslag (range of motion, ROM). God bevegelighet er viktig for teknikk, prestasjonsevne og skadeforebygging i mange idretter.

**Sit-and-reach-test:**
- Utøveren sitter med strake bein mot en testboks og strekker hendene fremover
- Måler fleksibilitet i hamstrings og nedre rygg
- Enkel å gjennomføre, men begrenset validitet for total bevegelighet
- Referanseverdier gutter 16-19 år: 20-30 cm
- Referanseverdier jenter 16-19 år: 25-35 cm

**Goniometermåling:**
- Et goniometer (vinkelmåler) brukes for å måle leddutslag i grader
- Kan måle alle ledd spesifikt (skulder, hofte, kne, ankel)
- Høyere validitet enn sit-and-reach for spesifikke ledd
- Krever opplæring for korrekt plassering av instrumentet

**Funksjonelle bevegelighetstester:**
- **Overhead Squat Assessment**: Vurderer bevegelighetsbegrensninger i ankel, hofte, thorax og skulder i en funksjonell bevegelse
- **FMS (Functional Movement Screen)**: Sett av 7 funksjonelle bevegelsestester som kartlegger bevegelighet, stabilitet og motorisk kontroll
- **Thomas test**: Måler hoftefleksibilitet og stramhet i hofteleddsbøyerne

Valg av bevegelighetstest bør gjenspeile idrettens krav. En turner trenger annen bevegelighetstesting enn en fotballspiller.`,
    },
    {
      id: 'tr2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Tolkning av spenst- og sprinttester',
      problem: `En 17 år gammel fotballspiller oppnår følgende testresultater: CMJ 42 cm, SJ 35 cm, 10 m sprint 1,78 s, 40 m sprint 5,3 s. Vurder resultatene og analyser forholdet mellom CMJ og SJ.`,
      solution: `**Vurdering av enkeltresultater:**
- CMJ 42 cm: God spenst, over middels for aldersgruppen (referanse 35-50 cm)
- SJ 35 cm: Middels nivå for konsentrisk styrke
- 10 m sprint 1,78 s: Middels akselerasjonsevne (referanse 1,70-1,85 s)
- 40 m sprint 5,3 s: Middels til god toppfart (referanse 5,0-5,5 s)

**Analyse av CMJ vs. SJ:**
Forskjellen mellom CMJ (42 cm) og SJ (35 cm) er 7 cm, noe som tilsvarer 20 % forbedring med svikt. Dette kalles Eccentric Utilization Ratio (EUR = CMJ/SJ = 42/35 = 1,20).

En EUR mellom 1,05 og 1,15 regnes som normalt. En EUR på 1,20 tyder på at utøveren er god til å utnytte strekk-forkortningssyklusen, men at den konsentriske styrken (SJ) kan utvikles mer. Utøveren bør vurdere tung styrketrening for å øke maksimalstyrken, som også kan forbedre akselerasjonsevnen.`,
    },
    {
      id: 'tr2-5-4-tip-1',
      type: 'tip',
      title: 'Bilateral asymmetri',
      content: `Ved spenst- og styrketester bør man også teste hvert bein separat (unilaterale tester) for å avdekke bilateral asymmetri. En forskjell på mer enn 10-15 % mellom høyre og venstre bein kan indikere økt skaderisiko og bør adresseres med spesifikk unilateral trening. Single-leg CMJ og single-leg hop for distance er gode tester for å kartlegge asymmetri.`,
    },
    {
      id: 'tr2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler CMJ (Counter Movement Jump)?',
        options: [
          { id: 'a', text: 'Eksplosiv beinstyrke med strekk-forkortningssyklus', isCorrect: true },
          { id: 'b', text: 'Maksimal styrke i beinmuskulatur', isCorrect: false },
          { id: 'c', text: 'Utholdenhet i beinmuskulatur', isCorrect: false },
          { id: 'd', text: 'Bevegelighet i hofteleddet', isCorrect: false },
        ],
        solution: 'CMJ (Counter Movement Jump) måler eksplosiv beinstyrke med strekk-forkortningssyklus. Utøveren gjør en rask svikt nedover etterfulgt av et maksimalt vertikalt hopp. Den raske overgangen fra eksentrisk (nedadgående) til konsentrisk (oppadgående) fase utnytter elastisk energi i sener og muskler.',
      },
    },
    {
      id: 'tr2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler sit-and-reach-testen primært?',
        options: [
          { id: 'a', text: 'Fleksibilitet i hamstrings og nedre rygg', isCorrect: true },
          { id: 'b', text: 'Total kroppsfleksibilitet', isCorrect: false },
          { id: 'c', text: 'Skuldermobilitet og brystrygg-rotasjon', isCorrect: false },
          { id: 'd', text: 'Hoftebøyernes styrke og utholdenhet', isCorrect: false },
        ],
        solution: 'Sit-and-reach-testen måler primært fleksibiliteten i hamstrings og nedre rygg. Utøveren sitter med strake bein mot en testboks og strekker hendene så langt fremover som mulig. Testen har begrenset validitet for total kroppsbevegelighet fordi den bare dekker bakside lår og korsrygg.',
      },
    },
    {
      id: 'tr2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom CMJ og SJ. Hva forteller forholdet mellom de to testene oss om utøverens egenskaper?',
        solution: 'CMJ (Counter Movement Jump) er et svikthopp der utøveren gjør en rask nedadgående bevegelse (eksentrisk fase) etterfulgt av hoppet (konsentrisk fase). SJ (Squat Jump) starter fra en statisk posisjon i 90 graders knevinkel uten svikt, slik at bare den konsentriske fasen bidrar. CMJ gir vanligvis 5-15 % høyere hopp enn SJ fordi strekk-forkortningssyklusen lagrer og frigjør elastisk energi. Forholdet mellom CMJ og SJ (EUR = CMJ/SJ) forteller om utøverens evne til å utnytte strekk-forkortningssyklusen. Høy EUR (over 1,15) kan tyde på god reaktiv evne men svak konsentrisk styrke. Lav EUR (under 1,05) kan tyde på dårlig utnyttelse av elastisk energi. Treningsimplikasjoner: Høy EUR taler for mer maksimalstyrke- og akselerasjonstrening. Lav EUR taler for mer plyometrisk trening.',
        hints: ['Tenk på hva som skjer i muskel-sene-komplekset under sviktfasen'],
      },
    },
    {
      id: 'tr2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sprinter har følgende sprintprofil: 10 m i 1,72 s og 40 m i 5,1 s. En annen sprinter har 10 m i 1,68 s og 40 m i 5,4 s. Analyser hva profilene forteller om de to utøvernes styrker og svakheter.',
        solution: 'Sprinter A (10 m: 1,72 s, 40 m: 5,1 s): Noe svakere akselerasjon (10 m), men raskere over 40 m. Tiden fra 10 til 40 m: 5,1 - 1,72 = 3,38 s for 30 m, som tilsvarer gjennomsnittshastighet ca. 8,88 m/s. Sprinter A har sterk toppfart og god evne til å opprettholde hastighet. Sprinter B (10 m: 1,68 s, 40 m: 5,4 s): God akselerasjon (raskere på 10 m), men svakere over 40 m. Tiden 10-40 m: 5,4 - 1,68 = 3,72 s for 30 m, gjennomsnitt ca. 8,06 m/s. Sprinter B har god eksplosiv startevne men svakere toppfart. Treningsimplikasjoner: Sprinter A bør trene akselerasjon med tungt motstandsarbeid og korte sprinter (10-20 m). Sprinter B bør trene toppfart med lengre sprinter (30-60 m) og eventuelt overfartstrening (nedoverbakke, elastisk motstand).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft verdien av funksjonelle bevegelighetstester (som FMS) sammenlignet med isolerte tester (som sit-and-reach og goniometermåling). Hvilke fordeler og ulemper har hver tilnærming?',
        solution: 'Funksjonelle bevegelighetstester (FMS): Fordeler: 1) Vurderer bevegelighet i sammensatte, idrettsrelevante bevegelser. 2) Kartlegger samspillet mellom bevegelighet, stabilitet og motorisk kontroll. 3) Kan avdekke kompensasjonsmønstre som isolerte tester ikke fanger opp. 4) Gir et helhetlig bilde av bevegelseskvaliteten. Ulemper: 1) Lavere reliabilitet (mer subjektiv vurdering). 2) Vanskelig å isolere hvilken struktur som begrenser bevegelsen. 3) Krever trenet testleder. 4) Begrenset evidens for at FMS-score predikerer skaderisiko. Isolerte tester (sit-and-reach, goniometer): Fordeler: 1) Høy reliabilitet og objektivitet. 2) Enkel å standardisere. 3) Måler spesifikt leddutslag som kan følges over tid. 4) Krever mindre trening av testleder. Ulemper: 1) Måler bare en isolert bevegelse, ikke funksjonell bevegelighet. 2) God score betyr ikke nødvendigvis god funksjonell bevegelighet. 3) Mangler informasjon om motorisk kontroll. Konklusjon: Ideelt brukes begge tilnærmingene komplementært. Funksjonelle tester gir et overordnet bilde, mens isolerte tester kan brukes for å identifisere spesifikke begrensninger og følge utviklingen nøyaktig over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal velge et testbatteri med spenst-, hurtighets- og bevegelighetstester for et jentelandslag i handball. Velg minst fire tester, begrunn valgene dine ut fra idrettens krav, og forklar hvordan du vil standardisere testgjennomføringen.',
        solution: 'Handball stiller krav til eksplosiv spenst (hopp i skudd og blokkering), akselerasjon og retningsendring (forsvar og angrep), og skuldermobilitet (skudd). Forslag til testbatteri: 1) CMJ: Måler vertikal spenst, som er direkte relevant for hopprelaterte handlinger (skudd, blokkering). Høy reliabilitet og godt validert. 2) T-test (agility): Måler evne til raske retningsendringer, sidesteg og baklengsløp, som er sentrale bevegelsesmønstre i handball. 3) 10 m og 20 m sprint: Måler akselerasjonsevne over korte distanser, relevant for kontringer og duellsituasjoner. 4) Aktiv skulderfleksjon (goniometer): Måler skulder-ROM, viktig for kastbevegelsen og skadeforebygging. Standardisering: Alle testes på samme tid av døgnet, med minimum 48 timers hvile fra siste hard trening. Standardisert oppvarming (10 min jogg + dynamisk tøyning + 3 submaksimale hopp/sprinter). Samme testleder ved hver stasjon. Skriftlig instruksjon. Rekkefølge: CMJ, sprint, T-test (korte, eksplosive tester først), deretter bevegelighet. 3 forsøk per test med beste resultat registrert. Minimum 2 minutters pause mellom forsøk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Evaluering og treningsdagbok
// ============================================================================

export const CHAPTER_TRENING_2_5_5: TextbookChapter = {
  id: 'trening-2-5-5',
  courseId: 'trening-2',
  chapterNumber: '5.5',
  title: 'Evaluering og treningsdagbok',
  description: 'Tolkning av testresultater, vurdering av fremgang, treningsdagbok og justering av treningsprogram.',
  estimatedMinutes: 20,
  competenceGoals: [
    'tolke testresultater og vurdere utøverens utvikling over tid',
    'forstå betydningen av en treningsdagbok for systematisk treningsarbeid',
    'gjøre rede for hvordan testresultater brukes til å justere treningsprogrammer',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-5-5-intro',
      type: 'text',
      content: `# Evaluering og treningsdagbok

Testing gir bare verdi dersom resultatene tolkes, vurderes og brukes til å ta beslutninger om treningen. Evaluering handler om å analysere testresultater i kontekst, vurdere fremgang og justere treningsprogrammet basert på funn. En treningsdagbok er et uunnværlig verktøy i denne prosessen, fordi den dokumenterer all trening og gjør det mulig å se sammenhenger mellom det som er gjort og resultatene som oppnås.

I dette kapittelet ser vi på hvordan testresultater tolkes, hva en god treningsdagbok inneholder, og hvordan evaluering brukes til å styre den videre treningsprosessen.`,
    },
    {
      id: 'tr2-5-5-def-evaluering',
      type: 'definition',
      title: 'Evaluering i treningssammenheng',
      content: `Evaluering i treningssammenheng er en systematisk prosess der testresultater og treningsdata analyseres for å vurdere om treningsopplegget gir ønsket effekt. Evalueringen sammenligher nåværende resultater med tidligere resultater, mål og normverdier, og danner grunnlaget for å justere fremtidig trening.`,
    },
    {
      id: 'tr2-5-5-text-tolkning',
      type: 'text',
      title: 'Tolkning av testresultater',
      content: `For å tolke testresultater på en meningsfull måte, trenger vi flere referansepunkter:

**1. Sammenligning med egne tidligere resultater**
Den viktigste sammenligningen er utøverens utvikling over tid. Har styrken, utholdenheten eller spensten økt sammenlignet med forrige testing? Husk å ta hensyn til minste meningsfulle endring (typisk 2 ganger testens variasjonskoeffisient).

**2. Sammenligning med normverdier**
Normverdier gir en referanseramme for å vurdere nivået i forhold til andre på samme alder, kjønn og treningsnivå. Normtabeller finnes for de fleste standardiserte tester.

**3. Sammenligning med idrettskrav**
Ulike idretter stiller ulike krav. En fotballspiller trenger ikke samme VO2max som en langrennsløper, men bør ha god spenst og agility. Resultatene bør vurderes opp mot kravene i utøverens idrett.

**4. Sammenheng mellom tester**
Se etter mønstre i testresultatene. Har styrken økt mens utholdenheten har sunket? Er det asymmetri mellom høyre og venstre side? Slike mønstre gir viktig informasjon for treningsplanlegging.

**Vanlige fallgruver ved tolkning:**
- Tillegge små endringer for mye betydning (innenfor målevariasjon)
- Ignorere kontekst (sykdom, stress, dårlig søvn, menstruasjonssyklus)
- Sammenligne med irrelevante normgrupper
- Trekke konklusjoner basert på en enkelt test alene`,
    },
    {
      id: 'tr2-5-5-text-dagbok',
      type: 'text',
      title: 'Treningsdagbok',
      content: `En treningsdagbok er en systematisk loggføring av all trening og relevante faktorer som påvirker prestasjonen. Den er et viktig verktøy for å forstå sammenhengen mellom trening og resultater.

**Hva bør en treningsdagbok inneholde?**

**Treningsøkten:**
- Dato og klokkeslett
- Type trening (styrke, utholdenhet, teknikk, kamp)
- Varighet
- Innhold: øvelser, serier, repetisjoner, vekter, distanser, soner
- Intensitetsvurdering (RPE 1-10 eller pulssoner)
- Treningsbelastning (f.eks. sRPE = RPE × varighet i minutter)

**Subjektive mål:**
- Opplevd form og energi før trening
- Motivasjon
- Muskelstølhet eller smerter
- Søvnkvalitet og -mengde
- Stressnivå (skole, jobb, sosialt)

**Ytre faktorer:**
- Ernæring og væskeinntak
- Vær og temperatur (for utendørs trening)
- Sykdom eller skade
- Spesielle hendelser (eksamensperiode, reise)

**Bruk av treningsdagboken:**
Dagboken bør gjennomgås ukentlig og ved hver evaluering. Se etter mønstre: Har du fulgt planen? Har treningsbelastningen vært riktig? Er det perioder med overtrening eller undertrening? Sammenhold dagboken med testresultater for å forstå hva som fungerer.`,
    },
    {
      id: 'tr2-5-5-text-fremgang',
      type: 'text',
      title: 'Vurdering av fremgang',
      content: `Fremgang vurderes ved å sammenligne testresultater over tid, men det er viktig å forstå at fremgang sjelden er lineær.

**Forventet fremgang:**
- Nybegynnere kan oppleve rask fremgang de første ukene og månedene (begynner­gevinst)
- Erfarne utøvere har mindre rom for forbedring, og fremgangen går saktere
- Sesongvariasjoner er naturlige: Man er ikke i toppform hele året
- Tilbakegang etter pauser er normalt, men gjentrening går raskere enn nytrening

**Tegn på god treningsprogresjon:**
- Gradvis forbedring i testresultater over måneder og år
- Utøveren opplever treningen som gjennomførbar med passelig utfordring
- Stabilt eller økende energinivå og motivasjon
- Fravær av overbelastningsskader

**Tegn på overtrening eller feil belastning:**
- Stagnerende eller synkende testresultater over flere uker
- Økt hvilepuls om morgenen (5-10 slag over normalt)
- Vedvarende utmattelse, nedsatt motivasjon og søvnproblemer
- Hyppige sykdommer eller småskader
- Nedsatt prestasjon til tross for økt treningsbelastning

Dersom tegn på overtrening observeres, bør treningsbelastningen reduseres umiddelbart og restitusjonen prioriteres.`,
    },
    {
      id: 'tr2-5-5-text-justering',
      type: 'text',
      title: 'Justering av treningsprogram',
      content: `Basert på evaluering av testresultater og treningsdagbok kan treningsprogrammet justeres. Justering bør skje systematisk og med ett eller få endringer om gangen, slik at man kan isolere effekten av hver endring.

**Grunnprinsipper for justering:**

**1. Identifiser svake punkter**
Testresultatene viser hvilke egenskaper som henger etter i forhold til idrettens krav. Disse bør prioriteres i neste treningsperiode.

**2. Juster treningsvariabler**
- **Volum**: Antall sett, repetisjoner eller treningstid
- **Intensitet**: Belastning, tempo eller hjertefrekvenssone
- **Frekvens**: Antall treningsøkter per uke
- **Type**: Endring av øvelser, treningsmetoder eller periodisering
- **Restitusjon**: Juster hvile mellom økter og mellom harde perioder

**3. Følg opp med ny testing**
Etter 6-12 uker med justert program bør nye tester gjennomføres for å evaluere om endringene ga ønsket effekt. Testtidspunkt bør standardiseres i forhold til sesong og treningsfase.

**4. Dokumenter og lær**
Skriv ned hva som ble endret, hvorfor og hva resultatet ble. Over tid bygger dette opp verdifull erfaring om hva som fungerer for den enkelte utøver.

**Eksempel på justerings­syklus:**
Testing → Analyse → Identifiser svake punkter → Juster program → Gjennomfør 6-12 uker → Ny testing → Ny analyse → Ny justering`,
    },
    {
      id: 'tr2-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Evaluering av testresultater over tid',
      problem: `En 18 år gammel håndballspiller har gjennomført testing i august og januar. Resultatene er:

| Test | August | Januar |
|------|--------|--------|
| CMJ | 38 cm | 41 cm |
| 1RM knebøy | 95 kg | 100 kg |
| Beep-test | Nivå 9.6 | Nivå 9.2 |
| Sit-and-reach | 28 cm | 25 cm |

Evaluer resultatene og gi anbefalinger for videre trening.`,
      solution: `**Styrke og spenst: Positiv utvikling**
- CMJ økte fra 38 til 41 cm (+3 cm, ca. 8 %). Med en typisk CV på 3-4 % for CMJ er dette en meningsfull forbedring.
- 1RM knebøy økte fra 95 til 100 kg (+5 kg, ca. 5 %). Også dette er en reell forbedring.
- Styrke- og spenst­treningen har tydeligvis gitt resultater.

**Utholdenhet: Svak tilbakegang**
- Beep-test sank fra nivå 9.6 til 9.2. Typisk CV for beep-testen er 3-5 %, så endringen er liten og kan delvis skyldes målevariasjon. Likevel indikerer den at utholdenheten ikke har blitt prioritert.

**Bevegelighet: Svak tilbakegang**
- Sit-and-reach sank fra 28 til 25 cm (-3 cm). Typisk CV er 5-7 %, men 3 cm reduksjon antyder at bevegelighetstrening har blitt nedprioritert.

**Anbefalinger:**
1. Oppretthold styrketreningen, men vurder å redusere volum noe for å gi rom til utholdenhet
2. Øk utholdenhets­treningen: Legg inn 2-3 aerobe økter per uke (langkjøring + intervall)
3. Inkluder 10-15 minutter tøyning etter hver treningsøkt
4. Ny testing om 10-12 uker for å evaluere effekten av justeringene`,
    },
    {
      id: 'tr2-5-5-note-1',
      type: 'note',
      title: 'Digitale verktøy for treningsdagbok',
      content: `Det finnes mange digitale verktøy for å føre treningsdagbok, for eksempel apper som TrainingPeaks, Polar Flow, Garmin Connect og Google Regneark. Digitale verktøy gjør det enkelt å visualisere trender, beregne treningsbelastning og dele data med trener. Det viktigste er ikke hvilket verktøy du bruker, men at du fører dagbok konsekvent og bruker dataene aktivt i evalueringen.`,
    },
    {
      id: 'tr2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med evaluering i treningssammenheng?',
        options: [
          { id: 'a', text: 'Å analysere testresultater for å vurdere om treningen gir ønsket effekt og justere programmet', isCorrect: true },
          { id: 'b', text: 'Å rangere utøvere mot hverandre', isCorrect: false },
          { id: 'c', text: 'Å dokumentere treningshistorikk for forsikringsformål', isCorrect: false },
          { id: 'd', text: 'Å bestemme hvilke utøvere som skal få plass på laget', isCorrect: false },
        ],
        solution: 'Evaluering i treningssammenheng handler om å systematisk analysere testresultater og treningsdata for å vurdere om treningsopplegget gir ønsket effekt. Basert på evalueringen kan man justere treningen for å sikre at utøveren utvikler seg i riktig retning.',
      },
    },
    {
      id: 'tr2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken informasjon er det viktigst å registrere i en treningsdagbok?',
        options: [
          { id: 'a', text: 'Type trening, varighet, intensitet, subjektiv opplevelse og ytre faktorer som søvn og ernæring', isCorrect: true },
          { id: 'b', text: 'Kun øvelser og antall repetisjoner', isCorrect: false },
          { id: 'c', text: 'Bare resultatene fra tester og konkurranser', isCorrect: false },
          { id: 'd', text: 'Bare hjertefrekvens under trening', isCorrect: false },
        ],
        solution: 'En treningsdagbok bør inneholde informasjon om selve treningsøkten (type, varighet, øvelser, intensitet), subjektive mål (opplevd form, motivasjon, søvn, stressnivå) og ytre faktorer (ernæring, vær, sykdom). Denne helhetlige dokumentasjonen gjør det mulig å forstå sammenhengen mellom trening og resultater.',
      },
    },
    {
      id: 'tr2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med minste meningsfulle endring, og hvorfor dette begrepet er viktig når man tolker testresultater.',
        solution: 'Minste meningsfulle endring er den minste endringen i et testresultat som med rimelig sikkerhet kan sies å representere en reell forbedring (eller tilbakegang), og ikke bare skyldes tilfeldig målevariasjon. Den beregnes typisk som 2 ganger testens variasjonskoeffisient (CV). Eksempel: Dersom en CMJ-test har en CV på 3 %, må en endring være minst 6 % for å regnes som meningsfull. Hvis en utøver hopper 40 cm i august og 41 cm i januar (2,5 % endring), er denne endringen innenfor den typiske målevariasjonen og kan ikke med sikkerhet tilskrives reell fremgang. Begrepet er viktig fordi det hindrer oss i å overtolke små endringer som egentlig skyldes naturlig variasjon. Uten kunnskap om minste meningsfulle endring risikerer man å gjøre unødvendige endringer i treningsprogrammet basert på tilfeldig støy i testresultatene.',
        hints: ['Tenk på testens typiske feilmargin og hva som kreves for å overgå den'],
      },
    },
    {
      id: 'tr2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv innholdet i en god treningsdagbok for en uke. Inkluder minst fire treningsøkter med ulik type trening, og vis hvordan du dokumenterer intensitet, volum og subjektiv opplevelse.',
        solution: 'Eksempel treningsuke for en fotballspiller: Mandag: Styrketrening 60 min. Øvelser: Knebøy 4×5 på 85 kg, benkpress 3×8 på 60 kg, utfall 3×8 per bein med 30 kg, planke 3×45 sek. RPE: 7/10. Søvn: 7,5 timer, opplevd form: god. Tirsdag: Fotballtrening 90 min. Spilløvelser og taktikk. Gjennomsnittspuls 145, maks 182. RPE: 6/10. Søvn: 8 timer. Onsdag: Hviledag. Lett tøyning 15 min. Søvn: 8,5 timer. Torsdag: Intervall 45 min. 4×4 min i sone 5 (puls 175-185) med 3 min aktiv pause. RPE: 9/10. Søvn: 7 timer, litt sliten. Fredag: Fotballtrening 90 min. Teknikktrening og smålagsspill. RPE: 5/10. Søvn: 8 timer, god form. Lørdag: Kamp 90 min. Maks puls 192. Distanse 10,2 km. RPE: 8/10. Søndag: Restitusjon. 20 min rolig jogg og tøyning. Ukentlig treningsbelastning (sRPE): mandag 420, tirsdag 540, torsdag 405, fredag 450, lørdag 720 = totalt 2535 AU.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En langrennsløper viser følgende testresultater over ett år: VO2max i januar: 62 ml/kg/min, i juni: 58 ml/kg/min, i november: 66 ml/kg/min. 1RM beinpress i januar: 180 kg, i juni: 210 kg, i november: 195 kg. Analyser utviklingen og drøft om treningsprogrammet ser ut til å fungere godt.',
        solution: 'Analysen viser et tydelig periodiseringsmønster: Januar (konkurransefasen): VO2max 62 ml/kg/min, 1RM 180 kg. Utøveren er i god utholdenhetsform, men styrken er på lavest nivå etter en fase dominert av spesifikk utholdenhets­trening. Juni (forberedende fase): VO2max har sunket til 58 ml/kg/min, mens 1RM har økt til 210 kg. Dette tyder på en bevisst styrkeperiode i vår/sommer der utholdenhets­treningen er nedprioritert. Nedgangen i VO2max er forventet og akseptabel i denne fasen. November (pre-konkurransefase): VO2max har økt til 66 ml/kg/min (ny personlig rekord), og 1RM er 195 kg (noe ned fra juni, men høyere enn januar). Utøveren har bygget på styrkebasen og konvertert den til idrettsspesifikk utholdenhet. Konklusjon: Treningsprogrammet ser ut til å fungere svært godt. Det følger en klassisk periodiseringsmodell for langrenn der styrke bygges i sommerhalvåret og konverteres til spesifikk utholdenhet mot sesongen. VO2max har økt med 4 ml/kg/min fra januar til november, og styrkenivået er høyere enn ved sesongstart. Dette er et godt eksempel på at midlertidig tilbakegang i en egenskap kan være planlagt og hensiktsmessig i et helårsperspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-5-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En utøver har stagnert i styrke og utholdenhet de siste 3 månedene til tross for regelmessig trening. Treningsdagboken viser: 5 treningsøkter per uke, alle med RPE 8-9, lite variasjon i øvelser og intensitet, gjennomsnittlig søvn 6 timer, og hyppige forkjølelser. Analyser situasjonen og lag en plan for de neste 4 ukene.',
        solution: 'Analyse: Utøveren viser tydelige tegn på overtrening/overreaching. Indikatorene er: 1) Stagnasjon i testresultater over 3 måneder. 2) Konstant høy RPE (8-9) uten lett trening tyder på for høy gjennomsnittlig intensitet. 3) Lite variasjon gir monotonibelastning, som øker risikoen for overtrening. 4) Kun 6 timer søvn er langt under anbefalingen for utøvere (8-9 timer). 5) Hyppige forkjølelser indikerer svekket immunforsvar grunnet overbelastning. Plan for de neste 4 ukene: Uke 1-2 (restitusjonsfase): Reduser til 3 treningsøkter per uke med RPE maks 5-6. Fokuser på lett aerob trening og bevegelighetsarbeid. Prioriter søvn: minimum 8 timer per natt. Forbedre ernæring med tilstrekkelig protein og karbohydrater. Uke 3-4 (gradvis opptrapping): Øk til 4 økter per uke. Innfør polarisert belastning: 80 % av øktene i lav intensitet (RPE 4-5) og 20 % i høy intensitet (RPE 8-9). Varier øvelsene for å unngå monotoni. Fortsett å prioritere søvn og ernæring. Legg inn lett styrketrening med nytt øvelsesprogram. Etter 4 uker: Gjennomfør ny testing for å evaluere om restitusjonsfasen har gitt effekt. Dersom resultatene har bedret seg, kan man gradvis øke treningsbelastningen igjen, men med bedre fordeling mellom hard og lett trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 5
// ============================================================================

export const TRENING_2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_5_1,
  CHAPTER_TRENING_2_5_2,
  CHAPTER_TRENING_2_5_3,
  CHAPTER_TRENING_2_5_4,
  CHAPTER_TRENING_2_5_5,
];
