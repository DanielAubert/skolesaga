/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 1 VG2
 *
 * Seksjon 5: Arbeids-, familie- og arverett (Kapittel 5.1–5.8)
 * Denne filen inneholder kapittel 5.1–5.8 (komplett).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Arbeidsavtalen
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_1: TextbookChapter = {
  id: 'rettslaere-1-5-1',
  courseId: 'rettslaere-1',
  chapterNumber: '5.1',
  title: 'Arbeidsavtalen',
  description: 'Inngåelse av arbeidsavtale, krav til innhold og arbeidstakerrettigheter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere arbeidsavtaler'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-1-intro',
      type: 'text',
      content: `## Arbeidsavtalen

Tenk deg at du får tilbud om din første sommerjobb. Arbeidsgiveren sier du kan begynne på mandag, og at «vi ordner papirene etter hvert». Er det greit? Hva skjer hvis det oppstår uenighet om lønn eller arbeidstid – og du ikke har noe skriftlig å vise til?

I Norge er arbeidsforholdet mellom arbeidstaker og arbeidsgiver strengt regulert av **arbeidsmiljøloven** (lov 17. juni 2005 nr. 62 om arbeidsmiljø, arbeidstid og stillingsvern mv.). Loven stiller klare krav til arbeidsavtalen – det viktigste dokumentet i ethvert arbeidsforhold. I dette kapittelet skal vi se på hvem som er arbeidstaker og arbeidsgiver, hva en arbeidsavtale må inneholde, og hvorfor skriftlighetskravet er så viktig.`
    },

    // --- BLOKK 1: Arbeidstaker og arbeidsgiver ---
    {
      id: 'rett1-5-1-def-1',
      type: 'definition',
      title: 'Arbeidstaker og arbeidsgiver',
      content: `**Arbeidstaker** er etter arbeidsmiljøloven § 1-8 første ledd «enhver som utfører arbeid i en annens tjeneste». Det sentrale er at arbeidstakeren stiller sin arbeidskraft til disposisjon for arbeidsgiveren, og er underlagt arbeidsgiverens ledelse og kontroll (styringsretten).

**Arbeidsgiver** er etter arbeidsmiljøloven § 1-8 andre ledd «enhver som har ansatt arbeidstaker for å utføre arbeid i sin tjeneste». Arbeidsgiveren har rett til å lede, fordele og kontrollere arbeidet, men denne styringsretten begrenses av lov, tariffavtale og arbeidsavtalen.

**Skillet mellom arbeidstaker og oppdragstaker (selvstendig næringsdrivende):**
En oppdragstaker (frilans, selvstendig næringsdrivende) utfører arbeid for egen regning og risiko, og er ikke underlagt oppdragsgiverens styringsrett. En arbeidstaker har vesentlig sterkere rettigheter enn en oppdragstaker – blant annet stillingsvern, rett til ferie, sykepenger og pensjonsrettigheter.`
    },
    {
      id: 'rett1-5-1-text-1',
      type: 'text',
      content: `### Hvem er arbeidstaker?

I praksis kan det oppstå tvil om en person er arbeidstaker eller oppdragstaker. Grensen har stor betydning fordi arbeidstakere har langt sterkere rettigheter. Domstolene har utviklet flere momenter for å avgjøre spørsmålet:

**Momenter som taler for arbeidstakerforhold:**
- Personen har **plikt til å stille sin arbeidskraft til disposisjon** og kan ikke fritt bruke stedfortreder
- Arbeidet utføres med **arbeidsgiverens verktøy, materialer og utstyr**
- Arbeidsgiveren bærer **risikoen** for arbeidsresultatet
- Vedkommende mottar **fast lønn** (ikke betaling per oppdrag)
- Forholdet har en viss **varighet** og stabilitet
- Personen er **integrert** i virksomheten (bruker arbeidsgiverens lokaler, har fast arbeidstid, deltar på møter)
- Arbeidsgiveren har **styringsrett** over hvordan arbeidet utføres

**Momenter som taler for oppdragstakerforhold:**
- Personen har **egen virksomhet** (enkeltpersonforetak, aksjeselskap)
- Vedkommende bærer **selv risikoen** for resultatet
- Personen bestemmer **selv** når og hvordan arbeidet utføres
- Betaling skjer **per oppdrag** (faktura), ikke som fast lønn
- Personen kan **fritt** ta oppdrag for andre

I 2024 fikk arbeidsmiljøloven § 1-8 en presisering som styrker arbeidstakerbegrepet: det skal «legges vekt på om vedkommende løpende stiller sin personlige arbeidskraft til disposisjon, og om vedkommende er underordnet gjennom styring, ledelse og kontroll». Det er nå en lovfestet **presumsjon** for at en person er arbeidstaker – oppdragsgiveren må bevise at vedkommende er selvstendig oppdragstaker.`
    },
    {
      id: 'rett1-5-1-example-1',
      type: 'example',
      title: 'Arbeidstaker eller oppdragstaker?',
      problem: 'Maria (22 år) jobber som sykkelbud for et matleveringsselskap. Hun bruker selskapets app for å motta bestillinger, leverer med egen sykkel og får betalt per levering. Selskapet bestemmer prisene og leveringsfristene, og Maria kan ikke sende noen andre i sitt sted. Selskapet hevder at Maria er «selvstendig oppdragstaker». Er hun det?',
      solution: `**Vurdering av arbeidstakerforholdet (aml. § 1-8):**

**Momenter som taler for arbeidstaker:**
- Maria stiller sin **personlige arbeidskraft** til disposisjon – hun kan ikke bruke stedfortreder
- Selskapet har **styring og kontroll**: de bestemmer priser, leveringsfrister og tildeler oppdrag gjennom appen
- Maria er **integrert** i selskapets forretningsmodell – hun utfører kjernevirksomheten
- Hun har **plikt til å utføre** de oppdragene appen tildeler henne

**Momenter som taler for oppdragstaker:**
- Maria bruker **egen sykkel** (eget arbeidsutstyr)
- Hun får betalt **per levering**, ikke fast lønn
- Hun kan i teorien **velge når** hun vil jobbe

**Konklusjon:**
Etter en helhetsvurdering taler de fleste momentene for at Maria er **arbeidstaker**. Det avgjørende er at selskapet har styringsrett over arbeidet (priser, frister, appbasert kontroll) og at Maria stiller sin personlige arbeidskraft til disposisjon. At hun bruker egen sykkel og får betalt per levering, er ikke tilstrekkelig til å gjøre henne til oppdragstaker. Etter lovendringen i 2024 er det dessuten en presumsjon for arbeidstakerforhold, og selskapet har bevisbyrden for det motsatte. Maria har dermed krav på skriftlig arbeidsavtale, stillingsvern, feriepenger, sykepenger mv.`
    },
    {
      id: 'rett1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste kjennetegnet på et arbeidstakerforhold i motsetning til et oppdragstakerforhold?',
        options: [
          { id: 'a', text: 'Arbeidstakeren har høyere lønn enn en oppdragstaker', isCorrect: false },
          { id: 'b', text: 'Arbeidstakeren utfører arbeid under arbeidsgiverens ledelse og kontroll (styringsrett)', isCorrect: true },
          { id: 'c', text: 'Arbeidstakeren jobber alltid fulltid, mens oppdragstakeren jobber deltid', isCorrect: false },
          { id: 'd', text: 'Arbeidstakeren har alltid en skriftlig avtale, mens oppdragstakeren aldri har det', isCorrect: false }
        ],
        solution: 'Det avgjørende kjennetegnet er at arbeidstakeren utfører arbeid under arbeidsgiverens ledelse og kontroll – den såkalte styringsretten. Arbeidstakeren stiller sin arbeidskraft til disposisjon for arbeidsgiveren, som bestemmer hva, når og hvordan arbeidet skal utføres. En oppdragstaker derimot utfører arbeid for egen regning og risiko og styrer selv arbeidet.'
      }
    },

    // --- BLOKK 2: Krav til arbeidsavtalen ---
    {
      id: 'rett1-5-1-def-2',
      type: 'definition',
      title: 'Skriftlig arbeidsavtale',
      content: `**Skriftlig arbeidsavtale** er et lovpålagt krav etter arbeidsmiljøloven § 14-5. Det skal inngås skriftlig arbeidsavtale i **alle** arbeidsforhold, uavhengig av om stillingen er fast eller midlertidig, heltid eller deltid.

**Frister for skriftlig avtale:**
- I arbeidsforhold med varighet over én måned: avtalen skal foreligge **snarest mulig** og senest **sju dager** etter at arbeidsforholdet begynte (endret fra én måned til sju dager ved lovendring i 2024)
- I arbeidsforhold med varighet under én måned: avtalen skal foreligge **umiddelbart**

Dersom arbeidsgiveren ikke sørger for skriftlig arbeidsavtale, er det **arbeidsgiverens risiko**. Arbeidstakerens rettigheter svekkes ikke av at avtalen mangler – tvert imot vil tvil om arbeidsvilkårene normalt gå i arbeidstakerens favør.`
    },
    {
      id: 'rett1-5-1-text-2',
      type: 'text',
      content: `### Hva må arbeidsavtalen inneholde?

Arbeidsmiljøloven § 14-6 lister opp minimumskravene til arbeidsavtalens innhold. Avtalen skal inneholde opplysninger om **alle forhold av vesentlig betydning** for arbeidsforholdet, herunder:

**1. Partene:** Navn og identitet til arbeidstaker og arbeidsgiver (organisasjonsnummer)

**2. Arbeidsplassen:** Hvor arbeidet skal utføres. Dersom det ikke er noen fast arbeidsplass, skal det fremgå at arbeidstakeren arbeider på forskjellige steder.

**3. Arbeidsbeskrivelse:** En beskrivelse av arbeidet, eller arbeidstakerens tittel, stilling eller arbeidskategori.

**4. Tiltredelsestidspunkt:** Dato for når arbeidsforholdet begynner.

**5. Varighet:** Om arbeidsforholdet er fast eller midlertidig. Ved midlertidig ansettelse skal grunnlaget for midlertidigheten oppgis, samt forventet varighet.

**6. Prøvetid:** Eventuelle bestemmelser om prøvetid, herunder prøvetidens lengde og vilkår.

**7. Ferie og feriepenger:** Rett til ferie og feriepenger, og reglene for fastsettelse av ferietidspunkt.

**8. Oppsigelsesfrister:** For begge parter.

**9. Lønn:** Lønn ved arbeidsforholdets begynnelse, eventuelle tillegg og andre godtgjøringer (bonuser, pensjonsinnbetaling mv.), samt utbetalingsmåte og tidspunkt.

**10. Arbeidstid:** Lengde og plassering av den daglige og ukentlige arbeidstiden. Ordninger for vaktendringer og overtid.

**11. Tariffavtale:** Eventuelle tariffavtaler som regulerer arbeidsforholdet.

Etter lovendringen i 2024 ble listen utvidet, og det stilles også krav om opplysninger om rett til kompetanseheving, sosiale ytelser (sykepenger, pensjon) og identiteten til innleie-/utleievirksomheten ved bemanningsforetak.`
    },
    {
      id: 'rett1-5-1-example-2',
      type: 'example',
      title: 'Manglende arbeidsavtale',
      problem: 'Jonas (17 år) har jobbet på en kafé i tre måneder uten skriftlig arbeidsavtale. Han jobber 15 timer i uken og får 130 kr timen utbetalt kontant. Nå vil arbeidsgiveren kutte timene hans til 5 timer i uken. Jonas protesterer, men arbeidsgiveren sier: «Du har jo ingen avtale, så du har ingenting å klage over.» Har arbeidsgiveren rett?',
      solution: `**Analyse etter arbeidsmiljøloven:**

**Brudd på skriftlighetskravet (aml. § 14-5):**
Arbeidsgiveren har brutt loven ved ikke å sørge for skriftlig arbeidsavtale. Avtalen skulle ha foreligget senest sju dager etter at Jonas begynte. At avtalen mangler, er **arbeidsgiverens risiko** – det svekker ikke Jonas' rettigheter.

**Jonas' rettigheter:**
Selv uten skriftlig avtale eksisterer det et **arbeidsforhold**. Faktisk praksis (15 timer/uke i tre måneder) etablerer en avtale. Arbeidsgiverens påstand om at Jonas «ikke har noe å klage over» er feil.

**Kan arbeidsgiveren kutte timene?**
Å redusere arbeidstiden fra 15 til 5 timer per uke er en **vesentlig endring** av arbeidsforholdet. En slik endring krever enten:
- Samtykke fra Jonas, eller
- At arbeidsgiveren gjennomfører en formell **endringsoppsigelse** med saklig grunn (aml. § 15-7), med de samme formkrav og rettigheter som ved en vanlig oppsigelse

**Lønn utbetalt kontant:**
At lønn utbetales kontant, kan også tyde på at arbeidsgiveren unndrar skatt og arbeidsgiveravgift – noe som er ulovlig.

**Konklusjon:** Arbeidsgiveren har ikke rett. Jonas er beskyttet av arbeidsmiljøloven uavhengig av om det foreligger skriftlig avtale. Han kan kreve at arbeidsgiveren utarbeider skriftlig avtale, og han kan motsette seg en ensidig reduksjon av arbeidstiden. Jonas bør kontakte Arbeidstilsynet dersom arbeidsgiveren ikke retter opp forholdet.`
    },
    {
      id: 'rett1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Innen hvilken frist skal en skriftlig arbeidsavtale foreligge i arbeidsforhold med varighet over én måned?',
        options: [
          { id: 'a', text: 'Senest tre dager etter arbeidsforholdets start', isCorrect: false },
          { id: 'b', text: 'Senest sju dager etter arbeidsforholdets start', isCorrect: true },
          { id: 'c', text: 'Senest én måned etter arbeidsforholdets start', isCorrect: false },
          { id: 'd', text: 'Først når arbeidstakeren ber om det', isCorrect: false }
        ],
        solution: 'Etter arbeidsmiljøloven § 14-5 skal skriftlig arbeidsavtale foreligge snarest mulig og senest sju dager etter at arbeidsforholdet begynte. Denne fristen ble endret fra én måned til sju dager ved lovendring i 2024, som en del av implementeringen av EUs arbeidsvilkårsdirektiv.'
      }
    },

    // --- BLOKK 3: Hovedregelen om fast ansettelse og midlertidig ansettelse ---
    {
      id: 'rett1-5-1-text-3',
      type: 'text',
      content: `### Fast og midlertidig ansettelse

**Hovedregelen: fast ansettelse**
Arbeidsmiljøloven § 14-9 første ledd slår fast at arbeidstaker skal ansettes **fast**. Fast ansettelse innebærer at arbeidsforholdet er tidsubegrenset, at lovens regler om oppsigelse gjelder, og at arbeidstakeren sikres forutsigbarhet for arbeid i form av et reelt stillingsomfang.

**Unntak: midlertidig ansettelse**
Midlertidig ansettelse er bare tillatt i bestemte tilfeller, jf. aml. § 14-9 andre ledd:

**a) Vikariat:** Når arbeidstakeren skal utføre arbeid i stedet for en bestemt annen person (f.eks. sykefravær, foreldrepermisjon)

**b) Arbeid av midlertidig karakter:** Når arbeidet skiller seg fra det som ordinært utføres i virksomheten. Sesongarbeid (f.eks. jordbærplukking om sommeren) er et typisk eksempel.

**c) Praksisarbeid:** Opplæringsstillinger.

**d) Deltaker i arbeidsmarkedstiltak:** Tiltak i regi av NAV.

**Fireårsregelen:**
En arbeidstaker som har vært sammenhengende midlertidig ansatt i mer enn **fire år** etter bokstav a (vikariat), skal anses som fast ansatt, jf. aml. § 14-9 syvende ledd. Treårsregelen gjelder for bokstav b (arbeid av midlertidig karakter).

**Drøftingsplikt:**
Minst én gang per år skal arbeidsgiveren drøfte bruken av midlertidig ansettelse med de tillitsvalgte, jf. aml. § 14-9 andre ledd siste punktum.`
    },
    {
      id: 'rett1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hovedregelen om fast ansettelse etter arbeidsmiljøloven. Nevn to tilfeller der midlertidig ansettelse er tillatt, og forklar fireårsregelen.',
        hints: ['Se arbeidsmiljøloven § 14-9.'],
        solution: `Hovedregelen etter arbeidsmiljøloven § 14-9 første ledd er at arbeidstaker skal ansettes fast. Fast ansettelse innebærer at arbeidsforholdet er tidsubegrenset, at lovens regler om oppsigelse gjelder, og at arbeidstakeren sikres forutsigbarhet.

**To tilfeller der midlertidig ansettelse er tillatt:**
1. **Vikariat** (aml. § 14-9 andre ledd bokstav a): Når arbeidstakeren skal utføre arbeid i stedet for en annen person, for eksempel ved sykefravær eller foreldrepermisjon.
2. **Arbeid av midlertidig karakter** (bokstav b): Når arbeidet skiller seg fra det som ordinært utføres i virksomheten, for eksempel sesongarbeid.

**Fireårsregelen:**
En arbeidstaker som har vært sammenhengende midlertidig ansatt som vikar i mer enn fire år, skal automatisk anses som fast ansatt. Regelen sikrer at arbeidsgivere ikke omgår hovedregelen om fast ansettelse ved å la arbeidstakere gå på vikariat etter vikariat i årevis.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-1-summary',
      type: 'text',
      content: `### Oppsummering

- En **arbeidstaker** er en person som utfører arbeid i en annens tjeneste under arbeidsgiverens ledelse og kontroll (styringsrett). En **oppdragstaker** utfører arbeid for egen regning og risiko.
- Det skal inngås **skriftlig arbeidsavtale** i alle arbeidsforhold (aml. § 14-5). Avtalen skal foreligge senest **sju dager** etter arbeidsforholdets start.
- Arbeidsavtalen skal inneholde opplysninger om alle vesentlige forhold, herunder partene, arbeidssted, arbeidsbeskrivelse, lønn, arbeidstid, ferie, oppsigelsesfrister og eventuell prøvetid (aml. § 14-6).
- **Manglende skriftlig avtale** er arbeidsgiverens risiko – arbeidstakerens rettigheter svekkes ikke.
- **Hovedregelen** er fast ansettelse (aml. § 14-9). Midlertidig ansettelse er bare tillatt i lovbestemte unntakstilfeller, som vikariat og arbeid av midlertidig karakter.
- **Fireårsregelen**: Sammenhengende midlertidig ansettelse som vikar i mer enn fire år gir rett til fast ansettelse.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er konsekvensen dersom arbeidsgiveren ikke sørger for skriftlig arbeidsavtale?',
        options: [
          { id: 'a', text: 'Arbeidsforholdet er ugyldig og arbeidstakeren har ingen rettigheter', isCorrect: false },
          { id: 'b', text: 'Arbeidstakeren kan kreve erstatning, men har ellers ingen rettigheter', isCorrect: false },
          { id: 'c', text: 'Arbeidsforholdet består likevel, og tvil om vilkårene vil normalt gå i arbeidstakerens favør', isCorrect: true },
          { id: 'd', text: 'Arbeidsgiveren må betale en fast bot til Arbeidstilsynet på 50 000 kr', isCorrect: false }
        ],
        solution: 'Manglende skriftlig arbeidsavtale er arbeidsgiverens risiko. Arbeidsforholdet består uansett – det er den faktiske situasjonen som avgjør om det foreligger et arbeidsforhold. Dersom det oppstår tvist om arbeidsvilkårene (f.eks. lønn, arbeidstid, stillingsprosent), vil tvilen normalt gå i arbeidstakerens favør fordi arbeidsgiveren har forsømt sin lovpålagte plikt til å sørge for skriftlig dokumentasjon.'
      }
    },
    {
      id: 'rett1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sofie har jobbet som vikar på samme sykehjem i fire og et halvt år, med stadig nye vikariatkontrakter. Hun har aldri hatt en pause mellom kontraktene. Nå får hun beskjed om at vikariatet ikke fornyes. Drøft Sofies rettsstilling.',
        hints: ['Vurder fireårsregelen i aml. § 14-9 syvende ledd. Hva innebærer det at Sofie anses som fast ansatt?'],
        solution: `**Sofies rettsstilling etter arbeidsmiljøloven:**

**Fireårsregelen (aml. § 14-9 syvende ledd):**
Sofie har vært sammenhengende midlertidig ansatt som vikar i over fire år. Etter fireårsregelen skal hun dermed anses som **fast ansatt**. Det kreves ikke noen formell beslutning – retten til fast ansettelse inntrer automatisk.

**Konsekvenser av fast ansettelse:**
Når Sofie anses som fast ansatt, kan arbeidsgiveren ikke bare la kontrakten «løpe ut». Arbeidsgiveren må i stedet gjennomføre en formell **oppsigelse** etter reglene i arbeidsmiljøloven kapittel 15. Det innebærer:
- Oppsigelsen må ha **saklig grunn** (aml. § 15-7)
- Oppsigelsen må oppfylle **formkravene** (aml. § 15-4) – skriftlig, med opplysning om rettigheter
- Sofie har rett til **drøftelsesmøte** (aml. § 15-1) før oppsigelsen
- Sofie har krav på **oppsigelsestid** (minimum én måned, normalt lengre ved lang ansiennitet)
- Sofie har rett til å **stå i stillingen** mens en eventuell tvist behandles

**Konklusjon:** Sofie er å anse som fast ansatt og kan ikke uten videre sies opp. Dersom sykehjemmet mener det foreligger saklig grunn til oppsigelse (f.eks. nedbemanning), må de gjennomføre en formell oppsigelsesprosess med drøftelsesmøte og saklighetsvurdering. Sofie bør kontakte tillitsvalgt eller advokat for å ivareta sine rettigheter.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Arbeidstid, ferie og lønn
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_2: TextbookChapter = {
  id: 'rettslaere-1-5-2',
  courseId: 'rettslaere-1',
  chapterNumber: '5.2',
  title: 'Arbeidstid, ferie og lønn',
  description: 'Arbeidstidsregler, ferieloven, overtid og lønn.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende regler om arbeidstid og ferie'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-2-intro',
      type: 'text',
      content: `## Arbeidstid, ferie og lønn

Hvor mange timer kan en arbeidsgiver kreve at du jobber i uken? Hva skjer dersom du må jobbe overtid – har du krav på ekstra betaling? Og kan arbeidsgiveren bestemme når du skal ha ferie?

Arbeidstidsreglene er blant de mest praktisk viktige delene av arbeidsretten. De beskytter arbeidstakeren mot å bli utnyttet, sikrer nødvendig hvile og fritid, og regulerer forholdet mellom arbeidstid og lønn. I dette kapittelet skal vi se på reglene om alminnelig arbeidstid, overtid, nattarbeid, ferie og lønn – regulert i **arbeidsmiljøloven** kapittel 10 og **ferieloven** (lov 29. april 1988 nr. 21 om ferie).`
    },

    // --- BLOKK 1: Alminnelig arbeidstid ---
    {
      id: 'rett1-5-2-def-1',
      type: 'definition',
      title: 'Alminnelig arbeidstid',
      content: `**Alminnelig arbeidstid** er den ordinære arbeidstiden som en arbeidstaker kan pålegges uten at det regnes som overtid. Grensene følger av arbeidsmiljøloven § 10-4:

- **9 timer** i løpet av 24 timer (daglig arbeidstid)
- **40 timer** i løpet av 7 dager (ukentlig arbeidstid)

For arbeidstakere som arbeider **skift**, **turnus** eller **nattarbeid**, er grensene lavere:
- Skift-/turnusarbeid som ikke faller inn under noen av de spesielle reglene: **38 timer** per uke
- Helkontinuerlig skiftarbeid, sammenlignbart turnusarbeid og arbeid på søn- og helgedager: **36 timer** per uke

De fleste tariffavtaler har lavere grenser enn loven – typisk **37,5 timer** per uke som alminnelig arbeidstid. Arbeidstiden i tariffavtalen kan aldri være høyere enn lovens grenser, men den kan være lavere.`
    },
    {
      id: 'rett1-5-2-text-1',
      type: 'text',
      content: `### Overtid

**Hva er overtid?**
Overtid er arbeid utover den avtalte alminnelige arbeidstiden, jf. arbeidsmiljøloven § 10-6. Overtidsarbeid skal ikke gjennomføres som en fast ordning – det skal bare brukes når det foreligger et **særlig og tidsavgrenset behov**.

**Grenser for overtid (aml. § 10-6 fjerde og femte ledd):**
- Maksimalt **10 timer** overtid i løpet av 7 dager
- Maksimalt **25 timer** overtid i løpet av 4 sammenhengende uker
- Maksimalt **200 timer** overtid i løpet av 52 uker

Med avtale med tillitsvalgte i virksomhet bundet av tariffavtale kan grensene utvides til 15 timer per uke og 300 timer per år. Med samtykke fra Arbeidstilsynet kan grensene i særlige tilfeller utvides ytterligere.

**Overtidsbetaling (aml. § 10-6 ellevte ledd):**
For overtidsarbeid skal det betales et tillegg til den alminnelige lønnen på minst **40 prosent**. Dette er et minimumskrav – mange tariffavtaler gir høyere tillegg (50 % eller 100 %).

**Arbeidstaker kan ikke frasi seg retten til overtidsbetaling.** En avtale om at overtid er «inkludert i lønnen» er ugyldig dersom den innebærer at arbeidstakeren får mindre enn lovens minimumstillegg.

**Frivillig overtid:**
Arbeidstakeren kan ikke tvinges til overtid utover det loven og avtalen tillater. Arbeidstakeren har rett til å bli fritatt fra overtid dersom det foreligger «helsemessige eller vektige sosiale grunner» (aml. § 10-6 tiende ledd).`
    },
    {
      id: 'rett1-5-2-example-1',
      type: 'example',
      title: 'Overtidsarbeid og overtidsbetaling',
      problem: 'Ahmed jobber på et lager med avtalt arbeidstid 37,5 timer per uke (mandag–fredag, kl. 08–15.30 med 30 min pause). Arbeidsgiveren ber Ahmed jobbe til kl. 19.00 tre dager denne uken på grunn av en stor vareleveranse. Ahmed har timelønn på 220 kr. Hvor mange overtidstimer jobber Ahmed, og hva har han krav på i overtidsbetaling?',
      solution: `**Beregning av overtid:**

**Ahmeds avtalte arbeidstid:**
Daglig: 7,5 timer (08.00–15.30 minus 30 min pause)
Ukentlig: 37,5 timer

**Ekstraarbeid de tre dagene:**
Ahmed jobber til kl. 19.00 i stedet for kl. 15.30, dvs. 3,5 timer ekstra per dag.
Totalt ekstraarbeid: 3,5 × 3 = **10,5 timer**

**Er alt dette overtid?**
Arbeidsmiljøloven definerer overtid som arbeid utover den alminnelige arbeidstid etter § 10-4, dvs. 9 timer per dag eller 40 timer per uke. Arbeid mellom 37,5 og 40 timer/uke er «mertid» – ikke lovbestemt overtid, men kan gi rett til overtidstillegg etter tariffavtale.

Lovbestemt overtid inntrer ved arbeid utover 9 timer/dag:
- Dagene han jobber til 19.00: total arbeidstid = 10,5 timer (inkl. pause). Faktisk arbeidstid = 10 timer.
- Overtid per dag: 10 - 9 = **1 time** lovbestemt overtid per dag
- Lovbestemt overtid totalt: 3 × 1 = **3 timer**

**Overtidsbetaling (minimum 40 % tillegg):**
Timelønn: 220 kr
Overtidstillegg: 220 × 0,40 = 88 kr per time
Total timebetaling ved overtid: 220 + 88 = **308 kr per time**
Totalt for 3 timer lovbestemt overtid: 3 × 308 = **924 kr**

I tillegg får Ahmed betalt for mertiden (arbeid mellom 37,5 og 40 timer, samt timene mellom 7,5 og 9 timer per dag) til ordinær timelønn, med mindre tariffavtalen gir overtidstillegg også for mertid.`
    },
    {
      id: 'rett1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er lovens minimumstillegg for overtidsarbeid etter arbeidsmiljøloven § 10-6?',
        options: [
          { id: 'a', text: '25 prosent av alminnelig lønn', isCorrect: false },
          { id: 'b', text: '40 prosent av alminnelig lønn', isCorrect: true },
          { id: 'c', text: '50 prosent av alminnelig lønn', isCorrect: false },
          { id: 'd', text: '100 prosent av alminnelig lønn', isCorrect: false }
        ],
        solution: 'Etter arbeidsmiljøloven § 10-6 ellevte ledd skal det for overtidsarbeid betales et tillegg på minst 40 prosent av alminnelig lønn. Mange tariffavtaler gir høyere tillegg (f.eks. 50 % eller 100 %), men 40 % er lovens minimum. Arbeidstaker kan ikke frasi seg retten til overtidsbetaling.'
      }
    },

    // --- BLOKK 2: Nattarbeid og søndagsarbeid ---
    {
      id: 'rett1-5-2-text-2',
      type: 'text',
      content: `### Nattarbeid og søndagsarbeid

**Nattarbeid (aml. § 10-11):**
Arbeid mellom kl. 21.00 og kl. 06.00 er **nattarbeid** og er som hovedregel **ikke tillatt**. Unntak gjelder blant annet for:
- Arbeid som er nødvendig av **driftsmessige grunner** (f.eks. sykehus, brannvesen, hoteller)
- Arbeid som er nødvendig for å **dekke samfunnets behov** (f.eks. politi, helsetjenester)
- Arbeid i virksomheter som er bundet av **tariffavtale** som tillater nattarbeid

Arbeidstakere som hovedsakelig arbeider om natten, skal ikke ha en gjennomsnittlig arbeidstid på mer enn **8 timer** i løpet av 24 timer.

**Søndagsarbeid (aml. § 10-10):**
Arbeid på søndager og helgedager er som hovedregel **ikke tillatt**, med mindre «arbeidets art gjør det nødvendig». Unntak gjelder for blant annet:
- Helse- og omsorgstjenester
- Transport og kommunikasjon
- Handel som er tillatt etter helligdagsfredloven
- Vakthold og beredskap

Arbeidstaker som har utført søn- og helgedagsarbeid, skal ha fri følgende søn- eller helgedag. Det skal være arbeidsfri i minst **35 timer sammenhengende** i løpet av 7 dager, og denne fritiden skal så vidt mulig omfatte søndagen.`
    },
    {
      id: 'rett1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken tidsperiode regnes som nattarbeid etter arbeidsmiljøloven?',
        options: [
          { id: 'a', text: 'Kl. 22.00–06.00', isCorrect: false },
          { id: 'b', text: 'Kl. 21.00–06.00', isCorrect: true },
          { id: 'c', text: 'Kl. 23.00–07.00', isCorrect: false },
          { id: 'd', text: 'Kl. 20.00–06.00', isCorrect: false }
        ],
        solution: 'Etter arbeidsmiljøloven § 10-11 er nattarbeid definert som arbeid mellom kl. 21.00 og kl. 06.00. Nattarbeid er som hovedregel ikke tillatt, med mindre arbeidets art gjør det nødvendig (f.eks. helsetjenester, beredskap). Merk at mange tror grensen er kl. 22.00, men loven setter grensen allerede ved kl. 21.00.'
      }
    },

    // --- BLOKK 3: Ferie og feriepenger ---
    {
      id: 'rett1-5-2-def-2',
      type: 'definition',
      title: 'Ferie og feriepenger',
      content: `**Ferieloven** (lov 29. april 1988 nr. 21) gir alle arbeidstakere rett til ferie og feriepenger.

**Feriens lengde:**
- Alle arbeidstakere har rett til **25 virkedager** (4 uker og 1 dag) ferie per år (ferieloven § 5). Lørdager telles som virkedager, så dette tilsvarer 4 uker og 1 dag.
- Arbeidstakere som fyller **60 år** i løpet av ferieåret, har rett til **en ekstra uke** (6 virkedager) – til sammen 31 virkedager.
- Mange tariffavtaler gir rett til **5 uker** ferie (den «femte ferieuka»), som er mer enn lovens minimum.

**Feriepenger (ferieloven § 10):**
Feriepenger beregnes på grunnlag av arbeidstakerens arbeidsvederlag (lønn) i **opptjeningsåret** (året før ferien tas ut):
- Feriepengegrunnlaget er som hovedregel **10,2 prosent** av lønnen i opptjeningsåret
- For arbeidstakere med avtalefestet rett til 5 uker ferie: **12 prosent**
- For arbeidstakere over 60 år: et tillegg på **2,3 prosentpoeng**

Feriepenger erstatter lønnen i ferieperioden – arbeidstakeren får ikke lønn og feriepenger samtidig.`
    },
    {
      id: 'rett1-5-2-text-3',
      type: 'text',
      content: `### Fastsettelse av ferie

**Hvem bestemmer når ferien skal tas?**
Arbeidsgiveren fastsetter tidspunktet for ferien etter drøfting med arbeidstakeren eller de tillitsvalgte (ferieloven § 6 nr. 1). Arbeidstakeren kan **kreve** å få beskjed om ferietidspunktet senest **to måneder** før ferien begynner, med mindre «særlige grunner» gjør dette vanskelig.

**Arbeidstakerens rettigheter:**
- Arbeidstakeren kan kreve at **hovedferien** (18 virkedager / 3 uker) gis i perioden **1. juni–30. september**, jf. ferieloven § 7 nr. 1
- Arbeidstakeren kan kreve at **restferien** (7 virkedager / 1 uke og 1 dag) gis samlet
- Arbeidstakere over 60 år bestemmer **selv** tidspunktet for den ekstra ferieuka, men skal varsle arbeidsgiveren minst to uker i forveien

**Overføring av ferie:**
Ferie som ikke er avviklet ved ferieårets utløp, overføres automatisk til neste år (ferieloven § 7 nr. 3). Det er ikke lenger adgang til å få utbetalt ubrukt ferie i stedet – ferien **må** avvikles.

**Ferie under sykdom:**
Arbeidstaker som blir **helt arbeidsufør** (100 % sykemeldt) før ferien begynner, kan kreve ferien utsatt til senere i ferieåret (ferieloven § 9 nr. 1). Dersom arbeidstakeren blir syk under ferien, kan vedkommende kreve tilsvarende antall feriedager utsatt, forutsatt at arbeidsuførheten dokumenteres med legeerklæring.`
    },
    {
      id: 'rett1-5-2-example-2',
      type: 'example',
      title: 'Ferie og feriepenger i praksis',
      problem: 'Lise begynte i ny jobb 1. august 2025. Året før (opptjeningsåret 2024) jobbet hun hos en annen arbeidsgiver og tjente 450 000 kr. Lise har avtalt 5 uker ferie. Hvor mye får Lise i feriepenger, og har hun rett til full ferie hos ny arbeidsgiver?',
      solution: `**Beregning av feriepenger:**

**Opptjeningsåret:**
Feriepenger beregnes på grunnlag av lønnen i opptjeningsåret (2024). Lise tjente 450 000 kr.

**Feriepengeprosent:**
Med 5 uker ferie er satsen 12 prosent av feriepengegrunnlaget:
450 000 × 0,12 = **54 000 kr** i feriepenger

**Rett til ferie hos ny arbeidsgiver:**
Ferieloven § 5 nr. 3 regulerer dette: Arbeidstaker som tiltrer senest 30. september i ferieåret, har rett til **full ferie** (25 virkedager) hos ny arbeidsgiver. Lise tiltrådte 1. august, altså før 30. september, og har dermed rett til full ferie.

**Men – har hun feriepenger til å dekke all ferien?**
Feriepengene fra opptjeningsåret (54 000 kr) skal dekke lønnsbortfallet under ferien. Dersom Lise tar ut all ferien, vil feriepengene kanskje ikke dekke hele lønnstapet (avhengig av ny lønn). Lise kan derfor velge å **avstå fra ferie** i den utstrekning feriepengene ikke dekker lønnsbortfallet (ferieloven § 5 nr. 5).

**Utbetaling:**
Feriepengene utbetales normalt i juni (av nåværende arbeidsgiver). Feriepenger opptjent hos forrige arbeidsgiver utbetales ved sluttoppgjøret derfra.`
    },
    {
      id: 'rett1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Erik tjente 520 000 kr i opptjeningsåret. Han har lovfestet ferie (ikke avtalefestet femte uke) og er 45 år gammel. Beregn feriepengene hans, og forklar kort hvordan feriepenger fungerer.',
        hints: ['Bruk satsen for lovfestet ferie: 10,2 %. Forklar også forholdet mellom opptjeningsår og ferieår.'],
        solution: `**Beregning:**
Feriepengegrunnlag: 520 000 kr
Sats for lovfestet ferie: 10,2 %
Feriepenger: 520 000 × 0,102 = **53 040 kr**

**Hvordan feriepenger fungerer:**
Feriepenger er ikke et tillegg til lønn – de erstatter lønnen i ferieperioden. Arbeidstakeren får ikke lønn under ferien, men får i stedet utbetalt feriepenger. Feriepengene beregnes på grunnlag av arbeidsinntekten i opptjeningsåret (året før). Dersom feriepengene er lavere enn den normale lønnen, vil arbeidstakeren i praksis tjene noe mindre i feriemåneden. De fleste arbeidsgivere trekker én måneds lønn i juni og utbetaler feriepengene i stedet, slik at arbeidstakeren merker minst mulig forskjell.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-2-summary',
      type: 'text',
      content: `### Oppsummering

- **Alminnelig arbeidstid** etter arbeidsmiljøloven er maksimalt 9 timer per dag og 40 timer per uke. De fleste tariffavtaler har 37,5 timer per uke.
- **Overtid** er arbeid utover alminnelig arbeidstid og krever et særlig og tidsavgrenset behov. Overtidstillegget er minst **40 prosent** av alminnelig lønn.
- **Nattarbeid** (kl. 21–06) og **søndagsarbeid** er som hovedregel ikke tillatt, med unntak for arbeid der arbeidets art gjør det nødvendig.
- **Ferieloven** gir rett til minst **25 virkedager** ferie per år. Arbeidstakere over 60 år har rett til en ekstra ferieuke.
- **Feriepenger** beregnes på grunnlag av lønn i opptjeningsåret – satsen er **10,2 %** (lovfestet) eller **12 %** (5 uker ferie).
- Hovedferien (3 uker) kan kreves lagt til perioden **1. juni–30. september**. Ubrukt ferie overføres til neste år.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En arbeidstaker med tariffavtale har 37,5 timers arbeidsuke. Hva er den maksimale ukentlige grensen for alminnelig arbeidstid etter arbeidsmiljøloven?',
        options: [
          { id: 'a', text: '35 timer', isCorrect: false },
          { id: 'b', text: '37,5 timer', isCorrect: false },
          { id: 'c', text: '40 timer', isCorrect: true },
          { id: 'd', text: '45 timer', isCorrect: false }
        ],
        solution: 'Arbeidsmiljøloven § 10-4 setter den ukentlige grensen for alminnelig arbeidstid til 40 timer per uke (7 dager). At tariffavtalen sier 37,5 timer, er et resultat av at tariffavtalen har en lavere grense enn lovens maksimum. Arbeid mellom 37,5 og 40 timer per uke er «mertid» – lovens overtidsregler slår først inn ved arbeid utover 40 timer.'
      }
    },
    {
      id: 'rett1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kari (62 år) jobber i en kommune og har 5 ukers ferie etter tariffavtale. Hun ønsker å ta hovedferien i oktober i stedet for i sommerperioden. Arbeidsgiveren sier nei og vil legge ferien til juli. Drøft hvem som har rett, og forklar Karis spesielle rettigheter som arbeidstaker over 60 år.',
        hints: ['Se ferieloven §§ 6 og 7 om feriens plassering og ferieloven § 5 om ekstra ferieuke for arbeidstakere over 60 år.'],
        solution: `**Drøftelse:**

**Hvem bestemmer ferietidspunktet?**
Etter ferieloven § 6 nr. 1 er det arbeidsgiveren som fastsetter ferietidspunktet etter drøfting med arbeidstakeren. Arbeidsgiveren har i utgangspunktet siste ord.

**Arbeidstakerens rett til sommerferie:**
Etter ferieloven § 7 nr. 1 kan arbeidstakeren kreve at hovedferien (18 virkedager / 3 uker) legges til perioden 1. juni–30. september. Dette er en rettighet – arbeidstakeren kan kreve sommerferie, men er ikke forpliktet til det.

**I dette tilfellet:**
Det er Kari som ønsker ferie utenfor sommerperioden, og arbeidsgiveren som ønsker å legge ferien til sommeren. Loven gir arbeidstakeren rett til å kreve sommerferie, men den gir ikke arbeidsgiveren rett til å pålegge sommerferie mot arbeidstakerens vilje dersom partene er uenige. Arbeidsgiveren har likevel styringsrett til å fastsette ferietidspunktet – men dette må skje etter drøfting.

**Karis rettigheter som arbeidstaker over 60 år:**
Kari har rett til en ekstra ferieuke (6 virkedager). Etter ferieloven § 6 nr. 1 andre ledd bestemmer arbeidstakere over 60 år **selv** tidspunktet for den ekstra ferieuka, med minst to ukers varsel til arbeidsgiveren.

**Konklusjon:** Arbeidsgiveren kan i kraft av styringsretten legge Karis ordinære ferie (inkludert hovedferien) til juli, forutsatt at det er gjennomført reell drøfting. Kari kan ikke kreve å ta hovedferien i oktober. Men den ekstra ferieuka (for arbeidstakere over 60 år) bestemmer Kari selv når hun vil ta ut – denne kan hun legge til oktober.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: Oppsigelse og avskjed
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_3: TextbookChapter = {
  id: 'rettslaere-1-5-3',
  courseId: 'rettslaere-1',
  chapterNumber: '5.3',
  title: 'Oppsigelse og avskjed',
  description: 'Saklig oppsigelse, avskjed, oppsigelsesfrist og drøftelsesplikt.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere lovligheten av oppsigelse og avskjed'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-3-intro',
      type: 'text',
      content: `## Oppsigelse og avskjed

Å miste jobben er en av de mest inngripende hendelsene som kan ramme en arbeidstaker. Arbeidet gir ikke bare inntekt, men også sosial tilhørighet, identitet og struktur i hverdagen. Nettopp derfor har norsk rett et sterkt **stillingsvern** – arbeidsgiveren kan ikke si opp eller avskjedige ansatte uten å følge strenge regler.

I dette kapittelet skal vi se på forskjellen mellom oppsigelse og avskjed, kravet om saklig grunn, formkravene til oppsigelse, drøftelsesplikten og arbeidstakerens rettigheter ved usaklig oppsigelse. Reglene finnes hovedsakelig i **arbeidsmiljøloven** kapittel 15.`
    },

    // --- BLOKK 1: Oppsigelse – saklig grunn ---
    {
      id: 'rett1-5-3-def-1',
      type: 'definition',
      title: 'Oppsigelse og saklig grunn',
      content: `**Oppsigelse** er en ensidig erklæring fra arbeidsgiver eller arbeidstaker om at arbeidsforholdet skal opphøre etter utløpet av oppsigelsestiden. Ved oppsigelse fortsetter arbeidsforholdet i oppsigelsestiden – arbeidstakeren har rett og plikt til å arbeide, og arbeidsgiveren har plikt til å betale lønn.

**Saklighetskravet (aml. § 15-7):**
Arbeidstaker kan ikke sies opp uten at det er **saklig begrunnet** i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold.

Saklighetskravet innebærer:
1. Oppsigelsen må bygge på et **korrekt faktisk grunnlag** – arbeidsgiveren kan ikke si opp basert på feilaktige opplysninger
2. Begrunnelsen må være **relevant** – bare forhold som har tilknytning til arbeidsforholdet kan begrunne oppsigelse
3. Det må foretas en **interesseavveining** – arbeidsgiverens behov for oppsigelse må veies mot ulempene oppsigelsen påfører arbeidstakeren
4. Oppsigelsen må ikke være **uforholdsmessig** – mindre inngripende tiltak (advarsel, omplassering) skal vurderes først`
    },
    {
      id: 'rett1-5-3-text-1',
      type: 'text',
      content: `### Oppsigelsesgrunnlag

**Virksomhetens forhold (nedbemanning):**
Den vanligste grunnen til oppsigelse er **nedbemanning** – virksomheten har behov for å redusere antall ansatte på grunn av sviktende økonomi, omorganisering eller rasjonalisering. Ved nedbemanning kreves det at:
- Det foreligger et **reelt behov** for nedbemanning (ikke bare et ønske om høyere profitt)
- Utvelgelsen av hvem som sies opp er basert på **saklige kriterier** – typisk ansiennitet (tjenestetid), kompetanse, sosiale hensyn og egnethet
- Arbeidsgiveren har vurdert om det finnes **annet passende arbeid** i virksomheten (aml. § 15-7 andre ledd)

**Arbeidstakerens forhold:**
Oppsigelse kan begrunnes i arbeidstakerens egne forhold, for eksempel:
- **Pliktbrudd:** Gjentatt forsentkomming, ordrenekt, brudd på arbeidsreglementet
- **Mangelfulle arbeidsprestasjoner:** Arbeidstakeren presterer vesentlig under det som kan forventes
- **Samarbeidsproblemer:** Vedvarende konflikter som skyldes arbeidstakeren
- **Ulovlig fravær:** Fravær uten gyldig grunn

Arbeidsgiveren bør normalt ha gitt **advarsel** før oppsigelse på grunn av arbeidstakerens forhold, slik at arbeidstakeren har fått mulighet til å rette opp forholdet.

**Arbeidsgiverens forhold:**
I sjeldne tilfeller kan arbeidsgiverens personlige forhold begrunne oppsigelse, f.eks. ved overføring av virksomheten til ny eier.`
    },
    {
      id: 'rett1-5-3-example-1',
      type: 'example',
      title: 'Saklig oppsigelse ved nedbemanning',
      problem: 'Tech AS har 30 ansatte og opplever fall i omsetningen på 25 % over to år. Styret beslutter å nedbemanne med 5 stillinger. Bedriften sier opp de 5 med kortest ansiennitet. En av dem, Petter (55 år, 12 års ansiennitet), mener oppsigelsen er usaklig fordi to ansatte med kortere ansiennitet beholdes. De to har spesialkompetanse innen kunstig intelligens som bedriften trenger. Er oppsigelsen av Petter saklig?',
      solution: `**Vurdering av saklighet (aml. § 15-7):**

**1. Reelt behov for nedbemanning?**
Ja – omsetningsfall på 25 % over to år dokumenterer et reelt behov for kostnadskutt. Bedriften har ikke plikt til å gå med underskudd.

**2. Saklige utvelgelseskriterier?**
Arbeidsgiveren har brukt ansiennitet som utgangspunkt, men fraveket dette for to ansatte med spesialkompetanse. Rettspraksis aksepterer at ansiennitetsprinsippet kan fravikes dersom det foreligger **saklig grunn**, for eksempel at virksomheten har et dokumentert behov for spesialkompetanse.

**3. Vurdering av Petters situasjon:**
- Petter har 12 års ansiennitet, som er lang tjenestid
- Han er 55 år, noe som gjør det vanskeligere å finne ny jobb
- Arbeidsgiveren bør ha vurdert om Petter kan **omplasseres** til annet arbeid (aml. § 15-7 andre ledd)
- Arbeidsgiveren bør ha vurdert om Petter kan **omskoleres** til å utføre de oppgavene bedriften trenger

**4. Interesseavveining:**
Bedriftens behov for spesialkompetanse innen kunstig intelligens er et saklig hensyn. Dersom kompetansen er avgjørende for bedriftens overlevelse, kan det forsvare å beholde ansatte med kortere ansiennitet.

**Konklusjon:**
Oppsigelsen av Petter er trolig **saklig**, forutsatt at bedriften kan dokumentere at spesialkompetansen er nødvendig, at omplassering er vurdert, og at det er gjennomført drøftelsesmøte. Men saken er tvilsom – Petters lange ansiennitet og alder er tungtveiende momenter som taler mot oppsigelse.`
    },
    {
      id: 'rett1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer kravet om saklig grunn for oppsigelse etter arbeidsmiljøloven § 15-7?',
        options: [
          { id: 'a', text: 'Arbeidsgiveren kan si opp hvem som helst, så lenge oppsigelsen er skriftlig', isCorrect: false },
          { id: 'b', text: 'Oppsigelsen må bygge på korrekt faktisk grunnlag, relevant begrunnelse og rimelig interesseavveining', isCorrect: true },
          { id: 'c', text: 'Saklig grunn betyr bare at arbeidsgiveren må oppgi en grunn – det stilles ikke krav til grunnens innhold', isCorrect: false },
          { id: 'd', text: 'Saklighetskravet gjelder bare ved nedbemanning, ikke ved oppsigelse på grunn av arbeidstakerens forhold', isCorrect: false }
        ],
        solution: 'Saklighetskravet i aml. § 15-7 innebærer at oppsigelsen må bygge på et korrekt faktisk grunnlag, ha en relevant begrunnelse som er tilknyttet arbeidsforholdet, og at det må foretas en rimelig interesseavveining mellom arbeidsgiverens behov og ulempene for arbeidstakeren. Kravet gjelder uansett om oppsigelsen er begrunnet i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold.'
      }
    },

    // --- BLOKK 2: Formkrav og drøftelsesplikt ---
    {
      id: 'rett1-5-3-text-2',
      type: 'text',
      content: `### Formkrav til oppsigelse

Arbeidsmiljøloven § 15-4 stiller strenge **formkrav** til oppsigelsen. En oppsigelse fra arbeidsgiveren skal:

**1. Være skriftlig:**
Oppsigelsen skal gis skriftlig, enten overlevert personlig eller sendt rekommandert.

**2. Inneholde opplysninger om:**
- Arbeidstakerens rett til å **kreve forhandlinger** og reise søksmål
- Arbeidstakerens rett til å **fortsette i stillingen** mens saken behandles
- **Fristene** for å kreve forhandling (to uker), reise søksmål (åtte uker) og for å kreve å stå i stillingen
- Hvem som er arbeidsgiver og rett saksøkt

**3. Oppgi begrunnelse:**
Arbeidstakeren kan kreve å få oppgitt de **konkrete omstendighetene** oppsigelsen bygger på. Dersom oppsigelsen skyldes nedbemanning, skal det opplyses om fortrinnsretten til ny ansettelse.

**Konsekvenser av formfeil:**
Dersom oppsigelsen ikke oppfyller formkravene, skal den som hovedregel kjennes **ugyldig** dersom arbeidstakeren reiser søksmål innen fire måneder (aml. § 15-5). Formfeil kan også gi grunnlag for **erstatning**.

### Drøftelsesplikten (aml. § 15-1)

Før arbeidsgiveren fatter beslutning om oppsigelse, skal spørsmålet **drøftes** med arbeidstakeren, med mindre arbeidstakeren selv ikke ønsker det. Drøftelsesmøtet er en viktig rettssikkerhetsgaranti:

- Arbeidstakeren skal få mulighet til å uttale seg om grunnlaget for oppsigelsen
- Arbeidstakeren kan ha med seg **tillitsvalgt** eller annen rådgiver
- Arbeidsgiveren skal sørge for at saken er **tilstrekkelig opplyst** før beslutningen treffes
- Drøftelsesmøtet skal avholdes **før** oppsigelsen gis – ikke etterpå

Manglende drøftelsesmøte gjør ikke oppsigelsen automatisk ugyldig, men det er et moment som taler for at oppsigelsen ikke er saklig. I praksis vil domstolene se alvorlig på at drøftelsesplikten ikke er oppfylt.`
    },
    {
      id: 'rett1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er konsekvensen dersom arbeidsgiverens oppsigelse ikke oppfyller formkravene i arbeidsmiljøloven § 15-4?',
        options: [
          { id: 'a', text: 'Oppsigelsen er gyldig, men arbeidstakeren kan kreve erstatning', isCorrect: false },
          { id: 'b', text: 'Oppsigelsen skal som hovedregel kjennes ugyldig dersom arbeidstakeren reiser søksmål i tide', isCorrect: true },
          { id: 'c', text: 'Arbeidsgiveren får en bot fra Arbeidstilsynet, men oppsigelsen står seg', isCorrect: false },
          { id: 'd', text: 'Formkravene er bare veiledende og har ingen rettslige konsekvenser', isCorrect: false }
        ],
        solution: 'Etter arbeidsmiljøloven § 15-5 skal en oppsigelse som ikke oppfyller formkravene i § 15-4, som hovedregel kjennes ugyldig dersom arbeidstakeren reiser søksmål innen fire måneder etter at oppsigelsen fant sted. Formfeil kan også gi grunnlag for erstatning. Formkravene er altså ikke bare veiledende – de har alvorlige rettslige konsekvenser for arbeidsgiveren.'
      }
    },

    // --- BLOKK 3: Avskjed ---
    {
      id: 'rett1-5-3-def-2',
      type: 'definition',
      title: 'Avskjed',
      content: `**Avskjed** er den sterkeste reaksjonen arbeidsgiveren kan benytte: arbeidstakeren må **fratre umiddelbart**, uten oppsigelsestid. Avskjed innebærer at arbeidsforholdet opphører på dagen – arbeidstakeren mister øyeblikkelig retten til å utføre arbeid og motta lønn.

Avskjed kan bare gis dersom arbeidstakeren har gjort seg skyldig i **grovt pliktbrudd** eller annet **vesentlig mislighold** av arbeidsavtalen, jf. arbeidsmiljøloven § 15-14.

**Terskelen for avskjed er høy.** Det kreves at arbeidstakeren har opptrådt så graverende at det er **urimelig** å kreve at arbeidsgiveren lar arbeidsforholdet fortsette i oppsigelsestiden. Eksempler på grunnlag for avskjed:
- **Tyveri eller underslag** fra arbeidsgiveren
- **Grov illojalitet**, f.eks. å starte konkurrerende virksomhet
- **Rusmiddelbruk** på arbeidsplassen i stillinger der dette utgjør en sikkerhetsrisiko
- **Vold eller trusler** mot kolleger eller kunder
- **Grov ordrenekt** – bevisst og gjentatt nektelse av å følge legitime instrukser`
    },
    {
      id: 'rett1-5-3-text-3',
      type: 'text',
      content: `### Oppsigelsestid

Oppsigelsestiden løper fra den **første dagen i måneden etter** at oppsigelsen ble gitt. Arbeidsmiljøloven § 15-3 fastsetter minimumsfrister:

**Hovedregel:** Minst **én måned** gjensidig oppsigelsestid.

**Ved lang ansiennitet:**
- Minst **2 måneder** etter 5 års sammenhengende ansettelse
- Minst **3 måneder** etter 10 års sammenhengende ansettelse
- Minst **4 måneder** etter 10 år + arbeidstaker er over 50 år
- Minst **5 måneder** etter 10 år + arbeidstaker er over 55 år
- Minst **6 måneder** etter 10 år + arbeidstaker er over 60 år

De utvidede fristene for eldre arbeidstakere gjelder bare for oppsigelse **fra arbeidsgiver**. Arbeidstakeren selv har aldri mer enn 3 måneders oppsigelsestid, med mindre annet er avtalt.

**Prøvetid:**
I prøvetiden (maks 6 måneder, jf. aml. § 15-6) er oppsigelsestiden **14 dager**, regnet fra dato til dato (ikke fra første dag i neste måned). Oppsigelse i prøvetiden krever fortsatt saklig grunn, men terskelen er noe lavere – den kan begrunnes i arbeidstakerens tilpasning til arbeidet, faglige dyktighet eller pålitelighet.

### Rett til å stå i stillingen

Ved tvist om oppsigelsens saklighet har arbeidstakeren som hovedregel rett til å **stå i stillingen** – det vil si fortsette å arbeide og motta lønn – inntil saken er rettskraftig avgjort (aml. § 15-11). Denne retten gjelder **ikke** ved avskjed, oppsigelse i prøvetiden eller der retten beslutter fratreden etter arbeidsgiverens begjæring.`
    },
    {
      id: 'rett1-5-3-example-2',
      type: 'example',
      title: 'Oppsigelse eller avskjed?',
      problem: 'Marte er butikkmedarbeider i en klesbutikk. Arbeidsgiveren oppdager at hun har tatt med seg klær fra butikken hjem uten å betale – til en verdi av ca. 3 000 kr. Marte innrømmer forholdet. Kan arbeidsgiveren gi avskjed, eller bør det gis oppsigelse?',
      solution: `**Vurdering av avskjed (aml. § 15-14) vs. oppsigelse (aml. § 15-7):**

**Er det grunnlag for avskjed?**
Avskjed krever «grovt pliktbrudd» eller «vesentlig mislighold». Tyveri fra arbeidsgiveren er i rettspraksis ansett som et **klart avskjedsgrunnlag** – det innebærer et fundamentalt tillitsbrudd. Det gjelder selv om verdien av det stjålne er relativt lav.

**Momenter som taler for avskjed:**
- Tyveri fra arbeidsgiver representerer et **alvorlig tillitsbrudd** – arbeidsgiveren må kunne stole på at ansatte ikke forsyner seg av varene
- Marte har innrømmet forholdet
- Som butikkmedarbeider har hun tilgang til varene i kraft av sin stilling – misbruk av denne tilliten er særlig graverende
- Rettspraksis (bl.a. Rt-2005-518) viser at tyveri fra arbeidsgiver normalt gir grunnlag for avskjed

**Momenter som taler mot avskjed:**
- Verdien av det stjålne er relativt lav (3 000 kr)
- Martes ansiennitet og eventuelle familieforsørgerbyrde
- Om det er første gang – har Marte ellers fungert godt?

**Konklusjon:**
Arbeidsgiveren har trolig **grunnlag for avskjed**. Tyveri fra arbeidsgiver er i rettspraksis anerkjent som grovt pliktbrudd, uavhengig av verdi. Tillitsbruddet er det sentrale – arbeidsgiveren kan ikke pålegges å ha en arbeidstaker i oppsigelsestid dersom arbeidstakeren har vist seg uærlig med arbeidsgiverens verdier. Arbeidsgiveren kan alternativt velge den mildere reaksjonen – **oppsigelse** – men har ikke plikt til det.`
    },
    {
      id: 'rett1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom oppsigelse og avskjed. Hva kreves for at arbeidsgiveren kan gi avskjed i stedet for oppsigelse?',
        hints: ['Sammenlign vilkårene, virkningstidspunktet og arbeidstakerens rettigheter i de to situasjonene.'],
        solution: `**Oppsigelse (aml. § 15-7):**
- Arbeidsforholdet opphører etter utløpet av oppsigelsestiden (normalt 1–6 måneder)
- Krever «saklig grunn» i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold
- Arbeidstakeren har rett og plikt til å arbeide i oppsigelsestiden
- Arbeidstakeren har rett til å stå i stillingen under en eventuell tvist

**Avskjed (aml. § 15-14):**
- Arbeidsforholdet opphører umiddelbart – arbeidstakeren må fratre på dagen
- Krever «grovt pliktbrudd» eller «vesentlig mislighold» av arbeidsavtalen
- Arbeidstakeren har ingen rett til å arbeide eller motta lønn etter avskjeden
- Arbeidstakeren har ikke rett til å stå i stillingen under tvist (men kan kreve det ved søksmål)

**Terskelen for avskjed er vesentlig høyere.** Det er ikke tilstrekkelig at arbeidstakeren har gjort noe kritikkverdig – forholdet må være så alvorlig at det er urimelig å kreve at arbeidsgiveren lar arbeidsforholdet fortsette i oppsigelsestiden. Typiske avskjedsgrunner er tyveri, grov illojalitet, vold eller rusmiddelpåvirkning i sikkerhetskritiske stillinger.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-3-summary',
      type: 'text',
      content: `### Oppsummering

- **Oppsigelse** krever saklig grunn i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold (aml. § 15-7). Saklighetskravet innebærer korrekt faktisk grunnlag, relevant begrunnelse og rimelig interesseavveining.
- Ved **nedbemanning** skal utvelgelsen av hvem som sies opp baseres på saklige kriterier (ansiennitet, kompetanse, sosiale hensyn). Arbeidsgiveren skal vurdere om det finnes annet passende arbeid.
- Oppsigelsen må oppfylle **formkravene** i aml. § 15-4: skriftlig, med opplysning om rettigheter. Formfeil kan gjøre oppsigelsen ugyldig.
- **Drøftelsesmøte** (aml. § 15-1) skal avholdes før arbeidsgiveren beslutter oppsigelse. Arbeidstakeren kan ha med tillitsvalgt.
- **Avskjed** (aml. § 15-14) krever grovt pliktbrudd eller vesentlig mislighold – arbeidstakeren må fratre umiddelbart. Terskelen er vesentlig høyere enn for oppsigelse.
- **Oppsigelsestiden** er minst én måned og øker med ansiennitet og alder (opptil 6 måneder).
- Ved tvist har arbeidstakeren som hovedregel rett til å **stå i stillingen** inntil saken er avgjort.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Thomas (57 år) har jobbet i samme bedrift i 15 år og mottar oppsigelse på grunn av nedbemanning. Hva er hans lovbestemte oppsigelsestid?',
        options: [
          { id: 'a', text: '3 måneder', isCorrect: false },
          { id: 'b', text: '4 måneder', isCorrect: false },
          { id: 'c', text: '5 måneder', isCorrect: true },
          { id: 'd', text: '6 måneder', isCorrect: false }
        ],
        solution: 'Thomas har mer enn 10 års ansiennitet og er over 55 år. Etter arbeidsmiljøloven § 15-3 fjerde ledd har han krav på minst 5 måneders oppsigelsestid (10 år + over 55 år). Hadde han vært over 60 år, ville oppsigelsestiden vært 6 måneder. De utvidede fristene for eldre arbeidstakere gjelder bare ved oppsigelse fra arbeidsgiverens side.'
      }
    },
    {
      id: 'rett1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Byggmester AS skal nedbemanne med 3 stillinger. De har 20 ansatte. Daglig leder vil si opp de 3 som presterer dårligst ifølge hans egen vurdering, uten å avholde drøftelsesmøter. Drøft om denne fremgangsmåten er i samsvar med arbeidsmiljøloven.',
        hints: ['Vurder saklighetskravet (§ 15-7), utvelgelseskriterier, drøftelsesplikten (§ 15-1) og plikten til å vurdere annet passende arbeid.'],
        solution: `**Vurdering av fremgangsmåten:**

**1. Drøftelsesplikten (aml. § 15-1):**
Daglig leder planlegger å si opp uten drøftelsesmøte. Dette er i strid med arbeidsmiljøloven § 15-1, som krever at oppsigelsen drøftes med arbeidstakeren før beslutningen treffes. Manglende drøftelsesmøte er et alvorlig brudd som kan medføre at oppsigelsen kjennes ugyldig.

**2. Utvelgelseskriterier:**
At daglig leder vil si opp de 3 som «presterer dårligst etter hans egen vurdering» er problematisk:
- Vurderingen må baseres på **objektive og dokumenterbare** kriterier, ikke en subjektiv oppfatning
- Ansiennitet er et sentralt utvelgelseskriterium i norsk rett – det kan fravikes, men krever saklig grunn
- Sosiale hensyn (alder, forsørgelsesbyrde, mulighet for nytt arbeid) skal vektlegges
- Kompetansevurderingen må bygge på dokumentasjon (medarbeidersamtaler, målinger, skriftlige advarsler)

**3. Annet passende arbeid (aml. § 15-7 andre ledd):**
Arbeidsgiveren har plikt til å vurdere om det finnes annet passende arbeid i virksomheten for de som vurderes oppsagt. Denne plikten kan ikke forbigås.

**4. Formkravene (aml. § 15-4):**
Oppsigelsene må oppfylle de strenge formkravene – skriftlighet, opplysning om rettigheter mv.

**Konklusjon:**
Fremgangsmåten er **ikke** i samsvar med arbeidsmiljøloven. De viktigste bruddene er:
- Manglende drøftelsesmøte (§ 15-1)
- Subjektive og udokumenterte utvelgelseskriterier
- Manglende vurdering av ansiennitet og sosiale hensyn
- Mulig manglende vurdering av annet passende arbeid

Alle tre oppsigelsene risikerer å bli kjent **ugyldige** dersom arbeidstakerne reiser søksmål.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: HMS og arbeidsmiljø
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_4: TextbookChapter = {
  id: 'rettslaere-1-5-4',
  courseId: 'rettslaere-1',
  chapterNumber: '5.4',
  title: 'HMS og arbeidsmiljø',
  description: 'Arbeidsmiljøloven, HMS-krav, verneombud og arbeidstilsynet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for HMS-krav i arbeidslivet'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-4-intro',
      type: 'text',
      content: `## HMS og arbeidsmiljø

I 2023 døde 31 arbeidstakere i arbeidsulykker i Norge. Hundrevis ble alvorlig skadet, og tusenvis ble syke av forhold på arbeidsplassen. Bak hvert tall er det et menneske, en familie og et arbeidsmiljø som har sviktet. Arbeidsmiljøloven stiller derfor strenge krav til **helse, miljø og sikkerhet (HMS)** på arbeidsplassen.

HMS-regelverket handler ikke bare om å forebygge ulykker og skader. Det handler like mye om det **psykososiale arbeidsmiljøet** – trakassering, mobbing, stress og organisatoriske forhold som påvirker arbeidstakernes helse. I dette kapittelet skal vi se på arbeidsgiverens og arbeidstakerens plikter, kravene til systematisk HMS-arbeid, verneombudets rolle og Arbeidstilsynets tilsynsmyndighet.`
    },

    // --- BLOKK 1: Arbeidsmiljølovens formål og krav ---
    {
      id: 'rett1-5-4-def-1',
      type: 'definition',
      title: 'HMS – Helse, miljø og sikkerhet',
      content: `**HMS** (helse, miljø og sikkerhet) er et samlebegrep for det systematiske arbeidet med å forebygge skader, sykdom og uheldige belastninger på arbeidsplassen.

**Arbeidsmiljøloven** (lov 17. juni 2005 nr. 62) har som formål å sikre et arbeidsmiljø som gir grunnlag for en helsefremmende og meningsfylt arbeidssituasjon, som gir full trygghet mot fysiske og psykiske skadevirkninger, og med en velferdsmessig standard som til enhver tid er i samsvar med den teknologiske og sosiale utviklingen i samfunnet (aml. § 1-1).

**Internkontrollforskriften** (forskrift om systematisk helse-, miljø- og sikkerhetsarbeid i virksomheter, 1996) pålegger alle virksomheter å ha et **systematisk HMS-arbeid** (internkontroll). Dette innebærer at virksomheten skal:
- Kartlegge farer og risikoforhold
- Utarbeide planer og tiltak for å redusere risikoen
- Gjennomføre tiltak og kontrollere at de fungerer
- Dokumentere HMS-arbeidet skriftlig`
    },
    {
      id: 'rett1-5-4-text-1',
      type: 'text',
      content: `### Krav til arbeidsmiljøet

Arbeidsmiljøloven stiller krav til både det **fysiske** og det **psykososiale** arbeidsmiljøet:

**Fysisk arbeidsmiljø (aml. kapittel 4):**

**Generelle krav (§ 4-1):**
Arbeidsmiljøet skal være «fullt forsvarlig» ut fra en enkeltvis og samlet vurdering av faktorer som kan innvirke på arbeidstakernes fysiske og psykiske helse. Standarden for hva som er «fullt forsvarlig» utvikler seg over tid med ny kunnskap og teknologi.

**Konkrete krav til fysiske arbeidsforhold (§ 4-4):**
- Arbeidsplassen skal innrettes slik at arbeidstakerne er vernet mot **fysiske farer** (støy, støv, kjemikalier, stråling, temperatur)
- Nødvendig **verneutstyr** skal stilles til disposisjon
- Maskiner og annet arbeidsutstyr skal være **forsvarlig konstruert** og vedlikeholdt
- Arbeidsplassen skal ha tilfredsstillende **belysning, ventilasjon, temperatur** og lignende

**Psykososialt arbeidsmiljø (§ 4-3):**

Arbeidsmiljøloven stiller også krav til det psykososiale arbeidsmiljøet:
- Arbeidet skal legges til rette slik at arbeidstakerens **integritet og verdighet** ivaretas
- Arbeidstaker skal ikke utsettes for **trakassering** eller annen utilbørlig opptreden
- Arbeidstaker skal så langt som mulig beskyttes mot **vold, trusler og uheldige belastninger** som følge av kontakt med andre
- Arbeidet skal gi mulighet for **faglig og personlig utvikling**, variasjon, selvbestemmelse og kontakt med andre

**Diskriminering og trakassering:**
Likestillings- og diskrimineringsloven (lov 16. juni 2017 nr. 51) forbyr diskriminering og trakassering på arbeidsplassen på grunnlag av kjønn, etnisitet, religion, funksjonsnedsettelse, seksuell orientering, alder mv. Arbeidsgiveren har en **aktivitetsplikt** til å forebygge diskriminering og fremme likestilling.`
    },
    {
      id: 'rett1-5-4-example-1',
      type: 'example',
      title: 'Krav til arbeidsmiljø i praksis',
      problem: 'Nora jobber på et kundesenter der hun daglig mottar aggressive telefoner fra misfornøyde kunder. Hun opplever stadig mer stress, søvnproblemer og angst for å gå på jobb. Hun har tatt opp problemet med lederen sin, men får beskjed om at «sånn er jobben – du må bare tåle det». Har arbeidsgiveren brutt arbeidsmiljøloven?',
      solution: `**Analyse etter arbeidsmiljøloven:**

**Psykososialt arbeidsmiljø (aml. § 4-3):**
Arbeidsmiljøloven § 4-3 tredje ledd krever at arbeidstaker skal beskyttes mot «vold, trusler og uheldige belastninger som følge av kontakt med andre». Aggressive kunder som systematisk utsetter Nora for verbal aggressjon, faller inn under dette.

**Arbeidsgiverens plikt:**
Arbeidsgiveren plikter å:
1. **Kartlegge risikoen** – hvor ofte mottar de ansatte aggressive henvendelser? Hva er konsekvensene?
2. **Iverksette tiltak** – f.eks. opplæring i konflikthåndtering, rutiner for å avslutte aggressive samtaler, mulighet for debriefing, kollegastøtte
3. **Følge opp** – er tiltakene tilstrekkelige? Har Noras helseproblemer bedret seg?

Svaret «sånn er jobben» er **ikke** tilstrekkelig. At arbeidet innebærer kundekontakt, fritar ikke arbeidsgiveren fra plikten til å beskytte arbeidstakerne.

**Internkontrollforskriften:**
Arbeidsgiveren skal ha systematisk HMS-arbeid som omfatter kartlegging av psykososiale risikoforhold. At Noras bekymring avfeies uten tiltak, tyder på manglende internkontroll.

**Konsekvenser:**
Arbeidsgiveren har trolig brutt aml. § 4-3 og internkontrollforskriften. Nora kan melde forholdet til **verneombudet** eller **Arbeidstilsynet**. Dersom hun utvikler helseproblemer som kan tilbakeføres til arbeidsmiljøet, kan hun også ha krav på **yrkesskadeerstatning**.

**Konklusjon:** Arbeidsgiveren har brutt arbeidsmiljøloven ved å unnlate å iverksette tiltak for å beskytte Nora mot uheldige belastninger fra kundekontakt. At jobben innebærer kundekontakt, fritar ikke arbeidsgiveren fra HMS-ansvaret.`
    },
    {
      id: 'rett1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at arbeidsmiljøet skal være «fullt forsvarlig» etter arbeidsmiljøloven § 4-1?',
        options: [
          { id: 'a', text: 'At arbeidsplassen skal være 100 % risikofri', isCorrect: false },
          { id: 'b', text: 'At arbeidsmiljøet skal vurderes samlet ut fra faktorer som kan påvirke arbeidstakernes fysiske og psykiske helse, i samsvar med den teknologiske og sosiale utviklingen', isCorrect: true },
          { id: 'c', text: 'At arbeidsgiveren skal gjøre det som er rimelig ut fra virksomhetens økonomi', isCorrect: false },
          { id: 'd', text: 'At arbeidsplassen oppfyller minimumskravene i internkontrollforskriften', isCorrect: false }
        ],
        solution: '«Fullt forsvarlig» er en rettslig standard som innebærer at arbeidsmiljøet skal vurderes ut fra en samlet vurdering av alle faktorer som kan påvirke arbeidstakernes fysiske og psykiske helse. Standarden er dynamisk – den utvikler seg med ny kunnskap og teknologi. Det betyr ikke at arbeidsplassen må være risikofri, men at risikoen skal være redusert til et forsvarlig nivå med tilgjengelige tiltak.'
      }
    },

    // --- BLOKK 2: Verneombud og arbeidsmiljøutvalg ---
    {
      id: 'rett1-5-4-text-2',
      type: 'text',
      content: `### Verneombudet

**Verneombudet** er arbeidstakernes representant i HMS-spørsmål og spiller en sentral rolle i å ivareta arbeidstakernes interesser knyttet til arbeidsmiljøet.

**Krav om verneombud (aml. § 6-1):**
Alle virksomheter med **5 eller flere arbeidstakere** skal ha verneombud. Verneombudet velges av og blant arbeidstakerne, normalt for en periode på **to år**.

**Verneombudets oppgaver (aml. § 6-2):**
- **Overvåke** at arbeidsmiljølovens krav til HMS etterleves
- **Påse** at arbeidstakerne ikke utsettes for fare for liv eller helse
- **Melde fra** til arbeidsgiveren om forhold som kan medføre ulykker eller helsefare
- **Delta** i planlegging og gjennomføring av HMS-tiltak
- **Stanse arbeidet** dersom det foreligger umiddelbar fare for liv eller helse som ikke kan avverges på annen måte (aml. § 6-3) – dette er verneombudets sterkeste virkemiddel

Verneombudet har **særskilt oppsigelsesvern** – vedkommende kan ikke sies opp eller omplasseres som følge av vernearbeidet.

### Arbeidsmiljøutvalg (AMU)

Virksomheter med **50 eller flere arbeidstakere** skal ha et **arbeidsmiljøutvalg** (AMU), jf. aml. § 7-1. I virksomheter med 20–50 ansatte skal det opprettes AMU dersom en av partene krever det.

AMU er et **partssammensatt** organ med like mange representanter fra arbeidsgiver- og arbeidstakersiden. AMU skal blant annet:
- Behandle spørsmål om bedriftshelsetjeneste, vernetjeneste og internkontroll
- Gjennomgå rapporter om yrkessykdommer, arbeidsulykker og nestenulykker
- Behandle planer om nybygg, ominnredning og endringer i arbeidsprosesser som kan påvirke arbeidsmiljøet`
    },
    {
      id: 'rett1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er verneombudets sterkeste virkemiddel etter arbeidsmiljøloven?',
        options: [
          { id: 'a', text: 'Å anmelde arbeidsgiveren til politiet', isCorrect: false },
          { id: 'b', text: 'Å ilegge arbeidsgiveren tvangsmulkt', isCorrect: false },
          { id: 'c', text: 'Å stanse arbeidet dersom det foreligger umiddelbar fare for liv eller helse', isCorrect: true },
          { id: 'd', text: 'Å si opp arbeidsgiveren på vegne av de ansatte', isCorrect: false }
        ],
        solution: 'Verneombudets sterkeste virkemiddel er stanseretten etter arbeidsmiljøloven § 6-3. Dersom verneombudet mener det foreligger umiddelbar fare for arbeidstakernes liv eller helse som ikke kan avverges på annen måte, kan verneombudet stanse arbeidet inntil Arbeidstilsynet har tatt stilling til om arbeidet kan fortsette. Dette er et dramatisk virkemiddel som bare brukes i alvorlige situasjoner.'
      }
    },

    // --- BLOKK 3: Arbeidstilsynet og sanksjoner ---
    {
      id: 'rett1-5-4-text-3',
      type: 'text',
      content: `### Arbeidstilsynet

**Arbeidstilsynet** er statens tilsynsmyndighet for arbeidsmiljø og arbeidsforhold, jf. aml. § 18-1. Arbeidstilsynet fører tilsyn med at virksomheter etterlever arbeidsmiljøloven, og har omfattende virkemidler:

**Tilsynsvirksomhet:**
- Arbeidstilsynet kan gjennomføre **inspeksjoner** av arbeidsplasser – både varslede og uvarslede
- Tilsynsinspektørene har rett til å **inspisere** alle deler av virksomheten og kreve å få fremlagt dokumentasjon
- Arbeidstilsynet kan innhente opplysninger fra arbeidstakere, verneombud og andre

**Reaksjonsmidler (aml. kapittel 18):**

**Pålegg (§ 18-6):**
Arbeidstilsynet kan gi virksomheten **pålegg** om å rette opp brudd på arbeidsmiljøloven innen en fastsatt frist. Pålegget er juridisk bindende – arbeidsgiveren plikter å etterkomme det.

**Tvangsmulkt (§ 18-7):**
Dersom pålegget ikke etterkommes innen fristen, kan Arbeidstilsynet ilegge **tvangsmulkt** – en løpende dagbot som påløper inntil forholdet er rettet.

**Stansing (§ 18-8):**
Arbeidstilsynet kan stanse virksomheten helt eller delvis dersom det foreligger **umiddelbar fare** for arbeidstakernes liv eller helse.

**Overtredelsesgebyr (§ 18-10):**
For alvorlige eller gjentatte brudd kan Arbeidstilsynet ilegge **overtredelsesgebyr** – en administrativ sanksjon (bot) på inntil 15 ganger folketrygdens grunnbeløp (ca. 1,8 millioner kroner).

**Straffeansvar (aml. § 19-1):**
Ved forsettlige eller uaktsomme overtredelser av arbeidsmiljøloven kan arbeidsgiveren straffes med **bøter eller fengsel** inntil ett år. Ved særlig skjerpende omstendigheter kan straffen forhøyes til tre år.

### Arbeidsgiverens og arbeidstakerens plikter

**Arbeidsgiveren** har hovedansvaret for HMS (aml. § 2-1). Arbeidsgiveren skal sørge for at arbeidsmiljølovens krav etterleves, at det drives systematisk HMS-arbeid, og at arbeidstakerne medvirker.

**Arbeidstakeren** har også plikter (aml. § 2-3):
- Medvirke til gjennomføring av HMS-tiltak
- Bruke påbudt verneutstyr
- Melde fra om farlige forhold, feil eller mangler
- Avbryte arbeidet dersom det utgjør fare for liv eller helse
- Melde fra om trakassering eller diskriminering`
    },
    {
      id: 'rett1-5-4-example-2',
      type: 'example',
      title: 'Arbeidstilsynets reaksjoner',
      problem: 'Arbeidstilsynet gjennomfører tilsyn på en byggeplass og avdekker følgende: (1) Flere arbeidstakere bruker ikke fallsikring ved arbeid i høyden, (2) det mangler skriftlig risikovurdering, og (3) virksomheten har ikke verneombud til tross for at de har 12 ansatte. Hvilke reaksjoner kan Arbeidstilsynet iverksette?',
      solution: `**Arbeidstilsynets reaksjonsmuligheter:**

**Stansing (aml. § 18-8):**
Arbeid i høyden uten fallsikring utgjør **umiddelbar fare for liv og helse**. Arbeidstilsynet kan stanse arbeidet i høyden umiddelbart inntil fallsikring er på plass. Dette er det mest akutte tiltaket og vil trolig bli iverksatt på stedet.

**Pålegg (aml. § 18-6):**
Arbeidstilsynet vil gi pålegg om å:
1. Sikre at alle arbeidstakere bruker fallsikring ved arbeid i høyden (umiddelbart)
2. Utarbeide skriftlig risikovurdering (frist, f.eks. 2 uker)
3. Velge verneombud – virksomheten har 12 ansatte og plikter å ha verneombud (frist, f.eks. 4 uker)

**Tvangsmulkt (aml. § 18-7):**
Dersom påleggene ikke etterkommes innen fristen, kan Arbeidstilsynet ilegge daglig tvangsmulkt.

**Overtredelsesgebyr (aml. § 18-10):**
For alvorlige brudd – særlig manglende fallsikring på byggeplass – kan Arbeidstilsynet ilegge overtredelsesgebyr. Manglende fallsikring er en av de vanligste årsakene til dødsfall på byggeplasser, og Arbeidstilsynet reagerer strengt.

**Eventuelt straffeansvar (aml. § 19-1):**
Dersom det har skjedd en ulykke, eller dersom bruddene er forsettlige eller grovt uaktsomme, kan forholdet anmeldes til politiet for straffeforfølgning.

**Konklusjon:** Arbeidstilsynet vil sannsynligvis stanse arbeidet i høyden umiddelbart, gi pålegg med frister for de øvrige forholdene, og vurdere overtredelsesgebyr for den alvorligste overtredelsen (manglende fallsikring).`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-4-summary',
      type: 'text',
      content: `### Oppsummering

- **HMS** (helse, miljø og sikkerhet) er regulert i arbeidsmiljøloven og internkontrollforskriften. Arbeidsmiljøet skal være «fullt forsvarlig» – en dynamisk standard som utvikler seg med ny kunnskap.
- Arbeidsmiljøloven stiller krav til både det **fysiske** (støy, kjemikalier, sikkerhet) og det **psykososiale** (trakassering, stress, mobbing) arbeidsmiljøet.
- **Likestillings- og diskrimineringsloven** forbyr diskriminering og trakassering på grunnlag av kjønn, etnisitet, religion, funksjonsnedsettelse, seksuell orientering, alder mv.
- **Verneombudet** er arbeidstakernes representant i HMS-spørsmål og har rett til å **stanse arbeidet** ved umiddelbar fare for liv eller helse.
- **Arbeidsmiljøutvalg (AMU)** skal opprettes i virksomheter med 50 eller flere ansatte.
- **Arbeidstilsynet** fører tilsyn og kan reagere med pålegg, tvangsmulkt, stansing, overtredelsesgebyr og anmeldelse.
- **Arbeidsgiveren** har hovedansvaret for HMS, men **arbeidstakeren** har også plikter – blant annet å bruke verneutstyr og melde fra om farlige forhold.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Fra hvor mange ansatte er en virksomhet lovpålagt å ha verneombud?',
        options: [
          { id: 'a', text: '3 eller flere ansatte', isCorrect: false },
          { id: 'b', text: '5 eller flere ansatte', isCorrect: true },
          { id: 'c', text: '10 eller flere ansatte', isCorrect: false },
          { id: 'd', text: '20 eller flere ansatte', isCorrect: false }
        ],
        solution: 'Etter arbeidsmiljøloven § 6-1 skal alle virksomheter med 5 eller flere arbeidstakere ha verneombud. Verneombudet velges av og blant arbeidstakerne for to år av gangen. Også virksomheter med færre enn 5 ansatte kan avtale annen ordning, men Arbeidstilsynet kan pålegge dem å velge verneombud.'
      }
    },
    {
      id: 'rett1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ansatt på et verksted opplever at kollegaer gjentatte ganger kommer med nedsettende kommentarer om hans etniske bakgrunn. Lederen er klar over situasjonen, men gjør ingenting. Drøft arbeidsgiverens ansvar etter arbeidsmiljøloven og likestillings- og diskrimineringsloven, og forklar hvilke tiltak den ansatte kan iverksette.',
        hints: ['Vurder aml. § 4-3 om psykososialt arbeidsmiljø, likestillings- og diskrimineringslovens forbud mot trakassering, og arbeidsgiverens aktivitetsplikt.'],
        solution: `**Arbeidsgiverens ansvar:**

**Etter arbeidsmiljøloven:**
Aml. § 4-3 andre ledd krever at arbeidstaker ikke skal utsettes for trakassering eller annen utilbørlig opptreden. Gjentatte nedsettende kommentarer om etnisk bakgrunn er trakassering. Arbeidsgiveren plikter å forebygge og håndtere slik opptreden. At lederen er klar over situasjonen uten å gripe inn, utgjør et brudd på aml. § 2-1 (arbeidsgiverens HMS-ansvar).

**Etter likestillings- og diskrimineringsloven:**
Loven § 13 forbyr trakassering på grunn av blant annet etnisitet. Arbeidsgiveren har etter § 13 sjette ledd en plikt til å «forebygge og søke å hindre» trakassering. Arbeidsgiverens passivitet er i seg selv et brudd på loven.

**Aktivitetsplikten (ldl. § 26):**
Arbeidsgiveren har en generell aktivitetsplikt til å arbeide aktivt, målrettet og planmessig for å fremme likestilling og hindre diskriminering.

**Tiltak den ansatte kan iverksette:**
1. **Melde fra skriftlig** til ledelsen/HR med krav om at situasjonen håndteres
2. Kontakte **verneombudet** som har plikt til å påse at arbeidsmiljøet er forsvarlig
3. Melde saken til **Arbeidstilsynet**, som kan gi pålegg om tiltak
4. Klage til **Diskrimineringsnemnda**, som kan treffe vedtak om at trakasseringen er i strid med loven og pålegge arbeidsgiveren tiltak
5. Reise **erstatningssak** – arbeidsgiver kan bli erstatningsansvarlig for trakassering som arbeidsgiveren kjente til eller burde ha kjent til

**Konklusjon:** Arbeidsgiveren har brutt både arbeidsmiljøloven og likestillings- og diskrimineringsloven ved å unnlate å gripe inn mot etnisk trakassering. Passivitet i en slik situasjon er i seg selv et lovbrudd.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5: Ekteskapsloven
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_5: TextbookChapter = {
  id: 'rettslaere-1-5-5',
  courseId: 'rettslaere-1',
  chapterNumber: '5.5',
  title: 'Ekteskapsloven',
  description: 'Inngåelse av ekteskap, formuesordning og skilsmisse.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for ekteskapslovens hovedregler'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-5-intro',
      type: 'text',
      content: `## Ekteskapsloven

Ekteskap er en av de mest grunnleggende rettslige institusjonene i samfunnet. Når to personer gifter seg, inngår de ikke bare et personlig løfte – de trer inn i et omfattende rettslig rammeverk som regulerer alt fra formuesforholdet mellom ektefellene til hva som skjer ved samlivsbrudd.

Ekteskapet reguleres av **ekteskapsloven** (lov 4. juli 1991 nr. 47 om ekteskap). Loven har regler om vilkår for å inngå ekteskap, formuesordningen under ekteskapet, og oppløsning av ekteskapet ved separasjon og skilsmisse. I dette kapittelet ser vi nærmere på disse tre hovedtemaene.`
    },

    // --- BLOKK 1: Vilkår for å inngå ekteskap ---
    {
      id: 'rett1-5-5-def-1',
      type: 'definition',
      title: 'Vilkår for å inngå ekteskap',
      content: `**Ekteskapsvilkår (el. kapittel 1):**

For å inngå ekteskap i Norge må følgende vilkår være oppfylt:

1. **Alderskrav** (el. § 1a): Begge parter må være **fylt 18 år**. Det er ikke lenger mulig å få dispensasjon fra alderskravet – dette ble fjernet i 2018 for å hindre barneekteskap.

2. **Frivillighet** (el. § 1b): Ekteskapet må inngås av egen fri vilje. Et ekteskap som er inngått under tvang, kan kjennes ugyldig.

3. **Ekteskapshindringer**:
   - Ingen kan inngå ekteskap så lenge et tidligere ekteskap består (el. § 4) – **bigamiforbud**
   - Ekteskap mellom nære slektninger er forbudt (el. § 3)

4. **Prøving av ekteskapsvilkårene** (el. § 6): Før vielsen skal folkeregistermyndigheten (Skatteetaten) prøve at vilkårene er oppfylt. Partene får en **prøvingsattest** som er gyldig i fire måneder.

5. **Vigselsformer** (el. § 12): Ekteskap kan inngås ved **borgerlig vigsel** (ordfører, notarius publicus, tingretten) eller **kirkelig vigsel** (Den norske kirke eller godkjent trossamfunn). Begge vigselsformer har samme rettslige virkning.`
    },
    {
      id: 'rett1-5-5-text-1',
      type: 'text',
      content: `### Ekteskapets rettsvirkning

Når ekteskapet er inngått, oppstår en rekke rettslige virkninger:

**Underholdsplikt (el. § 38):** Ektefellene har gjensidig plikt til å bidra til familiens underhold etter evne. Dette kan skje ved inntekt, arbeid i hjemmet eller på annen måte.

**Disposisjonsrett (el. § 31):** Hver ektefelle **råder fritt** over det han eller hun eier. At man gifter seg, betyr altså ikke at den andre ektefellen får rett til å disponere over ens eiendeler. Råderetten er individuell – dette er et grunnleggende prinsipp i norsk ekteskapsrett.

**Ansvar for gjeld (el. § 40):** En ektefelle kan **ikke stifte gjeld med virkning for den andre**. Hver ektefelle hefter bare for sin egen gjeld. Unntak kan gjøres for gjeld til dekning av felles husholdning.

**Gjeldsavleggelse ved skifte (el. § 58):** Ved skilsmisse kan en ektefelle kreve fradrag for gjeld før deling av formuen (se nedenfor om formuesordning).`
    },
    {
      id: 'rett1-5-5-example-1',
      type: 'example',
      title: 'Ugyldig ekteskap?',
      problem: 'Sara (17 år) og Ali (20 år) ønsker å gifte seg. Saras foreldre samtykker, og de henvender seg til Skatteetaten for prøving av ekteskapsvilkårene. Kan de inngå ekteskap i Norge?',
      solution: `**Vurdering etter ekteskapsloven:**

Etter el. § 1a må begge parter være fylt 18 år for å inngå ekteskap. Sara er 17 år og oppfyller dermed ikke alderskravet.

**Dispensasjon?**
Før 2018 kunne fylkesmannen (nå statsforvalteren) gi dispensasjon fra alderskravet i særlige tilfeller. Denne muligheten ble **fjernet** ved lovendring i 2018. Bakgrunnen var ønsket om å gi et tydelig signal mot barneekteskap og bedre beskytte mindreårige.

**Foreldrenes samtykke:**
Foreldrenes samtykke er uten betydning – alderskravet på 18 år er absolutt og ufravikelig.

**Konklusjon:** Sara og Ali kan **ikke** inngå ekteskap i Norge før Sara har fylt 18 år. Skatteetaten vil avslå søknaden om prøvingsattest. Dersom de inngår ekteskap i utlandet, kan ekteskapet bli nektet anerkjent i Norge etter el. § 18a.`
    },

    // --- BLOKK 2: Formuesordning ---
    {
      id: 'rett1-5-5-def-2',
      type: 'definition',
      title: 'Formuesordningen mellom ektefeller',
      content: `**Felleseie og særeie:**

Ekteskapsloven bygger på et system med to formuesordninger:

1. **Felleseie (lovens normalordning):** Dersom ektefellene ikke har avtalt noe annet, har de **felleseie**. Dette betyr at den samlede formuen i utgangspunktet skal **deles likt** (likedeling) ved ekteskapets opphør (separasjon, skilsmisse eller død). Merk: Felleseie betyr *ikke* at ektefellene eier alt sammen – hver ektefelle eier og råder over sine eiendeler, men ved skifte deles nettoverdiene likt.

2. **Særeie (el. § 42):** Ektefellene kan ved **ektepakt** avtale at bestemte eiendeler eller hele formuen skal være den enes særeie. Særeie holdes **utenfor deling** ved ekteskapets opphør.

**Skjevdeling (el. § 59):** Selv ved felleseie kan en ektefelle kreve å holde utenfor delingen verdien av eiendeler som klart kan føres tilbake til midler ektefellen hadde **da ekteskapet ble inngått**, eller som er mottatt som **arv eller gave** fra andre enn ektefellen.`
    },
    {
      id: 'rett1-5-5-text-2',
      type: 'text',
      content: `### Ektepakt

En **ektepakt** er en avtale mellom ektefeller (eller kommende ektefeller) om formuesordningen. Ektepakten må oppfylle bestemte formkrav for å være gyldig (el. § 54):

- Ektepakten må være **skriftlig**
- Begge parter må **signere** ektepakten
- Ektepakten må **tinglyses** i Ektepaktregisteret hos Brønnøysundregistrene for å få virkning overfor ektefellenes kreditorer

**Hva kan reguleres i en ektepakt?**
- **Særeie**: Hele eller deler av formuen gjøres til særeie
- **Betinget særeie**: Særeie som bare gjelder ved skilsmisse, men ikke ved død
- **Gavesalg mellom ektefeller**: Gaver av større verdi mellom ektefeller krever ektepakt for å være gyldige (el. § 50)

**Begrensninger:** Ektepakten kan ikke inneholde bestemmelser som strider mot ekteskapslovens ufravikelige regler, for eksempel regler om barnas rettigheter eller underholdsplikten.`
    },
    {
      id: 'rett1-5-5-example-2',
      type: 'example',
      title: 'Skjevdeling ved skilsmisse',
      problem: 'Lars og Kari har vært gift i 12 år og skal skilles. Da de giftet seg, eide Lars en leilighet verdt 1 500 000 kr. Leiligheten er nå verdt 3 000 000 kr. Kari har arvet 500 000 kr fra sin bestemor under ekteskapet, og pengene står på en egen konto. Resten av formuen er opparbeidet i fellesskap. Kan Lars og Kari kreve skjevdeling?',
      solution: `**Vurdering etter el. § 59 (skjevdeling):**

**Skjevdelingsregelen** sier at en ektefelle kan kreve å holde utenfor delingen verdien av formue som klart kan føres tilbake til:
- Midler ektefellen hadde **da ekteskapet ble inngått**, eller
- Midler mottatt som **arv eller gave** fra andre enn ektefellen

**Lars' krav:**
Lars eide leiligheten verdt 1 500 000 kr da ekteskapet ble inngått. Han kan kreve skjevdeling for **verdien** han brakte inn – dvs. 1 500 000 kr. Verdistigningen (1 500 000 kr) er mer usikker: Høyesterett har i flere saker lagt til grunn at naturlig verdistigning på skjevdelingsmidler også kan kreves skjevdelt, forutsatt at verdien «klart kan føres tilbake» til de opprinnelige midlene. Dersom leiligheten er den samme og verdistigningen skyldes markedsutvikling, kan Lars trolig kreve hele 3 000 000 kr skjevdelt.

**Karis krav:**
Kari har mottatt 500 000 kr i **arv**, som står på egen konto. Arv fra andre enn ektefellen gir grunnlag for skjevdeling. Kari kan kreve 500 000 kr holdt utenfor delingen.

**Konklusjon:** Lars kan kreve skjevdeling for leilighetens verdi (opptil 3 000 000 kr). Kari kan kreve skjevdeling for arven (500 000 kr). Resten av formuen deles likt (felleseie/likedeling).`
    },

    // --- BLOKK 3: Separasjon og skilsmisse ---
    {
      id: 'rett1-5-5-def-3',
      type: 'definition',
      title: 'Separasjon og skilsmisse',
      content: `**Separasjon (el. § 20):** Hver ektefelle har en **ubetinget rett** til separasjon. Separasjon innvilges av statsforvalteren etter søknad. Man trenger ikke oppgi noen grunn. Separasjonen innebærer at ektefellene ikke lenger har plikt til å leve sammen, og formuesforholdet kan gjøres opp (skifte).

**Skilsmisse etter separasjon (el. § 21):** Etter **ett års separasjonstid** kan hver ektefelle kreve skilsmisse.

**Skilsmisse etter samlivsbrudd (el. § 22):** Dersom ektefellene har levd atskilt i minst **to år** på grunn av samlivsbrudd, kan hver ektefelle kreve skilsmisse – uten forutgående separasjon.

**Direkte skilsmisse (el. § 23):** Skilsmisse kan kreves umiddelbart dersom ektefellen har utsatt den andre eller barna for **overgrep** (vold, trusler, tvang).`
    },
    {
      id: 'rett1-5-5-text-3',
      type: 'text',
      content: `### Deling av formuen ved skilsmisse (skifte)

Når ekteskapet oppløses, skal formuen deles mellom ektefellene. Hovedreglene er:

**1. Likedeling av felleseie (el. § 58):**
Hver ektefelle legger det han eller hun eier (bruttoformuen) i «sin pott». Deretter gjøres det fradrag for gjeld. Nettoverdien deles likt.

**2. Skjevdeling (el. § 59):**
Verdier som kan føres tilbake til midler en ektefelle hadde før ekteskapet, eller som er mottatt som arv/gave, kan holdes utenfor delingen (se eksempel ovenfor).

**3. Særeie holdes utenfor (el. § 42):**
Eiendeler som er gjort til særeie gjennom ektepakt, deles ikke.

**4. Vederlagskrav (el. § 63 og § 73):**
Dersom en ektefelle har brukt felleseiemidler til å øke verdien av sine særeiemidler, eller har brukt midler på en utilbørlig måte som har redusert felleseiet, kan den andre ektefellen kreve vederlag.

**Boligen:** Etter el. § 66 og § 67 kan en ektefelle kreve å **overta felles bolig og innbo** dersom det foreligger «særlige grunner». Hensynet til barn og den som har størst behov for boligen, tillegges vekt.`
    },
    {
      id: 'rett1-5-5-example-3',
      type: 'example',
      title: 'Skilsmisseoppgjør',
      problem: 'Mona og Per skal skilles etter 8 års ekteskap. De har felleseie. Mona eier en bil verdt 200 000 kr og har bankinnskudd på 300 000 kr. Hun har studielån på 400 000 kr. Per eier en hytte (arvet fra sin far) verdt 1 200 000 kr og har bankinnskudd på 100 000 kr, men ingen gjeld. Hvordan deles formuen?',
      solution: `**Skifte etter ekteskapsloven:**

**Steg 1: Oversikt over formuen**
| | Mona | Per |
|---|---|---|
| Bil | 200 000 | – |
| Bankinnskudd | 300 000 | 100 000 |
| Hytte (arv) | – | 1 200 000 |
| **Bruttoformue** | **500 000** | **1 300 000** |
| Gjeld | -400 000 | 0 |
| **Nettoformue** | **100 000** | **1 300 000** |

**Steg 2: Skjevdeling**
Per har arvet hytta fra sin far. Etter el. § 59 kan han kreve skjevdeling for verdien av arven: **1 200 000 kr** holdes utenfor delingen.

**Steg 3: Likedeling av resterende felleseie**
- Monas netto til deling: 500 000 – 400 000 (gjeldsfradrag) = **100 000 kr**
- Pers netto til deling: 100 000 (bare bankinnskuddet, hytta er skjevdelt) = **100 000 kr**
- Samlet til deling: 100 000 + 100 000 = **200 000 kr**
- Hver får: **100 000 kr**

**Resultat:**
- Mona beholder bil + bankinnskudd (500 000), betaler sin gjeld (400 000), netto 100 000. Hun skal ha 100 000 fra delingen, men hennes andel er allerede 100 000 – hun får ingenting fra Per.
- Per beholder hytta (1 200 000, skjevdelt) + sin halvdel av likedelingspotten (100 000) = 1 300 000 kr.`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Vilkår for ekteskap:** Begge parter må være fylt 18 år. Ekteskapet må inngås frivillig. Bigami og ekteskap mellom nære slektninger er forbudt. Ekteskapsvilkårene prøves av Skatteetaten.

**Formuesordning:** Normalordningen er felleseie med likedeling ved skilsmisse. Ektefellene kan avtale særeie gjennom ektepakt. Skjevdelingsregelen (el. § 59) gir rett til å holde utenfor delingen verdier som stammer fra før ekteskapet eller fra arv/gave.

**Separasjon og skilsmisse:** Hver ektefelle har ubetinget rett til separasjon. Skilsmisse kan kreves etter ett års separasjon eller to års faktisk samlivsbrudd. Ved overgrep kan skilsmisse kreves umiddelbart.

**Skifte:** Felleseiet likedeles etter fradrag for gjeld og skjevdeling. Særeie holdes utenfor. Boligen kan kreves overtatt dersom det foreligger særlige grunner.`
    },

    // --- SAMLEOPPGAVER ---
    {
      id: 'rett1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er alderskravet for å inngå ekteskap i Norge etter lovendringen i 2018?',
        options: [
          { id: 'a', text: '16 år med foreldrenes samtykke', isCorrect: false },
          { id: 'b', text: '18 år, uten mulighet for dispensasjon', isCorrect: true },
          { id: 'c', text: '18 år, men fylkesmannen kan gi dispensasjon ned til 16 år', isCorrect: false },
          { id: 'd', text: '20 år for begge parter', isCorrect: false }
        ],
        solution: 'Etter el. § 1a må begge parter være fylt 18 år. Dispensasjonsadgangen ble fjernet i 2018 for å gi et tydelig signal mot barneekteskap. Alderskravet er nå absolutt og ufravikelig, uavhengig av foreldrenes samtykke.'
      }
    },
    {
      id: 'rett1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva innebærer skjevdelingsregelen i el. § 59?',
        options: [
          { id: 'a', text: 'At all formue deles likt uansett opprinnelse', isCorrect: false },
          { id: 'b', text: 'At verdier som stammer fra før ekteskapet eller arv/gave kan holdes utenfor delingen', isCorrect: true },
          { id: 'c', text: 'At den rikeste ektefellen må gi halvparten av alt til den andre', isCorrect: false },
          { id: 'd', text: 'At særeie automatisk blir felleseie etter 10 års ekteskap', isCorrect: false }
        ],
        solution: 'Skjevdelingsregelen i el. § 59 gir en ektefelle rett til å holde utenfor delingen verdien av formue som klart kan føres tilbake til midler vedkommende hadde da ekteskapet ble inngått, eller som er mottatt som arv eller gave fra andre enn ektefellen. Regelen er et viktig unntak fra hovedregelen om likedeling.'
      }
    },
    {
      id: 'rett1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom felleseie og særeie. Hvordan opprettes særeie, og hvilke formkrav gjelder?',
        hints: ['Drøft el. §§ 42 og 54 om ektepakt, og forklar hva som skjer med felleseie og særeie ved skilsmisse.'],
        solution: `**Felleseie (lovens normalordning):**
Felleseie innebærer at ektefellenes samlede formue i utgangspunktet skal likedeles ved ekteskapets opphør. Hver ektefelle eier og råder over sine egne eiendeler under ekteskapet, men nettoverdiene deles likt ved skifte. Felleseie er lovens normalordning – det gjelder automatisk dersom ektefellene ikke har avtalt noe annet.

**Særeie (el. § 42):**
Særeie innebærer at bestemte eiendeler eller hele formuen holdes utenfor deling ved skilsmisse. Ektefellen beholder særeiet i sin helhet.

**Opprettelse av særeie:**
Særeie opprettes gjennom **ektepakt** (el. § 42). Ektepakten må oppfylle strenge formkrav etter el. § 54:
- Skriftlig form
- Begge ektefellers underskrift
- Tinglysing i Ektepaktregisteret (Brønnøysundregistrene) for virkning overfor kreditorer

Særeie kan også følge av bestemmelse fra **giver eller arvelater** – for eksempel kan en bestemor i testamentet bestemme at arven skal være mottakerens særeie.

**Hovedforskjellen:** Felleseie deles likt ved skilsmisse, mens særeie beholdes udelt av den ektefellen som eier det.`
      }
    },
    {
      id: 'rett1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Anne og Erik har vært gift i 15 år og har felleseie. Anne eide en hytte verdt 800 000 kr da de giftet seg (nå verdt 1 600 000 kr). Erik har spart opp 600 000 kr i bankinnskudd under ekteskapet, og de har felles bolig verdt 4 000 000 kr med 2 000 000 kr i felles gjeld. Gjennomfør et skifte mellom Anne og Erik.',
        hints: ['Vurder skjevdeling for Annes hytte, gjeldsfradrag for felles gjeld, og likedeling av resterende felleseie.'],
        solution: `**Skifte mellom Anne og Erik:**

**Steg 1: Oversikt over eiendeler og gjeld**
| | Anne | Erik |
|---|---|---|
| Hytte (eid før ekteskapet) | 1 600 000 | – |
| Bolig (felles) | 2 000 000 | 2 000 000 |
| Bankinnskudd | – | 600 000 |
| Gjeld (felles boliglån) | -1 000 000 | -1 000 000 |

(Bolig og gjeld fordeles likt da den er felles.)

**Steg 2: Skjevdeling (el. § 59)**
Annes hytte var verdt 800 000 kr ved ekteskapets inngåelse. Verdistigningen (800 000 kr) kan trolig også skjevdeles dersom den skyldes naturlig prisstigning. Anne krever **1 600 000 kr** skjevdelt.

**Steg 3: Likedeling av resterende felleseie**
- Annes netto til deling: 2 000 000 (boligandel) – 1 000 000 (gjeld) = **1 000 000 kr**
- Eriks netto til deling: 2 000 000 (boligandel) + 600 000 (bank) – 1 000 000 (gjeld) = **1 600 000 kr**
- Samlet til deling: 1 000 000 + 1 600 000 = **2 600 000 kr**
- Hver får: **1 300 000 kr**

**Steg 4: Resultat**
- Anne: Hytte 1 600 000 (skjevdelt) + 1 300 000 (likedelingsandel) = **2 900 000 kr**
- Erik: 1 300 000 (likedelingsandel) = **1 300 000 kr**`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6: Samboerskap
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_6: TextbookChapter = {
  id: 'rettslaere-1-5-6',
  courseId: 'rettslaere-1',
  chapterNumber: '5.6',
  title: 'Samboerskap',
  description: 'Samboeres rettigheter, husstandsfellesskap og samboerkontrakt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'sammenligne ekteskap og samboerskap rettslig'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-6-intro',
      type: 'text',
      content: `## Samboerskap

I dag velger stadig flere par å leve sammen uten å gifte seg. Omtrent 25 prosent av alle par i Norge er samboere, og andelen er særlig høy blant yngre aldersgrupper. Mange tror at samboere har samme rettslige beskyttelse som ektefeller – dette er en utbredt **misforståelse**.

I motsetning til ekteskap finnes det **ingen egen samboerlov** i Norge. Samboeres rettigheter er spredt i ulike lover og er vesentlig svakere enn ektefellers. De viktigste lovene er **husstandsfellesskapsloven** (lov 4. juli 1991 nr. 45) og bestemmelser i arveloven, folketrygdloven og enkelte andre lover. I dette kapittelet sammenligner vi samboerskap med ekteskap og ser på hvordan samboere kan sikre seg rettslig.`
    },

    // --- BLOKK 1: Rettslig regulering ---
    {
      id: 'rett1-5-6-def-1',
      type: 'definition',
      title: 'Samboerskap – rettslig definisjon',
      content: `**Samboerskap** er i norsk rett definert ulikt i forskjellige lover. Det finnes ingen enhetlig lovdefinisjon. Noen eksempler:

- **Arveloven § 2** definerer samboer som en person som «lever i et ekteskapslignende forhold» og «har felles folkeregistrert adresse eller på annen måte kan dokumentere at de har hatt felles husholdning».
- **Folketrygdloven § 1-5** definerer samboere som to personer som lever sammen og har eller har hatt felles barn, eller som tidligere har vært gift med hverandre.
- **Husstandsfellesskapsloven § 1** omfatter «to eller flere ugifte personer over 18 år som har hatt felles husstand» i minst to år, eller som har, har hatt eller venter barn sammen.

**Felles trekk:** Samboerskap forutsetter et **parforhold** med **felles husholdning**. Rent bofellesskap (kollektiv, venner som deler leilighet) er ikke samboerskap i rettslig forstand.`
    },
    {
      id: 'rett1-5-6-text-1',
      type: 'text',
      content: `### Forskjellen mellom ekteskap og samboerskap

De rettslige forskjellene mellom ekteskap og samboerskap er betydelige:

| Tema | Ektefeller | Samboere |
|---|---|---|
| **Formuesordning** | Felleseie med likedeling ved skilsmisse | Ingen automatisk deling – hver beholder sitt |
| **Underholdsplikt** | Gjensidig underholdsplikt (el. § 38) | Ingen lovfestet underholdsplikt |
| **Arverett** | Lovbestemt arv (1/4, min. 4G) + uskifterett | Begrenset arverett (4G) bare hvis felles barn |
| **Skjevdeling** | Lovfestet rett til skjevdeling | Ingen tilsvarende regel |
| **Boligrett ved samlivsbrudd** | Kan kreve å overta felles bolig (el. § 66) | Begrenset rett etter husstandsfellesskapsloven |
| **Pensjon** | Rett til etterlattepensjon | Begrenset, avhenger av ordningen |
| **Gjeldsansvar** | Hver hefter for sin gjeld | Hver hefter for sin gjeld |

Den viktigste forskjellen er at samboere **ikke har noen automatisk rett til deling** av formuen ved samlivsbrudd. Hovedregelen er at hver samboer beholder det han eller hun eier. Dette kan føre til svært urettferdige resultater dersom den ene har bidratt indirekte (for eksempel ved å ta hovedansvaret for barn og hjem) uten å stå som eier.`
    },
    {
      id: 'rett1-5-6-example-1',
      type: 'example',
      title: 'Samboere og bolig ved samlivsbrudd',
      problem: 'Lise og Jonas har vært samboere i 6 år og har to felles barn. Jonas eier boligen de bor i, som er verdt 3 500 000 kr. Lise har jobbet deltid og tatt hovedansvaret for barna. De har ingen samboerkontrakt. Nå går de fra hverandre. Hvilke rettigheter har Lise?',
      solution: `**Vurdering av Lises rettigheter:**

**1. Eierforhold – utgangspunkt:**
Jonas eier boligen alene. Siden samboere ikke har felleseie, er utgangspunktet at Jonas beholder hele boligen. Lise har ingen automatisk rett til halvparten slik hun ville hatt som ektefelle.

**2. Husstandsfellesskapsloven:**
Etter husstandsfellesskapsloven § 3 kan en samboer kreve rett til å **overta** eller **fortsette å leie** felles bolig dersom «sterke grunner taler for det». Hensynet til barna er relevant. Lise kan ikke kreve å få boligen gratis, men hun kan få rett til å overta den mot å betale markedsverdi.

**3. Sameierettigheter (ulovfestet rett):**
Selv om bare Jonas står som eier, kan Lise ha opparbeidet en **sameieandel** gjennom ulovfestede regler om sameie. Høyesterett har i flere saker (bl.a. Rt. 1978 s. 1352 og Rt. 1984 s. 497) anerkjent at indirekte bidrag – som husarbeid og barnepass – kan gi grunnlag for sameierett i felles bolig. Det kreves at bidraget har vært av «vesentlig art» og at det har muliggjort den andres investering.

**4. Vederlagskrav:**
Dersom Lise ikke anses som sameier, kan hun ha et **vederlagskrav** basert på ulovfestede berikelsesprinsipper. Kravet er at Jonas har blitt urimelig beriket på Lises bekostning.

**Konklusjon:** Lise kan ha opparbeidet sameierett i boligen gjennom sine indirekte bidrag (barnepass, husarbeid i 6 år). Resultatet er usikkert og avhenger av en helhetsvurdering. En samboerkontrakt ville ha forhindret denne usikkerheten.`
    },

    // --- BLOKK 2: Samboerkontrakt ---
    {
      id: 'rett1-5-6-text-2',
      type: 'text',
      content: `### Samboerkontrakt

Fordi lovgivningen gir samboere svak rettslig beskyttelse, er det viktig å inngå en **samboerkontrakt** (samboeravtale). En samboerkontrakt er en skriftlig avtale mellom samboerne om økonomiske forhold.

**Hva bør en samboerkontrakt regulere?**

1. **Eierforhold:** Hvem eier hva – bolig, bil, innbo, sparepenger?
2. **Utgiftsfordeling:** Hvordan fordeles løpende utgifter (husleie/lån, mat, barnekostnader)?
3. **Verdifordeling ved samlivsbrudd:** Hvordan skal verdiene fordeles dersom samboerne går fra hverandre?
4. **Gjeld:** Hvem er ansvarlig for hvilken gjeld?
5. **Forsikring:** Har samboerne tegnet livsforsikring til fordel for hverandre?

**Formkrav:**
Det er ingen lovbestemte formkrav til en samboerkontrakt – den trenger verken tinglysing eller vitner for å være gyldig mellom partene. Det anbefales likevel at kontrakten er **skriftlig**, **datert** og **signert** av begge parter. Dersom kontrakten gir den ene samboeren rettigheter i den andres faste eiendom, bør den tinglyses for å få rettsvern.

**Begrensninger:**
En samboerkontrakt kan ikke gi samboerne bedre rettigheter enn det lovgivningen åpner for. For eksempel kan samboerne ikke avtale seg bort fra barnas rettigheter etter barneloven.`
    },
    {
      id: 'rett1-5-6-example-2',
      type: 'example',
      title: 'Arverett for samboere',
      problem: 'Henrik og Camilla har vært samboere i 10 år og har felles barn. Henrik dør uten å ha skrevet testament. Han etterlater seg en formue på 2 000 000 kr. Hvilke arverettigheter har Camilla?',
      solution: `**Vurdering etter arveloven:**

**Samboere med felles barn:**
Etter arveloven § 12 har en gjenlevende samboer med felles barn rett til en arv tilsvarende **4 ganger grunnbeløpet i folketrygden** (4G). Per 2024 er G = 124 028 kr, slik at 4G = ca. 496 112 kr.

**Sammenligning med ektefelle:**
En ektefelle ville etter arveloven § 8 ha arvet **1/4 av formuen**, minimum 4G. Med en formue på 2 000 000 kr ville en ektefelle arvet 500 000 kr (1/4).

**Uskifterett:**
Etter arveloven § 32 har samboere med felles barn rett til å sitte i **uskiftet bo** med felles bolig og innbo, samt bil og fritidseiendom som har tjent til felles bruk. Denne uskifteretten er snevrere enn ektefellers uskifterett, som omfatter hele formuen.

**Camillas arv:**
- Camilla arver **4G** (ca. 496 112 kr) etter arveloven § 12
- Hun kan velge å sitte i **uskiftet bo** med felles bolig og innbo etter § 32
- Resten av formuen (ca. 1 503 888 kr) fordeles til Henriks øvrige arvinger (barna)

**Hadde de vært gift:**
Camilla ville arvet 1/4 = 500 000 kr, med full uskifterett over hele formuen.

**Samboere uten felles barn:**
Uten felles barn har samboere **ingen arverett** etter loven med mindre det er opprettet testament. Henrik kan i testament gi Camilla arv inntil 4G uten å krenke barnas pliktdel.`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Ingen samboerlov:** Norge har ingen egen samboerlov. Samboeres rettigheter er spredt i ulike lover og er vesentlig svakere enn ektefellers.

**Formuesforhold:** Samboere har ikke felleseie. Ved samlivsbrudd beholder hver sin formue. Sameierett kan oppstå gjennom direkte eller indirekte bidrag (ulovfestet rett).

**Arverett:** Samboere med felles barn har rett til arv tilsvarende 4G og begrenset uskifterett. Samboere uten felles barn har ingen lovfestet arverett.

**Husstandsfellesskapsloven:** Gir begrenset rett til å overta felles bolig ved samlivsbrudd dersom «sterke grunner» taler for det.

**Samboerkontrakt:** Viktigste sikringsmekanisme for samboere. Bør regulere eierforhold, utgiftsfordeling og verdifordeling ved samlivsbrudd.`
    },

    // --- SAMLEOPPGAVER ---
    {
      id: 'rett1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om samboerskap er korrekt?',
        options: [
          { id: 'a', text: 'Samboere har automatisk felleseie etter 5 års samboerskap', isCorrect: false },
          { id: 'b', text: 'Samboere har gjensidig underholdsplikt etter husstandsfellesskapsloven', isCorrect: false },
          { id: 'c', text: 'Samboere med felles barn har begrenset arverett og uskifterett', isCorrect: true },
          { id: 'd', text: 'Samboere har lik arverett som ektefeller etter 2 års samboerskap', isCorrect: false }
        ],
        solution: 'Etter arveloven § 12 har samboere med felles barn rett til arv tilsvarende 4G og begrenset uskifterett etter § 32. Samboere har verken automatisk felleseie eller underholdsplikt, og arveretten er vesentlig svakere enn ektefellers.'
      }
    },
    {
      id: 'rett1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Etter husstandsfellesskapsloven kan en samboer kreve rett til å overta felles bolig ved samlivsbrudd. Hva er vilkåret?',
        options: [
          { id: 'a', text: 'At samboerforholdet har vart i minst 2 år', isCorrect: false },
          { id: 'b', text: 'At sterke grunner taler for det', isCorrect: true },
          { id: 'c', text: 'At samboerne har felles barn', isCorrect: false },
          { id: 'd', text: 'At boligen er kjøpt med felles midler', isCorrect: false }
        ],
        solution: 'Etter husstandsfellesskapsloven § 3 kan en samboer kreve rett til å overta eller fortsette å leie felles bolig dersom «sterke grunner taler for det». Hensynet til barn er et viktig moment, men det er ikke et absolutt vilkår. Samboeren må normalt betale markedsverdi for overtakelsen.'
      }
    },
    {
      id: 'rett1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Lag en oversikt over de viktigste rettslige forskjellene mellom ekteskap og samboerskap. Drøft hvilke konsekvenser forskjellene har for den svakeste parten i forholdet.',
        hints: ['Sammenlign formuesordning, arverett, underholdsplikt og rettigheter ved samlivsbrudd.'],
        solution: `**Oversikt over rettslige forskjeller:**

| Tema | Ekteskap | Samboerskap |
|---|---|---|
| Formuesordning | Felleseie med likedeling | Ingen – hver beholder sitt |
| Underholdsplikt | Gjensidig plikt (el. § 38) | Ingen lovfestet plikt |
| Arverett | 1/4, min. 4G + full uskifterett | 4G (bare med felles barn), begrenset uskifte |
| Bolig ved brudd | Kan overta bolig (el. § 66–67) | Begrenset rett (husstandsfellesskapsloven) |
| Pensjon | Full etterlattepensjon | Begrenset |
| Skjevdeling | Lovfestet rett (el. § 59) | Ingen tilsvarende regel |

**Konsekvenser for den svakeste parten:**
Den svakeste parten i et samboerforhold – typisk den som har arbeidet deltid eller vært hjemme med barn – er vesentlig dårligere stilt enn en tilsvarende ektefelle. Ved samlivsbrudd har vedkommende ingen rett til likedeling, ingen rett til skjevdeling, og ingen underholdsplikt fra den andre. Resultatet kan bli at en samboer som har bidratt med barnepass og husarbeid i mange år, sitter igjen med lite eller ingenting.

For å sikre seg bør samboere opprette samboerkontrakt og gjensidig testament. Dette er spesielt viktig for samboere uten felles barn, som ikke har noen lovfestet arverett.`
      }
    },
    {
      id: 'rett1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Maria og Thomas har vært samboere i 8 år uten felles barn. Thomas eier boligen de bor i (verdt 4 000 000 kr). Maria har betalt halvparten av alle boligutgifter (lån, strøm, vedlikehold) i hele perioden. De har ingen samboerkontrakt. Thomas dør. Drøft Marias rettslige stilling.',
        hints: ['Vurder arveloven, husstandsfellesskapsloven, og ulovfestede regler om sameie.'],
        solution: `**Marias rettslige stilling:**

**1. Arverett:**
Maria og Thomas har ikke felles barn. Etter arveloven § 12 har samboere uten felles barn **ingen arverett** med mindre Thomas har opprettet testament. Siden det ikke foreligger testament, arver Maria ingenting etter loven.

**2. Uskifterett:**
Etter arveloven § 32 har bare samboere **med felles barn** rett til uskifte. Maria har ingen uskifterett.

**3. Husstandsfellesskapsloven:**
Etter husstandsfellesskapsloven § 2 har Maria rett til å **overta** eller **fortsette å leie** felles bolig ved samboerens død dersom «sterke grunner taler for det». Hun må i så fall betale markedsverdi. Etter 8 års samboerskap og uten egen bolig kan Maria ha sterke grunner.

**4. Sameierett (ulovfestet):**
Maria har betalt halvparten av alle boligutgifter i 8 år. Etter ulovfestede regler om sameie kan direkte økonomiske bidrag til en annen persons eiendom gi grunnlag for sameierett. Marias bidrag til lån og vedlikehold er **direkte bidrag** som taler sterkt for at hun har opparbeidet en sameieandel – trolig i nærheten av 50 %. Dette kravet rettes mot Thomas' dødsbo.

**Konklusjon:**
Maria har trolig opparbeidet en betydelig sameieandel i boligen gjennom sine direkte økonomiske bidrag. Sameieandelen er hennes eiendom og inngår ikke i Thomas' dødsbo. I tillegg kan hun kreve boligovertakelse etter husstandsfellesskapsloven. **Situasjonen viser hvor viktig samboerkontrakt og testament er** – uten sameierettspørsmålet ville Maria stått helt uten rettigheter.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.7: Arveloven
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_7: TextbookChapter = {
  id: 'rettslaere-1-5-7',
  courseId: 'rettslaere-1',
  chapterNumber: '5.7',
  title: 'Arveloven',
  description: 'Legalarv, pliktdelsarv, testament og uskiftet bo.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for arvelovens hovedregler'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-7-intro',
      type: 'text',
      content: `## Arveloven

Hva skjer med eiendelene dine når du dør? Hvem arver hva, og kan du selv bestemme fordelingen? Arveretten er et sentralt rettsområde som berører alle – før eller senere.

Arveloven (lov 14. juni 2019 nr. 21 om arv og dødsboskifte) trådte i kraft 1. januar 2021 og erstattet den gamle arveloven fra 1972. Den nye loven viderefører mange av de tidligere reglene, men inneholder også viktige endringer – blant annet for samboeres arverett og pliktdelsreglene.

I dette kapittelet gjennomgår vi de fire hovedtemaene i arveretten: **legalarv** (arv etter loven), **pliktdelsarv** (barnas beskyttede arv), **testamentsarv** (arv etter testament) og **uskiftet bo** (den gjenlevendes rett til å utsette arveoppgjøret).`
    },

    // --- BLOKK 1: Legalarv ---
    {
      id: 'rett1-5-7-def-1',
      type: 'definition',
      title: 'Legalarv – arverekkefølgen',
      content: `**Legalarv** (arv etter loven) er den arvefordelingen som gjelder når avdøde ikke har opprettet testament, eller for den delen av formuen som testamentet ikke dekker.

Arveloven bygger på et **arveklassesystem** med tre klasser:

**Første arveklasse (arveloven § 4):**
Avdødes **livsarvinger** (barn, barnebarn, oldebarn osv.). Barna arver likt. Er et barn dødt, trer barnets barn inn i dets sted (istedenprinsippet).

**Andre arveklasse (arveloven § 5):**
Avdødes **foreldre** og deres etterkommere (dvs. avdødes søsken, nieser, nevøer). Foreldrene arver likt. Er en forelder død, arver dennes etterkommere.

**Tredje arveklasse (arveloven § 6):**
Avdødes **besteforeldre** og deres etterkommere (dvs. avdødes onkler, tanter, søskenbarn). Arven deles likt mellom de to besteforeldreparene.

**Ektefellens arverett (arveloven § 8):**
Ektefellen arver ved siden av arveklassene:
- Ved siden av **første arveklasse**: 1/4 av arven, minimum 4G
- Ved siden av **andre arveklasse**: 1/2 av arven, minimum 6G
- Uten arvinger i første og andre klasse: **hele arven**

**Samboerens arverett (arveloven § 12):**
Samboer med felles barn arver 4G. Samboer uten felles barn har ingen legalarverett.`
    },
    {
      id: 'rett1-5-7-text-1',
      type: 'text',
      content: `### Nærmere om arverekkefølgen

Arveloven bygger på to viktige prinsipper:

**1. Nærhetssprinsippet:** Arvinger i en nærmere klasse utelukker arvinger i en fjernere klasse. Har avdøde barn (første klasse), arver ikke foreldrene (andre klasse).

**2. Representasjonsprinsippet (istedenprinsippet):** Dersom en arving i en klasse er død, trer dennes etterkommere inn i vedkommendes sted. Er et barn av avdøde selv dødt, arver barnets barn (avdødes barnebarn).

**Eksempel på arverekkefølge:**
Per dør og etterlater seg to barn: Anna og Erik. Anna er i live, men Erik døde for tre år siden. Erik hadde to barn (Pers barnebarn): Sofie og Lars.

Arven fordeles slik:
- Anna arver 1/2
- Sofie arver 1/4 (Eriks halvdel deles mellom hans barn)
- Lars arver 1/4

Hadde Per vært gift, ville ektefellen først arvet sin andel (1/4), og resten ville blitt fordelt som ovenfor.

**Arv til staten:**
Dersom avdøde ikke har arvinger etter loven eller testament, går arven til **staten** (arveloven § 76). Staten kan i særlige tilfeller gi hele eller deler av arven til noen som stod avdøde nær.`
    },
    {
      id: 'rett1-5-7-example-1',
      type: 'example',
      title: 'Arvefordeling med ektefelle og barn',
      problem: 'Karin dør og etterlater seg ektemannen Ola og tre barn. Karins nettoformue er 3 200 000 kr. Hun har ikke opprettet testament. Hvordan fordeles arven?',
      solution: `**Arvefordeling etter arveloven:**

**Ektefellens arv (§ 8):**
Ola (ektefellen) arver **1/4** av Karins formue ved siden av livsarvinger (første arveklasse).
- Olas arv: 3 200 000 x 1/4 = **800 000 kr**

**Barnas arv (§ 4):**
Resten fordeles likt mellom de tre barna:
- Til deling: 3 200 000 - 800 000 = 2 400 000 kr
- Hvert barn arver: 2 400 000 / 3 = **800 000 kr**

**Kontroll mot minstearv:**
Ola har krav på minimum 4G (ca. 496 112 kr per 2024). Han arver 800 000 kr, som er mer enn 4G. Minstearven er derfor ikke aktuell.

**Resultat:**
| Arving | Arv |
|---|---|
| Ola (ektefelle) | 800 000 kr |
| Barn 1 | 800 000 kr |
| Barn 2 | 800 000 kr |
| Barn 3 | 800 000 kr |
| **Totalt** | **3 200 000 kr** |`
    },

    // --- BLOKK 2: Pliktdelsarv ---
    {
      id: 'rett1-5-7-def-2',
      type: 'definition',
      title: 'Pliktdelsarv',
      content: `**Pliktdelsarv** er den delen av arven som er forbeholdt avdødes **livsarvinger** (barn, barnebarn osv.) og som arvelateren **ikke** kan råde over ved testament.

**Pliktdelens størrelse (arveloven § 50):**
- Pliktdelen utgjør **2/3** av arven etter arvelateren
- Pliktdelen er likevel begrenset oppad til **15 G** (15 ganger grunnbeløpet) per barn (eller hvert barns linje)
- Med G = 124 028 kr (2024) tilsvarer dette ca. **1 860 420 kr** per barnelinje

**Endring fra gammel lov:**
I den gamle arveloven (1972) var pliktdelen begrenset til 1 000 000 kr per barnelinje. Den nye arveloven (2019) hevet grensen til 15 G, noe som gir en sterkere beskyttelse av barnas arverett.

**Hva betyr pliktdelen i praksis?**
Arvelateren kan fritt disponere over **1/3** av formuen ved testament (friarven). De resterende 2/3 (pliktdelen) er «låst» til livsarvingene. Arvelateren kan likevel bestemme at pliktdelen skal fordeles ulikt mellom barna, så lenge hvert barn minst får sin lovmessige andel.`
    },
    {
      id: 'rett1-5-7-example-2',
      type: 'example',
      title: 'Pliktdel og testament',
      problem: 'Ingrid har to barn og en nettoformue på 9 000 000 kr. Hun ønsker å testamentere 5 000 000 kr til Røde Kors. Kan hun gjøre det?',
      solution: `**Vurdering etter arveloven §§ 50-51:**

**Beregning av pliktdelen:**
- Pliktdel: 2/3 x 9 000 000 = **6 000 000 kr**
- Per barn: 6 000 000 / 2 = **3 000 000 kr** per barnelinje
- Sjekk mot 15G-grensen: 15 x 124 028 = ca. **1 860 420 kr**
- Hvert barns pliktdel begrenses til **1 860 420 kr** (15G-grensen slår inn)
- Total pliktdel: 2 x 1 860 420 = **3 720 840 kr**

**Friarv:**
- Friarv: 9 000 000 - 3 720 840 = **5 279 160 kr**

**Kan Ingrid testamentere 5 000 000 kr til Røde Kors?**
Ja! Friarven er ca. 5 279 160 kr, som er mer enn 5 000 000 kr. Testamentet krenker ikke pliktdelen.

**Fordeling:**
| Mottaker | Beløp |
|---|---|
| Barn 1 (pliktdel) | 1 860 420 kr |
| Barn 2 (pliktdel) | 1 860 420 kr |
| Røde Kors (testament) | 5 000 000 kr |
| Resterende friarv | 279 160 kr |

**Uten 15G-grensen** ville pliktdelen vært 3 000 000 kr per barn (totalt 6 000 000 kr), og friarven bare 3 000 000 kr – Ingrid kunne da **ikke** gitt 5 000 000 kr til Røde Kors. 15G-grensen gir altså arvelatere med stor formue større testasjonsfrihet.`
    },

    // --- BLOKK 3: Testament ---
    {
      id: 'rett1-5-7-def-3',
      type: 'definition',
      title: 'Testament – formkrav og innhold',
      content: `**Testament** er en skriftlig erklæring om hvordan arven skal fordeles etter arvelaterens død. Testamentet gir arvelateren mulighet til å fravike lovens normalordning (legalarven) innenfor pliktdelsreglenes grenser.

**Formkrav (arveloven § 42):**
Testamentet må oppfylle strenge formkrav for å være gyldig:

1. **Skriftlighet**: Testamentet må være skriftlig
2. **Underskrift**: Arvelateren må underskrive testamentet
3. **To vitner**: To vitner som er til stede sammen, må bevitne underskriften. Vitnene må vite at dokumentet er et testament, men trenger ikke kjenne innholdet
4. **Vitnenes habilitet**: Vitnene kan ikke selv være tilgodesett i testamentet, og heller ikke være i nær slekt med eller gift med noen som er tilgodesett (arveloven § 44)

**Nødtestament (arveloven § 46):**
I nødssituasjoner (sykdom, ulykke) der det er umulig å opprette testament med ordinære formkrav, kan arvelateren opprette testament muntlig for to vitner, eller skriftlig uten vitner. Nødtestamentet bortfaller dersom arvelateren overlever og det går **tre måneder** uten at ordinært testament opprettes.`
    },
    {
      id: 'rett1-5-7-text-2',
      type: 'text',
      content: `### Ugyldighet og tolkning av testament

Et testament kan kjennes ugyldig av flere grunner:

**Formfeil (arveloven § 42-44):**
Dersom formkravene ikke er oppfylt – for eksempel manglende vitner, inhabile vitner, eller manglende underskrift – er testamentet ugyldig. Formkravene er strenge, og domstolene er lite tilbøyelige til å se bort fra mangler.

**Tvang, svik eller utilbørlig påvirkning (arveloven § 45):**
Et testament som er opprettet under tvang eller utilbørlig påvirkning, kan kjennes ugyldig. Tilsvarende gjelder dersom arvelateren er blitt forledet (svik).

**Manglende testamentsevne:**
Arvelateren må ha vært over 18 år og ved sine fulle fem (hatt rettslig handleevne) da testamentet ble opprettet. Et testament skrevet av en person med langtkommen demens kan kjennes ugyldig.

**Tolkning av testament (arveloven § 57):**
Et testament skal tolkes i samsvar med det arvelateren **mente**. Dersom ordlyden er uklar, kan ytre omstendigheter trekkes inn for å klarlegge arvelaterens vilje.

**Viktig:** Et testament som krenker pliktdelsreglene, er **ikke ugyldig** – men det settes til side i den grad det krenker pliktdelen. Resten av testamentet opprettholdes.`
    },
    {
      id: 'rett1-5-7-example-3',
      type: 'example',
      title: 'Ugyldig testament?',
      problem: 'Gunnar (82 år) har nylig fått diagnosen begynnende demens. Han skriver et testament der han testamenterer hele sin formue til sin nye venn Frank, og utelukker sine to barn helt. Testamentet er underskrevet av Gunnar og bevitnet av Frank og Franks kone. Er testamentet gyldig?',
      solution: `**Vurdering av testamentets gyldighet:**

**1. Vitnenes habilitet (arveloven § 44):**
Frank er selv tilgodesett i testamentet. Etter § 44 kan et vitne **ikke** være tilgodesett i testamentet, og ektefellen til en tilgodesett er heller ikke habil som vitne. Både Frank og Franks kone er dermed **inhabile** som vitner. Testamentet lider av en **formfeil** og er ugyldig.

**2. Testamentsevne:**
Gunnar har begynnende demens. Spørsmålet er om han hadde tilstrekkelig **mental kapasitet** til å forstå innholdet i testamentet da det ble skrevet. Begynnende demens medfører ikke automatisk at testamentsevnen mangler, men dersom sykdommen hadde utviklet seg vesentlig, kan testamentet kjennes ugyldig.

**3. Utilbørlig påvirkning (arveloven § 45):**
Omstendighetene – nytt bekjentskap, begynnende demens, total utelukkelse av barna – kan indikere utilbørlig påvirkning fra Frank.

**4. Pliktdelsreglene (arveloven § 50):**
Selv om testamentet hadde vært gyldig, krenker det pliktdelsreglene. Barna har krav på 2/3 av arven (begrenset oppad til 15G per barn). Testamentet ville blitt satt til side i den grad det krenker pliktdelen.

**Konklusjon:** Testamentet er **ugyldig** på grunn av inhabile vitner. Selv om det hadde vært gyldig, ville pliktdelsreglene sikret barna sin lovmessige arv.`
    },

    // --- BLOKK 4: Uskiftet bo ---
    {
      id: 'rett1-5-7-def-4',
      type: 'definition',
      title: 'Uskiftet bo',
      content: `**Uskiftet bo** innebærer at den gjenlevende ektefellen overtar avdødes formue uten at arven gjøres opp med de øvrige arvingene. Arveoppgjøret utsettes til den gjenlevende dør eller ønsker å skifte.

**Ektefellens uskifterett (arveloven §§ 14-31):**
- Gjenlevende ektefelle kan sitte i uskiftet bo overfor **felles barn** (arveloven § 14). Barna trenger ikke samtykke.
- Overfor **avdødes særkullsbarn** (barn fra et tidligere forhold) kreves **samtykke** (arveloven § 16).

**Samboerens uskifterett (arveloven § 32):**
Samboer med felles barn kan sitte i uskifte med felles bolig og innbo, bil og fritidseiendom. Denne uskifteretten er snevrere enn ektefellens.

**Begrensninger i uskiftet bo (arveloven §§ 22-24):**
- Kan **ikke gi bort fast eiendom** eller gi gaver som står i misforhold til boets formue (§ 23)
- Arvingene kan kreve skifte dersom gjenlevende **forringer boet vesentlig** (§ 24)
- Ved **nytt ekteskap** må den gjenlevende skifte (§ 27)`
    },
    {
      id: 'rett1-5-7-text-3',
      type: 'text',
      content: `### Fordeler og ulemper med uskiftet bo

**Fordeler:**
- Gjenlevende kan fortsette å bo i felles bolig uten å måtte selge for å betale ut arvingene
- Gjenlevende beholder rådigheten over hele formuen
- Praktisk løsning som gir ro i en vanskelig tid

**Ulemper:**
- Gjenlevende overtar også avdødes **gjeld** (arveloven § 15)
- Begrensninger i rådigheten (ikke gi bort fast eiendom, gaveforbud mv.)
- Formuen kan krympe over tid – arvingene risikerer å arve mindre
- Ved nytt ekteskap må det skiftes
- Kan skape **konflikter** med særkullsbarn som vil ha sin arv

**Skifte av uskiftebo:**
Den gjenlevende kan når som helst kreve skifte. Ved skifte deles boet som om begge ektefeller var døde – halvparten anses som gjenlevendes (bodelen), og halvparten som avdødes arv som fordeles etter arvelovens regler.`
    },
    {
      id: 'rett1-5-7-example-4',
      type: 'example',
      title: 'Uskiftet bo og særkullsbarn',
      problem: 'Berit (68 år) og Svein (72 år) er gift. Svein dør. De har to felles barn, og Svein har ett særkullsbarn (Trond, 45 år) fra et tidligere ekteskap. Sveins nettoformue er 5 000 000 kr. Berit ønsker å sitte i uskiftet bo. Kan hun det?',
      solution: `**Vurdering etter arveloven:**

**Uskifte overfor felles barn (§ 14):**
Berit har en ubetinget rett til å sitte i uskiftet bo overfor felles barn. De to felles barna trenger ikke å samtykke.

**Uskifte overfor særkullsbarn (§ 16):**
Overfor Trond (Sveins særkullsbarn) kreves **Tronds samtykke**. Dersom Trond nekter, har Berit to alternativer:

**Alternativ 1: Trond samtykker**
Berit sitter i uskifte med hele boet (5 000 000 kr).

**Alternativ 2: Trond nekter**
Berit kan velge å:
a) **Skifte med Trond** og sitte i uskifte med resten.
   - Ektefellens arv: 1/4 x 5 000 000 = 1 250 000 kr
   - Barnas andel: 5 000 000 - 1 250 000 = 3 750 000 kr
   - Tronds arv: 3 750 000 / 3 = 1 250 000 kr (utbetales)
   - Berit sitter i uskifte med: 1 250 000 (sin arv) + 2 500 000 (felles barns andel) = 3 750 000 kr

b) **Skifte hele boet** og motta sin arv (1 250 000 kr).

**Konklusjon:** Berit kan sitte i uskiftet bo overfor felles barn uten samtykke, men trenger Tronds samtykke for å inkludere hans arveandel.`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Legalarv:** Arveloven bygger på et arveklassesystem. Livsarvinger (barn) er første arveklasse. Ektefellen arver 1/4 ved siden av barn, 1/2 ved siden av foreldre/søsken, og hele arven uten nære slektninger. Samboer med felles barn arver 4G.

**Pliktdelsarv:** 2/3 av arven er forbeholdt livsarvingene, begrenset oppad til 15G per barnelinje. Arvelateren kan fritt disponere over friarven (1/3).

**Testament:** Krever strenge formkrav – skriftlighet, underskrift og to habile vitner. Testament som krenker pliktdelen, settes til side i den grad det krenker.

**Uskiftet bo:** Gjenlevende ektefelle kan sitte i uskifte overfor felles barn uten samtykke. Overfor særkullsbarn kreves samtykke. Den gjenlevende overtar avdødes gjeld og har begrensninger i sin råderett.`
    },

    // --- SAMLEOPPGAVER ---
    {
      id: 'rett1-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er pliktdelens størrelse etter den nye arveloven?',
        options: [
          { id: 'a', text: '1/2 av arven, begrenset til 1 000 000 kr per barn', isCorrect: false },
          { id: 'b', text: '2/3 av arven, begrenset til 15G per barnelinje', isCorrect: true },
          { id: 'c', text: '3/4 av arven, uten beløpsbegrensning', isCorrect: false },
          { id: 'd', text: '1/3 av arven, begrenset til 10G per barnelinje', isCorrect: false }
        ],
        solution: 'Etter arveloven § 50 utgjør pliktdelen 2/3 av arven, men er begrenset oppad til 15G (15 ganger grunnbeløpet) per barnelinje. Den gamle arveloven hadde en grense på 1 000 000 kr. Endringen til 15G gir en dynamisk grense som følger lønnsutviklingen.'
      }
    },
    {
      id: 'rett1-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilke formkrav gjelder for opprettelse av testament etter arveloven?',
        options: [
          { id: 'a', text: 'Skriftlig, underskrevet av arvelateren, og bevitnet av to habile vitner som er til stede sammen', isCorrect: true },
          { id: 'b', text: 'Skriftlig og notarialbekreftet (tinglyst hos Brønnøysundregistrene)', isCorrect: false },
          { id: 'c', text: 'Muntlig overfor tre vitner', isCorrect: false },
          { id: 'd', text: 'Skriftlig og underskrevet av arvelateren – vitner er ikke nødvendig', isCorrect: false }
        ],
        solution: 'Etter arveloven § 42 må et testament være skriftlig, underskrevet av arvelateren, og bevitnet av to vitner som er til stede sammen. Vitnene må vite at dokumentet er et testament. Vitnene kan ikke selv være tilgodesett i testamentet eller være nærstående til en tilgodesett (§ 44). Formkravene er strenge, og brudd fører til ugyldighet.'
      }
    },
    {
      id: 'rett1-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hva uskiftet bo innebærer, og drøft fordelene og ulempene for den gjenlevende ektefellen.',
        hints: ['Se arveloven §§ 14-31 om uskifte, og vurder rådighetsreglene i §§ 22-24.'],
        solution: `**Uskiftet bo – innhold:**
Uskiftet bo innebærer at den gjenlevende ektefellen overtar avdødes formue uten at arven gjøres opp med de øvrige arvingene. Arveoppgjøret utsettes til den gjenlevende selv dør, gifter seg på nytt, eller ønsker å skifte.

**Vilkår:**
- Ubetinget rett til uskifte overfor felles barn (§ 14)
- Overfor særkullsbarn kreves samtykke (§ 16)

**Fordeler:**
- Gjenlevende beholder rådigheten over hele formuen
- Kan fortsette å bo i felles bolig uten å måtte selge
- Gir økonomisk trygghet i en vanskelig overgangsperiode

**Ulemper:**
- Gjenlevende overtar avdødes gjeld (§ 15)
- Kan ikke gi bort fast eiendom eller gi uforholdsmessige gaver (§ 23)
- Arvingene kan kreve skifte ved vesentlig forringelse av boet (§ 24)
- Må skifte ved nytt ekteskap (§ 27)
- Formuen kan bli brukt opp – arvingene risikerer å arve mindre
- Potensiell konflikt med særkullsbarn

**Vurdering:** Uskifte er gunstig for en gjenlevende med behov for bolig og økonomi, men kan være ugunstig ved mye gjeld eller særkullsbarn som krever sin arv.`
      }
    },
    {
      id: 'rett1-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Morten dør og etterlater seg ektefellen Liv, to felles barn (Sara og Martin) og ett særkullsbarn (Einar, 40 år). Mortens nettoformue er 6 000 000 kr. Han har ikke opprettet testament. Einar samtykker ikke til uskifte. Forklar hvordan arven fordeles, og drøft Livs alternativer.',
        hints: ['Vurder ektefellens arv (§ 8), barnas arv (§ 4), og uskiftereglene (§§ 14-16).'],
        solution: `**Arvefordeling:**

**Ektefellens arv (§ 8):**
Liv arver 1/4 av Mortens formue: 6 000 000 x 1/4 = **1 500 000 kr**

**Barnas andel:**
Resten: 6 000 000 - 1 500 000 = 4 500 000 kr
Fordeles likt mellom tre barn: 4 500 000 / 3 = **1 500 000 kr** per barn

**Oversikt:**
| Arving | Arv |
|---|---|
| Liv (ektefelle) | 1 500 000 kr |
| Sara (felles barn) | 1 500 000 kr |
| Martin (felles barn) | 1 500 000 kr |
| Einar (særkullsbarn) | 1 500 000 kr |

**Livs alternativer mht. uskifte:**

**1. Skifte med Einar, uskifte med felles barn:**
Liv betaler ut Einar: 1 500 000 kr.
Liv sitter i uskifte med: sin arv (1 500 000) + felles barns andel (3 000 000) = **4 500 000 kr**

**2. Fullt skifte:**
Alle mottar sine andeler umiddelbart.

**3. Forhandling med Einar:**
Liv kan tilby Einar gunstige vilkår for å samtykke til uskifte.

**Anbefaling:** Alternativ 1 er mest praktisk – Liv beholder bolig og mesteparten av formuen, og Einar får sin arv umiddelbart.`
      }
    },
    {
      id: 'rett1-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-7-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hanne (70 år) sitter i uskiftet bo etter ektemannen. Hun gir bort familiehytta (verdt 2 000 000 kr) til sin niese. Boets samlede formue er 4 000 000 kr. Kan arvingene gripe inn?',
        options: [
          { id: 'a', text: 'Nei, den som sitter i uskifte råder fritt over hele formuen', isCorrect: false },
          { id: 'b', text: 'Ja, gaven er en fast eiendom og står i misforhold til boets formue, og kan omstøtes', isCorrect: true },
          { id: 'c', text: 'Nei, men bare dersom niesen er en arveklasse-arving', isCorrect: false },
          { id: 'd', text: 'Ja, men bare dersom arvingene klager innen 1 år', isCorrect: false }
        ],
        solution: 'Etter arveloven § 23 kan den som sitter i uskiftet bo, ikke gi bort fast eiendom eller gi gaver som står i misforhold til boets formue. En hytte verdt 2 000 000 kr utgjør 50 % av boets formue, noe som klart er i misforhold. Arvingene kan kreve gaven omstøtt etter § 23 tredje ledd.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.8: Barnerett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_5_8: TextbookChapter = {
  id: 'rettslaere-1-5-8',
  courseId: 'rettslaere-1',
  chapterNumber: '5.8',
  title: 'Barnerett',
  description: 'Foreldreansvar, samvær, barnets beste og barnevernsloven.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte barnets rettigheter'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-5-8-intro',
      type: 'text',
      content: `## Barnerett

Barn har egne rettigheter. Barnerettens grunnprinsipp er at **barnets beste** skal være et grunnleggende hensyn i alle avgjørelser som berører barnet. Dette prinsippet er forankret i FNs barnekonvensjon artikkel 3 og i Grunnloven § 104.

Barneretten reguleres hovedsakelig av to lover: **barneloven** (lov 8. april 1981 nr. 7 om barn og foreldre) og **barnevernsloven** (lov 18. juni 2021 nr. 97 om barnevern). Barneloven regulerer forholdet mellom barn og foreldre – foreldreskap, foreldreansvar, samvær og underholdsplikt. Barnevernsloven regulerer det offentliges ansvar for å beskytte barn som utsettes for omsorgssvikt eller overgrep.

I dette kapittelet ser vi på de viktigste reglene i begge lovene.`
    },

    // --- BLOKK 1: Foreldreansvar ---
    {
      id: 'rett1-5-8-def-1',
      type: 'definition',
      title: 'Foreldreansvar',
      content: `**Foreldreansvar** innebærer en rett og plikt til å ta avgjørelser for barnet i personlige spørsmål – som bosted, utdanning, helse og religion – innenfor rammene av barnets medbestemmelsesrett.

**Hvem har foreldreansvar?**

**Gifte foreldre (barneloven § 34):**
Foreldre som er gift har **felles foreldreansvar** automatisk.

**Samboende foreldre (barneloven § 35):**
Foreldre som bor sammen har felles foreldreansvar.

**Foreldre som ikke bor sammen (barneloven § 35):**
Dersom foreldrene ikke bor sammen ved barnets fødsel, har **moren** foreldreansvaret alene. Foreldrene kan avtale felles foreldreansvar ved å sende melding til folkeregisteret.

**Innholdet i foreldreansvaret (barneloven § 30):**
- Gi barnet **omsorg og omtanke**
- Sørge for at barnet får **utdanning** etter evne og forutsetninger
- Barnet skal ikke utsettes for **vold eller annen behandling** som krenker dets helse
- Foreldreansvaret skal utøves med barnets interesser og behov for øye

**Barnets medbestemmelsesrett (barneloven §§ 31-33):**
- Fra **7 år**: Barnet har rett til å bli hørt i saker som gjelder det
- Fra **12 år**: Barnets mening skal tillegges stor vekt
- Fra **15 år**: Barnet avgjør selv spørsmål om valg av utdanning og medlemskap i foreninger
- Fra **18 år**: Foreldreansvaret opphører`
    },
    {
      id: 'rett1-5-8-text-1',
      type: 'text',
      content: `### Fast bosted og samvær

Når foreldre ikke bor sammen, må det avgjøres hvor barnet skal ha **fast bosted** og om den andre forelderen skal ha **samværsrett**.

**Fast bosted (barneloven § 36):**
Foreldrene kan avtale at barnet skal ha fast bosted hos den ene eller hos begge (delt bosted). Den forelderen barnet bor fast hos, har rett til å ta avgjørelser om «vesentlige sider av omsorgen for barnet», som barnehage, fritidsaktiviteter og hvor i landet barnet skal bo.

**Delt bosted:**
Delt fast bosted betyr at barnet bor omtrent like mye hos begge foreldre. Domstolen kan fastsette delt bosted selv om en av foreldrene er imot det, dersom det er til barnets beste.

**Samværsrett (barneloven §§ 42-43):**
Barnet har rett til samvær med **begge** foreldrene. Samvær kan avtales fritt mellom foreldrene, men dersom de ikke blir enige, kan domstolen fastsette samværsordningen.

**«Vanlig samvær» (barneloven § 43 andre ledd):**
Loven definerer «vanlig samværsrett» som samvær annenhver helg, en ettermiddag i uken, og fordeling av ferier og høytider.

**Barnets beste ved bosted og samvær:**
Domstolen legger vekt på følgende momenter:
- Barnets **tilknytning** til hver av foreldrene
- Barnets **eget ønske** (vekt avhenger av alder og modenhet)
- **Risiko** for at barnet utsettes for vold eller overgrep
- **Status quo** – hvem barnet allerede bor hos (stabilitetshensyn)
- **Best mulig samlet foreldrekontakt**
- Foreldrenes **samarbeidsevne**`
    },
    {
      id: 'rett1-5-8-example-1',
      type: 'example',
      title: 'Barnets beste ved samlivsbrudd',
      problem: 'Tone (38) og Anders (40) skilles og har to barn: Emilie (10 år) og Markus (14 år). De er uenige om fast bosted. Tone ønsker at barna skal bo fast hos henne, mens Anders ønsker delt bosted. Markus har uttalt at han helst vil bo mest hos pappa. Emilie har ikke uttalt noen klar preferanse. Hvordan vil domstolen vurdere saken?',
      solution: `**Vurdering etter barneloven – barnets beste (§ 48):**

**Markus (14 år):**
- Etter barneloven § 31 skal barnets mening tillegges **stor vekt** fra 12 år. Markus er 14 år og har gitt uttrykk for at han vil bo mest hos faren.
- Domstolen vil normalt legge stor vekt på Markus' ønske, med mindre det foreligger tungtveiende grunner til å fravike det.

**Emilie (10 år):**
- Emilie har rett til å bli hørt (fra 7 år), men har ikke gitt uttrykk for en klar preferanse. Domstolen kan gjennomføre samtale med Emilie for å kartlegge hennes ønsker.

**Delt bosted:**
Anders ønsker delt bosted. Forutsetninger: at foreldrene **samarbeider godt**, bor **i nærheten av hverandre**, og at barnet **trives** med ordningen.

**Mulig resultat:**
- **Markus** får fast bosted hos Anders, med samvær hos Tone – i tråd med hans ønske
- **Emilie** kan få delt bosted eller fast bosted hos Tone – avhengig av helhetsvurderingen

**Konklusjon:** Barnets beste er en helhetsvurdering. Markus' klare ønske vil tillegges betydelig vekt. For Emilie er vurderingen mer åpen.`
    },

    // --- BLOKK 2: Barnevernsloven ---
    {
      id: 'rett1-5-8-def-2',
      type: 'definition',
      title: 'Barnevernsloven – det offentliges ansvar',
      content: `**Barnevernsloven** (lov 18. juni 2021 nr. 97) regulerer det offentliges ansvar for å beskytte barn som utsettes for omsorgssvikt, mishandling eller andre alvorlige forhold i hjemmet.

**Formål (bvl. § 1-1):**
Lovens formål er å sikre at barn som lever under forhold som kan skade deres helse og utvikling, får nødvendig hjelp, omsorg og beskyttelse til rett tid.

**Grunnleggende prinsipper:**
1. **Barnets beste** (bvl. § 1-3): Barnets beste skal være det grunnleggende hensynet
2. **Det biologiske prinsipp**: Barn skal som utgangspunkt vokse opp hos sine foreldre
3. **Minste inngreps prinsipp** (bvl. § 1-5): Barnevernet skal velge det minst inngripende tiltaket som er tilstrekkelig
4. **Medvirkning** (bvl. § 1-4): Barnet har rett til å medvirke i alle prosesser

**Meldeplikt:**
Offentlige ansatte (lærere, helsepersonell, politi) har **meldeplikt** etter bvl. § 13-2 dersom de har grunn til å tro at barnet utsettes for mishandling eller alvorlig omsorgssvikt. Alle privatpersoner kan også melde bekymring.`
    },
    {
      id: 'rett1-5-8-text-2',
      type: 'text',
      content: `### Barnevernets tiltak

Barnevernsloven gir barnevernet en trinnvis «verktøykasse» med tiltak av økende alvorlighetsgrad:

**1. Frivillige hjelpetiltak (bvl. kapittel 3):**
- Råd og veiledning til foreldre
- Støttekontakt for barnet
- Avlastningstiltak (besøkshjem)
- Barnehageplass eller SFO-plass
- Familieråd og nettverksarbeid

Hjelpetiltak er **frivillige** og krever foreldrenes samtykke. De fleste barnevernssaker løses med hjelpetiltak.

**2. Pålegg om hjelpetiltak (bvl. § 3-4):**
Barnevernet kan pålegge hjelpetiltak uten foreldrenes samtykke i visse tilfeller.

**3. Omsorgsovertakelse (bvl. § 5-1):**
Barneverns- og helsenemnda kan vedta omsorgsovertakelse dersom:
- Barnet utsettes for **alvorlige mangler** ved den daglige omsorgen
- Barnet utsettes for **mishandling** eller annen alvorlig omsorgssvikt
- Det er overveiende sannsynlig at barnets helse eller utvikling vil bli **alvorlig skadd**

**4. Akuttvedtak (bvl. § 4-2):**
Barnevernslederen kan treffe akuttvedtak om midlertidig plassering dersom barnet er i **umiddelbar fare**.

### Foreldrenes underholdsplikt

Etter barneloven § 66 har foreldrene plikt til å **forsørge** barnet til det fyller **18 år**. Når foreldrene ikke bor sammen, plikter den forelderen som barnet ikke bor fast hos, å betale **barnebidrag** (barneloven § 67). Bidraget fastsettes av NAV basert på foreldrenes inntekt, barnets alder og omfanget av samvær.`
    },
    {
      id: 'rett1-5-8-example-2',
      type: 'example',
      title: 'Omsorgsovertakelse',
      problem: 'En lærer oppdager at eleven Noah (8 år) har blåmerker på armene og virker redd for å gå hjem. Noah forteller at pappa slår ham. Læreren melder bekymring til barnevernet. Forklar prosessen som følger, og hvilke tiltak barnevernet kan iverksette.',
      solution: `**Prosessen etter barnevernsloven:**

**Steg 1: Bekymringsmelding**
Læreren har **meldeplikt** etter bvl. § 13-2 som offentlig ansatt. Meldingen sendes til den kommunale barnevernstjenesten.

**Steg 2: Gjennomgang av melding (bvl. § 2-1)**
Barnevernet skal snarest, og senest innen **en uke**, vurdere om meldingen skal følges opp med undersøkelse.

**Steg 3: Undersøkelse (bvl. § 2-2)**
Barnevernet åpner undersøkelsessak. Undersøkelsen skal gjennomføres innen **tre måneder** (kan utvides til seks). Barnevernet snakker med Noah, foreldrene, skolen og eventuelt andre.

**Steg 4: Akutte tiltak**
Dersom Noah er i umiddelbar fare, kan barnevernslederen treffe **akuttvedtak** etter bvl. § 4-2 om midlertidig plassering i beredskapshjem.

**Steg 5: Vurdering av tiltak**
a) **Hjelpetiltak**: Veiledning til faren, familieråd, støttekontakt for Noah. Forutsetter at volden opphører.
b) **Omsorgsovertakelse** (bvl. § 5-1): Dersom volden er alvorlig og foreldrene ikke evner å endre atferd, fremmes sak for barneverns- og helsenemnda. Noah plasseres i fosterhjem eller institusjon.

**Konklusjon:** Læreren har plikt til å melde. Barnevernet undersøker saken og kan iverksette tiltak fra veiledning til omsorgsovertakelse. Barnets beste er styrende for alle avgjørelser.`
    },

    // --- BLOKK 3: Barnets selvstendige rettigheter ---
    {
      id: 'rett1-5-8-text-3',
      type: 'text',
      content: `### Barnets selvstendige rettigheter

Barn har en rekke rettigheter som er uavhengige av foreldrenes beslutninger:

**Barnekonvensjonen (inkorporert i norsk lov):**
- Rett til **liv og utvikling** (art. 6)
- Rett til å bli **hørt** (art. 12)
- Rett til **utdanning** (art. 28)
- Vern mot **vold, misbruk og utnyttelse** (art. 19)
- Rett til **privatliv** (art. 16)

**Grunnloven § 104:**
«Ved handlinger og avgjørelser som berører barn, skal barnets beste være et grunnleggende hensyn. Barn har rett til vern om sin personlige integritet.»

**Barneloven § 30 tredje ledd:**
«Barnet må ikkje bli utsett for vald eller på anna vis bli handsama slik at den fysiske eller psykiske helsa blir utsett for skade eller fare.» Dette innebærer et **absolutt forbud** mot fysisk avstraffelse av barn – inkludert «klaps» og «ris».

**Barnets gradvis økende selvbestemmelse:**
| Alder | Rettigheter |
|---|---|
| 7 år | Rett til å bli hørt |
| 12 år | Meningen skal tillegges stor vekt |
| 15 år | Bestemmer selv utdanningsvalg, foreningsmedlemskap, valg av livssyn |
| 16 år | Kan samtykke til helsehjelp, kan ta lettere arbeid |
| 18 år | Myndig – full rettslig handleevne |`
    },
    {
      id: 'rett1-5-8-example-3',
      type: 'example',
      title: 'Barnets rett til å bli hørt',
      problem: 'Oliver (11 år) er uenig med foreldrene om valg av ungdomsskole. Foreldrene vil sende ham til en privatskole, mens Oliver ønsker å gå på den offentlige skolen der vennene hans går. Har Oliver noen rettigheter i denne situasjonen?',
      solution: `**Vurdering etter barneloven og barnekonvensjonen:**

**Barnets rett til å bli hørt:**
Etter barneloven § 31 har barn som er fylt 7 år rett til å si sin mening i personlige saker, herunder utdanning. Oliver er 11 år og har rett til å bli hørt.

**Vekten av barnets mening:**
Barnets mening tillegges vekt etter alder og modenhet. Fra 12 år skal det legges «stor vekt» på barnets mening. Oliver er 11 år – hans mening har **betydelig vekt**, men er ikke avgjørende.

**Foreldrenes beslutningsmyndighet:**
Etter barneloven § 30 har foreldrene rett og plikt til å ta avgjørelser innenfor foreldreansvaret. Foreldrene har det endelige ordet, men plikter å høre Oliver.

**Fra 15 år (§ 32):**
Hadde Oliver vært 15 år, ville han selv kunne avgjøre valg av utdanning.

**Barnets beste:**
Foreldrene bør vurdere Olivers ønske i lys av barnets beste. Sosiale relasjoner (venner) er et relevant moment.

**Konklusjon:** Oliver har rett til å bli hørt og få sin mening vektlagt, men foreldrene tar den endelige avgjørelsen. Hadde Oliver vært 15 år, kunne han selv bestemt.`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-5-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Foreldreansvar:** Gifte og samboende foreldre har felles foreldreansvar. Foreldreansvaret innebærer plikt til omsorg, utdanning og beskyttelse mot vold. Barnet har økende medbestemmelsesrett fra 7 til 18 år.

**Fast bosted og samvær:** Foreldrene avtaler fast bosted og samvær. Dersom de er uenige, avgjør domstolen ut fra barnets beste. Delt bosted kan fastsettes. Barnets ønske tillegges stor vekt fra 12 år.

**Barnevernsloven:** Det offentlige har ansvar for å beskytte barn mot omsorgssvikt. Barnevernet har en trinnvis verktøykasse: frivillige hjelpetiltak, pålagte hjelpetiltak, omsorgsovertakelse og akuttvedtak. Alle avgjørelser styres av barnets beste.

**Barnets rettigheter:** Barn har rett til å bli hørt, til utdanning, til beskyttelse mot vold, og til privatliv. Fysisk avstraffelse er forbudt. Barnekonvensjonen og Grunnloven § 104 forankrer barnets rettigheter på høyeste nivå.`
    },

    // --- SAMLEOPPGAVER ---
    {
      id: 'rett1-5-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Fra hvilken alder har barn rett til å bli hørt i saker som angår dem, etter barneloven?',
        options: [
          { id: 'a', text: '5 år', isCorrect: false },
          { id: 'b', text: '7 år', isCorrect: true },
          { id: 'c', text: '10 år', isCorrect: false },
          { id: 'd', text: '12 år', isCorrect: false }
        ],
        solution: 'Etter barneloven § 31 har barn som er fylt 7 år rett til å si sin mening i personlige saker. Fra 12 år skal barnets mening tillegges stor vekt. Retten til å bli hørt er forankret i FNs barnekonvensjon artikkel 12.'
      }
    },
    {
      id: 'rett1-5-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket grunnleggende prinsipp styrer alle avgjørelser etter barnevernsloven?',
        options: [
          { id: 'a', text: 'Det biologiske prinsipp – barn skal alltid bo hos foreldrene', isCorrect: false },
          { id: 'b', text: 'Barnets beste – barnets interesser skal være det grunnleggende hensynet', isCorrect: true },
          { id: 'c', text: 'Foreldrenes autonomi – foreldrene avgjør alltid hva som er best for barnet', isCorrect: false },
          { id: 'd', text: 'Minste inngreps prinsipp – barnevernet skal aldri gripe inn i familier', isCorrect: false }
        ],
        solution: 'Barnets beste er det overordnede prinsippet i barnevernsloven (§ 1-3) og i Grunnloven § 104. Det biologiske prinsipp og minste inngreps prinsipp er viktige, men underordnet barnets beste. Foreldrenes autonomi er ikke et selvstendig prinsipp i barnevernssaker.'
      }
    },
    {
      id: 'rett1-5-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hva barnevernets meldeplikt innebærer, og drøft hvem som har meldeplikt og i hvilke situasjoner den utløses.',
        hints: ['Se bvl. § 13-2 og vurder hva som utløser meldeplikt for offentlige ansatte.'],
        solution: `**Meldeplikten i barnevernsloven:**

**Hvem har meldeplikt?**
Etter barnevernsloven § 13-2 har følgende **offentlige ansatte** meldeplikt:
- Ansatte i barnehage, skole og SFO
- Helsepersonell (leger, sykepleiere, helsesykepleiere)
- Ansatte i politiet
- Ansatte i NAV

Meldeplikten er **personlig** – den påhviler den enkelte ansatte.

**Når utløses meldeplikten?**
Meldeplikten utløses når vedkommende har «grunn til å tro» at:
- Barnet utsettes for **mishandling** eller alvorlig omsorgssvikt
- Barnet utsettes for menneskehandel
- Barnet viser vedvarende **alvorlige atferdsproblemer**

«Grunn til å tro» er et lavt beviskrav – det kreves ikke sikre bevis, bare en begrunnet bekymring.

**Forholdet til taushetsplikten:**
Meldeplikten går foran taushetsplikten. En lærer som har grunn til å tro at et barn utsettes for mishandling, plikter å melde fra selv om opplysningene normalt er taushetsbelagte.

**Private:**
Alle privatpersoner kan melde bekymring, men har ingen lovpålagt plikt (unntak: avvergeplikten i straffeloven § 196 ved særlig alvorlige forhold).

**Brudd på meldeplikten:**
Brudd kan medføre straffeansvar og disiplinærtiltak.`
      }
    },
    {
      id: 'rett1-5-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-5-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Maren (14 år) bor hos moren etter foreldrenes skilsmisse. Faren har samvær annenhver helg. Maren ønsker å flytte til faren fordi hun mistrives hos moren og opplever streng kontroll. Moren nekter. Drøft Marens rettigheter og hvordan saken kan løses.',
        hints: ['Vurder barneloven §§ 31, 36 og 48 om barnets beste, medbestemmelsesrett og fast bosted.'],
        solution: `**Drøftelse av Marens rettigheter:**

**1. Barnets medbestemmelsesrett (barneloven § 31):**
Maren er 14 år. Etter § 31 skal barnets mening tillegges **stor vekt** fra 12 år. Marens ønske om å flytte til faren vil veie tungt.

**2. Kan Maren selv bestemme?**
Nei – barneloven gir ikke barnet rett til å bestemme fast bosted. Denne avgjørelsen tilligger foreldrene eller domstolen. Barnet har rett til å bli hørt, men ikke til å avgjøre spørsmålet.

**3. Farens handlingsalternativer:**
a) **Forsøke å avtale** med moren om endring
b) Kreve **mekling** hos familievernkontoret (obligatorisk før rettssak)
c) Reise sak for **domstolen**

