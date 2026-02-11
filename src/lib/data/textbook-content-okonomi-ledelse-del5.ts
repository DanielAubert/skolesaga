/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 5: Kommunikasjon i organisasjoner
 *
 * Kapittel 5.1–5.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for kommunikasjonsprosessen i en organisasjon
 * - planlegge og gjennomføre møter og presentasjoner
 * - drøfte årsaker til konflikter og bruke ulike løsningsstrategier
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Kommunikasjonsprosessen
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_5_1: TextbookChapter = {
  id: 'okonomi-ledelse-5-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '5.1',
  title: 'Kommunikasjonsprosessen',
  description: 'Sender-mottaker-modellen forklarer hvordan budskap formidles gjennom ulike kanaler. Du lærer om tilbakemelding, støy og barrierer som påvirker om kommunikasjonen lykkes.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for kommunikasjonsprosessen i en organisasjon'],
  content: [
    {
      id: 'ol-5-1-intro',
      type: 'text',
      content: `## Kommunikasjon - grunnlaget for samarbeid

Kommunikasjon er limet som holder en organisasjon sammen. Uten fungerende kommunikasjon kan ikke ansatte koordinere arbeidet sitt, ledere kan ikke formidle mål og strategier, og kundene får ikke den informasjonen de trenger.

I dette kapittelet skal du lære:
- Hvordan kommunikasjonsprosessen fungerer
- Hva sender-mottaker-modellen innebærer
- Hvilke kommunikasjonskanaler som finnes
- Hvordan støy og barrierer kan hindre god kommunikasjon`,
    },
    {
      id: 'ol-5-1-def-1',
      type: 'definition',
      title: 'Kommunikasjon',
      content: `**Kommunikasjon** betyr å gjøre felles. Det handler om å overføre informasjon, tanker, ideer eller følelser mellom mennesker. I en organisasjon er kommunikasjon alle prosessene der budskap sendes, mottas og tolkes mellom ansatte, ledere, kunder og andre interessenter.`,
    },
    {
      id: 'ol-5-1-text-1',
      type: 'text',
      content: `### Sender-mottaker-modellen

Den mest brukte modellen for å forstå kommunikasjon er **sender-mottaker-modellen**. Modellen beskriver kommunikasjon som en prosess med flere ledd:

1. **Sender** - personen som har et budskap å formidle
2. **Koding** - senderen formulerer budskapet i ord, bilder eller handlinger
3. **Kanal** - mediet budskapet sendes gjennom (e-post, telefon, møte)
4. **Dekoding** - mottakeren tolker budskapet
5. **Mottaker** - personen som mottar og forstår budskapet
6. **Tilbakemelding** - mottakeren responderer, slik at senderen vet om budskapet er forstått
7. **Støy** - alt som kan forstyrre budskapet underveis

Modellen viser at kommunikasjon ikke bare handler om å sende et budskap, men om at mottakeren faktisk forstår det slik senderen mente det.`,
    },
    {
      id: 'ol-5-1-example-1',
      type: 'example',
      title: 'Sender-mottaker-modellen i praksis',
      problem: 'Avdelingsleder Kari skal informere teamet sitt om en ny rutine for tidsregistrering. Identifiser elementene i kommunikasjonsprosessen.',
      solution: `**Sender:** Kari (avdelingsleder)
**Koding:** Kari skriver en e-post med forklaring av den nye rutinen og legger ved en veiledning
**Kanal:** E-post med vedlegg
**Dekoding:** De ansatte leser e-posten og prøver å forstå den nye rutinen
**Mottaker:** Teammedlemmene
**Tilbakemelding:** En ansatt svarer med spørsmål om hvordan de skal registrere overtid
**Støy:** En av de ansatte har full innboks og overser e-posten. En annen leser den på mobilen og får ikke åpnet vedlegget.

Kari kunne redusert støy ved å også ta opp saken i et avdelingsmøte og demonstrere rutinen.`,
    },
    {
      id: 'ol-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hva menes med "koding" i sender-mottaker-modellen?',
        options: [
          { id: 'a', text: 'Å kryptere budskapet slik at ingen andre kan lese det', isCorrect: false },
          { id: 'b', text: 'Å formulere budskapet i en form som kan sendes videre', isCorrect: true },
          { id: 'c', text: 'Å velge hvilken kanal budskapet skal sendes gjennom', isCorrect: false },
          { id: 'd', text: 'Å sjekke om mottakeren har forstått budskapet', isCorrect: false },
        ],
        solution: 'Koding betyr at senderen formulerer tanker og ideer til et budskap som kan formidles, for eksempel gjennom ord, bilder eller kroppsspråk. Det handler om å "oversette" det du tenker til noe mottakeren kan oppfatte.',
      },
    },
    {
      id: 'ol-5-1-def-2',
      type: 'definition',
      title: 'Kommunikasjonskanal',
      content: `En **kommunikasjonskanal** er mediet eller veien budskapet sendes gjennom. Eksempler er muntlige kanaler (samtale, møte, telefon), skriftlige kanaler (e-post, brev, rapport) og digitale kanaler (chat, videokonferanse, intranett). Valg av kanal påvirker hvor effektivt budskapet når frem.`,
    },
    {
      id: 'ol-5-1-text-2',
      type: 'text',
      content: `### Støy og kommunikasjonsbarrierer

**Støy** er alt som forstyrrer kommunikasjonsprosessen og gjør at budskapet ikke når frem slik det var ment. Vi skiller mellom flere typer støy:

**Fysisk støy:**
- Bråk i omgivelsene
- Dårlig telefonlinje eller internett
- Uleselig skrift eller dårlig lyd

**Psykologisk støy:**
- Forutinntatte holdninger
- Stress eller dårlig konsentrasjon
- Manglende tillit til senderen

**Semantisk støy:**
- Faguttrykk mottakeren ikke forstår
- Kulturforskjeller i tolkning
- Tvetydige formuleringer

**Organisatorisk støy:**
- For mange ledd i kommunikasjonskjeden
- Uklare ansvarsforhold
- Informasjonsoverbelastning`,
    },
    {
      id: 'ol-5-1-example-2',
      type: 'example',
      title: 'Kommunikasjonsbarrierer',
      problem: 'Daglig leder sender en strategiplan på 40 sider til alle ansatte per e-post. Få leser dokumentet. Hvilke barrierer kan forklare dette?',
      solution: `**Barrierer som hindrer kommunikasjonen:**

1. **Informasjonsoverbelastning** - 40 sider er for mye å lese i en travel hverdag
2. **Feil kanal** - e-post egner seg dårlig for omfattende og viktig informasjon
3. **Manglende relevans** - ansatte ser ikke hvordan strategien angår deres hverdag
4. **Fagspråk** - strategidokumenter inneholder ofte vanskelig språk

**Bedre alternativer:**
- Presentere hovedpunktene i et allmøte
- Lage en kort oppsummering (1–2 sider) med lenke til full versjon
- La avdelingsledere tilpasse budskapet til sin avdeling
- Åpne for spørsmål og dialog`,
    },
    {
      id: 'ol-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        task: 'En leder bruker mye fagsjargong i en presentasjon for nyansatte. Hvilken type støy er dette et eksempel på?',
        options: [
          { id: 'a', text: 'Fysisk støy', isCorrect: false },
          { id: 'b', text: 'Psykologisk støy', isCorrect: false },
          { id: 'c', text: 'Semantisk støy', isCorrect: true },
          { id: 'd', text: 'Organisatorisk støy', isCorrect: false },
        ],
        solution: 'Fagsjargong som mottakeren ikke forstår er semantisk støy. Ordene når frem, men meningen går tapt fordi mottakeren mangler referanserammen til å tolke dem riktig.',
      },
    },
    {
      id: 'ol-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        task: 'Forklar med egne ord hvorfor tilbakemelding er en viktig del av kommunikasjonsprosessen. Gi et eksempel fra arbeidslivet der manglende tilbakemelding fører til problemer.',
        hints: ['Tenk på hva som kan gå galt når senderen ikke vet om budskapet er forstått'],
        solution: 'Tilbakemelding gjør kommunikasjon til en toveis prosess. Uten tilbakemelding vet ikke senderen om budskapet ble mottatt, forstått eller misforstått. Eksempel: En prosjektleder sender en e-post med nye frister til teamet, men får ingen bekreftelse. Flere teammedlemmer overser e-posten og jobber etter gamle frister, noe som forsinker hele prosjektet. Med en enkel bekreftelse ("mottatt og forstått") hadde problemet vært unngått.',
      },
    },
    {
      id: 'ol-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Velg en kommunikasjonskanal (f.eks. e-post, Teams-melding, telefonsamtale eller fysisk møte) og drøft fordeler og ulemper med denne kanalen i en arbeidssituasjon.',
        solution: 'Eksempel med e-post: Fordeler: Dokumenterbar, mottaker kan lese når det passer, kan sendes til mange samtidig, gir tid til å formulere seg presist. Ulemper: Mangler kroppsspråk og tonefall, kan misforstås lettere, kan drukne i full innboks, egner seg dårlig for følsomme temaer eller komplekse diskusjoner. E-post passer best for saklig informasjonsdeling, men bør suppleres med samtale for viktige eller sensitive budskap.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'En bedrift opplever at viktig informasjon fra ledelsen ofte ikke når ut til alle ansatte. Bruk sender-mottaker-modellen til å analysere mulige årsaker, og foreslå tre konkrete tiltak for å bedre kommunikasjonen.',
        solution: 'Mulige årsaker analysert gjennom modellen: Sender bruker feil kanal (kun e-post), budskapet er for langt eller komplisert (dårlig koding), for mange mellomledd (organisatorisk støy), ansatte har ikke tid til å lese alt (informasjonsoverbelastning), manglende tilbakemelding gjør at ledelsen ikke oppdager problemet. Tiltak: 1) Bruke flere kanaler - kombinere e-post med kort muntlig oppsummering i avdelingsmøter. 2) Innføre rutine for bekreftelse av mottatt informasjon. 3) Forenkle budskapet med korte oppsummeringer og tydelig "dette angår deg"-markering.',
      },
    },
    {
      id: 'ol-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-5-1-ex-6',
        number: '5.1.6',
        type: 'multiple-choice',
        task: 'Hvilken kanal er best egnet for å gi en ansatt en vanskelig tilbakemelding om arbeidsprestasjoner?',
        options: [
          { id: 'a', text: 'E-post til den ansatte', isCorrect: false },
          { id: 'b', text: 'Melding i en felles Teams-kanal', isCorrect: false },
          { id: 'c', text: 'Personlig samtale ansikt til ansikt', isCorrect: true },
          { id: 'd', text: 'SMS med kort beskjed', isCorrect: false },
        ],
        solution: 'Vanskelige tilbakemeldinger bør gis ansikt til ansikt. Da kan du lese kroppsspråk, tilpasse budskapet underveis, vise empati og sikre at den ansatte forstår budskapet riktig. Skriftlige kanaler mangler nyanser og kan lett misforstås ved sensitive temaer.',
      },
    },
    {
      id: 'ol-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kommunikasjonsprosessen** består av sender, koding, kanal, dekoding, mottaker og tilbakemelding
- **Sender-mottaker-modellen** viser at kommunikasjon er en toveis prosess
- **Kommunikasjonskanaler** har ulike styrker og svakheter
- **Støy** kan være fysisk, psykologisk, semantisk eller organisatorisk

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Koding | Å formulere budskapet i en overførbar form |
| Dekoding | Å tolke og forstå et mottatt budskap |
| Støy | Alt som forstyrrer kommunikasjonsprosessen |
| Tilbakemelding | Respons som bekrefter at budskapet er forstått |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.2: Intern kommunikasjon
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_5_2: TextbookChapter = {
  id: 'okonomi-ledelse-5-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '5.2',
  title: 'Intern kommunikasjon',
  description: 'Intern kommunikasjon handler om informasjonsflyten innad i organisasjonen. Du lærer om formelle og uformelle kanaler, vertikal og horisontal kommunikasjon, intranett og medarbeidersamtaler.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for kommunikasjonsprosessen i en organisasjon'],
  content: [
    {
      id: 'ol-5-2-intro',
      type: 'text',
      content: `## Kommunikasjon innad i organisasjonen

God intern kommunikasjon er avgjørende for at en organisasjon skal fungere. Ansatte trenger informasjon for å gjøre jobben sin, ledere trenger tilbakemeldinger for å ta gode beslutninger, og avdelinger må koordinere arbeidet seg imellom.

I dette kapittelet skal du lære:
- Forskjellen mellom formell og uformell kommunikasjon
- Hva vertikal og horisontal kommunikasjon innebærer
- Digitale verktøy for intern kommunikasjon
- Medarbeidersamtalens rolle og oppbygging`,
    },
    {
      id: 'ol-5-2-def-1',
      type: 'definition',
      title: 'Intern kommunikasjon',
      content: `**Intern kommunikasjon** er all informasjonsutveksling som skjer mellom personer innad i en organisasjon. Det omfatter både planlagt kommunikasjon gjennom offisielle kanaler og spontane samtaler mellom kollegaer. God intern kommunikasjon bygger fellesskap, sikrer koordinering og bidrar til at alle jobber mot felles mål.`,
    },
    {
      id: 'ol-5-2-text-1',
      type: 'text',
      content: `### Formell og uformell kommunikasjon

**Formell kommunikasjon** følger organisasjonens offisielle kanaler og strukturer:
- Møtereferater og protokoller
- Stillingsinstrukser og prosedyrer
- Nyhetsbrev og intranettmeldinger
- Medarbeidersamtaler og evalueringer
- Rapporter og handlingsplaner

**Uformell kommunikasjon** skjer spontant og utenfor de offisielle kanalene:
- Samtaler ved kaffemaskinen
- Lunsj med kollegaer
- Spontane diskusjoner på kontoret
- Chat-meldinger mellom kollegaer
- Ryktebørsen ("jungeltelegrafen")

Begge formene er viktige. Formell kommunikasjon sikrer at alle får nødvendig informasjon, mens uformell kommunikasjon bygger relasjoner og kan løse problemer raskt. Utfordringen med uformell kommunikasjon er at informasjonen kan bli forvrengt, og at ikke alle inkluderes.`,
    },
    {
      id: 'ol-5-2-example-1',
      type: 'example',
      title: 'Formell vs. uformell kommunikasjon',
      problem: 'En bedrift skal innføre et nytt IT-system. Hvordan vil dette kommuniseres formelt og uformelt?',
      solution: `**Formell kommunikasjon:**
- Ledelsen sender ut informasjon via intranett og e-post
- Det holdes informasjonsmøter for alle avdelinger
- Opplæring organiseres med kursplan og materiell
- Fremdriftsrapporter sendes til ledergruppa

**Uformell kommunikasjon:**
- Ansatte diskuterer endringen i lunsjen ("Har du hørt om det nye systemet?")
- Noen uttrykker bekymring til kollegaer ("Jeg lurer på om det blir vanskelig")
- IT-kyndige kollegaer hjelper andre spontant
- Rykter sprer seg om at det gamle systemet var bedre

Ledelsen bør være oppmerksom på den uformelle kommunikasjonen og adressere bekymringer tidlig, for eksempel ved å svare på vanlige spørsmål proaktivt.`,
    },
    {
      id: 'ol-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hva er et kjennetegn på formell kommunikasjon i en organisasjon?',
        options: [
          { id: 'a', text: 'Den skjer spontant mellom kollegaer', isCorrect: false },
          { id: 'b', text: 'Den følger organisasjonens offisielle kanaler og strukturer', isCorrect: true },
          { id: 'c', text: 'Den foregår alltid muntlig', isCorrect: false },
          { id: 'd', text: 'Den skjer bare mellom ansatte på samme nivå', isCorrect: false },
        ],
        solution: 'Formell kommunikasjon følger organisasjonens fastsatte kanaler og strukturer. Den er planlagt, dokumenterbar og ofte styrt av ledelsen. Eksempler er møteinnkallinger, rapporter og informasjon via intranett.',
      },
    },
    {
      id: 'ol-5-2-def-2',
      type: 'definition',
      title: 'Vertikal og horisontal kommunikasjon',
      content: `**Vertikal kommunikasjon** går mellom ulike nivåer i organisasjonen - oppover fra ansatte til ledelse (rapportering, forslag) eller nedover fra ledelse til ansatte (instrukser, informasjon). **Horisontal kommunikasjon** går mellom personer på samme nivå, for eksempel mellom kollegaer i en avdeling eller mellom avdelingsledere.`,
    },
    {
      id: 'ol-5-2-text-2',
      type: 'text',
      content: `### Digitale verktøy for intern kommunikasjon

Moderne organisasjoner bruker en rekke digitale verktøy:

**Intranett:**
- Intern nettside med nyheter, dokumenter og verktøy
- Tilgjengelig for alle ansatte
- Fungerer som organisasjonens "digitale oppslagstavle"

**Samarbeidsplattformer (Teams, Slack):**
- Direktemeldinger og gruppesamtaler
- Kanaler for prosjekter og avdelinger
- Videomøter og skjermdeling
- Deling av dokumenter og filer

**E-post:**
- Formell skriftlig kommunikasjon
- Dokumenterbar og søkbar
- Kan bli en tidstyv ved overforbruk

**Prosjektverktøy:**
- Oppgavestyring og fremdriftsoversikt
- Felles arbeidsflater for dokumenter
- Tidslinje og milepæler

Utfordringen er å velge riktige verktøy og unngå at informasjon spres på for mange plattformer.`,
    },
    {
      id: 'ol-5-2-text-3',
      type: 'text',
      content: `### Medarbeidersamtalen

Medarbeidersamtalen er et viktig verktøy for vertikal kommunikasjon. Det er en planlagt, strukturert samtale mellom leder og ansatt som vanligvis gjennomføres en til to ganger i året.

**Typisk innhold:**
- Tilbakeblikk på mål og resultater
- Trivsel og arbeidsmiljø
- Kompetanseutvikling og ønsker
- Nye mål og forventninger
- Tilbakemelding begge veier

**Forutsetninger for en god medarbeidersamtale:**
- God forberedelse fra begge parter
- Trygg atmosfære der den ansatte tør å være åpen
- Gjensidig respekt og aktiv lytting
- Konkrete avtaler og oppfølgingspunkter
- Dokumentasjon av det man blir enige om`,
    },
    {
      id: 'ol-5-2-example-2',
      type: 'example',
      title: 'Medarbeidersamtale i praksis',
      problem: 'Leder Morten forbereder medarbeidersamtale med ansatt Lise. Hvilke temaer bør han dekke, og hvordan kan han legge til rette for en god samtale?',
      solution: `**Forberedelse:**
- Morten sender ut samtaleskjema på forhånd, slik at Lise kan forberede seg
- Han gjennomgår Lises arbeidsoppgaver, resultater og eventuelle tilbakemeldinger

**Temaer å dekke:**
1. Tilbakeblikk: Hvordan har Lise opplevd perioden? Hva har gått bra, hva har vært utfordrende?
2. Måloppnåelse: Har målene fra forrige samtale blitt nådd?
3. Trivsel: Trives Lise på jobb? Hvordan er forholdet til kollegaer?
4. Utvikling: Hvilke kompetanseønsker har Lise? Er det kurs hun ønsker?
5. Nye mål: Hva skal Lise jobbe mot i neste periode?

**Tilrettelegging:**
- Booker et rolig møterom uten forstyrrelser
- Setter av nok tid (45–60 minutter)
- Begynner med åpne spørsmål og lytter aktivt
- Skriver referat som begge godkjenner`,
    },
    {
      id: 'ol-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-5-2-ex-2',
        number: '5.2.2',
        type: 'multiple-choice',
        task: 'Når en ansatt rapporterer resultatene sine til sin avdelingsleder, er dette et eksempel på:',
        options: [
          { id: 'a', text: 'Horisontal kommunikasjon', isCorrect: false },
          { id: 'b', text: 'Vertikal kommunikasjon oppover', isCorrect: true },
          { id: 'c', text: 'Vertikal kommunikasjon nedover', isCorrect: false },
          { id: 'd', text: 'Uformell kommunikasjon', isCorrect: false },
        ],
        solution: 'Når en ansatt rapporterer til sin leder, er det vertikal kommunikasjon oppover. Informasjonen beveger seg fra et lavere nivå til et høyere nivå i organisasjonen.',
      },
    },
    {
      id: 'ol-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom formell og uformell kommunikasjon, og gi to eksempler på hver type i en organisasjon.',
        hints: ['Tenk på hvordan informasjon spres både planlagt og spontant'],
        solution: 'Formell kommunikasjon følger organisasjonens fastsatte kanaler og er planlagt. Eksempler: 1) Nyhetsbrev på intranett med informasjon om nye retningslinjer. 2) Møtereferat fra avdelingsmøte med vedtak og oppfølgingspunkter. Uformell kommunikasjon skjer spontant utenfor de offisielle kanalene. Eksempler: 1) Kollegaer diskuterer et prosjekt over lunsj og kommer frem til en god idé. 2) Ansatte deler bekymringer om organisasjonsendringer ved kaffemaskinen.',
      },
    },
    {
      id: 'ol-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med å bruke intranett som hovedkanal for intern kommunikasjon i en bedrift med 200 ansatte.',
        solution: 'Fordeler: Alle ansatte har tilgang til samme informasjon, informasjonen er dokumentert og søkbar, kan oppdateres raskt, reduserer behovet for masseutsendelse av e-post, kan brukes til nyheter, dokumenter og verktøy samlet. Ulemper: Krever at alle ansatte aktivt logger inn og sjekker, informasjonen kan drukne i mengden, ansatte uten kontorplass (lager, butikk) har kanskje begrenset tilgang, erstatter ikke behovet for personlig kommunikasjon ved viktige saker, krever vedlikehold og oppdatering for å være relevant.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'En bedrift opplever at ansatte klager over dårlig informasjonsflyt. Ledelsen mener de sender ut nok informasjon, men de ansatte føler seg utenfor. Analyser situasjonen og foreslå konkrete tiltak for å bedre den interne kommunikasjonen.',
        solution: 'Problemet kan være at ledelsen fokuserer på enveis vertikal kommunikasjon nedover, uten å legge til rette for dialog og tilbakemelding. Tiltak: 1) Innføre regelmessige avdelingsmøter med mulighet for spørsmål og innspill. 2) Opprette digitale kanaler (Teams/Slack) der ansatte kan gi tilbakemelding direkte. 3) La avdelingsledere tilpasse budskap fra toppledelsen til sin avdeling. 4) Gjennomføre medarbeiderundersøkelse for å kartlegge hva som mangler. 5) Synliggjøre at innspill fra ansatte faktisk blir lyttet til ved å vise til konkrete endringer basert på tilbakemeldinger.',
      },
    },
    {
      id: 'ol-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-5-2-ex-6',
        number: '5.2.6',
        type: 'multiple-choice',
        task: 'Hva er det viktigste formålet med en medarbeidersamtale?',
        options: [
          { id: 'a', text: 'Å gi den ansatte kritikk for dårlig arbeid', isCorrect: false },
          { id: 'b', text: 'Å ha en strukturert dialog om trivsel, mål og utvikling', isCorrect: true },
          { id: 'c', text: 'Å forhandle om lønn og frynsegoder', isCorrect: false },
          { id: 'd', text: 'Å dokumentere alt den ansatte har gjort feil', isCorrect: false },
        ],
        solution: 'Medarbeidersamtalen er en strukturert dialog mellom leder og ansatt der man snakker om trivsel, måloppnåelse, utvikling og forventninger. Det skal være en trygg arena for gjensidig tilbakemelding, ikke et ensidig oppgjør.',
      },
    },
    {
      id: 'ol-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Formell kommunikasjon** følger offisielle kanaler, mens **uformell** er spontan
- **Vertikal kommunikasjon** går mellom nivåer, **horisontal** går på tvers
- **Digitale verktøy** som intranett og Teams effektiviserer informasjonsflyten
- **Medarbeidersamtalen** er en viktig arena for dialog mellom leder og ansatt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Formell kommunikasjon | Kommunikasjon gjennom offisielle kanaler |
| Uformell kommunikasjon | Spontan kommunikasjon utenfor offisielle kanaler |
| Vertikal kommunikasjon | Informasjonsflyt mellom ulike nivåer |
| Medarbeidersamtale | Planlagt dialog mellom leder og ansatt |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.3: Ekstern kommunikasjon
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_5_3: TextbookChapter = {
  id: 'okonomi-ledelse-5-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '5.3',
  title: 'Ekstern kommunikasjon',
  description: 'Ekstern kommunikasjon retter seg mot omgivelsene utenfor organisasjonen. Du lærer om PR, markedskommunikasjon, omdømmebygging og krisekommunikasjon.',
  estimatedMinutes: 24,
  competenceGoals: ['gjøre rede for kommunikasjonsprosessen i en organisasjon'],
  content: [
    {
      id: 'ol-5-3-intro',
      type: 'text',
      content: `## Kommunikasjon med omverdenen

Enhver organisasjon kommuniserer med omgivelsene sine - kunder, leverandører, medier, myndigheter og samfunnet generelt. Hvordan organisasjonen fremstår utad påvirker omdømmet, kundetilfredsheten og evnen til å tiltrekke dyktige medarbeidere.

I dette kapittelet skal du lære:
- Hva PR (Public Relations) innebærer
- Hvordan markedskommunikasjon fungerer
- Prinsipper for omdømmebygging
- Hvordan organisasjoner håndterer kriser kommunikasjonsmessig`,
    },
    {
      id: 'ol-5-3-def-1',
      type: 'definition',
      title: 'Ekstern kommunikasjon',
      content: `**Ekstern kommunikasjon** er all planlagt og uplanlagt kommunikasjon mellom organisasjonen og dens eksterne interessenter. Det omfatter markedsføring, PR, kundeservice, mediekontakt, årsrapporter, sosiale medier og all annen kontakt med omverdenen. Målet er å bygge og vedlikeholde et godt omdømme.`,
    },
    {
      id: 'ol-5-3-text-1',
      type: 'text',
      content: `### PR - Public Relations

PR handler om å bygge og opprettholde gode relasjoner mellom organisasjonen og omgivelsene. I motsetning til reklame, som er betalt og kontrollert, handler PR om å fortjene oppmerksomhet og tillit.

**Viktige PR-verktøy:**
- Pressemeldinger og mediekontakt
- Arrangementer og lanseringer
- Sponsing og samfunnsengasjement
- Sosiale medier og blogg
- Krisekommunikasjon

**Forskjellen mellom PR og reklame:**
- Reklame: Betalt, kontrollert budskap i kjøpte medieflater
- PR: Fortjent oppmerksomhet gjennom nyhetsverdi og relasjonsbygging
- Redaksjonell omtale har ofte større troverdighet enn reklame
- PR er vanligvis billigere, men vanskeligere å kontrollere`,
    },
    {
      id: 'ol-5-3-example-1',
      type: 'example',
      title: 'PR i praksis',
      problem: 'En lokal bakeri åpner ny filial. Hvordan kan de bruke PR for å skape oppmerksomhet uten å bruke mye penger på reklame?',
      solution: `**PR-tiltak for bakeriet:**

1. **Pressemelding** - Send invitasjon til lokalavisen om åpningen, gjerne med en vinkling om lokale arbeidsplasser
2. **Åpningsarrangement** - Inviter naboer, lokalpolitikere og presse til smaksprøver
3. **Sosiale medier** - Del bilder og videoer fra forberedelsene, vis frem bakerne og historien bak
4. **Samfunnsengasjement** - Doner brød til et lokalt veldedig formål på åpningsdagen
5. **Samarbeid** - Inngå partnerskap med en lokal kafé eller butikk

Disse tiltakene koster lite, men kan gi mye positiv omtale og bygge et godt omdømme i nærområdet fra dag én.`,
    },
    {
      id: 'ol-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom PR og reklame?',
        options: [
          { id: 'a', text: 'PR er dyrere enn reklame', isCorrect: false },
          { id: 'b', text: 'PR handler om fortjent oppmerksomhet, reklame om betalt plass', isCorrect: true },
          { id: 'c', text: 'Reklame er alltid mer effektivt enn PR', isCorrect: false },
          { id: 'd', text: 'PR brukes bare av store bedrifter', isCorrect: false },
        ],
        solution: 'Hovedforskjellen er at reklame er betalt og kontrollert budskap, mens PR handler om å fortjene oppmerksomhet gjennom nyhetsverdi, relasjoner og troverdighet. Redaksjonell omtale gjennom PR oppleves ofte som mer troverdig enn betalte annonser.',
      },
    },
    {
      id: 'ol-5-3-def-2',
      type: 'definition',
      title: 'Omdømme',
      content: `**Omdømme** er summen av omgivelsenes oppfatninger av en organisasjon over tid. Det bygges gjennom konsistent atferd, kvalitet, kommunikasjon og verdier. Et godt omdømme gir konkurransefortrinn, tiltrekker kunder og ansatte, og skaper tillit hos investorer og samarbeidspartnere. Det tar lang tid å bygge, men kan raskt ødelegges.`,
    },
    {
      id: 'ol-5-3-text-2',
      type: 'text',
      content: `### Markedskommunikasjon

Markedskommunikasjon er all kommunikasjon som er rettet mot å selge produkter eller tjenester. Det handler om å nå målgruppen med riktig budskap gjennom riktig kanal.

**Kommunikasjonsmiksen:**
- **Reklame** - Annonser i aviser, TV, radio, digitale medier
- **Salgsfremmende tiltak** - Kampanjer, rabatter, konkurranser
- **Personlig salg** - Direktekontakt mellom selger og kunde
- **PR** - Redaksjonell omtale og relasjonsbygging
- **Direkte markedsføring** - E-post, SMS, adresserte utsendelser
- **Sosiale medier** - Innholdsproduksjon og dialog med følgere

Valg av kanal avhenger av målgruppe, budskap, budsjett og hva man vil oppnå.`,
    },
    {
      id: 'ol-5-3-text-3',
      type: 'text',
      content: `### Krisekommunikasjon

En krise kan ramme enhver organisasjon - produktfeil, ulykker, skandaler eller naturkatastrofer. Hvordan organisasjonen kommuniserer i en krise er avgjørende for om den kommer styrket eller svekket ut.

**Prinsipper for god krisekommunikasjon:**
1. **Vær rask** - Kommuniser tidlig, selv om du ikke har alle svar
2. **Vær ærlig** - Ikke lyv eller skjul fakta, det slår alltid tilbake
3. **Vis empati** - Anerkjenn de som er rammet og vis at du bryr deg
4. **Ta ansvar** - Ikke skyld på andre, fokuser på løsning
5. **Vær tilgjengelig** - Svar på henvendelser fra media og berørte

**Forberedelsessteg:**
- Ha en krisekommunikasjonsplan klar
- Utpek en talsperson som er trent i mediehåndtering
- Øv på krisescenarier regelmessig
- Ha oppdaterte kontaktlister for medier og interessenter`,
    },
    {
      id: 'ol-5-3-example-2',
      type: 'example',
      title: 'Krisekommunikasjon - godt og dårlig',
      problem: 'En matprodusent oppdager at et parti med ferdigmat kan inneholde allergener som ikke er merket på pakken. Sammenlign god og dårlig krisekommunikasjon.',
      solution: `**God krisekommunikasjon:**
- Utsteder umiddelbar tilbakekalling med tydelig produktinformasjon
- Informerer Mattilsynet, butikkjeder og forbrukere samtidig
- Daglig leder uttaler seg personlig: "Vi beklager sterkt. Kunders trygghet er vår fremste prioritet."
- Tilbyr full refusjon og oppgir kontaktinformasjon for spørsmål
- Informerer løpende om årsak og tiltak for å hindre gjentakelse

**Dårlig krisekommunikasjon:**
- Venter med å informere i håp om at ingen merker det
- Bagatelliserer risikoen: "Det er svært lite sannsynlig at noen blir syke"
- Skylder på leverandøren: "Dette er ikke vår feil"
- Er utilgjengelig for media og forbrukere
- Gir motstridende informasjon til ulike aktører

Den gode tilnærmingen beskytter omdømmet, den dårlige forverrer krisen.`,
    },
    {
      id: 'ol-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-5-3-ex-2',
        number: '5.3.2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste prinsippet i krisekommunikasjon?',
        options: [
          { id: 'a', text: 'Vente til man har all informasjon før man uttaler seg', isCorrect: false },
          { id: 'b', text: 'Bagatellisere situasjonen for å unngå panikk', isCorrect: false },
          { id: 'c', text: 'Kommunisere raskt, ærlig og med empati', isCorrect: true },
          { id: 'd', text: 'Kun kommunisere gjennom advokater', isCorrect: false },
        ],
        solution: 'I en krise er det avgjørende å kommunisere raskt (selv om man ikke har alle svar), ærlig (aldri lyve eller skjule) og med empati (anerkjenne de som er rammet). Å vente for lenge gir rom for spekulasjoner og rykter.',
      },
    },
    {
      id: 'ol-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        task: 'Forklar hva omdømme er, og beskriv tre faktorer som kan påvirke en bedrifts omdømme positivt.',
        hints: ['Tenk på kvalitet, kommunikasjon og samfunnsansvar'],
        solution: 'Omdømme er summen av omgivelsenes oppfatninger av organisasjonen over tid. Tre faktorer som kan påvirke positivt: 1) Konsistent høy kvalitet - kunder som alltid får gode produkter og tjenester bygger tillit og sprer positiv vareprat. 2) Åpen og ærlig kommunikasjon - bedrifter som er transparente om virksomheten sin og innrømmer feil, oppfattes som troverdige. 3) Samfunnsansvar (CSR) - bedrifter som tar miljø- og sosialansvar tiltrekker bevisste kunder og motiverte ansatte.',
      },
    },
    {
      id: 'ol-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Velg en bedrift du kjenner til og beskriv hvordan den bruker sosiale medier i sin eksterne kommunikasjon. Vurder om bruken er effektiv.',
        solution: 'Eksempel med REMA 1000: Bruker Facebook og Instagram aktivt med oppskrifter, tilbud og kampanjer. Effektivt fordi: Innholdet er relevant for målgruppen (mat og pris), de har konsistent visuell profil, svarer på kommentarer og klager raskt, og kampanjer som "Æ eansen" skaper engasjement. Kan forbedres ved å dele mer "behind the scenes"-innhold fra butikkene og la ansatte være ambassadører.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'En kleskjede oppdager at en av fabrikkene de bruker har brutt arbeidstakerrettigheter. Nyheten er på vei ut i media. Lag en krisekommunikasjonsplan med tre strakstiltak og tre langsiktige tiltak.',
        solution: 'Strakstiltak: 1) Utsted en pressemelding der bedriften tar situasjonen på alvor, beklager og informerer om at produksjonen ved fabrikken er stanset inntil videre. 2) Daglig leder stiller opp som talsperson og er tilgjengelig for mediene. 3) Informer ansatte internt før nyheten blir offentlig, slik at alle vet hva bedriften gjør. Langsiktige tiltak: 1) Gjennomfør uavhengig revisjon av alle leverandører og publiser resultatene. 2) Innfør strengere krav i leverandøravtaler med jevnlige kontroller. 3) Etabler en bærekraftsrapport som viser konkrete forbedringer og involver interesseorganisasjoner i arbeidet.',
      },
    },
    {
      id: 'ol-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-5-3-ex-6',
        number: '5.3.6',
        type: 'multiple-choice',
        task: 'Hvilken del av kommunikasjonsmiksen innebærer direktekontakt mellom selger og kunde?',
        options: [
          { id: 'a', text: 'Reklame', isCorrect: false },
          { id: 'b', text: 'PR', isCorrect: false },
          { id: 'c', text: 'Personlig salg', isCorrect: true },
          { id: 'd', text: 'Direkte markedsføring', isCorrect: false },
        ],
        solution: 'Personlig salg innebærer direkte kontakt mellom selger og kunde, enten ansikt til ansikt, per telefon eller via videomøte. Det er den mest personlige formen for markedskommunikasjon og gir mulighet for tilpasning og dialog.',
      },
    },
    {
      id: 'ol-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **PR** handler om å fortjene oppmerksomhet gjennom relasjoner og nyhetsverdi
- **Markedskommunikasjon** omfatter reklame, salgsfremmende tiltak, personlig salg og mer
- **Omdømme** bygges over tid gjennom konsistent kvalitet og troverdig kommunikasjon
- **Krisekommunikasjon** krever hurtighet, ærlighet og empati

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| PR | Relasjonsbygging med omgivelsene for å fortjene oppmerksomhet |
| Omdømme | Omgivelsenes samlede oppfatning av organisasjonen |
| Kommunikasjonsmiks | Kombinasjonen av ulike kommunikasjonsverktøy |
| Krisekommunikasjon | Planlagt håndtering av kommunikasjon i krisesituasjoner |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.4: Møteledelse og presentasjon
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_5_4: TextbookChapter = {
  id: 'okonomi-ledelse-5-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '5.4',
  title: 'Møteledelse og presentasjon',
  description: 'Effektive møter og gode presentasjoner er sentrale ferdigheter i arbeidslivet. Du lærer om møtestruktur, saksliste, referat og presentasjonsteknikk.',
  estimatedMinutes: 22,
  competenceGoals: ['planlegge og gjennomføre møter og presentasjoner'],
  content: [
    {
      id: 'ol-5-4-intro',
      type: 'text',
      content: `## Effektive møter og overbevisende presentasjoner

Møter er en av de vanligste arbeidsformene i norsk arbeidsliv. Samtidig er dårlige møter en av de mest utbredte frustrasjonskildene. Å kunne lede et godt møte og holde en engasjerende presentasjon er derfor verdifulle ferdigheter.

I dette kapittelet skal du lære:
- Hvordan planlegge og lede effektive møter
- Hvordan skrive saksliste og referat
- Grunnleggende presentasjonsteknikk
- Tips for å engasjere publikum`,
    },
    {
      id: 'ol-5-4-def-1',
      type: 'definition',
      title: 'Møteledelse',
      content: `**Møteledelse** er kunsten å planlegge, gjennomføre og følge opp møter på en effektiv måte. En god møteleder sørger for tydelig agenda, holder tidsrammen, involverer alle deltakere, styrer diskusjonen mot beslutninger og sikrer at vedtak dokumenteres og følges opp.`,
    },
    {
      id: 'ol-5-4-text-1',
      type: 'text',
      content: `### Før møtet - planlegging

**Vurder om møtet er nødvendig:**
- Kan saken løses med en e-post eller rask samtale?
- Er det behov for diskusjon og samarbeid?
- Trenger vi en felles beslutning?

**Forberedelser:**
- Definer hensikten med møtet
- Lag saksliste (agenda) og send den ut i god tid
- Inviter bare de som trenger å delta
- Sett tidsramme og hold deg til den
- Book egnet rom med nødvendig utstyr

**Sakslisten bør inneholde:**
1. Møtets formål
2. Tid, sted og deltakere
3. Nummererte saker med anslått tid per sak
4. Saksdokumenter som vedlegg
5. Angi om saken er til orientering, diskusjon eller beslutning`,
    },
    {
      id: 'ol-5-4-example-1',
      type: 'example',
      title: 'Saksliste for avdelingsmøte',
      problem: 'Lag en saksliste for et avdelingsmøte i markedsavdelingen.',
      solution: `**Avdelingsmøte - Markedsavdelingen**
Dato: Tirsdag 15. mars, kl. 09:00–10:00
Sted: Møterom 3B
Deltakere: Alle i markedsavdelingen (6 personer)

**Saksliste:**

1. Godkjenning av referat fra forrige møte (5 min) - *Beslutning*
2. Status vårkampanjen - fremdrift og resultater (15 min) - *Orientering*
3. Ny kunde - presentasjon og oppgavefordeling (15 min) - *Diskusjon/beslutning*
4. Budsjettoppdatering Q2 (10 min) - *Orientering*
5. Eventuelt (5 min)

Vedlegg: Kampanjerapport, kundepresentasjon, budsjettark`,
    },
    {
      id: 'ol-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hva bør en god saksliste inneholde?',
        options: [
          { id: 'a', text: 'Bare temaer uten tidsangivelse', isCorrect: false },
          { id: 'b', text: 'Nummererte saker med tidsramme og om saken er til orientering, diskusjon eller beslutning', isCorrect: true },
          { id: 'c', text: 'En detaljert beskrivelse av alle vedtak som skal fattes', isCorrect: false },
          { id: 'd', text: 'Kun navnet på den som skal presentere hver sak', isCorrect: false },
        ],
        solution: 'En god saksliste har nummererte saker med anslått tid per sak og en markering av om saken er til orientering, diskusjon eller beslutning. Dette gir deltakerne mulighet til å forberede seg riktig og hjelper møtelederen med å styre tiden.',
      },
    },
    {
      id: 'ol-5-4-text-2',
      type: 'text',
      content: `### Under møtet - gjennomføring

**Møtelederen bør:**
- Starte presist og ønske velkommen
- Gjennomgå sakslisten og tidsplanen
- Styre diskusjonen slik at alle kommer til orde
- Holde fokus på saken og stoppe avsporinger
- Oppsummere vedtak underveis
- Avslutte med å gjennomgå handlingspunkter

**Gode møtevaner:**
- Alle mobiler på lydløs
- Én person snakker om gangen
- Respekter andres meninger
- Hold deg til tidsrammen
- Kom forberedt

### Etter møtet - oppfølging

**Referatet bør inneholde:**
- Dato, tid, sted og deltakere
- Gjennomgåtte saker med kort oppsummering
- Vedtak som ble fattet
- Handlingspunkter med ansvarlig person og frist
- Dato for neste møte`,
    },
    {
      id: 'ol-5-4-def-2',
      type: 'definition',
      title: 'Møtereferat',
      content: `Et **møtereferat** er et skriftlig dokument som oppsummerer det som ble diskutert og vedtatt i et møte. Referatet fungerer som dokumentasjon og hukommelse, slik at deltakere og andre kan se hva som ble bestemt og hvem som har ansvar for oppfølging. Det skilles mellom fullstendige referater (som gjengir diskusjonen) og beslutningsreferater (som kun gjengir vedtak).`,
    },
    {
      id: 'ol-5-4-text-3',
      type: 'text',
      content: `### Presentasjonsteknikk

En god presentasjon formidler budskapet tydelig og engasjerer publikum.

**Forberedelse:**
- Definer hensikten: Hva vil du at publikum skal sitte igjen med?
- Kjenn målgruppen: Tilpass språk og eksempler
- Strukturer innholdet: Innledning, hoveddel, avslutning
- Øv på fremføringen, gjerne foran noen

**Under presentasjonen:**
- Start med noe som fanger oppmerksomheten
- Bruk enkle og visuelle presentasjonsbilder
- Hold øyekontakt med publikum
- Varier stemmen i tempo og styrke
- Bruk eksempler og historier
- Avslutt med en tydelig oppsummering eller handlingsoppfordring

**Vanlige feil:**
- For mye tekst på slides
- Lese fra manuset eller skjermen
- Snakke for fort eller for lavt
- Gå over tiden
- Ignorere publikums reaksjoner`,
    },
    {
      id: 'ol-5-4-example-2',
      type: 'example',
      title: 'God vs. dårlig presentasjon',
      problem: 'En ansatt skal presentere kvartalsresultatene for ledergruppa. Sammenlign en god og en dårlig tilnærming.',
      solution: `**Dårlig tilnærming:**
- 30 slides med detaljerte tabeller og liten skrift
- Leser tall direkte fra skjermen med ryggen til publikum
- Ingen forklaring av hva tallene betyr
- Går 10 minutter over tiden

**God tilnærming:**
- 8–10 oversiktlige slides med visuelle grafer
- Starter med hovedbudskapet: "Vi har økt omsetningen med 12 %"
- Forklarer driverne bak tallene med konkrete eksempler
- Avslutter med tre anbefalinger for neste kvartal
- Holder seg innenfor tidsrammen og åpner for spørsmål

Forskjellen ligger i forberedelse, fokus på hovedbudskap og bevissthet om publikums behov.`,
    },
    {
      id: 'ol-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-5-4-ex-2',
        number: '5.4.2',
        type: 'multiple-choice',
        task: 'Hva er den viktigste oppgaven til en møteleder?',
        options: [
          { id: 'a', text: 'Å snakke mest mulig selv', isCorrect: false },
          { id: 'b', text: 'Å sørge for at møtet er effektivt og at alle kommer til orde', isCorrect: true },
          { id: 'c', text: 'Å skrive referatet underveis', isCorrect: false },
          { id: 'd', text: 'Å ha det siste ordet i alle diskusjoner', isCorrect: false },
        ],
        solution: 'Møtelederen skal sørge for at møtet er effektivt, at sakslisten følges, at alle deltakere kommer til orde, og at vedtak fattes og dokumenteres. Møtelederen styrer prosessen, ikke innholdet.',
      },
    },
    {
      id: 'ol-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        task: 'Lag en saksliste for et prosjektmøte der teamet skal diskutere fremdrift, utfordringer og fordeling av resterende oppgaver i et skoleprosjekt.',
        hints: ['Husk å inkludere tid per sak og type sak'],
        solution: 'Prosjektmøte - Gruppe 4. Dato: Onsdag 20. mars, kl. 12:00–12:45. Sted: Grupperom 2. Deltakere: Alle gruppemedlemmer (4 personer). Saksliste: 1. Statusoppdatering - hva har hver person gjort? (10 min) - Orientering. 2. Utfordringer - hva har vi slitt med? (10 min) - Diskusjon. 3. Fordeling av resterende oppgaver (10 min) - Beslutning. 4. Tidsplan mot innlevering - hvem gjør hva innen når? (10 min) - Beslutning. 5. Eventuelt (5 min). Vedlegg: Prosjektplan med opprinnelig ansvarsfordeling.',
      },
    },
    {
      id: 'ol-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'Nevn tre vanlige feil i presentasjoner og forklar hvordan man kan unngå dem.',
        solution: '1) For mye tekst på slides - løsning: Bruk stikkord og visuelle elementer som grafer og bilder. La taleren forklare detaljene muntlig. 2) Lese fra manus eller skjerm - løsning: Øv godt på forhånd slik at du kan snakke fritt. Bruk stikkordskort som støtte. 3) Gå over tiden - løsning: Øv med klokke og kutt innhold heller enn å snakke fortere. Ha "bonusstoff" du kan droppe om tiden er knapp.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Du er møteleder for et avdelingsmøte der en diskusjon om ferieavvikling har blitt opphetet og sporet av. To kollegaer er tydelig uenige. Hvordan håndterer du situasjonen som møteleder?',
        solution: 'Som møteleder bør man: 1) Bryte inn høflig og anerkjenne at saken engasjerer: "Jeg ser at dette er viktig for dere." 2) Minne om sakslisten og tidsplanen: "Vi har begrenset tid, og denne saken står ikke på agendaen." 3) Foreslå en løsning: "La oss ta feriediskusjonen som egen sak neste uke, så alle kan forberede seg ordentlig." 4) Styre tilbake til opprinnelig sak: "Nå går vi videre til sak 3." 5) Om konflikten er dyp, ta en individuell samtale med de involverte etter møtet. Det viktige er å respektere begge parter, men samtidig holde møtet produktivt.',
      },
    },
    {
      id: 'ol-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-5-4-ex-6',
        number: '5.4.6',
        type: 'multiple-choice',
        task: 'Hva bør et beslutningsreferat inneholde?',
        options: [
          { id: 'a', text: 'Ordrett gjengivelse av alt som ble sagt i møtet', isCorrect: false },
          { id: 'b', text: 'Kun vedtakene som ble fattet, med ansvarlig person og frist', isCorrect: true },
          { id: 'c', text: 'Bare navnene på de som deltok', isCorrect: false },
          { id: 'd', text: 'En detaljert analyse av hver diskusjon', isCorrect: false },
        ],
        solution: 'Et beslutningsreferat gjengir kun vedtakene som ble fattet, hvem som er ansvarlig for oppfølging, og fristene. Det er mer kompakt enn et fullstendig referat og fokuserer på handling fremfor diskusjon.',
      },
    },
    {
      id: 'ol-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Møteledelse** krever god planlegging, tydelig agenda og effektiv gjennomføring
- **Sakslisten** strukturerer møtet med tidsrammer og sakets karakter
- **Referatet** dokumenterer vedtak og handlingspunkter
- **Presentasjonsteknikk** handler om forberedelse, struktur og publikumsbevissthet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Saksliste | Oversikt over saker med tidsramme og sakets karakter |
| Møtereferat | Skriftlig dokumentasjon av diskusjoner og vedtak |
| Beslutningsreferat | Kompakt referat som kun gjengir vedtak |
| Presentasjonsteknikk | Ferdigheter for å formidle budskap effektivt |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.5: Konflikthåndtering
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_5_5: TextbookChapter = {
  id: 'okonomi-ledelse-5-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '5.5',
  title: 'Konflikthåndtering',
  description: 'Konflikter er en naturlig del av samarbeid. Du lærer om ulike konfliktyper, konflikttrappen, Thomas-Kilmanns konfliktstiler og mediation som løsningsmetode.',
  estimatedMinutes: 24,
  competenceGoals: ['drøfte årsaker til konflikter og bruke ulike løsningsstrategier'],
  content: [
    {
      id: 'ol-5-5-intro',
      type: 'text',
      content: `## Konflikter på arbeidsplassen

Konflikter er uunngåelige der mennesker samarbeider. De oppstår når ulike behov, meninger eller verdier kolliderer. Men konflikter er ikke nødvendigvis negative - riktig håndtert kan de føre til bedre løsninger, innovasjon og sterkere relasjoner.

I dette kapittelet skal du lære:
- Hva konflikter er og hvorfor de oppstår
- Ulike typer konflikter
- Hvordan konflikter kan eskalere (konflikttrappen)
- Konfliktstiler ifølge Thomas-Kilmann
- Mediation som metode for konfliktløsning`,
    },
    {
      id: 'ol-5-5-def-1',
      type: 'definition',
      title: 'Konflikt',
      content: `En **konflikt** oppstår når to eller flere parter opplever at deres interesser, behov, verdier eller mål er uforenlige. I arbeidslivet kan konflikter handle om alt fra uenighet om arbeidsmetoder til personlige motsetninger. Konflikter kan være åpne (uttrykt) eller skjulte (uuttalt), og de kan ha både destruktive og konstruktive utfall.`,
    },
    {
      id: 'ol-5-5-text-1',
      type: 'text',
      content: `### Typer konflikter

**Sakskonflikter:**
- Uenighet om fakta, mål eller arbeidsmetoder
- "Hvordan skal vi løse denne oppgaven?"
- Lettere å løse fordi fokuset er på saken, ikke personene

**Interessekonflikter:**
- Motstridende behov om ressurser, tid eller prioriteringer
- "Vi har bare budsjett til ett prosjekt - mitt eller ditt?"
- Krever forhandling og kompromiss

**Verdikonflikter:**
- Ulike verdier, holdninger eller overbevisninger
- "Er det riktig å si opp ansatte for å øke profitten?"
- Vanskelig å løse fordi verdier er dypt forankret

**Relasjonskonflikter:**
- Personlige motsetninger og dårlig kjemi
- "Jeg klarer ikke å samarbeide med den personen"
- Krever fokus på kommunikasjon og gjensidig respekt

**Strukturelle konflikter:**
- Skyldes organisasjonens oppbygging eller systemer
- Uklare roller, dårlig ressursfordeling eller motsigende mål
- Krever organisatoriske endringer for å løses`,
    },
    {
      id: 'ol-5-5-example-1',
      type: 'example',
      title: 'Identifisere konflikttyper',
      problem: 'Identifiser konflikttypen i hvert av disse eksemplene fra en arbeidsplass.',
      solution: `**1. To selgere konkurrerer om den samme store kunden:**
Type: Interessekonflikt - begge ønsker provisjonen og anerkjennelsen

**2. Teamleder og utvikler er uenige om tidsplan for prosjektet:**
Type: Sakskonflikt - de er uenige om hva som er realistisk, men begge vil prosjektets beste

**3. En ansatt opplever at kollegaen alltid snakker over henne i møter:**
Type: Relasjonskonflikt - det handler om respekt og samhandling mellom personene

**4. Salgsavdelingen lover kunder rask levering, men produksjonen klarer ikke å følge opp:**
Type: Strukturell konflikt - avdelingene har motstridende mål, og systemet legger opp til friksjon

Å identifisere konflikttypen er første steg i å finne riktig løsningstilnærming.`,
    },
    {
      id: 'ol-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hvilken type konflikt handler om uenighet om fakta, mål eller arbeidsmetoder?',
        options: [
          { id: 'a', text: 'Relasjonskonflikt', isCorrect: false },
          { id: 'b', text: 'Sakskonflikt', isCorrect: true },
          { id: 'c', text: 'Verdikonflikt', isCorrect: false },
          { id: 'd', text: 'Strukturell konflikt', isCorrect: false },
        ],
        solution: 'Sakskonflikter handler om uenighet knyttet til saken - hvordan noe bør gjøres, hva som er riktig fremgangsmåte, eller hvilke mål man skal prioritere. De er ofte lettere å løse fordi fokuset er på saken og ikke på personene.',
      },
    },
    {
      id: 'ol-5-5-def-2',
      type: 'definition',
      title: 'Konflikttrappen',
      content: `**Konflikttrappen** er en modell som viser hvordan konflikter kan eskalere trinn for trinn dersom de ikke håndteres. Modellen har typisk 7–9 trinn, fra uenighet og personifisering til åpen fiendtlighet. Jo lenger opp i trappen konflikten har kommet, desto vanskeligere er den å løse. Modellen viser at det er viktig å gripe inn tidlig.`,
    },
    {
      id: 'ol-5-5-text-2',
      type: 'text',
      content: `### Konflikttrappen

Konflikter har en tendens til å eskalere hvis de ikke håndteres. Konflikttrappen beskriver denne eskaleringen:

**Trinn 1: Uenighet** - Saklig uenighet om en konkret sak

**Trinn 2: Personifisering** - Fokus flyttes fra sak til person ("Det er typisk deg")

**Trinn 3: Problemet vokser** - Flere gamle saker trekkes inn ("Du gjør alltid...")

**Trinn 4: Samtalen opphører** - Partene slutter å snakke direkte med hverandre

**Trinn 5: Fiendebilder** - Partene snakker negativt om hverandre til andre

**Trinn 6: Åpen fiendtlighet** - Sabotasje, trusler eller åpne angrep

**Trinn 7: Polarisering** - "Enten meg eller deg" - samarbeid er umulig

**Nøkkelpunktet** er at konflikter bør tas tak i på de laveste trinnene, der de fortsatt handler om sak og kan løses med dialog. Jo høyere opp i trappen, desto mer hjelp utenfra trengs.`,
    },
    {
      id: 'ol-5-5-text-3',
      type: 'text',
      content: `### Thomas-Kilmanns konfliktstiler

Psykologene Thomas og Kilmann identifiserte fem ulike måter å håndtere konflikter på, basert på to dimensjoner: hvor opptatt du er av egne behov (selvsikkerhet) og hvor opptatt du er av den andres behov (samarbeidsvilje).

**1. Konkurrere (vinne/tape):**
- Høy selvsikkerhet, lav samarbeidsvilje
- Passer: Akutte situasjoner, prinsipielle spørsmål
- Risiko: Skader relasjonen

**2. Tilpasse (gi etter):**
- Lav selvsikkerhet, høy samarbeidsvilje
- Passer: Saken er viktigere for den andre, du tar feil
- Risiko: Egne behov blir oversett over tid

**3. Unngå (trekke seg):**
- Lav selvsikkerhet, lav samarbeidsvilje
- Passer: Ubetydelig sak, behov for avkjøling
- Risiko: Konflikten forblir uløst og kan vokse

**4. Kompromiss (dele):**
- Middels selvsikkerhet, middels samarbeidsvilje
- Passer: Tidspress, jevnbyrdige parter
- Risiko: Ingen er helt fornøyd

**5. Samarbeide (vinne/vinne):**
- Høy selvsikkerhet, høy samarbeidsvilje
- Passer: Viktig sak der relasjonen også er viktig
- Risiko: Tidkrevende, krever vilje fra begge parter`,
    },
    {
      id: 'ol-5-5-example-2',
      type: 'example',
      title: 'Velge konfliktstil',
      problem: 'To avdelingsledere er uenige om hvordan et felles budsjett på 500 000 kr skal fordeles. Hvilken konfliktstil vil du anbefale, og hvorfor?',
      solution: `**Anbefalt stil: Samarbeide (vinne/vinne)**

**Begrunnelse:**
- Begge lederne har legitime behov, og en dårlig løsning kan skade begge avdelinger
- Relasjonen mellom lederne er viktig for fremtidig samarbeid
- Det finnes kanskje løsninger der begge kan få dekket sine viktigste behov

**Fremgangsmåte:**
1. Begge presenterer sine behov og prioriteringer åpent
2. Sammen identifiserer de hva som er "must have" og "nice to have"
3. De utforsker kreative løsninger (kan noen kostnader deles? Er det andre finansieringskilder?)
4. De forhandler seg frem til en fordeling begge kan leve med

**Kompromiss** (50/50) er et alternativ, men kan gi suboptimale løsninger der begge får for lite til å gjennomføre sine viktigste prosjekter. Samarbeid kan avdekke at fordelingen 60/40 eller 70/30 gir best samlet resultat.`,
    },
    {
      id: 'ol-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-2',
        number: '5.5.2',
        type: 'multiple-choice',
        task: 'Ifølge Thomas-Kilmann, hvilken konfliktstil kjennetegnes av høy selvsikkerhet og høy samarbeidsvilje?',
        options: [
          { id: 'a', text: 'Konkurrere', isCorrect: false },
          { id: 'b', text: 'Kompromiss', isCorrect: false },
          { id: 'c', text: 'Samarbeide', isCorrect: true },
          { id: 'd', text: 'Tilpasse', isCorrect: false },
        ],
        solution: 'Samarbeidsstilen kombinerer høy selvsikkerhet (du kjemper for dine behov) med høy samarbeidsvilje (du er opptatt av den andres behov). Målet er en vinne/vinne-løsning der begge parter får dekket sine viktigste behov.',
      },
    },
    {
      id: 'ol-5-5-text-4',
      type: 'text',
      content: `### Mediation - konfliktløsning med tredjepart

Mediation (mekling) innebærer at en nøytral tredjepart hjelper de konfliktende partene med å finne en løsning. Mediatoren bestemmer ikke utfallet, men leder prosessen.

**Mediatoren sin rolle:**
- Skape en trygg ramme for samtalen
- Sørge for at begge parter blir hørt
- Stille spørsmål som hjelper partene med å forstå hverandre
- Hjelpe partene med å identifisere felles interesser
- Lede frem mot en avtale begge kan akseptere

**Når er mediation aktuelt?**
- Partene klarer ikke å løse konflikten selv
- Konflikten påvirker arbeidsmiljøet negativt
- Det er viktig å bevare relasjonen
- Ledelsen ønsker en løsning uten å ta parti`,
    },
    {
      id: 'ol-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        task: 'Beskriv konflikttrappen med egne ord og forklar hvorfor det er viktig å gripe inn tidlig i en konflikt.',
        hints: ['Bruk gjerne et eksempel for å illustrere eskaleringen'],
        solution: 'Konflikttrappen viser hvordan en konflikt kan vokse fra saklig uenighet til åpen fiendtlighet. Den starter med en uenighet om en sak, men kan eskalere til at fokus flyttes til personen, gamle saker trekkes inn, partene slutter å snakke direkte, fiendebilder dannes, og i verste fall ender det med sabotasje eller at samarbeid er umulig. Det er viktig å gripe inn tidlig fordi: 1) På lavere trinn handler konflikten om sak og kan løses med dialog. 2) Jo høyere opp, desto mer følelsesstyrt og fastlåst blir konflikten. 3) På de øverste trinnene trengs ekstern hjelp (mediation), og noen ganger er relasjonen ødelagt. 4) Uløste konflikter smitter til arbeidsmiljøet og påvirker andre.',
      },
    },
    {
      id: 'ol-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'Gjør rede for de fem konfliktstilene i Thomas-Kilmann-modellen og gi et eksempel på når hver stil kan være hensiktsmessig.',
        solution: '1) Konkurrere - når det er akutt behov for handling, f.eks. en sikkerhetstrussel. 2) Tilpasse - når saken er viktigere for den andre, f.eks. gi en kollega valg av ferieuke fordi din er mer fleksibel. 3) Unngå - når saken er triviell, f.eks. ignorere uenighet om kaffetype på kontoret. 4) Kompromiss - når det er tidspress og jevnbyrdige parter, f.eks. to avdelinger deler et møterom etter turnus. 5) Samarbeide - når både saken og relasjonen er viktig, f.eks. to forretningspartnere utvikler en ny strategi sammen. Ingen stil er alltid riktig - det handler om å velge stilen som passer situasjonen.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'To medarbeidere i en avdeling har en pågående konflikt som påvirker hele arbeidsgruppen. Den ene mener den andre alltid tar æren for felles arbeid, mens den andre mener den første ikke bidrar nok. Som leder: analyser konflikten (type, nivå på trappen) og foreslå en plan for å løse den.',
        solution: 'Analyse: Konflikten har elementer av både sakskonflikt (uenighet om arbeidsfordeling) og relasjonskonflikt (opplevelse av manglende anerkjennelse og respekt). Den er trolig på trinn 3–4 i konflikttrappen fordi gamle saker trekkes inn og direkte kommunikasjon har blitt vanskelig. Plan: 1) Snakk med hver medarbeider individuelt for å forstå deres perspektiv. 2) Gjennomfør et felles møte med deg som mediator. La begge dele sin opplevelse uten avbrytelser. 3) Fokuser på fremtidige løsninger: Innfør tydelig dokumentasjon av hvem som gjør hva i felles prosjekter. 4) Avtal oppfølgingssamtale etter to uker for å sjekke om situasjonen har bedret seg. 5) Vurder om arbeidsfordelingen bør endres strukturelt.',
      },
    },
    {
      id: 'ol-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-6',
        number: '5.5.6',
        type: 'multiple-choice',
        task: 'Hva er mediatorens rolle i en konflikt?',
        options: [
          { id: 'a', text: 'Å bestemme hvem som har rett og feil', isCorrect: false },
          { id: 'b', text: 'Å lede samtalen og hjelpe partene med å finne en løsning selv', isCorrect: true },
          { id: 'c', text: 'Å straffe den som er skyld i konflikten', isCorrect: false },
          { id: 'd', text: 'Å tvinge partene til å inngå kompromiss', isCorrect: false },
        ],
        solution: 'Mediatoren er en nøytral tredjepart som leder samtalen, sørger for at begge parter blir hørt, og hjelper dem med å finne en løsning de begge kan akseptere. Mediatoren dømmer ikke og bestemmer ikke utfallet, men fasiliterer prosessen.',
      },
    },
    {
      id: 'ol-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-5-5-ex-7',
        number: '5.5.7',
        type: 'classic',
        task: 'Drøft påstanden: "Konflikter er alltid negativt for en organisasjon." Er du enig eller uenig? Begrunn svaret.',
        solution: 'Uenig. Konflikter kan ha både negative og positive utfall. Negative: Dårlig arbeidsmiljø, redusert produktivitet, sykefravær, høy turnover og ødelagte relasjoner. Positive: Konstruktive sakskonflikter kan føre til bedre beslutninger fordi ulike perspektiver utforskes, de kan fremme innovasjon og kreativitet, avdekke systemfeil som trenger å fikses, og styrke relasjoner når partene finner gode løsninger sammen. Nøkkelen ligger i håndteringen - konflikter som tas tak i tidlig og løses med dialog og gjensidig respekt kan være verdifulle. Konflikter som ignoreres eller eskalerer vil derimot nesten alltid være skadelige.',
      },
    },
    {
      id: 'ol-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Konflikter** kan være saks-, interesse-, verdi-, relasjons- eller strukturbaserte
- **Konflikttrappen** viser hvordan konflikter eskalerer fra uenighet til fiendtlighet
- **Thomas-Kilmann** beskriver fem konfliktstiler: konkurrere, tilpasse, unngå, kompromiss og samarbeide
- **Mediation** er en metode der en nøytral tredjepart hjelper partene med å finne løsninger

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sakskonflikt | Uenighet om fakta, mål eller metoder |
| Konflikttrappen | Modell som viser eskalering av konflikter trinn for trinn |
| Thomas-Kilmann | Modell med fem konfliktstiler basert på selvsikkerhet og samarbeidsvilje |
| Mediation | Konfliktløsning med nøytral tredjepart som leder prosessen |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_LEDELSE_DEL5_CHAPTERS = [
  CHAPTER_OKONOMI_LEDELSE_5_1,
  CHAPTER_OKONOMI_LEDELSE_5_2,
  CHAPTER_OKONOMI_LEDELSE_5_3,
  CHAPTER_OKONOMI_LEDELSE_5_4,
  CHAPTER_OKONOMI_LEDELSE_5_5,
];