**4. Domstolens vurdering (§ 48 – barnets beste):**
- **Marens ønske**: Tillegges stor vekt (14 år). Dersom ønsket er gjennomtenkt og stabilt, vil det ofte bli avgjørende.
- **Risiko**: Er den «strenge kontrollen» skadelig, eller normal grensesetting?
- **Tilknytning**: Marens relasjon til begge foreldrene, venner, skole.
- **Status quo**: Stabilitetshensyn – kan vike dersom barnets ønske tilsier endring.
- **Samlet foreldrekontakt**: At Maren får god kontakt med begge foreldre.

**5. Midlertidig løsning:**
Faren kan søke om midlertidig avgjørelse etter barneloven § 60.

**Konklusjon:** Maren har sterk rett til å bli hørt, og hennes ønske vil veie tungt. Faren kan kreve endring gjennom mekling og eventuelt domstolsbehandling. Marens modne og begrunnede ønske vil trolig bli utslagsgivende.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 5 (kapittel 5.1–5.8)
// ============================================================================

export const RETTSLAERE_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_1_5_1,
  CHAPTER_RETTSLAERE_1_5_2,
  CHAPTER_RETTSLAERE_1_5_3,
  CHAPTER_RETTSLAERE_1_5_4,
  CHAPTER_RETTSLAERE_1_5_5,
  CHAPTER_RETTSLAERE_1_5_6,
  CHAPTER_RETTSLAERE_1_5_7,
  CHAPTER_RETTSLAERE_1_5_8,
];
